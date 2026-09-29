/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Theme_LightInputs */

const en_ui_theme_light = /** @type {(inputs: Ui_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Day`)
};

const es_ui_theme_light = /** @type {(inputs: Ui_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Día`)
};

const de_ui_theme_light = /** @type {(inputs: Ui_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

const fr_ui_theme_light = /** @type {(inputs: Ui_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jour`)
};

const it_ui_theme_light = /** @type {(inputs: Ui_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giorno`)
};

const nl_ui_theme_light = /** @type {(inputs: Ui_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag`)
};

const pl_ui_theme_light = /** @type {(inputs: Ui_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzień`)
};

const pt_ui_theme_light = /** @type {(inputs: Ui_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dia`)
};

const ru_ui_theme_light = /** @type {(inputs: Ui_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`День`)
};

const sv_ui_theme_light = /** @type {(inputs: Ui_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag`)
};

const tr_ui_theme_light = /** @type {(inputs: Ui_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gündüz`)
};

const zh_ui_theme_light = /** @type {(inputs: Ui_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日间`)
};

const ja_ui_theme_light = /** @type {(inputs: Ui_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`デイ`)
};

/**
* | output |
* | --- |
* | "Day" |
*
* @param {Ui_Theme_LightInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_theme_light = /** @type {((inputs?: Ui_Theme_LightInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Theme_LightInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_theme_light(inputs)
	if (locale === "de") return de_ui_theme_light(inputs)
	if (locale === "fr") return fr_ui_theme_light(inputs)
	if (locale === "it") return it_ui_theme_light(inputs)
	if (locale === "nl") return nl_ui_theme_light(inputs)
	if (locale === "pl") return pl_ui_theme_light(inputs)
	if (locale === "pt") return pt_ui_theme_light(inputs)
	if (locale === "ru") return ru_ui_theme_light(inputs)
	if (locale === "sv") return sv_ui_theme_light(inputs)
	if (locale === "tr") return tr_ui_theme_light(inputs)
	if (locale === "zh") return zh_ui_theme_light(inputs)
	if (locale === "ja") return ja_ui_theme_light(inputs)
	return en_ui_theme_light(inputs)
});
