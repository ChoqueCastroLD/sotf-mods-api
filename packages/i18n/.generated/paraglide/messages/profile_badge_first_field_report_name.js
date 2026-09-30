/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_First_Field_Report_NameInputs */

const en_profile_badge_first_field_report_name = /** @type {(inputs: Profile_Badge_First_Field_Report_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`First Field Report`)
};

const es_profile_badge_first_field_report_name = /** @type {(inputs: Profile_Badge_First_Field_Report_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primer reporte de campo`)
};

const de_profile_badge_first_field_report_name = /** @type {(inputs: Profile_Badge_First_Field_Report_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erster Feldbericht`)
};

const fr_profile_badge_first_field_report_name = /** @type {(inputs: Profile_Badge_First_Field_Report_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premier rapport de terrain`)
};

const it_profile_badge_first_field_report_name = /** @type {(inputs: Profile_Badge_First_Field_Report_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primo rapporto sul campo`)
};

const nl_profile_badge_first_field_report_name = /** @type {(inputs: Profile_Badge_First_Field_Report_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eerste veldrapport`)
};

const pl_profile_badge_first_field_report_name = /** @type {(inputs: Profile_Badge_First_Field_Report_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pierwszy raport terenowy`)
};

const pt_profile_badge_first_field_report_name = /** @type {(inputs: Profile_Badge_First_Field_Report_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primeiro relatório de campo`)
};

const ru_profile_badge_first_field_report_name = /** @type {(inputs: Profile_Badge_First_Field_Report_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Первый полевой отчёт`)
};

const sv_profile_badge_first_field_report_name = /** @type {(inputs: Profile_Badge_First_Field_Report_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Första fältrapporten`)
};

const tr_profile_badge_first_field_report_name = /** @type {(inputs: Profile_Badge_First_Field_Report_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk Saha Raporu`)
};

const zh_profile_badge_first_field_report_name = /** @type {(inputs: Profile_Badge_First_Field_Report_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`首份实地报告`)
};

const ja_profile_badge_first_field_report_name = /** @type {(inputs: Profile_Badge_First_Field_Report_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初のフィールドレポート`)
};

/**
* | output |
* | --- |
* | "First Field Report" |
*
* @param {Profile_Badge_First_Field_Report_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_first_field_report_name = /** @type {((inputs?: Profile_Badge_First_Field_Report_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_First_Field_Report_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_first_field_report_name(inputs)
	if (locale === "de") return de_profile_badge_first_field_report_name(inputs)
	if (locale === "fr") return fr_profile_badge_first_field_report_name(inputs)
	if (locale === "it") return it_profile_badge_first_field_report_name(inputs)
	if (locale === "nl") return nl_profile_badge_first_field_report_name(inputs)
	if (locale === "pl") return pl_profile_badge_first_field_report_name(inputs)
	if (locale === "pt") return pt_profile_badge_first_field_report_name(inputs)
	if (locale === "ru") return ru_profile_badge_first_field_report_name(inputs)
	if (locale === "sv") return sv_profile_badge_first_field_report_name(inputs)
	if (locale === "tr") return tr_profile_badge_first_field_report_name(inputs)
	if (locale === "zh") return zh_profile_badge_first_field_report_name(inputs)
	if (locale === "ja") return ja_profile_badge_first_field_report_name(inputs)
	return en_profile_badge_first_field_report_name(inputs)
});
