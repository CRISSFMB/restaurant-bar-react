import React from 'react';

export const ButtonModal = ({ config }) => {
  return (
    <button
      type={config.type}
      className={config.classConfig}
      data-bs-toggle={config.databstoggle}
      data-bs-target={config.databstarget}
    >
      {config.text}
    </button>
  );
};
