/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Multiplayer_All_PlayersInputs */

const en_upload_multiplayer_all_players = /** @type {(inputs: Upload_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everyone needs it`)
};

const es_upload_multiplayer_all_players = /** @type {(inputs: Upload_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo necesitan todos`)
};

const de_upload_multiplayer_all_players = /** @type {(inputs: Upload_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle brauchen ihn`)
};

const fr_upload_multiplayer_all_players = /** @type {(inputs: Upload_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout le monde en a besoin`)
};

const it_upload_multiplayer_all_players = /** @type {(inputs: Upload_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serve a tutti`)
};

const nl_upload_multiplayer_all_players = /** @type {(inputs: Upload_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iedereen heeft hem nodig`)
};

const pl_upload_multiplayer_all_players = /** @type {(inputs: Upload_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potrzebują go wszyscy`)
};

const pt_upload_multiplayer_all_players = /** @type {(inputs: Upload_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos precisam`)
};

const ru_upload_multiplayer_all_players = /** @type {(inputs: Upload_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нужен всем`)
};

const sv_upload_multiplayer_all_players = /** @type {(inputs: Upload_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla behöver den`)
};

const tr_upload_multiplayer_all_players = /** @type {(inputs: Upload_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkesin ihtiyacı var`)
};

const zh_upload_multiplayer_all_players = /** @type {(inputs: Upload_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有人都需要`)
};

const ja_upload_multiplayer_all_players = /** @type {(inputs: Upload_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全員が必要`)
};

/**
* | output |
* | --- |
* | "Everyone needs it" |
*
* @param {Upload_Multiplayer_All_PlayersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_multiplayer_all_players = /** @type {((inputs?: Upload_Multiplayer_All_PlayersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Multiplayer_All_PlayersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_multiplayer_all_players(inputs)
	if (locale === "de") return de_upload_multiplayer_all_players(inputs)
	if (locale === "fr") return fr_upload_multiplayer_all_players(inputs)
	if (locale === "it") return it_upload_multiplayer_all_players(inputs)
	if (locale === "nl") return nl_upload_multiplayer_all_players(inputs)
	if (locale === "pl") return pl_upload_multiplayer_all_players(inputs)
	if (locale === "pt") return pt_upload_multiplayer_all_players(inputs)
	if (locale === "ru") return ru_upload_multiplayer_all_players(inputs)
	if (locale === "sv") return sv_upload_multiplayer_all_players(inputs)
	if (locale === "tr") return tr_upload_multiplayer_all_players(inputs)
	if (locale === "zh") return zh_upload_multiplayer_all_players(inputs)
	if (locale === "ja") return ja_upload_multiplayer_all_players(inputs)
	return en_upload_multiplayer_all_players(inputs)
});
