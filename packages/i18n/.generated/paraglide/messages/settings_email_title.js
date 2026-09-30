/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_TitleInputs */

const en_settings_email_title = /** @type {(inputs: Settings_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email address`)
};

const es_settings_email_title = /** @type {(inputs: Settings_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Correo electrónico`)
};

const de_settings_email_title = /** @type {(inputs: Settings_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-Mail-Adresse`)
};

const fr_settings_email_title = /** @type {(inputs: Settings_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresse e-mail`)
};

const it_settings_email_title = /** @type {(inputs: Settings_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indirizzo email`)
};

const nl_settings_email_title = /** @type {(inputs: Settings_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mailadres`)
};

const pl_settings_email_title = /** @type {(inputs: Settings_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres e-mail`)
};

const pt_settings_email_title = /** @type {(inputs: Settings_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endereço de e-mail`)
};

const ru_settings_email_title = /** @type {(inputs: Settings_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Адрес почты`)
};

const sv_settings_email_title = /** @type {(inputs: Settings_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-postadress`)
};

const tr_settings_email_title = /** @type {(inputs: Settings_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-posta adresi`)
};

const zh_settings_email_title = /** @type {(inputs: Settings_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邮箱地址`)
};

const ja_settings_email_title = /** @type {(inputs: Settings_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールアドレス`)
};

/**
* | output |
* | --- |
* | "Email address" |
*
* @param {Settings_Email_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_email_title = /** @type {((inputs?: Settings_Email_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_email_title(inputs)
	if (locale === "de") return de_settings_email_title(inputs)
	if (locale === "fr") return fr_settings_email_title(inputs)
	if (locale === "it") return it_settings_email_title(inputs)
	if (locale === "nl") return nl_settings_email_title(inputs)
	if (locale === "pl") return pl_settings_email_title(inputs)
	if (locale === "pt") return pt_settings_email_title(inputs)
	if (locale === "ru") return ru_settings_email_title(inputs)
	if (locale === "sv") return sv_settings_email_title(inputs)
	if (locale === "tr") return tr_settings_email_title(inputs)
	if (locale === "zh") return zh_settings_email_title(inputs)
	if (locale === "ja") return ja_settings_email_title(inputs)
	return en_settings_email_title(inputs)
});
