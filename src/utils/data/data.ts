import { PokemonData } from "./interfaceDataGame.ts";
import {
  PokemonDataOrigin,
  PokemonDataFormOrigin,
} from "./interfaceDataGameOrigin";

/**
 * Main function to get data for all Pokemon in regional.json
 * @returns {Object[]} The array of formatted Pokemon data
 */
const getDataForAllPokemon = async (): Promise<PokemonData[]> => {
  try {
    const response = await fetch("data/dex/regional.json");
    const regionalData = await response.json();
    const allPokemonData: PokemonData[] = [];

    for (const creature of regionalData.creatures) {
      const pokemonName = creature.dbSymbol;
      const pokemonForm = creature.form;
      const formatedJSON: PokemonData = {} as PokemonData;
      const data: PokemonDataFormOrigin | undefined = await getPokemonJSON(
        pokemonName,
        pokemonForm,
        formatedJSON
      );

      if (!data) throw new Error("Data is undefined");

      fillJSON(formatedJSON, data);
      allPokemonData.push(formatedJSON);
    }

    console.log(allPokemonData);
    return allPokemonData;
  } catch (err) {
    console.error(err);
    return [];
  }
};

/**
 * Function to fill the formatted JSON with Pokemon data
 * @param {Object} formatedJson - The formatted JSON to fill
 * @param {Object} data - The Pokemon data
 */
const fillJSON = (formatedJson: PokemonData, data: PokemonDataFormOrigin) => {
  if (data) {
    putBaseStats(formatedJson, data);
    putCatch(formatedJson, data);
    putCharacteristics(formatedJson, data);
    putEvolutions(formatedJson, data);
    putEVs(formatedJson, data);
    putExperience(formatedJson, data);
    putType(formatedJson, data);
    putMoves(formatedJson, data);
    putResources(formatedJson, data);
    putAbilities(formatedJson, data);
    putBreeding(formatedJson, data);
  }
};

/**
 * Function to get Pokemon data from JSON
 * @param {string} pokemonName - The name of the Pokemon
 * @param {string} pokemonForm - The form of the Pokemon
 * @param {Object} formatedJson - The formatted JSON to fill
 * @returns {Object} The Pokemon data
 */
const getPokemonJSON = async (
  pokemonName: string,
  pokemonForm: number,
  formatedJson: PokemonData
) => {
  const url = `data/pokemon/${pokemonName}.json`;
  try {
    const response = await fetch(url);
    const data: PokemonDataOrigin = await response.json();
    formatedJson.dbSymbol = data.dbSymbol;
    formatedJson.id = data.id;
    return data.forms[pokemonForm];
  } catch (error) {
    console.error(error);
  }
};

/**
 * Function to add EVs to the formatted JSON
 * @param {PokemonData} formatedJson - The formatted JSON to fill
 * @param {PokemonDataFormOrigin} data - The Pokemon data
 */
const putEVs = (formatedJson: PokemonData, data: PokemonDataFormOrigin) => {
  formatedJson.evs = {
    evAtk: data.evAtk,
    evAts: data.evAts,
    evDfe: data.evDfe,
    evDfs: data.evDfs,
    evHp: data.evHp,
    evSpd: data.evSpd,
  };
};

/**
 * Function to add EVs to the formatted JSON
 * @param {PokemonData} formatedJson - The formatted JSON to fill
 * @param {PokemonDataFormOrigin} data - The Pokemon data
 */
const putType = (formatedJson: PokemonData, data: PokemonDataFormOrigin) => {
  formatedJson.types = { type1: data.type1, type2: data.type2 };
};

/**
 * Function to add EVs to the formatted JSON
 * @param {PokemonData} formatedJson - The formatted JSON to fill
 * @param {PokemonDataFormOrigin} data - The Pokemon data
 */
const putBaseStats = (
  formatedJson: PokemonData,
  data: PokemonDataFormOrigin
) => {
  formatedJson.baseStats = {
    baseHP: data.baseHp,
    baseAtk: data.baseAtk,
    baseDfe: data.baseDfe,
    baseSpd: data.baseSpd,
    baseAts: data.baseAts,
    baseDfs: data.baseDfs,
  };
};

/**
 * Function to add Characteristics to the formatted JSON
 * @param {PokemonData} formatedJson - The formatted JSON to fill
 * @param {PokemonDataFormOrigin} data - The Pokemon data
 */
const putCharacteristics = (
  formatedJson: PokemonData,
  data: PokemonDataFormOrigin
) => {
  formatedJson.characteristics = {
    height: data.height,
    weight: data.weight,
    form: data.form,
  };
};

/**
 * Function to add Move set to the formatted JSON
 * @param {PokemonData} formatedJson - The formatted JSON to fill
 * @param {PokemonDataFormOrigin} data - The Pokemon data
 */
const putMoves = (formatedJson: PokemonData, data: PokemonDataFormOrigin) => {
  formatedJson.moveSet = data.moveSet;
};

/**
 * Function to add Evolutions to the formatted JSON
 * @param {PokemonData} formatedJson - The formatted JSON to fill
 * @param {PokemonDataFormOrigin} data - The Pokemon data
 */
const putEvolutions = (
  formatedJson: PokemonData,
  data: PokemonDataFormOrigin
) => {
  formatedJson.evolutions = data.evolutions;
};

/**
 * Function to add Resources to the formatted JSON
 * @param {PokemonData} formatedJson - The formatted JSON to fill
 * @param {PokemonDataFormOrigin} data - The Pokemon data
 */
const putResources = (
  formatedJson: PokemonData,
  data: PokemonDataFormOrigin
) => {
  formatedJson.resources = {
    front: data.resources.front,
  };
};

/**
 * Function to add Experience information to the formatted JSON
 * @param {PokemonData} formatedJson - The formatted JSON to fill
 * @param {PokemonDataFormOrigin} data - The Pokemon data
 */
const putExperience = (
  formatedJson: PokemonData,
  data: PokemonDataFormOrigin
) => {
  formatedJson.experience = {
    experienceType: data.experienceType,
    baseExperience: data.baseExperience,
    baseLoyalty: data.baseLoyalty,
  };
};

/**
 * Function to add Catch information to the formatted JSON
 * @param {PokemonData} formatedJson - The formatted JSON to fill
 * @param {PokemonDataFormOrigin} data - The Pokemon data
 */
const putCatch = (formatedJson: PokemonData, data: PokemonDataFormOrigin) => {
  formatedJson.catch = {
    catchRate: data.catchRate,
    femaleRate: data.femaleRate,
    itemHeld: data.itemHeld,
  };
};

/**
 * Function to add Abilities to the formatted JSON
 * @param {PokemonData} formatedJson - The formatted JSON to fill
 * @param {PokemonDataFormOrigin} data - The Pokemon data
 */
const putAbilities = (
  formatedJson: PokemonData,
  data: PokemonDataFormOrigin
) => {
  formatedJson.abilities = data.abilities;
};

/**
 * Function to add Breeding information to the formatted JSON
 * @param {PokemonData} formatedJson - The formatted JSON to fill
 * @param {PokemonDataFormOrigin} data - The Pokemon data
 */
const putBreeding = (
  formatedJson: PokemonData,
  data: PokemonDataFormOrigin
) => {
  formatedJson.breeding = {
    breedGroups: data.breedGroups,
    hatchSteps: data.hatchSteps,
    babyDbSymbol: data.babyDbSymbol,
    babyForm: data.babyForm,
  };
};

export default getDataForAllPokemon;
