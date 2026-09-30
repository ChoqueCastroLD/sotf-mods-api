/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Motion_FullInputs */

const en_settings_motion_full = /** @type {(inputs: Settings_Motion_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Full`)
};

const es_settings_motion_full = /** @type {(inputs: Settings_Motion_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas`)
};

const de_settings_motion_full = /** @type {(inputs: Settings_Motion_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const fr_settings_motion_full = /** @type {(inputs: Settings_Motion_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes`)
};

const it_settings_motion_full = /** @type {(inputs: Settings_Motion_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte`)
};

const nl_settings_motion_full = /** @type {(inputs: Settings_Motion_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const pl_settings_motion_full = /** @type {(inputs: Settings_Motion_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie`)
};

const pt_settings_motion_full = /** @type {(inputs: Settings_Motion_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas`)
};

const ru_settings_motion_full = /** @type {(inputs: Settings_Motion_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все`)
};

const sv_settings_motion_full = /** @type {(inputs: Settings_Motion_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla`)
};

const tr_settings_motion_full = /** @type {(inputs: Settings_Motion_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümü`)
};

const zh_settings_motion_full = /** @type {(inputs: Settings_Motion_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部`)
};

const ja_settings_motion_full = /** @type {(inputs: Settings_Motion_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて`)
};

/**
* | output |
* | --- |
* | "Full" |
*
* @param {Settings_Motion_FullInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_motion_full = /** @type {((inputs?: Settings_Motion_FullInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Motion_FullInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_motion_full(inputs)
	if (locale === "de") return de_settings_motion_full(inputs)
	if (locale === "fr") return fr_settings_motion_full(inputs)
	if (locale === "it") return it_settings_motion_full(inputs)
	if (locale === "nl") return nl_settings_motion_full(inputs)
	if (locale === "pl") return pl_settings_motion_full(inputs)
	if (locale === "pt") return pt_settings_motion_full(inputs)
	if (locale === "ru") return ru_settings_motion_full(inputs)
	if (locale === "sv") return sv_settings_motion_full(inputs)
	if (locale === "tr") return tr_settings_motion_full(inputs)
	if (locale === "zh") return zh_settings_motion_full(inputs)
	if (locale === "ja") return ja_settings_motion_full(inputs)
	return en_settings_motion_full(inputs)
});
