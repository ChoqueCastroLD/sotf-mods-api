/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Compare_SubmitInputs */

const en_mod_knowledge_compare_submit = /** @type {(inputs: Mod_Knowledge_Compare_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compare`)
};

const es_mod_knowledge_compare_submit = /** @type {(inputs: Mod_Knowledge_Compare_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparar`)
};

const de_mod_knowledge_compare_submit = /** @type {(inputs: Mod_Knowledge_Compare_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vergleichen`)
};

const fr_mod_knowledge_compare_submit = /** @type {(inputs: Mod_Knowledge_Compare_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparer`)
};

const it_mod_knowledge_compare_submit = /** @type {(inputs: Mod_Knowledge_Compare_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confronta`)
};

const nl_mod_knowledge_compare_submit = /** @type {(inputs: Mod_Knowledge_Compare_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vergelijken`)
};

const pl_mod_knowledge_compare_submit = /** @type {(inputs: Mod_Knowledge_Compare_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Porównaj`)
};

const pt_mod_knowledge_compare_submit = /** @type {(inputs: Mod_Knowledge_Compare_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparar`)
};

const ru_mod_knowledge_compare_submit = /** @type {(inputs: Mod_Knowledge_Compare_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сравнить`)
};

const sv_mod_knowledge_compare_submit = /** @type {(inputs: Mod_Knowledge_Compare_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jämför`)
};

const tr_mod_knowledge_compare_submit = /** @type {(inputs: Mod_Knowledge_Compare_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karşılaştır`)
};

const zh_mod_knowledge_compare_submit = /** @type {(inputs: Mod_Knowledge_Compare_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`比较`)
};

const ja_mod_knowledge_compare_submit = /** @type {(inputs: Mod_Knowledge_Compare_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`比較`)
};

/**
* | output |
* | --- |
* | "Compare" |
*
* @param {Mod_Knowledge_Compare_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_compare_submit = /** @type {((inputs?: Mod_Knowledge_Compare_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Compare_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_compare_submit(inputs)
	if (locale === "de") return de_mod_knowledge_compare_submit(inputs)
	if (locale === "fr") return fr_mod_knowledge_compare_submit(inputs)
	if (locale === "it") return it_mod_knowledge_compare_submit(inputs)
	if (locale === "nl") return nl_mod_knowledge_compare_submit(inputs)
	if (locale === "pl") return pl_mod_knowledge_compare_submit(inputs)
	if (locale === "pt") return pt_mod_knowledge_compare_submit(inputs)
	if (locale === "ru") return ru_mod_knowledge_compare_submit(inputs)
	if (locale === "sv") return sv_mod_knowledge_compare_submit(inputs)
	if (locale === "tr") return tr_mod_knowledge_compare_submit(inputs)
	if (locale === "zh") return zh_mod_knowledge_compare_submit(inputs)
	if (locale === "ja") return ja_mod_knowledge_compare_submit(inputs)
	return en_mod_knowledge_compare_submit(inputs)
});
