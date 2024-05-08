fetch(`https://swapi.py4e.com/api/planets`)
.then(response => response.json())
.then (data=> {
	const planetListContainer = document.getElementById(`planetList`)

	const imageUrls = {
		"Tatooine" : "../images/planetList/Tatooine.jpeg",
		"Dagobah" : "../images/planetList/Dagobah.jpeg",
		"Naboo" : "../images/planetList/Naboo.jpeg",
		"Coruscant" : "../images/planetList/Coruscant.jpeg",
		"Endor" : "../images//planetList/Endor.jpeg",
		"Hoth" : "../images/plametList/Hoth.jpeg",
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
			<p> climate: ${planet.climate}</p>
			<p>gravity: ${planet.gravity}</p>
			<p>population: ${planet.population}</p>
			<p>terrain: ${planet.terrain}</p>
			<p>diameter: ${planet.diameter}</p>
        
			`
		;

		planetListContainer.appendChild(planetElement);

	})


})
.catch(error=> {
	console.error('error fetching data')
});