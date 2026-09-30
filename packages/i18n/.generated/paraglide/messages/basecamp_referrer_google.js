/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Referrer_GoogleInputs */

const en_basecamp_referrer_google = /** @type {(inputs: Basecamp_Referrer_GoogleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google`)
};

const es_basecamp_referrer_google = /** @type {(inputs: Basecamp_Referrer_GoogleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google`)
};

const de_basecamp_referrer_google = /** @type {(inputs: Basecamp_Referrer_GoogleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google`)
};

const fr_basecamp_referrer_google = /** @type {(inputs: Basecamp_Referrer_GoogleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google`)
};

const it_basecamp_referrer_google = /** @type {(inputs: Basecamp_Referrer_GoogleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google`)
};

const nl_basecamp_referrer_google = /** @type {(inputs: Basecamp_Referrer_GoogleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google`)
};

const pl_basecamp_referrer_google = /** @type {(inputs: Basecamp_Referrer_GoogleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google`)
};

const pt_basecamp_referrer_google = /** @type {(inputs: Basecamp_Referrer_GoogleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google`)
};

const ru_basecamp_referrer_google = /** @type {(inputs: Basecamp_Referrer_GoogleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google`)
};

const sv_basecamp_referrer_google = /** @type {(inputs: Basecamp_Referrer_GoogleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google`)
};

const tr_basecamp_referrer_google = /** @type {(inputs: Basecamp_Referrer_GoogleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google`)
};

const zh_basecamp_referrer_google = /** @type {(inputs: Basecamp_Referrer_GoogleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google`)
};

const ja_basecamp_referrer_google = /** @type {(inputs: Basecamp_Referrer_GoogleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google`)
};

/**
* | output |
* | --- |
* | "Google" |
*
* @param {Basecamp_Referrer_GoogleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_referrer_google = /** @type {((inputs?: Basecamp_Referrer_GoogleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Referrer_GoogleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_referrer_google(inputs)
	if (locale === "de") return de_basecamp_referrer_google(inputs)
	if (locale === "fr") return fr_basecamp_referrer_google(inputs)
	if (locale === "it") return it_basecamp_referrer_google(inputs)
	if (locale === "nl") return nl_basecamp_referrer_google(inputs)
	if (locale === "pl") return pl_basecamp_referrer_google(inputs)
	if (locale === "pt") return pt_basecamp_referrer_google(inputs)
	if (locale === "ru") return ru_basecamp_referrer_google(inputs)
	if (locale === "sv") return sv_basecamp_referrer_google(inputs)
	if (locale === "tr") return tr_basecamp_referrer_google(inputs)
	if (locale === "zh") return zh_basecamp_referrer_google(inputs)
	if (locale === "ja") return ja_basecamp_referrer_google(inputs)
	return en_basecamp_referrer_google(inputs)
});
