/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Meta_Forgot_DescriptionInputs */

const en_auth_meta_forgot_description = /** @type {(inputs: Auth_Meta_Forgot_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forgot your SOTF Mods password? We’ll email you a link to choose a new one.`)
};

const es_auth_meta_forgot_description = /** @type {(inputs: Auth_Meta_Forgot_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Olvidaste tu contraseña de SOTF Mods? Te enviaremos un enlace por email para elegir una nueva.`)
};

const de_auth_meta_forgot_description = /** @type {(inputs: Auth_Meta_Forgot_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passwort für SOTF Mods vergessen? Wir schicken dir per E-Mail einen Link, um ein neues zu wählen.`)
};

const fr_auth_meta_forgot_description = /** @type {(inputs: Auth_Meta_Forgot_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez oublié votre mot de passe SOTF Mods ? Nous vous enverrons un lien par e-mail pour en choisir un nouveau.`)
};

const it_auth_meta_forgot_description = /** @type {(inputs: Auth_Meta_Forgot_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai dimenticato la password di SOTF Mods? Ti mandiamo via email un link per sceglierne una nuova.`)
};

const nl_auth_meta_forgot_description = /** @type {(inputs: Auth_Meta_Forgot_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtwoord van SOTF Mods vergeten? We mailen je een link om een nieuw wachtwoord te kiezen.`)
};

const pl_auth_meta_forgot_description = /** @type {(inputs: Auth_Meta_Forgot_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie pamiętasz hasła do SOTF Mods? Wyślemy ci e-mailem link do ustawienia nowego.`)
};

const pt_auth_meta_forgot_description = /** @type {(inputs: Auth_Meta_Forgot_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esqueceu a senha do SOTF Mods? Enviaremos um link por e-mail para você escolher uma nova.`)
};

const ru_auth_meta_forgot_description = /** @type {(inputs: Auth_Meta_Forgot_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Забыли пароль от SOTF Mods? Мы пришлём ссылку, чтобы задать новый.`)
};

const sv_auth_meta_forgot_description = /** @type {(inputs: Auth_Meta_Forgot_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Glömt ditt lösenord till SOTF Mods? Vi mejlar dig en länk för att välja ett nytt.`)
};

const tr_auth_meta_forgot_description = /** @type {(inputs: Auth_Meta_Forgot_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods şifreni mi unuttun? Yeni bir şifre seçmen için e-postana bir bağlantı gönderelim.`)
};

const zh_auth_meta_forgot_description = /** @type {(inputs: Auth_Meta_Forgot_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`忘记了 SOTF Mods 的密码？我们会通过邮件发送链接，让你设置新密码。`)
};

const ja_auth_meta_forgot_description = /** @type {(inputs: Auth_Meta_Forgot_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods のパスワードをお忘れですか？新しいパスワードを設定するリンクをメールでお送りします。`)
};

/**
* | output |
* | --- |
* | "Forgot your SOTF Mods password? We’ll email you a link to choose a new one." |
*
* @param {Auth_Meta_Forgot_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_meta_forgot_description = /** @type {((inputs?: Auth_Meta_Forgot_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Meta_Forgot_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_meta_forgot_description(inputs)
	if (locale === "de") return de_auth_meta_forgot_description(inputs)
	if (locale === "fr") return fr_auth_meta_forgot_description(inputs)
	if (locale === "it") return it_auth_meta_forgot_description(inputs)
	if (locale === "nl") return nl_auth_meta_forgot_description(inputs)
	if (locale === "pl") return pl_auth_meta_forgot_description(inputs)
	if (locale === "pt") return pt_auth_meta_forgot_description(inputs)
	if (locale === "ru") return ru_auth_meta_forgot_description(inputs)
	if (locale === "sv") return sv_auth_meta_forgot_description(inputs)
	if (locale === "tr") return tr_auth_meta_forgot_description(inputs)
	if (locale === "zh") return zh_auth_meta_forgot_description(inputs)
	if (locale === "ja") return ja_auth_meta_forgot_description(inputs)
	return en_auth_meta_forgot_description(inputs)
});
