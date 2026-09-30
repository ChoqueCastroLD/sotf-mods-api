/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ theme: NonNullable<unknown> }} Jams_Theme_LabelInputs */

const en_jams_theme_label = /** @type {(inputs: Jams_Theme_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Theme: ${i?.theme}`)
};

const es_jams_theme_label = /** @type {(inputs: Jams_Theme_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tema: ${i?.theme}`)
};

const de_jams_theme_label = /** @type {(inputs: Jams_Theme_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Thema: ${i?.theme}`)
};

const fr_jams_theme_label = /** @type {(inputs: Jams_Theme_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Thème : ${i?.theme}`)
};

const it_jams_theme_label = /** @type {(inputs: Jams_Theme_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tema: ${i?.theme}`)
};

const nl_jams_theme_label = /** @type {(inputs: Jams_Theme_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Thema: ${i?.theme}`)
};

const pl_jams_theme_label = /** @type {(inputs: Jams_Theme_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Temat: ${i?.theme}`)
};

const pt_jams_theme_label = /** @type {(inputs: Jams_Theme_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tema: ${i?.theme}`)
};

const ru_jams_theme_label = /** @type {(inputs: Jams_Theme_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Тема: ${i?.theme}`)
};

const sv_jams_theme_label = /** @type {(inputs: Jams_Theme_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tema: ${i?.theme}`)
};

const tr_jams_theme_label = /** @type {(inputs: Jams_Theme_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tema: ${i?.theme}`)
};

const zh_jams_theme_label = /** @type {(inputs: Jams_Theme_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`主题：${i?.theme}`)
};

const ja_jams_theme_label = /** @type {(inputs: Jams_Theme_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`テーマ：${i?.theme}`)
};

/**
* | output |
* | --- |
* | "Theme: {theme}" |
*
* @param {Jams_Theme_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_theme_label = /** @type {((inputs: Jams_Theme_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Theme_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_theme_label(inputs)
	if (locale === "de") return de_jams_theme_label(inputs)
	if (locale === "fr") return fr_jams_theme_label(inputs)
	if (locale === "it") return it_jams_theme_label(inputs)
	if (locale === "nl") return nl_jams_theme_label(inputs)
	if (locale === "pl") return pl_jams_theme_label(inputs)
	if (locale === "pt") return pt_jams_theme_label(inputs)
	if (locale === "ru") return ru_jams_theme_label(inputs)
	if (locale === "sv") return sv_jams_theme_label(inputs)
	if (locale === "tr") return tr_jams_theme_label(inputs)
	if (locale === "zh") return zh_jams_theme_label(inputs)
	if (locale === "ja") return ja_jams_theme_label(inputs)
	return en_jams_theme_label(inputs)
});
