/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Term_Patch_RadarInputs */

const en_common_term_patch_radar = /** @type {(inputs: Common_Term_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch Radar`)
};

const es_common_term_patch_radar = /** @type {(inputs: Common_Term_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radar de parches`)
};

const de_common_term_patch_radar = /** @type {(inputs: Common_Term_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch-Radar`)
};

const fr_common_term_patch_radar = /** @type {(inputs: Common_Term_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radar des patchs`)
};

const it_common_term_patch_radar = /** @type {(inputs: Common_Term_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radar delle patch`)
};

const nl_common_term_patch_radar = /** @type {(inputs: Common_Term_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patchradar`)
};

const pl_common_term_patch_radar = /** @type {(inputs: Common_Term_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radar patchy`)
};

const pt_common_term_patch_radar = /** @type {(inputs: Common_Term_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radar de patches`)
};

const ru_common_term_patch_radar = /** @type {(inputs: Common_Term_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Радар патчей`)
};

const sv_common_term_patch_radar = /** @type {(inputs: Common_Term_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patchradar`)
};

const tr_common_term_patch_radar = /** @type {(inputs: Common_Term_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yama Radarı`)
};

const zh_common_term_patch_radar = /** @type {(inputs: Common_Term_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`补丁雷达`)
};

const ja_common_term_patch_radar = /** @type {(inputs: Common_Term_Patch_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パッチレーダー`)
};

/**
* | output |
* | --- |
* | "Patch Radar" |
*
* @param {Common_Term_Patch_RadarInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_term_patch_radar = /** @type {((inputs?: Common_Term_Patch_RadarInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Term_Patch_RadarInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_term_patch_radar(inputs)
	if (locale === "de") return de_common_term_patch_radar(inputs)
	if (locale === "fr") return fr_common_term_patch_radar(inputs)
	if (locale === "it") return it_common_term_patch_radar(inputs)
	if (locale === "nl") return nl_common_term_patch_radar(inputs)
	if (locale === "pl") return pl_common_term_patch_radar(inputs)
	if (locale === "pt") return pt_common_term_patch_radar(inputs)
	if (locale === "ru") return ru_common_term_patch_radar(inputs)
	if (locale === "sv") return sv_common_term_patch_radar(inputs)
	if (locale === "tr") return tr_common_term_patch_radar(inputs)
	if (locale === "zh") return zh_common_term_patch_radar(inputs)
	if (locale === "ja") return ja_common_term_patch_radar(inputs)
	return en_common_term_patch_radar(inputs)
});
