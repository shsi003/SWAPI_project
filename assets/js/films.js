fetch(`https://swapi.py4e.com/api/films`)
.then(response => response.json())
.then (data=> {
	const filmListContainer = document.getElementById(`filmList`)

	const imageUrls = {
		"Tatooine" : "../images/planetsList/Tatooine.jpeg",
		"Dagobah" : "../images/planetsList/Dagobah.jpeg",
		"Naboo" : "../images/planetsList/Naboo.jpeg",
		"Coruscant" : "../images/planetsList/Coruscant.jpeg",
		"Endor" : "../images//planetsList/Endor.jpeg",
		"Hoth" : "../images/planetsList/Hoth.jpeg",
	};

	const selectedFilmNames = [
		"A New Hope", "The Empire Strikes Back", "Return of the Jedi",
		"The Phantom Menace", "Attack of the Clones", "Revenge of the Sith"
	];

	const selectedFilms = data.results.filter(planet => selectedFilmNames.includes(film.title));

	selectedFilms.forEach(film => {

		const filmElement = document.createElement(`div`);
			filmElement.innerHTML = `
			<h2>${film.title}</h2>
			<img src="${imageUrls[film.title]}" alt="${film.name}"></img>
			
        
			`
		;

		filmListContainer.appendChild(filmElement);

	})


})
.catch(error=> {
	console.error('error fetching data')
});