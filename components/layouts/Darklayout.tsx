import React, { FunctionComponent, ReactNode } from 'react'

interface DarklayoutProps {
  children?: ReactNode;
}

const Darklayout: FunctionComponent<DarklayoutProps> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0,0,0,0.3)',
      borderRadius: '5px',
      padding: '10px',
    }}>
      <h3>Dark-layout</h3>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Darklayout