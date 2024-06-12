interface Evs {
  evAtk: number;
  evAts: number;
  evDfe: number;
  evDfs: number;
  evHp: number;
  evSpd: number;
}

interface Types {
  type1: string;
  type2: string;
}

interface BaseStats {
  baseHP: number;
  baseAtk: number;
  baseDfe: number;
  baseSpd: number;
  baseAts: number;
  baseDfs: number;
}

interface Characteristics {
  height: number;
  weight: number;
  form: number;
}

interface Resources {
  front: string;
}

interface Experience {
  experienceType: number;
  baseExperience: number;
  baseLoyalty: number;
}

interface ItemHeld {
  dbSymbol: string;
  chance: number;
}

interface Catch {
  catchRate: number;
  femaleRate: number;
  itemHeld: ItemHeld[];
}

interface Breeding {
  breedGroups: number[];
  hatchSteps: number;
  babyDbSymbol: string;
  babyForm: number;
}

interface MoveSet {
  klass: string;
  move: string;
  level?: number;
}

interface Evolution {
  dbSymbol: string;
  form: number;
  conditions: Condition[];
}

interface Condition {
  type: string;
  value: number;
}

export interface PokemonData {
  id: number;
  dbSymbol: string;
  evs: Evs;
  types: Types;
  baseStats: BaseStats;
  characteristics: Characteristics;
  resources: Resources;
  evolutions: Evolution[];
  experience: Experience;
  catch: Catch;
  breeding: Breeding;
  moveSet: MoveSet[];
  abilities: string[];
}
