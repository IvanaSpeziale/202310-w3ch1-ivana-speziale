import './css/style.css';
import { characters } from './characters';

const appElement = document.querySelector<HTMLDivElement>('#app');

if (appElement === null) throw new Error('Critical Error.');

console.log(characters);

appElement.innerHTML = characters[0].phrase();
