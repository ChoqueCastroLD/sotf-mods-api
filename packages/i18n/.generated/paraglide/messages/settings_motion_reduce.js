/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Motion_ReduceInputs */

const en_settings_motion_reduce = /** @type {(inputs: Settings_Motion_ReduceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reduce`)
};

const es_settings_motion_reduce = /** @type {(inputs: Settings_Motion_ReduceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reducidas`)
};

const de_settings_motion_reduce = /** @type {(inputs: Settings_Motion_ReduceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reduziert`)
};

const fr_settings_motion_reduce = /** @type {(inputs: Settings_Motion_ReduceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réduites`)
};

const it_settings_motion_reduce = /** @type {(inputs: Settings_Motion_ReduceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ridotte`)
};

const nl_settings_motion_reduce = /** @type {(inputs: Settings_Motion_ReduceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verminderd`)
};

const pl_settings_motion_reduce = /** @type {(inputs: Settings_Motion_ReduceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ograniczone`)
};

const pt_settings_motion_reduce = /** @type {(inputs: Settings_Motion_ReduceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reduzidas`)
};

const ru_settings_motion_reduce = /** @type {(inputs: Settings_Motion_ReduceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уменьшенные`)
};

const sv_settings_motion_reduce = /** @type {(inputs: Settings_Motion_ReduceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minskade`)
};

const tr_settings_motion_reduce = /** @type {(inputs: Settings_Motion_ReduceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Azaltılmış`)
};

const zh_settings_motion_reduce = /** @type {(inputs: Settings_Motion_ReduceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`减少`)
};

const ja_settings_motion_reduce = /** @type {(inputs: Settings_Motion_ReduceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`減らす`)
};

/**
* | output |
* | --- |
* | "Reduce" |
*
* @param {Settings_Motion_ReduceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_motion_reduce = /** @type {((inputs?: Settings_Motion_ReduceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Motion_ReduceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_motion_reduce(inputs)
	if (locale === "de") return de_settings_motion_reduce(inputs)
	if (locale === "fr") return fr_settings_motion_reduce(inputs)
	if (locale === "it") return it_settings_motion_reduce(inputs)
	if (locale === "nl") return nl_settings_motion_reduce(inputs)
	if (locale === "pl") return pl_settings_motion_reduce(inputs)
	if (locale === "pt") return pt_settings_motion_reduce(inputs)
	if (locale === "ru") return ru_settings_motion_reduce(inputs)
	if (locale === "sv") return sv_settings_motion_reduce(inputs)
	if (locale === "tr") return tr_settings_motion_reduce(inputs)
	if (locale === "zh") return zh_settings_motion_reduce(inputs)
	if (locale === "ja") return ja_settings_motion_reduce(inputs)
	return en_settings_motion_reduce(inputs)
});
