/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_DomainInputs */

const en_basecamp_analytics_domain = /** @type {(inputs: Basecamp_Analytics_DomainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domain`)
};

const es_basecamp_analytics_domain = /** @type {(inputs: Basecamp_Analytics_DomainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dominio`)
};

const de_basecamp_analytics_domain = /** @type {(inputs: Basecamp_Analytics_DomainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domain`)
};

const fr_basecamp_analytics_domain = /** @type {(inputs: Basecamp_Analytics_DomainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domaine`)
};

const it_basecamp_analytics_domain = /** @type {(inputs: Basecamp_Analytics_DomainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dominio`)
};

const nl_basecamp_analytics_domain = /** @type {(inputs: Basecamp_Analytics_DomainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domein`)
};

const pl_basecamp_analytics_domain = /** @type {(inputs: Basecamp_Analytics_DomainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domena`)
};

const pt_basecamp_analytics_domain = /** @type {(inputs: Basecamp_Analytics_DomainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domínio`)
};

const ru_basecamp_analytics_domain = /** @type {(inputs: Basecamp_Analytics_DomainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Домен`)
};

const sv_basecamp_analytics_domain = /** @type {(inputs: Basecamp_Analytics_DomainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domän`)
};

const tr_basecamp_analytics_domain = /** @type {(inputs: Basecamp_Analytics_DomainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alan adı`)
};

const zh_basecamp_analytics_domain = /** @type {(inputs: Basecamp_Analytics_DomainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`域名`)
};

const ja_basecamp_analytics_domain = /** @type {(inputs: Basecamp_Analytics_DomainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ドメイン`)
};

/**
* | output |
* | --- |
* | "Domain" |
*
* @param {Basecamp_Analytics_DomainInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_domain = /** @type {((inputs?: Basecamp_Analytics_DomainInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_DomainInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_domain(inputs)
	if (locale === "de") return de_basecamp_analytics_domain(inputs)
	if (locale === "fr") return fr_basecamp_analytics_domain(inputs)
	if (locale === "it") return it_basecamp_analytics_domain(inputs)
	if (locale === "nl") return nl_basecamp_analytics_domain(inputs)
	if (locale === "pl") return pl_basecamp_analytics_domain(inputs)
	if (locale === "pt") return pt_basecamp_analytics_domain(inputs)
	if (locale === "ru") return ru_basecamp_analytics_domain(inputs)
	if (locale === "sv") return sv_basecamp_analytics_domain(inputs)
	if (locale === "tr") return tr_basecamp_analytics_domain(inputs)
	if (locale === "zh") return zh_basecamp_analytics_domain(inputs)
	if (locale === "ja") return ja_basecamp_analytics_domain(inputs)
	return en_basecamp_analytics_domain(inputs)
});
