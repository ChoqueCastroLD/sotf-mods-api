/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Compare_FailedInputs */

const en_mod_knowledge_compare_failed = /** @type {(inputs: Mod_Knowledge_Compare_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`These versions cannot be compared.`)
};

const es_mod_knowledge_compare_failed = /** @type {(inputs: Mod_Knowledge_Compare_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estas versiones no se pueden comparar.`)
};

const de_mod_knowledge_compare_failed = /** @type {(inputs: Mod_Knowledge_Compare_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Versionen lassen sich nicht vergleichen.`)
};

const fr_mod_knowledge_compare_failed = /** @type {(inputs: Mod_Knowledge_Compare_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ces versions ne peuvent pas être comparées.`)
};

const it_mod_knowledge_compare_failed = /** @type {(inputs: Mod_Knowledge_Compare_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Queste versioni non possono essere confrontate.`)
};

const nl_mod_knowledge_compare_failed = /** @type {(inputs: Mod_Knowledge_Compare_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze versies kunnen niet worden vergeleken.`)
};

const pl_mod_knowledge_compare_failed = /** @type {(inputs: Mod_Knowledge_Compare_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tych wersji nie można porównać.`)
};

const pt_mod_knowledge_compare_failed = /** @type {(inputs: Mod_Knowledge_Compare_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estas versões não podem ser comparadas.`)
};

const ru_mod_knowledge_compare_failed = /** @type {(inputs: Mod_Knowledge_Compare_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эти версии нельзя сравнить.`)
};

const sv_mod_knowledge_compare_failed = /** @type {(inputs: Mod_Knowledge_Compare_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De här versionerna kan inte jämföras.`)
};

const tr_mod_knowledge_compare_failed = /** @type {(inputs: Mod_Knowledge_Compare_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sürümler karşılaştırılamıyor.`)
};

const zh_mod_knowledge_compare_failed = /** @type {(inputs: Mod_Knowledge_Compare_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法比较这两个版本。`)
};

const ja_mod_knowledge_compare_failed = /** @type {(inputs: Mod_Knowledge_Compare_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`これらのバージョンは比較できません。`)
};

/**
* | output |
* | --- |
* | "These versions cannot be compared." |
*
* @param {Mod_Knowledge_Compare_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_compare_failed = /** @type {((inputs?: Mod_Knowledge_Compare_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Compare_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_compare_failed(inputs)
	if (locale === "de") return de_mod_knowledge_compare_failed(inputs)
	if (locale === "fr") return fr_mod_knowledge_compare_failed(inputs)
	if (locale === "it") return it_mod_knowledge_compare_failed(inputs)
	if (locale === "nl") return nl_mod_knowledge_compare_failed(inputs)
	if (locale === "pl") return pl_mod_knowledge_compare_failed(inputs)
	if (locale === "pt") return pt_mod_knowledge_compare_failed(inputs)
	if (locale === "ru") return ru_mod_knowledge_compare_failed(inputs)
	if (locale === "sv") return sv_mod_knowledge_compare_failed(inputs)
	if (locale === "tr") return tr_mod_knowledge_compare_failed(inputs)
	if (locale === "zh") return zh_mod_knowledge_compare_failed(inputs)
	if (locale === "ja") return ja_mod_knowledge_compare_failed(inputs)
	return en_mod_knowledge_compare_failed(inputs)
});
