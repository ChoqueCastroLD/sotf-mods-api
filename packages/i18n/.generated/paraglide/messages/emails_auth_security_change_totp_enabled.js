/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Emails_Auth_Security_Change_Totp_EnabledInputs */

const en_emails_auth_security_change_totp_enabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Two-factor authentication with an authenticator app was turned on for your account on ${i?.when} (UTC).`)
};

const es_emails_auth_security_change_totp_enabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La verificación en dos pasos con una app de autenticación se activó en tu cuenta el ${i?.when} (UTC).`)
};

const de_emails_auth_security_change_totp_enabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die Zwei-Faktor-Authentifizierung mit einer Authenticator-App wurde am ${i?.when} (UTC) für dein Konto aktiviert.`)
};

const fr_emails_auth_security_change_totp_enabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`L’authentification à deux facteurs par application d’authentification a été activée sur votre compte le ${i?.when} (UTC).`)
};

const it_emails_auth_security_change_totp_enabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`L’autenticazione a due fattori con un’app di autenticazione è stata attivata sul tuo account il ${i?.when} (UTC).`)
};

const nl_emails_auth_security_change_totp_enabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tweestapsverificatie met een authenticator-app is op ${i?.when} (UTC) ingeschakeld voor je account.`)
};

const pl_emails_auth_security_change_totp_enabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uwierzytelnianie dwuskładnikowe za pomocą aplikacji uwierzytelniającej zostało włączone na Twoim koncie ${i?.when} (UTC).`)
};

const pt_emails_auth_security_change_totp_enabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A verificação em duas etapas com um app autenticador foi ativada na sua conta em ${i?.when} (UTC).`)
};

const ru_emails_auth_security_change_totp_enabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Двухфакторная аутентификация через приложение-аутентификатор включена для вашего аккаунта ${i?.when} (UTC).`)
};

const sv_emails_auth_security_change_totp_enabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tvåfaktorsautentisering med en autentiseringsapp aktiverades för ditt konto ${i?.when} (UTC).`)
};

const tr_emails_auth_security_change_totp_enabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hesabın için kimlik doğrulayıcı uygulamayla iki adımlı doğrulama ${i?.when} (UTC) tarihinde açıldı.`)
};

const zh_emails_auth_security_change_totp_enabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你的账号已于 ${i?.when}（UTC）开启验证器应用两步验证。`)
};

const ja_emails_auth_security_change_totp_enabled = /** @type {(inputs: Emails_Auth_Security_Change_Totp_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.when}（UTC）に、認証アプリによる2段階認証がアカウントで有効になりました。`)
};

/**
* | output |
* | --- |
* | "Two-factor authentication with an authenticator app was turned on for your account on {when} (UTC)." |
*
* @param {Emails_Auth_Security_Change_Totp_EnabledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_security_change_totp_enabled = /** @type {((inputs: Emails_Auth_Security_Change_Totp_EnabledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Security_Change_Totp_EnabledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_security_change_totp_enabled(inputs)
	if (locale === "de") return de_emails_auth_security_change_totp_enabled(inputs)
	if (locale === "fr") return fr_emails_auth_security_change_totp_enabled(inputs)
	if (locale === "it") return it_emails_auth_security_change_totp_enabled(inputs)
	if (locale === "nl") return nl_emails_auth_security_change_totp_enabled(inputs)
	if (locale === "pl") return pl_emails_auth_security_change_totp_enabled(inputs)
	if (locale === "pt") return pt_emails_auth_security_change_totp_enabled(inputs)
	if (locale === "ru") return ru_emails_auth_security_change_totp_enabled(inputs)
	if (locale === "sv") return sv_emails_auth_security_change_totp_enabled(inputs)
	if (locale === "tr") return tr_emails_auth_security_change_totp_enabled(inputs)
	if (locale === "zh") return zh_emails_auth_security_change_totp_enabled(inputs)
	if (locale === "ja") return ja_emails_auth_security_change_totp_enabled(inputs)
	return en_emails_auth_security_change_totp_enabled(inputs)
});
