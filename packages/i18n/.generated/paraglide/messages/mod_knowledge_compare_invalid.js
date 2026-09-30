/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Compare_InvalidInputs */

const en_mod_knowledge_compare_invalid = /** @type {(inputs: Mod_Knowledge_Compare_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose two different versions of this mod.`)
};

const es_mod_knowledge_compare_invalid = /** @type {(inputs: Mod_Knowledge_Compare_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige dos versiones distintas de este mod.`)
};

const de_mod_knowledge_compare_invalid = /** @type {(inputs: Mod_Knowledge_Compare_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle zwei verschiedene Versionen dieses Mods.`)
};

const fr_mod_knowledge_compare_invalid = /** @type {(inputs: Mod_Knowledge_Compare_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez deux versions différentes de ce mod.`)
};

const it_mod_knowledge_compare_invalid = /** @type {(inputs: Mod_Knowledge_Compare_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli due versioni diverse di questo mod.`)
};

const nl_mod_knowledge_compare_invalid = /** @type {(inputs: Mod_Knowledge_Compare_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies twee verschillende versies van deze mod.`)
};

const pl_mod_knowledge_compare_invalid = /** @type {(inputs: Mod_Knowledge_Compare_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz dwie różne wersje tego moda.`)
};

const pt_mod_knowledge_compare_invalid = /** @type {(inputs: Mod_Knowledge_Compare_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha duas versões diferentes deste mod.`)
};

const ru_mod_knowledge_compare_invalid = /** @type {(inputs: Mod_Knowledge_Compare_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите две разные версии этого мода.`)
};

const sv_mod_knowledge_compare_invalid = /** @type {(inputs: Mod_Knowledge_Compare_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj två olika versioner av den här moden.`)
};

const tr_mod_knowledge_compare_invalid = /** @type {(inputs: Mod_Knowledge_Compare_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu modun iki farklı sürümünü seç.`)
};

const zh_mod_knowledge_compare_invalid = /** @type {(inputs: Mod_Knowledge_Compare_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择此模组的两个不同版本。`)
};

const ja_mod_knowledge_compare_invalid = /** @type {(inputs: Mod_Knowledge_Compare_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このModの異なる2つのバージョンを選んでください。`)
};

/**
* | output |
* | --- |
* | "Choose two different versions of this mod." |
*
* @param {Mod_Knowledge_Compare_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_compare_invalid = /** @type {((inputs?: Mod_Knowledge_Compare_InvalidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Compare_InvalidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_compare_invalid(inputs)
	if (locale === "de") return de_mod_knowledge_compare_invalid(inputs)
	if (locale === "fr") return fr_mod_knowledge_compare_invalid(inputs)
	if (locale === "it") return it_mod_knowledge_compare_invalid(inputs)
	if (locale === "nl") return nl_mod_knowledge_compare_invalid(inputs)
	if (locale === "pl") return pl_mod_knowledge_compare_invalid(inputs)
	if (locale === "pt") return pt_mod_knowledge_compare_invalid(inputs)
	if (locale === "ru") return ru_mod_knowledge_compare_invalid(inputs)
	if (locale === "sv") return sv_mod_knowledge_compare_invalid(inputs)
	if (locale === "tr") return tr_mod_knowledge_compare_invalid(inputs)
	if (locale === "zh") return zh_mod_knowledge_compare_invalid(inputs)
	if (locale === "ja") return ja_mod_knowledge_compare_invalid(inputs)
	return en_mod_knowledge_compare_invalid(inputs)
});
