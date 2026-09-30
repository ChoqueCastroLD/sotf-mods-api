/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Emails_Auth_Security_Change_Totp_DisabledInputs */

const en_emails_auth_security_change_totp_disabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_DisabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Two-factor authentication with an authenticator app was turned off for your account on ${i?.when} (UTC).`)
};

const es_emails_auth_security_change_totp_disabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_DisabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La verificación en dos pasos con una app de autenticación se desactivó en tu cuenta el ${i?.when} (UTC).`)
};

const de_emails_auth_security_change_totp_disabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_DisabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die Zwei-Faktor-Authentifizierung mit einer Authenticator-App wurde am ${i?.when} (UTC) für dein Konto deaktiviert.`)
};

const fr_emails_auth_security_change_totp_disabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_DisabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`L’authentification à deux facteurs par application d’authentification a été désactivée sur votre compte le ${i?.when} (UTC).`)
};

const it_emails_auth_security_change_totp_disabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_DisabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`L’autenticazione a due fattori con un’app di autenticazione è stata disattivata sul tuo account il ${i?.when} (UTC).`)
};

const nl_emails_auth_security_change_totp_disabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_DisabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tweestapsverificatie met een authenticator-app is op ${i?.when} (UTC) uitgeschakeld voor je account.`)
};

const pl_emails_auth_security_change_totp_disabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_DisabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uwierzytelnianie dwuskładnikowe za pomocą aplikacji uwierzytelniającej zostało wyłączone na Twoim koncie ${i?.when} (UTC).`)
};

const pt_emails_auth_security_change_totp_disabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_DisabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A verificação em duas etapas com um app autenticador foi desativada na sua conta em ${i?.when} (UTC).`)
};

const ru_emails_auth_security_change_totp_disabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_DisabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Двухфакторная аутентификация через приложение-аутентификатор отключена для вашего аккаунта ${i?.when} (UTC).`)
};

const sv_emails_auth_security_change_totp_disabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_DisabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tvåfaktorsautentisering med en autentiseringsapp inaktiverades för ditt konto ${i?.when} (UTC).`)
};

const tr_emails_auth_security_change_totp_disabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_DisabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hesabın için kimlik doğrulayıcı uygulamayla iki adımlı doğrulama ${i?.when} (UTC) tarihinde kapatıldı.`)
};

const zh_emails_auth_security_change_totp_disabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_DisabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你的账号已于 ${i?.when}（UTC）关闭验证器应用两步验证。`)
};

const ja_emails_auth_security_change_totp_disabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_DisabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.when}（UTC）に、認証アプリによる2段階認証がアカウントで無効になりました。`)
};

/**
* | output |
* | --- |
* | "Two-factor authentication with an authenticator app was turned off for your account on {when} (UTC)." |
*
* @param {Emails_Auth_Security_Change_Totp_DisabledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_security_change_totp_disabled = /** @type {((inputs: Emails_Auth_Security_Change_Totp_DisabledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Security_Change_Totp_DisabledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_security_change_totp_disabled(inputs)
	if (locale === "de") return de_emails_auth_security_change_totp_disabled(inputs)
	if (locale === "fr") return fr_emails_auth_security_change_totp_disabled(inputs)
	if (locale === "it") return it_emails_auth_security_change_totp_disabled(inputs)
	if (locale === "nl") return nl_emails_auth_security_change_totp_disabled(inputs)
	if (locale === "pl") return pl_emails_auth_security_change_totp_disabled(inputs)
	if (locale === "pt") return pt_emails_auth_security_change_totp_disabled(inputs)
	if (locale === "ru") return ru_emails_auth_security_change_totp_disabled(inputs)
	if (locale === "sv") return sv_emails_auth_security_change_totp_disabled(inputs)
	if (locale === "tr") return tr_emails_auth_security_change_totp_disabled(inputs)
	if (locale === "zh") return zh_emails_auth_security_change_totp_disabled(inputs)
	if (locale === "ja") return ja_emails_auth_security_change_totp_disabled(inputs)
	return en_emails_auth_security_change_totp_disabled(inputs)
});
