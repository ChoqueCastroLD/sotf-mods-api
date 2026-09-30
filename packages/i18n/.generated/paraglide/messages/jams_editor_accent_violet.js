/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Accent_VioletInputs */

const en_jams_editor_accent_violet = /** @type {(inputs: Jams_Editor_Accent_VioletInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Violet`)
};

const es_jams_editor_accent_violet = /** @type {(inputs: Jams_Editor_Accent_VioletInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Violeta`)
};

const de_jams_editor_accent_violet = /** @type {(inputs: Jams_Editor_Accent_VioletInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Violett`)
};

const fr_jams_editor_accent_violet = /** @type {(inputs: Jams_Editor_Accent_VioletInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Violet`)
};

const it_jams_editor_accent_violet = /** @type {(inputs: Jams_Editor_Accent_VioletInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Viola`)
};

const nl_jams_editor_accent_violet = /** @type {(inputs: Jams_Editor_Accent_VioletInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Violet`)
};

const pl_jams_editor_accent_violet = /** @type {(inputs: Jams_Editor_Accent_VioletInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fiolet`)
};

const pt_jams_editor_accent_violet = /** @type {(inputs: Jams_Editor_Accent_VioletInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Violeta`)
};

const ru_jams_editor_accent_violet = /** @type {(inputs: Jams_Editor_Accent_VioletInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фиолетовый`)
};

const sv_jams_editor_accent_violet = /** @type {(inputs: Jams_Editor_Accent_VioletInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Violett`)
};

const tr_jams_editor_accent_violet = /** @type {(inputs: Jams_Editor_Accent_VioletInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mor`)
};

const zh_jams_editor_accent_violet = /** @type {(inputs: Jams_Editor_Accent_VioletInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`紫罗兰`)
};

const ja_jams_editor_accent_violet = /** @type {(inputs: Jams_Editor_Accent_VioletInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バイオレット`)
};

/**
* | output |
* | --- |
* | "Violet" |
*
* @param {Jams_Editor_Accent_VioletInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_accent_violet = /** @type {((inputs?: Jams_Editor_Accent_VioletInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Accent_VioletInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_accent_violet(inputs)
	if (locale === "de") return de_jams_editor_accent_violet(inputs)
	if (locale === "fr") return fr_jams_editor_accent_violet(inputs)
	if (locale === "it") return it_jams_editor_accent_violet(inputs)
	if (locale === "nl") return nl_jams_editor_accent_violet(inputs)
	if (locale === "pl") return pl_jams_editor_accent_violet(inputs)
	if (locale === "pt") return pt_jams_editor_accent_violet(inputs)
	if (locale === "ru") return ru_jams_editor_accent_violet(inputs)
	if (locale === "sv") return sv_jams_editor_accent_violet(inputs)
	if (locale === "tr") return tr_jams_editor_accent_violet(inputs)
	if (locale === "zh") return zh_jams_editor_accent_violet(inputs)
	if (locale === "ja") return ja_jams_editor_accent_violet(inputs)
	return en_jams_editor_accent_violet(inputs)
});
