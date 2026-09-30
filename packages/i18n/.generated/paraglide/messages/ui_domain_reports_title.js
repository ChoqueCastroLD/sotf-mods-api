/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Reports_TitleInputs */

const en_ui_domain_reports_title = /** @type {(inputs: Ui_Domain_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field reports`)
};

const es_ui_domain_reports_title = /** @type {(inputs: Ui_Domain_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportes de campo`)
};

const de_ui_domain_reports_title = /** @type {(inputs: Ui_Domain_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldberichte`)
};

const fr_ui_domain_reports_title = /** @type {(inputs: Ui_Domain_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapports de terrain`)
};

const it_ui_domain_reports_title = /** @type {(inputs: Ui_Domain_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporti sul campo`)
};

const nl_ui_domain_reports_title = /** @type {(inputs: Ui_Domain_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldrapporten`)
};

const pl_ui_domain_reports_title = /** @type {(inputs: Ui_Domain_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raporty terenowe`)
};

const pt_ui_domain_reports_title = /** @type {(inputs: Ui_Domain_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatórios de campo`)
};

const ru_ui_domain_reports_title = /** @type {(inputs: Ui_Domain_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевые отчёты`)
};

const sv_ui_domain_reports_title = /** @type {(inputs: Ui_Domain_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältrapporter`)
};

const tr_ui_domain_reports_title = /** @type {(inputs: Ui_Domain_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha Raporları`)
};

const zh_ui_domain_reports_title = /** @type {(inputs: Ui_Domain_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实地报告`)
};

const ja_ui_domain_reports_title = /** @type {(inputs: Ui_Domain_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドレポート`)
};

/**
* | output |
* | --- |
* | "Field reports" |
*
* @param {Ui_Domain_Reports_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_reports_title = /** @type {((inputs?: Ui_Domain_Reports_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reports_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_reports_title(inputs)
	if (locale === "de") return de_ui_domain_reports_title(inputs)
	if (locale === "fr") return fr_ui_domain_reports_title(inputs)
	if (locale === "it") return it_ui_domain_reports_title(inputs)
	if (locale === "nl") return nl_ui_domain_reports_title(inputs)
	if (locale === "pl") return pl_ui_domain_reports_title(inputs)
	if (locale === "pt") return pt_ui_domain_reports_title(inputs)
	if (locale === "ru") return ru_ui_domain_reports_title(inputs)
	if (locale === "sv") return sv_ui_domain_reports_title(inputs)
	if (locale === "tr") return tr_ui_domain_reports_title(inputs)
	if (locale === "zh") return zh_ui_domain_reports_title(inputs)
	if (locale === "ja") return ja_ui_domain_reports_title(inputs)
	return en_ui_domain_reports_title(inputs)
});
