import { NextRequest, NextResponse } from 'next/server';
import { getAuthUrl, getAuthenticatedClient, saveToken } from '@/lib/google-auth';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const secret = searchParams.get('secret');

    try {
        if (code) {
            await saveToken(code);
            return new NextResponse('Token saved.', { status: 200 });
        } else if (secret === 'secret') {
            const authUrl = getAuthUrl();
            return NextResponse.redirect(authUrl);
        } else {
            try {
                await getAuthenticatedClient();
                return new NextResponse('Token verified and refreshed if needed.', { status: 200 });
            } catch (error: any) {
                return new NextResponse(`Authentication Error: ${error.message}`, { status: 400 });
            }
        }
    } catch (error: any) {
        console.error('OAuth Error:', error);
        return new NextResponse(`Internal OAuth error: ${error.message}`, { status: 500 });
    }
}
