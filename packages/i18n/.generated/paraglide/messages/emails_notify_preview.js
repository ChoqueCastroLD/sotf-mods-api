/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, first: NonNullable<unknown> }} Emails_Notify_PreviewInputs */

const en_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} new signal, starting with: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} new signals, starting with: ${i?.first}`)
	
};

const es_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} señal nueva; la primera: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} señales nuevas; la primera: ${i?.first}`)
	
};

const de_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} neues Signal, zuerst: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} neue Signale, zuerst: ${i?.first}`)
	
};

const fr_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nouveau signal, à commencer par : ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} nouveaux signaux, à commencer par : ${i?.first}`)
	
};

const it_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nuovo segnale, a partire da: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} nuovi segnali, a partire da: ${i?.first}`)
	
};

const nl_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nieuw signaal, te beginnen met: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} nieuwe signalen, te beginnen met: ${i?.first}`)
	
};

const pl_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nowy sygnał, a pierwszy: ${i?.first}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} nowe sygnały, a pierwszy: ${i?.first}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} nowych sygnałów, a pierwszy: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} nowego sygnału, a pierwszy: ${i?.first}`)
	
};

const pt_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} novo sinal, começando por: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} novos sinais, começando por: ${i?.first}`)
	
};

const ru_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} новый сигнал, первый: ${i?.first}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} новых сигнала, первый: ${i?.first}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} новых сигналов, первый: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} нового сигнала, первый: ${i?.first}`)
	
};

const sv_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ny signal, först: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} nya signaler, först: ${i?.first}`)
	
};

const tr_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} yeni sinyal, ilki: ${i?.first}`);
	return /** @type {LocalizedString} */ (`${count__number} yeni sinyal, ilki: ${i?.first}`)
	
};

const zh_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 条新信号，首先是：${i?.first}`)
};

const ja_emails_notify_preview = /** @type {(inputs: Emails_Notify_PreviewInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件の新しいシグナル。最初は：${i?.first}`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} new signal, starting with: {first}" |
* | * | "{count__number} new signals, starting with: {first}" |
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
