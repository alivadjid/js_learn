import { block } from '../util'
import { TextBlock, TitleBlock } from './blocks'

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
		event.preventDefault()

		console.log(event.target)
		const type = event.target.name
		const value = event.target.value.value
		const styles = event.target.styles.value

		const newBlock = type === 'text'
		? new TextBlock(value, { styles})
		: new TitleBlock(value, { styles })



		if(type === 'text') {
			newBlock = new TextBlock(value, { styles })
		} else {
			newBlock = new TitleBlock(value, { styles })
		}

		console.log(newBlock)
	}

}



