/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Editor_BoldInputs */

const en_social_editor_bold = /** @type {(inputs: Social_Editor_BoldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bold`)
};

const es_social_editor_bold = /** @type {(inputs: Social_Editor_BoldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Negrita`)
};

const de_social_editor_bold = /** @type {(inputs: Social_Editor_BoldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fett`)
};

const fr_social_editor_bold = /** @type {(inputs: Social_Editor_BoldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gras`)
};

const it_social_editor_bold = /** @type {(inputs: Social_Editor_BoldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grassetto`)
};

const nl_social_editor_bold = /** @type {(inputs: Social_Editor_BoldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vet`)
};

const pl_social_editor_bold = /** @type {(inputs: Social_Editor_BoldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pogrubienie`)
};

const pt_social_editor_bold = /** @type {(inputs: Social_Editor_BoldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Negrito`)
};

const ru_social_editor_bold = /** @type {(inputs: Social_Editor_BoldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Жирный`)
};

const sv_social_editor_bold = /** @type {(inputs: Social_Editor_BoldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fetstil`)
};

const tr_social_editor_bold = /** @type {(inputs: Social_Editor_BoldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kalın`)
};

const zh_social_editor_bold = /** @type {(inputs: Social_Editor_BoldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`粗体`)
};

const ja_social_editor_bold = /** @type {(inputs: Social_Editor_BoldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`太字`)
};

/**
* | output |
* | --- |
* | "Bold" |
*
* @param {Social_Editor_BoldInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_bold = /** @type {((inputs?: Social_Editor_BoldInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_BoldInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_bold(inputs)
	if (locale === "de") return de_social_editor_bold(inputs)
	if (locale === "fr") return fr_social_editor_bold(inputs)
	if (locale === "it") return it_social_editor_bold(inputs)
	if (locale === "nl") return nl_social_editor_bold(inputs)
	if (locale === "pl") return pl_social_editor_bold(inputs)
	if (locale === "pt") return pt_social_editor_bold(inputs)
	if (locale === "ru") return ru_social_editor_bold(inputs)
	if (locale === "sv") return sv_social_editor_bold(inputs)
	if (locale === "tr") return tr_social_editor_bold(inputs)
	if (locale === "zh") return zh_social_editor_bold(inputs)
	if (locale === "ja") return ja_social_editor_bold(inputs)
	return en_social_editor_bold(inputs)
});
