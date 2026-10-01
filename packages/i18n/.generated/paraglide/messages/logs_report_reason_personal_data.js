/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Report_Reason_Personal_DataInputs */

const en_logs_report_reason_personal_data = /** @type {(inputs: Logs_Report_Reason_Personal_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shows personal data`)
};

const es_logs_report_reason_personal_data = /** @type {(inputs: Logs_Report_Reason_Personal_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Muestra datos personales`)
};

const de_logs_report_reason_personal_data = /** @type {(inputs: Logs_Report_Reason_Personal_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeigt persönliche Daten`)
};

const fr_logs_report_reason_personal_data = /** @type {(inputs: Logs_Report_Reason_Personal_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Montre des données personnelles`)
};

const it_logs_report_reason_personal_data = /** @type {(inputs: Logs_Report_Reason_Personal_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra dati personali`)
};

const nl_logs_report_reason_personal_data = /** @type {(inputs: Logs_Report_Reason_Personal_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toont persoonlijke gegevens`)
};

const pl_logs_report_reason_personal_data = /** @type {(inputs: Logs_Report_Reason_Personal_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokazuje dane osobowe`)
};

const pt_logs_report_reason_personal_data = /** @type {(inputs: Logs_Report_Reason_Personal_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra dados pessoais`)
};

const ru_logs_report_reason_personal_data = /** @type {(inputs: Logs_Report_Reason_Personal_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показывает личные данные`)
};

const sv_logs_report_reason_personal_data = /** @type {(inputs: Logs_Report_Reason_Personal_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visar personuppgifter`)
};

const tr_logs_report_reason_personal_data = /** @type {(inputs: Logs_Report_Reason_Personal_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kişisel veri gösteriyor`)
};

const zh_logs_report_reason_personal_data = /** @type {(inputs: Logs_Report_Reason_Personal_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暴露个人信息`)
};

const ja_logs_report_reason_personal_data = /** @type {(inputs: Logs_Report_Reason_Personal_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`個人情報が含まれている`)
};

/**
* | output |
* | --- |
* | "Shows personal data" |
*
* @param {Logs_Report_Reason_Personal_DataInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_report_reason_personal_data = /** @type {((inputs?: Logs_Report_Reason_Personal_DataInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Report_Reason_Personal_DataInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_report_reason_personal_data(inputs)
	if (locale === "de") return de_logs_report_reason_personal_data(inputs)
	if (locale === "fr") return fr_logs_report_reason_personal_data(inputs)
	if (locale === "it") return it_logs_report_reason_personal_data(inputs)
	if (locale === "nl") return nl_logs_report_reason_personal_data(inputs)
	if (locale === "pl") return pl_logs_report_reason_personal_data(inputs)
	if (locale === "pt") return pt_logs_report_reason_personal_data(inputs)
	if (locale === "ru") return ru_logs_report_reason_personal_data(inputs)
	if (locale === "sv") return sv_logs_report_reason_personal_data(inputs)
	if (locale === "tr") return tr_logs_report_reason_personal_data(inputs)
	if (locale === "zh") return zh_logs_report_reason_personal_data(inputs)
	if (locale === "ja") return ja_logs_report_reason_personal_data(inputs)
	return en_logs_report_reason_personal_data(inputs)
});
