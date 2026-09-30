/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Sign_In_To_CommentInputs */

const en_kitsocial_sign_in_to_comment = /** @type {(inputs: Kitsocial_Sign_In_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in to join the conversation.`)
};

const es_kitsocial_sign_in_to_comment = /** @type {(inputs: Kitsocial_Sign_In_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión para unirte a la conversación.`)
};

const de_kitsocial_sign_in_to_comment = /** @type {(inputs: Kitsocial_Sign_In_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melde dich an, um mitzudiskutieren.`)
};

const fr_kitsocial_sign_in_to_comment = /** @type {(inputs: Kitsocial_Sign_In_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez-vous pour participer à la discussion.`)
};

const it_kitsocial_sign_in_to_comment = /** @type {(inputs: Kitsocial_Sign_In_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi per partecipare alla conversazione.`)
};

const nl_kitsocial_sign_in_to_comment = /** @type {(inputs: Kitsocial_Sign_In_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in om mee te praten.`)
};

const pl_kitsocial_sign_in_to_comment = /** @type {(inputs: Kitsocial_Sign_In_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się, aby dołączyć do rozmowy.`)
};

const pt_kitsocial_sign_in_to_comment = /** @type {(inputs: Kitsocial_Sign_In_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entre para participar da conversa.`)
};

const ru_kitsocial_sign_in_to_comment = /** @type {(inputs: Kitsocial_Sign_In_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войдите, чтобы участвовать в обсуждении.`)
};

const sv_kitsocial_sign_in_to_comment = /** @type {(inputs: Kitsocial_Sign_In_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in för att delta i samtalet.`)
};

const tr_kitsocial_sign_in_to_comment = /** @type {(inputs: Kitsocial_Sign_In_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sohbete katılmak için giriş yap.`)
};

const zh_kitsocial_sign_in_to_comment = /** @type {(inputs: Kitsocial_Sign_In_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录后参与讨论。`)
};

const ja_kitsocial_sign_in_to_comment = /** @type {(inputs: Kitsocial_Sign_In_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインして会話に参加しましょう。`)
};

/**
* | output |
* | --- |
* | "Sign in to join the conversation." |
*
* @param {Kitsocial_Sign_In_To_CommentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_sign_in_to_comment = /** @type {((inputs?: Kitsocial_Sign_In_To_CommentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Sign_In_To_CommentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_sign_in_to_comment(inputs)
	if (locale === "de") return de_kitsocial_sign_in_to_comment(inputs)
	if (locale === "fr") return fr_kitsocial_sign_in_to_comment(inputs)
	if (locale === "it") return it_kitsocial_sign_in_to_comment(inputs)
	if (locale === "nl") return nl_kitsocial_sign_in_to_comment(inputs)
	if (locale === "pl") return pl_kitsocial_sign_in_to_comment(inputs)
	if (locale === "pt") return pt_kitsocial_sign_in_to_comment(inputs)
	if (locale === "ru") return ru_kitsocial_sign_in_to_comment(inputs)
	if (locale === "sv") return sv_kitsocial_sign_in_to_comment(inputs)
	if (locale === "tr") return tr_kitsocial_sign_in_to_comment(inputs)
	if (locale === "zh") return zh_kitsocial_sign_in_to_comment(inputs)
	if (locale === "ja") return ja_kitsocial_sign_in_to_comment(inputs)
	return en_kitsocial_sign_in_to_comment(inputs)
});
