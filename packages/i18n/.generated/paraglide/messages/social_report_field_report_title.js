/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Report_Field_Report_TitleInputs */

const en_social_report_field_report_title = /** @type {(inputs: Social_Report_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report this field report`)
};

const es_social_report_field_report_title = /** @type {(inputs: Social_Report_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportar este reporte de campo`)
};

const de_social_report_field_report_title = /** @type {(inputs: Social_Report_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diesen Feldbericht melden`)
};

const fr_social_report_field_report_title = /** @type {(inputs: Social_Report_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler ce rapport de terrain`)
};

const it_social_report_field_report_title = /** @type {(inputs: Social_Report_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala questo rapporto sul campo`)
};

const nl_social_report_field_report_title = /** @type {(inputs: Social_Report_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit veldrapport melden`)
};

const pl_social_report_field_report_title = /** @type {(inputs: Social_Report_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś ten raport terenowy`)
};

const pt_social_report_field_report_title = /** @type {(inputs: Social_Report_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denunciar este relatório de campo`)
};

const ru_social_report_field_report_title = /** @type {(inputs: Social_Report_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пожаловаться на полевой отчёт`)
};

const sv_social_report_field_report_title = /** @type {(inputs: Social_Report_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmäl den här fältrapporten`)
};

const tr_social_report_field_report_title = /** @type {(inputs: Social_Report_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu saha raporunu şikâyet et`)
};

const zh_social_report_field_report_title = /** @type {(inputs: Social_Report_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`举报这份实地报告`)
};

const ja_social_report_field_report_title = /** @type {(inputs: Social_Report_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このフィールドレポートを通報`)
};

/**
* | output |
* | --- |
* | "Report this field report" |
*
* @param {Social_Report_Field_Report_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_report_field_report_title = /** @type {((inputs?: Social_Report_Field_Report_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Report_Field_Report_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_report_field_report_title(inputs)
	if (locale === "de") return de_social_report_field_report_title(inputs)
	if (locale === "fr") return fr_social_report_field_report_title(inputs)
	if (locale === "it") return it_social_report_field_report_title(inputs)
	if (locale === "nl") return nl_social_report_field_report_title(inputs)
	if (locale === "pl") return pl_social_report_field_report_title(inputs)
	if (locale === "pt") return pt_social_report_field_report_title(inputs)
	if (locale === "ru") return ru_social_report_field_report_title(inputs)
	if (locale === "sv") return sv_social_report_field_report_title(inputs)
	if (locale === "tr") return tr_social_report_field_report_title(inputs)
	if (locale === "zh") return zh_social_report_field_report_title(inputs)
	if (locale === "ja") return ja_social_report_field_report_title(inputs)
	return en_social_report_field_report_title(inputs)
});
