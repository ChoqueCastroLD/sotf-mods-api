/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Error_Email_TakenInputs */

const en_auth_error_email_taken = /** @type {(inputs: Auth_Error_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An account with this email already exists. Sign in or reset your password.`)
};

const es_auth_error_email_taken = /** @type {(inputs: Auth_Error_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya existe una cuenta con este email. Inicia sesión o restablece tu contraseña.`)
};

const de_auth_error_email_taken = /** @type {(inputs: Auth_Error_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mit dieser E-Mail gibt es schon ein Konto. Melde dich an oder setze dein Passwort zurück.`)
};

const fr_auth_error_email_taken = /** @type {(inputs: Auth_Error_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un compte existe déjà avec cet e-mail. Connectez-vous ou réinitialisez votre mot de passe.`)
};

const it_auth_error_email_taken = /** @type {(inputs: Auth_Error_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esiste già un account con questa email. Accedi o reimposta la password.`)
};

const nl_auth_error_email_taken = /** @type {(inputs: Auth_Error_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er bestaat al een account met dit e-mailadres. Log in of stel je wachtwoord opnieuw in.`)
};

const pl_auth_error_email_taken = /** @type {(inputs: Auth_Error_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto z tym adresem e-mail już istnieje. Zaloguj się lub zresetuj hasło.`)
};

const pt_auth_error_email_taken = /** @type {(inputs: Auth_Error_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Já existe uma conta com este e-mail. Entre ou redefina sua senha.`)
};

const ru_auth_error_email_taken = /** @type {(inputs: Auth_Error_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Аккаунт с этим email уже существует. Войдите или сбросьте пароль.`)
};

const sv_auth_error_email_taken = /** @type {(inputs: Auth_Error_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det finns redan ett konto med den här e-postadressen. Logga in eller återställ lösenordet.`)
};

const tr_auth_error_email_taken = /** @type {(inputs: Auth_Error_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu e-postayla bir hesap zaten var. Giriş yap veya şifreni sıfırla.`)
};

const zh_auth_error_email_taken = /** @type {(inputs: Auth_Error_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该邮箱已注册账号。请直接登录或重置密码。`)
};

const ja_auth_error_email_taken = /** @type {(inputs: Auth_Error_Email_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このメールアドレスのアカウントはすでにあります。ログインするか、パスワードを再設定してください。`)
};

/**
* | output |
* | --- |
* | "An account with this email already exists. Sign in or reset your password." |
*
* @param {Auth_Error_Email_TakenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_error_email_taken = /** @type {((inputs?: Auth_Error_Email_TakenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Email_TakenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_error_email_taken(inputs)
	if (locale === "de") return de_auth_error_email_taken(inputs)
	if (locale === "fr") return fr_auth_error_email_taken(inputs)
	if (locale === "it") return it_auth_error_email_taken(inputs)
	if (locale === "nl") return nl_auth_error_email_taken(inputs)
	if (locale === "pl") return pl_auth_error_email_taken(inputs)
	if (locale === "pt") return pt_auth_error_email_taken(inputs)
	if (locale === "ru") return ru_auth_error_email_taken(inputs)
	if (locale === "sv") return sv_auth_error_email_taken(inputs)
	if (locale === "tr") return tr_auth_error_email_taken(inputs)
	if (locale === "zh") return zh_auth_error_email_taken(inputs)
	if (locale === "ja") return ja_auth_error_email_taken(inputs)
	return en_auth_error_email_taken(inputs)
});
