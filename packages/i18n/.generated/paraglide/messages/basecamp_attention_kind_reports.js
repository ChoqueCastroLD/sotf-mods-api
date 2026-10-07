/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Kind_ReportsInputs */

const en_basecamp_attention_kind_reports = /** @type {(inputs: Basecamp_Attention_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reports`)
};

const es_basecamp_attention_kind_reports = /** @type {(inputs: Basecamp_Attention_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informes`)
};

const de_basecamp_attention_kind_reports = /** @type {(inputs: Basecamp_Attention_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldungen`)
};

const fr_basecamp_attention_kind_reports = /** @type {(inputs: Basecamp_Attention_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalements`)
};

const it_basecamp_attention_kind_reports = /** @type {(inputs: Basecamp_Attention_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnalazioni`)
};

const nl_basecamp_attention_kind_reports = /** @type {(inputs: Basecamp_Attention_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldingen`)
};

const pl_basecamp_attention_kind_reports = /** @type {(inputs: Basecamp_Attention_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenia`)
};

const pt_basecamp_attention_kind_reports = /** @type {(inputs: Basecamp_Attention_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatos`)
};

const ru_basecamp_attention_kind_reports = /** @type {(inputs: Basecamp_Attention_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отчёты`)
};

const sv_basecamp_attention_kind_reports = /** @type {(inputs: Basecamp_Attention_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporter`)
};

const tr_basecamp_attention_kind_reports = /** @type {(inputs: Basecamp_Attention_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raporlar`)
};

const zh_basecamp_attention_kind_reports = /** @type {(inputs: Basecamp_Attention_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`报告`)
};

const ja_basecamp_attention_kind_reports = /** @type {(inputs: Basecamp_Attention_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告`)
};

/**
* | output |
* | --- |
* | "Reports" |
*
* @param {Basecamp_Attention_Kind_ReportsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_kind_reports = /** @type {((inputs?: Basecamp_Attention_Kind_ReportsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Kind_ReportsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_kind_reports(inputs)
	if (locale === "de") return de_basecamp_attention_kind_reports(inputs)
	if (locale === "fr") return fr_basecamp_attention_kind_reports(inputs)
	if (locale === "it") return it_basecamp_attention_kind_reports(inputs)
	if (locale === "nl") return nl_basecamp_attention_kind_reports(inputs)
	if (locale === "pl") return pl_basecamp_attention_kind_reports(inputs)
	if (locale === "pt") return pt_basecamp_attention_kind_reports(inputs)
	if (locale === "ru") return ru_basecamp_attention_kind_reports(inputs)
	if (locale === "sv") return sv_basecamp_attention_kind_reports(inputs)
	if (locale === "tr") return tr_basecamp_attention_kind_reports(inputs)
	if (locale === "zh") return zh_basecamp_attention_kind_reports(inputs)
	if (locale === "ja") return ja_basecamp_attention_kind_reports(inputs)
	return en_basecamp_attention_kind_reports(inputs)
});
