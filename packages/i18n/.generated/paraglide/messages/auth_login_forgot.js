/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Login_ForgotInputs */

const en_auth_login_forgot = /** @type {(inputs: Auth_Login_ForgotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forgot password?`)
};

const es_auth_login_forgot = /** @type {(inputs: Auth_Login_ForgotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Olvidaste tu contraseña?`)
};

const de_auth_login_forgot = /** @type {(inputs: Auth_Login_ForgotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passwort vergessen?`)
};

const fr_auth_login_forgot = /** @type {(inputs: Auth_Login_ForgotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mot de passe oublié ?`)
};

const it_auth_login_forgot = /** @type {(inputs: Auth_Login_ForgotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password dimenticata?`)
};

const nl_auth_login_forgot = /** @type {(inputs: Auth_Login_ForgotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtwoord vergeten?`)
};

const pl_auth_login_forgot = /** @type {(inputs: Auth_Login_ForgotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie pamiętasz hasła?`)
};

const pt_auth_login_forgot = /** @type {(inputs: Auth_Login_ForgotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esqueceu a senha?`)
};

const ru_auth_login_forgot = /** @type {(inputs: Auth_Login_ForgotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Забыли пароль?`)
};

const sv_auth_login_forgot = /** @type {(inputs: Auth_Login_ForgotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Glömt lösenordet?`)
};

const tr_auth_login_forgot = /** @type {(inputs: Auth_Login_ForgotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şifreni mi unuttun?`)
};

const zh_auth_login_forgot = /** @type {(inputs: Auth_Login_ForgotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`忘记密码？`)
};

const ja_auth_login_forgot = /** @type {(inputs: Auth_Login_ForgotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードをお忘れですか？`)
};

/**
* | output |
* | --- |
* | "Forgot password?" |
*
* @param {Auth_Login_ForgotInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_login_forgot = /** @type {((inputs?: Auth_Login_ForgotInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Login_ForgotInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_login_forgot(inputs)
	if (locale === "de") return de_auth_login_forgot(inputs)
	if (locale === "fr") return fr_auth_login_forgot(inputs)
	if (locale === "it") return it_auth_login_forgot(inputs)
	if (locale === "nl") return nl_auth_login_forgot(inputs)
	if (locale === "pl") return pl_auth_login_forgot(inputs)
	if (locale === "pt") return pt_auth_login_forgot(inputs)
	if (locale === "ru") return ru_auth_login_forgot(inputs)
	if (locale === "sv") return sv_auth_login_forgot(inputs)
	if (locale === "tr") return tr_auth_login_forgot(inputs)
	if (locale === "zh") return zh_auth_login_forgot(inputs)
	if (locale === "ja") return ja_auth_login_forgot(inputs)
	return en_auth_login_forgot(inputs)
});
