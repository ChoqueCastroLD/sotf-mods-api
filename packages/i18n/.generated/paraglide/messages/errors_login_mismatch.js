/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Login_MismatchInputs */

const en_errors_login_mismatch = /** @type {(inputs: Errors_Login_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That email and password don’t match. Try again or reset your password.`)
};

const es_errors_login_mismatch = /** @type {(inputs: Errors_Login_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El email y la contraseña no coinciden. Inténtalo de nuevo o restablece tu contraseña.`)
};

const de_errors_login_mismatch = /** @type {(inputs: Errors_Login_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-Mail-Adresse und Passwort passen nicht zusammen. Versuch es erneut oder setze dein Passwort zurück.`)
};

const fr_errors_login_mismatch = /** @type {(inputs: Errors_Login_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’e-mail et le mot de passe ne correspondent pas. Réessayez ou réinitialisez votre mot de passe.`)
};

const it_errors_login_mismatch = /** @type {(inputs: Errors_Login_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email e password non corrispondono. Riprova o reimposta la password.`)
};

const nl_errors_login_mismatch = /** @type {(inputs: Errors_Login_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dat e-mailadres en wachtwoord horen niet bij elkaar. Probeer het opnieuw of stel je wachtwoord opnieuw in.`)
};

const pl_errors_login_mismatch = /** @type {(inputs: Errors_Login_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail i hasło nie pasują do siebie. Spróbuj ponownie lub zresetuj hasło.`)
};

const pt_errors_login_mismatch = /** @type {(inputs: Errors_Login_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O e-mail e a senha não conferem. Tente de novo ou redefina sua senha.`)
};

const ru_errors_login_mismatch = /** @type {(inputs: Errors_Login_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail и пароль не совпадают. Попробуйте снова или сбросьте пароль.`)
};

const sv_errors_login_mismatch = /** @type {(inputs: Errors_Login_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-postadressen och lösenordet stämmer inte. Försök igen eller återställ ditt lösenord.`)
};

const tr_errors_login_mismatch = /** @type {(inputs: Errors_Login_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-posta ve şifre eşleşmiyor. Tekrar dene ya da şifreni sıfırla.`)
};

const zh_errors_login_mismatch = /** @type {(inputs: Errors_Login_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邮箱和密码不匹配。请重试，或重置密码。`)
};

const ja_errors_login_mismatch = /** @type {(inputs: Errors_Login_MismatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールアドレスとパスワードが一致しません。もう一度試すか、パスワードをリセットしてください。`)
};

/**
* | output |
* | --- |
* | "That email and password don’t match. Try again or reset your password." |
*
* @param {Errors_Login_MismatchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_login_mismatch = /** @type {((inputs?: Errors_Login_MismatchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Login_MismatchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_login_mismatch(inputs)
	if (locale === "de") return de_errors_login_mismatch(inputs)
	if (locale === "fr") return fr_errors_login_mismatch(inputs)
	if (locale === "it") return it_errors_login_mismatch(inputs)
	if (locale === "nl") return nl_errors_login_mismatch(inputs)
	if (locale === "pl") return pl_errors_login_mismatch(inputs)
	if (locale === "pt") return pt_errors_login_mismatch(inputs)
	if (locale === "ru") return ru_errors_login_mismatch(inputs)
	if (locale === "sv") return sv_errors_login_mismatch(inputs)
	if (locale === "tr") return tr_errors_login_mismatch(inputs)
	if (locale === "zh") return zh_errors_login_mismatch(inputs)
	if (locale === "ja") return ja_errors_login_mismatch(inputs)
	return en_errors_login_mismatch(inputs)
});
