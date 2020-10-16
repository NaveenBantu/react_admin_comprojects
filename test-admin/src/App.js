// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import ProjectList from "./components/ProjectList";
import dataProvider from './dataProvider'

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="projects" list={ProjectList}></Resource>
  </Admin>
)

export default App;
