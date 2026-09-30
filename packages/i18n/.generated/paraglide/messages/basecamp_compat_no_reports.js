/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_No_ReportsInputs */

const en_basecamp_compat_no_reports = /** @type {(inputs: Basecamp_Compat_No_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No field reports yet.`)
};

const es_basecamp_compat_no_reports = /** @type {(inputs: Basecamp_Compat_No_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay reportes de campo.`)
};

const de_basecamp_compat_no_reports = /** @type {(inputs: Basecamp_Compat_No_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Feldberichte.`)
};

const fr_basecamp_compat_no_reports = /** @type {(inputs: Basecamp_Compat_No_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun rapport de terrain pour l’instant.`)
};

const it_basecamp_compat_no_reports = /** @type {(inputs: Basecamp_Compat_No_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun rapporto sul campo.`)
};

const nl_basecamp_compat_no_reports = /** @type {(inputs: Basecamp_Compat_No_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen veldrapporten.`)
};

const pl_basecamp_compat_no_reports = /** @type {(inputs: Basecamp_Compat_No_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na razie brak raportów terenowych.`)
};

const pt_basecamp_compat_no_reports = /** @type {(inputs: Basecamp_Compat_No_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há relatórios de campo.`)
};

const ru_basecamp_compat_no_reports = /** @type {(inputs: Basecamp_Compat_No_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевых отчётов пока нет.`)
};

const sv_basecamp_compat_no_reports = /** @type {(inputs: Basecamp_Compat_No_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga fältrapporter än.`)
};

const tr_basecamp_compat_no_reports = /** @type {(inputs: Basecamp_Compat_No_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz saha raporu yok.`)
};

const zh_basecamp_compat_no_reports = /** @type {(inputs: Basecamp_Compat_No_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有实地报告。`)
};

const ja_basecamp_compat_no_reports = /** @type {(inputs: Basecamp_Compat_No_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドレポートはまだありません。`)
};

/**
* | output |
* | --- |
* | "No field reports yet." |
*
* @param {Basecamp_Compat_No_ReportsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_no_reports = /** @type {((inputs?: Basecamp_Compat_No_ReportsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_No_ReportsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_no_reports(inputs)
	if (locale === "de") return de_basecamp_compat_no_reports(inputs)
	if (locale === "fr") return fr_basecamp_compat_no_reports(inputs)
	if (locale === "it") return it_basecamp_compat_no_reports(inputs)
	if (locale === "nl") return nl_basecamp_compat_no_reports(inputs)
	if (locale === "pl") return pl_basecamp_compat_no_reports(inputs)
	if (locale === "pt") return pt_basecamp_compat_no_reports(inputs)
	if (locale === "ru") return ru_basecamp_compat_no_reports(inputs)
	if (locale === "sv") return sv_basecamp_compat_no_reports(inputs)
	if (locale === "tr") return tr_basecamp_compat_no_reports(inputs)
	if (locale === "zh") return zh_basecamp_compat_no_reports(inputs)
	if (locale === "ja") return ja_basecamp_compat_no_reports(inputs)
	return en_basecamp_compat_no_reports(inputs)
});
