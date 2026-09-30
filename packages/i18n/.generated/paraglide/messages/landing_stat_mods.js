/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Stat_ModsInputs */

const en_landing_stat_mods = /** @type {(inputs: Landing_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const es_landing_stat_mods = /** @type {(inputs: Landing_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const de_landing_stat_mods = /** @type {(inputs: Landing_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const fr_landing_stat_mods = /** @type {(inputs: Landing_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const it_landing_stat_mods = /** @type {(inputs: Landing_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const nl_landing_stat_mods = /** @type {(inputs: Landing_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const pl_landing_stat_mods = /** @type {(inputs: Landing_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody`)
};

const pt_landing_stat_mods = /** @type {(inputs: Landing_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const ru_landing_stat_mods = /** @type {(inputs: Landing_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды`)
};

const sv_landing_stat_mods = /** @type {(inputs: Landing_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar`)
};

const tr_landing_stat_mods = /** @type {(inputs: Landing_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const zh_landing_stat_mods = /** @type {(inputs: Landing_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组`)
};

const ja_landing_stat_mods = /** @type {(inputs: Landing_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD`)
};

/**
* | output |
* | --- |
* | "Mods" |
*
* @param {Landing_Stat_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_stat_mods = /** @type {((inputs?: Landing_Stat_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Stat_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_stat_mods(inputs)
	if (locale === "de") return de_landing_stat_mods(inputs)
	if (locale === "fr") return fr_landing_stat_mods(inputs)
	if (locale === "it") return it_landing_stat_mods(inputs)
	if (locale === "nl") return nl_landing_stat_mods(inputs)
	if (locale === "pl") return pl_landing_stat_mods(inputs)
	if (locale === "pt") return pt_landing_stat_mods(inputs)
	if (locale === "ru") return ru_landing_stat_mods(inputs)
	if (locale === "sv") return sv_landing_stat_mods(inputs)
	if (locale === "tr") return tr_landing_stat_mods(inputs)
	if (locale === "zh") return zh_landing_stat_mods(inputs)
	if (locale === "ja") return ja_landing_stat_mods(inputs)
	return en_landing_stat_mods(inputs)
});
