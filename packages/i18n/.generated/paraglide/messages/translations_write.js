/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_WriteInputs */

const en_translations_write = /** @type {(inputs: Translations_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write`)
};

const es_translations_write = /** @type {(inputs: Translations_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribir`)
};

const de_translations_write = /** @type {(inputs: Translations_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schreiben`)
};

const fr_translations_write = /** @type {(inputs: Translations_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Écrire`)
};

const it_translations_write = /** @type {(inputs: Translations_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scrivi`)
};

const nl_translations_write = /** @type {(inputs: Translations_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schrijven`)
};

const pl_translations_write = /** @type {(inputs: Translations_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Napisz`)
};

const pt_translations_write = /** @type {(inputs: Translations_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escrever`)
};

const ru_translations_write = /** @type {(inputs: Translations_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Написать`)
};

const sv_translations_write = /** @type {(inputs: Translations_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriv`)
};

const tr_translations_write = /** @type {(inputs: Translations_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yaz`)
};

const zh_translations_write = /** @type {(inputs: Translations_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撰写`)
};

const ja_translations_write = /** @type {(inputs: Translations_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`書く`)
};

/**
* | output |
* | --- |
* | "Write" |
*
* @param {Translations_WriteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_write = /** @type {((inputs?: Translations_WriteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_WriteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_write(inputs)
	if (locale === "de") return de_translations_write(inputs)
	if (locale === "fr") return fr_translations_write(inputs)
	if (locale === "it") return it_translations_write(inputs)
	if (locale === "nl") return nl_translations_write(inputs)
	if (locale === "pl") return pl_translations_write(inputs)
	if (locale === "pt") return pt_translations_write(inputs)
	if (locale === "ru") return ru_translations_write(inputs)
	if (locale === "sv") return sv_translations_write(inputs)
	if (locale === "tr") return tr_translations_write(inputs)
	if (locale === "zh") return zh_translations_write(inputs)
	if (locale === "ja") return ja_translations_write(inputs)
	return en_translations_write(inputs)
});
