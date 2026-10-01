/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Booth_State_DoneInputs */

const en_jams_booth_state_done = /** @type {(inputs: Jams_Booth_State_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`rated`)
};

const es_jams_booth_state_done = /** @type {(inputs: Jams_Booth_State_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`valorada`)
};

const de_jams_booth_state_done = /** @type {(inputs: Jams_Booth_State_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bewertet`)
};

const fr_jams_booth_state_done = /** @type {(inputs: Jams_Booth_State_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`notée`)
};

const it_jams_booth_state_done = /** @type {(inputs: Jams_Booth_State_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`valutata`)
};

const nl_jams_booth_state_done = /** @type {(inputs: Jams_Booth_State_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`beoordeeld`)
};

const pl_jams_booth_state_done = /** @type {(inputs: Jams_Booth_State_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`oceniona`)
};

const pt_jams_booth_state_done = /** @type {(inputs: Jams_Booth_State_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`avaliada`)
};

const ru_jams_booth_state_done = /** @type {(inputs: Jams_Booth_State_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`оценена`)
};

const sv_jams_booth_state_done = /** @type {(inputs: Jams_Booth_State_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`betygsatt`)
};

const tr_jams_booth_state_done = /** @type {(inputs: Jams_Booth_State_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`puanlandı`)
};

const zh_jams_booth_state_done = /** @type {(inputs: Jams_Booth_State_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已评分`)
};

const ja_jams_booth_state_done = /** @type {(inputs: Jams_Booth_State_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`評価済み`)
};

/**
* | output |
* | --- |
* | "rated" |
*
* @param {Jams_Booth_State_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_booth_state_done = /** @type {((inputs?: Jams_Booth_State_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Booth_State_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_booth_state_done(inputs)
	if (locale === "de") return de_jams_booth_state_done(inputs)
	if (locale === "fr") return fr_jams_booth_state_done(inputs)
	if (locale === "it") return it_jams_booth_state_done(inputs)
	if (locale === "nl") return nl_jams_booth_state_done(inputs)
	if (locale === "pl") return pl_jams_booth_state_done(inputs)
	if (locale === "pt") return pt_jams_booth_state_done(inputs)
	if (locale === "ru") return ru_jams_booth_state_done(inputs)
	if (locale === "sv") return sv_jams_booth_state_done(inputs)
	if (locale === "tr") return tr_jams_booth_state_done(inputs)
	if (locale === "zh") return zh_jams_booth_state_done(inputs)
	if (locale === "ja") return ja_jams_booth_state_done(inputs)
	return en_jams_booth_state_done(inputs)
});
