/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Email_Notice_SubjectInputs */

const en_emails_auth_email_notice_subject = /** @type {(inputs: Emails_Auth_Email_Notice_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The email of your SOTF Mods account is being changed`)
};

const es_emails_auth_email_notice_subject = /** @type {(inputs: Emails_Auth_Email_Notice_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se está cambiando el correo de tu cuenta de SOTF Mods`)
};

const de_emails_auth_email_notice_subject = /** @type {(inputs: Emails_Auth_Email_Notice_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die E-Mail-Adresse deines SOTF-Mods-Kontos wird geändert`)
};

const fr_emails_auth_email_notice_subject = /** @type {(inputs: Emails_Auth_Email_Notice_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’adresse e-mail de votre compte SOTF Mods est en cours de modification`)
};

const it_emails_auth_email_notice_subject = /** @type {(inputs: Emails_Auth_Email_Notice_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’email del tuo account SOTF Mods sta per cambiare`)
};

const nl_emails_auth_email_notice_subject = /** @type {(inputs: Emails_Auth_Email_Notice_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het e-mailadres van je SOTF Mods-account wordt gewijzigd`)
};

const pl_emails_auth_email_notice_subject = /** @type {(inputs: Emails_Auth_Email_Notice_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail Twojego konta SOTF Mods jest zmieniany`)
};

const pt_emails_auth_email_notice_subject = /** @type {(inputs: Emails_Auth_Email_Notice_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O e-mail da sua conta do SOTF Mods está sendo alterado`)
};

const ru_emails_auth_email_notice_subject = /** @type {(inputs: Emails_Auth_Email_Notice_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Почта вашего аккаунта SOTF Mods меняется`)
};

const sv_emails_auth_email_notice_subject = /** @type {(inputs: Emails_Auth_Email_Notice_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-postadressen för ditt SOTF Mods-konto håller på att ändras`)
};

const tr_emails_auth_email_notice_subject = /** @type {(inputs: Emails_Auth_Email_Notice_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods hesabının e-postası değiştiriliyor`)
};

const zh_emails_auth_email_notice_subject = /** @type {(inputs: Emails_Auth_Email_Notice_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的 SOTF Mods 账号邮箱正在更改`)
};

const ja_emails_auth_email_notice_subject = /** @type {(inputs: Emails_Auth_Email_Notice_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods アカウントのメールアドレスが変更されようとしています`)
};

/**
* | output |
* | --- |
* | "The email of your SOTF Mods account is being changed" |
*
* @param {Emails_Auth_Email_Notice_SubjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_email_notice_subject = /** @type {((inputs?: Emails_Auth_Email_Notice_SubjectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Email_Notice_SubjectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_email_notice_subject(inputs)
	if (locale === "de") return de_emails_auth_email_notice_subject(inputs)
	if (locale === "fr") return fr_emails_auth_email_notice_subject(inputs)
	if (locale === "it") return it_emails_auth_email_notice_subject(inputs)
	if (locale === "nl") return nl_emails_auth_email_notice_subject(inputs)
	if (locale === "pl") return pl_emails_auth_email_notice_subject(inputs)
	if (locale === "pt") return pt_emails_auth_email_notice_subject(inputs)
	if (locale === "ru") return ru_emails_auth_email_notice_subject(inputs)
	if (locale === "sv") return sv_emails_auth_email_notice_subject(inputs)
	if (locale === "tr") return tr_emails_auth_email_notice_subject(inputs)
	if (locale === "zh") return zh_emails_auth_email_notice_subject(inputs)
	if (locale === "ja") return ja_emails_auth_email_notice_subject(inputs)
	return en_emails_auth_email_notice_subject(inputs)
});
