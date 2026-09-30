/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Admin_Settings_UpdatedInputs */

const en_admin_settings_updated = /** @type {(inputs: Admin_Settings_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Last changed ${i?.when}`)
};

const es_admin_settings_updated = /** @type {(inputs: Admin_Settings_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Último cambio: ${i?.when}`)
};

const de_admin_settings_updated = /** @type {(inputs: Admin_Settings_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zuletzt geändert: ${i?.when}`)
};

const fr_admin_settings_updated = /** @type {(inputs: Admin_Settings_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dernière modification : ${i?.when}`)
};

const it_admin_settings_updated = /** @type {(inputs: Admin_Settings_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ultima modifica: ${i?.when}`)
};

const nl_admin_settings_updated = /** @type {(inputs: Admin_Settings_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Laatst gewijzigd: ${i?.when}`)
};

const pl_admin_settings_updated = /** @type {(inputs: Admin_Settings_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ostatnia zmiana: ${i?.when}`)
};

const pt_admin_settings_updated = /** @type {(inputs: Admin_Settings_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Última alteração: ${i?.when}`)
};

const ru_admin_settings_updated = /** @type {(inputs: Admin_Settings_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Последнее изменение: ${i?.when}`)
};

const sv_admin_settings_updated = /** @type {(inputs: Admin_Settings_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Senast ändrad ${i?.when}`)
};

const tr_admin_settings_updated = /** @type {(inputs: Admin_Settings_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Son değişiklik: ${i?.when}`)
};

const zh_admin_settings_updated = /** @type {(inputs: Admin_Settings_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最后更改：${i?.when}`)
};

const ja_admin_settings_updated = /** @type {(inputs: Admin_Settings_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最終変更：${i?.when}`)
};

/**
* | output |
* | --- |
* | "Last changed {when}" |
*
* @param {Admin_Settings_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_settings_updated = /** @type {((inputs: Admin_Settings_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Settings_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_settings_updated(inputs)
	if (locale === "de") return de_admin_settings_updated(inputs)
	if (locale === "fr") return fr_admin_settings_updated(inputs)
	if (locale === "it") return it_admin_settings_updated(inputs)
	if (locale === "nl") return nl_admin_settings_updated(inputs)
	if (locale === "pl") return pl_admin_settings_updated(inputs)
	if (locale === "pt") return pt_admin_settings_updated(inputs)
	if (locale === "ru") return ru_admin_settings_updated(inputs)
	if (locale === "sv") return sv_admin_settings_updated(inputs)
	if (locale === "tr") return tr_admin_settings_updated(inputs)
	if (locale === "zh") return zh_admin_settings_updated(inputs)
	if (locale === "ja") return ja_admin_settings_updated(inputs)
	return en_admin_settings_updated(inputs)
});
