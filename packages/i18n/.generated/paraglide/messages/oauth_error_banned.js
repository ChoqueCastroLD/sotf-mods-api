/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Error_BannedInputs */

const en_oauth_error_banned = /** @type {(inputs: Oauth_Error_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This account can’t log in.`)
};

const es_oauth_error_banned = /** @type {(inputs: Oauth_Error_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta cuenta no puede iniciar sesión.`)
};

const de_oauth_error_banned = /** @type {(inputs: Oauth_Error_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mit diesem Konto ist keine Anmeldung möglich.`)
};

const fr_oauth_error_banned = /** @type {(inputs: Oauth_Error_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce compte ne peut pas se connecter.`)
};

const it_oauth_error_banned = /** @type {(inputs: Oauth_Error_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo account non può accedere.`)
};

const nl_oauth_error_banned = /** @type {(inputs: Oauth_Error_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Met dit account kan niet worden ingelogd.`)
};

const pl_oauth_error_banned = /** @type {(inputs: Oauth_Error_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To konto nie może się zalogować.`)
};

const pt_oauth_error_banned = /** @type {(inputs: Oauth_Error_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta conta não pode entrar.`)
};

const ru_oauth_error_banned = /** @type {(inputs: Oauth_Error_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эта учётная запись не может войти.`)
};

const sv_oauth_error_banned = /** @type {(inputs: Oauth_Error_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här kontot kan inte logga in.`)
};

const tr_oauth_error_banned = /** @type {(inputs: Oauth_Error_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu hesap oturum açamaz.`)
};

const zh_oauth_error_banned = /** @type {(inputs: Oauth_Error_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此账号无法登录。`)
};

const ja_oauth_error_banned = /** @type {(inputs: Oauth_Error_BannedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このアカウントではログインできません。`)
};

/**
* | output |
* | --- |
* | "This account can’t log in." |
*
* @param {Oauth_Error_BannedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_error_banned = /** @type {((inputs?: Oauth_Error_BannedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Error_BannedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_error_banned(inputs)
	if (locale === "de") return de_oauth_error_banned(inputs)
	if (locale === "fr") return fr_oauth_error_banned(inputs)
	if (locale === "it") return it_oauth_error_banned(inputs)
	if (locale === "nl") return nl_oauth_error_banned(inputs)
	if (locale === "pl") return pl_oauth_error_banned(inputs)
	if (locale === "pt") return pt_oauth_error_banned(inputs)
	if (locale === "ru") return ru_oauth_error_banned(inputs)
	if (locale === "sv") return sv_oauth_error_banned(inputs)
	if (locale === "tr") return tr_oauth_error_banned(inputs)
	if (locale === "zh") return zh_oauth_error_banned(inputs)
	if (locale === "ja") return ja_oauth_error_banned(inputs)
	return en_oauth_error_banned(inputs)
});
