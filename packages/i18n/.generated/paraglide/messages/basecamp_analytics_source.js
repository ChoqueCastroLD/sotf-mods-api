/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_SourceInputs */

const en_basecamp_analytics_source = /** @type {(inputs: Basecamp_Analytics_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Source`)
};

const es_basecamp_analytics_source = /** @type {(inputs: Basecamp_Analytics_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Origen`)
};

const de_basecamp_analytics_source = /** @type {(inputs: Basecamp_Analytics_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelle`)
};

const fr_basecamp_analytics_source = /** @type {(inputs: Basecamp_Analytics_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Source`)
};

const it_basecamp_analytics_source = /** @type {(inputs: Basecamp_Analytics_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Provenienza`)
};

const nl_basecamp_analytics_source = /** @type {(inputs: Basecamp_Analytics_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bron`)
};

const pl_basecamp_analytics_source = /** @type {(inputs: Basecamp_Analytics_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Źródło`)
};

const pt_basecamp_analytics_source = /** @type {(inputs: Basecamp_Analytics_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Origem`)
};

const ru_basecamp_analytics_source = /** @type {(inputs: Basecamp_Analytics_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Источник`)
};

const sv_basecamp_analytics_source = /** @type {(inputs: Basecamp_Analytics_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Källa`)
};

const tr_basecamp_analytics_source = /** @type {(inputs: Basecamp_Analytics_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaynak`)
};

const zh_basecamp_analytics_source = /** @type {(inputs: Basecamp_Analytics_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`来源`)
};

const ja_basecamp_analytics_source = /** @type {(inputs: Basecamp_Analytics_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`流入元`)
};

/**
* | output |
* | --- |
* | "Source" |
*
* @param {Basecamp_Analytics_SourceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_source = /** @type {((inputs?: Basecamp_Analytics_SourceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_SourceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_source(inputs)
	if (locale === "de") return de_basecamp_analytics_source(inputs)
	if (locale === "fr") return fr_basecamp_analytics_source(inputs)
	if (locale === "it") return it_basecamp_analytics_source(inputs)
	if (locale === "nl") return nl_basecamp_analytics_source(inputs)
	if (locale === "pl") return pl_basecamp_analytics_source(inputs)
	if (locale === "pt") return pt_basecamp_analytics_source(inputs)
	if (locale === "ru") return ru_basecamp_analytics_source(inputs)
	if (locale === "sv") return sv_basecamp_analytics_source(inputs)
	if (locale === "tr") return tr_basecamp_analytics_source(inputs)
	if (locale === "zh") return zh_basecamp_analytics_source(inputs)
	if (locale === "ja") return ja_basecamp_analytics_source(inputs)
	return en_basecamp_analytics_source(inputs)
});
