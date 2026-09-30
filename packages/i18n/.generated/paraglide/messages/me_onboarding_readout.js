/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_ReadoutInputs */

const en_me_onboarding_readout = /** @type {(inputs: Me_Onboarding_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Day 1 on the island`)
};

const es_me_onboarding_readout = /** @type {(inputs: Me_Onboarding_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Día 1 en la isla`)
};

const de_me_onboarding_readout = /** @type {(inputs: Me_Onboarding_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag 1 auf der Insel`)
};

const fr_me_onboarding_readout = /** @type {(inputs: Me_Onboarding_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jour 1 sur l’île`)
};

const it_me_onboarding_readout = /** @type {(inputs: Me_Onboarding_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giorno 1 sull’isola`)
};

const nl_me_onboarding_readout = /** @type {(inputs: Me_Onboarding_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag 1 op het eiland`)
};

const pl_me_onboarding_readout = /** @type {(inputs: Me_Onboarding_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzień 1 na wyspie`)
};

const pt_me_onboarding_readout = /** @type {(inputs: Me_Onboarding_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dia 1 na ilha`)
};

const ru_me_onboarding_readout = /** @type {(inputs: Me_Onboarding_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`День 1 на острове`)
};

const sv_me_onboarding_readout = /** @type {(inputs: Me_Onboarding_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag 1 på ön`)
};

const tr_me_onboarding_readout = /** @type {(inputs: Me_Onboarding_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adada 1. gün`)
};

const zh_me_onboarding_readout = /** @type {(inputs: Me_Onboarding_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登岛第 1 天`)
};

const ja_me_onboarding_readout = /** @type {(inputs: Me_Onboarding_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島での1日目`)
};

/**
* | output |
* | --- |
* | "Day 1 on the island" |
*
* @param {Me_Onboarding_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_readout = /** @type {((inputs?: Me_Onboarding_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_readout(inputs)
	if (locale === "de") return de_me_onboarding_readout(inputs)
	if (locale === "fr") return fr_me_onboarding_readout(inputs)
	if (locale === "it") return it_me_onboarding_readout(inputs)
	if (locale === "nl") return nl_me_onboarding_readout(inputs)
	if (locale === "pl") return pl_me_onboarding_readout(inputs)
	if (locale === "pt") return pt_me_onboarding_readout(inputs)
	if (locale === "ru") return ru_me_onboarding_readout(inputs)
	if (locale === "sv") return sv_me_onboarding_readout(inputs)
	if (locale === "tr") return tr_me_onboarding_readout(inputs)
	if (locale === "zh") return zh_me_onboarding_readout(inputs)
	if (locale === "ja") return ja_me_onboarding_readout(inputs)
	return en_me_onboarding_readout(inputs)
});
