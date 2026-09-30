/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_EnabledInputs */

const en_admin_kelvin_enabled = /** @type {(inputs: Admin_Kelvin_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek on`)
};

const es_admin_kelvin_enabled = /** @type {(inputs: Admin_Kelvin_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek activado`)
};

const de_admin_kelvin_enabled = /** @type {(inputs: Admin_Kelvin_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek an`)
};

const fr_admin_kelvin_enabled = /** @type {(inputs: Admin_Kelvin_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek activé`)
};

const it_admin_kelvin_enabled = /** @type {(inputs: Admin_Kelvin_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek attivo`)
};

const nl_admin_kelvin_enabled = /** @type {(inputs: Admin_Kelvin_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek aan`)
};

const pl_admin_kelvin_enabled = /** @type {(inputs: Admin_Kelvin_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek włączony`)
};

const pt_admin_kelvin_enabled = /** @type {(inputs: Admin_Kelvin_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek ligado`)
};

const ru_admin_kelvin_enabled = /** @type {(inputs: Admin_Kelvin_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek включён`)
};

const sv_admin_kelvin_enabled = /** @type {(inputs: Admin_Kelvin_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek på`)
};

const tr_admin_kelvin_enabled = /** @type {(inputs: Admin_Kelvin_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek açık`)
};

const zh_admin_kelvin_enabled = /** @type {(inputs: Admin_Kelvin_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`启用 KelvinSeek`)
};

const ja_admin_kelvin_enabled = /** @type {(inputs: Admin_Kelvin_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek を有効にする`)
};

/**
* | output |
* | --- |
* | "KelvinSeek on" |
*
* @param {Admin_Kelvin_EnabledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_enabled = /** @type {((inputs?: Admin_Kelvin_EnabledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_EnabledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_enabled(inputs)
	if (locale === "de") return de_admin_kelvin_enabled(inputs)
	if (locale === "fr") return fr_admin_kelvin_enabled(inputs)
	if (locale === "it") return it_admin_kelvin_enabled(inputs)
	if (locale === "nl") return nl_admin_kelvin_enabled(inputs)
	if (locale === "pl") return pl_admin_kelvin_enabled(inputs)
	if (locale === "pt") return pt_admin_kelvin_enabled(inputs)
	if (locale === "ru") return ru_admin_kelvin_enabled(inputs)
	if (locale === "sv") return sv_admin_kelvin_enabled(inputs)
	if (locale === "tr") return tr_admin_kelvin_enabled(inputs)
	if (locale === "zh") return zh_admin_kelvin_enabled(inputs)
	if (locale === "ja") return ja_admin_kelvin_enabled(inputs)
	return en_admin_kelvin_enabled(inputs)
});
