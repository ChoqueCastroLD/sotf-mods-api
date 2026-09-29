/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Theme_DarkInputs */

const en_ui_theme_dark = /** @type {(inputs: Ui_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night`)
};

const es_ui_theme_dark = /** @type {(inputs: Ui_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noche`)
};

const de_ui_theme_dark = /** @type {(inputs: Ui_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nacht`)
};

const fr_ui_theme_dark = /** @type {(inputs: Ui_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuit`)
};

const it_ui_theme_dark = /** @type {(inputs: Ui_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notte`)
};

const nl_ui_theme_dark = /** @type {(inputs: Ui_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nacht`)
};

const pl_ui_theme_dark = /** @type {(inputs: Ui_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noc`)
};

const pt_ui_theme_dark = /** @type {(inputs: Ui_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noite`)
};

const ru_ui_theme_dark = /** @type {(inputs: Ui_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ночь`)
};

const sv_ui_theme_dark = /** @type {(inputs: Ui_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Natt`)
};

const tr_ui_theme_dark = /** @type {(inputs: Ui_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gece`)
};

const zh_ui_theme_dark = /** @type {(inputs: Ui_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`夜间`)
};

const ja_ui_theme_dark = /** @type {(inputs: Ui_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ナイト`)
};

/**
* | output |
* | --- |
* | "Night" |
*
* @param {Ui_Theme_DarkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_theme_dark = /** @type {((inputs?: Ui_Theme_DarkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Theme_DarkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_theme_dark(inputs)
	if (locale === "de") return de_ui_theme_dark(inputs)
	if (locale === "fr") return fr_ui_theme_dark(inputs)
	if (locale === "it") return it_ui_theme_dark(inputs)
	if (locale === "nl") return nl_ui_theme_dark(inputs)
	if (locale === "pl") return pl_ui_theme_dark(inputs)
	if (locale === "pt") return pt_ui_theme_dark(inputs)
	if (locale === "ru") return ru_ui_theme_dark(inputs)
	if (locale === "sv") return sv_ui_theme_dark(inputs)
	if (locale === "tr") return tr_ui_theme_dark(inputs)
	if (locale === "zh") return zh_ui_theme_dark(inputs)
	if (locale === "ja") return ja_ui_theme_dark(inputs)
	return en_ui_theme_dark(inputs)
});
