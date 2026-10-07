/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Filter_Steam_NoInputs */

const en_admin_builds_filter_steam_no = /** @type {(inputs: Admin_Builds_Filter_Steam_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Without a Steam build ID`)
};

const es_admin_builds_filter_steam_no = /** @type {(inputs: Admin_Builds_Filter_Steam_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin ID de build de Steam`)
};

const de_admin_builds_filter_steam_no = /** @type {(inputs: Admin_Builds_Filter_Steam_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ohne Steam-Build-ID`)
};

const fr_admin_builds_filter_steam_no = /** @type {(inputs: Admin_Builds_Filter_Steam_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sans ID de build Steam`)
};

const it_admin_builds_filter_steam_no = /** @type {(inputs: Admin_Builds_Filter_Steam_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senza ID build di Steam`)
};

const nl_admin_builds_filter_steam_no = /** @type {(inputs: Admin_Builds_Filter_Steam_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zonder Steam-build-ID`)
};

const pl_admin_builds_filter_steam_no = /** @type {(inputs: Admin_Builds_Filter_Steam_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bez ID buildu Steam`)
};

const pt_admin_builds_filter_steam_no = /** @type {(inputs: Admin_Builds_Filter_Steam_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem ID do build na Steam`)
};

const ru_admin_builds_filter_steam_no = /** @type {(inputs: Admin_Builds_Filter_Steam_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Без ID сборки Steam`)
};

const sv_admin_builds_filter_steam_no = /** @type {(inputs: Admin_Builds_Filter_Steam_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utan Steam-bygg-ID`)
};

const tr_admin_builds_filter_steam_no = /** @type {(inputs: Admin_Builds_Filter_Steam_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam sürüm kimliği olmayanlar`)
};

const zh_admin_builds_filter_steam_no = /** @type {(inputs: Admin_Builds_Filter_Steam_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无 Steam 版本 ID`)
};

const ja_admin_builds_filter_steam_no = /** @type {(inputs: Admin_Builds_Filter_Steam_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam ビルド ID なし`)
};

/**
* | output |
* | --- |
* | "Without a Steam build ID" |
*
* @param {Admin_Builds_Filter_Steam_NoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_filter_steam_no = /** @type {((inputs?: Admin_Builds_Filter_Steam_NoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Filter_Steam_NoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_filter_steam_no(inputs)
	if (locale === "de") return de_admin_builds_filter_steam_no(inputs)
	if (locale === "fr") return fr_admin_builds_filter_steam_no(inputs)
	if (locale === "it") return it_admin_builds_filter_steam_no(inputs)
	if (locale === "nl") return nl_admin_builds_filter_steam_no(inputs)
	if (locale === "pl") return pl_admin_builds_filter_steam_no(inputs)
	if (locale === "pt") return pt_admin_builds_filter_steam_no(inputs)
	if (locale === "ru") return ru_admin_builds_filter_steam_no(inputs)
	if (locale === "sv") return sv_admin_builds_filter_steam_no(inputs)
	if (locale === "tr") return tr_admin_builds_filter_steam_no(inputs)
	if (locale === "zh") return zh_admin_builds_filter_steam_no(inputs)
	if (locale === "ja") return ja_admin_builds_filter_steam_no(inputs)
	return en_admin_builds_filter_steam_no(inputs)
});
