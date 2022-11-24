import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const favList = store.favorites.map((fav) => {
	return (
		<div>
		<li key={fav.name}>
			{fav.name}
		</li>
		<button
		onClick={() => actions.deleteFromFavorites(fav.name)}
		>
			X
		</button>
		</div>

	)
})

  return (
    <nav className="navbar navbar-light bg-light mb-3 mx-5">
      <Link to="/">Home</Link>
      <Link to="/people">People</Link>
      <Link to="/planets">Planets</Link>
      <Link to="/vehicles">Vehicles</Link>

      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
		  <div className="mx-2 bg-warning rounded">
			{store.favorites.length}
		  </div>

        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
		  {favList}
          </li>
        </ul>
      </div>
    </nav>
  );
};
