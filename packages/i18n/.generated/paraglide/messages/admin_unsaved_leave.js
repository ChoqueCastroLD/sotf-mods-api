/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Unsaved_LeaveInputs */

const en_admin_unsaved_leave = /** @type {(inputs: Admin_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leave`)
};

const es_admin_unsaved_leave = /** @type {(inputs: Admin_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salir`)
};

const de_admin_unsaved_leave = /** @type {(inputs: Admin_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verlassen`)
};

const fr_admin_unsaved_leave = /** @type {(inputs: Admin_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitter`)
};

const it_admin_unsaved_leave = /** @type {(inputs: Admin_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esci`)
};

const nl_admin_unsaved_leave = /** @type {(inputs: Admin_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verlaten`)
};

const pl_admin_unsaved_leave = /** @type {(inputs: Admin_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyjdź`)
};

const pt_admin_unsaved_leave = /** @type {(inputs: Admin_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sair`)
};

const ru_admin_unsaved_leave = /** @type {(inputs: Admin_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выйти`)
};

const sv_admin_unsaved_leave = /** @type {(inputs: Admin_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lämna`)
};

const tr_admin_unsaved_leave = /** @type {(inputs: Admin_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çık`)
};

const zh_admin_unsaved_leave = /** @type {(inputs: Admin_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`离开`)
};

const ja_admin_unsaved_leave = /** @type {(inputs: Admin_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移動する`)
};

/**
* | output |
* | --- |
* | "Leave" |
*
* @param {Admin_Unsaved_LeaveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_unsaved_leave = /** @type {((inputs?: Admin_Unsaved_LeaveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Unsaved_LeaveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_unsaved_leave(inputs)
	if (locale === "de") return de_admin_unsaved_leave(inputs)
	if (locale === "fr") return fr_admin_unsaved_leave(inputs)
	if (locale === "it") return it_admin_unsaved_leave(inputs)
	if (locale === "nl") return nl_admin_unsaved_leave(inputs)
	if (locale === "pl") return pl_admin_unsaved_leave(inputs)
	if (locale === "pt") return pt_admin_unsaved_leave(inputs)
	if (locale === "ru") return ru_admin_unsaved_leave(inputs)
	if (locale === "sv") return sv_admin_unsaved_leave(inputs)
	if (locale === "tr") return tr_admin_unsaved_leave(inputs)
	if (locale === "zh") return zh_admin_unsaved_leave(inputs)
	if (locale === "ja") return ja_admin_unsaved_leave(inputs)
	return en_admin_unsaved_leave(inputs)
});
