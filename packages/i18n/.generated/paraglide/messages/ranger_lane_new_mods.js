/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Lane_New_ModsInputs */

const en_ranger_lane_new_mods = /** @type {(inputs: Ranger_Lane_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New mods`)
};

const es_ranger_lane_new_mods = /** @type {(inputs: Ranger_Lane_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods nuevos`)
};

const de_ranger_lane_new_mods = /** @type {(inputs: Ranger_Lane_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Mods`)
};

const fr_ranger_lane_new_mods = /** @type {(inputs: Ranger_Lane_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveaux mods`)
};

const it_ranger_lane_new_mods = /** @type {(inputs: Ranger_Lane_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuove mod`)
};

const nl_ranger_lane_new_mods = /** @type {(inputs: Ranger_Lane_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe mods`)
};

const pl_ranger_lane_new_mods = /** @type {(inputs: Ranger_Lane_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe mody`)
};

const pt_ranger_lane_new_mods = /** @type {(inputs: Ranger_Lane_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods novos`)
};

const ru_ranger_lane_new_mods = /** @type {(inputs: Ranger_Lane_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые моды`)
};

const sv_ranger_lane_new_mods = /** @type {(inputs: Ranger_Lane_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nya moddar`)
};

const tr_ranger_lane_new_mods = /** @type {(inputs: Ranger_Lane_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni modlar`)
};

const zh_ranger_lane_new_mods = /** @type {(inputs: Ranger_Lane_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新模组`)
};

const ja_ranger_lane_new_mods = /** @type {(inputs: Ranger_Lane_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいMOD`)
};

/**
* | output |
* | --- |
* | "New mods" |
*
* @param {Ranger_Lane_New_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lane_new_mods = /** @type {((inputs?: Ranger_Lane_New_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_New_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lane_new_mods(inputs)
	if (locale === "de") return de_ranger_lane_new_mods(inputs)
	if (locale === "fr") return fr_ranger_lane_new_mods(inputs)
	if (locale === "it") return it_ranger_lane_new_mods(inputs)
	if (locale === "nl") return nl_ranger_lane_new_mods(inputs)
	if (locale === "pl") return pl_ranger_lane_new_mods(inputs)
	if (locale === "pt") return pt_ranger_lane_new_mods(inputs)
	if (locale === "ru") return ru_ranger_lane_new_mods(inputs)
	if (locale === "sv") return sv_ranger_lane_new_mods(inputs)
	if (locale === "tr") return tr_ranger_lane_new_mods(inputs)
	if (locale === "zh") return zh_ranger_lane_new_mods(inputs)
	if (locale === "ja") return ja_ranger_lane_new_mods(inputs)
	return en_ranger_lane_new_mods(inputs)
});
