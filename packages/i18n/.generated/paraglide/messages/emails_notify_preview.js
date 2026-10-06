/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, first: NonNullable<unknown> }} Emails_Notify_PreviewInputs */

const en_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} new notification, starting with: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} new notifications, starting with: ${i?.first}`)
	
};

const es_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} notificación nueva; la primera: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} notificaciones nuevas; la primera: ${i?.first}`)
	
};

const de_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} neue Benachrichtigung, zuerst: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} neue Benachrichtigungen, zuerst: ${i?.first}`)
	
};

const fr_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nouvelle notification, à commencer par : ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} nouvelles notifications, à commencer par : ${i?.first}`)
	
};

const it_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nuova notifica, a partire da: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} nuove notifiche, a partire da: ${i?.first}`)
	
};

const nl_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nieuwe melding, te beginnen met: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} nieuwe meldingen, te beginnen met: ${i?.first}`)
	
};

const pl_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nowe powiadomienie, a pierwsze: ${i?.first}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} nowe powiadomienia, a pierwsze: ${i?.first}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} nowych powiadomień, a pierwsze: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} nowego powiadomienia, a pierwsze: ${i?.first}`)
	
};

const pt_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nova notificação, começando por: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} novas notificações, começando por: ${i?.first}`)
	
};

const ru_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} новое уведомление, первое: ${i?.first}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} новых уведомления, первое: ${i?.first}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} новых уведомлений, первое: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} нового уведомления, первое: ${i?.first}`)
	
};

const sv_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ny avisering, först: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} nya aviseringar, först: ${i?.first}`)
	
};

const tr_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} yeni bildirim, ilki: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} yeni bildirim, ilki: ${i?.first}`)
	
};

const zh_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 条新通知，首先是：${i?.first}`)
};

const ja_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件の新しい通知。最初は：${i?.first}`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} new notification, starting with: {first}" |
* | * | "{count__number} new notifications, starting with: {first}" |
*
* @param {Emails_Notify_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_preview = /** @type {((inputs: Emails_Notify_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_preview(inputs)
	if (locale === "de") return de_emails_notify_preview(inputs)
	if (locale === "fr") return fr_emails_notify_preview(inputs)
	if (locale === "it") return it_emails_notify_preview(inputs)
	if (locale === "nl") return nl_emails_notify_preview(inputs)
	if (locale === "pl") return pl_emails_notify_preview(inputs)
	if (locale === "pt") return pt_emails_notify_preview(inputs)
	if (locale === "ru") return ru_emails_notify_preview(inputs)
	if (locale === "sv") return sv_emails_notify_preview(inputs)
	if (locale === "tr") return tr_emails_notify_preview(inputs)
	if (locale === "zh") return zh_emails_notify_preview(inputs)
	if (locale === "ja") return ja_emails_notify_preview(inputs)
	return en_emails_notify_preview(inputs)
});
