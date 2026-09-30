/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_BetaInputs */

const en_basecamp_versions_beta = /** @type {(inputs: Basecamp_Versions_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const es_basecamp_versions_beta = /** @type {(inputs: Basecamp_Versions_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const de_basecamp_versions_beta = /** @type {(inputs: Basecamp_Versions_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const fr_basecamp_versions_beta = /** @type {(inputs: Basecamp_Versions_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bêta`)
};

const it_basecamp_versions_beta = /** @type {(inputs: Basecamp_Versions_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const nl_basecamp_versions_beta = /** @type {(inputs: Basecamp_Versions_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bèta`)
};

const pl_basecamp_versions_beta = /** @type {(inputs: Basecamp_Versions_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const pt_basecamp_versions_beta = /** @type {(inputs: Basecamp_Versions_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const ru_basecamp_versions_beta = /** @type {(inputs: Basecamp_Versions_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Бета`)
};

const sv_basecamp_versions_beta = /** @type {(inputs: Basecamp_Versions_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const tr_basecamp_versions_beta = /** @type {(inputs: Basecamp_Versions_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const zh_basecamp_versions_beta = /** @type {(inputs: Basecamp_Versions_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试版`)
};

const ja_basecamp_versions_beta = /** @type {(inputs: Basecamp_Versions_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベータ`)
};

/**
* | output |
* | --- |
* | "Beta" |
*
* @param {Basecamp_Versions_BetaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_beta = /** @type {((inputs?: Basecamp_Versions_BetaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_BetaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_beta(inputs)
	if (locale === "de") return de_basecamp_versions_beta(inputs)
	if (locale === "fr") return fr_basecamp_versions_beta(inputs)
	if (locale === "it") return it_basecamp_versions_beta(inputs)
	if (locale === "nl") return nl_basecamp_versions_beta(inputs)
	if (locale === "pl") return pl_basecamp_versions_beta(inputs)
	if (locale === "pt") return pt_basecamp_versions_beta(inputs)
	if (locale === "ru") return ru_basecamp_versions_beta(inputs)
	if (locale === "sv") return sv_basecamp_versions_beta(inputs)
	if (locale === "tr") return tr_basecamp_versions_beta(inputs)
	if (locale === "zh") return zh_basecamp_versions_beta(inputs)
	if (locale === "ja") return ja_basecamp_versions_beta(inputs)
	return en_basecamp_versions_beta(inputs)
});
