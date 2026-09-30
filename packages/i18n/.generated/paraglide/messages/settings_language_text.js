/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Language_TextInputs */

const en_settings_language_text = /** @type {(inputs: Settings_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The language of the console and of the emails we send you.`)
};

const es_settings_language_text = /** @type {(inputs: Settings_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El idioma de la consola y de los correos que te enviamos.`)
};

const de_settings_language_text = /** @type {(inputs: Settings_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Sprache der Konsole und der E-Mails, die wir dir senden.`)
};

const fr_settings_language_text = /** @type {(inputs: Settings_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La langue de la console et des e-mails que nous vous envoyons.`)
};

const it_settings_language_text = /** @type {(inputs: Settings_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La lingua della console e delle email che ti inviamo.`)
};

const nl_settings_language_text = /** @type {(inputs: Settings_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De taal van de console en van de e-mails die we je sturen.`)
};

const pl_settings_language_text = /** @type {(inputs: Settings_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Język konsoli i e-maili, które do ciebie wysyłamy.`)
};

const pt_settings_language_text = /** @type {(inputs: Settings_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O idioma do console e dos e-mails que enviamos para você.`)
};

const ru_settings_language_text = /** @type {(inputs: Settings_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Язык консоли и писем, которые мы вам отправляем.`)
};

const sv_settings_language_text = /** @type {(inputs: Settings_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Språket i konsolen och i mejlen vi skickar till dig.`)
};

const tr_settings_language_text = /** @type {(inputs: Settings_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konsolun ve sana gönderdiğimiz e-postaların dili.`)
};

const zh_settings_language_text = /** @type {(inputs: Settings_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`控制台以及我们发给你的邮件所使用的语言。`)
};

const ja_settings_language_text = /** @type {(inputs: Settings_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンソールと、お送りするメールの言語です。`)
};

/**
* | output |
* | --- |
* | "The language of the console and of the emails we send you." |
*
* @param {Settings_Language_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_language_text = /** @type {((inputs?: Settings_Language_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Language_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_language_text(inputs)
	if (locale === "de") return de_settings_language_text(inputs)
	if (locale === "fr") return fr_settings_language_text(inputs)
	if (locale === "it") return it_settings_language_text(inputs)
	if (locale === "nl") return nl_settings_language_text(inputs)
	if (locale === "pl") return pl_settings_language_text(inputs)
	if (locale === "pt") return pt_settings_language_text(inputs)
	if (locale === "ru") return ru_settings_language_text(inputs)
	if (locale === "sv") return sv_settings_language_text(inputs)
	if (locale === "tr") return tr_settings_language_text(inputs)
	if (locale === "zh") return zh_settings_language_text(inputs)
	if (locale === "ja") return ja_settings_language_text(inputs)
	return en_settings_language_text(inputs)
});
