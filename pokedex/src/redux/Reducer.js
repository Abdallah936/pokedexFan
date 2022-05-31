const initialData = {
  favorites: [],
};
const pokeReducer = (state = initialData, action) => {
  switch (action.type) {
    case "toggle_fav":
      let pokemon = action.payload;
      let pokeFromFav = state.favorites.find(
        (favPokemon) => pokemon.id === favPokemon.id
      );
      return {
        ...state,
        favorites: pokeFromFav
          ? [
              ...state.favorites.filter(
                (pokemon) => pokemon.id !== pokeFromFav.id
              ),
            ]
          : [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};
export default pokeReducer;
