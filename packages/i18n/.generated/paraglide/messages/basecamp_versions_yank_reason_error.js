/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ min: NonNullable<unknown> }} Basecamp_Versions_Yank_Reason_ErrorInputs */

const en_basecamp_versions_yank_reason_error = /** @type {(inputs: Basecamp_Versions_Yank_Reason_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Write at least ${i?.min} characters.`)
};

const es_basecamp_versions_yank_reason_error = /** @type {(inputs: Basecamp_Versions_Yank_Reason_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Escribe al menos ${i?.min} caracteres.`)
};

const de_basecamp_versions_yank_reason_error = /** @type {(inputs: Basecamp_Versions_Yank_Reason_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Schreibe mindestens ${i?.min} Zeichen.`)
};

const fr_basecamp_versions_yank_reason_error = /** @type {(inputs: Basecamp_Versions_Yank_Reason_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Écris au moins ${i?.min} caractères.`)
};

const it_basecamp_versions_yank_reason_error = /** @type {(inputs: Basecamp_Versions_Yank_Reason_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scrivi almeno ${i?.min} caratteri.`)
};

const nl_basecamp_versions_yank_reason_error = /** @type {(inputs: Basecamp_Versions_Yank_Reason_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Schrijf minstens ${i?.min} tekens.`)
};

const pl_basecamp_versions_yank_reason_error = /** @type {(inputs: Basecamp_Versions_Yank_Reason_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Napisz co najmniej tyle znaków: ${i?.min}.`)
};

const pt_basecamp_versions_yank_reason_error = /** @type {(inputs: Basecamp_Versions_Yank_Reason_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Escreva pelo menos ${i?.min} caracteres.`)
};

const ru_basecamp_versions_yank_reason_error = /** @type {(inputs: Basecamp_Versions_Yank_Reason_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Напишите хотя бы столько символов: ${i?.min}.`)
};

const sv_basecamp_versions_yank_reason_error = /** @type {(inputs: Basecamp_Versions_Yank_Reason_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skriv minst ${i?.min} tecken.`)
};

const tr_basecamp_versions_yank_reason_error = /** @type {(inputs: Basecamp_Versions_Yank_Reason_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En az ${i?.min} karakter yaz.`)
};

const zh_basecamp_versions_yank_reason_error = /** @type {(inputs: Basecamp_Versions_Yank_Reason_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`请至少写 ${i?.min} 个字符。`)
};

const ja_basecamp_versions_yank_reason_error = /** @type {(inputs: Basecamp_Versions_Yank_Reason_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} 文字以上入力してください。`)
};

/**
* | output |
* | --- |
* | "Write at least {min} characters." |
*
* @param {Basecamp_Versions_Yank_Reason_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_yank_reason_error = /** @type {((inputs: Basecamp_Versions_Yank_Reason_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Yank_Reason_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_yank_reason_error(inputs)
	if (locale === "de") return de_basecamp_versions_yank_reason_error(inputs)
	if (locale === "fr") return fr_basecamp_versions_yank_reason_error(inputs)
	if (locale === "it") return it_basecamp_versions_yank_reason_error(inputs)
	if (locale === "nl") return nl_basecamp_versions_yank_reason_error(inputs)
	if (locale === "pl") return pl_basecamp_versions_yank_reason_error(inputs)
	if (locale === "pt") return pt_basecamp_versions_yank_reason_error(inputs)
	if (locale === "ru") return ru_basecamp_versions_yank_reason_error(inputs)
	if (locale === "sv") return sv_basecamp_versions_yank_reason_error(inputs)
	if (locale === "tr") return tr_basecamp_versions_yank_reason_error(inputs)
	if (locale === "zh") return zh_basecamp_versions_yank_reason_error(inputs)
	if (locale === "ja") return ja_basecamp_versions_yank_reason_error(inputs)
	return en_basecamp_versions_yank_reason_error(inputs)
});
