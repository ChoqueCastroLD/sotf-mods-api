/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ share: NonNullable<unknown> }} Content_Radar_Uptime_OverallInputs */

const en_content_radar_uptime_overall = /** @type {(inputs: Content_Radar_Uptime_OverallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} of the checks had everything up.`)
};

const es_content_radar_uptime_overall = /** @type {(inputs: Content_Radar_Uptime_OverallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} de las comprobaciones tuvo todo en marcha.`)
};

const de_content_radar_uptime_overall = /** @type {(inputs: Content_Radar_Uptime_OverallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bei ${i?.share} der Prüfungen lief alles.`)
};

const fr_content_radar_uptime_overall = /** @type {(inputs: Content_Radar_Uptime_OverallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} des tests avaient tout en ligne.`)
};

const it_content_radar_uptime_overall = /** @type {(inputs: Content_Radar_Uptime_OverallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nel ${i?.share} dei controlli era tutto attivo.`)
};

const nl_content_radar_uptime_overall = /** @type {(inputs: Content_Radar_Uptime_OverallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bij ${i?.share} van de tests werkte alles.`)
};

const pl_content_radar_uptime_overall = /** @type {(inputs: Content_Radar_Uptime_OverallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} sprawdzeń zakończyło się pełnym powodzeniem.`)
};

const pt_content_radar_uptime_overall = /** @type {(inputs: Content_Radar_Uptime_OverallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} das verificações tinha tudo no ar.`)
};

const ru_content_radar_uptime_overall = /** @type {(inputs: Content_Radar_Uptime_OverallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`В ${i?.share} проверок всё работало.`)
};

const sv_content_radar_uptime_overall = /** @type {(inputs: Content_Radar_Uptime_OverallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} av kontrollerna hade allt uppe.`)
};

const tr_content_radar_uptime_overall = /** @type {(inputs: Content_Radar_Uptime_OverallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Denetimlerin ${i?.share} oranında her şey çalışıyordu.`)
};

const zh_content_radar_uptime_overall = /** @type {(inputs: Content_Radar_Uptime_OverallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} 的检测中所有组件均正常。`)
};

const ja_content_radar_uptime_overall = /** @type {(inputs: Content_Radar_Uptime_OverallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`全体が正常だった確認は ${i?.share} でした。`)
};

/**
* | output |
* | --- |
* | "{share} of the checks had everything up." |
*
* @param {Content_Radar_Uptime_OverallInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_uptime_overall = /** @type {((inputs: Content_Radar_Uptime_OverallInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_OverallInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_uptime_overall(inputs)
	if (locale === "de") return de_content_radar_uptime_overall(inputs)
	if (locale === "fr") return fr_content_radar_uptime_overall(inputs)
	if (locale === "it") return it_content_radar_uptime_overall(inputs)
	if (locale === "nl") return nl_content_radar_uptime_overall(inputs)
	if (locale === "pl") return pl_content_radar_uptime_overall(inputs)
	if (locale === "pt") return pt_content_radar_uptime_overall(inputs)
	if (locale === "ru") return ru_content_radar_uptime_overall(inputs)
	if (locale === "sv") return sv_content_radar_uptime_overall(inputs)
	if (locale === "tr") return tr_content_radar_uptime_overall(inputs)
	if (locale === "zh") return zh_content_radar_uptime_overall(inputs)
	if (locale === "ja") return ja_content_radar_uptime_overall(inputs)
	return en_content_radar_uptime_overall(inputs)
});
