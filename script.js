const textInput = document.getElementById('text-input')
const imgInput = document.getElementById('meme-insert')
const memeText = document.getElementById('meme-text')
const meme = document.getElementById('meme-image-container')
const fire = document.getElementById('fire')
const water = document.getElementById('water')
const earth = document.getElementById('earth')
const imagens = document.getElementById('images')
const button = document.getElementsByTagName('button')
const img = document.getElementById('meme-image')

imagens.addEventListener('click', chooseImg)
textInput.addEventListener('input', addText)

addEventListener('click', border)

function addText(event){
	memeText.innerHTML = textInput.value
	
}

	var loadFile = function(event){
		img.src = URL.createObjectURL(event.target.files[0])
		img.onload = function(){

		}
	}

function border(event){
	if(event.target === button[0]){
		meme.style.border = '3px dashed red'
	}
	else if(event.target === button[1]){
		meme.style.border = '5px double blue'
	}
	else{
		meme.style.border = '6px groove green'
	}
}

function chooseImg(event){
	if(event.target === imagens.children[0]){
		console.log(images.children[0])
		img.src = 'imgs/meme1.png'

	}
	else if(event.target === imagens.children[1]){
		img.src = '/imgs/meme2.png'

	}
	else if(event.target === imagens.children[2]){
		img.src = 'imgs/meme3.png'

	}
	else{
		img.src = 'imgs/meme4.png'

	}
}