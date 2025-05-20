const styles = {
  overlay: {
    position: 'fixed' as const,
    bottom: 16,
    right: 16,
    background: 'rgba(25, 25, 36, 0.98)',
    color: '#e0e6ed',
    padding: 18,
    fontSize: 14,
    borderRadius: 12,
    zIndex: 10000,
    minWidth: 340,
    maxWidth: 380,
    boxShadow: '0 8px 36px 4px #0008',
    fontFamily: 'system-ui, monospace',
    maxHeight: '55vh',
    overflowY: 'auto',
    border: '1px solid #334155'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  card: {
    background: '#222436',
    borderRadius: 8,
    padding: '12px 16px',
    marginBottom: 10,
    boxShadow: '0 2px 6px #0005',
    border: '1px solid #334155'
  },
  title: { fontWeight: 700, marginBottom: 4, fontSize: 15 },
  statLine: { marginBottom: 2, fontSize: 13 },
  aiBtn: (enabled: boolean) => ({
    background: enabled ? '#2563eb' : '#64748b',
    color: '#fff',
    border: 0,
    borderRadius: 5,
    padding: '4px 14px',
    fontSize: 13,
    cursor: enabled ? 'pointer' : 'not-allowed',
    opacity: enabled ? 1 : 0.65,
    marginTop: 8
  }),
  resetBtn: {
    background: '#475569',
    color: '#fff',
    border: 0,
    borderRadius: 5,
    padding: '3px 10px',
    fontSize: 12,
    marginLeft: 8,
    cursor: 'pointer'
  },
  minimizedBtn: {
    background: '#1e293b',
    color: '#fff',
    border: 0,
    borderRadius: 8,
    padding: '6px 18px',
    fontSize: 16,
    boxShadow: '0 2px 16px #0004',
    cursor: 'pointer',
    position: 'fixed' as const,
    bottom: 16,
    right: 16,
    zIndex: 10001
  },
  empty: { color: '#94a3b8', fontSize: 13, textAlign: 'center', marginTop: 30 },
  toast: {
    position: 'fixed' as const,
    bottom: 90,
    right: 30,
    minWidth: 220,
    background: '#334155',
    color: '#fff',
    borderRadius: 8,
    padding: '12px 18px',
    fontSize: 14,
    boxShadow: '0 4px 18px #0006',
    zIndex: 20000,
    animation: 'fadeInOut 4s'
  },
};

export default styles; 