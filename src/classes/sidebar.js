import { block } from '../util'

export class Sidebar{
	constructor(selector){
		this.$el = document.querySelector(selector)
		this.init()
		
	}

	init(){
		this.$el.insertAdjacentHTML('afterbegin', this.template)
		this.$el.addEventListener('submit', this.add)
	}

	get template(){
		return [
			block('text'),
			block('title')
		].join('')
	}

	add(event){
		event.preventDefault();
	}

}



