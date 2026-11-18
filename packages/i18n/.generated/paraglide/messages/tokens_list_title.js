/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_List_TitleInputs */

const en_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your API keys`)
};

const es_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus claves de API`)
};

const de_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine API-Schlüssel`)
};

const fr_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos clés d’API`)
};

const it_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le tue chiavi API`)
};

const nl_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je API-sleutels`)
};

const pl_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje klucze API`)
};

const pt_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suas chaves de API`)
};

const ru_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши API-ключи`)
};

const sv_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina API-nycklar`)
};

const tr_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API anahtarların`)
};

const zh_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的 API 密钥`)
};

const ja_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの API キー`)
};

/**
* | output |
* | --- |
* | "Your API keys" |
*
* @param {Tokens_List_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_list_title = /** @type {((inputs?: Tokens_List_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_List_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_list_title(inputs)
	if (locale === "de") return de_tokens_list_title(inputs)
	if (locale === "fr") return fr_tokens_list_title(inputs)
	if (locale === "it") return it_tokens_list_title(inputs)
	if (locale === "nl") return nl_tokens_list_title(inputs)
	if (locale === "pl") return pl_tokens_list_title(inputs)
	if (locale === "pt") return pt_tokens_list_title(inputs)
	if (locale === "ru") return ru_tokens_list_title(inputs)
	if (locale === "sv") return sv_tokens_list_title(inputs)
	if (locale === "tr") return tr_tokens_list_title(inputs)
	if (locale === "zh") return zh_tokens_list_title(inputs)
	if (locale === "ja") return ja_tokens_list_title(inputs)
	return en_tokens_list_title(inputs)
});
