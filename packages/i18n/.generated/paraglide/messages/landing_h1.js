/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_H1Inputs */

const en_landing_h1 = /** @type {(inputs: Landing_H1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest Mods`)
};

const es_landing_h1 = /** @type {(inputs: Landing_H1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de Sons of the Forest`)
};

const de_landing_h1 = /** @type {(inputs: Landing_H1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest Mods`)
};

const fr_landing_h1 = /** @type {(inputs: Landing_H1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods Sons of the Forest`)
};

const it_landing_h1 = /** @type {(inputs: Landing_H1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod di Sons of the Forest`)
};

const nl_landing_h1 = /** @type {(inputs: Landing_H1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest-mods`)
};

const pl_landing_h1 = /** @type {(inputs: Landing_H1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody do Sons of the Forest`)
};

const pt_landing_h1 = /** @type {(inputs: Landing_H1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de Sons of the Forest`)
};

const ru_landing_h1 = /** @type {(inputs: Landing_H1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды для Sons of the Forest`)
};

const sv_landing_h1 = /** @type {(inputs: Landing_H1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest-mods`)
};

const tr_landing_h1 = /** @type {(inputs: Landing_H1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest Modları`)
};

const zh_landing_h1 = /** @type {(inputs: Landing_H1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`《森林之子》模组`)
};

const ja_landing_h1 = /** @type {(inputs: Landing_H1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest MOD`)
};

/**
* | output |
* | --- |
* | "Sons of the Forest Mods" |
*
* @param {Landing_H1Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_h1 = /** @type {((inputs?: Landing_H1Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_H1Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_h1(inputs)
	if (locale === "de") return de_landing_h1(inputs)
	if (locale === "fr") return fr_landing_h1(inputs)
	if (locale === "it") return it_landing_h1(inputs)
	if (locale === "nl") return nl_landing_h1(inputs)
	if (locale === "pl") return pl_landing_h1(inputs)
	if (locale === "pt") return pt_landing_h1(inputs)
	if (locale === "ru") return ru_landing_h1(inputs)
	if (locale === "sv") return sv_landing_h1(inputs)
	if (locale === "tr") return tr_landing_h1(inputs)
	if (locale === "zh") return zh_landing_h1(inputs)
	if (locale === "ja") return ja_landing_h1(inputs)
	return en_landing_h1(inputs)
});
