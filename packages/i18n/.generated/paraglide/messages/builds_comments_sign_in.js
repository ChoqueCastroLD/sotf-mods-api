/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Comments_Sign_InInputs */

const en_builds_comments_sign_in = /** @type {(inputs: Builds_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in to comment`)
};

const es_builds_comments_sign_in = /** @type {(inputs: Builds_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión para comentar`)
};

const de_builds_comments_sign_in = /** @type {(inputs: Builds_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Kommentieren anmelden`)
};

const fr_builds_comments_sign_in = /** @type {(inputs: Builds_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se connecter pour commenter`)
};

const it_builds_comments_sign_in = /** @type {(inputs: Builds_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi per commentare`)
};

const nl_builds_comments_sign_in = /** @type {(inputs: Builds_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in om te reageren`)
};

const pl_builds_comments_sign_in = /** @type {(inputs: Builds_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się, aby skomentować`)
};

const pt_builds_comments_sign_in = /** @type {(inputs: Builds_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entre para comentar`)
};

const ru_builds_comments_sign_in = /** @type {(inputs: Builds_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войдите, чтобы комментировать`)
};

const sv_builds_comments_sign_in = /** @type {(inputs: Builds_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in för att kommentera`)
};

const tr_builds_comments_sign_in = /** @type {(inputs: Builds_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum yapmak için giriş yap`)
};

const zh_builds_comments_sign_in = /** @type {(inputs: Builds_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录后发表评论`)
};

const ja_builds_comments_sign_in = /** @type {(inputs: Builds_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインしてコメントする`)
};

/**
* | output |
* | --- |
* | "Sign in to comment" |
*
* @param {Builds_Comments_Sign_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_comments_sign_in = /** @type {((inputs?: Builds_Comments_Sign_InInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Comments_Sign_InInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_comments_sign_in(inputs)
	if (locale === "de") return de_builds_comments_sign_in(inputs)
	if (locale === "fr") return fr_builds_comments_sign_in(inputs)
	if (locale === "it") return it_builds_comments_sign_in(inputs)
	if (locale === "nl") return nl_builds_comments_sign_in(inputs)
	if (locale === "pl") return pl_builds_comments_sign_in(inputs)
	if (locale === "pt") return pt_builds_comments_sign_in(inputs)
	if (locale === "ru") return ru_builds_comments_sign_in(inputs)
	if (locale === "sv") return sv_builds_comments_sign_in(inputs)
	if (locale === "tr") return tr_builds_comments_sign_in(inputs)
	if (locale === "zh") return zh_builds_comments_sign_in(inputs)
	if (locale === "ja") return ja_builds_comments_sign_in(inputs)
	return en_builds_comments_sign_in(inputs)
});
