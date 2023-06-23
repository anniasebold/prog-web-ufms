import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [tarefas, setTarefas] = useState([
    "Pagar conta de Luz",
    "Estudar React",
    "Aula"
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("tarefas");

    if(tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [ tarefas ]);

  function handleAdd() {
    setTarefas([...tarefas, input]);
    setInput("");
  }


  return (
    <div className="App">
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

      <input 
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type='button' onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
