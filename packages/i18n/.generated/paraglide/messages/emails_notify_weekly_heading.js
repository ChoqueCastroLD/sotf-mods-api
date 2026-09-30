/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_Weekly_HeadingInputs */

const en_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your week on the island`)
};

const es_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu semana en la isla`)
};

const de_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Woche auf der Insel`)
};

const fr_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre semaine sur l’île`)
};

const it_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua settimana sull’isola`)
};

const nl_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je week op het eiland`)
};

const pl_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój tydzień na wyspie`)
};

const pt_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua semana na ilha`)
};

const ru_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваша неделя на острове`)
};

const sv_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din vecka på ön`)
};

const tr_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adadaki haftan`)
};

const zh_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你在岛上的一周`)
};

const ja_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島での一週間`)
};

/**
* | output |
* | --- |
* | "Your week on the island" |
*
* @param {Emails_Notify_Weekly_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_weekly_heading = /** @type {((inputs?: Emails_Notify_Weekly_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Weekly_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_weekly_heading(inputs)
	if (locale === "de") return de_emails_notify_weekly_heading(inputs)
	if (locale === "fr") return fr_emails_notify_weekly_heading(inputs)
	if (locale === "it") return it_emails_notify_weekly_heading(inputs)
	if (locale === "nl") return nl_emails_notify_weekly_heading(inputs)
	if (locale === "pl") return pl_emails_notify_weekly_heading(inputs)
	if (locale === "pt") return pt_emails_notify_weekly_heading(inputs)
	if (locale === "ru") return ru_emails_notify_weekly_heading(inputs)
	if (locale === "sv") return sv_emails_notify_weekly_heading(inputs)
	if (locale === "tr") return tr_emails_notify_weekly_heading(inputs)
	if (locale === "zh") return zh_emails_notify_weekly_heading(inputs)
	if (locale === "ja") return ja_emails_notify_weekly_heading(inputs)
	return en_emails_notify_weekly_heading(inputs)
});
