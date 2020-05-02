import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store'
import MyRouter from './components/common/MyRouter'
import {

  Route,
} from 'react-router-dom'
import router from './router'
class App extends React.Component {
  render() {
    return (
      <div className={"App"}>
        <MyRouter router={router}></MyRouter>

      </div>

    )
  }
  componentDidMount() {
    // console.log(store.getState())
  }
}

export default App;
