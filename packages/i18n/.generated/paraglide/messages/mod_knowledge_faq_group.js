/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Faq_GroupInputs */

const en_mod_knowledge_faq_group = /** @type {(inputs: Mod_Knowledge_Faq_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`FAQ`)
};

const es_mod_knowledge_faq_group = /** @type {(inputs: Mod_Knowledge_Faq_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`FAQ`)
};

const de_mod_knowledge_faq_group = /** @type {(inputs: Mod_Knowledge_Faq_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`FAQ`)
};

const fr_mod_knowledge_faq_group = /** @type {(inputs: Mod_Knowledge_Faq_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`FAQ`)
};

const it_mod_knowledge_faq_group = /** @type {(inputs: Mod_Knowledge_Faq_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`FAQ`)
};

const nl_mod_knowledge_faq_group = /** @type {(inputs: Mod_Knowledge_Faq_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`FAQ`)
};

const pl_mod_knowledge_faq_group = /** @type {(inputs: Mod_Knowledge_Faq_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`FAQ`)
};

const pt_mod_knowledge_faq_group = /** @type {(inputs: Mod_Knowledge_Faq_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`FAQ`)
};

const ru_mod_knowledge_faq_group = /** @type {(inputs: Mod_Knowledge_Faq_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`FAQ`)
};

const sv_mod_knowledge_faq_group = /** @type {(inputs: Mod_Knowledge_Faq_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`FAQ`)
};

const tr_mod_knowledge_faq_group = /** @type {(inputs: Mod_Knowledge_Faq_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SSS`)
};

const zh_mod_knowledge_faq_group = /** @type {(inputs: Mod_Knowledge_Faq_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`FAQ`)
};

const ja_mod_knowledge_faq_group = /** @type {(inputs: Mod_Knowledge_Faq_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`FAQ`)
};

/**
* | output |
* | --- |
* | "FAQ" |
*
* @param {Mod_Knowledge_Faq_GroupInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_faq_group = /** @type {((inputs?: Mod_Knowledge_Faq_GroupInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Faq_GroupInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_faq_group(inputs)
	if (locale === "de") return de_mod_knowledge_faq_group(inputs)
	if (locale === "fr") return fr_mod_knowledge_faq_group(inputs)
	if (locale === "it") return it_mod_knowledge_faq_group(inputs)
	if (locale === "nl") return nl_mod_knowledge_faq_group(inputs)
	if (locale === "pl") return pl_mod_knowledge_faq_group(inputs)
	if (locale === "pt") return pt_mod_knowledge_faq_group(inputs)
	if (locale === "ru") return ru_mod_knowledge_faq_group(inputs)
	if (locale === "sv") return sv_mod_knowledge_faq_group(inputs)
	if (locale === "tr") return tr_mod_knowledge_faq_group(inputs)
	if (locale === "zh") return zh_mod_knowledge_faq_group(inputs)
	if (locale === "ja") return ja_mod_knowledge_faq_group(inputs)
	return en_mod_knowledge_faq_group(inputs)
});
