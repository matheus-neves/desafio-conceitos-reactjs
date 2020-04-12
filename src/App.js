import React, { useState, useEffect } from "react";
import api from './services/api';

import GlobalStyles from "./styles.js";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {

    api.get('repositories').then(response => {
      setRepositories(response.data);
    })

  }, []);

  async function handleAddRepository() {

    const repository = { 
      title: `Desafio ${Date.now()}`, 
      url: "https://github.com/matheus-neves/desafio-conceitos-node",
      techs: ["Node.js", "React Native", "ReactJS"]
    }

    const response = await api.post('repositories', repository);

    setRepositories([...repositories, response.data]);

  }

  async function handleRemoveRepository(id) {

    try {

      await api.delete(`repositories/${id}`);
      setRepositories(
        repositories.filter(repository => repository.id !== id)
      );

    } catch (error) {
      alert(`Erro ao remover o repositório: ${error}`);
    }

  }

  return (
    <>
      <GlobalStyles />
      <ul data-testid="repository-list">
        {
          repositories.map( repository => (
            <li key={repository.id}>
              <a href={repository.url} target="noopener noreferrer">{repository.title}</a>
              <button onClick={() => handleRemoveRepository(repository.id)}>
                Remover
              </button>
            </li>
          ))
        }
      </ul>
      <button onClick={handleAddRepository}>Adicionar</button>
    </>
  );
}

export default App;
