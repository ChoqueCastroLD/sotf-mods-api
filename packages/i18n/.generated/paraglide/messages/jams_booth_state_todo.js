/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Booth_State_TodoInputs */

const en_jams_booth_state_todo = /** @type {(inputs: Jams_Booth_State_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`not rated`)
};

const es_jams_booth_state_todo = /** @type {(inputs: Jams_Booth_State_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`sin valorar`)
};

const de_jams_booth_state_todo = /** @type {(inputs: Jams_Booth_State_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`nicht bewertet`)
};

const fr_jams_booth_state_todo = /** @type {(inputs: Jams_Booth_State_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`non notée`)
};

const it_jams_booth_state_todo = /** @type {(inputs: Jams_Booth_State_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`non valutata`)
};

const nl_jams_booth_state_todo = /** @type {(inputs: Jams_Booth_State_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`niet beoordeeld`)
};

const pl_jams_booth_state_todo = /** @type {(inputs: Jams_Booth_State_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`nieoceniona`)
};

const pt_jams_booth_state_todo = /** @type {(inputs: Jams_Booth_State_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`não avaliada`)
};

const ru_jams_booth_state_todo = /** @type {(inputs: Jams_Booth_State_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`без оценки`)
};

const sv_jams_booth_state_todo = /** @type {(inputs: Jams_Booth_State_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ej betygsatt`)
};

const tr_jams_booth_state_todo = /** @type {(inputs: Jams_Booth_State_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`puanlanmadı`)
};

const zh_jams_booth_state_todo = /** @type {(inputs: Jams_Booth_State_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未评分`)
};

const ja_jams_booth_state_todo = /** @type {(inputs: Jams_Booth_State_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未評価`)
};

/**
* | output |
* | --- |
* | "not rated" |
*
* @param {Jams_Booth_State_TodoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_booth_state_todo = /** @type {((inputs?: Jams_Booth_State_TodoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Booth_State_TodoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_booth_state_todo(inputs)
	if (locale === "de") return de_jams_booth_state_todo(inputs)
	if (locale === "fr") return fr_jams_booth_state_todo(inputs)
	if (locale === "it") return it_jams_booth_state_todo(inputs)
	if (locale === "nl") return nl_jams_booth_state_todo(inputs)
	if (locale === "pl") return pl_jams_booth_state_todo(inputs)
	if (locale === "pt") return pt_jams_booth_state_todo(inputs)
	if (locale === "ru") return ru_jams_booth_state_todo(inputs)
	if (locale === "sv") return sv_jams_booth_state_todo(inputs)
	if (locale === "tr") return tr_jams_booth_state_todo(inputs)
	if (locale === "zh") return zh_jams_booth_state_todo(inputs)
	if (locale === "ja") return ja_jams_booth_state_todo(inputs)
	return en_jams_booth_state_todo(inputs)
});
