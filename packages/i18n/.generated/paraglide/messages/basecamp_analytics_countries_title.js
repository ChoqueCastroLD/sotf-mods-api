/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Countries_TitleInputs */

const en_basecamp_analytics_countries_title = /** @type {(inputs: Basecamp_Analytics_Countries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitor country`)
};

const es_basecamp_analytics_countries_title = /** @type {(inputs: Basecamp_Analytics_Countries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`País de los visitantes`)
};

const de_basecamp_analytics_countries_title = /** @type {(inputs: Basecamp_Analytics_Countries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Land der Besucher`)
};

const fr_basecamp_analytics_countries_title = /** @type {(inputs: Basecamp_Analytics_Countries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pays des visiteurs`)
};

const it_basecamp_analytics_countries_title = /** @type {(inputs: Basecamp_Analytics_Countries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paese dei visitatori`)
};

const nl_basecamp_analytics_countries_title = /** @type {(inputs: Basecamp_Analytics_Countries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Land van bezoekers`)
};

const pl_basecamp_analytics_countries_title = /** @type {(inputs: Basecamp_Analytics_Countries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kraj odwiedzających`)
};

const pt_basecamp_analytics_countries_title = /** @type {(inputs: Basecamp_Analytics_Countries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`País dos visitantes`)
};

const ru_basecamp_analytics_countries_title = /** @type {(inputs: Basecamp_Analytics_Countries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страна посетителей`)
};

const sv_basecamp_analytics_countries_title = /** @type {(inputs: Basecamp_Analytics_Countries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besökarnas land`)
};

const tr_basecamp_analytics_countries_title = /** @type {(inputs: Basecamp_Analytics_Countries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ziyaretçi ülkesi`)
};

const zh_basecamp_analytics_countries_title = /** @type {(inputs: Basecamp_Analytics_Countries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`访客所在国家/地区`)
};

const ja_basecamp_analytics_countries_title = /** @type {(inputs: Basecamp_Analytics_Countries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`訪問者の国`)
};

/**
* | output |
* | --- |
* | "Visitor country" |
*
* @param {Basecamp_Analytics_Countries_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_countries_title = /** @type {((inputs?: Basecamp_Analytics_Countries_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Countries_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_countries_title(inputs)
	if (locale === "de") return de_basecamp_analytics_countries_title(inputs)
	if (locale === "fr") return fr_basecamp_analytics_countries_title(inputs)
	if (locale === "it") return it_basecamp_analytics_countries_title(inputs)
	if (locale === "nl") return nl_basecamp_analytics_countries_title(inputs)
	if (locale === "pl") return pl_basecamp_analytics_countries_title(inputs)
	if (locale === "pt") return pt_basecamp_analytics_countries_title(inputs)
	if (locale === "ru") return ru_basecamp_analytics_countries_title(inputs)
	if (locale === "sv") return sv_basecamp_analytics_countries_title(inputs)
	if (locale === "tr") return tr_basecamp_analytics_countries_title(inputs)
	if (locale === "zh") return zh_basecamp_analytics_countries_title(inputs)
	if (locale === "ja") return ja_basecamp_analytics_countries_title(inputs)
	return en_basecamp_analytics_countries_title(inputs)
});
