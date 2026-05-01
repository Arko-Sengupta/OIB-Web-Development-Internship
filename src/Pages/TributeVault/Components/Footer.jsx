import React from 'react'

const Footer = ({ footerText }) => (
  <footer style={{
    textAlign:      'center',
    padding:        '28px 24px',
    borderTop:      '1px solid rgba(255,255,255,0.06)',
    color:          'var(--text-3)',
    fontSize:       '12px',
    fontFamily:     "'Inter', sans-serif",
    letterSpacing:  '0.08em',
    textTransform:  'uppercase',
  }}>
    {footerText}
  </footer>
)

export default Footer