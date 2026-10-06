/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Console_Signals_UnreadInputs */

const en_console_signals_unread = /** @type {(inputs: Console_Signals_UnreadInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Notifications, none unread`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Notifications, ${count__number} unread`);
	return /** @type {LocalizedString} */ (`Notifications, ${count__number} unread`)
	
};

const es_console_signals_unread = /** @type {(inputs: Console_Signals_UnreadInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Notificaciones, ninguna sin leer`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Notificaciones, ${count__number} sin leer`);
	return /** @type {LocalizedString} */ (`Notificaciones, ${count__number} sin leer`)
	
};

const de_console_signals_unread = /** @type {(inputs: Console_Signals_UnreadInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Benachrichtigungen, nichts ungelesen`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Benachrichtigungen, ${count__number} ungelesen`);
	return /** @type {LocalizedString} */ (`Benachrichtigungen, ${count__number} ungelesen`)
	
};

const fr_console_signals_unread = /** @type {(inputs: Console_Signals_UnreadInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Notifications, aucune non lue`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Notifications, ${count__number} non lue`);
	return /** @type {LocalizedString} */ (`Notifications, ${count__number} non lues`)
	
};

const it_console_signals_unread = /** @type {(inputs: Console_Signals_UnreadInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Notifiche, nessuna da leggere`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Notifiche, ${count__number} da leggere`);
	return /** @type {LocalizedString} */ (`Notifiche, ${count__number} da leggere`)
	
};

const nl_console_signals_unread = /** @type {(inputs: Console_Signals_UnreadInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Meldingen, niets ongelezen`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Meldingen, ${count__number} ongelezen`);
	return /** @type {LocalizedString} */ (`Meldingen, ${count__number} ongelezen`)
	
};

const pl_console_signals_unread = /** @type {(inputs: Console_Signals_UnreadInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Powiadomienia, brak nieprzeczytanych`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Powiadomienia, ${count__number} nieprzeczytane`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Powiadomienia, ${count__number} nieprzeczytane`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Powiadomienia, ${count__number} nieprzeczytanych`);
	return /** @type {LocalizedString} */ (`Powiadomienia, ${count__number} nieprzeczytanego`)
	
};

const pt_console_signals_unread = /** @type {(inputs: Console_Signals_UnreadInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Notificações, nenhuma não lida`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Notificações, ${count__number} não lida`);
	return /** @type {LocalizedString} */ (`Notificações, ${count__number} não lidas`)
	
};

const ru_console_signals_unread = /** @type {(inputs: Console_Signals_UnreadInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Уведомления, непрочитанных нет`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Уведомления, ${count__number} непрочитанное`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Уведомления, ${count__number} непрочитанных`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Уведомления, ${count__number} непрочитанных`);
	return /** @type {LocalizedString} */ (`Уведомления, ${count__number} непрочитанного`)
	
};

const sv_console_signals_unread = /** @type {(inputs: Console_Signals_UnreadInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Aviseringar, inga olästa`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Aviseringar, ${count__number} oläst`);
	return /** @type {LocalizedString} */ (`Aviseringar, ${count__number} olästa`)
	
};

const tr_console_signals_unread = /** @type {(inputs: Console_Signals_UnreadInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Bildirimler, okunmamış yok`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Bildirimler, ${count__number} okunmamış`);
	return /** @type {LocalizedString} */ (`Bildirimler, ${count__number} okunmamış`)
	
};

const zh_console_signals_unread = /** @type {(inputs: Console_Signals_UnreadInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`通知，无未读`);
	return /** @type {LocalizedString} */ (`通知，${count__number} 条未读`)
	
};

const ja_console_signals_unread = /** @type {(inputs: Console_Signals_UnreadInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`通知、未読なし`);
	return /** @type {LocalizedString} */ (`通知、未読 ${count__number} 件`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "Notifications, none unread" |
* | * | "one" | "Notifications, {count__number} unread" |
* | * | * | "Notifications, {count__number} unread" |
*
* @param {Console_Signals_UnreadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_signals_unread = /** @type {((inputs: Console_Signals_UnreadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Signals_UnreadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_signals_unread(inputs)
	if (locale === "de") return de_console_signals_unread(inputs)
	if (locale === "fr") return fr_console_signals_unread(inputs)
	if (locale === "it") return it_console_signals_unread(inputs)
	if (locale === "nl") return nl_console_signals_unread(inputs)
	if (locale === "pl") return pl_console_signals_unread(inputs)
	if (locale === "pt") return pt_console_signals_unread(inputs)
	if (locale === "ru") return ru_console_signals_unread(inputs)
	if (locale === "sv") return sv_console_signals_unread(inputs)
	if (locale === "tr") return tr_console_signals_unread(inputs)
	if (locale === "zh") return zh_console_signals_unread(inputs)
	if (locale === "ja") return ja_console_signals_unread(inputs)
	return en_console_signals_unread(inputs)
});
