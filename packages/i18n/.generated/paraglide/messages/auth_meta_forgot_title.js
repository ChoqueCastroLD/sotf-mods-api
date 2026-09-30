/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Meta_Forgot_TitleInputs */

const en_auth_meta_forgot_title = /** @type {(inputs: Auth_Meta_Forgot_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forgot your password`)
};

const es_auth_meta_forgot_title = /** @type {(inputs: Auth_Meta_Forgot_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Olvidaste tu contraseña?`)
};

const de_auth_meta_forgot_title = /** @type {(inputs: Auth_Meta_Forgot_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passwort vergessen`)
};

const fr_auth_meta_forgot_title = /** @type {(inputs: Auth_Meta_Forgot_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mot de passe oublié`)
};

const it_auth_meta_forgot_title = /** @type {(inputs: Auth_Meta_Forgot_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password dimenticata`)
};

const nl_auth_meta_forgot_title = /** @type {(inputs: Auth_Meta_Forgot_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtwoord vergeten`)
};

const pl_auth_meta_forgot_title = /** @type {(inputs: Auth_Meta_Forgot_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie pamiętasz hasła`)
};

const pt_auth_meta_forgot_title = /** @type {(inputs: Auth_Meta_Forgot_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esqueceu a senha`)
};

const ru_auth_meta_forgot_title = /** @type {(inputs: Auth_Meta_Forgot_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Забыли пароль`)
};

const sv_auth_meta_forgot_title = /** @type {(inputs: Auth_Meta_Forgot_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Glömt lösenordet`)
};

const tr_auth_meta_forgot_title = /** @type {(inputs: Auth_Meta_Forgot_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şifreni mi unuttun`)
};

const zh_auth_meta_forgot_title = /** @type {(inputs: Auth_Meta_Forgot_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`忘记密码`)
};

const ja_auth_meta_forgot_title = /** @type {(inputs: Auth_Meta_Forgot_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードをお忘れの方`)
};

/**
* | output |
* | --- |
* | "Forgot your password" |
*
* @param {Auth_Meta_Forgot_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_meta_forgot_title = /** @type {((inputs?: Auth_Meta_Forgot_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Meta_Forgot_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_meta_forgot_title(inputs)
	if (locale === "de") return de_auth_meta_forgot_title(inputs)
	if (locale === "fr") return fr_auth_meta_forgot_title(inputs)
	if (locale === "it") return it_auth_meta_forgot_title(inputs)
	if (locale === "nl") return nl_auth_meta_forgot_title(inputs)
	if (locale === "pl") return pl_auth_meta_forgot_title(inputs)
	if (locale === "pt") return pt_auth_meta_forgot_title(inputs)
	if (locale === "ru") return ru_auth_meta_forgot_title(inputs)
	if (locale === "sv") return sv_auth_meta_forgot_title(inputs)
	if (locale === "tr") return tr_auth_meta_forgot_title(inputs)
	if (locale === "zh") return zh_auth_meta_forgot_title(inputs)
	if (locale === "ja") return ja_auth_meta_forgot_title(inputs)
	return en_auth_meta_forgot_title(inputs)
});
