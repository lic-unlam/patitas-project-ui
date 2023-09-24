import React, { useEffect, useCallback } from "react";

const Modal = (props) => {
    const { ocultarModal } = props;

    useEffect(() => {
        const modalPopup = document.getElementById('modal_popup');
        modalPopup.addEventListener('hidden.bs.modal', () => ocultarModal('')); // cuando elijo 'No' en el modal

        return () => modalPopup.removeEventListener('hidden.bs.modal', () => ocultarModal(''));
    }, [ocultarModal]);
    
    const confirmarModal = useCallback((event) => { // acá llamo a la API a través de la función que recibe como prop
        var modal = bootstrap.Modal.getInstance(document.querySelector("#modal_popup"));
        modal.hide();
        ocultarModal('');
    }, [ocultarModal]);

    return (
        <form>
            <div className="modal fade" id="modal_popup" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalPopup" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.title}</h5>
                        </div>
                        <div className="modal-body">
                            {props.element}
                        </div>
                        <div className="modal-footer">
                            <button id="aceptar" type="submit" className="btn btn-success me-2" onClick={confirmarModal}>Confirmar</button>
                            <button id="cancelar" type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Modal;