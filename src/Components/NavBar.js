import React, { useState } from 'react';
import CartWidget from './CartWidget';

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <nav>
      <div className="logo">Mi Tienda</div>
      <div className="cart" onClick={handleShow}>
        <CartWidget />
        <span className="cart-counter">0</span>
      </div>
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Carrito de Compras</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">-Listado de productos
                {/* Contenido del carrito de compras */}
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleClose}>
                  Cerrar
                </button>
                <button className="btn btn-primary">Guardar Cambios</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;