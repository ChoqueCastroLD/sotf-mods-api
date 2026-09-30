/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Original_UrlInputs */

const en_basecamp_listing_original_url = /** @type {(inputs: Basecamp_Listing_Original_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link to the original`)
};

const es_basecamp_listing_original_url = /** @type {(inputs: Basecamp_Listing_Original_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlace al original`)
};

const de_basecamp_listing_original_url = /** @type {(inputs: Basecamp_Listing_Original_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link zum Original`)
};

const fr_basecamp_listing_original_url = /** @type {(inputs: Basecamp_Listing_Original_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lien vers l’original`)
};

const it_basecamp_listing_original_url = /** @type {(inputs: Basecamp_Listing_Original_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link all’originale`)
};

const nl_basecamp_listing_original_url = /** @type {(inputs: Basecamp_Listing_Original_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link naar het origineel`)
};

const pl_basecamp_listing_original_url = /** @type {(inputs: Basecamp_Listing_Original_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link do oryginału`)
};

const pt_basecamp_listing_original_url = /** @type {(inputs: Basecamp_Listing_Original_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link para o original`)
};

const ru_basecamp_listing_original_url = /** @type {(inputs: Basecamp_Listing_Original_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылка на оригинал`)
};

const sv_basecamp_listing_original_url = /** @type {(inputs: Basecamp_Listing_Original_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länk till originalet`)
};

const tr_basecamp_listing_original_url = /** @type {(inputs: Basecamp_Listing_Original_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orijinalin bağlantısı`)
};

const zh_basecamp_listing_original_url = /** @type {(inputs: Basecamp_Listing_Original_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原作链接`)
};

const ja_basecamp_listing_original_url = /** @type {(inputs: Basecamp_Listing_Original_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オリジナルへのリンク`)
};

/**
* | output |
* | --- |
* | "Link to the original" |
*
* @param {Basecamp_Listing_Original_UrlInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_original_url = /** @type {((inputs?: Basecamp_Listing_Original_UrlInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Original_UrlInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_original_url(inputs)
	if (locale === "de") return de_basecamp_listing_original_url(inputs)
	if (locale === "fr") return fr_basecamp_listing_original_url(inputs)
	if (locale === "it") return it_basecamp_listing_original_url(inputs)
	if (locale === "nl") return nl_basecamp_listing_original_url(inputs)
	if (locale === "pl") return pl_basecamp_listing_original_url(inputs)
	if (locale === "pt") return pt_basecamp_listing_original_url(inputs)
	if (locale === "ru") return ru_basecamp_listing_original_url(inputs)
	if (locale === "sv") return sv_basecamp_listing_original_url(inputs)
	if (locale === "tr") return tr_basecamp_listing_original_url(inputs)
	if (locale === "zh") return zh_basecamp_listing_original_url(inputs)
	if (locale === "ja") return ja_basecamp_listing_original_url(inputs)
	return en_basecamp_listing_original_url(inputs)
});
