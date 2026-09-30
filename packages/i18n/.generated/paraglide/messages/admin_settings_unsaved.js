/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Settings_UnsavedInputs */

const en_admin_settings_unsaved = /** @type {(inputs: Admin_Settings_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unsaved changes`)
};

const es_admin_settings_unsaved = /** @type {(inputs: Admin_Settings_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambios sin guardar`)
};

const de_admin_settings_unsaved = /** @type {(inputs: Admin_Settings_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ungespeicherte Änderungen`)
};

const fr_admin_settings_unsaved = /** @type {(inputs: Admin_Settings_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifications non enregistrées`)
};

const it_admin_settings_unsaved = /** @type {(inputs: Admin_Settings_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifiche non salvate`)
};

const nl_admin_settings_unsaved = /** @type {(inputs: Admin_Settings_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet-opgeslagen wijzigingen`)
};

const pl_admin_settings_unsaved = /** @type {(inputs: Admin_Settings_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niezapisane zmiany`)
};

const pt_admin_settings_unsaved = /** @type {(inputs: Admin_Settings_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alterações não salvas`)
};

const ru_admin_settings_unsaved = /** @type {(inputs: Admin_Settings_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Есть несохранённые изменения`)
};

const sv_admin_settings_unsaved = /** @type {(inputs: Admin_Settings_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Osparade ändringar`)
};

const tr_admin_settings_unsaved = /** @type {(inputs: Admin_Settings_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydedilmemiş değişiklikler`)
};

const zh_admin_settings_unsaved = /** @type {(inputs: Admin_Settings_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有未保存的更改`)
};

const ja_admin_settings_unsaved = /** @type {(inputs: Admin_Settings_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未保存の変更があります`)
};

/**
* | output |
* | --- |
* | "Unsaved changes" |
*
* @param {Admin_Settings_UnsavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_settings_unsaved = /** @type {((inputs?: Admin_Settings_UnsavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Settings_UnsavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_settings_unsaved(inputs)
	if (locale === "de") return de_admin_settings_unsaved(inputs)
	if (locale === "fr") return fr_admin_settings_unsaved(inputs)
	if (locale === "it") return it_admin_settings_unsaved(inputs)
	if (locale === "nl") return nl_admin_settings_unsaved(inputs)
	if (locale === "pl") return pl_admin_settings_unsaved(inputs)
	if (locale === "pt") return pt_admin_settings_unsaved(inputs)
	if (locale === "ru") return ru_admin_settings_unsaved(inputs)
	if (locale === "sv") return sv_admin_settings_unsaved(inputs)
	if (locale === "tr") return tr_admin_settings_unsaved(inputs)
	if (locale === "zh") return zh_admin_settings_unsaved(inputs)
	if (locale === "ja") return ja_admin_settings_unsaved(inputs)
	return en_admin_settings_unsaved(inputs)
});
