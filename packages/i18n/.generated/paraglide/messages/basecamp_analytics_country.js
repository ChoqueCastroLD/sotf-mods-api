/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_CountryInputs */

const en_basecamp_analytics_country = /** @type {(inputs: Basecamp_Analytics_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Country`)
};

const es_basecamp_analytics_country = /** @type {(inputs: Basecamp_Analytics_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`País`)
};

const de_basecamp_analytics_country = /** @type {(inputs: Basecamp_Analytics_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Land`)
};

const fr_basecamp_analytics_country = /** @type {(inputs: Basecamp_Analytics_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pays`)
};

const it_basecamp_analytics_country = /** @type {(inputs: Basecamp_Analytics_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paese`)
};

const nl_basecamp_analytics_country = /** @type {(inputs: Basecamp_Analytics_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Land`)
};

const pl_basecamp_analytics_country = /** @type {(inputs: Basecamp_Analytics_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kraj`)
};

const pt_basecamp_analytics_country = /** @type {(inputs: Basecamp_Analytics_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`País`)
};

const ru_basecamp_analytics_country = /** @type {(inputs: Basecamp_Analytics_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страна`)
};

const sv_basecamp_analytics_country = /** @type {(inputs: Basecamp_Analytics_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Land`)
};

const tr_basecamp_analytics_country = /** @type {(inputs: Basecamp_Analytics_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ülke`)
};

const zh_basecamp_analytics_country = /** @type {(inputs: Basecamp_Analytics_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`国家/地区`)
};

const ja_basecamp_analytics_country = /** @type {(inputs: Basecamp_Analytics_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`国`)
};

/**
* | output |
* | --- |
* | "Country" |
*
* @param {Basecamp_Analytics_CountryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_country = /** @type {((inputs?: Basecamp_Analytics_CountryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_CountryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_country(inputs)
	if (locale === "de") return de_basecamp_analytics_country(inputs)
	if (locale === "fr") return fr_basecamp_analytics_country(inputs)
	if (locale === "it") return it_basecamp_analytics_country(inputs)
	if (locale === "nl") return nl_basecamp_analytics_country(inputs)
	if (locale === "pl") return pl_basecamp_analytics_country(inputs)
	if (locale === "pt") return pt_basecamp_analytics_country(inputs)
	if (locale === "ru") return ru_basecamp_analytics_country(inputs)
	if (locale === "sv") return sv_basecamp_analytics_country(inputs)
	if (locale === "tr") return tr_basecamp_analytics_country(inputs)
	if (locale === "zh") return zh_basecamp_analytics_country(inputs)
	if (locale === "ja") return ja_basecamp_analytics_country(inputs)
	return en_basecamp_analytics_country(inputs)
});
