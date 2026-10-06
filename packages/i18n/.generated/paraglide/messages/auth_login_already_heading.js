/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Login_Already_HeadingInputs */

const en_auth_login_already_heading = /** @type {(inputs: Auth_Login_Already_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You’re already logged in`)
};

const es_auth_login_already_heading = /** @type {(inputs: Auth_Login_Already_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya has iniciado sesión`)
};

const de_auth_login_already_heading = /** @type {(inputs: Auth_Login_Already_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du bist bereits angemeldet`)
};

const fr_auth_login_already_heading = /** @type {(inputs: Auth_Login_Already_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous êtes déjà connecté`)
};

const it_auth_login_already_heading = /** @type {(inputs: Auth_Login_Already_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai già effettuato l’accesso`)
};

const nl_auth_login_already_heading = /** @type {(inputs: Auth_Login_Already_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je bent al ingelogd`)
};

const pl_auth_login_already_heading = /** @type {(inputs: Auth_Login_Already_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jesteś już zalogowany`)
};

const pt_auth_login_already_heading = /** @type {(inputs: Auth_Login_Already_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você já entrou`)
};

const ru_auth_login_already_heading = /** @type {(inputs: Auth_Login_Already_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы уже вошли`)
};

const sv_auth_login_already_heading = /** @type {(inputs: Auth_Login_Already_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du är redan inloggad`)
};

const tr_auth_login_already_heading = /** @type {(inputs: Auth_Login_Already_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaten giriş yaptın`)
};

const zh_auth_login_already_heading = /** @type {(inputs: Auth_Login_Already_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已登录`)
};

const ja_auth_login_already_heading = /** @type {(inputs: Auth_Login_Already_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すでにログインしています`)
};

/**
* | output |
* | --- |
* | "You’re already logged in" |
*
* @param {Auth_Login_Already_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_login_already_heading = /** @type {((inputs?: Auth_Login_Already_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Login_Already_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_login_already_heading(inputs)
	if (locale === "de") return de_auth_login_already_heading(inputs)
	if (locale === "fr") return fr_auth_login_already_heading(inputs)
	if (locale === "it") return it_auth_login_already_heading(inputs)
	if (locale === "nl") return nl_auth_login_already_heading(inputs)
	if (locale === "pl") return pl_auth_login_already_heading(inputs)
	if (locale === "pt") return pt_auth_login_already_heading(inputs)
	if (locale === "ru") return ru_auth_login_already_heading(inputs)
	if (locale === "sv") return sv_auth_login_already_heading(inputs)
	if (locale === "tr") return tr_auth_login_already_heading(inputs)
	if (locale === "zh") return zh_auth_login_already_heading(inputs)
	if (locale === "ja") return ja_auth_login_already_heading(inputs)
	return en_auth_login_already_heading(inputs)
});
