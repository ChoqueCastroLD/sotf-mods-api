/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Email_Notice_PreviewInputs */

const en_emails_auth_email_notice_preview = /** @type {(inputs: Emails_Auth_Email_Notice_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The change only happens once the new address is confirmed.`)
};

const es_emails_auth_email_notice_preview = /** @type {(inputs: Emails_Auth_Email_Notice_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El cambio solo se aplica cuando se confirme la nueva dirección.`)
};

const de_emails_auth_email_notice_preview = /** @type {(inputs: Emails_Auth_Email_Notice_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Änderung gilt erst, wenn die neue Adresse bestätigt ist.`)
};

const fr_emails_auth_email_notice_preview = /** @type {(inputs: Emails_Auth_Email_Notice_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le changement n’a lieu qu’une fois la nouvelle adresse confirmée.`)
};

const it_emails_auth_email_notice_preview = /** @type {(inputs: Emails_Auth_Email_Notice_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La modifica avviene solo dopo la conferma del nuovo indirizzo.`)
};

const nl_emails_auth_email_notice_preview = /** @type {(inputs: Emails_Auth_Email_Notice_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De wijziging gaat pas in als het nieuwe adres is bevestigd.`)
};

const pl_emails_auth_email_notice_preview = /** @type {(inputs: Emails_Auth_Email_Notice_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmiana nastąpi dopiero po potwierdzeniu nowego adresu.`)
};

const pt_emails_auth_email_notice_preview = /** @type {(inputs: Emails_Auth_Email_Notice_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A alteração só acontece depois que o novo endereço for confirmado.`)
};

const ru_emails_auth_email_notice_preview = /** @type {(inputs: Emails_Auth_Email_Notice_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смена произойдёт только после подтверждения нового адреса.`)
};

const sv_emails_auth_email_notice_preview = /** @type {(inputs: Emails_Auth_Email_Notice_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändringen sker först när den nya adressen har bekräftats.`)
};

const tr_emails_auth_email_notice_preview = /** @type {(inputs: Emails_Auth_Email_Notice_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklik yalnızca yeni adres doğrulandığında gerçekleşir.`)
};

const zh_emails_auth_email_notice_preview = /** @type {(inputs: Emails_Auth_Email_Notice_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只有新邮箱确认后才会生效。`)
};

const ja_emails_auth_email_notice_preview = /** @type {(inputs: Emails_Auth_Email_Notice_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいアドレスが確認されるまで変更は行われません。`)
};

/**
* | output |
* | --- |
* | "The change only happens once the new address is confirmed." |
*
* @param {Emails_Auth_Email_Notice_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_email_notice_preview = /** @type {((inputs?: Emails_Auth_Email_Notice_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Email_Notice_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_email_notice_preview(inputs)
	if (locale === "de") return de_emails_auth_email_notice_preview(inputs)
	if (locale === "fr") return fr_emails_auth_email_notice_preview(inputs)
	if (locale === "it") return it_emails_auth_email_notice_preview(inputs)
	if (locale === "nl") return nl_emails_auth_email_notice_preview(inputs)
	if (locale === "pl") return pl_emails_auth_email_notice_preview(inputs)
	if (locale === "pt") return pt_emails_auth_email_notice_preview(inputs)
	if (locale === "ru") return ru_emails_auth_email_notice_preview(inputs)
	if (locale === "sv") return sv_emails_auth_email_notice_preview(inputs)
	if (locale === "tr") return tr_emails_auth_email_notice_preview(inputs)
	if (locale === "zh") return zh_emails_auth_email_notice_preview(inputs)
	if (locale === "ja") return ja_emails_auth_email_notice_preview(inputs)
	return en_emails_auth_email_notice_preview(inputs)
});
