/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Filter_Age_24hInputs */

const en_ranger_filter_age_24h = /** @type {(inputs: Ranger_Filter_Age_24hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Over 1 day`)
};

const es_ranger_filter_age_24h = /** @type {(inputs: Ranger_Filter_Age_24hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más de 1 día`)
};

const de_ranger_filter_age_24h = /** @type {(inputs: Ranger_Filter_Age_24hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Über 1 Tag`)
};

const fr_ranger_filter_age_24h = /** @type {(inputs: Ranger_Filter_Age_24hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus d’un jour`)
};

const it_ranger_filter_age_24h = /** @type {(inputs: Ranger_Filter_Age_24hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oltre 1 giorno`)
};

const nl_ranger_filter_age_24h = /** @type {(inputs: Ranger_Filter_Age_24hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer dan 1 dag`)
};

const pl_ranger_filter_age_24h = /** @type {(inputs: Ranger_Filter_Age_24hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ponad 1 dzień`)
};

const pt_ranger_filter_age_24h = /** @type {(inputs: Ranger_Filter_Age_24hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais de 1 dia`)
};

const ru_ranger_filter_age_24h = /** @type {(inputs: Ranger_Filter_Age_24hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше 1 дня`)
};

const sv_ranger_filter_age_24h = /** @type {(inputs: Ranger_Filter_Age_24hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Över 1 dag`)
};

const tr_ranger_filter_age_24h = /** @type {(inputs: Ranger_Filter_Age_24hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 günden uzun`)
};

const zh_ranger_filter_age_24h = /** @type {(inputs: Ranger_Filter_Age_24hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`超过 1 天`)
};

const ja_ranger_filter_age_24h = /** @type {(inputs: Ranger_Filter_Age_24hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 日以上`)
};

/**
* | output |
* | --- |
* | "Over 1 day" |
*
* @param {Ranger_Filter_Age_24hInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_filter_age_24h = /** @type {((inputs?: Ranger_Filter_Age_24hInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Filter_Age_24hInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_filter_age_24h(inputs)
	if (locale === "de") return de_ranger_filter_age_24h(inputs)
	if (locale === "fr") return fr_ranger_filter_age_24h(inputs)
	if (locale === "it") return it_ranger_filter_age_24h(inputs)
	if (locale === "nl") return nl_ranger_filter_age_24h(inputs)
	if (locale === "pl") return pl_ranger_filter_age_24h(inputs)
	if (locale === "pt") return pt_ranger_filter_age_24h(inputs)
	if (locale === "ru") return ru_ranger_filter_age_24h(inputs)
	if (locale === "sv") return sv_ranger_filter_age_24h(inputs)
	if (locale === "tr") return tr_ranger_filter_age_24h(inputs)
	if (locale === "zh") return zh_ranger_filter_age_24h(inputs)
	if (locale === "ja") return ja_ranger_filter_age_24h(inputs)
	return en_ranger_filter_age_24h(inputs)
});
