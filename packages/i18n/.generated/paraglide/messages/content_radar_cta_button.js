/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Cta_ButtonInputs */

const en_content_radar_cta_button = /** @type {(inputs: Content_Radar_Cta_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods waiting for reports`)
};

const es_content_radar_cta_button = /** @type {(inputs: Content_Radar_Cta_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods que esperan reportes`)
};

const de_content_radar_cta_button = /** @type {(inputs: Content_Radar_Cta_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods, die auf Berichte warten`)
};

const fr_content_radar_cta_button = /** @type {(inputs: Content_Radar_Cta_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods en attente de rapports`)
};

const it_content_radar_cta_button = /** @type {(inputs: Content_Radar_Cta_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod in attesa di segnalazioni`)
};

const nl_content_radar_cta_button = /** @type {(inputs: Content_Radar_Cta_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods die op meldingen wachten`)
};

const pl_content_radar_cta_button = /** @type {(inputs: Content_Radar_Cta_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody czekające na zgłoszenia`)
};

const pt_content_radar_cta_button = /** @type {(inputs: Content_Radar_Cta_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods aguardando relatos`)
};

const ru_content_radar_cta_button = /** @type {(inputs: Content_Radar_Cta_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды, которые ждут отчётов`)
};

const sv_content_radar_cta_button = /** @type {(inputs: Content_Radar_Cta_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar som väntar på rapporter`)
};

const tr_content_radar_cta_button = /** @type {(inputs: Content_Radar_Cta_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapor bekleyen modlar`)
};

const zh_content_radar_cta_button = /** @type {(inputs: Content_Radar_Cta_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等待报告的模组`)
};

const ja_content_radar_cta_button = /** @type {(inputs: Content_Radar_Cta_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告待ちの MOD`)
};

/**
* | output |
* | --- |
* | "Mods waiting for reports" |
*
* @param {Content_Radar_Cta_ButtonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_cta_button = /** @type {((inputs?: Content_Radar_Cta_ButtonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Cta_ButtonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_cta_button(inputs)
	if (locale === "de") return de_content_radar_cta_button(inputs)
	if (locale === "fr") return fr_content_radar_cta_button(inputs)
	if (locale === "it") return it_content_radar_cta_button(inputs)
	if (locale === "nl") return nl_content_radar_cta_button(inputs)
	if (locale === "pl") return pl_content_radar_cta_button(inputs)
	if (locale === "pt") return pt_content_radar_cta_button(inputs)
	if (locale === "ru") return ru_content_radar_cta_button(inputs)
	if (locale === "sv") return sv_content_radar_cta_button(inputs)
	if (locale === "tr") return tr_content_radar_cta_button(inputs)
	if (locale === "zh") return zh_content_radar_cta_button(inputs)
	if (locale === "ja") return ja_content_radar_cta_button(inputs)
	return en_content_radar_cta_button(inputs)
});
