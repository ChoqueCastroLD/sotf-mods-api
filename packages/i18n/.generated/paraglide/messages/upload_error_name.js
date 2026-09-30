/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Error_NameInputs */

const en_upload_error_name = /** @type {(inputs: Upload_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use 2 to 80 characters.`)
};

const es_upload_error_name = /** @type {(inputs: Upload_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa de 2 a 80 caracteres.`)
};

const de_upload_error_name = /** @type {(inputs: Upload_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwende 2 bis 80 Zeichen.`)
};

const fr_upload_error_name = /** @type {(inputs: Upload_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez de 2 à 80 caractères.`)
};

const it_upload_error_name = /** @type {(inputs: Upload_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa da 2 a 80 caratteri.`)
};

const nl_upload_error_name = /** @type {(inputs: Upload_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik 2 tot 80 tekens.`)
};

const pl_upload_error_name = /** @type {(inputs: Upload_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj od 2 do 80 znaków.`)
};

const pt_upload_error_name = /** @type {(inputs: Upload_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use de 2 a 80 caracteres.`)
};

const ru_upload_error_name = /** @type {(inputs: Upload_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Используйте от 2 до 80 символов.`)
};

const sv_upload_error_name = /** @type {(inputs: Upload_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd 2 till 80 tecken.`)
};

const tr_upload_error_name = /** @type {(inputs: Upload_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2 ile 80 karakter kullan.`)
};

const zh_upload_error_name = /** @type {(inputs: Upload_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请使用 2 到 80 个字符。`)
};

const ja_upload_error_name = /** @type {(inputs: Upload_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2〜80文字で入力してください。`)
};

/**
* | output |
* | --- |
* | "Use 2 to 80 characters." |
*
* @param {Upload_Error_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_error_name = /** @type {((inputs?: Upload_Error_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Error_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_error_name(inputs)
	if (locale === "de") return de_upload_error_name(inputs)
	if (locale === "fr") return fr_upload_error_name(inputs)
	if (locale === "it") return it_upload_error_name(inputs)
	if (locale === "nl") return nl_upload_error_name(inputs)
	if (locale === "pl") return pl_upload_error_name(inputs)
	if (locale === "pt") return pt_upload_error_name(inputs)
	if (locale === "ru") return ru_upload_error_name(inputs)
	if (locale === "sv") return sv_upload_error_name(inputs)
	if (locale === "tr") return tr_upload_error_name(inputs)
	if (locale === "zh") return zh_upload_error_name(inputs)
	if (locale === "ja") return ja_upload_error_name(inputs)
	return en_upload_error_name(inputs)
});
