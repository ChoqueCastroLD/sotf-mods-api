/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_ThemeInputs */

const en_jams_editor_theme = /** @type {(inputs: Jams_Editor_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Theme`)
};

const es_jams_editor_theme = /** @type {(inputs: Jams_Editor_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const de_jams_editor_theme = /** @type {(inputs: Jams_Editor_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thema`)
};

const fr_jams_editor_theme = /** @type {(inputs: Jams_Editor_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thème`)
};

const it_jams_editor_theme = /** @type {(inputs: Jams_Editor_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const nl_jams_editor_theme = /** @type {(inputs: Jams_Editor_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thema`)
};

const pl_jams_editor_theme = /** @type {(inputs: Jams_Editor_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temat`)
};

const pt_jams_editor_theme = /** @type {(inputs: Jams_Editor_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const ru_jams_editor_theme = /** @type {(inputs: Jams_Editor_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тема`)
};

const sv_jams_editor_theme = /** @type {(inputs: Jams_Editor_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const tr_jams_editor_theme = /** @type {(inputs: Jams_Editor_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const zh_jams_editor_theme = /** @type {(inputs: Jams_Editor_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主题`)
};

const ja_jams_editor_theme = /** @type {(inputs: Jams_Editor_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テーマ`)
};

/**
* | output |
* | --- |
* | "Theme" |
*
* @param {Jams_Editor_ThemeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_theme = /** @type {((inputs?: Jams_Editor_ThemeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_ThemeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_theme(inputs)
	if (locale === "de") return de_jams_editor_theme(inputs)
	if (locale === "fr") return fr_jams_editor_theme(inputs)
	if (locale === "it") return it_jams_editor_theme(inputs)
	if (locale === "nl") return nl_jams_editor_theme(inputs)
	if (locale === "pl") return pl_jams_editor_theme(inputs)
	if (locale === "pt") return pt_jams_editor_theme(inputs)
	if (locale === "ru") return ru_jams_editor_theme(inputs)
	if (locale === "sv") return sv_jams_editor_theme(inputs)
	if (locale === "tr") return tr_jams_editor_theme(inputs)
	if (locale === "zh") return zh_jams_editor_theme(inputs)
	if (locale === "ja") return ja_jams_editor_theme(inputs)
	return en_jams_editor_theme(inputs)
});
