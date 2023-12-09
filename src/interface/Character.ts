export type CharacterType = {
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  species: string;
  type: string;
  url: string;
  status: CharacterStatusType;
};

export type CharacterStatusType = "" | "Alive" | "Dead" | "Unknown";