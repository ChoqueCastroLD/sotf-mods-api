/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Revoke_FailedInputs */

const en_tokens_revoke_failed = /** @type {(inputs: Tokens_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t revoke the token`)
};

const es_tokens_revoke_failed = /** @type {(inputs: Tokens_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo revocar el token`)
};

const de_tokens_revoke_failed = /** @type {(inputs: Tokens_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token konnte nicht widerrufen werden`)
};

const fr_tokens_revoke_failed = /** @type {(inputs: Tokens_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de révoquer le jeton`)
};

const it_tokens_revoke_failed = /** @type {(inputs: Tokens_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile revocare il token`)
};

const nl_tokens_revoke_failed = /** @type {(inputs: Tokens_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token kon niet worden ingetrokken`)
};

const pl_tokens_revoke_failed = /** @type {(inputs: Tokens_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się unieważnić tokenu`)
};

const pt_tokens_revoke_failed = /** @type {(inputs: Tokens_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível revogar o token`)
};

const ru_tokens_revoke_failed = /** @type {(inputs: Tokens_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось отозвать токен`)
};

const sv_tokens_revoke_failed = /** @type {(inputs: Tokens_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte återkalla token`)
};

const tr_tokens_revoke_failed = /** @type {(inputs: Tokens_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belirteç iptal edilemedi`)
};

const zh_tokens_revoke_failed = /** @type {(inputs: Tokens_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法撤销令牌`)
};

const ja_tokens_revoke_failed = /** @type {(inputs: Tokens_Revoke_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`トークンを失効できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t revoke the token" |
*
* @param {Tokens_Revoke_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_revoke_failed = /** @type {((inputs?: Tokens_Revoke_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Revoke_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_revoke_failed(inputs)
	if (locale === "de") return de_tokens_revoke_failed(inputs)
	if (locale === "fr") return fr_tokens_revoke_failed(inputs)
	if (locale === "it") return it_tokens_revoke_failed(inputs)
	if (locale === "nl") return nl_tokens_revoke_failed(inputs)
	if (locale === "pl") return pl_tokens_revoke_failed(inputs)
	if (locale === "pt") return pt_tokens_revoke_failed(inputs)
	if (locale === "ru") return ru_tokens_revoke_failed(inputs)
	if (locale === "sv") return sv_tokens_revoke_failed(inputs)
	if (locale === "tr") return tr_tokens_revoke_failed(inputs)
	if (locale === "zh") return zh_tokens_revoke_failed(inputs)
	if (locale === "ja") return ja_tokens_revoke_failed(inputs)
	return en_tokens_revoke_failed(inputs)
});
