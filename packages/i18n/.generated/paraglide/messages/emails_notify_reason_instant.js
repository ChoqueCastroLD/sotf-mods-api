/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_Reason_InstantInputs */

const en_emails_notify_reason_instant = /** @type {(inputs: Emails_Notify_Reason_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You get this email because instant emails are on for these notifications.`)
};

const es_emails_notify_reason_instant = /** @type {(inputs: Emails_Notify_Reason_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recibes este email porque tienes activados los emails instantáneos para estas notificaciones.`)
};

const de_emails_notify_reason_instant = /** @type {(inputs: Emails_Notify_Reason_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du erhältst diese E-Mail, weil sofortige E-Mails für diese Benachrichtigungen aktiviert sind.`)
};

const fr_emails_notify_reason_instant = /** @type {(inputs: Emails_Notify_Reason_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous recevez cet e-mail car les e-mails instantanés sont activés pour ces notifications.`)
};

const it_emails_notify_reason_instant = /** @type {(inputs: Emails_Notify_Reason_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricevi questa email perché le email immediate sono attive per queste notifiche.`)
};

const nl_emails_notify_reason_instant = /** @type {(inputs: Emails_Notify_Reason_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je krijgt deze e-mail omdat directe e-mails voor deze meldingen aan staan.`)
};

const pl_emails_notify_reason_instant = /** @type {(inputs: Emails_Notify_Reason_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otrzymujesz ten e-mail, ponieważ masz włączone natychmiastowe e-maile dla tych powiadomień.`)
};

const pt_emails_notify_reason_instant = /** @type {(inputs: Emails_Notify_Reason_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você recebe este e-mail porque os e-mails instantâneos estão ativados para estas notificações.`)
};

const ru_emails_notify_reason_instant = /** @type {(inputs: Emails_Notify_Reason_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы получаете это письмо, потому что для этих уведомлений включены мгновенные письма.`)
};

const sv_emails_notify_reason_instant = /** @type {(inputs: Emails_Notify_Reason_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du får det här mejlet eftersom direktmejl är på för de här aviseringarna.`)
};

const tr_emails_notify_reason_instant = /** @type {(inputs: Emails_Notify_Reason_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu bildirimler için anında e-postalar açık olduğu için bu e-postayı alıyorsun.`)
};

const zh_emails_notify_reason_instant = /** @type {(inputs: Emails_Notify_Reason_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你收到此邮件，是因为你为这些通知开启了即时邮件。`)
};

const ja_emails_notify_reason_instant = /** @type {(inputs: Emails_Notify_Reason_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`これらの通知で即時メールがオンになっているため、このメールをお送りしています。`)
};

/**
* | output |
* | --- |
* | "You get this email because instant emails are on for these notifications." |
*
* @param {Emails_Notify_Reason_InstantInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_reason_instant = /** @type {((inputs?: Emails_Notify_Reason_InstantInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Reason_InstantInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_reason_instant(inputs)
	if (locale === "de") return de_emails_notify_reason_instant(inputs)
	if (locale === "fr") return fr_emails_notify_reason_instant(inputs)
	if (locale === "it") return it_emails_notify_reason_instant(inputs)
	if (locale === "nl") return nl_emails_notify_reason_instant(inputs)
	if (locale === "pl") return pl_emails_notify_reason_instant(inputs)
	if (locale === "pt") return pt_emails_notify_reason_instant(inputs)
	if (locale === "ru") return ru_emails_notify_reason_instant(inputs)
	if (locale === "sv") return sv_emails_notify_reason_instant(inputs)
	if (locale === "tr") return tr_emails_notify_reason_instant(inputs)
	if (locale === "zh") return zh_emails_notify_reason_instant(inputs)
	if (locale === "ja") return ja_emails_notify_reason_instant(inputs)
	return en_emails_notify_reason_instant(inputs)
});
