/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_Status_ResolvedInputs */

const en_ranger_report_status_resolved = /** @type {(inputs: Ranger_Report_Status_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resolved`)
};

const es_ranger_report_status_resolved = /** @type {(inputs: Ranger_Report_Status_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resueltos`)
};

const de_ranger_report_status_resolved = /** @type {(inputs: Ranger_Report_Status_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erledigt`)
};

const fr_ranger_report_status_resolved = /** @type {(inputs: Ranger_Report_Status_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Résolus`)
};

const it_ranger_report_status_resolved = /** @type {(inputs: Ranger_Report_Status_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risolte`)
};

const nl_ranger_report_status_resolved = /** @type {(inputs: Ranger_Report_Status_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afgehandeld`)
};

const pl_ranger_report_status_resolved = /** @type {(inputs: Ranger_Report_Status_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozwiązane`)
};

const pt_ranger_report_status_resolved = /** @type {(inputs: Ranger_Report_Status_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resolvidas`)
};

const ru_ranger_report_status_resolved = /** @type {(inputs: Ranger_Report_Status_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Решённые`)
};

const sv_ranger_report_status_resolved = /** @type {(inputs: Ranger_Report_Status_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lösta`)
};

const tr_ranger_report_status_resolved = /** @type {(inputs: Ranger_Report_Status_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çözüldü`)
};

const zh_ranger_report_status_resolved = /** @type {(inputs: Ranger_Report_Status_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已解决`)
};

const ja_ranger_report_status_resolved = /** @type {(inputs: Ranger_Report_Status_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解決済み`)
};

/**
* | output |
* | --- |
* | "Resolved" |
*
* @param {Ranger_Report_Status_ResolvedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_status_resolved = /** @type {((inputs?: Ranger_Report_Status_ResolvedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_Status_ResolvedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_status_resolved(inputs)
	if (locale === "de") return de_ranger_report_status_resolved(inputs)
	if (locale === "fr") return fr_ranger_report_status_resolved(inputs)
	if (locale === "it") return it_ranger_report_status_resolved(inputs)
	if (locale === "nl") return nl_ranger_report_status_resolved(inputs)
	if (locale === "pl") return pl_ranger_report_status_resolved(inputs)
	if (locale === "pt") return pt_ranger_report_status_resolved(inputs)
	if (locale === "ru") return ru_ranger_report_status_resolved(inputs)
	if (locale === "sv") return sv_ranger_report_status_resolved(inputs)
	if (locale === "tr") return tr_ranger_report_status_resolved(inputs)
	if (locale === "zh") return zh_ranger_report_status_resolved(inputs)
	if (locale === "ja") return ja_ranger_report_status_resolved(inputs)
	return en_ranger_report_status_resolved(inputs)
});
