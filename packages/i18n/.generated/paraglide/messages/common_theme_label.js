/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Theme_LabelInputs */

const en_common_theme_label = /** @type {(inputs: Common_Theme_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Theme`)
};

const es_common_theme_label = /** @type {(inputs: Common_Theme_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const de_common_theme_label = /** @type {(inputs: Common_Theme_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design`)
};

const fr_common_theme_label = /** @type {(inputs: Common_Theme_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thème`)
};

const it_common_theme_label = /** @type {(inputs: Common_Theme_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const nl_common_theme_label = /** @type {(inputs: Common_Theme_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thema`)
};

const pl_common_theme_label = /** @type {(inputs: Common_Theme_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motyw`)
};

const pt_common_theme_label = /** @type {(inputs: Common_Theme_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const ru_common_theme_label = /** @type {(inputs: Common_Theme_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тема`)
};

const sv_common_theme_label = /** @type {(inputs: Common_Theme_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const tr_common_theme_label = /** @type {(inputs: Common_Theme_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const zh_common_theme_label = /** @type {(inputs: Common_Theme_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主题`)
};

const ja_common_theme_label = /** @type {(inputs: Common_Theme_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テーマ`)
};

/**
* | output |
* | --- |
* | "Theme" |
*
* @param {Common_Theme_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_theme_label = /** @type {((inputs?: Common_Theme_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Theme_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_theme_label(inputs)
	if (locale === "de") return de_common_theme_label(inputs)
	if (locale === "fr") return fr_common_theme_label(inputs)
	if (locale === "it") return it_common_theme_label(inputs)
	if (locale === "nl") return nl_common_theme_label(inputs)
	if (locale === "pl") return pl_common_theme_label(inputs)
	if (locale === "pt") return pt_common_theme_label(inputs)
	if (locale === "ru") return ru_common_theme_label(inputs)
	if (locale === "sv") return sv_common_theme_label(inputs)
	if (locale === "tr") return tr_common_theme_label(inputs)
	if (locale === "zh") return zh_common_theme_label(inputs)
	if (locale === "ja") return ja_common_theme_label(inputs)
	return en_common_theme_label(inputs)
});
