/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ cadence: NonNullable<unknown> }} Emails_Notify_Reason_DigestInputs */

const en_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`You get this email because you chose a daily digest for these signals.`);
	return /** @type {LocalizedString} */ (`You get this email because you chose a weekly digest for these signals.`)
	
};

const es_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Recibes este email porque elegiste un resumen diario para estas señales.`);
	return /** @type {LocalizedString} */ (`Recibes este email porque elegiste un resumen semanal para estas señales.`)
	
};

const de_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Du erhältst diese E-Mail, weil du für diese Signale eine tägliche Zusammenfassung gewählt hast.`);
	return /** @type {LocalizedString} */ (`Du erhältst diese E-Mail, weil du für diese Signale eine wöchentliche Zusammenfassung gewählt hast.`)
	
};

const fr_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Vous recevez cet e-mail car vous avez choisi un résumé quotidien pour ces signaux.`);
	return /** @type {LocalizedString} */ (`Vous recevez cet e-mail car vous avez choisi un résumé hebdomadaire pour ces signaux.`)
	
};

const it_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Ricevi questa email perché hai scelto un riepilogo giornaliero per questi segnali.`);
	return /** @type {LocalizedString} */ (`Ricevi questa email perché hai scelto un riepilogo settimanale per questi segnali.`)
	
};

const nl_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Je krijgt deze e-mail omdat je voor deze signalen een dagelijks overzicht hebt gekozen.`);
	return /** @type {LocalizedString} */ (`Je krijgt deze e-mail omdat je voor deze signalen een wekelijks overzicht hebt gekozen.`)
	
};

const pl_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Otrzymujesz ten e-mail, ponieważ wybrano dzienne podsumowanie dla tych sygnałów.`);
	return /** @type {LocalizedString} */ (`Otrzymujesz ten e-mail, ponieważ wybrano tygodniowe podsumowanie dla tych sygnałów.`)
	
};

const pt_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Você recebe este e-mail porque escolheu um resumo diário para estes sinais.`);
	return /** @type {LocalizedString} */ (`Você recebe este e-mail porque escolheu um resumo semanal para estes sinais.`)
	
};

const ru_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Вы получаете это письмо, потому что выбрали ежедневную сводку для этих сигналов.`);
	return /** @type {LocalizedString} */ (`Вы получаете это письмо, потому что выбрали еженедельную сводку для этих сигналов.`)
	
};

const sv_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Du får det här mejlet eftersom du valde en daglig sammanfattning för de här signalerna.`);
	return /** @type {LocalizedString} */ (`Du får det här mejlet eftersom du valde en veckovis sammanfattning för de här signalerna.`)
	
};

const tr_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`Bu sinyaller için günlük özet seçtiğin için bu e-postayı alıyorsun.`);
	return /** @type {LocalizedString} */ (`Bu sinyaller için haftalık özet seçtiğin için bu e-postayı alıyorsun.`)
	
};

const zh_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`你收到此邮件，是因为你为这些信号选择了每日摘要。`);
	return /** @type {LocalizedString} */ (`你收到此邮件，是因为你为这些信号选择了每周摘要。`)
	
};

const ja_emails_notify_reason_digest = /** @type {(inputs: Emails_Notify_Reason_DigestInputs) => LocalizedString} */ (i) => {
	if (i?.cadence === "daily") return /** @type {LocalizedString} */ (`これらのシグナルでデイリーダイジェストを選択しているため、このメールをお送りしています。`);
	return /** @type {LocalizedString} */ (`これらのシグナルでウィークリーダイジェストを選択しているため、このメールをお送りしています。`)
	
};

/**
* | cadence | output |
* | --- | --- |
* | "daily" | "You get this email because you chose a daily digest for these signals." |
* | * | "You get this email because you chose a weekly digest for these signals." |
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
