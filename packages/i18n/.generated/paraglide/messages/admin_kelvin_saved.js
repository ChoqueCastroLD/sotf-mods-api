/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_SavedInputs */

const en_admin_kelvin_saved = /** @type {(inputs: Admin_Kelvin_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek settings saved`)
};

const es_admin_kelvin_saved = /** @type {(inputs: Admin_Kelvin_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes de KelvinSeek guardados`)
};

const de_admin_kelvin_saved = /** @type {(inputs: Admin_Kelvin_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek-Einstellungen gespeichert`)
};

const fr_admin_kelvin_saved = /** @type {(inputs: Admin_Kelvin_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réglages de KelvinSeek enregistrés`)
};

const it_admin_kelvin_saved = /** @type {(inputs: Admin_Kelvin_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impostazioni di KelvinSeek salvate`)
};

const nl_admin_kelvin_saved = /** @type {(inputs: Admin_Kelvin_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek-instellingen opgeslagen`)
};

const pl_admin_kelvin_saved = /** @type {(inputs: Admin_Kelvin_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano ustawienia KelvinSeek`)
};

const pt_admin_kelvin_saved = /** @type {(inputs: Admin_Kelvin_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações do KelvinSeek salvas`)
};

const ru_admin_kelvin_saved = /** @type {(inputs: Admin_Kelvin_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки KelvinSeek сохранены`)
};

const sv_admin_kelvin_saved = /** @type {(inputs: Admin_Kelvin_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek-inställningar sparade`)
};

const tr_admin_kelvin_saved = /** @type {(inputs: Admin_Kelvin_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek ayarları kaydedildi`)
};

const zh_admin_kelvin_saved = /** @type {(inputs: Admin_Kelvin_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek 设置已保存`)
};

const ja_admin_kelvin_saved = /** @type {(inputs: Admin_Kelvin_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek の設定を保存しました`)
};

/**
* | output |
* | --- |
* | "KelvinSeek settings saved" |
*
* @param {Admin_Kelvin_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_saved = /** @type {((inputs?: Admin_Kelvin_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_saved(inputs)
	if (locale === "de") return de_admin_kelvin_saved(inputs)
	if (locale === "fr") return fr_admin_kelvin_saved(inputs)
	if (locale === "it") return it_admin_kelvin_saved(inputs)
	if (locale === "nl") return nl_admin_kelvin_saved(inputs)
	if (locale === "pl") return pl_admin_kelvin_saved(inputs)
	if (locale === "pt") return pt_admin_kelvin_saved(inputs)
	if (locale === "ru") return ru_admin_kelvin_saved(inputs)
	if (locale === "sv") return sv_admin_kelvin_saved(inputs)
	if (locale === "tr") return tr_admin_kelvin_saved(inputs)
	if (locale === "zh") return zh_admin_kelvin_saved(inputs)
	if (locale === "ja") return ja_admin_kelvin_saved(inputs)
	return en_admin_kelvin_saved(inputs)
});
