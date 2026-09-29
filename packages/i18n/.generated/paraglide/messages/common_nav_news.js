/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Nav_NewsInputs */

const en_common_nav_news = /** @type {(inputs: Common_Nav_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`News`)
};

const es_common_nav_news = /** @type {(inputs: Common_Nav_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novedades`)
};

const de_common_nav_news = /** @type {(inputs: Common_Nav_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neuigkeiten`)
};

const fr_common_nav_news = /** @type {(inputs: Common_Nav_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualités`)
};

const it_common_nav_news = /** @type {(inputs: Common_Nav_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novità`)
};

const nl_common_nav_news = /** @type {(inputs: Common_Nav_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuws`)
};

const pl_common_nav_news = /** @type {(inputs: Common_Nav_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualności`)
};

const pt_common_nav_news = /** @type {(inputs: Common_Nav_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novidades`)
};

const ru_common_nav_news = /** @type {(inputs: Common_Nav_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новости`)
};

const sv_common_nav_news = /** @type {(inputs: Common_Nav_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyheter`)
};

const tr_common_nav_news = /** @type {(inputs: Common_Nav_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haberler`)
};

const zh_common_nav_news = /** @type {(inputs: Common_Nav_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新闻`)
};

const ja_common_nav_news = /** @type {(inputs: Common_Nav_NewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ニュース`)
};

/**
* | output |
* | --- |
* | "News" |
*
* @param {Common_Nav_NewsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_nav_news = /** @type {((inputs?: Common_Nav_NewsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Nav_NewsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_nav_news(inputs)
	if (locale === "de") return de_common_nav_news(inputs)
	if (locale === "fr") return fr_common_nav_news(inputs)
	if (locale === "it") return it_common_nav_news(inputs)
	if (locale === "nl") return nl_common_nav_news(inputs)
	if (locale === "pl") return pl_common_nav_news(inputs)
	if (locale === "pt") return pt_common_nav_news(inputs)
	if (locale === "ru") return ru_common_nav_news(inputs)
	if (locale === "sv") return sv_common_nav_news(inputs)
	if (locale === "tr") return tr_common_nav_news(inputs)
	if (locale === "zh") return zh_common_nav_news(inputs)
	if (locale === "ja") return ja_common_nav_news(inputs)
	return en_common_nav_news(inputs)
});
