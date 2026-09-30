/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Diff_NoneInputs */

const en_mod_knowledge_diff_none = /** @type {(inputs: Mod_Knowledge_Diff_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`none`)
};

const es_mod_knowledge_diff_none = /** @type {(inputs: Mod_Knowledge_Diff_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ninguno`)
};

const de_mod_knowledge_diff_none = /** @type {(inputs: Mod_Knowledge_Diff_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`keiner`)
};

const fr_mod_knowledge_diff_none = /** @type {(inputs: Mod_Knowledge_Diff_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`aucun`)
};

const it_mod_knowledge_diff_none = /** @type {(inputs: Mod_Knowledge_Diff_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`nessuno`)
};

const nl_mod_knowledge_diff_none = /** @type {(inputs: Mod_Knowledge_Diff_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`geen`)
};

const pl_mod_knowledge_diff_none = /** @type {(inputs: Mod_Knowledge_Diff_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`brak`)
};

const pt_mod_knowledge_diff_none = /** @type {(inputs: Mod_Knowledge_Diff_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`nenhum`)
};

const ru_mod_knowledge_diff_none = /** @type {(inputs: Mod_Knowledge_Diff_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`нет`)
};

const sv_mod_knowledge_diff_none = /** @type {(inputs: Mod_Knowledge_Diff_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ingen`)
};

const tr_mod_knowledge_diff_none = /** @type {(inputs: Mod_Knowledge_Diff_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`yok`)
};

const zh_mod_knowledge_diff_none = /** @type {(inputs: Mod_Knowledge_Diff_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无`)
};

const ja_mod_knowledge_diff_none = /** @type {(inputs: Mod_Knowledge_Diff_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`なし`)
};

/**
* | output |
* | --- |
* | "none" |
*
* @param {Mod_Knowledge_Diff_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_diff_none = /** @type {((inputs?: Mod_Knowledge_Diff_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_diff_none(inputs)
	if (locale === "de") return de_mod_knowledge_diff_none(inputs)
	if (locale === "fr") return fr_mod_knowledge_diff_none(inputs)
	if (locale === "it") return it_mod_knowledge_diff_none(inputs)
	if (locale === "nl") return nl_mod_knowledge_diff_none(inputs)
	if (locale === "pl") return pl_mod_knowledge_diff_none(inputs)
	if (locale === "pt") return pt_mod_knowledge_diff_none(inputs)
	if (locale === "ru") return ru_mod_knowledge_diff_none(inputs)
	if (locale === "sv") return sv_mod_knowledge_diff_none(inputs)
	if (locale === "tr") return tr_mod_knowledge_diff_none(inputs)
	if (locale === "zh") return zh_mod_knowledge_diff_none(inputs)
	if (locale === "ja") return ja_mod_knowledge_diff_none(inputs)
	return en_mod_knowledge_diff_none(inputs)
});
