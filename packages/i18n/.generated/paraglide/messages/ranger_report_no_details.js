/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_No_DetailsInputs */

const en_ranger_report_no_details = /** @type {(inputs: Ranger_Report_No_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No details given.`)
};

const es_ranger_report_no_details = /** @type {(inputs: Ranger_Report_No_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin detalles.`)
};

const de_ranger_report_no_details = /** @type {(inputs: Ranger_Report_No_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Details angegeben.`)
};

const fr_ranger_report_no_details = /** @type {(inputs: Ranger_Report_No_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun détail fourni.`)
};

const it_ranger_report_no_details = /** @type {(inputs: Ranger_Report_No_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun dettaglio fornito.`)
};

const nl_ranger_report_no_details = /** @type {(inputs: Ranger_Report_No_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen details opgegeven.`)
};

const pl_ranger_report_no_details = /** @type {(inputs: Ranger_Report_No_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie podano szczegółów.`)
};

const pt_ranger_report_no_details = /** @type {(inputs: Ranger_Report_No_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem detalhes.`)
};

const ru_ranger_report_no_details = /** @type {(inputs: Ranger_Report_No_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подробностей нет.`)
};

const sv_ranger_report_no_details = /** @type {(inputs: Ranger_Report_No_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga detaljer angivna.`)
};

const tr_ranger_report_no_details = /** @type {(inputs: Ranger_Report_No_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayrıntı verilmedi.`)
};

const zh_ranger_report_no_details = /** @type {(inputs: Ranger_Report_No_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未提供详情。`)
};

const ja_ranger_report_no_details = /** @type {(inputs: Ranger_Report_No_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細はありません。`)
};

/**
* | output |
* | --- |
* | "No details given." |
*
* @param {Ranger_Report_No_DetailsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_no_details = /** @type {((inputs?: Ranger_Report_No_DetailsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_No_DetailsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_no_details(inputs)
	if (locale === "de") return de_ranger_report_no_details(inputs)
	if (locale === "fr") return fr_ranger_report_no_details(inputs)
	if (locale === "it") return it_ranger_report_no_details(inputs)
	if (locale === "nl") return nl_ranger_report_no_details(inputs)
	if (locale === "pl") return pl_ranger_report_no_details(inputs)
	if (locale === "pt") return pt_ranger_report_no_details(inputs)
	if (locale === "ru") return ru_ranger_report_no_details(inputs)
	if (locale === "sv") return sv_ranger_report_no_details(inputs)
	if (locale === "tr") return tr_ranger_report_no_details(inputs)
	if (locale === "zh") return zh_ranger_report_no_details(inputs)
	if (locale === "ja") return ja_ranger_report_no_details(inputs)
	return en_ranger_report_no_details(inputs)
});
