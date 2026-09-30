/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comment_Sign_InInputs */

const en_social_comment_sign_in = /** @type {(inputs: Social_Comment_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in to comment`)
};

const es_social_comment_sign_in = /** @type {(inputs: Social_Comment_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión para comentar`)
};

const de_social_comment_sign_in = /** @type {(inputs: Social_Comment_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melde dich an, um zu kommentieren`)
};

const fr_social_comment_sign_in = /** @type {(inputs: Social_Comment_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez-vous pour commenter`)
};

const it_social_comment_sign_in = /** @type {(inputs: Social_Comment_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi per commentare`)
};

const nl_social_comment_sign_in = /** @type {(inputs: Social_Comment_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in om te reageren`)
};

const pl_social_comment_sign_in = /** @type {(inputs: Social_Comment_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się, aby skomentować`)
};

const pt_social_comment_sign_in = /** @type {(inputs: Social_Comment_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entre para comentar`)
};

const ru_social_comment_sign_in = /** @type {(inputs: Social_Comment_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войдите, чтобы комментировать`)
};

const sv_social_comment_sign_in = /** @type {(inputs: Social_Comment_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in för att kommentera`)
};

const tr_social_comment_sign_in = /** @type {(inputs: Social_Comment_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum yapmak için giriş yap`)
};

const zh_social_comment_sign_in = /** @type {(inputs: Social_Comment_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录后发表评论`)
};

const ja_social_comment_sign_in = /** @type {(inputs: Social_Comment_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインしてコメントする`)
};

/**
* | output |
* | --- |
* | "Sign in to comment" |
*
* @param {Social_Comment_Sign_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comment_sign_in = /** @type {((inputs?: Social_Comment_Sign_InInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_Sign_InInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comment_sign_in(inputs)
	if (locale === "de") return de_social_comment_sign_in(inputs)
	if (locale === "fr") return fr_social_comment_sign_in(inputs)
	if (locale === "it") return it_social_comment_sign_in(inputs)
	if (locale === "nl") return nl_social_comment_sign_in(inputs)
	if (locale === "pl") return pl_social_comment_sign_in(inputs)
	if (locale === "pt") return pt_social_comment_sign_in(inputs)
	if (locale === "ru") return ru_social_comment_sign_in(inputs)
	if (locale === "sv") return sv_social_comment_sign_in(inputs)
	if (locale === "tr") return tr_social_comment_sign_in(inputs)
	if (locale === "zh") return zh_social_comment_sign_in(inputs)
	if (locale === "ja") return ja_social_comment_sign_in(inputs)
	return en_social_comment_sign_in(inputs)
});
