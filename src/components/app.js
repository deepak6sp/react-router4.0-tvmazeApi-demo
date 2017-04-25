import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from "./displayForm";
import MessagesBlock from "./displayMessagesBlock";

const App = () => {
  return (
    <div className="container container-fluid">
      <MessagesBlock />
      <Form />
    </div>
  );
};

export default App
