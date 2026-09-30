/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_First_Field_ReportInputs */

const en_signals_badge_name_first_field_report = /** @type {(inputs: Signals_Badge_Name_First_Field_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`First Field Report`)
};

const es_signals_badge_name_first_field_report = /** @type {(inputs: Signals_Badge_Name_First_Field_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primer reporte de campo`)
};

const de_signals_badge_name_first_field_report = /** @type {(inputs: Signals_Badge_Name_First_Field_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erster Feldbericht`)
};

const fr_signals_badge_name_first_field_report = /** @type {(inputs: Signals_Badge_Name_First_Field_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premier rapport de terrain`)
};

const it_signals_badge_name_first_field_report = /** @type {(inputs: Signals_Badge_Name_First_Field_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primo rapporto sul campo`)
};

const nl_signals_badge_name_first_field_report = /** @type {(inputs: Signals_Badge_Name_First_Field_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eerste veldrapport`)
};

const pl_signals_badge_name_first_field_report = /** @type {(inputs: Signals_Badge_Name_First_Field_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pierwszy raport terenowy`)
};

const pt_signals_badge_name_first_field_report = /** @type {(inputs: Signals_Badge_Name_First_Field_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primeiro relatório de campo`)
};

const ru_signals_badge_name_first_field_report = /** @type {(inputs: Signals_Badge_Name_First_Field_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Первый полевой отчёт`)
};

const sv_signals_badge_name_first_field_report = /** @type {(inputs: Signals_Badge_Name_First_Field_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Första fältrapporten`)
};

const tr_signals_badge_name_first_field_report = /** @type {(inputs: Signals_Badge_Name_First_Field_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk Saha Raporu`)
};

const zh_signals_badge_name_first_field_report = /** @type {(inputs: Signals_Badge_Name_First_Field_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`首份实地报告`)
};

const ja_signals_badge_name_first_field_report = /** @type {(inputs: Signals_Badge_Name_First_Field_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初のフィールドレポート`)
};

/**
* | output |
* | --- |
* | "First Field Report" |
*
* @param {Signals_Badge_Name_First_Field_ReportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_first_field_report = /** @type {((inputs?: Signals_Badge_Name_First_Field_ReportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_First_Field_ReportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_first_field_report(inputs)
	if (locale === "de") return de_signals_badge_name_first_field_report(inputs)
	if (locale === "fr") return fr_signals_badge_name_first_field_report(inputs)
	if (locale === "it") return it_signals_badge_name_first_field_report(inputs)
	if (locale === "nl") return nl_signals_badge_name_first_field_report(inputs)
	if (locale === "pl") return pl_signals_badge_name_first_field_report(inputs)
	if (locale === "pt") return pt_signals_badge_name_first_field_report(inputs)
	if (locale === "ru") return ru_signals_badge_name_first_field_report(inputs)
	if (locale === "sv") return sv_signals_badge_name_first_field_report(inputs)
	if (locale === "tr") return tr_signals_badge_name_first_field_report(inputs)
	if (locale === "zh") return zh_signals_badge_name_first_field_report(inputs)
	if (locale === "ja") return ja_signals_badge_name_first_field_report(inputs)
	return en_signals_badge_name_first_field_report(inputs)
});
