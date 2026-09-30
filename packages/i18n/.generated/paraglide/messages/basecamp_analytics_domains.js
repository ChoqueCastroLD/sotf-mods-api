/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_DomainsInputs */

const en_basecamp_analytics_domains = /** @type {(inputs: Basecamp_Analytics_DomainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top domains`)
};

const es_basecamp_analytics_domains = /** @type {(inputs: Basecamp_Analytics_DomainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dominios principales`)
};

const de_basecamp_analytics_domains = /** @type {(inputs: Basecamp_Analytics_DomainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Häufigste Domains`)
};

const fr_basecamp_analytics_domains = /** @type {(inputs: Basecamp_Analytics_DomainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Principaux domaines`)
};

const it_basecamp_analytics_domains = /** @type {(inputs: Basecamp_Analytics_DomainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domini principali`)
};

const nl_basecamp_analytics_domains = /** @type {(inputs: Basecamp_Analytics_DomainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belangrijkste domeinen`)
};

const pl_basecamp_analytics_domains = /** @type {(inputs: Basecamp_Analytics_DomainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęstsze domeny`)
};

const pt_basecamp_analytics_domains = /** @type {(inputs: Basecamp_Analytics_DomainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Principais domínios`)
};

const ru_basecamp_analytics_domains = /** @type {(inputs: Basecamp_Analytics_DomainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Основные домены`)
};

const sv_basecamp_analytics_domains = /** @type {(inputs: Basecamp_Analytics_DomainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vanligaste domäner`)
};

const tr_basecamp_analytics_domains = /** @type {(inputs: Basecamp_Analytics_DomainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öne çıkan alan adları`)
};

const zh_basecamp_analytics_domains = /** @type {(inputs: Basecamp_Analytics_DomainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主要域名`)
};

const ja_basecamp_analytics_domains = /** @type {(inputs: Basecamp_Analytics_DomainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主なドメイン`)
};

/**
* | output |
* | --- |
* | "Top domains" |
*
* @param {Basecamp_Analytics_DomainsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_domains = /** @type {((inputs?: Basecamp_Analytics_DomainsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_DomainsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_domains(inputs)
	if (locale === "de") return de_basecamp_analytics_domains(inputs)
	if (locale === "fr") return fr_basecamp_analytics_domains(inputs)
	if (locale === "it") return it_basecamp_analytics_domains(inputs)
	if (locale === "nl") return nl_basecamp_analytics_domains(inputs)
	if (locale === "pl") return pl_basecamp_analytics_domains(inputs)
	if (locale === "pt") return pt_basecamp_analytics_domains(inputs)
	if (locale === "ru") return ru_basecamp_analytics_domains(inputs)
	if (locale === "sv") return sv_basecamp_analytics_domains(inputs)
	if (locale === "tr") return tr_basecamp_analytics_domains(inputs)
	if (locale === "zh") return zh_basecamp_analytics_domains(inputs)
	if (locale === "ja") return ja_basecamp_analytics_domains(inputs)
	return en_basecamp_analytics_domains(inputs)
});
