import React from 'react';
import './style.css';
import ComponentA from './ComponentA';

export default function App() {

    const name="this is a  react project"
  return (
    <div>
     <ComponentA name={name}/>
    </div>
  );
}
