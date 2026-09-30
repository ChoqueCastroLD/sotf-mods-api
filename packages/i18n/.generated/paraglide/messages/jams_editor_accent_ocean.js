/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Accent_OceanInputs */

const en_jams_editor_accent_ocean = /** @type {(inputs: Jams_Editor_Accent_OceanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocean blue`)
};

const es_jams_editor_accent_ocean = /** @type {(inputs: Jams_Editor_Accent_OceanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Azul océano`)
};

const de_jams_editor_accent_ocean = /** @type {(inputs: Jams_Editor_Accent_OceanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ozeanblau`)
};

const fr_jams_editor_accent_ocean = /** @type {(inputs: Jams_Editor_Accent_OceanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bleu océan`)
};

const it_jams_editor_accent_ocean = /** @type {(inputs: Jams_Editor_Accent_OceanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blu oceano`)
};

const nl_jams_editor_accent_ocean = /** @type {(inputs: Jams_Editor_Accent_OceanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oceaanblauw`)
};

const pl_jams_editor_accent_ocean = /** @type {(inputs: Jams_Editor_Accent_OceanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Błękit oceanu`)
};

const pt_jams_editor_accent_ocean = /** @type {(inputs: Jams_Editor_Accent_OceanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Azul oceano`)
};

const ru_jams_editor_accent_ocean = /** @type {(inputs: Jams_Editor_Accent_OceanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Океанский синий`)
};

const sv_jams_editor_accent_ocean = /** @type {(inputs: Jams_Editor_Accent_OceanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Havsblå`)
};

const tr_jams_editor_accent_ocean = /** @type {(inputs: Jams_Editor_Accent_OceanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okyanus mavisi`)
};

const zh_jams_editor_accent_ocean = /** @type {(inputs: Jams_Editor_Accent_OceanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`海洋蓝`)
};

const ja_jams_editor_accent_ocean = /** @type {(inputs: Jams_Editor_Accent_OceanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オーシャンブルー`)
};

/**
* | output |
* | --- |
* | "Ocean blue" |
*
* @param {Jams_Editor_Accent_OceanInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_accent_ocean = /** @type {((inputs?: Jams_Editor_Accent_OceanInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Accent_OceanInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_accent_ocean(inputs)
	if (locale === "de") return de_jams_editor_accent_ocean(inputs)
	if (locale === "fr") return fr_jams_editor_accent_ocean(inputs)
	if (locale === "it") return it_jams_editor_accent_ocean(inputs)
	if (locale === "nl") return nl_jams_editor_accent_ocean(inputs)
	if (locale === "pl") return pl_jams_editor_accent_ocean(inputs)
	if (locale === "pt") return pt_jams_editor_accent_ocean(inputs)
	if (locale === "ru") return ru_jams_editor_accent_ocean(inputs)
	if (locale === "sv") return sv_jams_editor_accent_ocean(inputs)
	if (locale === "tr") return tr_jams_editor_accent_ocean(inputs)
	if (locale === "zh") return zh_jams_editor_accent_ocean(inputs)
	if (locale === "ja") return ja_jams_editor_accent_ocean(inputs)
	return en_jams_editor_accent_ocean(inputs)
});
