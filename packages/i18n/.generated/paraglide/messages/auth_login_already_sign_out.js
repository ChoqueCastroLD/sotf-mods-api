/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Login_Already_Sign_OutInputs */

const en_auth_login_already_sign_out = /** @type {(inputs: Auth_Login_Already_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign out and use another account`)
};

const es_auth_login_already_sign_out = /** @type {(inputs: Auth_Login_Already_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar sesión y usar otra cuenta`)
};

const de_auth_login_already_sign_out = /** @type {(inputs: Auth_Login_Already_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abmelden und anderes Konto verwenden`)
};

const fr_auth_login_already_sign_out = /** @type {(inputs: Auth_Login_Already_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se déconnecter et utiliser un autre compte`)
};

const it_auth_login_already_sign_out = /** @type {(inputs: Auth_Login_Already_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esci e usa un altro account`)
};

const nl_auth_login_already_sign_out = /** @type {(inputs: Auth_Login_Already_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitloggen en een ander account gebruiken`)
};

const pl_auth_login_already_sign_out = /** @type {(inputs: Auth_Login_Already_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyloguj się i użyj innego konta`)
};

const pt_auth_login_already_sign_out = /** @type {(inputs: Auth_Login_Already_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sair e usar outra conta`)
};

const ru_auth_login_already_sign_out = /** @type {(inputs: Auth_Login_Already_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выйти и войти в другой аккаунт`)
};

const sv_auth_login_already_sign_out = /** @type {(inputs: Auth_Login_Already_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga ut och använd ett annat konto`)
};

const tr_auth_login_already_sign_out = /** @type {(inputs: Auth_Login_Already_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çıkış yap ve başka bir hesap kullan`)
};

const zh_auth_login_already_sign_out = /** @type {(inputs: Auth_Login_Already_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`退出并使用其他账号`)
};

const ja_auth_login_already_sign_out = /** @type {(inputs: Auth_Login_Already_Sign_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログアウトして別のアカウントを使う`)
};

/**
* | output |
* | --- |
* | "Sign out and use another account" |
*
* @param {Auth_Login_Already_Sign_OutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_login_already_sign_out = /** @type {((inputs?: Auth_Login_Already_Sign_OutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Login_Already_Sign_OutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_login_already_sign_out(inputs)
	if (locale === "de") return de_auth_login_already_sign_out(inputs)
	if (locale === "fr") return fr_auth_login_already_sign_out(inputs)
	if (locale === "it") return it_auth_login_already_sign_out(inputs)
	if (locale === "nl") return nl_auth_login_already_sign_out(inputs)
	if (locale === "pl") return pl_auth_login_already_sign_out(inputs)
	if (locale === "pt") return pt_auth_login_already_sign_out(inputs)
	if (locale === "ru") return ru_auth_login_already_sign_out(inputs)
	if (locale === "sv") return sv_auth_login_already_sign_out(inputs)
	if (locale === "tr") return tr_auth_login_already_sign_out(inputs)
	if (locale === "zh") return zh_auth_login_already_sign_out(inputs)
	if (locale === "ja") return ja_auth_login_already_sign_out(inputs)
	return en_auth_login_already_sign_out(inputs)
});
