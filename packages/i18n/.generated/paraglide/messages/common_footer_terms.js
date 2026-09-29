/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Footer_TermsInputs */

const en_common_footer_terms = /** @type {(inputs: Common_Footer_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terms`)
};

const es_common_footer_terms = /** @type {(inputs: Common_Footer_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Términos`)
};

const de_common_footer_terms = /** @type {(inputs: Common_Footer_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nutzungsbedingungen`)
};

const fr_common_footer_terms = /** @type {(inputs: Common_Footer_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conditions d’utilisation`)
};

const it_common_footer_terms = /** @type {(inputs: Common_Footer_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Termini`)
};

const nl_common_footer_terms = /** @type {(inputs: Common_Footer_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorwaarden`)
};

const pl_common_footer_terms = /** @type {(inputs: Common_Footer_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regulamin`)
};

const pt_common_footer_terms = /** @type {(inputs: Common_Footer_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Termos`)
};

const ru_common_footer_terms = /** @type {(inputs: Common_Footer_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Условия`)
};

const sv_common_footer_terms = /** @type {(inputs: Common_Footer_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Villkor`)
};

const tr_common_footer_terms = /** @type {(inputs: Common_Footer_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koşullar`)
};

const zh_common_footer_terms = /** @type {(inputs: Common_Footer_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`条款`)
};

const ja_common_footer_terms = /** @type {(inputs: Common_Footer_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`利用規約`)
};

/**
* | output |
* | --- |
* | "Terms" |
*
* @param {Common_Footer_TermsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_footer_terms = /** @type {((inputs?: Common_Footer_TermsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Footer_TermsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_footer_terms(inputs)
	if (locale === "de") return de_common_footer_terms(inputs)
	if (locale === "fr") return fr_common_footer_terms(inputs)
	if (locale === "it") return it_common_footer_terms(inputs)
	if (locale === "nl") return nl_common_footer_terms(inputs)
	if (locale === "pl") return pl_common_footer_terms(inputs)
	if (locale === "pt") return pt_common_footer_terms(inputs)
	if (locale === "ru") return ru_common_footer_terms(inputs)
	if (locale === "sv") return sv_common_footer_terms(inputs)
	if (locale === "tr") return tr_common_footer_terms(inputs)
	if (locale === "zh") return zh_common_footer_terms(inputs)
	if (locale === "ja") return ja_common_footer_terms(inputs)
	return en_common_footer_terms(inputs)
});
