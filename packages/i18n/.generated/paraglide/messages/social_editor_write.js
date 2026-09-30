/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Editor_WriteInputs */

const en_social_editor_write = /** @type {(inputs: Social_Editor_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write`)
};

const es_social_editor_write = /** @type {(inputs: Social_Editor_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribir`)
};

const de_social_editor_write = /** @type {(inputs: Social_Editor_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schreiben`)
};

const fr_social_editor_write = /** @type {(inputs: Social_Editor_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Écrire`)
};

const it_social_editor_write = /** @type {(inputs: Social_Editor_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scrivi`)
};

const nl_social_editor_write = /** @type {(inputs: Social_Editor_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schrijven`)
};

const pl_social_editor_write = /** @type {(inputs: Social_Editor_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pisz`)
};

const pt_social_editor_write = /** @type {(inputs: Social_Editor_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escrever`)
};

const ru_social_editor_write = /** @type {(inputs: Social_Editor_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Текст`)
};

const sv_social_editor_write = /** @type {(inputs: Social_Editor_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriv`)
};

const tr_social_editor_write = /** @type {(inputs: Social_Editor_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yaz`)
};

const zh_social_editor_write = /** @type {(inputs: Social_Editor_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编写`)
};

const ja_social_editor_write = /** @type {(inputs: Social_Editor_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`編集`)
};

/**
* | output |
* | --- |
* | "Write" |
*
* @param {Social_Editor_WriteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_write = /** @type {((inputs?: Social_Editor_WriteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_WriteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_write(inputs)
	if (locale === "de") return de_social_editor_write(inputs)
	if (locale === "fr") return fr_social_editor_write(inputs)
	if (locale === "it") return it_social_editor_write(inputs)
	if (locale === "nl") return nl_social_editor_write(inputs)
	if (locale === "pl") return pl_social_editor_write(inputs)
	if (locale === "pt") return pt_social_editor_write(inputs)
	if (locale === "ru") return ru_social_editor_write(inputs)
	if (locale === "sv") return sv_social_editor_write(inputs)
	if (locale === "tr") return tr_social_editor_write(inputs)
	if (locale === "zh") return zh_social_editor_write(inputs)
	if (locale === "ja") return ja_social_editor_write(inputs)
	return en_social_editor_write(inputs)
});
