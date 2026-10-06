/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Tab_DescriptionInputs */

const en_mod_tab_description = /** @type {(inputs: Mod_Tab_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description`)
};

const es_mod_tab_description = /** @type {(inputs: Mod_Tab_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descripción`)
};

const de_mod_tab_description = /** @type {(inputs: Mod_Tab_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschreibung`)
};

const fr_mod_tab_description = /** @type {(inputs: Mod_Tab_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description`)
};

const it_mod_tab_description = /** @type {(inputs: Mod_Tab_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrizione`)
};

const nl_mod_tab_description = /** @type {(inputs: Mod_Tab_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschrijving`)
};

const pl_mod_tab_description = /** @type {(inputs: Mod_Tab_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opis`)
};

const pt_mod_tab_description = /** @type {(inputs: Mod_Tab_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrição`)
};

const ru_mod_tab_description = /** @type {(inputs: Mod_Tab_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Описание`)
};

const sv_mod_tab_description = /** @type {(inputs: Mod_Tab_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskrivning`)
};

const tr_mod_tab_description = /** @type {(inputs: Mod_Tab_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açıklama`)
};

const zh_mod_tab_description = /** @type {(inputs: Mod_Tab_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`描述`)
};

const ja_mod_tab_description = /** @type {(inputs: Mod_Tab_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`説明`)
};

/**
* | output |
* | --- |
* | "Description" |
*
* @param {Mod_Tab_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_tab_description = /** @type {((inputs?: Mod_Tab_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Tab_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_tab_description(inputs)
	if (locale === "de") return de_mod_tab_description(inputs)
	if (locale === "fr") return fr_mod_tab_description(inputs)
	if (locale === "it") return it_mod_tab_description(inputs)
	if (locale === "nl") return nl_mod_tab_description(inputs)
	if (locale === "pl") return pl_mod_tab_description(inputs)
	if (locale === "pt") return pt_mod_tab_description(inputs)
	if (locale === "ru") return ru_mod_tab_description(inputs)
	if (locale === "sv") return sv_mod_tab_description(inputs)
	if (locale === "tr") return tr_mod_tab_description(inputs)
	if (locale === "zh") return zh_mod_tab_description(inputs)
	if (locale === "ja") return ja_mod_tab_description(inputs)
	return en_mod_tab_description(inputs)
});
