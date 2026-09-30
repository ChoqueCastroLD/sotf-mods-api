/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Col_ReportsInputs */

const en_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reports`)
};

const es_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportes`)
};

const de_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Berichte`)
};

const fr_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapports`)
};

const it_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporti`)
};

const nl_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporten`)
};

const pl_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raporty`)
};

const pt_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatórios`)
};

const ru_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отчёты`)
};

const sv_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporter`)
};

const tr_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raporlar`)
};

const zh_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`报告`)
};

const ja_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レポート`)
};

/**
* | output |
* | --- |
* | "Reports" |
*
* @param {Basecamp_Mods_Col_ReportsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_col_reports = /** @type {((inputs?: Basecamp_Mods_Col_ReportsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Col_ReportsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_col_reports(inputs)
	if (locale === "de") return de_basecamp_mods_col_reports(inputs)
	if (locale === "fr") return fr_basecamp_mods_col_reports(inputs)
	if (locale === "it") return it_basecamp_mods_col_reports(inputs)
	if (locale === "nl") return nl_basecamp_mods_col_reports(inputs)
	if (locale === "pl") return pl_basecamp_mods_col_reports(inputs)
	if (locale === "pt") return pt_basecamp_mods_col_reports(inputs)
	if (locale === "ru") return ru_basecamp_mods_col_reports(inputs)
	if (locale === "sv") return sv_basecamp_mods_col_reports(inputs)
	if (locale === "tr") return tr_basecamp_mods_col_reports(inputs)
	if (locale === "zh") return zh_basecamp_mods_col_reports(inputs)
	if (locale === "ja") return ja_basecamp_mods_col_reports(inputs)
	return en_basecamp_mods_col_reports(inputs)
});
