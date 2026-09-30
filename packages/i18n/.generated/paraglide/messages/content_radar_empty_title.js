/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Empty_TitleInputs */

const en_content_radar_empty_title = /** @type {(inputs: Content_Radar_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The radar is warming up`)
};

const es_content_radar_empty_title = /** @type {(inputs: Content_Radar_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El radar se está calentando`)
};

const de_content_radar_empty_title = /** @type {(inputs: Content_Radar_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Radar wärmt sich auf`)
};

const fr_content_radar_empty_title = /** @type {(inputs: Content_Radar_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le radar chauffe`)
};

const it_content_radar_empty_title = /** @type {(inputs: Content_Radar_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il radar si sta scaldando`)
};

const nl_content_radar_empty_title = /** @type {(inputs: Content_Radar_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De radar warmt op`)
};

const pl_content_radar_empty_title = /** @type {(inputs: Content_Radar_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radar się rozgrzewa`)
};

const pt_content_radar_empty_title = /** @type {(inputs: Content_Radar_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O radar está aquecendo`)
};

const ru_content_radar_empty_title = /** @type {(inputs: Content_Radar_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Радар прогревается`)
};

const sv_content_radar_empty_title = /** @type {(inputs: Content_Radar_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radarn värms upp`)
};

const tr_content_radar_empty_title = /** @type {(inputs: Content_Radar_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radar ısınıyor`)
};

const zh_content_radar_empty_title = /** @type {(inputs: Content_Radar_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`雷达正在预热`)
};

const ja_content_radar_empty_title = /** @type {(inputs: Content_Radar_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レーダー準備中`)
};

/**
* | output |
* | --- |
* | "The radar is warming up" |
*
* @param {Content_Radar_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_empty_title = /** @type {((inputs?: Content_Radar_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_empty_title(inputs)
	if (locale === "de") return de_content_radar_empty_title(inputs)
	if (locale === "fr") return fr_content_radar_empty_title(inputs)
	if (locale === "it") return it_content_radar_empty_title(inputs)
	if (locale === "nl") return nl_content_radar_empty_title(inputs)
	if (locale === "pl") return pl_content_radar_empty_title(inputs)
	if (locale === "pt") return pt_content_radar_empty_title(inputs)
	if (locale === "ru") return ru_content_radar_empty_title(inputs)
	if (locale === "sv") return sv_content_radar_empty_title(inputs)
	if (locale === "tr") return tr_content_radar_empty_title(inputs)
	if (locale === "zh") return zh_content_radar_empty_title(inputs)
	if (locale === "ja") return ja_content_radar_empty_title(inputs)
	return en_content_radar_empty_title(inputs)
});
