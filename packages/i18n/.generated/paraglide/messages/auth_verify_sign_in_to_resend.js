/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Verify_Sign_In_To_ResendInputs */

const en_auth_verify_sign_in_to_resend = /** @type {(inputs: Auth_Verify_Sign_In_To_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in to get a new link`)
};

const es_auth_verify_sign_in_to_resend = /** @type {(inputs: Auth_Verify_Sign_In_To_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión para recibir un enlace nuevo`)
};

const de_auth_verify_sign_in_to_resend = /** @type {(inputs: Auth_Verify_Sign_In_To_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melde dich an, um einen neuen Link zu erhalten`)
};

const fr_auth_verify_sign_in_to_resend = /** @type {(inputs: Auth_Verify_Sign_In_To_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez-vous pour recevoir un nouveau lien`)
};

const it_auth_verify_sign_in_to_resend = /** @type {(inputs: Auth_Verify_Sign_In_To_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi per ricevere un nuovo link`)
};

const nl_auth_verify_sign_in_to_resend = /** @type {(inputs: Auth_Verify_Sign_In_To_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in om een nieuwe link te krijgen`)
};

const pl_auth_verify_sign_in_to_resend = /** @type {(inputs: Auth_Verify_Sign_In_To_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się, aby dostać nowy link`)
};

const pt_auth_verify_sign_in_to_resend = /** @type {(inputs: Auth_Verify_Sign_In_To_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entre para receber um novo link`)
};

const ru_auth_verify_sign_in_to_resend = /** @type {(inputs: Auth_Verify_Sign_In_To_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войдите, чтобы получить новую ссылку`)
};

const sv_auth_verify_sign_in_to_resend = /** @type {(inputs: Auth_Verify_Sign_In_To_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in för att få en ny länk`)
};

const tr_auth_verify_sign_in_to_resend = /** @type {(inputs: Auth_Verify_Sign_In_To_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni bağlantı almak için giriş yap`)
};

const zh_auth_verify_sign_in_to_resend = /** @type {(inputs: Auth_Verify_Sign_In_To_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录以获取新链接`)
};

const ja_auth_verify_sign_in_to_resend = /** @type {(inputs: Auth_Verify_Sign_In_To_ResendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインして新しいリンクを受け取る`)
};

/**
* | output |
* | --- |
* | "Log in to get a new link" |
*
* @param {Auth_Verify_Sign_In_To_ResendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_verify_sign_in_to_resend = /** @type {((inputs?: Auth_Verify_Sign_In_To_ResendInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Verify_Sign_In_To_ResendInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_verify_sign_in_to_resend(inputs)
	if (locale === "de") return de_auth_verify_sign_in_to_resend(inputs)
	if (locale === "fr") return fr_auth_verify_sign_in_to_resend(inputs)
	if (locale === "it") return it_auth_verify_sign_in_to_resend(inputs)
	if (locale === "nl") return nl_auth_verify_sign_in_to_resend(inputs)
	if (locale === "pl") return pl_auth_verify_sign_in_to_resend(inputs)
	if (locale === "pt") return pt_auth_verify_sign_in_to_resend(inputs)
	if (locale === "ru") return ru_auth_verify_sign_in_to_resend(inputs)
	if (locale === "sv") return sv_auth_verify_sign_in_to_resend(inputs)
	if (locale === "tr") return tr_auth_verify_sign_in_to_resend(inputs)
	if (locale === "zh") return zh_auth_verify_sign_in_to_resend(inputs)
	if (locale === "ja") return ja_auth_verify_sign_in_to_resend(inputs)
	return en_auth_verify_sign_in_to_resend(inputs)
});
