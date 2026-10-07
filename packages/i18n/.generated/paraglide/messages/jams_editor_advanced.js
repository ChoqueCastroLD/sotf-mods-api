/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_AdvancedInputs */

const en_jams_editor_advanced = /** @type {(inputs: Jams_Editor_AdvancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manual control`)
};

const es_jams_editor_advanced = /** @type {(inputs: Jams_Editor_AdvancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Control manual`)
};

const de_jams_editor_advanced = /** @type {(inputs: Jams_Editor_AdvancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manuelle Steuerung`)
};

const fr_jams_editor_advanced = /** @type {(inputs: Jams_Editor_AdvancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contrôle manuel`)
};

const it_jams_editor_advanced = /** @type {(inputs: Jams_Editor_AdvancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controllo manuale`)
};

const nl_jams_editor_advanced = /** @type {(inputs: Jams_Editor_AdvancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handmatige bediening`)
};

const pl_jams_editor_advanced = /** @type {(inputs: Jams_Editor_AdvancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sterowanie ręczne`)
};

const pt_jams_editor_advanced = /** @type {(inputs: Jams_Editor_AdvancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controle manual`)
};

const ru_jams_editor_advanced = /** @type {(inputs: Jams_Editor_AdvancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ручное управление`)
};

const sv_jams_editor_advanced = /** @type {(inputs: Jams_Editor_AdvancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manuell styrning`)
};

const tr_jams_editor_advanced = /** @type {(inputs: Jams_Editor_AdvancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elle denetim`)
};

const zh_jams_editor_advanced = /** @type {(inputs: Jams_Editor_AdvancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`手动控制`)
};

const ja_jams_editor_advanced = /** @type {(inputs: Jams_Editor_AdvancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`手動での操作`)
};

/**
* | output |
* | --- |
* | "Manual control" |
*
* @param {Jams_Editor_AdvancedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_advanced = /** @type {((inputs?: Jams_Editor_AdvancedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_AdvancedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_advanced(inputs)
	if (locale === "de") return de_jams_editor_advanced(inputs)
	if (locale === "fr") return fr_jams_editor_advanced(inputs)
	if (locale === "it") return it_jams_editor_advanced(inputs)
	if (locale === "nl") return nl_jams_editor_advanced(inputs)
	if (locale === "pl") return pl_jams_editor_advanced(inputs)
	if (locale === "pt") return pt_jams_editor_advanced(inputs)
	if (locale === "ru") return ru_jams_editor_advanced(inputs)
	if (locale === "sv") return sv_jams_editor_advanced(inputs)
	if (locale === "tr") return tr_jams_editor_advanced(inputs)
	if (locale === "zh") return zh_jams_editor_advanced(inputs)
	if (locale === "ja") return ja_jams_editor_advanced(inputs)
	return en_jams_editor_advanced(inputs)
});
