/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_SomeoneInputs */

const en_emails_notify_someone = /** @type {(inputs: Emails_Notify_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Someone`)
};

const es_emails_notify_someone = /** @type {(inputs: Emails_Notify_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguien`)
};

const de_emails_notify_someone = /** @type {(inputs: Emails_Notify_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jemand`)
};

const fr_emails_notify_someone = /** @type {(inputs: Emails_Notify_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelqu’un`)
};

const it_emails_notify_someone = /** @type {(inputs: Emails_Notify_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcuno`)
};

const nl_emails_notify_someone = /** @type {(inputs: Emails_Notify_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iemand`)
};

const pl_emails_notify_someone = /** @type {(inputs: Emails_Notify_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ktoś`)
};

const pt_emails_notify_someone = /** @type {(inputs: Emails_Notify_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguém`)
};

const ru_emails_notify_someone = /** @type {(inputs: Emails_Notify_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кто-то`)
};

const sv_emails_notify_someone = /** @type {(inputs: Emails_Notify_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Någon`)
};

const tr_emails_notify_someone = /** @type {(inputs: Emails_Notify_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biri`)
};

const zh_emails_notify_someone = /** @type {(inputs: Emails_Notify_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有人`)
};

const ja_emails_notify_someone = /** @type {(inputs: Emails_Notify_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`誰か`)
};

/**
* | output |
* | --- |
* | "Someone" |
*
* @param {Emails_Notify_SomeoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_someone = /** @type {((inputs?: Emails_Notify_SomeoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_SomeoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_someone(inputs)
	if (locale === "de") return de_emails_notify_someone(inputs)
	if (locale === "fr") return fr_emails_notify_someone(inputs)
	if (locale === "it") return it_emails_notify_someone(inputs)
	if (locale === "nl") return nl_emails_notify_someone(inputs)
	if (locale === "pl") return pl_emails_notify_someone(inputs)
	if (locale === "pt") return pt_emails_notify_someone(inputs)
	if (locale === "ru") return ru_emails_notify_someone(inputs)
	if (locale === "sv") return sv_emails_notify_someone(inputs)
	if (locale === "tr") return tr_emails_notify_someone(inputs)
	if (locale === "zh") return zh_emails_notify_someone(inputs)
	if (locale === "ja") return ja_emails_notify_someone(inputs)
	return en_emails_notify_someone(inputs)
});
