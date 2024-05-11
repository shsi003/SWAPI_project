fetch(`https://swapi.py4e.com/api/planets`)
.then(response => response.json())
.then (data=> {
	const planetListContainer = document.getElementById(`planetList`)

	const imageUrls = {
		"Tatooine" : "../images/planetsList/Tatooine.jpeg",
		"Dagobah" : "../images/planetsList/Dagobah.jpeg",
		"Naboo" : "../images/planetsList/Naboo.jpeg",
		"Coruscant" : "../images/planetsList/Coruscant.jpeg",
		"Endor" : "../images//planetsList/Endor.jpeg",
		"Hoth" : "../images/planetsList/Hoth.jpeg",
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