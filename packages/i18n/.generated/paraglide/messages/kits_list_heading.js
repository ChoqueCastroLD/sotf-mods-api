/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_List_HeadingInputs */

const en_kits_list_heading = /** @type {(inputs: Kits_List_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const es_kits_list_heading = /** @type {(inputs: Kits_List_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const de_kits_list_heading = /** @type {(inputs: Kits_List_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const fr_kits_list_heading = /** @type {(inputs: Kits_List_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const it_kits_list_heading = /** @type {(inputs: Kits_List_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const nl_kits_list_heading = /** @type {(inputs: Kits_List_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const pl_kits_list_heading = /** @type {(inputs: Kits_List_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zestawy`)
};

const pt_kits_list_heading = /** @type {(inputs: Kits_List_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const ru_kits_list_heading = /** @type {(inputs: Kits_List_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Наборы`)
};

const sv_kits_list_heading = /** @type {(inputs: Kits_List_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const tr_kits_list_heading = /** @type {(inputs: Kits_List_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitler`)
};

const zh_kits_list_heading = /** @type {(inputs: Kits_List_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`套装`)
};

const ja_kits_list_heading = /** @type {(inputs: Kits_List_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キット`)
};

/**
* | output |
* | --- |
* | "Kits" |
*
* @param {Kits_List_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_list_heading = /** @type {((inputs?: Kits_List_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_List_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_list_heading(inputs)
	if (locale === "de") return de_kits_list_heading(inputs)
	if (locale === "fr") return fr_kits_list_heading(inputs)
	if (locale === "it") return it_kits_list_heading(inputs)
	if (locale === "nl") return nl_kits_list_heading(inputs)
	if (locale === "pl") return pl_kits_list_heading(inputs)
	if (locale === "pt") return pt_kits_list_heading(inputs)
	if (locale === "ru") return ru_kits_list_heading(inputs)
	if (locale === "sv") return sv_kits_list_heading(inputs)
	if (locale === "tr") return tr_kits_list_heading(inputs)
	if (locale === "zh") return zh_kits_list_heading(inputs)
	if (locale === "ja") return ja_kits_list_heading(inputs)
	return en_kits_list_heading(inputs)
});
