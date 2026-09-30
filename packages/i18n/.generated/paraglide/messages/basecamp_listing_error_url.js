/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Error_UrlInputs */

const en_basecamp_listing_error_url = /** @type {(inputs: Basecamp_Listing_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter a full address that starts with https://`)
};

const es_basecamp_listing_error_url = /** @type {(inputs: Basecamp_Listing_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe una dirección completa que empiece por https://`)
};

const de_basecamp_listing_error_url = /** @type {(inputs: Basecamp_Listing_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib eine vollständige Adresse ein, die mit https:// beginnt`)
};

const fr_basecamp_listing_error_url = /** @type {(inputs: Basecamp_Listing_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez une adresse complète commençant par https://`)
};

const it_basecamp_listing_error_url = /** @type {(inputs: Basecamp_Listing_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserisci un indirizzo completo che inizi con https://`)
};

const nl_basecamp_listing_error_url = /** @type {(inputs: Basecamp_Listing_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voer een volledig adres in dat met https:// begint`)
};

const pl_basecamp_listing_error_url = /** @type {(inputs: Basecamp_Listing_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wpisz pełny adres zaczynający się od https://`)
};

const pt_basecamp_listing_error_url = /** @type {(inputs: Basecamp_Listing_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Digite um endereço completo que comece com https://`)
};

const ru_basecamp_listing_error_url = /** @type {(inputs: Basecamp_Listing_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Введите полный адрес, начинающийся с https://`)
};

const sv_basecamp_listing_error_url = /** @type {(inputs: Basecamp_Listing_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange en fullständig adress som börjar med https://`)
};

const tr_basecamp_listing_error_url = /** @type {(inputs: Basecamp_Listing_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https:// ile başlayan tam bir adres gir`)
};

const zh_basecamp_listing_error_url = /** @type {(inputs: Basecamp_Listing_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入以 https:// 开头的完整地址`)
};

const ja_basecamp_listing_error_url = /** @type {(inputs: Basecamp_Listing_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https:// で始まる完全なアドレスを入力してください`)
};

/**
* | output |
* | --- |
* | "Enter a full address that starts with https://" |
*
* @param {Basecamp_Listing_Error_UrlInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_error_url = /** @type {((inputs?: Basecamp_Listing_Error_UrlInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Error_UrlInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_error_url(inputs)
	if (locale === "de") return de_basecamp_listing_error_url(inputs)
	if (locale === "fr") return fr_basecamp_listing_error_url(inputs)
	if (locale === "it") return it_basecamp_listing_error_url(inputs)
	if (locale === "nl") return nl_basecamp_listing_error_url(inputs)
	if (locale === "pl") return pl_basecamp_listing_error_url(inputs)
	if (locale === "pt") return pt_basecamp_listing_error_url(inputs)
	if (locale === "ru") return ru_basecamp_listing_error_url(inputs)
	if (locale === "sv") return sv_basecamp_listing_error_url(inputs)
	if (locale === "tr") return tr_basecamp_listing_error_url(inputs)
	if (locale === "zh") return zh_basecamp_listing_error_url(inputs)
	if (locale === "ja") return ja_basecamp_listing_error_url(inputs)
	return en_basecamp_listing_error_url(inputs)
});
