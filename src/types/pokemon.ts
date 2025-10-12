export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  baseExperience: number;
}

export interface PokemonWithImage extends Pokemon {
  image: string;
}

