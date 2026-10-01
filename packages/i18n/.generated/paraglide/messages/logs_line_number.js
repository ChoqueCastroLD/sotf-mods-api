/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ line: NonNullable<unknown> }} Logs_Line_NumberInputs */

const en_logs_line_number = /** @type {(inputs: Logs_Line_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Line ${i?.line}`)
};

const es_logs_line_number = /** @type {(inputs: Logs_Line_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Línea ${i?.line}`)
};

const de_logs_line_number = /** @type {(inputs: Logs_Line_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zeile ${i?.line}`)
};

const fr_logs_line_number = /** @type {(inputs: Logs_Line_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ligne ${i?.line}`)
};

const it_logs_line_number = /** @type {(inputs: Logs_Line_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Riga ${i?.line}`)
};

const nl_logs_line_number = /** @type {(inputs: Logs_Line_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Regel ${i?.line}`)
};

const pl_logs_line_number = /** @type {(inputs: Logs_Line_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wiersz ${i?.line}`)
};

const pt_logs_line_number = /** @type {(inputs: Logs_Line_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Linha ${i?.line}`)
};

const ru_logs_line_number = /** @type {(inputs: Logs_Line_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Строка ${i?.line}`)
};

const sv_logs_line_number = /** @type {(inputs: Logs_Line_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rad ${i?.line}`)
};

const tr_logs_line_number = /** @type {(inputs: Logs_Line_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Satır ${i?.line}`)
};

const zh_logs_line_number = /** @type {(inputs: Logs_Line_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.line} 行`)
};

const ja_logs_line_number = /** @type {(inputs: Logs_Line_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.line} 行目`)
};

/**
* | output |
* | --- |
* | "Line {line}" |
*
* @param {Logs_Line_NumberInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_line_number = /** @type {((inputs: Logs_Line_NumberInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Line_NumberInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_line_number(inputs)
	if (locale === "de") return de_logs_line_number(inputs)
	if (locale === "fr") return fr_logs_line_number(inputs)
	if (locale === "it") return it_logs_line_number(inputs)
	if (locale === "nl") return nl_logs_line_number(inputs)
	if (locale === "pl") return pl_logs_line_number(inputs)
	if (locale === "pt") return pt_logs_line_number(inputs)
	if (locale === "ru") return ru_logs_line_number(inputs)
	if (locale === "sv") return sv_logs_line_number(inputs)
	if (locale === "tr") return tr_logs_line_number(inputs)
	if (locale === "zh") return zh_logs_line_number(inputs)
	if (locale === "ja") return ja_logs_line_number(inputs)
	return en_logs_line_number(inputs)
});
