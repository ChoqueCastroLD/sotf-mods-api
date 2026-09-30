/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_Creator_HeadingInputs */

const en_emails_notify_creator_heading = /** @type {(inputs: Emails_Notify_Creator_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your week in numbers`)
};

const es_emails_notify_creator_heading = /** @type {(inputs: Emails_Notify_Creator_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu semana en cifras`)
};

const de_emails_notify_creator_heading = /** @type {(inputs: Emails_Notify_Creator_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Woche in Zahlen`)
};

const fr_emails_notify_creator_heading = /** @type {(inputs: Emails_Notify_Creator_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre semaine en chiffres`)
};

const it_emails_notify_creator_heading = /** @type {(inputs: Emails_Notify_Creator_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua settimana in numeri`)
};

const nl_emails_notify_creator_heading = /** @type {(inputs: Emails_Notify_Creator_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je week in cijfers`)
};

const pl_emails_notify_creator_heading = /** @type {(inputs: Emails_Notify_Creator_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój tydzień w liczbach`)
};

const pt_emails_notify_creator_heading = /** @type {(inputs: Emails_Notify_Creator_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua semana em números`)
};

const ru_emails_notify_creator_heading = /** @type {(inputs: Emails_Notify_Creator_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваша неделя в цифрах`)
};

const sv_emails_notify_creator_heading = /** @type {(inputs: Emails_Notify_Creator_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din vecka i siffror`)
};

const tr_emails_notify_creator_heading = /** @type {(inputs: Emails_Notify_Creator_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rakamlarla haftan`)
};

const zh_emails_notify_creator_heading = /** @type {(inputs: Emails_Notify_Creator_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你这一周的数据`)
};

const ja_emails_notify_creator_heading = /** @type {(inputs: Emails_Notify_Creator_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週の数字`)
};

/**
* | output |
* | --- |
* | "Your week in numbers" |
*
* @param {Emails_Notify_Creator_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_creator_heading = /** @type {((inputs?: Emails_Notify_Creator_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_creator_heading(inputs)
	if (locale === "de") return de_emails_notify_creator_heading(inputs)
	if (locale === "fr") return fr_emails_notify_creator_heading(inputs)
	if (locale === "it") return it_emails_notify_creator_heading(inputs)
	if (locale === "nl") return nl_emails_notify_creator_heading(inputs)
	if (locale === "pl") return pl_emails_notify_creator_heading(inputs)
	if (locale === "pt") return pt_emails_notify_creator_heading(inputs)
	if (locale === "ru") return ru_emails_notify_creator_heading(inputs)
	if (locale === "sv") return sv_emails_notify_creator_heading(inputs)
	if (locale === "tr") return tr_emails_notify_creator_heading(inputs)
	if (locale === "zh") return zh_emails_notify_creator_heading(inputs)
	if (locale === "ja") return ja_emails_notify_creator_heading(inputs)
	return en_emails_notify_creator_heading(inputs)
});
