/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Emails_Notify_Instant_SubjectInputs */

const en_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`New notification on SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} new notifications on SOTF Mods`)
	
};

const es_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nueva notificación en SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} notificaciones nuevas en SOTF Mods`)
	
};

const de_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Neue Benachrichtigung auf SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} neue Benachrichtigungen auf SOTF Mods`)
	
};

const fr_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nouvelle notification sur SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} nouvelles notifications sur SOTF Mods`)
	
};

const it_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nuova notifica su SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} nuove notifiche su SOTF Mods`)
	
};

const nl_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nieuwe melding op SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} nieuwe meldingen op SOTF Mods`)
	
};

const pl_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nowe powiadomienie w SOTF Mods`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} nowe powiadomienia w SOTF Mods`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} nowych powiadomień w SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} nowego powiadomienia w SOTF Mods`)
	
};

const pt_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nova notificação no SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} novas notificações no SOTF Mods`)
	
};

const ru_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} новое уведомление на SOTF Mods`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} новых уведомления на SOTF Mods`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} новых уведомлений на SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} нового уведомления на SOTF Mods`)
	
};

const sv_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ny avisering på SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} nya aviseringar på SOTF Mods`)
	
};

const tr_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`SOTF Mods’ta yeni bildirim`);
	return /** @type {LocalizedString} */ (`SOTF Mods’ta ${count__number} yeni bildirim`)
	
};

const zh_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`SOTF Mods 上有 ${count__number} 条新通知`)
};

const ja_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`SOTF Mods で ${count__number} 件の新しい通知`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "New notification on SOTF Mods" |
* | * | "{count__number} new notifications on SOTF Mods" |
*
* @param {Emails_Notify_Instant_SubjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_instant_subject = /** @type {((inputs: Emails_Notify_Instant_SubjectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Instant_SubjectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_instant_subject(inputs)
	if (locale === "de") return de_emails_notify_instant_subject(inputs)
	if (locale === "fr") return fr_emails_notify_instant_subject(inputs)
	if (locale === "it") return it_emails_notify_instant_subject(inputs)
	if (locale === "nl") return nl_emails_notify_instant_subject(inputs)
	if (locale === "pl") return pl_emails_notify_instant_subject(inputs)
	if (locale === "pt") return pt_emails_notify_instant_subject(inputs)
	if (locale === "ru") return ru_emails_notify_instant_subject(inputs)
	if (locale === "sv") return sv_emails_notify_instant_subject(inputs)
	if (locale === "tr") return tr_emails_notify_instant_subject(inputs)
	if (locale === "zh") return zh_emails_notify_instant_subject(inputs)
	if (locale === "ja") return ja_emails_notify_instant_subject(inputs)
	return en_emails_notify_instant_subject(inputs)
});
