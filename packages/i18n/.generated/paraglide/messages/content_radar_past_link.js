/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Past_LinkInputs */

const en_content_radar_past_link = /** @type {(inputs: Content_Radar_Past_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See the current build`)
};

const es_content_radar_past_link = /** @type {(inputs: Content_Radar_Past_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver la build actual`)
};

const de_content_radar_past_link = /** @type {(inputs: Content_Radar_Past_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktuellen Build ansehen`)
};

const fr_content_radar_past_link = /** @type {(inputs: Content_Radar_Past_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir le build actuel`)
};

const it_content_radar_past_link = /** @type {(inputs: Content_Radar_Past_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi la build attuale`)
};

const nl_content_radar_past_link = /** @type {(inputs: Content_Radar_Past_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Huidige build bekijken`)
};

const pl_content_radar_past_link = /** @type {(inputs: Content_Radar_Past_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz obecny build`)
};

const pt_content_radar_past_link = /** @type {(inputs: Content_Radar_Past_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver a build atual`)
};

const ru_content_radar_past_link = /** @type {(inputs: Content_Radar_Past_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотреть текущую сборку`)
};

const sv_content_radar_past_link = /** @type {(inputs: Content_Radar_Past_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se aktuell build`)
};

const tr_content_radar_past_link = /** @type {(inputs: Content_Radar_Past_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncel sürümü gör`)
};

const zh_content_radar_past_link = /** @type {(inputs: Content_Radar_Past_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看当前版本`)
};

const ja_content_radar_past_link = /** @type {(inputs: Content_Radar_Past_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のビルドを見る`)
};

/**
* | output |
* | --- |
* | "See the current build" |
*
* @param {Content_Radar_Past_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_past_link = /** @type {((inputs?: Content_Radar_Past_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Past_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_past_link(inputs)
	if (locale === "de") return de_content_radar_past_link(inputs)
	if (locale === "fr") return fr_content_radar_past_link(inputs)
	if (locale === "it") return it_content_radar_past_link(inputs)
	if (locale === "nl") return nl_content_radar_past_link(inputs)
	if (locale === "pl") return pl_content_radar_past_link(inputs)
	if (locale === "pt") return pt_content_radar_past_link(inputs)
	if (locale === "ru") return ru_content_radar_past_link(inputs)
	if (locale === "sv") return sv_content_radar_past_link(inputs)
	if (locale === "tr") return tr_content_radar_past_link(inputs)
	if (locale === "zh") return zh_content_radar_past_link(inputs)
	if (locale === "ja") return ja_content_radar_past_link(inputs)
	return en_content_radar_past_link(inputs)
});
