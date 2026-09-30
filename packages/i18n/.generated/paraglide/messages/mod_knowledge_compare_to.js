/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Compare_ToInputs */

const en_mod_knowledge_compare_to = /** @type {(inputs: Mod_Knowledge_Compare_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To version`)
};

const es_mod_knowledge_compare_to = /** @type {(inputs: Mod_Knowledge_Compare_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hasta la versión`)
};

const de_mod_knowledge_compare_to = /** @type {(inputs: Mod_Knowledge_Compare_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bis Version`)
};

const fr_mod_knowledge_compare_to = /** @type {(inputs: Mod_Knowledge_Compare_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vers la version`)
};

const it_mod_knowledge_compare_to = /** @type {(inputs: Mod_Knowledge_Compare_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla versione`)
};

const nl_mod_knowledge_compare_to = /** @type {(inputs: Mod_Knowledge_Compare_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naar versie`)
};

const pl_mod_knowledge_compare_to = /** @type {(inputs: Mod_Knowledge_Compare_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do wersji`)
};

const pt_mod_knowledge_compare_to = /** @type {(inputs: Mod_Knowledge_Compare_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Até a versão`)
};

const ru_mod_knowledge_compare_to = /** @type {(inputs: Mod_Knowledge_Compare_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`До версии`)
};

const sv_mod_knowledge_compare_to = /** @type {(inputs: Mod_Knowledge_Compare_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Till version`)
};

const tr_mod_knowledge_compare_to = /** @type {(inputs: Mod_Knowledge_Compare_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hedef sürüm`)
};

const zh_mod_knowledge_compare_to = /** @type {(inputs: Mod_Knowledge_Compare_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`目标版本`)
};

const ja_mod_knowledge_compare_to = /** @type {(inputs: Mod_Knowledge_Compare_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`比較先バージョン`)
};

/**
* | output |
* | --- |
* | "To version" |
*
* @param {Mod_Knowledge_Compare_ToInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_compare_to = /** @type {((inputs?: Mod_Knowledge_Compare_ToInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Compare_ToInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_compare_to(inputs)
	if (locale === "de") return de_mod_knowledge_compare_to(inputs)
	if (locale === "fr") return fr_mod_knowledge_compare_to(inputs)
	if (locale === "it") return it_mod_knowledge_compare_to(inputs)
	if (locale === "nl") return nl_mod_knowledge_compare_to(inputs)
	if (locale === "pl") return pl_mod_knowledge_compare_to(inputs)
	if (locale === "pt") return pt_mod_knowledge_compare_to(inputs)
	if (locale === "ru") return ru_mod_knowledge_compare_to(inputs)
	if (locale === "sv") return sv_mod_knowledge_compare_to(inputs)
	if (locale === "tr") return tr_mod_knowledge_compare_to(inputs)
	if (locale === "zh") return zh_mod_knowledge_compare_to(inputs)
	if (locale === "ja") return ja_mod_knowledge_compare_to(inputs)
	return en_mod_knowledge_compare_to(inputs)
});
