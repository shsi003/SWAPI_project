fetch(`https://swapi.py4e.com/api/people`)
.then(response => response.json())
.then(data => {
	const characterListContainer = document.getElementById('characterList')

	const imageUrls = {
		"Luke Skywalker" : "../../images/characterImages/LukeSkywalker.jpeg",
		"Darth Vader" : "../../images/characterImages/darthVader.jpeg",
		"Leia Organa" : "../../images/characterImages/LeiaOrgana.jpeg",
		"R2-D2" : "../../images/characterImages/R2D2.jpeg",
		"Obi-Wan Kenobi" : "../../images/characterImages/ObiWanKenobi.jpeg",
		"C-3PO" : "../../images/characterImages/C-3PO.jpeg"
	};

	const selectedCharacterNames = [
		"Luke Skywalker", "Darth Vader", "Leia Organa", 
		"R2-D2", "Obi-Wan Kenobi", "C-3PO"];

	const selectedCharacters = data.results.filter(character => selectedCharacterNames.includes(character.name));


	selectedCharacters.forEach(character => {

		
		const characterElement = document.createElement('div');
            characterElement.innerHTML = `
                <h2>${character.name}</h2>
				<img src="${imageUrls[character.name]}" alt="${character.name}"></img>
                <p>height: ${character.height}</p>
				<p>gender: ${character.gender}</P>
				<p>eye color: ${character.eye_color}</p>
				<p>date of birth: ${character.birth_year}</p>
				<p>hair: ${character.hair_color}</p>
				
				
				`;
				characterListContainer.appendChild(characterElement);


			

				
	});
})
.catch(error=> {
	console.error('Error fetching data')

});


	

	