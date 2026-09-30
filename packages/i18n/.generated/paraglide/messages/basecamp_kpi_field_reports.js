/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Kpi_Field_ReportsInputs */

const en_basecamp_kpi_field_reports = /** @type {(inputs: Basecamp_Kpi_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field reports · works`)
};

const es_basecamp_kpi_field_reports = /** @type {(inputs: Basecamp_Kpi_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportes de campo · funciona`)
};

const de_basecamp_kpi_field_reports = /** @type {(inputs: Basecamp_Kpi_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldberichte · funktioniert`)
};

const fr_basecamp_kpi_field_reports = /** @type {(inputs: Basecamp_Kpi_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapports de terrain · fonctionne`)
};

const it_basecamp_kpi_field_reports = /** @type {(inputs: Basecamp_Kpi_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporti sul campo · funziona`)
};

const nl_basecamp_kpi_field_reports = /** @type {(inputs: Basecamp_Kpi_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldrapporten · werkt`)
};

const pl_basecamp_kpi_field_reports = /** @type {(inputs: Basecamp_Kpi_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raporty terenowe · działa`)
};

const pt_basecamp_kpi_field_reports = /** @type {(inputs: Basecamp_Kpi_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatórios de campo · funciona`)
};

const ru_basecamp_kpi_field_reports = /** @type {(inputs: Basecamp_Kpi_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевые отчёты · работает`)
};

const sv_basecamp_kpi_field_reports = /** @type {(inputs: Basecamp_Kpi_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältrapporter · fungerar`)
};

const tr_basecamp_kpi_field_reports = /** @type {(inputs: Basecamp_Kpi_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha raporları · çalışıyor`)
};

const zh_basecamp_kpi_field_reports = /** @type {(inputs: Basecamp_Kpi_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实地报告 · 可用`)
};

const ja_basecamp_kpi_field_reports = /** @type {(inputs: Basecamp_Kpi_Field_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドレポート · 動作`)
};

/**
* | output |
* | --- |
* | "Field reports · works" |
*
* @param {Basecamp_Kpi_Field_ReportsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_kpi_field_reports = /** @type {((inputs?: Basecamp_Kpi_Field_ReportsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kpi_Field_ReportsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_kpi_field_reports(inputs)
	if (locale === "de") return de_basecamp_kpi_field_reports(inputs)
	if (locale === "fr") return fr_basecamp_kpi_field_reports(inputs)
	if (locale === "it") return it_basecamp_kpi_field_reports(inputs)
	if (locale === "nl") return nl_basecamp_kpi_field_reports(inputs)
	if (locale === "pl") return pl_basecamp_kpi_field_reports(inputs)
	if (locale === "pt") return pt_basecamp_kpi_field_reports(inputs)
	if (locale === "ru") return ru_basecamp_kpi_field_reports(inputs)
	if (locale === "sv") return sv_basecamp_kpi_field_reports(inputs)
	if (locale === "tr") return tr_basecamp_kpi_field_reports(inputs)
	if (locale === "zh") return zh_basecamp_kpi_field_reports(inputs)
	if (locale === "ja") return ja_basecamp_kpi_field_reports(inputs)
	return en_basecamp_kpi_field_reports(inputs)
});
