/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Emails_Notify_Instant_SubjectInputs */

const en_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`New signal on SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} new signals on SOTF Mods`)
	
};

const es_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nueva señal en SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} señales nuevas en SOTF Mods`)
	
};

const de_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Neues Signal auf SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} neue Signale auf SOTF Mods`)
	
};

const fr_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nouveau signal sur SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} nouveaux signaux sur SOTF Mods`)
	
};

const it_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nuovo segnale su SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} nuovi segnali su SOTF Mods`)
	
};

const nl_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nieuw signaal op SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} nieuwe signalen op SOTF Mods`)
	
};

const pl_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nowy sygnał w SOTF Mods`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} nowe sygnały w SOTF Mods`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} nowych sygnałów w SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} nowego sygnału w SOTF Mods`)
	
};

const pt_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Novo sinal no SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} novos sinais no SOTF Mods`)
	
};

const ru_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} новый сигнал на SOTF Mods`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} новых сигнала на SOTF Mods`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} новых сигналов на SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} нового сигнала на SOTF Mods`)
	
};

const sv_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ny signal på SOTF Mods`);
	return /** @type {LocalizedString} */ (`${count__number} nya signaler på SOTF Mods`)
	
};

const tr_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`SOTF Mods’ta yeni sinyal`);
	return /** @type {LocalizedString} */ (`SOTF Mods’ta ${count__number} yeni sinyal`)
	
};

const zh_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`SOTF Mods 上有 ${count__number} 条新信号`)
};

const ja_emails_notify_instant_subject = /** @type {(inputs: Emails_Notify_Instant_SubjectInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`SOTF Mods で ${count__number} 件の新しいシグナル`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "New signal on SOTF Mods" |
* | * | "{count__number} new signals on SOTF Mods" |
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
