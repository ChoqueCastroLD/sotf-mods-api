/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Picker_ChangeInputs */

const en_admin_picker_change = /** @type {(inputs: Admin_Picker_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change`)
};

const es_admin_picker_change = /** @type {(inputs: Admin_Picker_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambiar`)
};

const de_admin_picker_change = /** @type {(inputs: Admin_Picker_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändern`)
};

const fr_admin_picker_change = /** @type {(inputs: Admin_Picker_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changer`)
};

const it_admin_picker_change = /** @type {(inputs: Admin_Picker_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambia`)
};

const nl_admin_picker_change = /** @type {(inputs: Admin_Picker_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigen`)
};

const pl_admin_picker_change = /** @type {(inputs: Admin_Picker_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmień`)
};

const pt_admin_picker_change = /** @type {(inputs: Admin_Picker_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trocar`)
};

const ru_admin_picker_change = /** @type {(inputs: Admin_Picker_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сменить`)
};

const sv_admin_picker_change = /** @type {(inputs: Admin_Picker_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byt`)
};

const tr_admin_picker_change = /** @type {(inputs: Admin_Picker_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değiştir`)
};

const zh_admin_picker_change = /** @type {(inputs: Admin_Picker_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更换`)
};

const ja_admin_picker_change = /** @type {(inputs: Admin_Picker_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更`)
};

/**
* | output |
* | --- |
* | "Change" |
*
* @param {Admin_Picker_ChangeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_picker_change = /** @type {((inputs?: Admin_Picker_ChangeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Picker_ChangeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_picker_change(inputs)
	if (locale === "de") return de_admin_picker_change(inputs)
	if (locale === "fr") return fr_admin_picker_change(inputs)
	if (locale === "it") return it_admin_picker_change(inputs)
	if (locale === "nl") return nl_admin_picker_change(inputs)
	if (locale === "pl") return pl_admin_picker_change(inputs)
	if (locale === "pt") return pt_admin_picker_change(inputs)
	if (locale === "ru") return ru_admin_picker_change(inputs)
	if (locale === "sv") return sv_admin_picker_change(inputs)
	if (locale === "tr") return tr_admin_picker_change(inputs)
	if (locale === "zh") return zh_admin_picker_change(inputs)
	if (locale === "ja") return ja_admin_picker_change(inputs)
	return en_admin_picker_change(inputs)
});
