import React, { useState } from 'react';

import MyContext from './context/MyContext';
import Main from './componentes/Main';

function App() {

  const [ tarefas, setTarefas ] = useState([
    {id: 1, title: "Fazer tela de login", done: false},
    {id: 2, title: "Criar sistema de autenticacao na api", done: false},
    {id: 3, title: "Criar crud com JSON", done: false}
  ])

  return (
    <MyContext.Provider value={{
      tarefas, setTarefas
    }}>
      <Main />
    </MyContext.Provider>
  );
}

export default App;
