/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Detail_ModsInputs */

const en_modpacks_detail_mods = /** @type {(inputs: Modpacks_Detail_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const es_modpacks_detail_mods = /** @type {(inputs: Modpacks_Detail_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const de_modpacks_detail_mods = /** @type {(inputs: Modpacks_Detail_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const fr_modpacks_detail_mods = /** @type {(inputs: Modpacks_Detail_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const it_modpacks_detail_mods = /** @type {(inputs: Modpacks_Detail_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const nl_modpacks_detail_mods = /** @type {(inputs: Modpacks_Detail_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const pl_modpacks_detail_mods = /** @type {(inputs: Modpacks_Detail_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody`)
};

const pt_modpacks_detail_mods = /** @type {(inputs: Modpacks_Detail_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const ru_modpacks_detail_mods = /** @type {(inputs: Modpacks_Detail_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды`)
};

const sv_modpacks_detail_mods = /** @type {(inputs: Modpacks_Detail_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar`)
};

const tr_modpacks_detail_mods = /** @type {(inputs: Modpacks_Detail_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar`)
};

const zh_modpacks_detail_mods = /** @type {(inputs: Modpacks_Detail_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组`)
};

const ja_modpacks_detail_mods = /** @type {(inputs: Modpacks_Detail_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

/**
* | output |
* | --- |
* | "Mods" |
*
* @param {Modpacks_Detail_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_detail_mods = /** @type {((inputs?: Modpacks_Detail_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Detail_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_detail_mods(inputs)
	if (locale === "de") return de_modpacks_detail_mods(inputs)
	if (locale === "fr") return fr_modpacks_detail_mods(inputs)
	if (locale === "it") return it_modpacks_detail_mods(inputs)
	if (locale === "nl") return nl_modpacks_detail_mods(inputs)
	if (locale === "pl") return pl_modpacks_detail_mods(inputs)
	if (locale === "pt") return pt_modpacks_detail_mods(inputs)
	if (locale === "ru") return ru_modpacks_detail_mods(inputs)
	if (locale === "sv") return sv_modpacks_detail_mods(inputs)
	if (locale === "tr") return tr_modpacks_detail_mods(inputs)
	if (locale === "zh") return zh_modpacks_detail_mods(inputs)
	if (locale === "ja") return ja_modpacks_detail_mods(inputs)
	return en_modpacks_detail_mods(inputs)
});
