/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Email_Change_ButtonInputs */

const en_emails_auth_email_change_button = /** @type {(inputs: Emails_Auth_Email_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm new email`)
};

const es_emails_auth_email_change_button = /** @type {(inputs: Emails_Auth_Email_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmar nuevo correo`)
};

const de_emails_auth_email_change_button = /** @type {(inputs: Emails_Auth_Email_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue E-Mail bestätigen`)
};

const fr_emails_auth_email_change_button = /** @type {(inputs: Emails_Auth_Email_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmer la nouvelle adresse`)
};

const it_emails_auth_email_change_button = /** @type {(inputs: Emails_Auth_Email_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conferma nuova email`)
};

const nl_emails_auth_email_change_button = /** @type {(inputs: Emails_Auth_Email_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw e-mailadres bevestigen`)
};

const pl_emails_auth_email_change_button = /** @type {(inputs: Emails_Auth_Email_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź nowy e-mail`)
};

const pt_emails_auth_email_change_button = /** @type {(inputs: Emails_Auth_Email_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmar novo e-mail`)
};

const ru_emails_auth_email_change_button = /** @type {(inputs: Emails_Auth_Email_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердить новую почту`)
};

const sv_emails_auth_email_change_button = /** @type {(inputs: Emails_Auth_Email_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta ny e-post`)
};

const tr_emails_auth_email_change_button = /** @type {(inputs: Emails_Auth_Email_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni e-postayı doğrula`)
};

const zh_emails_auth_email_change_button = /** @type {(inputs: Emails_Auth_Email_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认新邮箱`)
};

const ja_emails_auth_email_change_button = /** @type {(inputs: Emails_Auth_Email_Change_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいメールアドレスを確認`)
};

/**
* | output |
* | --- |
* | "Confirm new email" |
*
* @param {Emails_Auth_Email_Change_ButtonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_email_change_button = /** @type {((inputs?: Emails_Auth_Email_Change_ButtonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Email_Change_ButtonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_email_change_button(inputs)
	if (locale === "de") return de_emails_auth_email_change_button(inputs)
	if (locale === "fr") return fr_emails_auth_email_change_button(inputs)
	if (locale === "it") return it_emails_auth_email_change_button(inputs)
	if (locale === "nl") return nl_emails_auth_email_change_button(inputs)
	if (locale === "pl") return pl_emails_auth_email_change_button(inputs)
	if (locale === "pt") return pt_emails_auth_email_change_button(inputs)
	if (locale === "ru") return ru_emails_auth_email_change_button(inputs)
	if (locale === "sv") return sv_emails_auth_email_change_button(inputs)
	if (locale === "tr") return tr_emails_auth_email_change_button(inputs)
	if (locale === "zh") return zh_emails_auth_email_change_button(inputs)
	if (locale === "ja") return ja_emails_auth_email_change_button(inputs)
	return en_emails_auth_email_change_button(inputs)
});
