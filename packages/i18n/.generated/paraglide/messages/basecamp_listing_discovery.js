/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_DiscoveryInputs */

const en_basecamp_listing_discovery = /** @type {(inputs: Basecamp_Listing_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Category and tags`)
};

const es_basecamp_listing_discovery = /** @type {(inputs: Basecamp_Listing_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoría y tags`)
};

const de_basecamp_listing_discovery = /** @type {(inputs: Basecamp_Listing_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie und Tags`)
};

const fr_basecamp_listing_discovery = /** @type {(inputs: Basecamp_Listing_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégorie et tags`)
};

const it_basecamp_listing_discovery = /** @type {(inputs: Basecamp_Listing_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria e tag`)
};

const nl_basecamp_listing_discovery = /** @type {(inputs: Basecamp_Listing_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie en tags`)
};

const pl_basecamp_listing_discovery = /** @type {(inputs: Basecamp_Listing_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoria i tagi`)
};

const pt_basecamp_listing_discovery = /** @type {(inputs: Basecamp_Listing_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria e tags`)
};

const ru_basecamp_listing_discovery = /** @type {(inputs: Basecamp_Listing_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категория и теги`)
};

const sv_basecamp_listing_discovery = /** @type {(inputs: Basecamp_Listing_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori och taggar`)
};

const tr_basecamp_listing_discovery = /** @type {(inputs: Basecamp_Listing_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori ve etiketler`)
};

const zh_basecamp_listing_discovery = /** @type {(inputs: Basecamp_Listing_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类与标签`)
};

const ja_basecamp_listing_discovery = /** @type {(inputs: Basecamp_Listing_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリーとタグ`)
};

/**
* | output |
* | --- |
* | "Category and tags" |
*
* @param {Basecamp_Listing_DiscoveryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_discovery = /** @type {((inputs?: Basecamp_Listing_DiscoveryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_DiscoveryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_discovery(inputs)
	if (locale === "de") return de_basecamp_listing_discovery(inputs)
	if (locale === "fr") return fr_basecamp_listing_discovery(inputs)
	if (locale === "it") return it_basecamp_listing_discovery(inputs)
	if (locale === "nl") return nl_basecamp_listing_discovery(inputs)
	if (locale === "pl") return pl_basecamp_listing_discovery(inputs)
	if (locale === "pt") return pt_basecamp_listing_discovery(inputs)
	if (locale === "ru") return ru_basecamp_listing_discovery(inputs)
	if (locale === "sv") return sv_basecamp_listing_discovery(inputs)
	if (locale === "tr") return tr_basecamp_listing_discovery(inputs)
	if (locale === "zh") return zh_basecamp_listing_discovery(inputs)
	if (locale === "ja") return ja_basecamp_listing_discovery(inputs)
	return en_basecamp_listing_discovery(inputs)
});
