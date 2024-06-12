interface Move {
  klass: string;
  move: string;
  level?: number;
}

interface Evolution {
  dbSymbol: string;
  form: number;
  conditions: Array<{ type: string; value: number }>;
}

interface ItemHeld {
  dbSymbol: string;
  chance: number;
}

interface Resources {
  icon: string;
  iconShiny: string;
  front: string;
  frontShiny: string;
  back: string;
  backShiny: string;
  footprint: string;
  character: string;
  characterShiny: string;
  cry: string;
  hasFemale: boolean;
}

export interface PokemonDataFormOrigin {
  form: number;
  height: number;
  weight: number;
  type1: string;
  type2: string;
  baseHp: number;
  baseAtk: number;
  baseDfe: number;
  baseSpd: number;
  baseAts: number;
  baseDfs: number;
  evHp: number;
  evAtk: number;
  evDfe: number;
  evSpd: number;
  evAts: number;
  evDfs: number;
  evolutions: Evolution[];
  experienceType: number;
  baseExperience: number;
  baseLoyalty: number;
  catchRate: number;
  femaleRate: number;
  breedGroups: number[];
  hatchSteps: number;
  babyDbSymbol: string;
  babyForm: number;
  itemHeld: ItemHeld[];
  abilities: string[];
  frontOffsetY: number;
  moveSet: Move[];
  resources: Resources;
}

export interface PokemonDataOrigin {
  klass: string;
  id: number;
  dbSymbol: string;
  forms: PokemonDataFormOrigin[];
}
