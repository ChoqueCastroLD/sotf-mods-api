/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Radar_BreakingInputs */

const en_landing_radar_breaking = /** @type {(inputs: Landing_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Breaking update`)
};

const es_landing_radar_breaking = /** @type {(inputs: Landing_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualización que rompe mods`)
};

const de_landing_radar_breaking = /** @type {(inputs: Landing_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update mit Brüchen`)
};

const fr_landing_radar_breaking = /** @type {(inputs: Landing_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mise à jour cassante`)
};

const it_landing_radar_breaking = /** @type {(inputs: Landing_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornamento che rompe le mod`)
};

const nl_landing_radar_breaking = /** @type {(inputs: Landing_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update die mods breekt`)
};

const pl_landing_radar_breaking = /** @type {(inputs: Landing_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualizacja psująca mody`)
};

const pt_landing_radar_breaking = /** @type {(inputs: Landing_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualização que quebra mods`)
};

const ru_landing_radar_breaking = /** @type {(inputs: Landing_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновление ломает моды`)
};

const sv_landing_radar_breaking = /** @type {(inputs: Landing_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdatering som bryter moddar`)
};

const tr_landing_radar_breaking = /** @type {(inputs: Landing_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları bozan güncelleme`)
};

const zh_landing_radar_breaking = /** @type {(inputs: Landing_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`破坏性更新`)
};

const ja_landing_radar_breaking = /** @type {(inputs: Landing_Radar_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODが壊れる更新`)
};

/**
* | output |
* | --- |
* | "Breaking update" |
*
* @param {Landing_Radar_BreakingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_radar_breaking = /** @type {((inputs?: Landing_Radar_BreakingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Radar_BreakingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_radar_breaking(inputs)
	if (locale === "de") return de_landing_radar_breaking(inputs)
	if (locale === "fr") return fr_landing_radar_breaking(inputs)
	if (locale === "it") return it_landing_radar_breaking(inputs)
	if (locale === "nl") return nl_landing_radar_breaking(inputs)
	if (locale === "pl") return pl_landing_radar_breaking(inputs)
	if (locale === "pt") return pt_landing_radar_breaking(inputs)
	if (locale === "ru") return ru_landing_radar_breaking(inputs)
	if (locale === "sv") return sv_landing_radar_breaking(inputs)
	if (locale === "tr") return tr_landing_radar_breaking(inputs)
	if (locale === "zh") return zh_landing_radar_breaking(inputs)
	if (locale === "ja") return ja_landing_radar_breaking(inputs)
	return en_landing_radar_breaking(inputs)
});
