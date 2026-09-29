/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Term_Field_ReportsInputs */

const en_common_term_field_reports = /** @type {(inputs: Common_Term_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field reports`)
};

const es_common_term_field_reports = /** @type {(inputs: Common_Term_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportes de campo`)
};

const de_common_term_field_reports = /** @type {(inputs: Common_Term_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldberichte`)
};

const fr_common_term_field_reports = /** @type {(inputs: Common_Term_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapports de terrain`)
};

const it_common_term_field_reports = /** @type {(inputs: Common_Term_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporti sul campo`)
};

const nl_common_term_field_reports = /** @type {(inputs: Common_Term_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldrapporten`)
};

const pl_common_term_field_reports = /** @type {(inputs: Common_Term_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raporty terenowe`)
};

const pt_common_term_field_reports = /** @type {(inputs: Common_Term_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatórios de campo`)
};

const ru_common_term_field_reports = /** @type {(inputs: Common_Term_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевые отчёты`)
};

const sv_common_term_field_reports = /** @type {(inputs: Common_Term_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältrapporter`)
};

const tr_common_term_field_reports = /** @type {(inputs: Common_Term_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha Raporları`)
};

const zh_common_term_field_reports = /** @type {(inputs: Common_Term_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实地报告`)
};

const ja_common_term_field_reports = /** @type {(inputs: Common_Term_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドレポート`)
};

/**
* | output |
* | --- |
* | "Field reports" |
*
* @param {Common_Term_Field_ReportsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_term_field_reports = /** @type {((inputs?: Common_Term_Field_ReportsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Term_Field_ReportsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_term_field_reports(inputs)
	if (locale === "de") return de_common_term_field_reports(inputs)
	if (locale === "fr") return fr_common_term_field_reports(inputs)
	if (locale === "it") return it_common_term_field_reports(inputs)
	if (locale === "nl") return nl_common_term_field_reports(inputs)
	if (locale === "pl") return pl_common_term_field_reports(inputs)
	if (locale === "pt") return pt_common_term_field_reports(inputs)
	if (locale === "ru") return ru_common_term_field_reports(inputs)
	if (locale === "sv") return sv_common_term_field_reports(inputs)
	if (locale === "tr") return tr_common_term_field_reports(inputs)
	if (locale === "zh") return zh_common_term_field_reports(inputs)
	if (locale === "ja") return ja_common_term_field_reports(inputs)
	return en_common_term_field_reports(inputs)
});
