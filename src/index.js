import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-bootstrap';
import Menu from './Menu'

// FIRST WAY TO USE REACT
// ReactDOM.render(
//     <Main />,
//     document.getElementById('root')
// );

// SECOND WAY TO USE REACT
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Container>
        <Menu></Menu>
    </Container>
);