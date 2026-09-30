/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Security_Change_SubjectInputs */

const en_emails_auth_security_change_subject = /** @type {(inputs: Emails_Auth_Security_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A security setting of your SOTF Mods account changed`)
};

const es_emails_auth_security_change_subject = /** @type {(inputs: Emails_Auth_Security_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ha cambiado un ajuste de seguridad de tu cuenta de SOTF Mods`)
};

const de_emails_auth_security_change_subject = /** @type {(inputs: Emails_Auth_Security_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine Sicherheitseinstellung deines SOTF-Mods-Kontos wurde geändert`)
};

const fr_emails_auth_security_change_subject = /** @type {(inputs: Emails_Auth_Security_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un paramètre de sécurité de votre compte SOTF Mods a changé`)
};

const it_emails_auth_security_change_subject = /** @type {(inputs: Emails_Auth_Security_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un’impostazione di sicurezza del tuo account SOTF Mods è cambiata`)
};

const nl_emails_auth_security_change_subject = /** @type {(inputs: Emails_Auth_Security_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een beveiligingsinstelling van je SOTF Mods-account is gewijzigd`)
};

const pl_emails_auth_security_change_subject = /** @type {(inputs: Emails_Auth_Security_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmieniło się ustawienie bezpieczeństwa Twojego konta SOTF Mods`)
};

const pt_emails_auth_security_change_subject = /** @type {(inputs: Emails_Auth_Security_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma configuração de segurança da sua conta SOTF Mods mudou`)
};

const ru_emails_auth_security_change_subject = /** @type {(inputs: Emails_Auth_Security_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменилась настройка безопасности вашего аккаунта SOTF Mods`)
};

const sv_emails_auth_security_change_subject = /** @type {(inputs: Emails_Auth_Security_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En säkerhetsinställning för ditt SOTF Mods-konto ändrades`)
};

const tr_emails_auth_security_change_subject = /** @type {(inputs: Emails_Auth_Security_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods hesabının bir güvenlik ayarı değişti`)
};

const zh_emails_auth_security_change_subject = /** @type {(inputs: Emails_Auth_Security_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的 SOTF Mods 账号的安全设置已更改`)
};

const ja_emails_auth_security_change_subject = /** @type {(inputs: Emails_Auth_Security_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods アカウントのセキュリティ設定が変更されました`)
};

/**
* | output |
* | --- |
* | "A security setting of your SOTF Mods account changed" |
*
* @param {Emails_Auth_Security_Change_SubjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_security_change_subject = /** @type {((inputs?: Emails_Auth_Security_Change_SubjectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Security_Change_SubjectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_security_change_subject(inputs)
	if (locale === "de") return de_emails_auth_security_change_subject(inputs)
	if (locale === "fr") return fr_emails_auth_security_change_subject(inputs)
	if (locale === "it") return it_emails_auth_security_change_subject(inputs)
	if (locale === "nl") return nl_emails_auth_security_change_subject(inputs)
	if (locale === "pl") return pl_emails_auth_security_change_subject(inputs)
	if (locale === "pt") return pt_emails_auth_security_change_subject(inputs)
	if (locale === "ru") return ru_emails_auth_security_change_subject(inputs)
	if (locale === "sv") return sv_emails_auth_security_change_subject(inputs)
	if (locale === "tr") return tr_emails_auth_security_change_subject(inputs)
	if (locale === "zh") return zh_emails_auth_security_change_subject(inputs)
	if (locale === "ja") return ja_emails_auth_security_change_subject(inputs)
	return en_emails_auth_security_change_subject(inputs)
});
