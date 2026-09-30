/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Radar_CtaInputs */

const en_landing_radar_cta = /** @type {(inputs: Landing_Radar_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See what’s broken`)
};

const es_landing_radar_cta = /** @type {(inputs: Landing_Radar_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver qué está roto`)
};

const de_landing_radar_cta = /** @type {(inputs: Landing_Radar_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sehen, was kaputt ist`)
};

const fr_landing_radar_cta = /** @type {(inputs: Landing_Radar_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir ce qui est cassé`)
};

const it_landing_radar_cta = /** @type {(inputs: Landing_Radar_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guarda cosa non funziona`)
};

const nl_landing_radar_cta = /** @type {(inputs: Landing_Radar_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekijk wat er kapot is`)
};

const pl_landing_radar_cta = /** @type {(inputs: Landing_Radar_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz, co nie działa`)
};

const pt_landing_radar_cta = /** @type {(inputs: Landing_Radar_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver o que está quebrado`)
};

const ru_landing_radar_cta = /** @type {(inputs: Landing_Radar_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что сломано`)
};

const sv_landing_radar_cta = /** @type {(inputs: Landing_Radar_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se vad som är trasigt`)
};

const tr_landing_radar_cta = /** @type {(inputs: Landing_Radar_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nelerin bozuk olduğunu gör`)
};

const zh_landing_radar_cta = /** @type {(inputs: Landing_Radar_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看哪些不可用`)
};

const ja_landing_radar_cta = /** @type {(inputs: Landing_Radar_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動かないものを見る`)
};

/**
* | output |
* | --- |
* | "See what’s broken" |
*
* @param {Landing_Radar_CtaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_radar_cta = /** @type {((inputs?: Landing_Radar_CtaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Radar_CtaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_radar_cta(inputs)
	if (locale === "de") return de_landing_radar_cta(inputs)
	if (locale === "fr") return fr_landing_radar_cta(inputs)
	if (locale === "it") return it_landing_radar_cta(inputs)
	if (locale === "nl") return nl_landing_radar_cta(inputs)
	if (locale === "pl") return pl_landing_radar_cta(inputs)
	if (locale === "pt") return pt_landing_radar_cta(inputs)
	if (locale === "ru") return ru_landing_radar_cta(inputs)
	if (locale === "sv") return sv_landing_radar_cta(inputs)
	if (locale === "tr") return tr_landing_radar_cta(inputs)
	if (locale === "zh") return zh_landing_radar_cta(inputs)
	if (locale === "ja") return ja_landing_radar_cta(inputs)
	return en_landing_radar_cta(inputs)
});
