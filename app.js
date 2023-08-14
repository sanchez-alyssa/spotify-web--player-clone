import { album1, album2 } from './data.js'

function getAlbumArray() {
	let albumHtml = ''
	album1.forEach(function (data) {
		let { img, title, about } = data
		albumHtml += `
        <div class="song-container">
            <img src="${img}" class="song-picture"/>
            <h3>${title}</h3>
            <small>${about}</small>
        </div>`
	})
	return albumHtml
}
function getAlbum2() {
	return getAlbumArray()
}

function renderAlbum() {
	document.querySelector('.hits-container').innerHTML = getAlbumArray()
	document.querySelector('.focus').innerHTML = getAlbum2()
}
renderAlbum()
