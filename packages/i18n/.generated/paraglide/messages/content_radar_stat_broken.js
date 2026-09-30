/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Stat_BrokenInputs */

const en_content_radar_stat_broken = /** @type {(inputs: Content_Radar_Stat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Broken`)
};

const es_content_radar_stat_broken = /** @type {(inputs: Content_Radar_Stat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rotos`)
};

const de_content_radar_stat_broken = /** @type {(inputs: Content_Radar_Stat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaputt`)
};

const fr_content_radar_stat_broken = /** @type {(inputs: Content_Radar_Stat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cassés`)
};

const it_content_radar_stat_broken = /** @type {(inputs: Content_Radar_Stat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rotte`)
};

const nl_content_radar_stat_broken = /** @type {(inputs: Content_Radar_Stat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapot`)
};

const pl_content_radar_stat_broken = /** @type {(inputs: Content_Radar_Stat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zepsute`)
};

const pt_content_radar_stat_broken = /** @type {(inputs: Content_Radar_Stat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quebrados`)
};

const ru_content_radar_stat_broken = /** @type {(inputs: Content_Radar_Stat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сломаны`)
};

const sv_content_radar_stat_broken = /** @type {(inputs: Content_Radar_Stat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trasiga`)
};

const tr_content_radar_stat_broken = /** @type {(inputs: Content_Radar_Stat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozuk`)
};

const zh_content_radar_stat_broken = /** @type {(inputs: Content_Radar_Stat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失效`)
};

const ja_content_radar_stat_broken = /** @type {(inputs: Content_Radar_Stat_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不具合`)
};

/**
* | output |
* | --- |
* | "Broken" |
*
* @param {Content_Radar_Stat_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_stat_broken = /** @type {((inputs?: Content_Radar_Stat_BrokenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Stat_BrokenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_stat_broken(inputs)
	if (locale === "de") return de_content_radar_stat_broken(inputs)
	if (locale === "fr") return fr_content_radar_stat_broken(inputs)
	if (locale === "it") return it_content_radar_stat_broken(inputs)
	if (locale === "nl") return nl_content_radar_stat_broken(inputs)
	if (locale === "pl") return pl_content_radar_stat_broken(inputs)
	if (locale === "pt") return pt_content_radar_stat_broken(inputs)
	if (locale === "ru") return ru_content_radar_stat_broken(inputs)
	if (locale === "sv") return sv_content_radar_stat_broken(inputs)
	if (locale === "tr") return tr_content_radar_stat_broken(inputs)
	if (locale === "zh") return zh_content_radar_stat_broken(inputs)
	if (locale === "ja") return ja_content_radar_stat_broken(inputs)
	return en_content_radar_stat_broken(inputs)
});
