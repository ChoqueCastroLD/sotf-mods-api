/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_List_TitleInputs */

const en_kits_list_title = /** @type {(inputs: Kits_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest mod kits`)
};

const es_kits_list_title = /** @type {(inputs: Kits_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits de mods de Sons of the Forest`)
};

const de_kits_list_title = /** @type {(inputs: Kits_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Kits für Sons of the Forest`)
};

const fr_kits_list_title = /** @type {(inputs: Kits_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits de mods pour Sons of the Forest`)
};

const it_kits_list_title = /** @type {(inputs: Kits_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit di mod per Sons of the Forest`)
};

const nl_kits_list_title = /** @type {(inputs: Kits_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modkits voor Sons of the Forest`)
};

const pl_kits_list_title = /** @type {(inputs: Kits_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zestawy modów do Sons of the Forest`)
};

const pt_kits_list_title = /** @type {(inputs: Kits_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits de mods de Sons of the Forest`)
};

const ru_kits_list_title = /** @type {(inputs: Kits_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Наборы модов для Sons of the Forest`)
};

const sv_kits_list_title = /** @type {(inputs: Kits_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddkit för Sons of the Forest`)
};

const tr_kits_list_title = /** @type {(inputs: Kits_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest mod kitleri`)
};

const zh_kits_list_title = /** @type {(inputs: Kits_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest 模组套装`)
};

const ja_kits_list_title = /** @type {(inputs: Kits_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest の MOD キット`)
};

/**
* | output |
* | --- |
* | "Sons of the Forest mod kits" |
*
* @param {Kits_List_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_list_title = /** @type {((inputs?: Kits_List_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_List_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_list_title(inputs)
	if (locale === "de") return de_kits_list_title(inputs)
	if (locale === "fr") return fr_kits_list_title(inputs)
	if (locale === "it") return it_kits_list_title(inputs)
	if (locale === "nl") return nl_kits_list_title(inputs)
	if (locale === "pl") return pl_kits_list_title(inputs)
	if (locale === "pt") return pt_kits_list_title(inputs)
	if (locale === "ru") return ru_kits_list_title(inputs)
	if (locale === "sv") return sv_kits_list_title(inputs)
	if (locale === "tr") return tr_kits_list_title(inputs)
	if (locale === "zh") return zh_kits_list_title(inputs)
	if (locale === "ja") return ja_kits_list_title(inputs)
	return en_kits_list_title(inputs)
});
