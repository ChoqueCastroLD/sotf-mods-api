/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_Daily_HeadingInputs */

const en_emails_notify_daily_heading = /** @type {(inputs: Emails_Notify_Daily_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your daily digest`)
};

const es_emails_notify_daily_heading = /** @type {(inputs: Emails_Notify_Daily_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu resumen diario`)
};

const de_emails_notify_daily_heading = /** @type {(inputs: Emails_Notify_Daily_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine tägliche Zusammenfassung`)
};

const fr_emails_notify_daily_heading = /** @type {(inputs: Emails_Notify_Daily_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre résumé quotidien`)
};

const it_emails_notify_daily_heading = /** @type {(inputs: Emails_Notify_Daily_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo riepilogo giornaliero`)
};

const nl_emails_notify_daily_heading = /** @type {(inputs: Emails_Notify_Daily_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je dagelijkse overzicht`)
};

const pl_emails_notify_daily_heading = /** @type {(inputs: Emails_Notify_Daily_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje dzienne podsumowanie`)
};

const pt_emails_notify_daily_heading = /** @type {(inputs: Emails_Notify_Daily_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu resumo diário`)
};

const ru_emails_notify_daily_heading = /** @type {(inputs: Emails_Notify_Daily_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваша ежедневная сводка`)
};

const sv_emails_notify_daily_heading = /** @type {(inputs: Emails_Notify_Daily_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din dagliga sammanfattning`)
};

const tr_emails_notify_daily_heading = /** @type {(inputs: Emails_Notify_Daily_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Günlük özetin`)
};

const zh_emails_notify_daily_heading = /** @type {(inputs: Emails_Notify_Daily_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的每日摘要`)
};

const ja_emails_notify_daily_heading = /** @type {(inputs: Emails_Notify_Daily_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`デイリーダイジェスト`)
};

/**
* | output |
* | --- |
* | "Your daily digest" |
*
* @param {Emails_Notify_Daily_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_daily_heading = /** @type {((inputs?: Emails_Notify_Daily_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Daily_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_daily_heading(inputs)
	if (locale === "de") return de_emails_notify_daily_heading(inputs)
	if (locale === "fr") return fr_emails_notify_daily_heading(inputs)
	if (locale === "it") return it_emails_notify_daily_heading(inputs)
	if (locale === "nl") return nl_emails_notify_daily_heading(inputs)
	if (locale === "pl") return pl_emails_notify_daily_heading(inputs)
	if (locale === "pt") return pt_emails_notify_daily_heading(inputs)
	if (locale === "ru") return ru_emails_notify_daily_heading(inputs)
	if (locale === "sv") return sv_emails_notify_daily_heading(inputs)
	if (locale === "tr") return tr_emails_notify_daily_heading(inputs)
	if (locale === "zh") return zh_emails_notify_daily_heading(inputs)
	if (locale === "ja") return ja_emails_notify_daily_heading(inputs)
	return en_emails_notify_daily_heading(inputs)
});
