/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_SuccessorInputs */

const en_basecamp_settings_successor = /** @type {(inputs: Basecamp_Settings_SuccessorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Successor`)
};

const es_basecamp_settings_successor = /** @type {(inputs: Basecamp_Settings_SuccessorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sucesor`)
};

const de_basecamp_settings_successor = /** @type {(inputs: Basecamp_Settings_SuccessorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nachfolger`)
};

const fr_basecamp_settings_successor = /** @type {(inputs: Basecamp_Settings_SuccessorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Successeur`)
};

const it_basecamp_settings_successor = /** @type {(inputs: Basecamp_Settings_SuccessorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Successore`)
};

const nl_basecamp_settings_successor = /** @type {(inputs: Basecamp_Settings_SuccessorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opvolger`)
};

const pl_basecamp_settings_successor = /** @type {(inputs: Basecamp_Settings_SuccessorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Następca`)
};

const pt_basecamp_settings_successor = /** @type {(inputs: Basecamp_Settings_SuccessorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sucessor`)
};

const ru_basecamp_settings_successor = /** @type {(inputs: Basecamp_Settings_SuccessorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Преемник`)
};

const sv_basecamp_settings_successor = /** @type {(inputs: Basecamp_Settings_SuccessorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Efterföljare`)
};

const tr_basecamp_settings_successor = /** @type {(inputs: Basecamp_Settings_SuccessorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Halef`)
};

const zh_basecamp_settings_successor = /** @type {(inputs: Basecamp_Settings_SuccessorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`后继模组`)
};

const ja_basecamp_settings_successor = /** @type {(inputs: Basecamp_Settings_SuccessorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`後継`)
};

/**
* | output |
* | --- |
* | "Successor" |
*
* @param {Basecamp_Settings_SuccessorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_successor = /** @type {((inputs?: Basecamp_Settings_SuccessorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_SuccessorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_successor(inputs)
	if (locale === "de") return de_basecamp_settings_successor(inputs)
	if (locale === "fr") return fr_basecamp_settings_successor(inputs)
	if (locale === "it") return it_basecamp_settings_successor(inputs)
	if (locale === "nl") return nl_basecamp_settings_successor(inputs)
	if (locale === "pl") return pl_basecamp_settings_successor(inputs)
	if (locale === "pt") return pt_basecamp_settings_successor(inputs)
	if (locale === "ru") return ru_basecamp_settings_successor(inputs)
	if (locale === "sv") return sv_basecamp_settings_successor(inputs)
	if (locale === "tr") return tr_basecamp_settings_successor(inputs)
	if (locale === "zh") return zh_basecamp_settings_successor(inputs)
	if (locale === "ja") return ja_basecamp_settings_successor(inputs)
	return en_basecamp_settings_successor(inputs)
});
