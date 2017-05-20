import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from "./displayForm";
import Display from "./display";
import Actor from './displayActor';
import { Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="container container-fluid">
      <h2> TV MAZE simple demo using react router 4.0</h2>
      <Form />
      <Display />
    </div>
  );
};

export default App
