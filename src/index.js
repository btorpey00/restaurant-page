import './style.css';
import createHeader from './pages/header.js';
import createHome from './pages/home.js';

document.body.appendChild(createHeader());

document.body.appendChild(createHome());