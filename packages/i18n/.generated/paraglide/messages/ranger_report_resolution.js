/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ note: NonNullable<unknown> }} Ranger_Report_ResolutionInputs */

const en_ranger_report_resolution = /** @type {(inputs: Ranger_Report_ResolutionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resolution: ${i?.note}`)
};

const es_ranger_report_resolution = /** @type {(inputs: Ranger_Report_ResolutionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resolución: ${i?.note}`)
};

const de_ranger_report_resolution = /** @type {(inputs: Ranger_Report_ResolutionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lösung: ${i?.note}`)
};

const fr_ranger_report_resolution = /** @type {(inputs: Ranger_Report_ResolutionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Résolution : ${i?.note}`)
};

const it_ranger_report_resolution = /** @type {(inputs: Ranger_Report_ResolutionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Risoluzione: ${i?.note}`)
};

const nl_ranger_report_resolution = /** @type {(inputs: Ranger_Report_ResolutionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afhandeling: ${i?.note}`)
};

const pl_ranger_report_resolution = /** @type {(inputs: Ranger_Report_ResolutionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rozwiązanie: ${i?.note}`)
};

const pt_ranger_report_resolution = /** @type {(inputs: Ranger_Report_ResolutionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resolução: ${i?.note}`)
};

const ru_ranger_report_resolution = /** @type {(inputs: Ranger_Report_ResolutionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Решение: ${i?.note}`)
};

const sv_ranger_report_resolution = /** @type {(inputs: Ranger_Report_ResolutionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lösning: ${i?.note}`)
};

const tr_ranger_report_resolution = /** @type {(inputs: Ranger_Report_ResolutionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Çözüm: ${i?.note}`)
};

const zh_ranger_report_resolution = /** @type {(inputs: Ranger_Report_ResolutionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`处理结果：${i?.note}`)
};

const ja_ranger_report_resolution = /** @type {(inputs: Ranger_Report_ResolutionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`対応内容：${i?.note}`)
};

/**
* | output |
* | --- |
* | "Resolution: {note}" |
*
* @param {Ranger_Report_ResolutionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_resolution = /** @type {((inputs: Ranger_Report_ResolutionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_ResolutionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_resolution(inputs)
	if (locale === "de") return de_ranger_report_resolution(inputs)
	if (locale === "fr") return fr_ranger_report_resolution(inputs)
	if (locale === "it") return it_ranger_report_resolution(inputs)
	if (locale === "nl") return nl_ranger_report_resolution(inputs)
	if (locale === "pl") return pl_ranger_report_resolution(inputs)
	if (locale === "pt") return pt_ranger_report_resolution(inputs)
	if (locale === "ru") return ru_ranger_report_resolution(inputs)
	if (locale === "sv") return sv_ranger_report_resolution(inputs)
	if (locale === "tr") return tr_ranger_report_resolution(inputs)
	if (locale === "zh") return zh_ranger_report_resolution(inputs)
	if (locale === "ja") return ja_ranger_report_resolution(inputs)
	return en_ranger_report_resolution(inputs)
});
