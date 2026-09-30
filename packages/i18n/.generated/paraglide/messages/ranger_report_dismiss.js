/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_DismissInputs */

const en_ranger_report_dismiss = /** @type {(inputs: Ranger_Report_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dismiss`)
};

const es_ranger_report_dismiss = /** @type {(inputs: Ranger_Report_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar`)
};

const de_ranger_report_dismiss = /** @type {(inputs: Ranger_Report_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwerfen`)
};

const fr_ranger_report_dismiss = /** @type {(inputs: Ranger_Report_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rejeter`)
};

const it_ranger_report_dismiss = /** @type {(inputs: Ranger_Report_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivia`)
};

const nl_ranger_report_dismiss = /** @type {(inputs: Ranger_Report_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afwijzen`)
};

const pl_ranger_report_dismiss = /** @type {(inputs: Ranger_Report_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzuć`)
};

const pt_ranger_report_dismiss = /** @type {(inputs: Ranger_Report_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar`)
};

const ru_ranger_report_dismiss = /** @type {(inputs: Ranger_Report_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отклонить`)
};

const sv_ranger_report_dismiss = /** @type {(inputs: Ranger_Report_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avfärda`)
};

const tr_ranger_report_dismiss = /** @type {(inputs: Ranger_Report_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reddet`)
};

const zh_ranger_report_dismiss = /** @type {(inputs: Ranger_Report_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`驳回`)
};

const ja_ranger_report_dismiss = /** @type {(inputs: Ranger_Report_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`却下`)
};

/**
* | output |
* | --- |
* | "Dismiss" |
*
* @param {Ranger_Report_DismissInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_dismiss = /** @type {((inputs?: Ranger_Report_DismissInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_DismissInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_dismiss(inputs)
	if (locale === "de") return de_ranger_report_dismiss(inputs)
	if (locale === "fr") return fr_ranger_report_dismiss(inputs)
	if (locale === "it") return it_ranger_report_dismiss(inputs)
	if (locale === "nl") return nl_ranger_report_dismiss(inputs)
	if (locale === "pl") return pl_ranger_report_dismiss(inputs)
	if (locale === "pt") return pt_ranger_report_dismiss(inputs)
	if (locale === "ru") return ru_ranger_report_dismiss(inputs)
	if (locale === "sv") return sv_ranger_report_dismiss(inputs)
	if (locale === "tr") return tr_ranger_report_dismiss(inputs)
	if (locale === "zh") return zh_ranger_report_dismiss(inputs)
	if (locale === "ja") return ja_ranger_report_dismiss(inputs)
	return en_ranger_report_dismiss(inputs)
});
