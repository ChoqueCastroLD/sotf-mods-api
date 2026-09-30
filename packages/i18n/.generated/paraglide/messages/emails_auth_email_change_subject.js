/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Email_Change_SubjectInputs */

const en_emails_auth_email_change_subject = /** @type {(inputs: Emails_Auth_Email_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm your new email for SOTF Mods`)
};

const es_emails_auth_email_change_subject = /** @type {(inputs: Emails_Auth_Email_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirma tu nuevo correo en SOTF Mods`)
};

const de_emails_auth_email_change_subject = /** @type {(inputs: Emails_Auth_Email_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige deine neue E-Mail-Adresse für SOTF Mods`)
};

const fr_emails_auth_email_change_subject = /** @type {(inputs: Emails_Auth_Email_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmez votre nouvelle adresse e-mail pour SOTF Mods`)
};

const it_emails_auth_email_change_subject = /** @type {(inputs: Emails_Auth_Email_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conferma la nuova email per SOTF Mods`)
};

const nl_emails_auth_email_change_subject = /** @type {(inputs: Emails_Auth_Email_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig je nieuwe e-mailadres voor SOTF Mods`)
};

const pl_emails_auth_email_change_subject = /** @type {(inputs: Emails_Auth_Email_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź nowy e-mail w SOTF Mods`)
};

const pt_emails_auth_email_change_subject = /** @type {(inputs: Emails_Auth_Email_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirme seu novo e-mail no SOTF Mods`)
};

const ru_emails_auth_email_change_subject = /** @type {(inputs: Emails_Auth_Email_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите новую почту для SOTF Mods`)
};

const sv_emails_auth_email_change_subject = /** @type {(inputs: Emails_Auth_Email_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta din nya e-postadress för SOTF Mods`)
};

const tr_emails_auth_email_change_subject = /** @type {(inputs: Emails_Auth_Email_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods için yeni e-postanı doğrula`)
};

const zh_emails_auth_email_change_subject = /** @type {(inputs: Emails_Auth_Email_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认你在 SOTF Mods 的新邮箱`)
};

const ja_emails_auth_email_change_subject = /** @type {(inputs: Emails_Auth_Email_Change_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods の新しいメールアドレスを確認してください`)
};

/**
* | output |
* | --- |
* | "Confirm your new email for SOTF Mods" |
*
* @param {Emails_Auth_Email_Change_SubjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_email_change_subject = /** @type {((inputs?: Emails_Auth_Email_Change_SubjectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Email_Change_SubjectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_email_change_subject(inputs)
	if (locale === "de") return de_emails_auth_email_change_subject(inputs)
	if (locale === "fr") return fr_emails_auth_email_change_subject(inputs)
	if (locale === "it") return it_emails_auth_email_change_subject(inputs)
	if (locale === "nl") return nl_emails_auth_email_change_subject(inputs)
	if (locale === "pl") return pl_emails_auth_email_change_subject(inputs)
	if (locale === "pt") return pt_emails_auth_email_change_subject(inputs)
	if (locale === "ru") return ru_emails_auth_email_change_subject(inputs)
	if (locale === "sv") return sv_emails_auth_email_change_subject(inputs)
	if (locale === "tr") return tr_emails_auth_email_change_subject(inputs)
	if (locale === "zh") return zh_emails_auth_email_change_subject(inputs)
	if (locale === "ja") return ja_emails_auth_email_change_subject(inputs)
	return en_emails_auth_email_change_subject(inputs)
});
