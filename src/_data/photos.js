const axios = require('axios');

module.exports = async function() {
	let photos = await axios.get('https://jsonplaceholder.typicode.com/photos')
	
	return photos.data
}