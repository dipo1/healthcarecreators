'use client';

import { useState, useMemo, useEffect } from 'react';
import './admin.css';

interface Submission {
  type: 'brand' | 'creator' | 'professional';
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  timestamp: string;
  qualification?: string;
  primaryPlatform?: string;
  primaryFollowers?: string;
  primaryHandle?: string;
  [key: string]: any;
}

export default function WaitlistClient({ data, adminPassword }: { data: Submission[]; adminPassword: string }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Search and Filter State
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all');
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  // Modal State
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);

  useEffect(() => {
    const authStatus = sessionStorage.getItem('hcc_admin_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (password === adminPassword) {
      sessionStorage.setItem('hcc_admin_auth', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch = 
        `${item.firstName} ${item.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.role.toLowerCase().includes(search.toLowerCase());
      
      const matchesType = filterType === 'all' || item.type === filterType;
      
      return matchesSearch && matchesType;
    });
  }, [data, search, filterType]);

  const totalPages = Math.ceil(filteredData.length / limit);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * limit;
    return filteredData.slice(start, start + limit);
  }, [filteredData, currentPage, limit]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filterType, limit]);

  const handleExport = () => {
    const headers = [
      'Type', 'First Name', 'Last Name', 'Email', 'Role', 
      'Primary Platform', 'Primary Followers', 'Primary Handle',
      'Secondary Platform', 'Secondary Followers', 'Secondary Handle',
      'Reason', 'Qualification', 'Timestamp'
    ];
    
    const csvContent = [
      headers.join(','),
      ...filteredData.map(item => [
        item.type,
        `"${item.firstName || ''}"`,
        `"${item.lastName || ''}"`,
        item.email,
        item.role,
        item.primaryPlatform || '-',
        item.primaryFollowers || '-',
        item.primaryHandle || '-',
        item.secondaryPlatform || '-',
        item.secondaryFollowers || '-',
        item.secondaryHandle || '-',
        `"${(item.reason || '').replace(/"/g, '""')}"`,
        item.qualification || '-',
        new Date(item.timestamp).toLocaleString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `waitlist_export_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  const formatKey = (key: string) => {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
  };

  if (!isAuthenticated) {
    return (
      <div className="auth-overlay">
        <form className="auth-card" onSubmit={handleLogin}>
          <h1>Admin Access</h1>
          <p>Please enter the administrative password to view the waitlist.</p>
          <input
            type="password"
            className="auth-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          <button type="submit" className="auth-button">Unlock Page</button>
          {error && <p className="error-text">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <div className="admin-title-section">
          <h1>Waitlist Submissions</h1>
          <p>Manage and export your healthcare brand, creator and professional waitlist data.</p>
        </div>
        <div className="action-buttons">
          <button className="action-btn btn-print" onClick={handlePrint}>
            <span>Print List</span>
          </button>
          <button className="action-btn btn-export" onClick={handleExport}>
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      <div className="admin-controls">
        <div className="search-filter-group">
          <input
            type="text"
            className="search-input"
            placeholder="Search by name, email or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select 
            className="filter-select"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="brand">Brands</option>
            <option value="creator">Creators</option>
            <option value="professional">Professionals</option>
          </select>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Joined</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, idx) => (
                <tr key={idx}>
                  <td data-label="Type">
                    <span className={`type-badge badge-${item.type}`}>
                      {item.type}
                    </span>
                  </td>
                  <td data-label="Name">{item.firstName} {item.lastName}</td>
                  <td data-label="Email">{item.email}</td>
                  <td data-label="Role">{item.role}</td>
                  <td data-label="Date">{new Date(item.timestamp).toLocaleDateString()}</td>
                  <td style={{ textAlign: 'right' }}>
                    <button 
                      className="view-btn"
                      onClick={() => setSelectedSubmission(item)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
                  No submissions found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination-area">
        <div className="pagination-info">
          Showing <strong>{(currentPage - 1) * limit + 1}</strong> to <strong>{Math.min(currentPage * limit, filteredData.length)}</strong> of <strong>{filteredData.length}</strong> submissions
        </div>
        
        <div className="pagination-controls">
          <button 
            className="page-btn" 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
          >
            Previous
          </button>
          
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            if (totalPages > 7 && (page > 2 && page < totalPages - 1 && Math.abs(page - currentPage) > 1)) {
              if (page === 3 || page === totalPages - 2) return <span key={page}>...</span>;
              return null;
            }
            return (
              <button
                key={page}
                className={`page-btn ${currentPage === page ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            );
          })}

          <button 
            className="page-btn" 
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            Next
          </button>

          <select 
            className="limit-select"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
          >
            <option value={10}>10 per page</option>
            <option value={25}>25 per page</option>
            <option value={50}>50 per page</option>
            <option value={100}>100 per page</option>
          </select>
        </div>
      </div>

      {/* Details Modal */}
      {selectedSubmission && (
        <div className="modal-overlay" onClick={() => setSelectedSubmission(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Submission Details</h2>
              <button className="close-btn" onClick={() => setSelectedSubmission(null)}>&times;</button>
            </div>
            <div className="modal-body">
              <div className="details-grid">
                {Object.entries(selectedSubmission).map(([key, value]) => {
                  if (key === 'timestamp') return (
                    <div className="detail-item" key={key}>
                      <span className="detail-label">Submitted On</span>
                      <span className="detail-value">{new Date(value).toLocaleString()}</span>
                    </div>
                  );
                  return (
                    <div className="detail-item" key={key}>
                      <span className="detail-label">{formatKey(key)}</span>
                      <span className="detail-value">{value?.toString() || '-'}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hidden Printable List */}
      <div className="print-only-container">
        <div className="print-header">
          <h1>Waitlist Submissions Report</h1>
          <p>Generated on {new Date().toLocaleString()}</p>
          <div className="print-stats">
            Total Submissions: {filteredData.length} | 
            Filtered Type: {filterType.toUpperCase()}
          </div>
        </div>
        
        <div className="print-list">
          {filteredData.map((item, idx) => (
            <div key={idx} className="print-item">
              <div className="print-item-header">
                <h3>{item.firstName} {item.lastName}</h3>
                <span className={`print-badge ${item.type}`}>{item.type.toUpperCase()}</span>
              </div>
              <div className="print-details-grid">
                {Object.entries(item).map(([key, value]) => (
                  <div key={key} className="print-detail">
                    <span className="print-label">{formatKey(key)}:</span>
                    <span className="print-value">
                      {key === 'timestamp' 
                        ? new Date(value).toLocaleString() 
                        : (value?.toString() || '-')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
