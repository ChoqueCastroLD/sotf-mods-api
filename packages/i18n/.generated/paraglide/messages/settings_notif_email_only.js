/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Email_OnlyInputs */

const en_settings_notif_email_only = /** @type {(inputs: Settings_Notif_Email_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email only`)
};

const es_settings_notif_email_only = /** @type {(inputs: Settings_Notif_Email_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo por correo`)
};

const de_settings_notif_email_only = /** @type {(inputs: Settings_Notif_Email_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur per E-Mail`)
};

const fr_settings_notif_email_only = /** @type {(inputs: Settings_Notif_Email_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail uniquement`)
};

const it_settings_notif_email_only = /** @type {(inputs: Settings_Notif_Email_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo email`)
};

const nl_settings_notif_email_only = /** @type {(inputs: Settings_Notif_Email_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen e-mail`)
};

const pl_settings_notif_email_only = /** @type {(inputs: Settings_Notif_Email_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko e-mail`)
};

const pt_settings_notif_email_only = /** @type {(inputs: Settings_Notif_Email_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só por e-mail`)
};

const ru_settings_notif_email_only = /** @type {(inputs: Settings_Notif_Email_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только почта`)
};

const sv_settings_notif_email_only = /** @type {(inputs: Settings_Notif_Email_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara e-post`)
};

const tr_settings_notif_email_only = /** @type {(inputs: Settings_Notif_Email_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca e-posta`)
};

const zh_settings_notif_email_only = /** @type {(inputs: Settings_Notif_Email_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅邮件`)
};

const ja_settings_notif_email_only = /** @type {(inputs: Settings_Notif_Email_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールのみ`)
};

/**
* | output |
* | --- |
* | "Email only" |
*
* @param {Settings_Notif_Email_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_email_only = /** @type {((inputs?: Settings_Notif_Email_OnlyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Email_OnlyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_email_only(inputs)
	if (locale === "de") return de_settings_notif_email_only(inputs)
	if (locale === "fr") return fr_settings_notif_email_only(inputs)
	if (locale === "it") return it_settings_notif_email_only(inputs)
	if (locale === "nl") return nl_settings_notif_email_only(inputs)
	if (locale === "pl") return pl_settings_notif_email_only(inputs)
	if (locale === "pt") return pt_settings_notif_email_only(inputs)
	if (locale === "ru") return ru_settings_notif_email_only(inputs)
	if (locale === "sv") return sv_settings_notif_email_only(inputs)
	if (locale === "tr") return tr_settings_notif_email_only(inputs)
	if (locale === "zh") return zh_settings_notif_email_only(inputs)
	if (locale === "ja") return ja_settings_notif_email_only(inputs)
	return en_settings_notif_email_only(inputs)
});
