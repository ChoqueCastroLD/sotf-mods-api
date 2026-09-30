/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Page_Patch_RadarInputs */

const en_search_page_patch_radar = /** @type {(inputs: Search_Page_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch Radar`)
};

const es_search_page_patch_radar = /** @type {(inputs: Search_Page_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radar de parches`)
};

const de_search_page_patch_radar = /** @type {(inputs: Search_Page_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch-Radar`)
};

const fr_search_page_patch_radar = /** @type {(inputs: Search_Page_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radar des patchs`)
};

const it_search_page_patch_radar = /** @type {(inputs: Search_Page_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radar delle patch`)
};

const nl_search_page_patch_radar = /** @type {(inputs: Search_Page_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patchradar`)
};

const pl_search_page_patch_radar = /** @type {(inputs: Search_Page_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radar łatek`)
};

const pt_search_page_patch_radar = /** @type {(inputs: Search_Page_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radar de patches`)
};

const ru_search_page_patch_radar = /** @type {(inputs: Search_Page_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Радар патчей`)
};

const sv_search_page_patch_radar = /** @type {(inputs: Search_Page_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patchradar`)
};

const tr_search_page_patch_radar = /** @type {(inputs: Search_Page_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yama radarı`)
};

const zh_search_page_patch_radar = /** @type {(inputs: Search_Page_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`补丁雷达`)
};

const ja_search_page_patch_radar = /** @type {(inputs: Search_Page_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パッチレーダー`)
};

/**
* | output |
* | --- |
* | "Patch Radar" |
*
* @param {Search_Page_Patch_RadarInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const search_page_patch_radar = /** @type {((inputs?: Search_Page_Patch_RadarInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Page_Patch_RadarInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_search_page_patch_radar(inputs)
	if (locale === "de") return de_search_page_patch_radar(inputs)
	if (locale === "fr") return fr_search_page_patch_radar(inputs)
	if (locale === "it") return it_search_page_patch_radar(inputs)
	if (locale === "nl") return nl_search_page_patch_radar(inputs)
	if (locale === "pl") return pl_search_page_patch_radar(inputs)
	if (locale === "pt") return pt_search_page_patch_radar(inputs)
	if (locale === "ru") return ru_search_page_patch_radar(inputs)
	if (locale === "sv") return sv_search_page_patch_radar(inputs)
	if (locale === "tr") return tr_search_page_patch_radar(inputs)
	if (locale === "zh") return zh_search_page_patch_radar(inputs)
	if (locale === "ja") return ja_search_page_patch_radar(inputs)
	return en_search_page_patch_radar(inputs)
});
