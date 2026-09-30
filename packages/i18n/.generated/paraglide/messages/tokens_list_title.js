/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_List_TitleInputs */

const en_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your tokens`)
};

const es_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus tokens`)
};

const de_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Token`)
};

const fr_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos jetons`)
};

const it_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I tuoi token`)
};

const nl_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je tokens`)
};

const pl_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje tokeny`)
};

const pt_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus tokens`)
};

const ru_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши токены`)
};

const sv_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina tokens`)
};

const tr_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belirteçlerin`)
};

const zh_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的令牌`)
};

const ja_tokens_list_title = /** @type {(inputs: Tokens_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのトークン`)
};

/**
* | output |
* | --- |
* | "Your tokens" |
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
