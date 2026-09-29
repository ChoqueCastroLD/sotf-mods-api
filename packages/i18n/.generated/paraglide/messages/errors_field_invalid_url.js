/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Field_Invalid_UrlInputs */

const en_errors_field_invalid_url = /** @type {(inputs: Errors_Field_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter a full link starting with https://.`)
};

const es_errors_field_invalid_url = /** @type {(inputs: Errors_Field_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe un enlace completo que empiece por https://.`)
};

const de_errors_field_invalid_url = /** @type {(inputs: Errors_Field_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib einen vollständigen Link ein, der mit https:// beginnt.`)
};

const fr_errors_field_invalid_url = /** @type {(inputs: Errors_Field_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez un lien complet commençant par https://.`)
};

const it_errors_field_invalid_url = /** @type {(inputs: Errors_Field_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserisci un link completo che inizi con https://.`)
};

const nl_errors_field_invalid_url = /** @type {(inputs: Errors_Field_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vul een volledige link in die begint met https://.`)
};

const pl_errors_field_invalid_url = /** @type {(inputs: Errors_Field_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podaj pełny link zaczynający się od https://.`)
};

const pt_errors_field_invalid_url = /** @type {(inputs: Errors_Field_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Digite um link completo que comece com https://.`)
};

const ru_errors_field_invalid_url = /** @type {(inputs: Errors_Field_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Введите полную ссылку, начинающуюся с https://.`)
};

const sv_errors_field_invalid_url = /** @type {(inputs: Errors_Field_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange en fullständig länk som börjar med https://.`)
};

const tr_errors_field_invalid_url = /** @type {(inputs: Errors_Field_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https:// ile başlayan tam bir bağlantı gir.`)
};

const zh_errors_field_invalid_url = /** @type {(inputs: Errors_Field_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入以 https:// 开头的完整链接。`)
};

const ja_errors_field_invalid_url = /** @type {(inputs: Errors_Field_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https:// で始まる完全なリンクを入力してください。`)
};

/**
* | output |
* | --- |
* | "Enter a full link starting with https://." |
*
* @param {Errors_Field_Invalid_UrlInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_field_invalid_url = /** @type {((inputs?: Errors_Field_Invalid_UrlInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Field_Invalid_UrlInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_field_invalid_url(inputs)
	if (locale === "de") return de_errors_field_invalid_url(inputs)
	if (locale === "fr") return fr_errors_field_invalid_url(inputs)
	if (locale === "it") return it_errors_field_invalid_url(inputs)
	if (locale === "nl") return nl_errors_field_invalid_url(inputs)
	if (locale === "pl") return pl_errors_field_invalid_url(inputs)
	if (locale === "pt") return pt_errors_field_invalid_url(inputs)
	if (locale === "ru") return ru_errors_field_invalid_url(inputs)
	if (locale === "sv") return sv_errors_field_invalid_url(inputs)
	if (locale === "tr") return tr_errors_field_invalid_url(inputs)
	if (locale === "zh") return zh_errors_field_invalid_url(inputs)
	if (locale === "ja") return ja_errors_field_invalid_url(inputs)
	return en_errors_field_invalid_url(inputs)
});
