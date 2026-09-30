/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_ByInputs */

const en_ranger_report_by = /** @type {(inputs: Ranger_Report_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reported by`)
};

const es_ranger_report_by = /** @type {(inputs: Ranger_Report_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportado por`)
};

const de_ranger_report_by = /** @type {(inputs: Ranger_Report_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemeldet von`)
};

const fr_ranger_report_by = /** @type {(inputs: Ranger_Report_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalé par`)
};

const it_ranger_report_by = /** @type {(inputs: Ranger_Report_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnalato da`)
};

const nl_ranger_report_by = /** @type {(inputs: Ranger_Report_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemeld door`)
};

const pl_ranger_report_by = /** @type {(inputs: Ranger_Report_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszone przez`)
};

const pt_ranger_report_by = /** @type {(inputs: Ranger_Report_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denunciado por`)
};

const ru_ranger_report_by = /** @type {(inputs: Ranger_Report_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пожаловался`)
};

const sv_ranger_report_by = /** @type {(inputs: Ranger_Report_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmäld av`)
};

const tr_ranger_report_by = /** @type {(inputs: Ranger_Report_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şikâyet eden`)
};

const zh_ranger_report_by = /** @type {(inputs: Ranger_Report_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`举报人`)
};

const ja_ranger_report_by = /** @type {(inputs: Ranger_Report_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告者`)
};

/**
* | output |
* | --- |
* | "Reported by" |
*
* @param {Ranger_Report_ByInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_by = /** @type {((inputs?: Ranger_Report_ByInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_ByInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_by(inputs)
	if (locale === "de") return de_ranger_report_by(inputs)
	if (locale === "fr") return fr_ranger_report_by(inputs)
	if (locale === "it") return it_ranger_report_by(inputs)
	if (locale === "nl") return nl_ranger_report_by(inputs)
	if (locale === "pl") return pl_ranger_report_by(inputs)
	if (locale === "pt") return pt_ranger_report_by(inputs)
	if (locale === "ru") return ru_ranger_report_by(inputs)
	if (locale === "sv") return sv_ranger_report_by(inputs)
	if (locale === "tr") return tr_ranger_report_by(inputs)
	if (locale === "zh") return zh_ranger_report_by(inputs)
	if (locale === "ja") return ja_ranger_report_by(inputs)
	return en_ranger_report_by(inputs)
});
