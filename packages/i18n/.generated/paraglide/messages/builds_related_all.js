/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Related_AllInputs */

const en_builds_related_all = /** @type {(inputs: Builds_Related_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All builds`)
};

const es_builds_related_all = /** @type {(inputs: Builds_Related_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas las builds`)
};

const de_builds_related_all = /** @type {(inputs: Builds_Related_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Builds`)
};

const fr_builds_related_all = /** @type {(inputs: Builds_Related_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les builds`)
};

const it_builds_related_all = /** @type {(inputs: Builds_Related_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le build`)
};

const nl_builds_related_all = /** @type {(inputs: Builds_Related_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle builds`)
};

const pl_builds_related_all = /** @type {(inputs: Builds_Related_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie buildy`)
};

const pt_builds_related_all = /** @type {(inputs: Builds_Related_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as builds`)
};

const ru_builds_related_all = /** @type {(inputs: Builds_Related_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все постройки`)
};

const sv_builds_related_all = /** @type {(inputs: Builds_Related_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla byggen`)
};

const tr_builds_related_all = /** @type {(inputs: Builds_Related_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm yapılar`)
};

const zh_builds_related_all = /** @type {(inputs: Builds_Related_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有建筑`)
};

const ja_builds_related_all = /** @type {(inputs: Builds_Related_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての建築`)
};

/**
* | output |
* | --- |
* | "All builds" |
*
* @param {Builds_Related_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_related_all = /** @type {((inputs?: Builds_Related_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Related_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_related_all(inputs)
	if (locale === "de") return de_builds_related_all(inputs)
	if (locale === "fr") return fr_builds_related_all(inputs)
	if (locale === "it") return it_builds_related_all(inputs)
	if (locale === "nl") return nl_builds_related_all(inputs)
	if (locale === "pl") return pl_builds_related_all(inputs)
	if (locale === "pt") return pt_builds_related_all(inputs)
	if (locale === "ru") return ru_builds_related_all(inputs)
	if (locale === "sv") return sv_builds_related_all(inputs)
	if (locale === "tr") return tr_builds_related_all(inputs)
	if (locale === "zh") return zh_builds_related_all(inputs)
	if (locale === "ja") return ja_builds_related_all(inputs)
	return en_builds_related_all(inputs)
});
