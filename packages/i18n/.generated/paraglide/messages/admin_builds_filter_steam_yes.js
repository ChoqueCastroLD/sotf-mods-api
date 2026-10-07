/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Filter_Steam_YesInputs */

const en_admin_builds_filter_steam_yes = /** @type {(inputs: Admin_Builds_Filter_Steam_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`With a Steam build ID`)
};

const es_admin_builds_filter_steam_yes = /** @type {(inputs: Admin_Builds_Filter_Steam_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Con ID de build de Steam`)
};

const de_admin_builds_filter_steam_yes = /** @type {(inputs: Admin_Builds_Filter_Steam_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mit Steam-Build-ID`)
};

const fr_admin_builds_filter_steam_yes = /** @type {(inputs: Admin_Builds_Filter_Steam_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avec un ID de build Steam`)
};

const it_admin_builds_filter_steam_yes = /** @type {(inputs: Admin_Builds_Filter_Steam_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Con ID build di Steam`)
};

const nl_admin_builds_filter_steam_yes = /** @type {(inputs: Admin_Builds_Filter_Steam_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Met Steam-build-ID`)
};

const pl_admin_builds_filter_steam_yes = /** @type {(inputs: Admin_Builds_Filter_Steam_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Z ID buildu Steam`)
};

const pt_admin_builds_filter_steam_yes = /** @type {(inputs: Admin_Builds_Filter_Steam_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Com ID do build na Steam`)
};

const ru_admin_builds_filter_steam_yes = /** @type {(inputs: Admin_Builds_Filter_Steam_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`С ID сборки Steam`)
};

const sv_admin_builds_filter_steam_yes = /** @type {(inputs: Admin_Builds_Filter_Steam_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Med Steam-bygg-ID`)
};

const tr_admin_builds_filter_steam_yes = /** @type {(inputs: Admin_Builds_Filter_Steam_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam sürüm kimliği olanlar`)
};

const zh_admin_builds_filter_steam_yes = /** @type {(inputs: Admin_Builds_Filter_Steam_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有 Steam 版本 ID`)
};

const ja_admin_builds_filter_steam_yes = /** @type {(inputs: Admin_Builds_Filter_Steam_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam ビルド ID あり`)
};

/**
* | output |
* | --- |
* | "With a Steam build ID" |
*
* @param {Admin_Builds_Filter_Steam_YesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_filter_steam_yes = /** @type {((inputs?: Admin_Builds_Filter_Steam_YesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Filter_Steam_YesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_filter_steam_yes(inputs)
	if (locale === "de") return de_admin_builds_filter_steam_yes(inputs)
	if (locale === "fr") return fr_admin_builds_filter_steam_yes(inputs)
	if (locale === "it") return it_admin_builds_filter_steam_yes(inputs)
	if (locale === "nl") return nl_admin_builds_filter_steam_yes(inputs)
	if (locale === "pl") return pl_admin_builds_filter_steam_yes(inputs)
	if (locale === "pt") return pt_admin_builds_filter_steam_yes(inputs)
	if (locale === "ru") return ru_admin_builds_filter_steam_yes(inputs)
	if (locale === "sv") return sv_admin_builds_filter_steam_yes(inputs)
	if (locale === "tr") return tr_admin_builds_filter_steam_yes(inputs)
	if (locale === "zh") return zh_admin_builds_filter_steam_yes(inputs)
	if (locale === "ja") return ja_admin_builds_filter_steam_yes(inputs)
	return en_admin_builds_filter_steam_yes(inputs)
});
