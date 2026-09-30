/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Created_ToastInputs */

const en_tokens_created_toast = /** @type {(inputs: Tokens_Created_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token created`)
};

const es_tokens_created_toast = /** @type {(inputs: Tokens_Created_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token creado`)
};

const de_tokens_created_toast = /** @type {(inputs: Tokens_Created_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token erstellt`)
};

const fr_tokens_created_toast = /** @type {(inputs: Tokens_Created_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeton créé`)
};

const it_tokens_created_toast = /** @type {(inputs: Tokens_Created_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token creato`)
};

const nl_tokens_created_toast = /** @type {(inputs: Tokens_Created_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token gemaakt`)
};

const pl_tokens_created_toast = /** @type {(inputs: Tokens_Created_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utworzono token`)
};

const pt_tokens_created_toast = /** @type {(inputs: Tokens_Created_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token criado`)
};

const ru_tokens_created_toast = /** @type {(inputs: Tokens_Created_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Токен создан`)
};

const sv_tokens_created_toast = /** @type {(inputs: Tokens_Created_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token skapad`)
};

const tr_tokens_created_toast = /** @type {(inputs: Tokens_Created_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belirteç oluşturuldu`)
};

const zh_tokens_created_toast = /** @type {(inputs: Tokens_Created_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已创建令牌`)
};

const ja_tokens_created_toast = /** @type {(inputs: Tokens_Created_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`トークンを作成しました`)
};

/**
* | output |
* | --- |
* | "Token created" |
*
* @param {Tokens_Created_ToastInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_created_toast = /** @type {((inputs?: Tokens_Created_ToastInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Created_ToastInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_created_toast(inputs)
	if (locale === "de") return de_tokens_created_toast(inputs)
	if (locale === "fr") return fr_tokens_created_toast(inputs)
	if (locale === "it") return it_tokens_created_toast(inputs)
	if (locale === "nl") return nl_tokens_created_toast(inputs)
	if (locale === "pl") return pl_tokens_created_toast(inputs)
	if (locale === "pt") return pt_tokens_created_toast(inputs)
	if (locale === "ru") return ru_tokens_created_toast(inputs)
	if (locale === "sv") return sv_tokens_created_toast(inputs)
	if (locale === "tr") return tr_tokens_created_toast(inputs)
	if (locale === "zh") return zh_tokens_created_toast(inputs)
	if (locale === "ja") return ja_tokens_created_toast(inputs)
	return en_tokens_created_toast(inputs)
});
