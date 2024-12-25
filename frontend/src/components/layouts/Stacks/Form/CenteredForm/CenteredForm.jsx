import React from 'react';

const CenteredForm = ({children, ...props}) => {
  return (
    <div className={`fixed z-50 inset-0 flex items-center justify-center bg-black-def bg-opacity-50 `}>
      <div className={`${props.className} bg-white p-8 rounded-lg shadow-lg max-w-sm w-full`}>
        {children}
      </div>
    </div>
  );
};

export default CenteredForm;
