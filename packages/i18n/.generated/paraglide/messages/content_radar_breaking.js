/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_BreakingInputs */

const en_content_radar_breaking = /** @type {(inputs: Content_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Breaking update`)
};

const es_content_radar_breaking = /** @type {(inputs: Content_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualización que rompe mods`)
};

const de_content_radar_breaking = /** @type {(inputs: Content_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update mit Brüchen`)
};

const fr_content_radar_breaking = /** @type {(inputs: Content_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mise à jour cassante`)
};

const it_content_radar_breaking = /** @type {(inputs: Content_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornamento che rompe le mod`)
};

const nl_content_radar_breaking = /** @type {(inputs: Content_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update die mods breekt`)
};

const pl_content_radar_breaking = /** @type {(inputs: Content_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualizacja psująca mody`)
};

const pt_content_radar_breaking = /** @type {(inputs: Content_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualização que quebra mods`)
};

const ru_content_radar_breaking = /** @type {(inputs: Content_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ломающее обновление`)
};

const sv_content_radar_breaking = /** @type {(inputs: Content_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdatering som bryter moddar`)
};

const tr_content_radar_breaking = /** @type {(inputs: Content_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları bozan güncelleme`)
};

const zh_content_radar_breaking = /** @type {(inputs: Content_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`破坏性更新`)
};

const ja_content_radar_breaking = /** @type {(inputs: Content_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互換性を壊すアップデート`)
};

/**
* | output |
* | --- |
* | "Breaking update" |
*
* @param {Content_Radar_BreakingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_breaking = /** @type {((inputs?: Content_Radar_BreakingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_BreakingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_breaking(inputs)
	if (locale === "de") return de_content_radar_breaking(inputs)
	if (locale === "fr") return fr_content_radar_breaking(inputs)
	if (locale === "it") return it_content_radar_breaking(inputs)
	if (locale === "nl") return nl_content_radar_breaking(inputs)
	if (locale === "pl") return pl_content_radar_breaking(inputs)
	if (locale === "pt") return pt_content_radar_breaking(inputs)
	if (locale === "ru") return ru_content_radar_breaking(inputs)
	if (locale === "sv") return sv_content_radar_breaking(inputs)
	if (locale === "tr") return tr_content_radar_breaking(inputs)
	if (locale === "zh") return zh_content_radar_breaking(inputs)
	if (locale === "ja") return ja_content_radar_breaking(inputs)
	return en_content_radar_breaking(inputs)
});
