/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_State_OkInputs */

const en_admin_ops_state_ok = /** @type {(inputs: Admin_Ops_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Healthy`)
};

const es_admin_ops_state_ok = /** @type {(inputs: Admin_Ops_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bien`)
};

const de_admin_ops_state_ok = /** @type {(inputs: Admin_Ops_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In Ordnung`)
};

const fr_admin_ops_state_ok = /** @type {(inputs: Admin_Ops_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Normale`)
};

const it_admin_ops_state_ok = /** @type {(inputs: Admin_Ops_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regolare`)
};

const nl_admin_ops_state_ok = /** @type {(inputs: Admin_Ops_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gezond`)
};

const pl_admin_ops_state_ok = /** @type {(inputs: Admin_Ops_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W porządku`)
};

const pt_admin_ops_state_ok = /** @type {(inputs: Admin_Ops_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Normal`)
};

const ru_admin_ops_state_ok = /** @type {(inputs: Admin_Ops_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В норме`)
};

const sv_admin_ops_state_ok = /** @type {(inputs: Admin_Ops_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frisk`)
};

const tr_admin_ops_state_ok = /** @type {(inputs: Admin_Ops_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sağlıklı`)
};

const zh_admin_ops_state_ok = /** @type {(inputs: Admin_Ops_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正常`)
};

const ja_admin_ops_state_ok = /** @type {(inputs: Admin_Ops_State_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正常`)
};

/**
* | output |
* | --- |
* | "Healthy" |
*
* @param {Admin_Ops_State_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_state_ok = /** @type {((inputs?: Admin_Ops_State_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_State_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_state_ok(inputs)
	if (locale === "de") return de_admin_ops_state_ok(inputs)
	if (locale === "fr") return fr_admin_ops_state_ok(inputs)
	if (locale === "it") return it_admin_ops_state_ok(inputs)
	if (locale === "nl") return nl_admin_ops_state_ok(inputs)
	if (locale === "pl") return pl_admin_ops_state_ok(inputs)
	if (locale === "pt") return pt_admin_ops_state_ok(inputs)
	if (locale === "ru") return ru_admin_ops_state_ok(inputs)
	if (locale === "sv") return sv_admin_ops_state_ok(inputs)
	if (locale === "tr") return tr_admin_ops_state_ok(inputs)
	if (locale === "zh") return zh_admin_ops_state_ok(inputs)
	if (locale === "ja") return ja_admin_ops_state_ok(inputs)
	return en_admin_ops_state_ok(inputs)
});
