/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Page_BrandInputs */

const en_search_page_brand = /** @type {(inputs: Search_Page_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brand assets`)
};

const es_search_page_brand = /** @type {(inputs: Search_Page_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recursos de marca`)
};

const de_search_page_brand = /** @type {(inputs: Search_Page_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markenmaterial`)
};

const fr_search_page_brand = /** @type {(inputs: Search_Page_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ressources de marque`)
};

const it_search_page_brand = /** @type {(inputs: Search_Page_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risorse del marchio`)
};

const nl_search_page_brand = /** @type {(inputs: Search_Page_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Merkmateriaal`)
};

const pl_search_page_brand = /** @type {(inputs: Search_Page_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Materiały marki`)
};

const pt_search_page_brand = /** @type {(inputs: Search_Page_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recursos da marca`)
};

const ru_search_page_brand = /** @type {(inputs: Search_Page_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Материалы бренда`)
};

const sv_search_page_brand = /** @type {(inputs: Search_Page_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varumärkesmaterial`)
};

const tr_search_page_brand = /** @type {(inputs: Search_Page_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marka varlıkları`)
};

const zh_search_page_brand = /** @type {(inputs: Search_Page_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`品牌资源`)
};

const ja_search_page_brand = /** @type {(inputs: Search_Page_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ブランド素材`)
};

/**
* | output |
* | --- |
* | "Brand assets" |
*
* @param {Search_Page_BrandInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const search_page_brand = /** @type {((inputs?: Search_Page_BrandInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Page_BrandInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_search_page_brand(inputs)
	if (locale === "de") return de_search_page_brand(inputs)
	if (locale === "fr") return fr_search_page_brand(inputs)
	if (locale === "it") return it_search_page_brand(inputs)
	if (locale === "nl") return nl_search_page_brand(inputs)
	if (locale === "pl") return pl_search_page_brand(inputs)
	if (locale === "pt") return pt_search_page_brand(inputs)
	if (locale === "ru") return ru_search_page_brand(inputs)
	if (locale === "sv") return sv_search_page_brand(inputs)
	if (locale === "tr") return tr_search_page_brand(inputs)
	if (locale === "zh") return zh_search_page_brand(inputs)
	if (locale === "ja") return ja_search_page_brand(inputs)
	return en_search_page_brand(inputs)
});
