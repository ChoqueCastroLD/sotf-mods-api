/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Compare_LinkInputs */

const en_mod_knowledge_compare_link = /** @type {(inputs: Mod_Knowledge_Compare_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compare versions`)
};

const es_mod_knowledge_compare_link = /** @type {(inputs: Mod_Knowledge_Compare_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparar versiones`)
};

const de_mod_knowledge_compare_link = /** @type {(inputs: Mod_Knowledge_Compare_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen vergleichen`)
};

const fr_mod_knowledge_compare_link = /** @type {(inputs: Mod_Knowledge_Compare_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparer les versions`)
};

const it_mod_knowledge_compare_link = /** @type {(inputs: Mod_Knowledge_Compare_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confronta le versioni`)
};

const nl_mod_knowledge_compare_link = /** @type {(inputs: Mod_Knowledge_Compare_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versies vergelijken`)
};

const pl_mod_knowledge_compare_link = /** @type {(inputs: Mod_Knowledge_Compare_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Porównaj wersje`)
};

const pt_mod_knowledge_compare_link = /** @type {(inputs: Mod_Knowledge_Compare_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparar versões`)
};

const ru_mod_knowledge_compare_link = /** @type {(inputs: Mod_Knowledge_Compare_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сравнить версии`)
};

const sv_mod_knowledge_compare_link = /** @type {(inputs: Mod_Knowledge_Compare_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jämför versioner`)
};

const tr_mod_knowledge_compare_link = /** @type {(inputs: Mod_Knowledge_Compare_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürümleri karşılaştır`)
};

const zh_mod_knowledge_compare_link = /** @type {(inputs: Mod_Knowledge_Compare_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`比较版本`)
};

const ja_mod_knowledge_compare_link = /** @type {(inputs: Mod_Knowledge_Compare_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンを比較`)
};

/**
* | output |
* | --- |
* | "Compare versions" |
*
* @param {Mod_Knowledge_Compare_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_compare_link = /** @type {((inputs?: Mod_Knowledge_Compare_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Compare_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_compare_link(inputs)
	if (locale === "de") return de_mod_knowledge_compare_link(inputs)
	if (locale === "fr") return fr_mod_knowledge_compare_link(inputs)
	if (locale === "it") return it_mod_knowledge_compare_link(inputs)
	if (locale === "nl") return nl_mod_knowledge_compare_link(inputs)
	if (locale === "pl") return pl_mod_knowledge_compare_link(inputs)
	if (locale === "pt") return pt_mod_knowledge_compare_link(inputs)
	if (locale === "ru") return ru_mod_knowledge_compare_link(inputs)
	if (locale === "sv") return sv_mod_knowledge_compare_link(inputs)
	if (locale === "tr") return tr_mod_knowledge_compare_link(inputs)
	if (locale === "zh") return zh_mod_knowledge_compare_link(inputs)
	if (locale === "ja") return ja_mod_knowledge_compare_link(inputs)
	return en_mod_knowledge_compare_link(inputs)
});
