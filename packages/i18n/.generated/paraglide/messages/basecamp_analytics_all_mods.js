/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_All_ModsInputs */

const en_basecamp_analytics_all_mods = /** @type {(inputs: Basecamp_Analytics_All_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All my mods`)
};

const es_basecamp_analytics_all_mods = /** @type {(inputs: Basecamp_Analytics_All_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos mis mods`)
};

const de_basecamp_analytics_all_mods = /** @type {(inputs: Basecamp_Analytics_All_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle meine Mods`)
};

const fr_basecamp_analytics_all_mods = /** @type {(inputs: Basecamp_Analytics_All_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous mes mods`)
};

const it_basecamp_analytics_all_mods = /** @type {(inputs: Basecamp_Analytics_All_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le mie mod`)
};

const nl_basecamp_analytics_all_mods = /** @type {(inputs: Basecamp_Analytics_All_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al mijn mods`)
};

const pl_basecamp_analytics_all_mods = /** @type {(inputs: Basecamp_Analytics_All_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie moje mody`)
};

const pt_basecamp_analytics_all_mods = /** @type {(inputs: Basecamp_Analytics_All_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os meus mods`)
};

const ru_basecamp_analytics_all_mods = /** @type {(inputs: Basecamp_Analytics_All_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все мои моды`)
};

const sv_basecamp_analytics_all_mods = /** @type {(inputs: Basecamp_Analytics_All_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla mina moddar`)
};

const tr_basecamp_analytics_all_mods = /** @type {(inputs: Basecamp_Analytics_All_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm modlarım`)
};

const zh_basecamp_analytics_all_mods = /** @type {(inputs: Basecamp_Analytics_All_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我的全部模组`)
};

const ja_basecamp_analytics_all_mods = /** @type {(inputs: Basecamp_Analytics_All_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての MOD`)
};

/**
* | output |
* | --- |
* | "All my mods" |
*
* @param {Basecamp_Analytics_All_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_all_mods = /** @type {((inputs?: Basecamp_Analytics_All_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_All_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_all_mods(inputs)
	if (locale === "de") return de_basecamp_analytics_all_mods(inputs)
	if (locale === "fr") return fr_basecamp_analytics_all_mods(inputs)
	if (locale === "it") return it_basecamp_analytics_all_mods(inputs)
	if (locale === "nl") return nl_basecamp_analytics_all_mods(inputs)
	if (locale === "pl") return pl_basecamp_analytics_all_mods(inputs)
	if (locale === "pt") return pt_basecamp_analytics_all_mods(inputs)
	if (locale === "ru") return ru_basecamp_analytics_all_mods(inputs)
	if (locale === "sv") return sv_basecamp_analytics_all_mods(inputs)
	if (locale === "tr") return tr_basecamp_analytics_all_mods(inputs)
	if (locale === "zh") return zh_basecamp_analytics_all_mods(inputs)
	if (locale === "ja") return ja_basecamp_analytics_all_mods(inputs)
	return en_basecamp_analytics_all_mods(inputs)
});
