import React from 'react';

import MyContext from './context/MyContext';
import Main from './componentes/Main';

function App() {

  return (
    <MyContext.Provider >
      <Main />
    </MyContext.Provider>
  );
}

export default App;
