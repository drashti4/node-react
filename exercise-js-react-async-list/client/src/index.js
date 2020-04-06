import React from 'react';
import ReactDOM from 'react-dom';
import ViewUserComponent from "./components/ViewUserComponent";
import AddUserComponent from "./components/AddUserComponent";

ReactDOM.render(
  <React.StrictMode>
    <ViewUserComponent />
    <AddUserComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

