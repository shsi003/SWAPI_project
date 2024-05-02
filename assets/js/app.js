 fetchData();
 
 
 async function fetchData(){
	
	try{

		const response = await fetch (`https://swapi.py4e.com/api/`);

		if(!response.ok){
			throw new Error("could not fetch data");
		}

		const data = await response.json()
		console.log(data);
	}
	catch(error){
		console.log(error);
	}
}


showFetchData();
async function showFetchData(){
	try{

		const response = await fetch (`https://swapi.py4e.com/api/vehicles`);

		if(!response.ok){
			throw new Error("could not fetch data");
		}

		const data = await response.json()
		console.log(data.results);
	}
	catch(error){
		console.log(error);
	}
	
}

/*fetch(`https://swapi.py4e.com/api/`)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.log(error))*/