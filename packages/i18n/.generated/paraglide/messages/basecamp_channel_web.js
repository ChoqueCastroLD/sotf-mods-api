/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Channel_WebInputs */

const en_basecamp_channel_web = /** @type {(inputs: Basecamp_Channel_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const es_basecamp_channel_web = /** @type {(inputs: Basecamp_Channel_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Web`)
};

const de_basecamp_channel_web = /** @type {(inputs: Basecamp_Channel_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const fr_basecamp_channel_web = /** @type {(inputs: Basecamp_Channel_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site web`)
};

const it_basecamp_channel_web = /** @type {(inputs: Basecamp_Channel_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sito web`)
};

const nl_basecamp_channel_web = /** @type {(inputs: Basecamp_Channel_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const pl_basecamp_channel_web = /** @type {(inputs: Basecamp_Channel_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strona`)
};

const pt_basecamp_channel_web = /** @type {(inputs: Basecamp_Channel_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site`)
};

const ru_basecamp_channel_web = /** @type {(inputs: Basecamp_Channel_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сайт`)
};

const sv_basecamp_channel_web = /** @type {(inputs: Basecamp_Channel_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webbplats`)
};

const tr_basecamp_channel_web = /** @type {(inputs: Basecamp_Channel_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Web sitesi`)
};

const zh_basecamp_channel_web = /** @type {(inputs: Basecamp_Channel_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网站`)
};

const ja_basecamp_channel_web = /** @type {(inputs: Basecamp_Channel_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ウェブサイト`)
};

/**
* | output |
* | --- |
* | "Website" |
*
* @param {Basecamp_Channel_WebInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_channel_web = /** @type {((inputs?: Basecamp_Channel_WebInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Channel_WebInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_channel_web(inputs)
	if (locale === "de") return de_basecamp_channel_web(inputs)
	if (locale === "fr") return fr_basecamp_channel_web(inputs)
	if (locale === "it") return it_basecamp_channel_web(inputs)
	if (locale === "nl") return nl_basecamp_channel_web(inputs)
	if (locale === "pl") return pl_basecamp_channel_web(inputs)
	if (locale === "pt") return pt_basecamp_channel_web(inputs)
	if (locale === "ru") return ru_basecamp_channel_web(inputs)
	if (locale === "sv") return sv_basecamp_channel_web(inputs)
	if (locale === "tr") return tr_basecamp_channel_web(inputs)
	if (locale === "zh") return zh_basecamp_channel_web(inputs)
	if (locale === "ja") return ja_basecamp_channel_web(inputs)
	return en_basecamp_channel_web(inputs)
});
