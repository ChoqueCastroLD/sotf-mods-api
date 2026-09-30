/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Emails_Notify_GreetingInputs */

const en_emails_notify_greeting = /** @type {(inputs: Emails_Notify_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hi ${i?.name},`)
};

const es_emails_notify_greeting = /** @type {(inputs: Emails_Notify_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hola, ${i?.name}:`)
};

const de_emails_notify_greeting = /** @type {(inputs: Emails_Notify_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hallo ${i?.name},`)
};

const fr_emails_notify_greeting = /** @type {(inputs: Emails_Notify_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bonjour ${i?.name},`)
};

const it_emails_notify_greeting = /** @type {(inputs: Emails_Notify_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ciao ${i?.name},`)
};

const nl_emails_notify_greeting = /** @type {(inputs: Emails_Notify_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hoi ${i?.name},`)
};

const pl_emails_notify_greeting = /** @type {(inputs: Emails_Notify_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cześć ${i?.name},`)
};

const pt_emails_notify_greeting = /** @type {(inputs: Emails_Notify_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Olá, ${i?.name}!`)
};

const ru_emails_notify_greeting = /** @type {(inputs: Emails_Notify_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Привет, ${i?.name}!`)
};

const sv_emails_notify_greeting = /** @type {(inputs: Emails_Notify_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hej ${i?.name},`)
};

const tr_emails_notify_greeting = /** @type {(inputs: Emails_Notify_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Merhaba ${i?.name},`)
};

const zh_emails_notify_greeting = /** @type {(inputs: Emails_Notify_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}，你好：`)
};

const ja_emails_notify_greeting = /** @type {(inputs: Emails_Notify_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} さん、こんにちは。`)
};

/**
* | output |
* | --- |
* | "Hi {name}," |
*
* @param {Emails_Notify_GreetingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_greeting = /** @type {((inputs: Emails_Notify_GreetingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_GreetingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_greeting(inputs)
	if (locale === "de") return de_emails_notify_greeting(inputs)
	if (locale === "fr") return fr_emails_notify_greeting(inputs)
	if (locale === "it") return it_emails_notify_greeting(inputs)
	if (locale === "nl") return nl_emails_notify_greeting(inputs)
	if (locale === "pl") return pl_emails_notify_greeting(inputs)
	if (locale === "pt") return pt_emails_notify_greeting(inputs)
	if (locale === "ru") return ru_emails_notify_greeting(inputs)
	if (locale === "sv") return sv_emails_notify_greeting(inputs)
	if (locale === "tr") return tr_emails_notify_greeting(inputs)
	if (locale === "zh") return zh_emails_notify_greeting(inputs)
	if (locale === "ja") return ja_emails_notify_greeting(inputs)
	return en_emails_notify_greeting(inputs)
});
