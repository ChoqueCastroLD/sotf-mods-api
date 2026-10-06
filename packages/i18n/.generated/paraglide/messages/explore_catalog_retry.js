/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_RetryInputs */

const en_explore_catalog_retry = /** @type {(inputs: Explore_Catalog_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
};

const es_explore_catalog_retry = /** @type {(inputs: Explore_Catalog_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentar`)
};

const de_explore_catalog_retry = /** @type {(inputs: Explore_Catalog_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut versuchen`)
};

const fr_explore_catalog_retry = /** @type {(inputs: Explore_Catalog_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayer`)
};

const it_explore_catalog_retry = /** @type {(inputs: Explore_Catalog_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova`)
};

const nl_explore_catalog_retry = /** @type {(inputs: Explore_Catalog_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw proberen`)
};

const pl_explore_catalog_retry = /** @type {(inputs: Explore_Catalog_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie`)
};

const pt_explore_catalog_retry = /** @type {(inputs: Explore_Catalog_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentar novamente`)
};

const ru_explore_catalog_retry = /** @type {(inputs: Explore_Catalog_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторить`)
};

const sv_explore_catalog_retry = /** @type {(inputs: Explore_Catalog_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen`)
};

const tr_explore_catalog_retry = /** @type {(inputs: Explore_Catalog_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tekrar dene`)
};

const zh_explore_catalog_retry = /** @type {(inputs: Explore_Catalog_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试`)
};

const ja_explore_catalog_retry = /** @type {(inputs: Explore_Catalog_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行`)
};

/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Explore_Catalog_RetryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_retry = /** @type {((inputs?: Explore_Catalog_RetryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_RetryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_retry(inputs)
	if (locale === "de") return de_explore_catalog_retry(inputs)
	if (locale === "fr") return fr_explore_catalog_retry(inputs)
	if (locale === "it") return it_explore_catalog_retry(inputs)
	if (locale === "nl") return nl_explore_catalog_retry(inputs)
	if (locale === "pl") return pl_explore_catalog_retry(inputs)
	if (locale === "pt") return pt_explore_catalog_retry(inputs)
	if (locale === "ru") return ru_explore_catalog_retry(inputs)
	if (locale === "sv") return sv_explore_catalog_retry(inputs)
	if (locale === "tr") return tr_explore_catalog_retry(inputs)
	if (locale === "zh") return zh_explore_catalog_retry(inputs)
	if (locale === "ja") return ja_explore_catalog_retry(inputs)
	return en_explore_catalog_retry(inputs)
});
