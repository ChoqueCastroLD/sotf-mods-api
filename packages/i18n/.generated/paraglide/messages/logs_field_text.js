/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Field_TextInputs */

const en_logs_field_text = /** @type {(inputs: Logs_Field_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log text`)
};

const es_logs_field_text = /** @type {(inputs: Logs_Field_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto del log`)
};

const de_logs_field_text = /** @type {(inputs: Logs_Field_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log-Text`)
};

const fr_logs_field_text = /** @type {(inputs: Logs_Field_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texte du log`)
};

const it_logs_field_text = /** @type {(inputs: Logs_Field_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testo del log`)
};

const nl_logs_field_text = /** @type {(inputs: Logs_Field_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logtekst`)
};

const pl_logs_field_text = /** @type {(inputs: Logs_Field_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Treść logu`)
};

const pt_logs_field_text = /** @type {(inputs: Logs_Field_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto do log`)
};

const ru_logs_field_text = /** @type {(inputs: Logs_Field_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Текст лога`)
};

const sv_logs_field_text = /** @type {(inputs: Logs_Field_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logtext`)
};

const tr_logs_field_text = /** @type {(inputs: Logs_Field_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log metni`)
};

const zh_logs_field_text = /** @type {(inputs: Logs_Field_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日志文本`)
};

const ja_logs_field_text = /** @type {(inputs: Logs_Field_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログのテキスト`)
};

/**
* | output |
* | --- |
* | "Log text" |
*
* @param {Logs_Field_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_field_text = /** @type {((inputs?: Logs_Field_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Field_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_field_text(inputs)
	if (locale === "de") return de_logs_field_text(inputs)
	if (locale === "fr") return fr_logs_field_text(inputs)
	if (locale === "it") return it_logs_field_text(inputs)
	if (locale === "nl") return nl_logs_field_text(inputs)
	if (locale === "pl") return pl_logs_field_text(inputs)
	if (locale === "pt") return pt_logs_field_text(inputs)
	if (locale === "ru") return ru_logs_field_text(inputs)
	if (locale === "sv") return sv_logs_field_text(inputs)
	if (locale === "tr") return tr_logs_field_text(inputs)
	if (locale === "zh") return zh_logs_field_text(inputs)
	if (locale === "ja") return ja_logs_field_text(inputs)
	return en_logs_field_text(inputs)
});
