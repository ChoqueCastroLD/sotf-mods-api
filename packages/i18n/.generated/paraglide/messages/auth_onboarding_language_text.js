/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Onboarding_Language_TextInputs */

const en_auth_onboarding_language_text = /** @type {(inputs: Auth_Onboarding_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick the language for the site and your emails.`)
};

const es_auth_onboarding_language_text = /** @type {(inputs: Auth_Onboarding_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige el idioma del sitio y de tus emails.`)
};

const de_auth_onboarding_language_text = /** @type {(inputs: Auth_Onboarding_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle die Sprache für die Seite und deine E-Mails.`)
};

const fr_auth_onboarding_language_text = /** @type {(inputs: Auth_Onboarding_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez la langue du site et de vos e-mails.`)
};

const it_auth_onboarding_language_text = /** @type {(inputs: Auth_Onboarding_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli la lingua del sito e delle tue email.`)
};

const nl_auth_onboarding_language_text = /** @type {(inputs: Auth_Onboarding_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies de taal van de site en van je e-mails.`)
};

const pl_auth_onboarding_language_text = /** @type {(inputs: Auth_Onboarding_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz język strony i wiadomości e-mail.`)
};

const pt_auth_onboarding_language_text = /** @type {(inputs: Auth_Onboarding_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha o idioma do site e dos seus e-mails.`)
};

const ru_auth_onboarding_language_text = /** @type {(inputs: Auth_Onboarding_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите язык сайта и писем.`)
};

const sv_auth_onboarding_language_text = /** @type {(inputs: Auth_Onboarding_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj språk för webbplatsen och dina mejl.`)
};

const tr_auth_onboarding_language_text = /** @type {(inputs: Auth_Onboarding_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sitenin ve e-postalarının dilini seç.`)
};

const zh_auth_onboarding_language_text = /** @type {(inputs: Auth_Onboarding_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择网站和邮件使用的语言。`)
};

const ja_auth_onboarding_language_text = /** @type {(inputs: Auth_Onboarding_Language_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイトとメールの言語を選んでください。`)
};

/**
* | output |
* | --- |
* | "Pick the language for the site and your emails." |
*
* @param {Auth_Onboarding_Language_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_onboarding_language_text = /** @type {((inputs?: Auth_Onboarding_Language_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Onboarding_Language_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_onboarding_language_text(inputs)
	if (locale === "de") return de_auth_onboarding_language_text(inputs)
	if (locale === "fr") return fr_auth_onboarding_language_text(inputs)
	if (locale === "it") return it_auth_onboarding_language_text(inputs)
	if (locale === "nl") return nl_auth_onboarding_language_text(inputs)
	if (locale === "pl") return pl_auth_onboarding_language_text(inputs)
	if (locale === "pt") return pt_auth_onboarding_language_text(inputs)
	if (locale === "ru") return ru_auth_onboarding_language_text(inputs)
	if (locale === "sv") return sv_auth_onboarding_language_text(inputs)
	if (locale === "tr") return tr_auth_onboarding_language_text(inputs)
	if (locale === "zh") return zh_auth_onboarding_language_text(inputs)
	if (locale === "ja") return ja_auth_onboarding_language_text(inputs)
	return en_auth_onboarding_language_text(inputs)
});
