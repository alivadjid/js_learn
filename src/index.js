import {model} from './model';
//import { templates } from './templates';
import './styles/main.css';


const $site = document.querySelector('#site');
console.log($site);
model.forEach(block => {
		$site.insertAdjacentHTML('beforeend', block.toHTML())
	
})