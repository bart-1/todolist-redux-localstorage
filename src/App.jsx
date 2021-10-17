import React from 'react';

import InputSection from './components/InputSection';
import { Provider } from 'react-redux';
import store from './store/store';
import './styles/App.css';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        to-do-list
        <InputSection />
      </div>
    </Provider>
  )
}

export default App
