/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Red_Steam_IdsInputs */

const en_logs_red_steam_ids = /** @type {(inputs: Logs_Red_Steam_IdsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam IDs`)
};

const es_logs_red_steam_ids = /** @type {(inputs: Logs_Red_Steam_IdsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam ID`)
};

const de_logs_red_steam_ids = /** @type {(inputs: Logs_Red_Steam_IdsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam-IDs`)
};

const fr_logs_red_steam_ids = /** @type {(inputs: Logs_Red_Steam_IdsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identifiants Steam`)
};

const it_logs_red_steam_ids = /** @type {(inputs: Logs_Red_Steam_IdsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID Steam`)
};

const nl_logs_red_steam_ids = /** @type {(inputs: Logs_Red_Steam_IdsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam-ID’s`)
};

const pl_logs_red_steam_ids = /** @type {(inputs: Logs_Red_Steam_IdsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identyfikatory Steam`)
};

const pt_logs_red_steam_ids = /** @type {(inputs: Logs_Red_Steam_IdsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IDs Steam`)
};

const ru_logs_red_steam_ids = /** @type {(inputs: Logs_Red_Steam_IdsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam ID`)
};

const sv_logs_red_steam_ids = /** @type {(inputs: Logs_Red_Steam_IdsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam-ID`)
};

const tr_logs_red_steam_ids = /** @type {(inputs: Logs_Red_Steam_IdsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam kimlikleri`)
};

const zh_logs_red_steam_ids = /** @type {(inputs: Logs_Red_Steam_IdsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam ID`)
};

const ja_logs_red_steam_ids = /** @type {(inputs: Logs_Red_Steam_IdsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam ID`)
};

/**
* | output |
* | --- |
* | "Steam IDs" |
*
* @param {Logs_Red_Steam_IdsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_red_steam_ids = /** @type {((inputs?: Logs_Red_Steam_IdsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Red_Steam_IdsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_red_steam_ids(inputs)
	if (locale === "de") return de_logs_red_steam_ids(inputs)
	if (locale === "fr") return fr_logs_red_steam_ids(inputs)
	if (locale === "it") return it_logs_red_steam_ids(inputs)
	if (locale === "nl") return nl_logs_red_steam_ids(inputs)
	if (locale === "pl") return pl_logs_red_steam_ids(inputs)
	if (locale === "pt") return pt_logs_red_steam_ids(inputs)
	if (locale === "ru") return ru_logs_red_steam_ids(inputs)
	if (locale === "sv") return sv_logs_red_steam_ids(inputs)
	if (locale === "tr") return tr_logs_red_steam_ids(inputs)
	if (locale === "zh") return zh_logs_red_steam_ids(inputs)
	if (locale === "ja") return ja_logs_red_steam_ids(inputs)
	return en_logs_red_steam_ids(inputs)
});
