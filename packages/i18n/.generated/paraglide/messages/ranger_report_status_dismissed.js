/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_Status_DismissedInputs */

const en_ranger_report_status_dismissed = /** @type {(inputs: Ranger_Report_Status_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dismissed`)
};

const es_ranger_report_status_dismissed = /** @type {(inputs: Ranger_Report_Status_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartados`)
};

const de_ranger_report_status_dismissed = /** @type {(inputs: Ranger_Report_Status_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verworfen`)
};

const fr_ranger_report_status_dismissed = /** @type {(inputs: Ranger_Report_Status_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rejetés`)
};

const it_ranger_report_status_dismissed = /** @type {(inputs: Ranger_Report_Status_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiviate`)
};

const nl_ranger_report_status_dismissed = /** @type {(inputs: Ranger_Report_Status_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afgewezen`)
};

const pl_ranger_report_status_dismissed = /** @type {(inputs: Ranger_Report_Status_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzucone`)
};

const pt_ranger_report_status_dismissed = /** @type {(inputs: Ranger_Report_Status_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartadas`)
};

const ru_ranger_report_status_dismissed = /** @type {(inputs: Ranger_Report_Status_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отклонённые`)
};

const sv_ranger_report_status_dismissed = /** @type {(inputs: Ranger_Report_Status_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avfärdade`)
};

const tr_ranger_report_status_dismissed = /** @type {(inputs: Ranger_Report_Status_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reddedildi`)
};

const zh_ranger_report_status_dismissed = /** @type {(inputs: Ranger_Report_Status_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已驳回`)
};

const ja_ranger_report_status_dismissed = /** @type {(inputs: Ranger_Report_Status_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`却下済み`)
};

/**
* | output |
* | --- |
* | "Dismissed" |
*
* @param {Ranger_Report_Status_DismissedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_status_dismissed = /** @type {((inputs?: Ranger_Report_Status_DismissedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_Status_DismissedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_status_dismissed(inputs)
	if (locale === "de") return de_ranger_report_status_dismissed(inputs)
	if (locale === "fr") return fr_ranger_report_status_dismissed(inputs)
	if (locale === "it") return it_ranger_report_status_dismissed(inputs)
	if (locale === "nl") return nl_ranger_report_status_dismissed(inputs)
	if (locale === "pl") return pl_ranger_report_status_dismissed(inputs)
	if (locale === "pt") return pt_ranger_report_status_dismissed(inputs)
	if (locale === "ru") return ru_ranger_report_status_dismissed(inputs)
	if (locale === "sv") return sv_ranger_report_status_dismissed(inputs)
	if (locale === "tr") return tr_ranger_report_status_dismissed(inputs)
	if (locale === "zh") return zh_ranger_report_status_dismissed(inputs)
	if (locale === "ja") return ja_ranger_report_status_dismissed(inputs)
	return en_ranger_report_status_dismissed(inputs)
});
