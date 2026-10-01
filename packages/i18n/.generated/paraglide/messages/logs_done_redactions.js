/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Logs_Done_RedactionsInputs */

const en_logs_done_redactions = /** @type {(inputs: Logs_Done_RedactionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hidden before saving: ${i?.count}`)
};

const es_logs_done_redactions = /** @type {(inputs: Logs_Done_RedactionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ocultado antes de guardar: ${i?.count}`)
};

const de_logs_done_redactions = /** @type {(inputs: Logs_Done_RedactionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vor dem Speichern ausgeblendet: ${i?.count}`)
};

const fr_logs_done_redactions = /** @type {(inputs: Logs_Done_RedactionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Masqué avant l’enregistrement : ${i?.count}`)
};

const it_logs_done_redactions = /** @type {(inputs: Logs_Done_RedactionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nascosti prima del salvataggio: ${i?.count}`)
};

const nl_logs_done_redactions = /** @type {(inputs: Logs_Done_RedactionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verborgen vóór het opslaan: ${i?.count}`)
};

const pl_logs_done_redactions = /** @type {(inputs: Logs_Done_RedactionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ukryte przed zapisaniem: ${i?.count}`)
};

const pt_logs_done_redactions = /** @type {(inputs: Logs_Done_RedactionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ocultado antes de guardar: ${i?.count}`)
};

const ru_logs_done_redactions = /** @type {(inputs: Logs_Done_RedactionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скрыто перед сохранением: ${i?.count}`)
};

const sv_logs_done_redactions = /** @type {(inputs: Logs_Done_RedactionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dolt innan sparande: ${i?.count}`)
};

const tr_logs_done_redactions = /** @type {(inputs: Logs_Done_RedactionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kaydedilmeden önce gizlenen: ${i?.count}`)
};

const zh_logs_done_redactions = /** @type {(inputs: Logs_Done_RedactionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`保存前已隐藏：${i?.count}`)
};

const ja_logs_done_redactions = /** @type {(inputs: Logs_Done_RedactionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`保存前に非表示にした数：${i?.count}`)
};

/**
* | output |
* | --- |
* | "Hidden before saving: {count}" |
*
* @param {Logs_Done_RedactionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_done_redactions = /** @type {((inputs: Logs_Done_RedactionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Done_RedactionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_done_redactions(inputs)
	if (locale === "de") return de_logs_done_redactions(inputs)
	if (locale === "fr") return fr_logs_done_redactions(inputs)
	if (locale === "it") return it_logs_done_redactions(inputs)
	if (locale === "nl") return nl_logs_done_redactions(inputs)
	if (locale === "pl") return pl_logs_done_redactions(inputs)
	if (locale === "pt") return pt_logs_done_redactions(inputs)
	if (locale === "ru") return ru_logs_done_redactions(inputs)
	if (locale === "sv") return sv_logs_done_redactions(inputs)
	if (locale === "tr") return tr_logs_done_redactions(inputs)
	if (locale === "zh") return zh_logs_done_redactions(inputs)
	if (locale === "ja") return ja_logs_done_redactions(inputs)
	return en_logs_done_redactions(inputs)
});
