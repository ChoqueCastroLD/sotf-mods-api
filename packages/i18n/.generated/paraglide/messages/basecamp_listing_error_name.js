/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Error_NameInputs */

const en_basecamp_listing_error_name = /** @type {(inputs: Basecamp_Listing_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The name needs between 2 and 80 characters.`)
};

const es_basecamp_listing_error_name = /** @type {(inputs: Basecamp_Listing_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El nombre necesita entre 2 y 80 caracteres.`)
};

const de_basecamp_listing_error_name = /** @type {(inputs: Basecamp_Listing_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Name braucht 2 bis 80 Zeichen.`)
};

const fr_basecamp_listing_error_name = /** @type {(inputs: Basecamp_Listing_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le nom doit compter entre 2 et 80 caractères.`)
};

const it_basecamp_listing_error_name = /** @type {(inputs: Basecamp_Listing_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il nome deve avere da 2 a 80 caratteri.`)
};

const nl_basecamp_listing_error_name = /** @type {(inputs: Basecamp_Listing_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De naam moet 2 tot 80 tekens hebben.`)
};

const pl_basecamp_listing_error_name = /** @type {(inputs: Basecamp_Listing_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa musi mieć od 2 do 80 znaków.`)
};

const pt_basecamp_listing_error_name = /** @type {(inputs: Basecamp_Listing_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O nome precisa ter de 2 a 80 caracteres.`)
};

const ru_basecamp_listing_error_name = /** @type {(inputs: Basecamp_Listing_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В названии должно быть от 2 до 80 символов.`)
};

const sv_basecamp_listing_error_name = /** @type {(inputs: Basecamp_Listing_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namnet behöver 2 till 80 tecken.`)
};

const tr_basecamp_listing_error_name = /** @type {(inputs: Basecamp_Listing_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad 2 ile 80 karakter arasında olmalı.`)
};

const zh_basecamp_listing_error_name = /** @type {(inputs: Basecamp_Listing_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称需要 2 到 80 个字符。`)
};

const ja_basecamp_listing_error_name = /** @type {(inputs: Basecamp_Listing_Error_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前は 2〜80 文字にしてください。`)
};

/**
* | output |
* | --- |
* | "The name needs between 2 and 80 characters." |
*
* @param {Basecamp_Listing_Error_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_error_name = /** @type {((inputs?: Basecamp_Listing_Error_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Error_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_error_name(inputs)
	if (locale === "de") return de_basecamp_listing_error_name(inputs)
	if (locale === "fr") return fr_basecamp_listing_error_name(inputs)
	if (locale === "it") return it_basecamp_listing_error_name(inputs)
	if (locale === "nl") return nl_basecamp_listing_error_name(inputs)
	if (locale === "pl") return pl_basecamp_listing_error_name(inputs)
	if (locale === "pt") return pt_basecamp_listing_error_name(inputs)
	if (locale === "ru") return ru_basecamp_listing_error_name(inputs)
	if (locale === "sv") return sv_basecamp_listing_error_name(inputs)
	if (locale === "tr") return tr_basecamp_listing_error_name(inputs)
	if (locale === "zh") return zh_basecamp_listing_error_name(inputs)
	if (locale === "ja") return ja_basecamp_listing_error_name(inputs)
	return en_basecamp_listing_error_name(inputs)
});
