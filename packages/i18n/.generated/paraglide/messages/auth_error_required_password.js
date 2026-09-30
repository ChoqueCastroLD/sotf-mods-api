/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Error_Required_PasswordInputs */

const en_auth_error_required_password = /** @type {(inputs: Auth_Error_Required_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter your password.`)
};

const es_auth_error_required_password = /** @type {(inputs: Auth_Error_Required_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe tu contraseña.`)
};

const de_auth_error_required_password = /** @type {(inputs: Auth_Error_Required_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib dein Passwort ein.`)
};

const fr_auth_error_required_password = /** @type {(inputs: Auth_Error_Required_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez votre mot de passe.`)
};

const it_auth_error_required_password = /** @type {(inputs: Auth_Error_Required_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserisci la tua password.`)
};

const nl_auth_error_required_password = /** @type {(inputs: Auth_Error_Required_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vul je wachtwoord in.`)
};

const pl_auth_error_required_password = /** @type {(inputs: Auth_Error_Required_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wpisz hasło.`)
};

const pt_auth_error_required_password = /** @type {(inputs: Auth_Error_Required_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Digite sua senha.`)
};

const ru_auth_error_required_password = /** @type {(inputs: Auth_Error_Required_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Введите пароль.`)
};

const sv_auth_error_required_password = /** @type {(inputs: Auth_Error_Required_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange ditt lösenord.`)
};

const tr_auth_error_required_password = /** @type {(inputs: Auth_Error_Required_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şifreni gir.`)
};

const zh_auth_error_required_password = /** @type {(inputs: Auth_Error_Required_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入密码。`)
};

const ja_auth_error_required_password = /** @type {(inputs: Auth_Error_Required_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードを入力してください。`)
};

/**
* | output |
* | --- |
* | "Enter your password." |
*
* @param {Auth_Error_Required_PasswordInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_error_required_password = /** @type {((inputs?: Auth_Error_Required_PasswordInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Required_PasswordInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_error_required_password(inputs)
	if (locale === "de") return de_auth_error_required_password(inputs)
	if (locale === "fr") return fr_auth_error_required_password(inputs)
	if (locale === "it") return it_auth_error_required_password(inputs)
	if (locale === "nl") return nl_auth_error_required_password(inputs)
	if (locale === "pl") return pl_auth_error_required_password(inputs)
	if (locale === "pt") return pt_auth_error_required_password(inputs)
	if (locale === "ru") return ru_auth_error_required_password(inputs)
	if (locale === "sv") return sv_auth_error_required_password(inputs)
	if (locale === "tr") return tr_auth_error_required_password(inputs)
	if (locale === "zh") return zh_auth_error_required_password(inputs)
	if (locale === "ja") return ja_auth_error_required_password(inputs)
	return en_auth_error_required_password(inputs)
});
