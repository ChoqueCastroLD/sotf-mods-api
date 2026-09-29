/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Term_BuildsInputs */

const en_common_term_builds = /** @type {(inputs: Common_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const es_common_term_builds = /** @type {(inputs: Common_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const de_common_term_builds = /** @type {(inputs: Common_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const fr_common_term_builds = /** @type {(inputs: Common_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const it_common_term_builds = /** @type {(inputs: Common_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const nl_common_term_builds = /** @type {(inputs: Common_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const pl_common_term_builds = /** @type {(inputs: Common_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buildy`)
};

const pt_common_term_builds = /** @type {(inputs: Common_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const ru_common_term_builds = /** @type {(inputs: Common_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Постройки`)
};

const sv_common_term_builds = /** @type {(inputs: Common_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byggen`)
};

const tr_common_term_builds = /** @type {(inputs: Common_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapılar`)
};

const zh_common_term_builds = /** @type {(inputs: Common_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑`)
};

const ja_common_term_builds = /** @type {(inputs: Common_Term_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築`)
};

/**
* | output |
* | --- |
* | "Builds" |
*
* @param {Common_Term_BuildsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_term_builds = /** @type {((inputs?: Common_Term_BuildsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Term_BuildsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_term_builds(inputs)
	if (locale === "de") return de_common_term_builds(inputs)
	if (locale === "fr") return fr_common_term_builds(inputs)
	if (locale === "it") return it_common_term_builds(inputs)
	if (locale === "nl") return nl_common_term_builds(inputs)
	if (locale === "pl") return pl_common_term_builds(inputs)
	if (locale === "pt") return pt_common_term_builds(inputs)
	if (locale === "ru") return ru_common_term_builds(inputs)
	if (locale === "sv") return sv_common_term_builds(inputs)
	if (locale === "tr") return tr_common_term_builds(inputs)
	if (locale === "zh") return zh_common_term_builds(inputs)
	if (locale === "ja") return ja_common_term_builds(inputs)
	return en_common_term_builds(inputs)
});
