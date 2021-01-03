import {model} from './model';
//import {title, text, columns, image} from './templates'; //3. замена ф-ий на один объекта
import { templates } from './templates';
import './styles/main.css';


const $site = document.querySelector('#site'); //переменная из DOM эл-ты
console.log($site);

//console.log(templates['title']({value: 'text'}))// вызов ф-ии
// const key = 'title';
// console.log(templates[key]({value: 'key'}))

model.forEach(block => {
	//console.log(block);
	//let html = '';

	/*
	if(block.type === 'title') {
		// 1. переносим текст в ф-ию
		html = title(block)
		/*
		html = `
			<div class="row">
				<div class="col-sm">
					<h1>${block.value}</h1>					
				</div>
			</div>
		`		
		*/
	/*	
	} else if (block.type === 'text') {
		// 1. то же самое 
		html = text(block);
	} else if (block.type === 'columns') {
		//1. и здесь.
		html = columns(block);
	} else if (block.type === 'image') {
		html = image(block);
	}
	*/

	const toHTML = templates[block.type];
	// проверка если вообще определена ф-ия
	if(toHTML) {
		$site.insertAdjacentHTML('beforeend', toHTML(block))
	}
	//$site.insertAdjacentHTML('beforeend', html)
	//$site.insertAdjacentHTML('beforeend', toHTML(block)) //переносим в if
})


//2. Все функции переносим в templates.js