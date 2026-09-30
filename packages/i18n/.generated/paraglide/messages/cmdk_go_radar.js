/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Go_RadarInputs */

const en_cmdk_go_radar = /** @type {(inputs: Cmdk_Go_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch Radar`)
};

const es_cmdk_go_radar = /** @type {(inputs: Cmdk_Go_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radar de parches`)
};

const de_cmdk_go_radar = /** @type {(inputs: Cmdk_Go_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch-Radar`)
};

const fr_cmdk_go_radar = /** @type {(inputs: Cmdk_Go_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radar des correctifs`)
};

const it_cmdk_go_radar = /** @type {(inputs: Cmdk_Go_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radar delle patch`)
};

const nl_cmdk_go_radar = /** @type {(inputs: Cmdk_Go_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patchradar`)
};

const pl_cmdk_go_radar = /** @type {(inputs: Cmdk_Go_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radar poprawek`)
};

const pt_cmdk_go_radar = /** @type {(inputs: Cmdk_Go_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radar de patches`)
};

const ru_cmdk_go_radar = /** @type {(inputs: Cmdk_Go_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Радар патчей`)
};

const sv_cmdk_go_radar = /** @type {(inputs: Cmdk_Go_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patchradar`)
};

const tr_cmdk_go_radar = /** @type {(inputs: Cmdk_Go_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yama radarı`)
};

const zh_cmdk_go_radar = /** @type {(inputs: Cmdk_Go_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`补丁雷达`)
};

const ja_cmdk_go_radar = /** @type {(inputs: Cmdk_Go_RadarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パッチレーダー`)
};

/**
* | output |
* | --- |
* | "Patch Radar" |
*
* @param {Cmdk_Go_RadarInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_go_radar = /** @type {((inputs?: Cmdk_Go_RadarInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Go_RadarInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_go_radar(inputs)
	if (locale === "de") return de_cmdk_go_radar(inputs)
	if (locale === "fr") return fr_cmdk_go_radar(inputs)
	if (locale === "it") return it_cmdk_go_radar(inputs)
	if (locale === "nl") return nl_cmdk_go_radar(inputs)
	if (locale === "pl") return pl_cmdk_go_radar(inputs)
	if (locale === "pt") return pt_cmdk_go_radar(inputs)
	if (locale === "ru") return ru_cmdk_go_radar(inputs)
	if (locale === "sv") return sv_cmdk_go_radar(inputs)
	if (locale === "tr") return tr_cmdk_go_radar(inputs)
	if (locale === "zh") return zh_cmdk_go_radar(inputs)
	if (locale === "ja") return ja_cmdk_go_radar(inputs)
	return en_cmdk_go_radar(inputs)
});
