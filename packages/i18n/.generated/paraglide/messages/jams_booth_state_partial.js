/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Booth_State_PartialInputs */

const en_jams_booth_state_partial = /** @type {(inputs: Jams_Booth_State_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`in progress`)
};

const es_jams_booth_state_partial = /** @type {(inputs: Jams_Booth_State_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`en curso`)
};

const de_jams_booth_state_partial = /** @type {(inputs: Jams_Booth_State_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`in Arbeit`)
};

const fr_jams_booth_state_partial = /** @type {(inputs: Jams_Booth_State_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`en cours`)
};

const it_jams_booth_state_partial = /** @type {(inputs: Jams_Booth_State_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`in corso`)
};

const nl_jams_booth_state_partial = /** @type {(inputs: Jams_Booth_State_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bezig`)
};

const pl_jams_booth_state_partial = /** @type {(inputs: Jams_Booth_State_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`w trakcie`)
};

const pt_jams_booth_state_partial = /** @type {(inputs: Jams_Booth_State_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`em andamento`)
};

const ru_jams_booth_state_partial = /** @type {(inputs: Jams_Booth_State_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`в процессе`)
};

const sv_jams_booth_state_partial = /** @type {(inputs: Jams_Booth_State_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`pågår`)
};

const tr_jams_booth_state_partial = /** @type {(inputs: Jams_Booth_State_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`devam ediyor`)
};

const zh_jams_booth_state_partial = /** @type {(inputs: Jams_Booth_State_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`进行中`)
};

const ja_jams_booth_state_partial = /** @type {(inputs: Jams_Booth_State_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`入力中`)
};

/**
* | output |
* | --- |
* | "in progress" |
*
* @param {Jams_Booth_State_PartialInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_booth_state_partial = /** @type {((inputs?: Jams_Booth_State_PartialInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Booth_State_PartialInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_booth_state_partial(inputs)
	if (locale === "de") return de_jams_booth_state_partial(inputs)
	if (locale === "fr") return fr_jams_booth_state_partial(inputs)
	if (locale === "it") return it_jams_booth_state_partial(inputs)
	if (locale === "nl") return nl_jams_booth_state_partial(inputs)
	if (locale === "pl") return pl_jams_booth_state_partial(inputs)
	if (locale === "pt") return pt_jams_booth_state_partial(inputs)
	if (locale === "ru") return ru_jams_booth_state_partial(inputs)
	if (locale === "sv") return sv_jams_booth_state_partial(inputs)
	if (locale === "tr") return tr_jams_booth_state_partial(inputs)
	if (locale === "zh") return zh_jams_booth_state_partial(inputs)
	if (locale === "ja") return ja_jams_booth_state_partial(inputs)
	return en_jams_booth_state_partial(inputs)
});
