/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Content_Radar_List_NameInputs */

const en_content_radar_list_name = /** @type {(inputs: Content_Radar_List_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Top Sons of the Forest mods on patch ${i?.build}`)
};

const es_content_radar_list_name = /** @type {(inputs: Content_Radar_List_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods principales de Sons of the Forest en el parche ${i?.build}`)
};

const de_content_radar_list_name = /** @type {(inputs: Content_Radar_List_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Top-Mods für Sons of the Forest auf Patch ${i?.build}`)
};

const fr_content_radar_list_name = /** @type {(inputs: Content_Radar_List_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Meilleurs mods Sons of the Forest sur le patch ${i?.build}`)
};

const it_content_radar_list_name = /** @type {(inputs: Content_Radar_List_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Le migliori mod di Sons of the Forest sulla patch ${i?.build}`)
};

const nl_content_radar_list_name = /** @type {(inputs: Content_Radar_List_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Topmods voor Sons of the Forest op patch ${i?.build}`)
};

const pl_content_radar_list_name = /** @type {(inputs: Content_Radar_List_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Czołowe mody do Sons of the Forest na łatce ${i?.build}`)
};

const pt_content_radar_list_name = /** @type {(inputs: Content_Radar_List_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Principais mods de Sons of the Forest no patch ${i?.build}`)
};

const ru_content_radar_list_name = /** @type {(inputs: Content_Radar_List_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Топ модов Sons of the Forest на патче ${i?.build}`)
};

const sv_content_radar_list_name = /** @type {(inputs: Content_Radar_List_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Toppmoddar för Sons of the Forest på patch ${i?.build}`)
};

const tr_content_radar_list_name = /** @type {(inputs: Content_Radar_List_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} yamasındaki en iyi Sons of the Forest modları`)
};

const zh_content_radar_list_name = /** @type {(inputs: Content_Radar_List_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} 补丁上的热门 Sons of the Forest 模组`)
};

const ja_content_radar_list_name = /** @type {(inputs: Content_Radar_List_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`パッチ ${i?.build} の人気 Sons of the Forest MOD`)
};

/**
* | output |
* | --- |
* | "Top Sons of the Forest mods on patch {build}" |
*
* @param {Content_Radar_List_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_list_name = /** @type {((inputs: Content_Radar_List_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_List_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_list_name(inputs)
	if (locale === "de") return de_content_radar_list_name(inputs)
	if (locale === "fr") return fr_content_radar_list_name(inputs)
	if (locale === "it") return it_content_radar_list_name(inputs)
	if (locale === "nl") return nl_content_radar_list_name(inputs)
	if (locale === "pl") return pl_content_radar_list_name(inputs)
	if (locale === "pt") return pt_content_radar_list_name(inputs)
	if (locale === "ru") return ru_content_radar_list_name(inputs)
	if (locale === "sv") return sv_content_radar_list_name(inputs)
	if (locale === "tr") return tr_content_radar_list_name(inputs)
	if (locale === "zh") return zh_content_radar_list_name(inputs)
	if (locale === "ja") return ja_content_radar_list_name(inputs)
	return en_content_radar_list_name(inputs)
});
