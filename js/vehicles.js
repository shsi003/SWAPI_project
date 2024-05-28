fetch(`https://swapi.py4e.com/api/vehicles`)
 .then(response => response.json())
 .then(data=> {
	const vehicleListContainer = document.getElementById(`vehicleList`)

	const imageUrls = {
		"Sand Crawler" :"../assets/images/vehicleList/SandCrawler.jpeg",
		"Snowspeeder" : "../assets/images/vehicleList/Snowspeeder.jpeg",
		"Sail barge" : "../assets/images/vehicleList/SailBarge.jpeg",
		"X-34 landspeeder" : "../assets/images/vehicleList/X-34_Landspeeder.jpeg",
		"T-16 skyhopper" : "../assets/images/vehicleList/T-16_Skyhopper.jpeg",
		"AT-AT" : "../assets/images/vehicleList/AT-AT.jpeg",
	
	
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
			<p>Model : ${vehicle.model}</p>
			<p>Manufactured by: ${vehicle.manufacturer}</p>
			<p>Price: ${vehicle.cost_in_credits} credits</p>
			<p>Passenger capacity: ${vehicle.passengers}</p>
			<p>Max speed: ${vehicle.max_atmosphering_speed} km/h</p>
			<p>Crew needed to operate: ${vehicle.crew}</p>
			<p>Cargo capacity: ${vehicle.cargo_capacity} units</p>
			<p>Vehicle class: ${vehicle.vehicle_class}</p>

			`;

	
            

			
			
				
			



			vehicleListContainer.appendChild(vehicleElement);
	})
})
.catch(error=> {
	console.error('Error fetching data', error)

});