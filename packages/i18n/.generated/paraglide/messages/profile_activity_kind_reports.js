/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Activity_Kind_ReportsInputs */

const en_profile_activity_kind_reports = /** @type {(inputs: Profile_Activity_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field reports`)
};

const es_profile_activity_kind_reports = /** @type {(inputs: Profile_Activity_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportes de campo`)
};

const de_profile_activity_kind_reports = /** @type {(inputs: Profile_Activity_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldberichte`)
};

const fr_profile_activity_kind_reports = /** @type {(inputs: Profile_Activity_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapports de terrain`)
};

const it_profile_activity_kind_reports = /** @type {(inputs: Profile_Activity_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporti sul campo`)
};

const nl_profile_activity_kind_reports = /** @type {(inputs: Profile_Activity_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldrapporten`)
};

const pl_profile_activity_kind_reports = /** @type {(inputs: Profile_Activity_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raporty terenowe`)
};

const pt_profile_activity_kind_reports = /** @type {(inputs: Profile_Activity_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatórios de campo`)
};

const ru_profile_activity_kind_reports = /** @type {(inputs: Profile_Activity_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевые отчёты`)
};

const sv_profile_activity_kind_reports = /** @type {(inputs: Profile_Activity_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältrapporter`)
};

const tr_profile_activity_kind_reports = /** @type {(inputs: Profile_Activity_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha raporları`)
};

const zh_profile_activity_kind_reports = /** @type {(inputs: Profile_Activity_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实地报告`)
};

const ja_profile_activity_kind_reports = /** @type {(inputs: Profile_Activity_Kind_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドレポート`)
};

/**
* | output |
* | --- |
* | "Field reports" |
*
* @param {Profile_Activity_Kind_ReportsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_kind_reports = /** @type {((inputs?: Profile_Activity_Kind_ReportsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Kind_ReportsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_kind_reports(inputs)
	if (locale === "de") return de_profile_activity_kind_reports(inputs)
	if (locale === "fr") return fr_profile_activity_kind_reports(inputs)
	if (locale === "it") return it_profile_activity_kind_reports(inputs)
	if (locale === "nl") return nl_profile_activity_kind_reports(inputs)
	if (locale === "pl") return pl_profile_activity_kind_reports(inputs)
	if (locale === "pt") return pt_profile_activity_kind_reports(inputs)
	if (locale === "ru") return ru_profile_activity_kind_reports(inputs)
	if (locale === "sv") return sv_profile_activity_kind_reports(inputs)
	if (locale === "tr") return tr_profile_activity_kind_reports(inputs)
	if (locale === "zh") return zh_profile_activity_kind_reports(inputs)
	if (locale === "ja") return ja_profile_activity_kind_reports(inputs)
	return en_profile_activity_kind_reports(inputs)
});
