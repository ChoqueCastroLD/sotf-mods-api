/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Comments_Sign_InInputs */

const en_mod_comments_sign_in = /** @type {(inputs: Mod_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in to comment`)
};

const es_mod_comments_sign_in = /** @type {(inputs: Mod_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión para comentar`)
};

const de_mod_comments_sign_in = /** @type {(inputs: Mod_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melde dich an, um zu kommentieren`)
};

const fr_mod_comments_sign_in = /** @type {(inputs: Mod_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez-vous pour commenter`)
};

const it_mod_comments_sign_in = /** @type {(inputs: Mod_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi per commentare`)
};

const nl_mod_comments_sign_in = /** @type {(inputs: Mod_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in om te reageren`)
};

const pl_mod_comments_sign_in = /** @type {(inputs: Mod_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się, aby skomentować`)
};

const pt_mod_comments_sign_in = /** @type {(inputs: Mod_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faça login para comentar`)
};

const ru_mod_comments_sign_in = /** @type {(inputs: Mod_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войдите, чтобы комментировать`)
};

const sv_mod_comments_sign_in = /** @type {(inputs: Mod_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in för att kommentera`)
};

const tr_mod_comments_sign_in = /** @type {(inputs: Mod_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum yapmak için giriş yap`)
};

const zh_mod_comments_sign_in = /** @type {(inputs: Mod_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录后发表评论`)
};

const ja_mod_comments_sign_in = /** @type {(inputs: Mod_Comments_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインしてコメントする`)
};

/**
* | output |
* | --- |
* | "Log in to comment" |
*
* @param {Mod_Comments_Sign_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_comments_sign_in = /** @type {((inputs?: Mod_Comments_Sign_InInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Comments_Sign_InInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_comments_sign_in(inputs)
	if (locale === "de") return de_mod_comments_sign_in(inputs)
	if (locale === "fr") return fr_mod_comments_sign_in(inputs)
	if (locale === "it") return it_mod_comments_sign_in(inputs)
	if (locale === "nl") return nl_mod_comments_sign_in(inputs)
	if (locale === "pl") return pl_mod_comments_sign_in(inputs)
	if (locale === "pt") return pt_mod_comments_sign_in(inputs)
	if (locale === "ru") return ru_mod_comments_sign_in(inputs)
	if (locale === "sv") return sv_mod_comments_sign_in(inputs)
	if (locale === "tr") return tr_mod_comments_sign_in(inputs)
	if (locale === "zh") return zh_mod_comments_sign_in(inputs)
	if (locale === "ja") return ja_mod_comments_sign_in(inputs)
	return en_mod_comments_sign_in(inputs)
});
