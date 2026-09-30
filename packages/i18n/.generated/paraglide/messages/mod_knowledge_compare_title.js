/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Compare_TitleInputs */

const en_mod_knowledge_compare_title = /** @type {(inputs: Mod_Knowledge_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compare versions`)
};

const es_mod_knowledge_compare_title = /** @type {(inputs: Mod_Knowledge_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparar versiones`)
};

const de_mod_knowledge_compare_title = /** @type {(inputs: Mod_Knowledge_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen vergleichen`)
};

const fr_mod_knowledge_compare_title = /** @type {(inputs: Mod_Knowledge_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparer les versions`)
};

const it_mod_knowledge_compare_title = /** @type {(inputs: Mod_Knowledge_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confronta le versioni`)
};

const nl_mod_knowledge_compare_title = /** @type {(inputs: Mod_Knowledge_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versies vergelijken`)
};

const pl_mod_knowledge_compare_title = /** @type {(inputs: Mod_Knowledge_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Porównanie wersji`)
};

const pt_mod_knowledge_compare_title = /** @type {(inputs: Mod_Knowledge_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparar versões`)
};

const ru_mod_knowledge_compare_title = /** @type {(inputs: Mod_Knowledge_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сравнение версий`)
};

const sv_mod_knowledge_compare_title = /** @type {(inputs: Mod_Knowledge_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jämför versioner`)
};

const tr_mod_knowledge_compare_title = /** @type {(inputs: Mod_Knowledge_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm karşılaştırması`)
};

const zh_mod_knowledge_compare_title = /** @type {(inputs: Mod_Knowledge_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本比较`)
};

const ja_mod_knowledge_compare_title = /** @type {(inputs: Mod_Knowledge_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン比較`)
};

/**
* | output |
* | --- |
* | "Compare versions" |
*
* @param {Mod_Knowledge_Compare_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_compare_title = /** @type {((inputs?: Mod_Knowledge_Compare_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Compare_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_compare_title(inputs)
	if (locale === "de") return de_mod_knowledge_compare_title(inputs)
	if (locale === "fr") return fr_mod_knowledge_compare_title(inputs)
	if (locale === "it") return it_mod_knowledge_compare_title(inputs)
	if (locale === "nl") return nl_mod_knowledge_compare_title(inputs)
	if (locale === "pl") return pl_mod_knowledge_compare_title(inputs)
	if (locale === "pt") return pt_mod_knowledge_compare_title(inputs)
	if (locale === "ru") return ru_mod_knowledge_compare_title(inputs)
	if (locale === "sv") return sv_mod_knowledge_compare_title(inputs)
	if (locale === "tr") return tr_mod_knowledge_compare_title(inputs)
	if (locale === "zh") return zh_mod_knowledge_compare_title(inputs)
	if (locale === "ja") return ja_mod_knowledge_compare_title(inputs)
	return en_mod_knowledge_compare_title(inputs)
});
