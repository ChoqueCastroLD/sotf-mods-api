/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown>, email: NonNullable<unknown> }} Emails_Auth_Email_Notice_BodyInputs */

const en_emails_auth_email_notice_body = /** @type {(inputs: Emails_Auth_Email_Notice_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`On ${i?.when} (UTC) someone asked to change the email of your account to ${i?.email}. Nothing changes until the new address is confirmed.`)
};

const es_emails_auth_email_notice_body = /** @type {(inputs: Emails_Auth_Email_Notice_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`El ${i?.when} (UTC) alguien pidió cambiar el correo de tu cuenta a ${i?.email}. No cambia nada hasta que se confirme la nueva dirección.`)
};

const de_emails_auth_email_notice_body = /** @type {(inputs: Emails_Auth_Email_Notice_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Am ${i?.when} (UTC) hat jemand angefordert, die E-Mail-Adresse deines Kontos auf ${i?.email} zu ändern. Nichts ändert sich, bis die neue Adresse bestätigt ist.`)
};

const fr_emails_auth_email_notice_body = /** @type {(inputs: Emails_Auth_Email_Notice_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Le ${i?.when} (UTC), quelqu’un a demandé à remplacer l’adresse e-mail de votre compte par ${i?.email}. Rien ne change tant que la nouvelle adresse n’est pas confirmée.`)
};

const it_emails_auth_email_notice_body = /** @type {(inputs: Emails_Auth_Email_Notice_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Il ${i?.when} (UTC) qualcuno ha chiesto di cambiare l’email del tuo account in ${i?.email}. Non cambia nulla finché il nuovo indirizzo non viene confermato.`)
};

const nl_emails_auth_email_notice_body = /** @type {(inputs: Emails_Auth_Email_Notice_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Op ${i?.when} (UTC) heeft iemand gevraagd het e-mailadres van je account te wijzigen in ${i?.email}. Er verandert niets tot het nieuwe adres is bevestigd.`)
};

const pl_emails_auth_email_notice_body = /** @type {(inputs: Emails_Auth_Email_Notice_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.when} (UTC) ktoś poprosił o zmianę e-maila Twojego konta na ${i?.email}. Nic się nie zmieni, dopóki nowy adres nie zostanie potwierdzony.`)
};

const pt_emails_auth_email_notice_body = /** @type {(inputs: Emails_Auth_Email_Notice_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Em ${i?.when} (UTC), alguém pediu para alterar o e-mail da sua conta para ${i?.email}. Nada muda até o novo endereço ser confirmado.`)
};

const ru_emails_auth_email_notice_body = /** @type {(inputs: Emails_Auth_Email_Notice_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.when} (UTC) кто-то запросил смену почты вашего аккаунта на ${i?.email}. Ничего не изменится, пока новый адрес не подтверждён.`)
};

const sv_emails_auth_email_notice_body = /** @type {(inputs: Emails_Auth_Email_Notice_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.when} (UTC) bad någon om att ändra ditt kontos e-postadress till ${i?.email}. Inget ändras förrän den nya adressen har bekräftats.`)
};

const tr_emails_auth_email_notice_body = /** @type {(inputs: Emails_Auth_Email_Notice_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.when} (UTC) tarihinde biri hesabının e-postasını ${i?.email} olarak değiştirmek istedi. Yeni adres doğrulanana kadar hiçbir şey değişmez.`)
};

const zh_emails_auth_email_notice_body = /** @type {(inputs: Emails_Auth_Email_Notice_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.when}（UTC）有人申请将你账号的邮箱改为 ${i?.email}。在新邮箱确认之前，一切都不会改变。`)
};

const ja_emails_auth_email_notice_body = /** @type {(inputs: Emails_Auth_Email_Notice_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.when}（UTC）に、アカウントのメールアドレスを ${i?.email} に変更するリクエストがありました。新しいアドレスが確認されるまで何も変わりません。`)
};

/**
* | output |
* | --- |
* | "On {when} (UTC) someone asked to change the email of your account to {email}. Nothing changes until the new address is confirmed." |
*
* @param {Emails_Auth_Email_Notice_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_email_notice_body = /** @type {((inputs: Emails_Auth_Email_Notice_BodyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Email_Notice_BodyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_email_notice_body(inputs)
	if (locale === "de") return de_emails_auth_email_notice_body(inputs)
	if (locale === "fr") return fr_emails_auth_email_notice_body(inputs)
	if (locale === "it") return it_emails_auth_email_notice_body(inputs)
	if (locale === "nl") return nl_emails_auth_email_notice_body(inputs)
	if (locale === "pl") return pl_emails_auth_email_notice_body(inputs)
	if (locale === "pt") return pt_emails_auth_email_notice_body(inputs)
	if (locale === "ru") return ru_emails_auth_email_notice_body(inputs)
	if (locale === "sv") return sv_emails_auth_email_notice_body(inputs)
	if (locale === "tr") return tr_emails_auth_email_notice_body(inputs)
	if (locale === "zh") return zh_emails_auth_email_notice_body(inputs)
	if (locale === "ja") return ja_emails_auth_email_notice_body(inputs)
	return en_emails_auth_email_notice_body(inputs)
});
