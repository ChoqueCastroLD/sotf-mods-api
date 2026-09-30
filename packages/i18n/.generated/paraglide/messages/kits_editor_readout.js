/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Editor_ReadoutInputs */

const en_kits_editor_readout = /** @type {(inputs: Kits_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blueprint`)
};

const es_kits_editor_readout = /** @type {(inputs: Kits_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plano`)
};

const de_kits_editor_readout = /** @type {(inputs: Kits_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bauplan`)
};

const fr_kits_editor_readout = /** @type {(inputs: Kits_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan`)
};

const it_kits_editor_readout = /** @type {(inputs: Kits_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progetto`)
};

const nl_kits_editor_readout = /** @type {(inputs: Kits_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blauwdruk`)
};

const pl_kits_editor_readout = /** @type {(inputs: Kits_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan`)
};

const pt_kits_editor_readout = /** @type {(inputs: Kits_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planta`)
};

const ru_kits_editor_readout = /** @type {(inputs: Kits_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Чертёж`)
};

const sv_kits_editor_readout = /** @type {(inputs: Kits_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritning`)
};

const tr_kits_editor_readout = /** @type {(inputs: Kits_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan`)
};

const zh_kits_editor_readout = /** @type {(inputs: Kits_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`蓝图`)
};

const ja_kits_editor_readout = /** @type {(inputs: Kits_Editor_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設計図`)
};

/**
* | output |
* | --- |
* | "Blueprint" |
*
* @param {Kits_Editor_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_editor_readout = /** @type {((inputs?: Kits_Editor_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Editor_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_editor_readout(inputs)
	if (locale === "de") return de_kits_editor_readout(inputs)
	if (locale === "fr") return fr_kits_editor_readout(inputs)
	if (locale === "it") return it_kits_editor_readout(inputs)
	if (locale === "nl") return nl_kits_editor_readout(inputs)
	if (locale === "pl") return pl_kits_editor_readout(inputs)
	if (locale === "pt") return pt_kits_editor_readout(inputs)
	if (locale === "ru") return ru_kits_editor_readout(inputs)
	if (locale === "sv") return sv_kits_editor_readout(inputs)
	if (locale === "tr") return tr_kits_editor_readout(inputs)
	if (locale === "zh") return zh_kits_editor_readout(inputs)
	if (locale === "ja") return ja_kits_editor_readout(inputs)
	return en_kits_editor_readout(inputs)
});
