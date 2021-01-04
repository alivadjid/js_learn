import {model} from './model';

import './styles/main.css';
import { Site } from './classes/site'
import { Sidebar } from './classes/sidebar';

const site = new Site('#site');

site.render(model)

const updsateCallback = newBlock => {
	model.push(newBlock)
	site.render(model)
}

new Sidebar('#panel', updsateCallback)