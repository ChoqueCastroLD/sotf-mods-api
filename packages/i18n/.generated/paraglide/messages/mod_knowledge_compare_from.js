/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Compare_FromInputs */

const en_mod_knowledge_compare_from = /** @type {(inputs: Mod_Knowledge_Compare_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`From version`)
};

const es_mod_knowledge_compare_from = /** @type {(inputs: Mod_Knowledge_Compare_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desde la versión`)
};

const de_mod_knowledge_compare_from = /** @type {(inputs: Mod_Knowledge_Compare_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Von Version`)
};

const fr_mod_knowledge_compare_from = /** @type {(inputs: Mod_Knowledge_Compare_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Depuis la version`)
};

const it_mod_knowledge_compare_from = /** @type {(inputs: Mod_Knowledge_Compare_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dalla versione`)
};

const nl_mod_knowledge_compare_from = /** @type {(inputs: Mod_Knowledge_Compare_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Van versie`)
};

const pl_mod_knowledge_compare_from = /** @type {(inputs: Mod_Knowledge_Compare_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Z wersji`)
};

const pt_mod_knowledge_compare_from = /** @type {(inputs: Mod_Knowledge_Compare_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da versão`)
};

const ru_mod_knowledge_compare_from = /** @type {(inputs: Mod_Knowledge_Compare_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`С версии`)
};

const sv_mod_knowledge_compare_from = /** @type {(inputs: Mod_Knowledge_Compare_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Från version`)
};

const tr_mod_knowledge_compare_from = /** @type {(inputs: Mod_Knowledge_Compare_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaynak sürüm`)
};

const zh_mod_knowledge_compare_from = /** @type {(inputs: Mod_Knowledge_Compare_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`起始版本`)
};

const ja_mod_knowledge_compare_from = /** @type {(inputs: Mod_Knowledge_Compare_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`比較元バージョン`)
};

/**
* | output |
* | --- |
* | "From version" |
*
* @param {Mod_Knowledge_Compare_FromInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_compare_from = /** @type {((inputs?: Mod_Knowledge_Compare_FromInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Compare_FromInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_compare_from(inputs)
	if (locale === "de") return de_mod_knowledge_compare_from(inputs)
	if (locale === "fr") return fr_mod_knowledge_compare_from(inputs)
	if (locale === "it") return it_mod_knowledge_compare_from(inputs)
	if (locale === "nl") return nl_mod_knowledge_compare_from(inputs)
	if (locale === "pl") return pl_mod_knowledge_compare_from(inputs)
	if (locale === "pt") return pt_mod_knowledge_compare_from(inputs)
	if (locale === "ru") return ru_mod_knowledge_compare_from(inputs)
	if (locale === "sv") return sv_mod_knowledge_compare_from(inputs)
	if (locale === "tr") return tr_mod_knowledge_compare_from(inputs)
	if (locale === "zh") return zh_mod_knowledge_compare_from(inputs)
	if (locale === "ja") return ja_mod_knowledge_compare_from(inputs)
	return en_mod_knowledge_compare_from(inputs)
});
