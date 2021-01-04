import { col, row, css } from '../util'
 
class Block {
	constructor(value, options) {
		this.value = value
		this.options = options
	}
toHTML(){
	throw new Error('Метод toHTML должен быть реализован')
}
}


export class TitleBlock extends Block {
	constructor(value, options){
		super(value, options)//вызов конструктора
	}

	toHTML(){
		const { tag = 'h1', styles } = this.options
		return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
	}
}

export class ImageBlock extends Block {
	constructor(value, options){
		super(value, options)//вызов конструктора
	}
	toHTML(){
		const { imageStyles: is, alt = '', styles } = this.options
		return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}"/>`, css(styles))
	}
}

export class ColumnsBlock extends Block {
	constructor(value, options){
		super(value, options)//вызов конструктора
	}
	toHTML(){
		const html = this.value.map(col).join('');
		return row(html, css(this.options.styles));	
	}
}
export class TextBlock extends Block {
	constructor(value, options){
		super(value, options)//вызов конструктора
	}
	toHTML(){
		const { styles } = this.options
		return row(col(`${this.value}`), css(styles));
	}
}