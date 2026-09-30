/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Col_EmailInputs */

const en_settings_notif_col_email = /** @type {(inputs: Settings_Notif_Col_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email`)
};

const es_settings_notif_col_email = /** @type {(inputs: Settings_Notif_Col_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Correo`)
};

const de_settings_notif_col_email = /** @type {(inputs: Settings_Notif_Col_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-Mail`)
};

const fr_settings_notif_col_email = /** @type {(inputs: Settings_Notif_Col_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail`)
};

const it_settings_notif_col_email = /** @type {(inputs: Settings_Notif_Col_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email`)
};

const nl_settings_notif_col_email = /** @type {(inputs: Settings_Notif_Col_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail`)
};

const pl_settings_notif_col_email = /** @type {(inputs: Settings_Notif_Col_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail`)
};

const pt_settings_notif_col_email = /** @type {(inputs: Settings_Notif_Col_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail`)
};

const ru_settings_notif_col_email = /** @type {(inputs: Settings_Notif_Col_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Почта`)
};

const sv_settings_notif_col_email = /** @type {(inputs: Settings_Notif_Col_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-post`)
};

const tr_settings_notif_col_email = /** @type {(inputs: Settings_Notif_Col_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-posta`)
};

const zh_settings_notif_col_email = /** @type {(inputs: Settings_Notif_Col_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邮件`)
};

const ja_settings_notif_col_email = /** @type {(inputs: Settings_Notif_Col_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メール`)
};

/**
* | output |
* | --- |
* | "Email" |
*
* @param {Settings_Notif_Col_EmailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_col_email = /** @type {((inputs?: Settings_Notif_Col_EmailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Col_EmailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_col_email(inputs)
	if (locale === "de") return de_settings_notif_col_email(inputs)
	if (locale === "fr") return fr_settings_notif_col_email(inputs)
	if (locale === "it") return it_settings_notif_col_email(inputs)
	if (locale === "nl") return nl_settings_notif_col_email(inputs)
	if (locale === "pl") return pl_settings_notif_col_email(inputs)
	if (locale === "pt") return pt_settings_notif_col_email(inputs)
	if (locale === "ru") return ru_settings_notif_col_email(inputs)
	if (locale === "sv") return sv_settings_notif_col_email(inputs)
	if (locale === "tr") return tr_settings_notif_col_email(inputs)
	if (locale === "zh") return zh_settings_notif_col_email(inputs)
	if (locale === "ja") return ja_settings_notif_col_email(inputs)
	return en_settings_notif_col_email(inputs)
});
