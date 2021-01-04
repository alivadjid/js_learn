import image from './assets/image.png' 
//import {Block} from './classes/blocks' 
import { TitleBlock, TextBlock, ImageBlock, ColumnsBlock } from './classes/blocks'

const text = `
	Крутые уроки
`

 export const model = [
	 new TitleBlock('Конструктор сайтов на чистом Javascript', {
		tag: 'h2',
		styles: {
			background: 'linear-gradient(to right, #ff0099, #493240)',
			color: '#fff',
			'text-align': 'center',
			padding: '1.5rem'
		}
	 }),
	 new ImageBlock(image, {
		styles: {
			padding: '2rem 0',
			display: 'flex',
			'justify-content': 'center'
		},
		imageStyles: {
			width: '500px',
			height: 'auto'
		},
		alt: 'Это картинка'
	 }),

	 new ColumnsBlock(['Приложение на чистом JS, без использования библиотек',
	 'Узнаешь как работают принципы SOLID и ООП в JS за один курс',
	 'JS - это просто, интересно. Научись создавать любые UI своими руками',
	 '4444444'], {
		styles: {
			background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
			padding: '2rem',
			color: '#fff',
			'font-weight':'bold'
		}
	 }),
	 new TextBlock(text, {
		styles: {
			background: 'linear-gradient(to left, #f2994a, #f2c94c)',
			padding: '1rem',
			'font-weight':'bolc'
		}
	 })
]