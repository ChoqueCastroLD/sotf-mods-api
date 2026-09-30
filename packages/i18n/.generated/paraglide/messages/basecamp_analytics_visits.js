/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_VisitsInputs */

const en_basecamp_analytics_visits = /** @type {(inputs: Basecamp_Analytics_VisitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visits`)
};

const es_basecamp_analytics_visits = /** @type {(inputs: Basecamp_Analytics_VisitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitas`)
};

const de_basecamp_analytics_visits = /** @type {(inputs: Basecamp_Analytics_VisitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besuche`)
};

const fr_basecamp_analytics_visits = /** @type {(inputs: Basecamp_Analytics_VisitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visites`)
};

const it_basecamp_analytics_visits = /** @type {(inputs: Basecamp_Analytics_VisitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visite`)
};

const nl_basecamp_analytics_visits = /** @type {(inputs: Basecamp_Analytics_VisitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bezoeken`)
};

const pl_basecamp_analytics_visits = /** @type {(inputs: Basecamp_Analytics_VisitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wizyty`)
};

const pt_basecamp_analytics_visits = /** @type {(inputs: Basecamp_Analytics_VisitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitas`)
};

const ru_basecamp_analytics_visits = /** @type {(inputs: Basecamp_Analytics_VisitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Визиты`)
};

const sv_basecamp_analytics_visits = /** @type {(inputs: Basecamp_Analytics_VisitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besök`)
};

const tr_basecamp_analytics_visits = /** @type {(inputs: Basecamp_Analytics_VisitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ziyaretler`)
};

const zh_basecamp_analytics_visits = /** @type {(inputs: Basecamp_Analytics_VisitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`访问`)
};

const ja_basecamp_analytics_visits = /** @type {(inputs: Basecamp_Analytics_VisitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`訪問`)
};

/**
* | output |
* | --- |
* | "Visits" |
*
* @param {Basecamp_Analytics_VisitsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_visits = /** @type {((inputs?: Basecamp_Analytics_VisitsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_VisitsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_visits(inputs)
	if (locale === "de") return de_basecamp_analytics_visits(inputs)
	if (locale === "fr") return fr_basecamp_analytics_visits(inputs)
	if (locale === "it") return it_basecamp_analytics_visits(inputs)
	if (locale === "nl") return nl_basecamp_analytics_visits(inputs)
	if (locale === "pl") return pl_basecamp_analytics_visits(inputs)
	if (locale === "pt") return pt_basecamp_analytics_visits(inputs)
	if (locale === "ru") return ru_basecamp_analytics_visits(inputs)
	if (locale === "sv") return sv_basecamp_analytics_visits(inputs)
	if (locale === "tr") return tr_basecamp_analytics_visits(inputs)
	if (locale === "zh") return zh_basecamp_analytics_visits(inputs)
	if (locale === "ja") return ja_basecamp_analytics_visits(inputs)
	return en_basecamp_analytics_visits(inputs)
});
