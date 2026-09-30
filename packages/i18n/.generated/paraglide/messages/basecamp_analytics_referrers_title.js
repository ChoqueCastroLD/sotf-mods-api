/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Referrers_TitleInputs */

const en_basecamp_analytics_referrers_title = /** @type {(inputs: Basecamp_Analytics_Referrers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Where visitors come from`)
};

const es_basecamp_analytics_referrers_title = /** @type {(inputs: Basecamp_Analytics_Referrers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De dónde vienen las visitas`)
};

const de_basecamp_analytics_referrers_title = /** @type {(inputs: Basecamp_Analytics_Referrers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Woher die Besucher kommen`)
};

const fr_basecamp_analytics_referrers_title = /** @type {(inputs: Basecamp_Analytics_Referrers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`D’où viennent les visiteurs`)
};

const it_basecamp_analytics_referrers_title = /** @type {(inputs: Basecamp_Analytics_Referrers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da dove arrivano i visitatori`)
};

const nl_basecamp_analytics_referrers_title = /** @type {(inputs: Basecamp_Analytics_Referrers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waar bezoekers vandaan komen`)
};

const pl_basecamp_analytics_referrers_title = /** @type {(inputs: Basecamp_Analytics_Referrers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skąd przychodzą odwiedzający`)
};

const pt_basecamp_analytics_referrers_title = /** @type {(inputs: Basecamp_Analytics_Referrers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De onde vêm os visitantes`)
};

const ru_basecamp_analytics_referrers_title = /** @type {(inputs: Basecamp_Analytics_Referrers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Откуда приходят посетители`)
};

const sv_basecamp_analytics_referrers_title = /** @type {(inputs: Basecamp_Analytics_Referrers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Var besökarna kommer ifrån`)
};

const tr_basecamp_analytics_referrers_title = /** @type {(inputs: Basecamp_Analytics_Referrers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ziyaretçiler nereden geliyor`)
};

const zh_basecamp_analytics_referrers_title = /** @type {(inputs: Basecamp_Analytics_Referrers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`访客来源`)
};

const ja_basecamp_analytics_referrers_title = /** @type {(inputs: Basecamp_Analytics_Referrers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`訪問者の流入元`)
};

/**
* | output |
* | --- |
* | "Where visitors come from" |
*
* @param {Basecamp_Analytics_Referrers_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_referrers_title = /** @type {((inputs?: Basecamp_Analytics_Referrers_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Referrers_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_referrers_title(inputs)
	if (locale === "de") return de_basecamp_analytics_referrers_title(inputs)
	if (locale === "fr") return fr_basecamp_analytics_referrers_title(inputs)
	if (locale === "it") return it_basecamp_analytics_referrers_title(inputs)
	if (locale === "nl") return nl_basecamp_analytics_referrers_title(inputs)
	if (locale === "pl") return pl_basecamp_analytics_referrers_title(inputs)
	if (locale === "pt") return pt_basecamp_analytics_referrers_title(inputs)
	if (locale === "ru") return ru_basecamp_analytics_referrers_title(inputs)
	if (locale === "sv") return sv_basecamp_analytics_referrers_title(inputs)
	if (locale === "tr") return tr_basecamp_analytics_referrers_title(inputs)
	if (locale === "zh") return zh_basecamp_analytics_referrers_title(inputs)
	if (locale === "ja") return ja_basecamp_analytics_referrers_title(inputs)
	return en_basecamp_analytics_referrers_title(inputs)
});
