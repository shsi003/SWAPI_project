fetch(`https://swapi.py4e.com/api/films`)
.then(response => response.json())
.then (data=> {
	const filmListContainer = document.getElementById(`filmList`)

	const imageUrls = {
		"A New Hope" : "../assets/images/filmList/ANewHope.jpeg",
		"The Empire Strikes Back" : "../assets/images/filmList/TheEmpireStrikesBack.jpeg",
		"Return of the Jedi" : "../assets/images/filmList/ReturnoftheJedi.jpeg",
		"The Phantom Menace" : "../assets/images/filmList/ThePhantomMenace.jpeg",
		"Attack of the Clones" : "../assets/images//filmList/attackoftheClones.jpeg",
		"Revenge of the Sith" : "../assets/images/filmList/RevengeoftheSith.jpeg",
	};

	const selectedFilmNames = [
		"A New Hope", "The Empire Strikes Back", "Return of the Jedi",
		"The Phantom Menace", "Attack of the Clones", "Revenge of the Sith"
	];

	const selectedFilms = data.results.filter(film => selectedFilmNames.includes(film.title));

	selectedFilms.forEach(film => {

		const filmElement = document.createElement(`div`);
			filmElement.innerHTML = `
			<h2>${film.title}</h2>
			<img src="${imageUrls[film.title]}" alt="${film.name}"></img>
			<p>Directed by ${film.director}</p>
			<p>Release date: ${film.release_date}</p>
			<p>Synopsis: ${film.opening_crawl}</p>
			<p>Produced by ${film.producer}</p>
			
        
			`
		;

	
	



		filmListContainer.appendChild(filmElement);

	})


})
.catch(error=> {
	console.error('error fetching data')
});