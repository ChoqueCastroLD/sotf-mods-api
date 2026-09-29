/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_ThemeInputs */

const en_ui_theme = /** @type {(inputs: Ui_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Theme`)
};

const es_ui_theme = /** @type {(inputs: Ui_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const de_ui_theme = /** @type {(inputs: Ui_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design`)
};

const fr_ui_theme = /** @type {(inputs: Ui_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thème`)
};

const it_ui_theme = /** @type {(inputs: Ui_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const nl_ui_theme = /** @type {(inputs: Ui_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thema`)
};

const pl_ui_theme = /** @type {(inputs: Ui_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motyw`)
};

const pt_ui_theme = /** @type {(inputs: Ui_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const ru_ui_theme = /** @type {(inputs: Ui_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тема`)
};

const sv_ui_theme = /** @type {(inputs: Ui_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const tr_ui_theme = /** @type {(inputs: Ui_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const zh_ui_theme = /** @type {(inputs: Ui_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主题`)
};

const ja_ui_theme = /** @type {(inputs: Ui_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テーマ`)
};

/**
* | output |
* | --- |
* | "Theme" |
*
* @param {Ui_ThemeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_theme = /** @type {((inputs?: Ui_ThemeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_ThemeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_theme(inputs)
	if (locale === "de") return de_ui_theme(inputs)
	if (locale === "fr") return fr_ui_theme(inputs)
	if (locale === "it") return it_ui_theme(inputs)
	if (locale === "nl") return nl_ui_theme(inputs)
	if (locale === "pl") return pl_ui_theme(inputs)
	if (locale === "pt") return pt_ui_theme(inputs)
	if (locale === "ru") return ru_ui_theme(inputs)
	if (locale === "sv") return sv_ui_theme(inputs)
	if (locale === "tr") return tr_ui_theme(inputs)
	if (locale === "zh") return zh_ui_theme(inputs)
	if (locale === "ja") return ja_ui_theme(inputs)
	return en_ui_theme(inputs)
});
