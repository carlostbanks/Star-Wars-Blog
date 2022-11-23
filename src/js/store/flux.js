const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],


	
		},

		actions: {
			//GET REQUEST FOR PEOPLE
			getPeople: () => {
				fetch('https://swapi.dev/api/people/')
				.then(data => data.json())
				.then(res => setStore({people: res.results}))
			},

			//GET REQUEST FOR PLANETS
			getPlanets: () => {
				fetch('https://swapi.dev/api/planets/')
				.then(data => data.json())
				.then(res => setStore({planets: res.results}))
			}
			
			
		}
	};
};

export default getState;
