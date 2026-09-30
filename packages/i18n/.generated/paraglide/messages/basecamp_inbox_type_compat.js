/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Type_CompatInputs */

const en_basecamp_inbox_type_compat = /** @type {(inputs: Basecamp_Inbox_Type_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field report`)
};

const es_basecamp_inbox_type_compat = /** @type {(inputs: Basecamp_Inbox_Type_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reporte de campo`)
};

const de_basecamp_inbox_type_compat = /** @type {(inputs: Basecamp_Inbox_Type_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldbericht`)
};

const fr_basecamp_inbox_type_compat = /** @type {(inputs: Basecamp_Inbox_Type_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapport de terrain`)
};

const it_basecamp_inbox_type_compat = /** @type {(inputs: Basecamp_Inbox_Type_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporto sul campo`)
};

const nl_basecamp_inbox_type_compat = /** @type {(inputs: Basecamp_Inbox_Type_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldrapport`)
};

const pl_basecamp_inbox_type_compat = /** @type {(inputs: Basecamp_Inbox_Type_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raport terenowy`)
};

const pt_basecamp_inbox_type_compat = /** @type {(inputs: Basecamp_Inbox_Type_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatório de campo`)
};

const ru_basecamp_inbox_type_compat = /** @type {(inputs: Basecamp_Inbox_Type_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевой отчёт`)
};

const sv_basecamp_inbox_type_compat = /** @type {(inputs: Basecamp_Inbox_Type_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältrapport`)
};

const tr_basecamp_inbox_type_compat = /** @type {(inputs: Basecamp_Inbox_Type_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha raporu`)
};

const zh_basecamp_inbox_type_compat = /** @type {(inputs: Basecamp_Inbox_Type_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实地报告`)
};

const ja_basecamp_inbox_type_compat = /** @type {(inputs: Basecamp_Inbox_Type_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドレポート`)
};

/**
* | output |
* | --- |
* | "Field report" |
*
* @param {Basecamp_Inbox_Type_CompatInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_type_compat = /** @type {((inputs?: Basecamp_Inbox_Type_CompatInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Type_CompatInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_type_compat(inputs)
	if (locale === "de") return de_basecamp_inbox_type_compat(inputs)
	if (locale === "fr") return fr_basecamp_inbox_type_compat(inputs)
	if (locale === "it") return it_basecamp_inbox_type_compat(inputs)
	if (locale === "nl") return nl_basecamp_inbox_type_compat(inputs)
	if (locale === "pl") return pl_basecamp_inbox_type_compat(inputs)
	if (locale === "pt") return pt_basecamp_inbox_type_compat(inputs)
	if (locale === "ru") return ru_basecamp_inbox_type_compat(inputs)
	if (locale === "sv") return sv_basecamp_inbox_type_compat(inputs)
	if (locale === "tr") return tr_basecamp_inbox_type_compat(inputs)
	if (locale === "zh") return zh_basecamp_inbox_type_compat(inputs)
	if (locale === "ja") return ja_basecamp_inbox_type_compat(inputs)
	return en_basecamp_inbox_type_compat(inputs)
});
