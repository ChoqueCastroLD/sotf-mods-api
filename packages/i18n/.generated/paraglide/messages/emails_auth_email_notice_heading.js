/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Email_Notice_HeadingInputs */

const en_emails_auth_email_notice_heading = /** @type {(inputs: Emails_Auth_Email_Notice_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email change requested`)
};

const es_emails_auth_email_notice_heading = /** @type {(inputs: Emails_Auth_Email_Notice_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambio de correo solicitado`)
};

const de_emails_auth_email_notice_heading = /** @type {(inputs: Emails_Auth_Email_Notice_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-Mail-Änderung angefordert`)
};

const fr_emails_auth_email_notice_heading = /** @type {(inputs: Emails_Auth_Email_Notice_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changement d’adresse demandé`)
};

const it_emails_auth_email_notice_heading = /** @type {(inputs: Emails_Auth_Email_Notice_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richiesta di cambio email`)
};

const nl_emails_auth_email_notice_heading = /** @type {(inputs: Emails_Auth_Email_Notice_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijziging van e-mailadres aangevraagd`)
};

const pl_emails_auth_email_notice_heading = /** @type {(inputs: Emails_Auth_Email_Notice_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prośba o zmianę e-maila`)
};

const pt_emails_auth_email_notice_heading = /** @type {(inputs: Emails_Auth_Email_Notice_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alteração de e-mail solicitada`)
};

const ru_emails_auth_email_notice_heading = /** @type {(inputs: Emails_Auth_Email_Notice_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запрошена смена почты`)
};

const sv_emails_auth_email_notice_heading = /** @type {(inputs: Emails_Auth_Email_Notice_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byte av e-postadress begärt`)
};

const tr_emails_auth_email_notice_heading = /** @type {(inputs: Emails_Auth_Email_Notice_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-posta değişikliği istendi`)
};

const zh_emails_auth_email_notice_heading = /** @type {(inputs: Emails_Auth_Email_Notice_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已申请更改邮箱`)
};

const ja_emails_auth_email_notice_heading = /** @type {(inputs: Emails_Auth_Email_Notice_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールアドレスの変更リクエスト`)
};

/**
* | output |
* | --- |
* | "Email change requested" |
*
* @param {Emails_Auth_Email_Notice_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_email_notice_heading = /** @type {((inputs?: Emails_Auth_Email_Notice_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Email_Notice_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_email_notice_heading(inputs)
	if (locale === "de") return de_emails_auth_email_notice_heading(inputs)
	if (locale === "fr") return fr_emails_auth_email_notice_heading(inputs)
	if (locale === "it") return it_emails_auth_email_notice_heading(inputs)
	if (locale === "nl") return nl_emails_auth_email_notice_heading(inputs)
	if (locale === "pl") return pl_emails_auth_email_notice_heading(inputs)
	if (locale === "pt") return pt_emails_auth_email_notice_heading(inputs)
	if (locale === "ru") return ru_emails_auth_email_notice_heading(inputs)
	if (locale === "sv") return sv_emails_auth_email_notice_heading(inputs)
	if (locale === "tr") return tr_emails_auth_email_notice_heading(inputs)
	if (locale === "zh") return zh_emails_auth_email_notice_heading(inputs)
	if (locale === "ja") return ja_emails_auth_email_notice_heading(inputs)
	return en_emails_auth_email_notice_heading(inputs)
});
