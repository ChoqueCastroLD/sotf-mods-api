/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ n: NonNullable<unknown> }} Upload_Links_UrlInputs */

const en_upload_links_url = /** @type {(inputs: Upload_Links_UrlInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Address of link ${i?.n}`)
};

const es_upload_links_url = /** @type {(inputs: Upload_Links_UrlInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dirección del enlace ${i?.n}`)
};

const de_upload_links_url = /** @type {(inputs: Upload_Links_UrlInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adresse von Link ${i?.n}`)
};

const fr_upload_links_url = /** @type {(inputs: Upload_Links_UrlInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adresse du lien ${i?.n}`)
};

const it_upload_links_url = /** @type {(inputs: Upload_Links_UrlInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Indirizzo del link ${i?.n}`)
};

const nl_upload_links_url = /** @type {(inputs: Upload_Links_UrlInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adres van link ${i?.n}`)
};

const pl_upload_links_url = /** @type {(inputs: Upload_Links_UrlInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adres linku ${i?.n}`)
};

const pt_upload_links_url = /** @type {(inputs: Upload_Links_UrlInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Endereço do link ${i?.n}`)
};

const ru_upload_links_url = /** @type {(inputs: Upload_Links_UrlInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Адрес ссылки ${i?.n}`)
};

const sv_upload_links_url = /** @type {(inputs: Upload_Links_UrlInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adress för länk ${i?.n}`)
};

const tr_upload_links_url = /** @type {(inputs: Upload_Links_UrlInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.n}. bağlantının adresi`)
};

const zh_upload_links_url = /** @type {(inputs: Upload_Links_UrlInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`链接 ${i?.n} 的地址`)
};

const ja_upload_links_url = /** @type {(inputs: Upload_Links_UrlInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`リンク ${i?.n} のアドレス`)
};

/**
* | output |
* | --- |
* | "Address of link {n}" |
*
* @param {Upload_Links_UrlInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_links_url = /** @type {((inputs: Upload_Links_UrlInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Links_UrlInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_links_url(inputs)
	if (locale === "de") return de_upload_links_url(inputs)
	if (locale === "fr") return fr_upload_links_url(inputs)
	if (locale === "it") return it_upload_links_url(inputs)
	if (locale === "nl") return nl_upload_links_url(inputs)
	if (locale === "pl") return pl_upload_links_url(inputs)
	if (locale === "pt") return pt_upload_links_url(inputs)
	if (locale === "ru") return ru_upload_links_url(inputs)
	if (locale === "sv") return sv_upload_links_url(inputs)
	if (locale === "tr") return tr_upload_links_url(inputs)
	if (locale === "zh") return zh_upload_links_url(inputs)
	if (locale === "ja") return ja_upload_links_url(inputs)
	return en_upload_links_url(inputs)
});
