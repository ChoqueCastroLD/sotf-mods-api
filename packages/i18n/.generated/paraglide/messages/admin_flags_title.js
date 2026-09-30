/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Flags_TitleInputs */

const en_admin_flags_title = /** @type {(inputs: Admin_Flags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature flags`)
};

const es_admin_flags_title = /** @type {(inputs: Admin_Flags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature flags`)
};

const de_admin_flags_title = /** @type {(inputs: Admin_Flags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature-Flags`)
};

const fr_admin_flags_title = /** @type {(inputs: Admin_Flags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature flags`)
};

const it_admin_flags_title = /** @type {(inputs: Admin_Flags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature flag`)
};

const nl_admin_flags_title = /** @type {(inputs: Admin_Flags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature flags`)
};

const pl_admin_flags_title = /** @type {(inputs: Admin_Flags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flagi funkcji`)
};

const pt_admin_flags_title = /** @type {(inputs: Admin_Flags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature flags`)
};

const ru_admin_flags_title = /** @type {(inputs: Admin_Flags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Флаги функций`)
};

const sv_admin_flags_title = /** @type {(inputs: Admin_Flags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funktionsflaggor`)
};

const tr_admin_flags_title = /** @type {(inputs: Admin_Flags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özellik bayrakları`)
};

const zh_admin_flags_title = /** @type {(inputs: Admin_Flags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`功能开关`)
};

const ja_admin_flags_title = /** @type {(inputs: Admin_Flags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`機能フラグ`)
};

/**
* | output |
* | --- |
* | "Feature flags" |
*
* @param {Admin_Flags_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_flags_title = /** @type {((inputs?: Admin_Flags_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Flags_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_flags_title(inputs)
	if (locale === "de") return de_admin_flags_title(inputs)
	if (locale === "fr") return fr_admin_flags_title(inputs)
	if (locale === "it") return it_admin_flags_title(inputs)
	if (locale === "nl") return nl_admin_flags_title(inputs)
	if (locale === "pl") return pl_admin_flags_title(inputs)
	if (locale === "pt") return pt_admin_flags_title(inputs)
	if (locale === "ru") return ru_admin_flags_title(inputs)
	if (locale === "sv") return sv_admin_flags_title(inputs)
	if (locale === "tr") return tr_admin_flags_title(inputs)
	if (locale === "zh") return zh_admin_flags_title(inputs)
	if (locale === "ja") return ja_admin_flags_title(inputs)
	return en_admin_flags_title(inputs)
});
