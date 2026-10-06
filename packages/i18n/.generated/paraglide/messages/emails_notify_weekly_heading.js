/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_Weekly_HeadingInputs */

const en_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your weekly digest`)
};

const es_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu resumen semanal`)
};

const de_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine wöchentliche Zusammenfassung`)
};

const fr_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre résumé hebdomadaire`)
};

const it_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo riepilogo settimanale`)
};

const nl_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je wekelijkse overzicht`)
};

const pl_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje tygodniowe podsumowanie`)
};

const pt_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu resumo semanal`)
};

const ru_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваша еженедельная сводка`)
};

const sv_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din veckosammanfattning`)
};

const tr_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haftalık özetin`)
};

const zh_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的每周摘要`)
};

const ja_emails_notify_weekly_heading = /** @type {(inputs: Emails_Notify_Weekly_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ウィークリーダイジェスト`)
};

/**
* | output |
* | --- |
* | "Your weekly digest" |
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
