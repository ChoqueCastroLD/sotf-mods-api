/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Error_LinksInputs */

const en_basecamp_listing_error_links = /** @type {(inputs: Basecamp_Listing_Error_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One of the support links is not a valid address.`)
};

const es_basecamp_listing_error_links = /** @type {(inputs: Basecamp_Listing_Error_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uno de los enlaces de apoyo no es una dirección válida.`)
};

const de_basecamp_listing_error_links = /** @type {(inputs: Basecamp_Listing_Error_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einer der Unterstützungslinks ist keine gültige Adresse.`)
};

const fr_basecamp_listing_error_links = /** @type {(inputs: Basecamp_Listing_Error_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’un des liens de soutien n’est pas une adresse valide.`)
};

const it_basecamp_listing_error_links = /** @type {(inputs: Basecamp_Listing_Error_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uno dei link di supporto non è un indirizzo valido.`)
};

const nl_basecamp_listing_error_links = /** @type {(inputs: Basecamp_Listing_Error_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een van de steunlinks is geen geldig adres.`)
};

const pl_basecamp_listing_error_links = /** @type {(inputs: Basecamp_Listing_Error_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeden z linków wsparcia nie jest prawidłowym adresem.`)
};

const pt_basecamp_listing_error_links = /** @type {(inputs: Basecamp_Listing_Error_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um dos links de apoio não é um endereço válido.`)
};

const ru_basecamp_listing_error_links = /** @type {(inputs: Basecamp_Listing_Error_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Одна из ссылок поддержки — неверный адрес.`)
};

const sv_basecamp_listing_error_links = /** @type {(inputs: Basecamp_Listing_Error_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En av stödlänkarna är inte en giltig adress.`)
};

const tr_basecamp_listing_error_links = /** @type {(inputs: Basecamp_Listing_Error_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Destek bağlantılarından biri geçerli bir adres değil.`)
};

const zh_basecamp_listing_error_links = /** @type {(inputs: Basecamp_Listing_Error_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有一个赞助链接不是有效地址。`)
};

const ja_basecamp_listing_error_links = /** @type {(inputs: Basecamp_Listing_Error_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支援リンクの 1 つが有効なアドレスではありません。`)
};

/**
* | output |
* | --- |
* | "One of the support links is not a valid address." |
*
* @param {Basecamp_Listing_Error_LinksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_error_links = /** @type {((inputs?: Basecamp_Listing_Error_LinksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Error_LinksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_error_links(inputs)
	if (locale === "de") return de_basecamp_listing_error_links(inputs)
	if (locale === "fr") return fr_basecamp_listing_error_links(inputs)
	if (locale === "it") return it_basecamp_listing_error_links(inputs)
	if (locale === "nl") return nl_basecamp_listing_error_links(inputs)
	if (locale === "pl") return pl_basecamp_listing_error_links(inputs)
	if (locale === "pt") return pt_basecamp_listing_error_links(inputs)
	if (locale === "ru") return ru_basecamp_listing_error_links(inputs)
	if (locale === "sv") return sv_basecamp_listing_error_links(inputs)
	if (locale === "tr") return tr_basecamp_listing_error_links(inputs)
	if (locale === "zh") return zh_basecamp_listing_error_links(inputs)
	if (locale === "ja") return ja_basecamp_listing_error_links(inputs)
	return en_basecamp_listing_error_links(inputs)
});
