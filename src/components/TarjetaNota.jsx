import { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";

function TarjetaNota({ index, note, onEdit, onDelete}) {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <li className="note">
                <div className="details">
                    <p>{note.tile}</p>
                    <span>{note.description}</span>
                </div>
                <div className="bottom-content">
                    <span>{note.date}</span>
                    <div className={`settings ${showMenu ? 'show' : ''}`}>
                        <div onClick={() => setShowMenu(!showMenu)}>
                            <FiMoreHorizontal style={{ cursor: 'hand' }} />
                        </div>
                        <ul className="menu">
                            <li onClick={ ()=>{onEdit(index); setShowMenu(false)} }><i className="uil uil-pen"/>Editar</li>
                            <li onClick={ ()=>{onDelete(index); setShowMenu(false)} }><i className="uil uil-trash"/>Borrar</li>
                        </ul>
                    </div>
                </div>
            </li>
        </>
    );
}

export default TarjetaNota;