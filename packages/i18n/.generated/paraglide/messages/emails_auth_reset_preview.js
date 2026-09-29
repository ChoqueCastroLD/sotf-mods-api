/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Reset_PreviewInputs */

const en_emails_auth_reset_preview = /** @type {(inputs: Emails_Auth_Reset_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use this link to choose a new password.`)
};

const es_emails_auth_reset_preview = /** @type {(inputs: Emails_Auth_Reset_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa este enlace para elegir una contraseña nueva.`)
};

const de_emails_auth_reset_preview = /** @type {(inputs: Emails_Auth_Reset_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mit diesem Link wählst du ein neues Passwort.`)
};

const fr_emails_auth_reset_preview = /** @type {(inputs: Emails_Auth_Reset_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez ce lien pour choisir un nouveau mot de passe.`)
};

const it_emails_auth_reset_preview = /** @type {(inputs: Emails_Auth_Reset_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa questo link per scegliere una nuova password.`)
};

const nl_emails_auth_reset_preview = /** @type {(inputs: Emails_Auth_Reset_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik deze link om een nieuw wachtwoord te kiezen.`)
};

const pl_emails_auth_reset_preview = /** @type {(inputs: Emails_Auth_Reset_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj tego linku, aby wybrać nowe hasło.`)
};

const pt_emails_auth_reset_preview = /** @type {(inputs: Emails_Auth_Reset_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use este link para escolher uma nova senha.`)
};

const ru_emails_auth_reset_preview = /** @type {(inputs: Emails_Auth_Reset_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перейдите по ссылке, чтобы выбрать новый пароль.`)
};

const sv_emails_auth_reset_preview = /** @type {(inputs: Emails_Auth_Reset_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd länken för att välja ett nytt lösenord.`)
};

const tr_emails_auth_reset_preview = /** @type {(inputs: Emails_Auth_Reset_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni bir şifre seçmek için bu bağlantıyı kullan.`)
};

const zh_emails_auth_reset_preview = /** @type {(inputs: Emails_Auth_Reset_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用此链接设置新密码。`)
};

const ja_emails_auth_reset_preview = /** @type {(inputs: Emails_Auth_Reset_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このリンクから新しいパスワードを設定してください。`)
};

/**
* | output |
* | --- |
* | "Use this link to choose a new password." |
*
* @param {Emails_Auth_Reset_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_reset_preview = /** @type {((inputs?: Emails_Auth_Reset_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Reset_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_reset_preview(inputs)
	if (locale === "de") return de_emails_auth_reset_preview(inputs)
	if (locale === "fr") return fr_emails_auth_reset_preview(inputs)
	if (locale === "it") return it_emails_auth_reset_preview(inputs)
	if (locale === "nl") return nl_emails_auth_reset_preview(inputs)
	if (locale === "pl") return pl_emails_auth_reset_preview(inputs)
	if (locale === "pt") return pt_emails_auth_reset_preview(inputs)
	if (locale === "ru") return ru_emails_auth_reset_preview(inputs)
	if (locale === "sv") return sv_emails_auth_reset_preview(inputs)
	if (locale === "tr") return tr_emails_auth_reset_preview(inputs)
	if (locale === "zh") return zh_emails_auth_reset_preview(inputs)
	if (locale === "ja") return ja_emails_auth_reset_preview(inputs)
	return en_emails_auth_reset_preview(inputs)
});
