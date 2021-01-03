//4. Вспомогательные ф-ии
import { row, col } from './util';

// 3. Не экспортируем консанты
//export function title(block){
	//4. Переписываем ф-ии 
	function title(block) {
		return row(col(`<h1>${block.value}</h1>`))
	}
	// 4.
/*	
function title(block){	
	return `
			<div class="row">
				<div class="col-sm">
					<h1>${block.value}</h1>					
				</div>
			</div>
		`
		
}
*/

//export function text(block){
	function text(block){
		return row(col(`${block.value}`));
	}
	// 4.
/*
	return `
			<div class="row">
				<div class="col-sm">					
					<p>${block.value}</p>
				</div>
			</div>
		`
}*/

//export function columns(block){
	function columns(block){
		// 4.
	//const html = block.value.map(item=>`<div class="col-sm">${item}</div>`)
	//const html = block.value.map(item => col(item)) //можно переписать \|/
	//const html = block.value.map(col) //просто перепишем
	const html = block.value.map(col).join('');
	//return row(html.join(''));
	return row(html);
	/*
	return `
		<div class="row">
			${html.join('')}
		</div>
	`
	*/
	/*
		 return `
		 		<div class="row">
		 			${
		 				block.value.map(item => {
		 					console.log(item)
		 					return `
		 					<div class="col-sm">
		 						${item}
		 					</div>	
		 					`
		 				}).join('')
		 			}
		 		</div>
			`
	*/
}

//export function image(block) {
	function image(block) {
		return row(`<img src="${block.value}" />`)
	/*
	return `
		<div class="row">
			<img src="${block.value}" />
		</div>
	`
	*/
}

//3. А экспорт объекта 
export const templates = {
	title, // title: title
	text, // text: text
	image, // image: image
	columns // columns: columns
}