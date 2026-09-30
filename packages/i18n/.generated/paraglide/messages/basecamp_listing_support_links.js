/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Support_LinksInputs */

const en_basecamp_listing_support_links = /** @type {(inputs: Basecamp_Listing_Support_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Support links`)
};

const es_basecamp_listing_support_links = /** @type {(inputs: Basecamp_Listing_Support_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlaces de apoyo`)
};

const de_basecamp_listing_support_links = /** @type {(inputs: Basecamp_Listing_Support_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unterstützungslinks`)
};

const fr_basecamp_listing_support_links = /** @type {(inputs: Basecamp_Listing_Support_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liens de soutien`)
};

const it_basecamp_listing_support_links = /** @type {(inputs: Basecamp_Listing_Support_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link di supporto`)
};

const nl_basecamp_listing_support_links = /** @type {(inputs: Basecamp_Listing_Support_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steunlinks`)
};

const pl_basecamp_listing_support_links = /** @type {(inputs: Basecamp_Listing_Support_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linki wsparcia`)
};

const pt_basecamp_listing_support_links = /** @type {(inputs: Basecamp_Listing_Support_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links de apoio`)
};

const ru_basecamp_listing_support_links = /** @type {(inputs: Basecamp_Listing_Support_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылки поддержки`)
};

const sv_basecamp_listing_support_links = /** @type {(inputs: Basecamp_Listing_Support_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stödlänkar`)
};

const tr_basecamp_listing_support_links = /** @type {(inputs: Basecamp_Listing_Support_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Destek bağlantıları`)
};

const zh_basecamp_listing_support_links = /** @type {(inputs: Basecamp_Listing_Support_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`赞助链接`)
};

const ja_basecamp_listing_support_links = /** @type {(inputs: Basecamp_Listing_Support_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支援リンク`)
};

/**
* | output |
* | --- |
* | "Support links" |
*
* @param {Basecamp_Listing_Support_LinksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_support_links = /** @type {((inputs?: Basecamp_Listing_Support_LinksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Support_LinksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_support_links(inputs)
	if (locale === "de") return de_basecamp_listing_support_links(inputs)
	if (locale === "fr") return fr_basecamp_listing_support_links(inputs)
	if (locale === "it") return it_basecamp_listing_support_links(inputs)
	if (locale === "nl") return nl_basecamp_listing_support_links(inputs)
	if (locale === "pl") return pl_basecamp_listing_support_links(inputs)
	if (locale === "pt") return pt_basecamp_listing_support_links(inputs)
	if (locale === "ru") return ru_basecamp_listing_support_links(inputs)
	if (locale === "sv") return sv_basecamp_listing_support_links(inputs)
	if (locale === "tr") return tr_basecamp_listing_support_links(inputs)
	if (locale === "zh") return zh_basecamp_listing_support_links(inputs)
	if (locale === "ja") return ja_basecamp_listing_support_links(inputs)
	return en_basecamp_listing_support_links(inputs)
});
