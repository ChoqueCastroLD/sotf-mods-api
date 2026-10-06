/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ cadence: NonNullable<unknown> }} Emails_Notify_Reason_DigestInputs */

const en_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`You get this email because you chose a daily digest for these notifications.`);
	return /** @type {LocalizedString} */ (`You get this email because you chose a weekly digest for these notifications.`)
	
};

const es_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Recibes este email porque elegiste un resumen diario para estas notificaciones.`);
	return /** @type {LocalizedString} */ (`Recibes este email porque elegiste un resumen semanal para estas notificaciones.`)
	
};

const de_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Du erhältst diese E-Mail, weil du für diese Benachrichtigungen eine tägliche Zusammenfassung gewählt hast.`);
	return /** @type {LocalizedString} */ (`Du erhältst diese E-Mail, weil du für diese Benachrichtigungen eine wöchentliche Zusammenfassung gewählt hast.`)
	
};

const fr_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Vous recevez cet e-mail car vous avez choisi un résumé quotidien pour ces notifications.`);
	return /** @type {LocalizedString} */ (`Vous recevez cet e-mail car vous avez choisi un résumé hebdomadaire pour ces notifications.`)
	
};

const it_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Ricevi questa email perché hai scelto un riepilogo giornaliero per queste notifiche.`);
	return /** @type {LocalizedString} */ (`Ricevi questa email perché hai scelto un riepilogo settimanale per queste notifiche.`)
	
};

const nl_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Je krijgt deze e-mail omdat je voor deze meldingen een dagelijks overzicht hebt gekozen.`);
	return /** @type {LocalizedString} */ (`Je krijgt deze e-mail omdat je voor deze meldingen een wekelijks overzicht hebt gekozen.`)
	
};

const pl_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Otrzymujesz ten e-mail, ponieważ wybrano dzienne podsumowanie dla tych powiadomień.`);
	return /** @type {LocalizedString} */ (`Otrzymujesz ten e-mail, ponieważ wybrano tygodniowe podsumowanie dla tych powiadomień.`)
	
};

const pt_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Você recebe este e-mail porque escolheu um resumo diário para estas notificações.`);
	return /** @type {LocalizedString} */ (`Você recebe este e-mail porque escolheu um resumo semanal para estas notificações.`)
	
};

const ru_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Вы получаете это письмо, потому что выбрали ежедневную сводку для этих уведомлений.`);
	return /** @type {LocalizedString} */ (`Вы получаете это письмо, потому что выбрали еженедельную сводку для этих уведомлений.`)
	
};

const sv_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Du får det här mejlet eftersom du valde en daglig sammanfattning för de här aviseringarna.`);
	return /** @type {LocalizedString} */ (`Du får det här mejlet eftersom du valde en veckovis sammanfattning för de här aviseringarna.`)
	
};

const tr_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Bu bildirimler için günlük özet seçtiğin için bu e-postayı alıyorsun.`);
	return /** @type {LocalizedString} */ (`Bu bildirimler için haftalık özet seçtiğin için bu e-postayı alıyorsun.`)
	
};

const zh_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`你收到此邮件，是因为你为这些通知选择了每日摘要。`);
	return /** @type {LocalizedString} */ (`你收到此邮件，是因为你为这些通知选择了每周摘要。`)
	
};

const ja_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`これらの通知でデイリーダイジェストを選択しているため、このメールをお送りしています。`);
	return /** @type {LocalizedString} */ (`これらの通知でウィークリーダイジェストを選択しているため、このメールをお送りしています。`)
	
};

/**
* | cadence | output |
* | --- | --- |
* | "daily" | "You get this email because you chose a daily digest for these notifications." |
* | * | "You get this email because you chose a weekly digest for these notifications." |
*
* @param {Emails_Notify_Reason_DigestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_reason_digest = /** @type {((inputs: Emails_Notify_Reason_DigestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Reason_DigestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_reason_digest(inputs)
	if (locale === "de") return de_emails_notify_reason_digest(inputs)
	if (locale === "fr") return fr_emails_notify_reason_digest(inputs)
	if (locale === "it") return it_emails_notify_reason_digest(inputs)
	if (locale === "nl") return nl_emails_notify_reason_digest(inputs)
	if (locale === "pl") return pl_emails_notify_reason_digest(inputs)
	if (locale === "pt") return pt_emails_notify_reason_digest(inputs)
	if (locale === "ru") return ru_emails_notify_reason_digest(inputs)
	if (locale === "sv") return sv_emails_notify_reason_digest(inputs)
	if (locale === "tr") return tr_emails_notify_reason_digest(inputs)
	if (locale === "zh") return zh_emails_notify_reason_digest(inputs)
	if (locale === "ja") return ja_emails_notify_reason_digest(inputs)
	return en_emails_notify_reason_digest(inputs)
});
