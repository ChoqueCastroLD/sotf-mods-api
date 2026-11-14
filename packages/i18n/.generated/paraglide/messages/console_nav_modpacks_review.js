/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_Modpacks_ReviewInputs */

const en_console_nav_modpacks_review = /** @type {(inputs: Console_Nav_Modpacks_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const es_console_nav_modpacks_review = /** @type {(inputs: Console_Nav_Modpacks_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const de_console_nav_modpacks_review = /** @type {(inputs: Console_Nav_Modpacks_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const fr_console_nav_modpacks_review = /** @type {(inputs: Console_Nav_Modpacks_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const it_console_nav_modpacks_review = /** @type {(inputs: Console_Nav_Modpacks_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack`)
};

const nl_console_nav_modpacks_review = /** @type {(inputs: Console_Nav_Modpacks_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const pl_console_nav_modpacks_review = /** @type {(inputs: Console_Nav_Modpacks_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacki`)
};

const pt_console_nav_modpacks_review = /** @type {(inputs: Console_Nav_Modpacks_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const ru_console_nav_modpacks_review = /** @type {(inputs: Console_Nav_Modpacks_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модпаки`)
};

const sv_console_nav_modpacks_review = /** @type {(inputs: Console_Nav_Modpacks_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpaket`)
};

const tr_console_nav_modpacks_review = /** @type {(inputs: Console_Nav_Modpacks_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketleri`)
};

const zh_console_nav_modpacks_review = /** @type {(inputs: Console_Nav_Modpacks_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`整合包`)
};

const ja_console_nav_modpacks_review = /** @type {(inputs: Console_Nav_Modpacks_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパック`)
};

/**
* | output |
* | --- |
* | "Modpacks" |
*
* @param {Console_Nav_Modpacks_ReviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_modpacks_review = /** @type {((inputs?: Console_Nav_Modpacks_ReviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_Modpacks_ReviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_modpacks_review(inputs)
	if (locale === "de") return de_console_nav_modpacks_review(inputs)
	if (locale === "fr") return fr_console_nav_modpacks_review(inputs)
	if (locale === "it") return it_console_nav_modpacks_review(inputs)
	if (locale === "nl") return nl_console_nav_modpacks_review(inputs)
	if (locale === "pl") return pl_console_nav_modpacks_review(inputs)
	if (locale === "pt") return pt_console_nav_modpacks_review(inputs)
	if (locale === "ru") return ru_console_nav_modpacks_review(inputs)
	if (locale === "sv") return sv_console_nav_modpacks_review(inputs)
	if (locale === "tr") return tr_console_nav_modpacks_review(inputs)
	if (locale === "zh") return zh_console_nav_modpacks_review(inputs)
	if (locale === "ja") return ja_console_nav_modpacks_review(inputs)
	return en_console_nav_modpacks_review(inputs)
});
