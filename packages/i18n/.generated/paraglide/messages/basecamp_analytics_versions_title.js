/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Versions_TitleInputs */

const en_basecamp_analytics_versions_title = /** @type {(inputs: Basecamp_Analytics_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`By version`)
};

const es_basecamp_analytics_versions_title = /** @type {(inputs: Basecamp_Analytics_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por versión`)
};

const de_basecamp_analytics_versions_title = /** @type {(inputs: Basecamp_Analytics_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nach Version`)
};

const fr_basecamp_analytics_versions_title = /** @type {(inputs: Basecamp_Analytics_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Par version`)
};

const it_basecamp_analytics_versions_title = /** @type {(inputs: Basecamp_Analytics_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per versione`)
};

const nl_basecamp_analytics_versions_title = /** @type {(inputs: Basecamp_Analytics_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per versie`)
};

const pl_basecamp_analytics_versions_title = /** @type {(inputs: Basecamp_Analytics_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Według wersji`)
};

const pt_basecamp_analytics_versions_title = /** @type {(inputs: Basecamp_Analytics_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por versão`)
};

const ru_basecamp_analytics_versions_title = /** @type {(inputs: Basecamp_Analytics_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По версиям`)
};

const sv_basecamp_analytics_versions_title = /** @type {(inputs: Basecamp_Analytics_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per version`)
};

const tr_basecamp_analytics_versions_title = /** @type {(inputs: Basecamp_Analytics_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüme göre`)
};

const zh_basecamp_analytics_versions_title = /** @type {(inputs: Basecamp_Analytics_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按版本`)
};

const ja_basecamp_analytics_versions_title = /** @type {(inputs: Basecamp_Analytics_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン別`)
};

/**
* | output |
* | --- |
* | "By version" |
*
* @param {Basecamp_Analytics_Versions_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_versions_title = /** @type {((inputs?: Basecamp_Analytics_Versions_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Versions_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_versions_title(inputs)
	if (locale === "de") return de_basecamp_analytics_versions_title(inputs)
	if (locale === "fr") return fr_basecamp_analytics_versions_title(inputs)
	if (locale === "it") return it_basecamp_analytics_versions_title(inputs)
	if (locale === "nl") return nl_basecamp_analytics_versions_title(inputs)
	if (locale === "pl") return pl_basecamp_analytics_versions_title(inputs)
	if (locale === "pt") return pt_basecamp_analytics_versions_title(inputs)
	if (locale === "ru") return ru_basecamp_analytics_versions_title(inputs)
	if (locale === "sv") return sv_basecamp_analytics_versions_title(inputs)
	if (locale === "tr") return tr_basecamp_analytics_versions_title(inputs)
	if (locale === "zh") return zh_basecamp_analytics_versions_title(inputs)
	if (locale === "ja") return ja_basecamp_analytics_versions_title(inputs)
	return en_basecamp_analytics_versions_title(inputs)
});
