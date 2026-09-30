/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Error_SlugInputs */

const en_upload_error_slug = /** @type {(inputs: Upload_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use lowercase letters, digits and hyphens (2 to 80).`)
};

const es_upload_error_slug = /** @type {(inputs: Upload_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa minúsculas, dígitos y guiones (de 2 a 80).`)
};

const de_upload_error_slug = /** @type {(inputs: Upload_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwende Kleinbuchstaben, Ziffern und Bindestriche (2 bis 80).`)
};

const fr_upload_error_slug = /** @type {(inputs: Upload_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez des minuscules, des chiffres et des tirets (de 2 à 80).`)
};

const it_upload_error_slug = /** @type {(inputs: Upload_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa lettere minuscole, cifre e trattini (da 2 a 80).`)
};

const nl_upload_error_slug = /** @type {(inputs: Upload_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik kleine letters, cijfers en koppeltekens (2 tot 80).`)
};

const pl_upload_error_slug = /** @type {(inputs: Upload_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj małych liter, cyfr i łączników (od 2 do 80).`)
};

const pt_upload_error_slug = /** @type {(inputs: Upload_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use letras minúsculas, dígitos e hífens (de 2 a 80).`)
};

const ru_upload_error_slug = /** @type {(inputs: Upload_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Используйте строчные латинские буквы, цифры и дефисы (от 2 до 80).`)
};

const sv_upload_error_slug = /** @type {(inputs: Upload_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd små bokstäver, siffror och bindestreck (2 till 80).`)
};

const tr_upload_error_slug = /** @type {(inputs: Upload_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Küçük harf, rakam ve kısa çizgi kullan (2 ile 80 arası).`)
};

const zh_upload_error_slug = /** @type {(inputs: Upload_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请使用小写字母、数字和连字符（2 到 80 个）。`)
};

const ja_upload_error_slug = /** @type {(inputs: Upload_Error_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小文字の英字、数字、ハイフンを使ってください（2〜80文字）。`)
};

/**
* | output |
* | --- |
* | "Use lowercase letters, digits and hyphens (2 to 80)." |
*
* @param {Upload_Error_SlugInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_error_slug = /** @type {((inputs?: Upload_Error_SlugInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Error_SlugInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_error_slug(inputs)
	if (locale === "de") return de_upload_error_slug(inputs)
	if (locale === "fr") return fr_upload_error_slug(inputs)
	if (locale === "it") return it_upload_error_slug(inputs)
	if (locale === "nl") return nl_upload_error_slug(inputs)
	if (locale === "pl") return pl_upload_error_slug(inputs)
	if (locale === "pt") return pt_upload_error_slug(inputs)
	if (locale === "ru") return ru_upload_error_slug(inputs)
	if (locale === "sv") return sv_upload_error_slug(inputs)
	if (locale === "tr") return tr_upload_error_slug(inputs)
	if (locale === "zh") return zh_upload_error_slug(inputs)
	if (locale === "ja") return ja_upload_error_slug(inputs)
	return en_upload_error_slug(inputs)
});
