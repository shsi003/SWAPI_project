fetch(`https://swapi.py4e.com/api/people`)
.then(response => response.json())
.then(data => {
	const characterListContainer = document.getElementById('characterList')

	const imageUrls = {
		"Luke Skywalker" : "../images/characterList/LukeSkywalker.jpeg",
		"Darth Vader" : "../images/characterList/darthVader.jpeg",
		"Leia Organa" : "../images/characterList/LeiaOrgana.jpeg",
		"R2-D2" : "../images/characterList/R2D2.jpeg",
		"Obi-Wan Kenobi" : "../images/characterList/ObiWanKenobi.jpeg",
		"C-3PO" : "../images/characterList/C-3PO.jpeg"
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
                <p>Height: ${character.height}</p>
				<p>Gender: ${character.gender}</P>
				<p>Eye color: ${character.eye_color}</p>
				<p>Date of birth: ${character.birth_year}</p>
				<p>Hair: ${character.hair_color}</p>
				
				
				`;

			if (character.films.length > 0) {

				const filmTitles = character.films.map(filmLink => {
					return fetch (filmLink)
					.then(response => response.json())
					.then(filmData => filmData.title)
					.catch(error => {
						console.error('Error fetching film data:', error);
						return '';
					});
				});

			Promise.all(filmTitles)
			.then(titles => {
				const appearsInParagraph = document.createElement('p');
				appearsInParagraph.textContent = 'Appears in:'
				characterElement.appendChild(appearsInParagraph);

				const filmList = document.createElement('ul');
				titles.forEach(title => {
					const filmItem = document.createElement('li');
					filmItem.textContent = title;
					filmList.appendChild(filmItem); 
				})
				characterElement.appendChild(filmList);
			})	
			}

		

			

			




				characterListContainer.appendChild(characterElement);


			

	})	
		
})
.catch(error=> {
	console.error('Error fetching data', error)

});


	

	