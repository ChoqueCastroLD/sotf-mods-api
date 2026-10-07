/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Check_ThemeInputs */

const en_jams_editor_check_theme = /** @type {(inputs: Jams_Editor_Check_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A theme`)
};

const es_jams_editor_check_theme = /** @type {(inputs: Jams_Editor_Check_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un tema`)
};

const de_jams_editor_check_theme = /** @type {(inputs: Jams_Editor_Check_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Thema`)
};

const fr_jams_editor_check_theme = /** @type {(inputs: Jams_Editor_Check_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un thème`)
};

const it_jams_editor_check_theme = /** @type {(inputs: Jams_Editor_Check_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un tema`)
};

const nl_jams_editor_check_theme = /** @type {(inputs: Jams_Editor_Check_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een thema`)
};

const pl_jams_editor_check_theme = /** @type {(inputs: Jams_Editor_Check_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temat`)
};

const pt_jams_editor_check_theme = /** @type {(inputs: Jams_Editor_Check_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um tema`)
};

const ru_jams_editor_check_theme = /** @type {(inputs: Jams_Editor_Check_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тема`)
};

const sv_jams_editor_check_theme = /** @type {(inputs: Jams_Editor_Check_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ett tema`)
};

const tr_jams_editor_check_theme = /** @type {(inputs: Jams_Editor_Check_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir tema`)
};

const zh_jams_editor_check_theme = /** @type {(inputs: Jams_Editor_Check_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主题`)
};

const ja_jams_editor_check_theme = /** @type {(inputs: Jams_Editor_Check_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テーマ`)
};

/**
* | output |
* | --- |
* | "A theme" |
*
* @param {Jams_Editor_Check_ThemeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_check_theme = /** @type {((inputs?: Jams_Editor_Check_ThemeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Check_ThemeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_check_theme(inputs)
	if (locale === "de") return de_jams_editor_check_theme(inputs)
	if (locale === "fr") return fr_jams_editor_check_theme(inputs)
	if (locale === "it") return it_jams_editor_check_theme(inputs)
	if (locale === "nl") return nl_jams_editor_check_theme(inputs)
	if (locale === "pl") return pl_jams_editor_check_theme(inputs)
	if (locale === "pt") return pt_jams_editor_check_theme(inputs)
	if (locale === "ru") return ru_jams_editor_check_theme(inputs)
	if (locale === "sv") return sv_jams_editor_check_theme(inputs)
	if (locale === "tr") return tr_jams_editor_check_theme(inputs)
	if (locale === "zh") return zh_jams_editor_check_theme(inputs)
	if (locale === "ja") return ja_jams_editor_check_theme(inputs)
	return en_jams_editor_check_theme(inputs)
});
