/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Emails_Notify_Daily_SubjectInputs */

const en_emails_notify_daily_subject = /** @type {(inputs: Emails_Notify_Daily_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Your daily SOTF Mods digest: ${count__number} signal`);
	return /** @type {LocalizedString} */ (`Your daily SOTF Mods digest: ${count__number} signals`)
	
};

const es_emails_notify_daily_subject = /** @type {(inputs: Emails_Notify_Daily_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Tu resumen diario de SOTF Mods: ${count__number} señal`);
	return /** @type {LocalizedString} */ (`Tu resumen diario de SOTF Mods: ${count__number} señales`)
	
};

const de_emails_notify_daily_subject = /** @type {(inputs: Emails_Notify_Daily_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Deine tägliche SOTF-Mods-Zusammenfassung: ${count__number} Signal`);
	return /** @type {LocalizedString} */ (`Deine tägliche SOTF-Mods-Zusammenfassung: ${count__number} Signale`)
	
};

const fr_emails_notify_daily_subject = /** @type {(inputs: Emails_Notify_Daily_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Votre résumé quotidien SOTF Mods : ${count__number} signal`);
	return /** @type {LocalizedString} */ (`Votre résumé quotidien SOTF Mods : ${count__number} signaux`)
	
};

const it_emails_notify_daily_subject = /** @type {(inputs: Emails_Notify_Daily_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Il tuo riepilogo giornaliero di SOTF Mods: ${count__number} segnale`);
	return /** @type {LocalizedString} */ (`Il tuo riepilogo giornaliero di SOTF Mods: ${count__number} segnali`)
	
};

const nl_emails_notify_daily_subject = /** @type {(inputs: Emails_Notify_Daily_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Je dagelijkse SOTF Mods-overzicht: ${count__number} signaal`);
	return /** @type {LocalizedString} */ (`Je dagelijkse SOTF Mods-overzicht: ${count__number} signalen`)
	
};

const pl_emails_notify_daily_subject = /** @type {(inputs: Emails_Notify_Daily_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Twoje dzienne podsumowanie SOTF Mods: ${count__number} sygnał`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Twoje dzienne podsumowanie SOTF Mods: ${count__number} sygnały`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Twoje dzienne podsumowanie SOTF Mods: ${count__number} sygnałów`);
	return /** @type {LocalizedString} */ (`Twoje dzienne podsumowanie SOTF Mods: ${count__number} sygnału`)
	
};

const pt_emails_notify_daily_subject = /** @type {(inputs: Emails_Notify_Daily_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Seu resumo diário do SOTF Mods: ${count__number} sinal`);
	return /** @type {LocalizedString} */ (`Seu resumo diário do SOTF Mods: ${count__number} sinais`)
	
};

const ru_emails_notify_daily_subject = /** @type {(inputs: Emails_Notify_Daily_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ваша ежедневная сводка SOTF Mods: ${count__number} сигнал`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Ваша ежедневная сводка SOTF Mods: ${count__number} сигнала`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Ваша ежедневная сводка SOTF Mods: ${count__number} сигналов`);
	return /** @type {LocalizedString} */ (`Ваша ежедневная сводка SOTF Mods: ${count__number} сигнала`)
	
};

const sv_emails_notify_daily_subject = /** @type {(inputs: Emails_Notify_Daily_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Din dagliga SOTF Mods-sammanfattning: ${count__number} signal`);
	return /** @type {LocalizedString} */ (`Din dagliga SOTF Mods-sammanfattning: ${count__number} signaler`)
	
};

const tr_emails_notify_daily_subject = /** @type {(inputs: Emails_Notify_Daily_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Günlük SOTF Mods özetin: ${count__number} sinyal`);
	return /** @type {LocalizedString} */ (`Günlük SOTF Mods özetin: ${count__number} sinyal`)
	
};

const zh_emails_notify_daily_subject = /** @type {(inputs: Emails_Notify_Daily_SubjectInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`你的 SOTF Mods 每日摘要：${count__number} 条信号`)
};

const ja_emails_notify_daily_subject = /** @type {(inputs: Emails_Notify_Daily_SubjectInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`SOTF Mods デイリーダイジェスト：${count__number} 件のシグナル`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Your daily SOTF Mods digest: {count__number} signal" |
* | * | "Your daily SOTF Mods digest: {count__number} signals" |
*
* @param {Emails_Notify_Daily_SubjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_daily_subject = /** @type {((inputs: Emails_Notify_Daily_SubjectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Daily_SubjectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_daily_subject(inputs)
	if (locale === "de") return de_emails_notify_daily_subject(inputs)
	if (locale === "fr") return fr_emails_notify_daily_subject(inputs)
	if (locale === "it") return it_emails_notify_daily_subject(inputs)
	if (locale === "nl") return nl_emails_notify_daily_subject(inputs)
	if (locale === "pl") return pl_emails_notify_daily_subject(inputs)
	if (locale === "pt") return pt_emails_notify_daily_subject(inputs)
	if (locale === "ru") return ru_emails_notify_daily_subject(inputs)
	if (locale === "sv") return sv_emails_notify_daily_subject(inputs)
	if (locale === "tr") return tr_emails_notify_daily_subject(inputs)
	if (locale === "zh") return zh_emails_notify_daily_subject(inputs)
	if (locale === "ja") return ja_emails_notify_daily_subject(inputs)
	return en_emails_notify_daily_subject(inputs)
});
