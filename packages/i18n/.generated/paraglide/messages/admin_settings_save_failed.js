/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Settings_Save_FailedInputs */

const en_admin_settings_save_failed = /** @type {(inputs: Admin_Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t save the setting`)
};

const es_admin_settings_save_failed = /** @type {(inputs: Admin_Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo guardar el ajuste`)
};

const de_admin_settings_save_failed = /** @type {(inputs: Admin_Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einstellung konnte nicht gespeichert werden`)
};

const fr_admin_settings_save_failed = /** @type {(inputs: Admin_Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’enregistrer le réglage`)
};

const it_admin_settings_save_failed = /** @type {(inputs: Admin_Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile salvare l’impostazione`)
};

const nl_admin_settings_save_failed = /** @type {(inputs: Admin_Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kon de instelling niet opslaan`)
};

const pl_admin_settings_save_failed = /** @type {(inputs: Admin_Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zapisać ustawienia`)
};

const pt_admin_settings_save_failed = /** @type {(inputs: Admin_Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível salvar a configuração`)
};

const ru_admin_settings_save_failed = /** @type {(inputs: Admin_Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось сохранить настройку`)
};

const sv_admin_settings_save_failed = /** @type {(inputs: Admin_Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte spara inställningen`)
};

const tr_admin_settings_save_failed = /** @type {(inputs: Admin_Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayar kaydedilemedi`)
};

const zh_admin_settings_save_failed = /** @type {(inputs: Admin_Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法保存设置`)
};

const ja_admin_settings_save_failed = /** @type {(inputs: Admin_Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定を保存できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t save the setting" |
*
* @param {Admin_Settings_Save_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_settings_save_failed = /** @type {((inputs?: Admin_Settings_Save_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Settings_Save_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_settings_save_failed(inputs)
	if (locale === "de") return de_admin_settings_save_failed(inputs)
	if (locale === "fr") return fr_admin_settings_save_failed(inputs)
	if (locale === "it") return it_admin_settings_save_failed(inputs)
	if (locale === "nl") return nl_admin_settings_save_failed(inputs)
	if (locale === "pl") return pl_admin_settings_save_failed(inputs)
	if (locale === "pt") return pt_admin_settings_save_failed(inputs)
	if (locale === "ru") return ru_admin_settings_save_failed(inputs)
	if (locale === "sv") return sv_admin_settings_save_failed(inputs)
	if (locale === "tr") return tr_admin_settings_save_failed(inputs)
	if (locale === "zh") return zh_admin_settings_save_failed(inputs)
	if (locale === "ja") return ja_admin_settings_save_failed(inputs)
	return en_admin_settings_save_failed(inputs)
});
