/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reports_FilterInputs */

const en_ranger_reports_filter = /** @type {(inputs: Ranger_Reports_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report status`)
};

const es_ranger_reports_filter = /** @type {(inputs: Ranger_Reports_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado del reporte`)
};

const de_ranger_reports_filter = /** @type {(inputs: Ranger_Reports_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status der Meldung`)
};

const fr_ranger_reports_filter = /** @type {(inputs: Ranger_Reports_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`État du signalement`)
};

const it_ranger_reports_filter = /** @type {(inputs: Ranger_Reports_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stato della segnalazione`)
};

const nl_ranger_reports_filter = /** @type {(inputs: Ranger_Reports_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status van de melding`)
};

const pl_ranger_reports_filter = /** @type {(inputs: Ranger_Reports_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stan zgłoszenia`)
};

const pt_ranger_reports_filter = /** @type {(inputs: Ranger_Reports_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status da denúncia`)
};

const ru_ranger_reports_filter = /** @type {(inputs: Ranger_Reports_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статус жалобы`)
};

const sv_ranger_reports_filter = /** @type {(inputs: Ranger_Reports_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmälans status`)
};

const tr_ranger_reports_filter = /** @type {(inputs: Ranger_Reports_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şikâyet durumu`)
};

const zh_ranger_reports_filter = /** @type {(inputs: Ranger_Reports_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`举报状态`)
};

const ja_ranger_reports_filter = /** @type {(inputs: Ranger_Reports_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告の状態`)
};

/**
* | output |
* | --- |
* | "Report status" |
*
* @param {Ranger_Reports_FilterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reports_filter = /** @type {((inputs?: Ranger_Reports_FilterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reports_FilterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reports_filter(inputs)
	if (locale === "de") return de_ranger_reports_filter(inputs)
	if (locale === "fr") return fr_ranger_reports_filter(inputs)
	if (locale === "it") return it_ranger_reports_filter(inputs)
	if (locale === "nl") return nl_ranger_reports_filter(inputs)
	if (locale === "pl") return pl_ranger_reports_filter(inputs)
	if (locale === "pt") return pt_ranger_reports_filter(inputs)
	if (locale === "ru") return ru_ranger_reports_filter(inputs)
	if (locale === "sv") return sv_ranger_reports_filter(inputs)
	if (locale === "tr") return tr_ranger_reports_filter(inputs)
	if (locale === "zh") return zh_ranger_reports_filter(inputs)
	if (locale === "ja") return ja_ranger_reports_filter(inputs)
	return en_ranger_reports_filter(inputs)
});
