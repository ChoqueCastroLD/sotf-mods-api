/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Invalid_UrlInputs */

const en_upload_issue_invalid_url = /** @type {(inputs: Upload_Issue_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The url is invalid.`)
};

const es_upload_issue_invalid_url = /** @type {(inputs: Upload_Issue_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La url no es válida.`)
};

const de_upload_issue_invalid_url = /** @type {(inputs: Upload_Issue_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die URL ist ungültig.`)
};

const fr_upload_issue_invalid_url = /** @type {(inputs: Upload_Issue_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’url n’est pas valide.`)
};

const it_upload_issue_invalid_url = /** @type {(inputs: Upload_Issue_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’url non è valido.`)
};

const nl_upload_issue_invalid_url = /** @type {(inputs: Upload_Issue_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De url is ongeldig.`)
};

const pl_upload_issue_invalid_url = /** @type {(inputs: Upload_Issue_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres url jest niepoprawny.`)
};

const pt_upload_issue_invalid_url = /** @type {(inputs: Upload_Issue_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A url é inválida.`)
};

const ru_upload_issue_invalid_url = /** @type {(inputs: Upload_Issue_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Некорректный url.`)
};

const sv_upload_issue_invalid_url = /** @type {(inputs: Upload_Issue_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Url:en är ogiltig.`)
};

const tr_upload_issue_invalid_url = /** @type {(inputs: Upload_Issue_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Url geçersiz.`)
};

const zh_upload_issue_invalid_url = /** @type {(inputs: Upload_Issue_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`url 无效。`)
};

const ja_upload_issue_invalid_url = /** @type {(inputs: Upload_Issue_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`url が無効です。`)
};

/**
* | output |
* | --- |
* | "The url is invalid." |
*
* @param {Upload_Issue_Invalid_UrlInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_invalid_url = /** @type {((inputs?: Upload_Issue_Invalid_UrlInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Invalid_UrlInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_invalid_url(inputs)
	if (locale === "de") return de_upload_issue_invalid_url(inputs)
	if (locale === "fr") return fr_upload_issue_invalid_url(inputs)
	if (locale === "it") return it_upload_issue_invalid_url(inputs)
	if (locale === "nl") return nl_upload_issue_invalid_url(inputs)
	if (locale === "pl") return pl_upload_issue_invalid_url(inputs)
	if (locale === "pt") return pt_upload_issue_invalid_url(inputs)
	if (locale === "ru") return ru_upload_issue_invalid_url(inputs)
	if (locale === "sv") return sv_upload_issue_invalid_url(inputs)
	if (locale === "tr") return tr_upload_issue_invalid_url(inputs)
	if (locale === "zh") return zh_upload_issue_invalid_url(inputs)
	if (locale === "ja") return ja_upload_issue_invalid_url(inputs)
	return en_upload_issue_invalid_url(inputs)
});
