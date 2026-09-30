/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Referrer_GithubInputs */

const en_basecamp_referrer_github = /** @type {(inputs: Basecamp_Referrer_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const es_basecamp_referrer_github = /** @type {(inputs: Basecamp_Referrer_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const de_basecamp_referrer_github = /** @type {(inputs: Basecamp_Referrer_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const fr_basecamp_referrer_github = /** @type {(inputs: Basecamp_Referrer_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const it_basecamp_referrer_github = /** @type {(inputs: Basecamp_Referrer_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const nl_basecamp_referrer_github = /** @type {(inputs: Basecamp_Referrer_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const pl_basecamp_referrer_github = /** @type {(inputs: Basecamp_Referrer_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const pt_basecamp_referrer_github = /** @type {(inputs: Basecamp_Referrer_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const ru_basecamp_referrer_github = /** @type {(inputs: Basecamp_Referrer_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const sv_basecamp_referrer_github = /** @type {(inputs: Basecamp_Referrer_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const tr_basecamp_referrer_github = /** @type {(inputs: Basecamp_Referrer_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const zh_basecamp_referrer_github = /** @type {(inputs: Basecamp_Referrer_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const ja_basecamp_referrer_github = /** @type {(inputs: Basecamp_Referrer_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

/**
* | output |
* | --- |
* | "GitHub" |
*
* @param {Basecamp_Referrer_GithubInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_referrer_github = /** @type {((inputs?: Basecamp_Referrer_GithubInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Referrer_GithubInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_referrer_github(inputs)
	if (locale === "de") return de_basecamp_referrer_github(inputs)
	if (locale === "fr") return fr_basecamp_referrer_github(inputs)
	if (locale === "it") return it_basecamp_referrer_github(inputs)
	if (locale === "nl") return nl_basecamp_referrer_github(inputs)
	if (locale === "pl") return pl_basecamp_referrer_github(inputs)
	if (locale === "pt") return pt_basecamp_referrer_github(inputs)
	if (locale === "ru") return ru_basecamp_referrer_github(inputs)
	if (locale === "sv") return sv_basecamp_referrer_github(inputs)
	if (locale === "tr") return tr_basecamp_referrer_github(inputs)
	if (locale === "zh") return zh_basecamp_referrer_github(inputs)
	if (locale === "ja") return ja_basecamp_referrer_github(inputs)
	return en_basecamp_referrer_github(inputs)
});
