/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Kit_OpenInputs */

const en_landing_kit_open = /** @type {(inputs: Landing_Kit_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open the Kit`)
};

const es_landing_kit_open = /** @type {(inputs: Landing_Kit_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir el Kit`)
};

const de_landing_kit_open = /** @type {(inputs: Landing_Kit_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit öffnen`)
};

const fr_landing_kit_open = /** @type {(inputs: Landing_Kit_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir le Kit`)
};

const it_landing_kit_open = /** @type {(inputs: Landing_Kit_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri il Kit`)
};

const nl_landing_kit_open = /** @type {(inputs: Landing_Kit_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open de Kit`)
};

const pl_landing_kit_open = /** @type {(inputs: Landing_Kit_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz zestaw`)
};

const pt_landing_kit_open = /** @type {(inputs: Landing_Kit_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir o Kit`)
};

const ru_landing_kit_open = /** @type {(inputs: Landing_Kit_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть набор`)
};

const sv_landing_kit_open = /** @type {(inputs: Landing_Kit_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna kitet`)
};

const tr_landing_kit_open = /** @type {(inputs: Landing_Kit_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kiti aç`)
};

const zh_landing_kit_open = /** @type {(inputs: Landing_Kit_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开套装`)
};

const ja_landing_kit_open = /** @type {(inputs: Landing_Kit_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを開く`)
};

/**
* | output |
* | --- |
* | "Open the Kit" |
*
* @param {Landing_Kit_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_kit_open = /** @type {((inputs?: Landing_Kit_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Kit_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_kit_open(inputs)
	if (locale === "de") return de_landing_kit_open(inputs)
	if (locale === "fr") return fr_landing_kit_open(inputs)
	if (locale === "it") return it_landing_kit_open(inputs)
	if (locale === "nl") return nl_landing_kit_open(inputs)
	if (locale === "pl") return pl_landing_kit_open(inputs)
	if (locale === "pt") return pt_landing_kit_open(inputs)
	if (locale === "ru") return ru_landing_kit_open(inputs)
	if (locale === "sv") return sv_landing_kit_open(inputs)
	if (locale === "tr") return tr_landing_kit_open(inputs)
	if (locale === "zh") return zh_landing_kit_open(inputs)
	if (locale === "ja") return ja_landing_kit_open(inputs)
	return en_landing_kit_open(inputs)
});
