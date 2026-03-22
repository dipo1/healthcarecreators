import { OAuth2Client } from 'google-auth-library';
import fs from 'fs/promises';
import path from 'path';

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;
const TOKEN_PATH = process.env.GOOGLE_TOKEN_PATH || path.join(process.cwd(), 'google-token.json');

export const createOAuth2Client = () => {
    if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
        throw new Error('Google OAuth credentials are missing in environment variables.');
    }

    return new OAuth2Client(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
    );
};

export const getAuthUrl = () => {
    const client = createOAuth2Client();
    return client.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: ['https://www.googleapis.com/auth/gmail.send']
    });
};

export const saveToken = async (code: string) => {
    const client = createOAuth2Client();
    const { tokens } = await client.getToken(code);
    
    // If we have an existing token but the new response doesn't have a refresh_token,
    // preserve the old refresh_token as per the PHP logic.
    try {
        const existingTokenContent = await fs.readFile(TOKEN_PATH, 'utf8');
        const existingToken = JSON.parse(existingTokenContent);
        if (!tokens.refresh_token && existingToken.refresh_token) {
            tokens.refresh_token = existingToken.refresh_token;
        }
    } catch (e) {
        // No existing token, that's fine.
    }

    await fs.writeFile(TOKEN_PATH, JSON.stringify(tokens, null, 2));
    return tokens;
};

export const getAuthenticatedClient = async () => {
    const client = createOAuth2Client();
    
    try {
        const tokenContent = await fs.readFile(TOKEN_PATH, 'utf8');
        const tokens = JSON.parse(tokenContent);
        
        if (tokens.error) {
            throw new Error(`Invalid token: (${tokens.error}) ${tokens.error_description || ''}`);
        }

        client.setCredentials(tokens);

        // Check for expiration
        const expiryDate = tokens.expiry_date || 0;
        const isExpired = expiryDate <= Date.now();

        if (isExpired && tokens.refresh_token) {
            const { credentials } = await client.refreshAccessToken();
            
            // Re-merge with existing tokens to preserve refresh_token if not returned
            const updatedTokens = {
                ...tokens,
                ...credentials
            };

            await fs.writeFile(TOKEN_PATH, JSON.stringify(updatedTokens, null, 2));
            client.setCredentials(updatedTokens);
        } else if (isExpired && !tokens.refresh_token) {
             throw new Error('Access token expired and no refresh token available.');
        }

        return client;
    } catch (error) {
        if ((error as any).code === 'ENOENT') {
            throw new Error('Token file not found. Please authenticate first.');
        }
        throw error;
    }
};

