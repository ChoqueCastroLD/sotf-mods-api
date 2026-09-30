/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Flags_SavedInputs */

const en_admin_flags_saved = /** @type {(inputs: Admin_Flags_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature flags saved`)
};

const es_admin_flags_saved = /** @type {(inputs: Admin_Flags_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature flags guardados`)
};

const de_admin_flags_saved = /** @type {(inputs: Admin_Flags_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature-Flags gespeichert`)
};

const fr_admin_flags_saved = /** @type {(inputs: Admin_Flags_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature flags enregistrés`)
};

const it_admin_flags_saved = /** @type {(inputs: Admin_Flags_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature flag salvati`)
};

const nl_admin_flags_saved = /** @type {(inputs: Admin_Flags_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature flags opgeslagen`)
};

const pl_admin_flags_saved = /** @type {(inputs: Admin_Flags_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano flagi funkcji`)
};

const pt_admin_flags_saved = /** @type {(inputs: Admin_Flags_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature flags salvas`)
};

const ru_admin_flags_saved = /** @type {(inputs: Admin_Flags_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Флаги функций сохранены`)
};

const sv_admin_flags_saved = /** @type {(inputs: Admin_Flags_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funktionsflaggor sparade`)
};

const tr_admin_flags_saved = /** @type {(inputs: Admin_Flags_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özellik bayrakları kaydedildi`)
};

const zh_admin_flags_saved = /** @type {(inputs: Admin_Flags_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`功能开关已保存`)
};

const ja_admin_flags_saved = /** @type {(inputs: Admin_Flags_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`機能フラグを保存しました`)
};

/**
* | output |
* | --- |
* | "Feature flags saved" |
*
* @param {Admin_Flags_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_flags_saved = /** @type {((inputs?: Admin_Flags_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Flags_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_flags_saved(inputs)
	if (locale === "de") return de_admin_flags_saved(inputs)
	if (locale === "fr") return fr_admin_flags_saved(inputs)
	if (locale === "it") return it_admin_flags_saved(inputs)
	if (locale === "nl") return nl_admin_flags_saved(inputs)
	if (locale === "pl") return pl_admin_flags_saved(inputs)
	if (locale === "pt") return pt_admin_flags_saved(inputs)
	if (locale === "ru") return ru_admin_flags_saved(inputs)
	if (locale === "sv") return sv_admin_flags_saved(inputs)
	if (locale === "tr") return tr_admin_flags_saved(inputs)
	if (locale === "zh") return zh_admin_flags_saved(inputs)
	if (locale === "ja") return ja_admin_flags_saved(inputs)
	return en_admin_flags_saved(inputs)
});
