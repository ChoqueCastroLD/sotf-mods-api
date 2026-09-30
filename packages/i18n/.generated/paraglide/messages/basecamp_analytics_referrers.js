/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_ReferrersInputs */

const en_basecamp_analytics_referrers = /** @type {(inputs: Basecamp_Analytics_ReferrersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visits by source`)
};

const es_basecamp_analytics_referrers = /** @type {(inputs: Basecamp_Analytics_ReferrersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitas por origen`)
};

const de_basecamp_analytics_referrers = /** @type {(inputs: Basecamp_Analytics_ReferrersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besuche nach Quelle`)
};

const fr_basecamp_analytics_referrers = /** @type {(inputs: Basecamp_Analytics_ReferrersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visites par source`)
};

const it_basecamp_analytics_referrers = /** @type {(inputs: Basecamp_Analytics_ReferrersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visite per provenienza`)
};

const nl_basecamp_analytics_referrers = /** @type {(inputs: Basecamp_Analytics_ReferrersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bezoeken per bron`)
};

const pl_basecamp_analytics_referrers = /** @type {(inputs: Basecamp_Analytics_ReferrersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wizyty według źródła`)
};

const pt_basecamp_analytics_referrers = /** @type {(inputs: Basecamp_Analytics_ReferrersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitas por origem`)
};

const ru_basecamp_analytics_referrers = /** @type {(inputs: Basecamp_Analytics_ReferrersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Визиты по источникам`)
};

const sv_basecamp_analytics_referrers = /** @type {(inputs: Basecamp_Analytics_ReferrersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besök per källa`)
};

const tr_basecamp_analytics_referrers = /** @type {(inputs: Basecamp_Analytics_ReferrersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaynağa göre ziyaretler`)
};

const zh_basecamp_analytics_referrers = /** @type {(inputs: Basecamp_Analytics_ReferrersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按来源统计的访问`)
};

const ja_basecamp_analytics_referrers = /** @type {(inputs: Basecamp_Analytics_ReferrersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`流入元別の訪問`)
};

/**
* | output |
* | --- |
* | "Visits by source" |
*
* @param {Basecamp_Analytics_ReferrersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_referrers = /** @type {((inputs?: Basecamp_Analytics_ReferrersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_ReferrersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_referrers(inputs)
	if (locale === "de") return de_basecamp_analytics_referrers(inputs)
	if (locale === "fr") return fr_basecamp_analytics_referrers(inputs)
	if (locale === "it") return it_basecamp_analytics_referrers(inputs)
	if (locale === "nl") return nl_basecamp_analytics_referrers(inputs)
	if (locale === "pl") return pl_basecamp_analytics_referrers(inputs)
	if (locale === "pt") return pt_basecamp_analytics_referrers(inputs)
	if (locale === "ru") return ru_basecamp_analytics_referrers(inputs)
	if (locale === "sv") return sv_basecamp_analytics_referrers(inputs)
	if (locale === "tr") return tr_basecamp_analytics_referrers(inputs)
	if (locale === "zh") return zh_basecamp_analytics_referrers(inputs)
	if (locale === "ja") return ja_basecamp_analytics_referrers(inputs)
	return en_basecamp_analytics_referrers(inputs)
});
