/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Flags_NewInputs */

const en_admin_flags_new = /** @type {(inputs: Admin_Flags_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New flag`)
};

const es_admin_flags_new = /** @type {(inputs: Admin_Flags_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flag nuevo`)
};

const de_admin_flags_new = /** @type {(inputs: Admin_Flags_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neues Flag`)
};

const fr_admin_flags_new = /** @type {(inputs: Admin_Flags_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau flag`)
};

const it_admin_flags_new = /** @type {(inputs: Admin_Flags_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovo flag`)
};

const nl_admin_flags_new = /** @type {(inputs: Admin_Flags_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe flag`)
};

const pl_admin_flags_new = /** @type {(inputs: Admin_Flags_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowa flaga`)
};

const pt_admin_flags_new = /** @type {(inputs: Admin_Flags_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nova flag`)
};

const ru_admin_flags_new = /** @type {(inputs: Admin_Flags_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый флаг`)
};

const sv_admin_flags_new = /** @type {(inputs: Admin_Flags_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny flagga`)
};

const tr_admin_flags_new = /** @type {(inputs: Admin_Flags_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni bayrak`)
};

const zh_admin_flags_new = /** @type {(inputs: Admin_Flags_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新开关`)
};

const ja_admin_flags_new = /** @type {(inputs: Admin_Flags_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいフラグ`)
};

/**
* | output |
* | --- |
* | "New flag" |
*
* @param {Admin_Flags_NewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_flags_new = /** @type {((inputs?: Admin_Flags_NewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Flags_NewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_flags_new(inputs)
	if (locale === "de") return de_admin_flags_new(inputs)
	if (locale === "fr") return fr_admin_flags_new(inputs)
	if (locale === "it") return it_admin_flags_new(inputs)
	if (locale === "nl") return nl_admin_flags_new(inputs)
	if (locale === "pl") return pl_admin_flags_new(inputs)
	if (locale === "pt") return pt_admin_flags_new(inputs)
	if (locale === "ru") return ru_admin_flags_new(inputs)
	if (locale === "sv") return sv_admin_flags_new(inputs)
	if (locale === "tr") return tr_admin_flags_new(inputs)
	if (locale === "zh") return zh_admin_flags_new(inputs)
	if (locale === "ja") return ja_admin_flags_new(inputs)
	return en_admin_flags_new(inputs)
});
