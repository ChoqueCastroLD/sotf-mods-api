/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Multiplayer_All_PlayersInputs */

const en_explore_multiplayer_all_players = /** @type {(inputs: Explore_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everyone needs it`)
};

const es_explore_multiplayer_all_players = /** @type {(inputs: Explore_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo necesitan todos`)
};

const de_explore_multiplayer_all_players = /** @type {(inputs: Explore_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle brauchen sie`)
};

const fr_explore_multiplayer_all_players = /** @type {(inputs: Explore_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout le monde en a besoin`)
};

const it_explore_multiplayer_all_players = /** @type {(inputs: Explore_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serve a tutti`)
};

const nl_explore_multiplayer_all_players = /** @type {(inputs: Explore_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iedereen heeft hem nodig`)
};

const pl_explore_multiplayer_all_players = /** @type {(inputs: Explore_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potrzebują go wszyscy`)
};

const pt_explore_multiplayer_all_players = /** @type {(inputs: Explore_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos precisam`)
};

const ru_explore_multiplayer_all_players = /** @type {(inputs: Explore_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нужен всем`)
};

const sv_explore_multiplayer_all_players = /** @type {(inputs: Explore_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla behöver den`)
};

const tr_explore_multiplayer_all_players = /** @type {(inputs: Explore_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkesin kurması gerekir`)
};

const zh_explore_multiplayer_all_players = /** @type {(inputs: Explore_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有人都需安装`)
};

const ja_explore_multiplayer_all_players = /** @type {(inputs: Explore_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全員の導入が必要`)
};

/**
* | output |
* | --- |
* | "Everyone needs it" |
*
* @param {Explore_Multiplayer_All_PlayersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_multiplayer_all_players = /** @type {((inputs?: Explore_Multiplayer_All_PlayersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Multiplayer_All_PlayersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_multiplayer_all_players(inputs)
	if (locale === "de") return de_explore_multiplayer_all_players(inputs)
	if (locale === "fr") return fr_explore_multiplayer_all_players(inputs)
	if (locale === "it") return it_explore_multiplayer_all_players(inputs)
	if (locale === "nl") return nl_explore_multiplayer_all_players(inputs)
	if (locale === "pl") return pl_explore_multiplayer_all_players(inputs)
	if (locale === "pt") return pt_explore_multiplayer_all_players(inputs)
	if (locale === "ru") return ru_explore_multiplayer_all_players(inputs)
	if (locale === "sv") return sv_explore_multiplayer_all_players(inputs)
	if (locale === "tr") return tr_explore_multiplayer_all_players(inputs)
	if (locale === "zh") return zh_explore_multiplayer_all_players(inputs)
	if (locale === "ja") return ja_explore_multiplayer_all_players(inputs)
	return en_explore_multiplayer_all_players(inputs)
});
