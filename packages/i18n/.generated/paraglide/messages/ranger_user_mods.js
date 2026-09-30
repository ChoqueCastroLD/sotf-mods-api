/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_ModsInputs */

const en_ranger_user_mods = /** @type {(inputs: Ranger_User_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const es_ranger_user_mods = /** @type {(inputs: Ranger_User_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const de_ranger_user_mods = /** @type {(inputs: Ranger_User_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const fr_ranger_user_mods = /** @type {(inputs: Ranger_User_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const it_ranger_user_mods = /** @type {(inputs: Ranger_User_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const nl_ranger_user_mods = /** @type {(inputs: Ranger_User_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const pl_ranger_user_mods = /** @type {(inputs: Ranger_User_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody`)
};

const pt_ranger_user_mods = /** @type {(inputs: Ranger_User_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const ru_ranger_user_mods = /** @type {(inputs: Ranger_User_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды`)
};

const sv_ranger_user_mods = /** @type {(inputs: Ranger_User_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar`)
};

const tr_ranger_user_mods = /** @type {(inputs: Ranger_User_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar`)
};

const zh_ranger_user_mods = /** @type {(inputs: Ranger_User_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组`)
};

const ja_ranger_user_mods = /** @type {(inputs: Ranger_User_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD`)
};

/**
* | output |
* | --- |
* | "Mods" |
*
* @param {Ranger_User_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_mods = /** @type {((inputs?: Ranger_User_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_mods(inputs)
	if (locale === "de") return de_ranger_user_mods(inputs)
	if (locale === "fr") return fr_ranger_user_mods(inputs)
	if (locale === "it") return it_ranger_user_mods(inputs)
	if (locale === "nl") return nl_ranger_user_mods(inputs)
	if (locale === "pl") return pl_ranger_user_mods(inputs)
	if (locale === "pt") return pt_ranger_user_mods(inputs)
	if (locale === "ru") return ru_ranger_user_mods(inputs)
	if (locale === "sv") return sv_ranger_user_mods(inputs)
	if (locale === "tr") return tr_ranger_user_mods(inputs)
	if (locale === "zh") return zh_ranger_user_mods(inputs)
	if (locale === "ja") return ja_ranger_user_mods(inputs)
	return en_ranger_user_mods(inputs)
});
