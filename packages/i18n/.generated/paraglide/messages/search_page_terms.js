/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Page_TermsInputs */

const en_search_page_terms = /** @type {(inputs: Search_Page_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terms of service`)
};

const es_search_page_terms = /** @type {(inputs: Search_Page_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Términos del servicio`)
};

const de_search_page_terms = /** @type {(inputs: Search_Page_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nutzungsbedingungen`)
};

const fr_search_page_terms = /** @type {(inputs: Search_Page_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conditions d’utilisation`)
};

const it_search_page_terms = /** @type {(inputs: Search_Page_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Termini di servizio`)
};

const nl_search_page_terms = /** @type {(inputs: Search_Page_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servicevoorwaarden`)
};

const pl_search_page_terms = /** @type {(inputs: Search_Page_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regulamin`)
};

const pt_search_page_terms = /** @type {(inputs: Search_Page_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Termos de serviço`)
};

const ru_search_page_terms = /** @type {(inputs: Search_Page_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Условия использования`)
};

const sv_search_page_terms = /** @type {(inputs: Search_Page_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Användarvillkor`)
};

const tr_search_page_terms = /** @type {(inputs: Search_Page_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hizmet şartları`)
};

const zh_search_page_terms = /** @type {(inputs: Search_Page_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`服务条款`)
};

const ja_search_page_terms = /** @type {(inputs: Search_Page_TermsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`利用規約`)
};

/**
* | output |
* | --- |
* | "Terms of service" |
*
* @param {Search_Page_TermsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const search_page_terms = /** @type {((inputs?: Search_Page_TermsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Page_TermsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_search_page_terms(inputs)
	if (locale === "de") return de_search_page_terms(inputs)
	if (locale === "fr") return fr_search_page_terms(inputs)
	if (locale === "it") return it_search_page_terms(inputs)
	if (locale === "nl") return nl_search_page_terms(inputs)
	if (locale === "pl") return pl_search_page_terms(inputs)
	if (locale === "pt") return pt_search_page_terms(inputs)
	if (locale === "ru") return ru_search_page_terms(inputs)
	if (locale === "sv") return sv_search_page_terms(inputs)
	if (locale === "tr") return tr_search_page_terms(inputs)
	if (locale === "zh") return zh_search_page_terms(inputs)
	if (locale === "ja") return ja_search_page_terms(inputs)
	return en_search_page_terms(inputs)
});
