/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Slug_InvalidInputs */

const en_upload_preflight_slug_invalid = /** @type {(inputs: Upload_Preflight_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The address is invalid.`)
};

const es_upload_preflight_slug_invalid = /** @type {(inputs: Upload_Preflight_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La dirección no es válida.`)
};

const de_upload_preflight_slug_invalid = /** @type {(inputs: Upload_Preflight_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Adresse ist ungültig.`)
};

const fr_upload_preflight_slug_invalid = /** @type {(inputs: Upload_Preflight_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’adresse n’est pas valide.`)
};

const it_upload_preflight_slug_invalid = /** @type {(inputs: Upload_Preflight_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’indirizzo non è valido.`)
};

const nl_upload_preflight_slug_invalid = /** @type {(inputs: Upload_Preflight_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het adres is ongeldig.`)
};

const pl_upload_preflight_slug_invalid = /** @type {(inputs: Upload_Preflight_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres jest niepoprawny.`)
};

const pt_upload_preflight_slug_invalid = /** @type {(inputs: Upload_Preflight_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O endereço é inválido.`)
};

const ru_upload_preflight_slug_invalid = /** @type {(inputs: Upload_Preflight_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Некорректный адрес.`)
};

const sv_upload_preflight_slug_invalid = /** @type {(inputs: Upload_Preflight_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adressen är ogiltig.`)
};

const tr_upload_preflight_slug_invalid = /** @type {(inputs: Upload_Preflight_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres geçersiz.`)
};

const zh_upload_preflight_slug_invalid = /** @type {(inputs: Upload_Preflight_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地址无效。`)
};

const ja_upload_preflight_slug_invalid = /** @type {(inputs: Upload_Preflight_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アドレスが無効です。`)
};

/**
* | output |
* | --- |
* | "The address is invalid." |
*
* @param {Upload_Preflight_Slug_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_slug_invalid = /** @type {((inputs?: Upload_Preflight_Slug_InvalidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Slug_InvalidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_slug_invalid(inputs)
	if (locale === "de") return de_upload_preflight_slug_invalid(inputs)
	if (locale === "fr") return fr_upload_preflight_slug_invalid(inputs)
	if (locale === "it") return it_upload_preflight_slug_invalid(inputs)
	if (locale === "nl") return nl_upload_preflight_slug_invalid(inputs)
	if (locale === "pl") return pl_upload_preflight_slug_invalid(inputs)
	if (locale === "pt") return pt_upload_preflight_slug_invalid(inputs)
	if (locale === "ru") return ru_upload_preflight_slug_invalid(inputs)
	if (locale === "sv") return sv_upload_preflight_slug_invalid(inputs)
	if (locale === "tr") return tr_upload_preflight_slug_invalid(inputs)
	if (locale === "zh") return zh_upload_preflight_slug_invalid(inputs)
	if (locale === "ja") return ja_upload_preflight_slug_invalid(inputs)
	return en_upload_preflight_slug_invalid(inputs)
});
