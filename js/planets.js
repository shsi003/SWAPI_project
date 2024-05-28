fetch(`https://swapi.py4e.com/api/planets`)
.then(response => response.json())
.then (data=> {
	const planetListContainer = document.getElementById(`planetList`)

	const imageUrls = {
		"Tatooine" : "../assets/images/planetsList/Tatooine.jpeg",
		"Dagobah" : "../assets/images/planetsList/Dagobah.jpeg",
		"Naboo" : "../assets/images/planetsList/Naboo.jpeg",
		"Coruscant" : "../assets/images/planetsList/Coruscant.jpeg",
		"Endor" : "../assets/images//planetsList/Endor.jpeg",
		"Hoth" : "../assets/images/planetsList/Hoth.jpeg",
	};

	const selectedPlanetNames = [
		"Tatooine", "Dagobah", "Naboo",
		"Coruscant", "Endor", "Hoth"
	];

	const selectedPlanets = data.results.filter(planet => selectedPlanetNames.includes(planet.name));

	selectedPlanets.forEach(planet => {

		const planetElement = document.createElement(`div`);
			planetElement.innerHTML = `
			<h2>${planet.name}</h2>
			<img src="${imageUrls[planet.name]}" alt="${planet.name}"></img>
			<p> Climate: ${planet.climate}</p>
			<p>Gravity: ${planet.gravity}</p>
			<p>Population: ${planet.population}</p>
			<p>Terrain: ${planet.terrain}</p>
			<p>Diameter: ${planet.diameter}</p>
        
			`
		;

		planetListContainer.appendChild(planetElement);

	})


})
.catch(error=> {
	console.error('error fetching data')
});