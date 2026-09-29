/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Email_Change_HeadingInputs */

const en_emails_auth_email_change_heading = /** @type {(inputs: Emails_Auth_Email_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm your new email`)
};

const es_emails_auth_email_change_heading = /** @type {(inputs: Emails_Auth_Email_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirma tu nuevo correo`)
};

const de_emails_auth_email_change_heading = /** @type {(inputs: Emails_Auth_Email_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige deine neue E-Mail-Adresse`)
};

const fr_emails_auth_email_change_heading = /** @type {(inputs: Emails_Auth_Email_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmez votre nouvelle adresse`)
};

const it_emails_auth_email_change_heading = /** @type {(inputs: Emails_Auth_Email_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conferma la nuova email`)
};

const nl_emails_auth_email_change_heading = /** @type {(inputs: Emails_Auth_Email_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig je nieuwe e-mailadres`)
};

const pl_emails_auth_email_change_heading = /** @type {(inputs: Emails_Auth_Email_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź nowy e-mail`)
};

const pt_emails_auth_email_change_heading = /** @type {(inputs: Emails_Auth_Email_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirme seu novo e-mail`)
};

const ru_emails_auth_email_change_heading = /** @type {(inputs: Emails_Auth_Email_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите новую почту`)
};

const sv_emails_auth_email_change_heading = /** @type {(inputs: Emails_Auth_Email_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta din nya e-postadress`)
};

const tr_emails_auth_email_change_heading = /** @type {(inputs: Emails_Auth_Email_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni e-postanı doğrula`)
};

const zh_emails_auth_email_change_heading = /** @type {(inputs: Emails_Auth_Email_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认你的新邮箱`)
};

const ja_emails_auth_email_change_heading = /** @type {(inputs: Emails_Auth_Email_Change_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいメールアドレスの確認`)
};

/**
* | output |
* | --- |
* | "Confirm your new email" |
*
* @param {Emails_Auth_Email_Change_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_email_change_heading = /** @type {((inputs?: Emails_Auth_Email_Change_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Email_Change_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_email_change_heading(inputs)
	if (locale === "de") return de_emails_auth_email_change_heading(inputs)
	if (locale === "fr") return fr_emails_auth_email_change_heading(inputs)
	if (locale === "it") return it_emails_auth_email_change_heading(inputs)
	if (locale === "nl") return nl_emails_auth_email_change_heading(inputs)
	if (locale === "pl") return pl_emails_auth_email_change_heading(inputs)
	if (locale === "pt") return pt_emails_auth_email_change_heading(inputs)
	if (locale === "ru") return ru_emails_auth_email_change_heading(inputs)
	if (locale === "sv") return sv_emails_auth_email_change_heading(inputs)
	if (locale === "tr") return tr_emails_auth_email_change_heading(inputs)
	if (locale === "zh") return zh_emails_auth_email_change_heading(inputs)
	if (locale === "ja") return ja_emails_auth_email_change_heading(inputs)
	return en_emails_auth_email_change_heading(inputs)
});
