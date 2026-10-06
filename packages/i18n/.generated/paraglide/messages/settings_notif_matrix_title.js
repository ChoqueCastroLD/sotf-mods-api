/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Matrix_TitleInputs */

const en_settings_notif_matrix_title = /** @type {(inputs: Settings_Notif_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications and emails`)
};

const es_settings_notif_matrix_title = /** @type {(inputs: Settings_Notif_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificaciones y correos`)
};

const de_settings_notif_matrix_title = /** @type {(inputs: Settings_Notif_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benachrichtigungen und E-Mails`)
};

const fr_settings_notif_matrix_title = /** @type {(inputs: Settings_Notif_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications et e-mails`)
};

const it_settings_notif_matrix_title = /** @type {(inputs: Settings_Notif_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifiche ed email`)
};

const nl_settings_notif_matrix_title = /** @type {(inputs: Settings_Notif_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldingen en e-mails`)
};

const pl_settings_notif_matrix_title = /** @type {(inputs: Settings_Notif_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powiadomienia i e-maile`)
};

const pt_settings_notif_matrix_title = /** @type {(inputs: Settings_Notif_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificações e e-mails`)
};

const ru_settings_notif_matrix_title = /** @type {(inputs: Settings_Notif_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уведомления и письма`)
};

const sv_settings_notif_matrix_title = /** @type {(inputs: Settings_Notif_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviseringar och mejl`)
};

const tr_settings_notif_matrix_title = /** @type {(inputs: Settings_Notif_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirimler ve e-postalar`)
};

const zh_settings_notif_matrix_title = /** @type {(inputs: Settings_Notif_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知和邮件`)
};

const ja_settings_notif_matrix_title = /** @type {(inputs: Settings_Notif_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知とメール`)
};

/**
* | output |
* | --- |
* | "Notifications and emails" |
*
* @param {Settings_Notif_Matrix_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_matrix_title = /** @type {((inputs?: Settings_Notif_Matrix_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Matrix_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_matrix_title(inputs)
	if (locale === "de") return de_settings_notif_matrix_title(inputs)
	if (locale === "fr") return fr_settings_notif_matrix_title(inputs)
	if (locale === "it") return it_settings_notif_matrix_title(inputs)
	if (locale === "nl") return nl_settings_notif_matrix_title(inputs)
	if (locale === "pl") return pl_settings_notif_matrix_title(inputs)
	if (locale === "pt") return pt_settings_notif_matrix_title(inputs)
	if (locale === "ru") return ru_settings_notif_matrix_title(inputs)
	if (locale === "sv") return sv_settings_notif_matrix_title(inputs)
	if (locale === "tr") return tr_settings_notif_matrix_title(inputs)
	if (locale === "zh") return zh_settings_notif_matrix_title(inputs)
	if (locale === "ja") return ja_settings_notif_matrix_title(inputs)
	return en_settings_notif_matrix_title(inputs)
});
