/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Emails_Auth_GreetingInputs */

const en_emails_auth_greeting = /** @type {(inputs: Emails_Auth_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hi ${i?.name},`)
};

const es_emails_auth_greeting = /** @type {(inputs: Emails_Auth_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hola, ${i?.name}:`)
};

const de_emails_auth_greeting = /** @type {(inputs: Emails_Auth_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hallo ${i?.name},`)
};

const fr_emails_auth_greeting = /** @type {(inputs: Emails_Auth_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bonjour ${i?.name},`)
};

const it_emails_auth_greeting = /** @type {(inputs: Emails_Auth_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ciao ${i?.name},`)
};

const nl_emails_auth_greeting = /** @type {(inputs: Emails_Auth_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hoi ${i?.name},`)
};

const pl_emails_auth_greeting = /** @type {(inputs: Emails_Auth_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cześć ${i?.name},`)
};

const pt_emails_auth_greeting = /** @type {(inputs: Emails_Auth_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Olá, ${i?.name},`)
};

const ru_emails_auth_greeting = /** @type {(inputs: Emails_Auth_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Здравствуйте, ${i?.name}!`)
};

const sv_emails_auth_greeting = /** @type {(inputs: Emails_Auth_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hej ${i?.name},`)
};

const tr_emails_auth_greeting = /** @type {(inputs: Emails_Auth_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Merhaba ${i?.name},`)
};

const zh_emails_auth_greeting = /** @type {(inputs: Emails_Auth_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}，你好：`)
};

const ja_emails_auth_greeting = /** @type {(inputs: Emails_Auth_GreetingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} さん`)
};

/**
* | output |
* | --- |
* | "Hi {name}," |
*
* @param {Emails_Auth_GreetingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_greeting = /** @type {((inputs: Emails_Auth_GreetingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_GreetingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_greeting(inputs)
	if (locale === "de") return de_emails_auth_greeting(inputs)
	if (locale === "fr") return fr_emails_auth_greeting(inputs)
	if (locale === "it") return it_emails_auth_greeting(inputs)
	if (locale === "nl") return nl_emails_auth_greeting(inputs)
	if (locale === "pl") return pl_emails_auth_greeting(inputs)
	if (locale === "pt") return pt_emails_auth_greeting(inputs)
	if (locale === "ru") return ru_emails_auth_greeting(inputs)
	if (locale === "sv") return sv_emails_auth_greeting(inputs)
	if (locale === "tr") return tr_emails_auth_greeting(inputs)
	if (locale === "zh") return zh_emails_auth_greeting(inputs)
	if (locale === "ja") return ja_emails_auth_greeting(inputs)
	return en_emails_auth_greeting(inputs)
});
