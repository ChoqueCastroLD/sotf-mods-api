/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_CurrentInputs */

const en_content_radar_current = /** @type {(inputs: Content_Radar_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Current build`)
};

const es_content_radar_current = /** @type {(inputs: Content_Radar_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build actual`)
};

const de_content_radar_current = /** @type {(inputs: Content_Radar_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktueller Build`)
};

const fr_content_radar_current = /** @type {(inputs: Content_Radar_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build actuel`)
};

const it_content_radar_current = /** @type {(inputs: Content_Radar_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build attuale`)
};

const nl_content_radar_current = /** @type {(inputs: Content_Radar_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Huidige build`)
};

const pl_content_radar_current = /** @type {(inputs: Content_Radar_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obecny build`)
};

const pt_content_radar_current = /** @type {(inputs: Content_Radar_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build atual`)
};

const ru_content_radar_current = /** @type {(inputs: Content_Radar_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Текущая сборка`)
};

const sv_content_radar_current = /** @type {(inputs: Content_Radar_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktuell build`)
};

const tr_content_radar_current = /** @type {(inputs: Content_Radar_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncel sürüm`)
};

const zh_content_radar_current = /** @type {(inputs: Content_Radar_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前版本`)
};

const ja_content_radar_current = /** @type {(inputs: Content_Radar_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のビルド`)
};

/**
* | output |
* | --- |
* | "Current build" |
*
* @param {Content_Radar_CurrentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_current = /** @type {((inputs?: Content_Radar_CurrentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_CurrentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_current(inputs)
	if (locale === "de") return de_content_radar_current(inputs)
	if (locale === "fr") return fr_content_radar_current(inputs)
	if (locale === "it") return it_content_radar_current(inputs)
	if (locale === "nl") return nl_content_radar_current(inputs)
	if (locale === "pl") return pl_content_radar_current(inputs)
	if (locale === "pt") return pt_content_radar_current(inputs)
	if (locale === "ru") return ru_content_radar_current(inputs)
	if (locale === "sv") return sv_content_radar_current(inputs)
	if (locale === "tr") return tr_content_radar_current(inputs)
	if (locale === "zh") return zh_content_radar_current(inputs)
	if (locale === "ja") return ja_content_radar_current(inputs)
	return en_content_radar_current(inputs)
});
