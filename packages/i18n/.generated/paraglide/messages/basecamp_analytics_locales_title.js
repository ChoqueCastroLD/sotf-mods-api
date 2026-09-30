/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Locales_TitleInputs */

const en_basecamp_analytics_locales_title = /** @type {(inputs: Basecamp_Analytics_Locales_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitor language`)
};

const es_basecamp_analytics_locales_title = /** @type {(inputs: Basecamp_Analytics_Locales_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma del visitante`)
};

const de_basecamp_analytics_locales_title = /** @type {(inputs: Basecamp_Analytics_Locales_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprache der Besucher`)
};

const fr_basecamp_analytics_locales_title = /** @type {(inputs: Basecamp_Analytics_Locales_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Langue des visiteurs`)
};

const it_basecamp_analytics_locales_title = /** @type {(inputs: Basecamp_Analytics_Locales_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lingua dei visitatori`)
};

const nl_basecamp_analytics_locales_title = /** @type {(inputs: Basecamp_Analytics_Locales_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taal van de bezoekers`)
};

const pl_basecamp_analytics_locales_title = /** @type {(inputs: Basecamp_Analytics_Locales_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Język odwiedzających`)
};

const pt_basecamp_analytics_locales_title = /** @type {(inputs: Basecamp_Analytics_Locales_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma dos visitantes`)
};

const ru_basecamp_analytics_locales_title = /** @type {(inputs: Basecamp_Analytics_Locales_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Язык посетителей`)
};

const sv_basecamp_analytics_locales_title = /** @type {(inputs: Basecamp_Analytics_Locales_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besökarnas språk`)
};

const tr_basecamp_analytics_locales_title = /** @type {(inputs: Basecamp_Analytics_Locales_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ziyaretçi dili`)
};

const zh_basecamp_analytics_locales_title = /** @type {(inputs: Basecamp_Analytics_Locales_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`访客语言`)
};

const ja_basecamp_analytics_locales_title = /** @type {(inputs: Basecamp_Analytics_Locales_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`訪問者の言語`)
};

/**
* | output |
* | --- |
* | "Visitor language" |
*
* @param {Basecamp_Analytics_Locales_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_locales_title = /** @type {((inputs?: Basecamp_Analytics_Locales_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Locales_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_locales_title(inputs)
	if (locale === "de") return de_basecamp_analytics_locales_title(inputs)
	if (locale === "fr") return fr_basecamp_analytics_locales_title(inputs)
	if (locale === "it") return it_basecamp_analytics_locales_title(inputs)
	if (locale === "nl") return nl_basecamp_analytics_locales_title(inputs)
	if (locale === "pl") return pl_basecamp_analytics_locales_title(inputs)
	if (locale === "pt") return pt_basecamp_analytics_locales_title(inputs)
	if (locale === "ru") return ru_basecamp_analytics_locales_title(inputs)
	if (locale === "sv") return sv_basecamp_analytics_locales_title(inputs)
	if (locale === "tr") return tr_basecamp_analytics_locales_title(inputs)
	if (locale === "zh") return zh_basecamp_analytics_locales_title(inputs)
	if (locale === "ja") return ja_basecamp_analytics_locales_title(inputs)
	return en_basecamp_analytics_locales_title(inputs)
});
