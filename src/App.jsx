import React from 'react';

import InputSection from './components/InputSection';
import { Provider } from 'react-redux';
import store from './store/store';
import './styles/App.css';
import ToDoList from './components/ToDoList';
import DoneTasksList from './components/DoneTasksList';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <div className="input-section">
          <InputSection />
        </div>
        <div className="tables-section">
          <ToDoList />
          <DoneTasksList />
        </div>
      </div>
    </Provider>
  )
}

export default App
