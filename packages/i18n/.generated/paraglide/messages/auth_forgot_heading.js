/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Forgot_HeadingInputs */

const en_auth_forgot_heading = /** @type {(inputs: Auth_Forgot_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forgot your password?`)
};

const es_auth_forgot_heading = /** @type {(inputs: Auth_Forgot_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Olvidaste tu contraseña?`)
};

const de_auth_forgot_heading = /** @type {(inputs: Auth_Forgot_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passwort vergessen?`)
};

const fr_auth_forgot_heading = /** @type {(inputs: Auth_Forgot_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mot de passe oublié ?`)
};

const it_auth_forgot_heading = /** @type {(inputs: Auth_Forgot_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password dimenticata?`)
};

const nl_auth_forgot_heading = /** @type {(inputs: Auth_Forgot_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtwoord vergeten?`)
};

const pl_auth_forgot_heading = /** @type {(inputs: Auth_Forgot_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie pamiętasz hasła?`)
};

const pt_auth_forgot_heading = /** @type {(inputs: Auth_Forgot_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esqueceu a senha?`)
};

const ru_auth_forgot_heading = /** @type {(inputs: Auth_Forgot_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Забыли пароль?`)
};

const sv_auth_forgot_heading = /** @type {(inputs: Auth_Forgot_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Glömt lösenordet?`)
};

const tr_auth_forgot_heading = /** @type {(inputs: Auth_Forgot_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şifreni mi unuttun?`)
};

const zh_auth_forgot_heading = /** @type {(inputs: Auth_Forgot_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`忘记密码？`)
};

const ja_auth_forgot_heading = /** @type {(inputs: Auth_Forgot_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードをお忘れですか？`)
};

/**
* | output |
* | --- |
* | "Forgot your password?" |
*
* @param {Auth_Forgot_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_forgot_heading = /** @type {((inputs?: Auth_Forgot_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Forgot_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_forgot_heading(inputs)
	if (locale === "de") return de_auth_forgot_heading(inputs)
	if (locale === "fr") return fr_auth_forgot_heading(inputs)
	if (locale === "it") return it_auth_forgot_heading(inputs)
	if (locale === "nl") return nl_auth_forgot_heading(inputs)
	if (locale === "pl") return pl_auth_forgot_heading(inputs)
	if (locale === "pt") return pt_auth_forgot_heading(inputs)
	if (locale === "ru") return ru_auth_forgot_heading(inputs)
	if (locale === "sv") return sv_auth_forgot_heading(inputs)
	if (locale === "tr") return tr_auth_forgot_heading(inputs)
	if (locale === "zh") return zh_auth_forgot_heading(inputs)
	if (locale === "ja") return ja_auth_forgot_heading(inputs)
	return en_auth_forgot_heading(inputs)
});
