/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Revoke_TitleInputs */

const en_tokens_revoke_title = /** @type {(inputs: Tokens_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revoke this token?`)
};

const es_tokens_revoke_title = /** @type {(inputs: Tokens_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Revocar este token?`)
};

const de_tokens_revoke_title = /** @type {(inputs: Tokens_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diesen Token widerrufen?`)
};

const fr_tokens_revoke_title = /** @type {(inputs: Tokens_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Révoquer ce jeton ?`)
};

const it_tokens_revoke_title = /** @type {(inputs: Tokens_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revocare questo token?`)
};

const nl_tokens_revoke_title = /** @type {(inputs: Tokens_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit token intrekken?`)
};

const pl_tokens_revoke_title = /** @type {(inputs: Tokens_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unieważnić ten token?`)
};

const pt_tokens_revoke_title = /** @type {(inputs: Tokens_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revogar este token?`)
};

const ru_tokens_revoke_title = /** @type {(inputs: Tokens_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отозвать этот токен?`)
};

const sv_tokens_revoke_title = /** @type {(inputs: Tokens_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återkalla den här token?`)
};

const tr_tokens_revoke_title = /** @type {(inputs: Tokens_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu belirteç iptal edilsin mi?`)
};

const zh_tokens_revoke_title = /** @type {(inputs: Tokens_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤销此令牌？`)
};

const ja_tokens_revoke_title = /** @type {(inputs: Tokens_Revoke_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このトークンを失効しますか？`)
};

/**
* | output |
* | --- |
* | "Revoke this token?" |
*
* @param {Tokens_Revoke_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_revoke_title = /** @type {((inputs?: Tokens_Revoke_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Revoke_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_revoke_title(inputs)
	if (locale === "de") return de_tokens_revoke_title(inputs)
	if (locale === "fr") return fr_tokens_revoke_title(inputs)
	if (locale === "it") return it_tokens_revoke_title(inputs)
	if (locale === "nl") return nl_tokens_revoke_title(inputs)
	if (locale === "pl") return pl_tokens_revoke_title(inputs)
	if (locale === "pt") return pt_tokens_revoke_title(inputs)
	if (locale === "ru") return ru_tokens_revoke_title(inputs)
	if (locale === "sv") return sv_tokens_revoke_title(inputs)
	if (locale === "tr") return tr_tokens_revoke_title(inputs)
	if (locale === "zh") return zh_tokens_revoke_title(inputs)
	if (locale === "ja") return ja_tokens_revoke_title(inputs)
	return en_tokens_revoke_title(inputs)
});
