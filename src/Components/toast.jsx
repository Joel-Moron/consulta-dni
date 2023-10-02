import React, { useEffect } from 'react';

const Toast = ({titulo, message = "¡Mensaje de éxito!", show, onClose, error, success }) => {
  useEffect(() => {
    // Cierra automáticamente el toast después de 3 segundos
    const timeout = setTimeout(() => {
      onClose();
    }, 3000);

    // Limpia el timeout si el componente se desmonta antes
    return () => clearTimeout(timeout);
  }, [show, onClose]);

  return (
    <div className={`toast ${show ? 'show' : '' } ${success ? 'toast-success' : '' } ${error ? 'toast-error' : '' }`}>
      <div className="toast-content">
      <div style={{width:'100%', justifyContent:'space-between', display:'flex'}}>
        <p>{titulo}</p>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        </div>
        
        <div style={{width:'100%'}}>
            {message}
        </div>
        
      </div>
    </div>
  );
};

export default Toast;
