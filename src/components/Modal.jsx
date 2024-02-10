

import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

function Modal({ onShowmodal, onFormSuibit, formData, txtTile, txtButton, show}) {

    const [formulario, setFormulario] = useState({
        title: '',
        description: ''
    });

    useEffect(() => {
        if (formData) {
            setFormulario(formData);
        }
    }, [formData]);

    const handleInputChange = (event) => {
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = (event) => {
        if (formulario.tile.trim() === '' || formulario.description.trim() === '') {
            alert('Todos los campos son obligatorios');
            return;
        }
        event.preventDefault();
        onFormSuibit(formulario);
        onShowmodal(false);
        setFormulario({
            tile: '',
            description: ''
        });
    };

    return (
        <>
            {/* <div className="popup-box"> */}
            <div className={`popup-box ${show ? 'show' : ''}`}>
                <div className="popup">
                    <div className="content">
                        <header>
                            <p>
                                {txtTile}
                            </p>
                            {/* <i className="uil uil-times" /> */}
                            <FiX style={{ cursor: 'hand' }} onClick={() => onShowmodal(false)} />
                        </header>
                        <form onSubmit={handleSubmit}>
                            <div className="row title">
                                <label>Titulo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="tile"
                                    name='tile'
                                    value={formulario.tile}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="row description">
                                <label>Descripcion</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name='description'
                                    value={formulario.description}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button type="submit">
                                {txtButton}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;