/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Term_BuildsInputs */

const en_cmdk_term_builds = /** @type {(inputs: Cmdk_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const es_cmdk_term_builds = /** @type {(inputs: Cmdk_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const de_cmdk_term_builds = /** @type {(inputs: Cmdk_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const fr_cmdk_term_builds = /** @type {(inputs: Cmdk_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const it_cmdk_term_builds = /** @type {(inputs: Cmdk_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const nl_cmdk_term_builds = /** @type {(inputs: Cmdk_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const pl_cmdk_term_builds = /** @type {(inputs: Cmdk_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buildy`)
};

const pt_cmdk_term_builds = /** @type {(inputs: Cmdk_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const ru_cmdk_term_builds = /** @type {(inputs: Cmdk_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Постройки`)
};

const sv_cmdk_term_builds = /** @type {(inputs: Cmdk_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byggen`)
};

const tr_cmdk_term_builds = /** @type {(inputs: Cmdk_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapılar`)
};

const zh_cmdk_term_builds = /** @type {(inputs: Cmdk_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑`)
};

const ja_cmdk_term_builds = /** @type {(inputs: Cmdk_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築`)
};

/**
* | output |
* | --- |
* | "Builds" |
*
* @param {Cmdk_Term_BuildsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_term_builds = /** @type {((inputs?: Cmdk_Term_BuildsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Term_BuildsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_term_builds(inputs)
	if (locale === "de") return de_cmdk_term_builds(inputs)
	if (locale === "fr") return fr_cmdk_term_builds(inputs)
	if (locale === "it") return it_cmdk_term_builds(inputs)
	if (locale === "nl") return nl_cmdk_term_builds(inputs)
	if (locale === "pl") return pl_cmdk_term_builds(inputs)
	if (locale === "pt") return pt_cmdk_term_builds(inputs)
	if (locale === "ru") return ru_cmdk_term_builds(inputs)
	if (locale === "sv") return sv_cmdk_term_builds(inputs)
	if (locale === "tr") return tr_cmdk_term_builds(inputs)
	if (locale === "zh") return zh_cmdk_term_builds(inputs)
	if (locale === "ja") return ja_cmdk_term_builds(inputs)
	return en_cmdk_term_builds(inputs)
});
