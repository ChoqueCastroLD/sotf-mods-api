/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Forgot_IntroInputs */

const en_auth_forgot_intro = /** @type {(inputs: Auth_Forgot_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter the email of your account and we’ll send you a link to choose a new password.`)
};

const es_auth_forgot_intro = /** @type {(inputs: Auth_Forgot_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe el email de tu cuenta y te enviaremos un enlace para elegir una contraseña nueva.`)
};

const de_auth_forgot_intro = /** @type {(inputs: Auth_Forgot_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib die E-Mail deines Kontos ein und wir schicken dir einen Link, um ein neues Passwort zu wählen.`)
};

const fr_auth_forgot_intro = /** @type {(inputs: Auth_Forgot_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez l’e-mail de votre compte et nous vous enverrons un lien pour choisir un nouveau mot de passe.`)
};

const it_auth_forgot_intro = /** @type {(inputs: Auth_Forgot_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserisci l’email del tuo account e ti invieremo un link per scegliere una nuova password.`)
};

const nl_auth_forgot_intro = /** @type {(inputs: Auth_Forgot_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vul het e-mailadres van je account in en we sturen je een link om een nieuw wachtwoord te kiezen.`)
};

const pl_auth_forgot_intro = /** @type {(inputs: Auth_Forgot_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podaj e-mail swojego konta, a wyślemy ci link do ustawienia nowego hasła.`)
};

const pt_auth_forgot_intro = /** @type {(inputs: Auth_Forgot_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Digite o e-mail da sua conta e enviaremos um link para você escolher uma nova senha.`)
};

const ru_auth_forgot_intro = /** @type {(inputs: Auth_Forgot_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Введите email аккаунта, и мы пришлём ссылку, чтобы задать новый пароль.`)
};

const sv_auth_forgot_intro = /** @type {(inputs: Auth_Forgot_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange e-postadressen till ditt konto så skickar vi en länk där du kan välja ett nytt lösenord.`)
};

const tr_auth_forgot_intro = /** @type {(inputs: Auth_Forgot_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabının e-postasını gir, yeni bir şifre seçmen için sana bir bağlantı gönderelim.`)
};

const zh_auth_forgot_intro = /** @type {(inputs: Auth_Forgot_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入账号邮箱，我们会发送一个链接供你设置新密码。`)
};

const ja_auth_forgot_intro = /** @type {(inputs: Auth_Forgot_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントのメールアドレスを入力してください。新しいパスワードを設定するリンクをお送りします。`)
};

/**
* | output |
* | --- |
* | "Enter the email of your account and we’ll send you a link to choose a new password." |
*
* @param {Auth_Forgot_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_forgot_intro = /** @type {((inputs?: Auth_Forgot_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Forgot_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_forgot_intro(inputs)
	if (locale === "de") return de_auth_forgot_intro(inputs)
	if (locale === "fr") return fr_auth_forgot_intro(inputs)
	if (locale === "it") return it_auth_forgot_intro(inputs)
	if (locale === "nl") return nl_auth_forgot_intro(inputs)
	if (locale === "pl") return pl_auth_forgot_intro(inputs)
	if (locale === "pt") return pt_auth_forgot_intro(inputs)
	if (locale === "ru") return ru_auth_forgot_intro(inputs)
	if (locale === "sv") return sv_auth_forgot_intro(inputs)
	if (locale === "tr") return tr_auth_forgot_intro(inputs)
	if (locale === "zh") return zh_auth_forgot_intro(inputs)
	if (locale === "ja") return ja_auth_forgot_intro(inputs)
	return en_auth_forgot_intro(inputs)
});
