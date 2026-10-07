/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Filter_Steam_AnyInputs */

const en_admin_builds_filter_steam_any = /** @type {(inputs: Admin_Builds_Filter_Steam_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`With or without an ID`)
};

const es_admin_builds_filter_steam_any = /** @type {(inputs: Admin_Builds_Filter_Steam_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Con o sin ID`)
};

const de_admin_builds_filter_steam_any = /** @type {(inputs: Admin_Builds_Filter_Steam_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mit oder ohne ID`)
};

const fr_admin_builds_filter_steam_any = /** @type {(inputs: Admin_Builds_Filter_Steam_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avec ou sans ID`)
};

const it_admin_builds_filter_steam_any = /** @type {(inputs: Admin_Builds_Filter_Steam_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Con o senza ID`)
};

const nl_admin_builds_filter_steam_any = /** @type {(inputs: Admin_Builds_Filter_Steam_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Met of zonder ID`)
};

const pl_admin_builds_filter_steam_any = /** @type {(inputs: Admin_Builds_Filter_Steam_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Z ID lub bez`)
};

const pt_admin_builds_filter_steam_any = /** @type {(inputs: Admin_Builds_Filter_Steam_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Com ou sem ID`)
};

const ru_admin_builds_filter_steam_any = /** @type {(inputs: Admin_Builds_Filter_Steam_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`С ID или без`)
};

const sv_admin_builds_filter_steam_any = /** @type {(inputs: Admin_Builds_Filter_Steam_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Med eller utan ID`)
};

const tr_admin_builds_filter_steam_any = /** @type {(inputs: Admin_Builds_Filter_Steam_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kimlikli ya da kimliksiz`)
};

const zh_admin_builds_filter_steam_any = /** @type {(inputs: Admin_Builds_Filter_Steam_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有无 ID 均可`)
};

const ja_admin_builds_filter_steam_any = /** @type {(inputs: Admin_Builds_Filter_Steam_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID の有無を問わない`)
};

/**
* | output |
* | --- |
* | "With or without an ID" |
*
* @param {Admin_Builds_Filter_Steam_AnyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_filter_steam_any = /** @type {((inputs?: Admin_Builds_Filter_Steam_AnyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Filter_Steam_AnyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_filter_steam_any(inputs)
	if (locale === "de") return de_admin_builds_filter_steam_any(inputs)
	if (locale === "fr") return fr_admin_builds_filter_steam_any(inputs)
	if (locale === "it") return it_admin_builds_filter_steam_any(inputs)
	if (locale === "nl") return nl_admin_builds_filter_steam_any(inputs)
	if (locale === "pl") return pl_admin_builds_filter_steam_any(inputs)
	if (locale === "pt") return pt_admin_builds_filter_steam_any(inputs)
	if (locale === "ru") return ru_admin_builds_filter_steam_any(inputs)
	if (locale === "sv") return sv_admin_builds_filter_steam_any(inputs)
	if (locale === "tr") return tr_admin_builds_filter_steam_any(inputs)
	if (locale === "zh") return zh_admin_builds_filter_steam_any(inputs)
	if (locale === "ja") return ja_admin_builds_filter_steam_any(inputs)
	return en_admin_builds_filter_steam_any(inputs)
});
