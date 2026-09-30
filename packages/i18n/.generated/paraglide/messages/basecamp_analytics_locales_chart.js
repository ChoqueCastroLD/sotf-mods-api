/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Locales_ChartInputs */

const en_basecamp_analytics_locales_chart = /** @type {(inputs: Basecamp_Analytics_Locales_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visits by site language`)
};

const es_basecamp_analytics_locales_chart = /** @type {(inputs: Basecamp_Analytics_Locales_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitas por idioma del sitio`)
};

const de_basecamp_analytics_locales_chart = /** @type {(inputs: Basecamp_Analytics_Locales_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besuche nach Seitensprache`)
};

const fr_basecamp_analytics_locales_chart = /** @type {(inputs: Basecamp_Analytics_Locales_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visites par langue du site`)
};

const it_basecamp_analytics_locales_chart = /** @type {(inputs: Basecamp_Analytics_Locales_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visite per lingua del sito`)
};

const nl_basecamp_analytics_locales_chart = /** @type {(inputs: Basecamp_Analytics_Locales_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bezoeken per sitetaal`)
};

const pl_basecamp_analytics_locales_chart = /** @type {(inputs: Basecamp_Analytics_Locales_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wizyty według języka strony`)
};

const pt_basecamp_analytics_locales_chart = /** @type {(inputs: Basecamp_Analytics_Locales_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitas por idioma do site`)
};

const ru_basecamp_analytics_locales_chart = /** @type {(inputs: Basecamp_Analytics_Locales_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Визиты по языку сайта`)
};

const sv_basecamp_analytics_locales_chart = /** @type {(inputs: Basecamp_Analytics_Locales_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besök per webbplatsspråk`)
};

const tr_basecamp_analytics_locales_chart = /** @type {(inputs: Basecamp_Analytics_Locales_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site diline göre ziyaretler`)
};

const zh_basecamp_analytics_locales_chart = /** @type {(inputs: Basecamp_Analytics_Locales_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按网站语言统计的访问`)
};

const ja_basecamp_analytics_locales_chart = /** @type {(inputs: Basecamp_Analytics_Locales_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイトの言語別の訪問`)
};

/**
* | output |
* | --- |
* | "Visits by site language" |
*
* @param {Basecamp_Analytics_Locales_ChartInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_locales_chart = /** @type {((inputs?: Basecamp_Analytics_Locales_ChartInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Locales_ChartInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_locales_chart(inputs)
	if (locale === "de") return de_basecamp_analytics_locales_chart(inputs)
	if (locale === "fr") return fr_basecamp_analytics_locales_chart(inputs)
	if (locale === "it") return it_basecamp_analytics_locales_chart(inputs)
	if (locale === "nl") return nl_basecamp_analytics_locales_chart(inputs)
	if (locale === "pl") return pl_basecamp_analytics_locales_chart(inputs)
	if (locale === "pt") return pt_basecamp_analytics_locales_chart(inputs)
	if (locale === "ru") return ru_basecamp_analytics_locales_chart(inputs)
	if (locale === "sv") return sv_basecamp_analytics_locales_chart(inputs)
	if (locale === "tr") return tr_basecamp_analytics_locales_chart(inputs)
	if (locale === "zh") return zh_basecamp_analytics_locales_chart(inputs)
	if (locale === "ja") return ja_basecamp_analytics_locales_chart(inputs)
	return en_basecamp_analytics_locales_chart(inputs)
});
