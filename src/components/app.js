import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from "./displayForm";
import Display from "./display";

const App = () => {
  return (
    <div className="container container-fluid">
      <Form />
      <Display />
    </div>
  );
};

export default App
