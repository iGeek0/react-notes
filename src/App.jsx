import './App.css'
import { FiPlus } from "react-icons/fi";
import Modal from './components/Modal';
import { useEffect, useState } from 'react';
import TarjetaNota from './components/TarjetaNota';
import toast from 'react-hot-toast';
function App() {

  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes") || "[]"));
  const [editNote, setEditNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    setEditNote(null);
    setShowModal(true);
  }

  const handleSubmit = (data) => {
    data.date = new Date().toLocaleDateString();
    setNotes([...notes, data]);
    toast.success('Nota agregada');
  };


  const handleEdit = (index) => {
    console.log("editando");
    console.log(index);
    setEditNote(notes[index]);
    setShowModal(true);
  }

  const handleDelete = (index) => {
    console.log("eliminando");
    console.log(index);
    setNotes(notes.filter((note, i) => i !== index));
  }

  return (
    <>
      <section>
        <h1>Notas v.1.0</h1>

        <Modal
          txtTile={ editNote ? "Editar nota" : "Agregar nota"}
          txtButton={ editNote ? "Editar" : "Agregar"}
          show={showModal}
          onShowmodal={setShowModal}
          onFormSuibit={handleSubmit}
          formData={editNote}
        />

        <div className="wrapper">
          <li className="add-box" onClick={addNote}>
            <div className="icon">
              <FiPlus />
            </div>
            <p>Agregar nueva nota</p>
          </li>
          {
            notes.map((note, index) => {
              return (
                <TarjetaNota
                  key={index}
                  note={note}
                  index={index}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              )
            })

          }
        </div>
      </section>
    </>
  )
}

export default App
