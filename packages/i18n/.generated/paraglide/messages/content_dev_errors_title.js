/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Errors_TitleInputs */

const en_content_dev_errors_title = /** @type {(inputs: Content_Dev_Errors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error codes`)
};

const es_content_dev_errors_title = /** @type {(inputs: Content_Dev_Errors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Códigos de error`)
};

const de_content_dev_errors_title = /** @type {(inputs: Content_Dev_Errors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fehlercodes`)
};

const fr_content_dev_errors_title = /** @type {(inputs: Content_Dev_Errors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codes d’erreur`)
};

const it_content_dev_errors_title = /** @type {(inputs: Content_Dev_Errors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codici di errore`)
};

const nl_content_dev_errors_title = /** @type {(inputs: Content_Dev_Errors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foutcodes`)
};

const pl_content_dev_errors_title = /** @type {(inputs: Content_Dev_Errors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kody błędów`)
};

const pt_content_dev_errors_title = /** @type {(inputs: Content_Dev_Errors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Códigos de erro`)
};

const ru_content_dev_errors_title = /** @type {(inputs: Content_Dev_Errors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Коды ошибок`)
};

const sv_content_dev_errors_title = /** @type {(inputs: Content_Dev_Errors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Felkoder`)
};

const tr_content_dev_errors_title = /** @type {(inputs: Content_Dev_Errors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hata kodları`)
};

const zh_content_dev_errors_title = /** @type {(inputs: Content_Dev_Errors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`错误代码`)
};

const ja_content_dev_errors_title = /** @type {(inputs: Content_Dev_Errors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エラーコード`)
};

/**
* | output |
* | --- |
* | "Error codes" |
*
* @param {Content_Dev_Errors_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_errors_title = /** @type {((inputs?: Content_Dev_Errors_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Errors_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_errors_title(inputs)
	if (locale === "de") return de_content_dev_errors_title(inputs)
	if (locale === "fr") return fr_content_dev_errors_title(inputs)
	if (locale === "it") return it_content_dev_errors_title(inputs)
	if (locale === "nl") return nl_content_dev_errors_title(inputs)
	if (locale === "pl") return pl_content_dev_errors_title(inputs)
	if (locale === "pt") return pt_content_dev_errors_title(inputs)
	if (locale === "ru") return ru_content_dev_errors_title(inputs)
	if (locale === "sv") return sv_content_dev_errors_title(inputs)
	if (locale === "tr") return tr_content_dev_errors_title(inputs)
	if (locale === "zh") return zh_content_dev_errors_title(inputs)
	if (locale === "ja") return ja_content_dev_errors_title(inputs)
	return en_content_dev_errors_title(inputs)
});
