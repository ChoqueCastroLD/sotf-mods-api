/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Login_PasskeyInputs */

const en_auth_login_passkey = /** @type {(inputs: Auth_Login_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in with a passkey`)
};

const es_auth_login_passkey = /** @type {(inputs: Auth_Login_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iniciar sesión con una clave de acceso`)
};

const de_auth_login_passkey = /** @type {(inputs: Auth_Login_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mit einem Passkey anmelden`)
};

const fr_auth_login_passkey = /** @type {(inputs: Auth_Login_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se connecter avec une clé d’accès`)
};

const it_auth_login_passkey = /** @type {(inputs: Auth_Login_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi con una passkey`)
};

const nl_auth_login_passkey = /** @type {(inputs: Auth_Login_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inloggen met een passkey`)
};

const pl_auth_login_passkey = /** @type {(inputs: Auth_Login_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się kluczem dostępu`)
};

const pt_auth_login_passkey = /** @type {(inputs: Auth_Login_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entrar com uma chave de acesso`)
};

const ru_auth_login_passkey = /** @type {(inputs: Auth_Login_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войти с ключом доступа`)
};

const sv_auth_login_passkey = /** @type {(inputs: Auth_Login_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in med en passkey`)
};

const tr_auth_login_passkey = /** @type {(inputs: Auth_Login_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçiş anahtarıyla giriş yap`)
};

const zh_auth_login_passkey = /** @type {(inputs: Auth_Login_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用通行密钥登录`)
};

const ja_auth_login_passkey = /** @type {(inputs: Auth_Login_PasskeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスキーでログイン`)
};

/**
* | output |
* | --- |
* | "Log in with a passkey" |
*
* @param {Auth_Login_PasskeyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_login_passkey = /** @type {((inputs?: Auth_Login_PasskeyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Login_PasskeyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_login_passkey(inputs)
	if (locale === "de") return de_auth_login_passkey(inputs)
	if (locale === "fr") return fr_auth_login_passkey(inputs)
	if (locale === "it") return it_auth_login_passkey(inputs)
	if (locale === "nl") return nl_auth_login_passkey(inputs)
	if (locale === "pl") return pl_auth_login_passkey(inputs)
	if (locale === "pt") return pt_auth_login_passkey(inputs)
	if (locale === "ru") return ru_auth_login_passkey(inputs)
	if (locale === "sv") return sv_auth_login_passkey(inputs)
	if (locale === "tr") return tr_auth_login_passkey(inputs)
	if (locale === "zh") return zh_auth_login_passkey(inputs)
	if (locale === "ja") return ja_auth_login_passkey(inputs)
	return en_auth_login_passkey(inputs)
});
