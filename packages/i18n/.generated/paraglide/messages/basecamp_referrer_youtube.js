/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Referrer_YoutubeInputs */

const en_basecamp_referrer_youtube = /** @type {(inputs: Basecamp_Referrer_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const es_basecamp_referrer_youtube = /** @type {(inputs: Basecamp_Referrer_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const de_basecamp_referrer_youtube = /** @type {(inputs: Basecamp_Referrer_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const fr_basecamp_referrer_youtube = /** @type {(inputs: Basecamp_Referrer_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const it_basecamp_referrer_youtube = /** @type {(inputs: Basecamp_Referrer_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const nl_basecamp_referrer_youtube = /** @type {(inputs: Basecamp_Referrer_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const pl_basecamp_referrer_youtube = /** @type {(inputs: Basecamp_Referrer_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const pt_basecamp_referrer_youtube = /** @type {(inputs: Basecamp_Referrer_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const ru_basecamp_referrer_youtube = /** @type {(inputs: Basecamp_Referrer_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const sv_basecamp_referrer_youtube = /** @type {(inputs: Basecamp_Referrer_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const tr_basecamp_referrer_youtube = /** @type {(inputs: Basecamp_Referrer_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const zh_basecamp_referrer_youtube = /** @type {(inputs: Basecamp_Referrer_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const ja_basecamp_referrer_youtube = /** @type {(inputs: Basecamp_Referrer_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

/**
* | output |
* | --- |
* | "YouTube" |
*
* @param {Basecamp_Referrer_YoutubeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_referrer_youtube = /** @type {((inputs?: Basecamp_Referrer_YoutubeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Referrer_YoutubeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_referrer_youtube(inputs)
	if (locale === "de") return de_basecamp_referrer_youtube(inputs)
	if (locale === "fr") return fr_basecamp_referrer_youtube(inputs)
	if (locale === "it") return it_basecamp_referrer_youtube(inputs)
	if (locale === "nl") return nl_basecamp_referrer_youtube(inputs)
	if (locale === "pl") return pl_basecamp_referrer_youtube(inputs)
	if (locale === "pt") return pt_basecamp_referrer_youtube(inputs)
	if (locale === "ru") return ru_basecamp_referrer_youtube(inputs)
	if (locale === "sv") return sv_basecamp_referrer_youtube(inputs)
	if (locale === "tr") return tr_basecamp_referrer_youtube(inputs)
	if (locale === "zh") return zh_basecamp_referrer_youtube(inputs)
	if (locale === "ja") return ja_basecamp_referrer_youtube(inputs)
	return en_basecamp_referrer_youtube(inputs)
});
