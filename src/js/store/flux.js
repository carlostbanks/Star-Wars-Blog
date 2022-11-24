const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: [],

	
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
			},

			//FUNCTION TO ADD HEART CLICKS TO FAVORITES LIST
			addToFavorites: (name) => {
				const newFav = { name: name}
				setStore({favorites: getStore().favorites.concat(newFav)})
			},

			//DELETE ITEM FROM FAVORITES
			deleteFromFavorites: (name) => {
				const delFav = getStore().favorites.filter((fav) => fav.name !== name)
				setStore({favorites: delFav})
			}
			
			
		}
	};
};

export default getState;
