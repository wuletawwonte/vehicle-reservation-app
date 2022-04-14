import './style.css';
import {loadVehicles, loadCarCount} from './modules/displaycars.js';

window.onload = () => {
  loadVehicles();
  loadCarCount();
}