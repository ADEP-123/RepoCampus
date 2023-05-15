
const general = 'https://youtube138.p.rapidapi.com/search/?q='
const extra = + '&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'adaad128aemsh6cfb78feb6e838dp15a6d2jsn85a17c09c579',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


let nombre = "miguel";


console.log(`https://youtube138.p.rapidapi.com/search/?q=${nombre}`);