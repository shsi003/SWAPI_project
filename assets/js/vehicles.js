fetch(`https://swapi.py4e.com/api/vehicles`)
 .then(response => response.json())
 .then(data=> {
	const vehicleListContainer = document.getElementById(`vehicleList`)

	const imageUrls = {
		"Sand Crawler" :"../images/vehicleList/SandCrawler.jpeg",
		"Snowspeeder" : "../images/vehicleList/Snowspeeder.jpeg",
		"Sail barge" : "../images/vehicleList/SailBarge.jpeg",
		"X-34 landspeeder" : "../images/vehicleList/X-34_Landspeeder.jpeg",
		"T-16 skyhopper" : "../images/vehicleList/T-16_Skyhopper.jpeg",
		"AT-AT" : "../images/vehicleList/AT-AT.jpeg",
	
	
	};

	const selectedVehicleNames = [
		"Sand Crawler", "Snowspeeder", "Sail barge",
		"X-34 landspeeder", "T-16 skyhopper", "AT-AT"
	];

	const selectedVehicles = data.results.filter(vehicle => selectedVehicleNames.includes(vehicle.name));

	selectedVehicles.forEach(vehicle => {


		const vehicleElement = document.createElement('div');
			vehicleElement.innerHTML = `
			<h2>${vehicle.name}</h2>
			<img src="${imageUrls[vehicle.name]}" alt="${vehicle.name}"></img>
			<p>model : ${vehicle.model}</p>
			<p>manufactured by: ${vehicle.manufacturer}</p>
			<p>price: ${vehicle.cost_in_credits}</p>
			<p>passenger capacity: ${vehicle.passengers}</p>
			<p>max speed: ${vehicle.max_atmosphering_speed}</p>
			<p>crew needed to operate: ${vehicle.crew}</p>
			<p>cargo capacity: ${vehicle.cargo_capacity}</p>

			`;
			vehicleListContainer.appendChild(vehicleElement);
	})

 })
 .catch(error => {
	console.error('Error fetching data')
 });