/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Filter_CurrentInputs */

const en_admin_builds_filter_current = /** @type {(inputs: Admin_Builds_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Current build`)
};

const es_admin_builds_filter_current = /** @type {(inputs: Admin_Builds_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build actual`)
};

const de_admin_builds_filter_current = /** @type {(inputs: Admin_Builds_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktueller Build`)
};

const fr_admin_builds_filter_current = /** @type {(inputs: Admin_Builds_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build actuel`)
};

const it_admin_builds_filter_current = /** @type {(inputs: Admin_Builds_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build attuale`)
};

const nl_admin_builds_filter_current = /** @type {(inputs: Admin_Builds_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Huidige build`)
};

const pl_admin_builds_filter_current = /** @type {(inputs: Admin_Builds_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualny build`)
};

const pt_admin_builds_filter_current = /** @type {(inputs: Admin_Builds_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build atual`)
};

const ru_admin_builds_filter_current = /** @type {(inputs: Admin_Builds_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Текущая сборка`)
};

const sv_admin_builds_filter_current = /** @type {(inputs: Admin_Builds_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktuellt bygge`)
};

const tr_admin_builds_filter_current = /** @type {(inputs: Admin_Builds_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncel sürüm`)
};

const zh_admin_builds_filter_current = /** @type {(inputs: Admin_Builds_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前版本`)
};

const ja_admin_builds_filter_current = /** @type {(inputs: Admin_Builds_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のビルド`)
};

/**
* | output |
* | --- |
* | "Current build" |
*
* @param {Admin_Builds_Filter_CurrentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_filter_current = /** @type {((inputs?: Admin_Builds_Filter_CurrentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Filter_CurrentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_filter_current(inputs)
	if (locale === "de") return de_admin_builds_filter_current(inputs)
	if (locale === "fr") return fr_admin_builds_filter_current(inputs)
	if (locale === "it") return it_admin_builds_filter_current(inputs)
	if (locale === "nl") return nl_admin_builds_filter_current(inputs)
	if (locale === "pl") return pl_admin_builds_filter_current(inputs)
	if (locale === "pt") return pt_admin_builds_filter_current(inputs)
	if (locale === "ru") return ru_admin_builds_filter_current(inputs)
	if (locale === "sv") return sv_admin_builds_filter_current(inputs)
	if (locale === "tr") return tr_admin_builds_filter_current(inputs)
	if (locale === "zh") return zh_admin_builds_filter_current(inputs)
	if (locale === "ja") return ja_admin_builds_filter_current(inputs)
	return en_admin_builds_filter_current(inputs)
});
