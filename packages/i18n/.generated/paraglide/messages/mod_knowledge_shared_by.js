/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ handle: NonNullable<unknown> }} Mod_Knowledge_Shared_ByInputs */

const en_mod_knowledge_shared_by = /** @type {(inputs: Mod_Knowledge_Shared_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`by @${i?.handle}`)
};

const es_mod_knowledge_shared_by = /** @type {(inputs: Mod_Knowledge_Shared_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`de @${i?.handle}`)
};

const de_mod_knowledge_shared_by = /** @type {(inputs: Mod_Knowledge_Shared_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`von @${i?.handle}`)
};

const fr_mod_knowledge_shared_by = /** @type {(inputs: Mod_Knowledge_Shared_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`par @${i?.handle}`)
};

const it_mod_knowledge_shared_by = /** @type {(inputs: Mod_Knowledge_Shared_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`di @${i?.handle}`)
};

const nl_mod_knowledge_shared_by = /** @type {(inputs: Mod_Knowledge_Shared_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`door @${i?.handle}`)
};

const pl_mod_knowledge_shared_by = /** @type {(inputs: Mod_Knowledge_Shared_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`autor: @${i?.handle}`)
};

const pt_mod_knowledge_shared_by = /** @type {(inputs: Mod_Knowledge_Shared_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`de @${i?.handle}`)
};

const ru_mod_knowledge_shared_by = /** @type {(inputs: Mod_Knowledge_Shared_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`автор: @${i?.handle}`)
};

const sv_mod_knowledge_shared_by = /** @type {(inputs: Mod_Knowledge_Shared_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`av @${i?.handle}`)
};

const tr_mod_knowledge_shared_by = /** @type {(inputs: Mod_Knowledge_Shared_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`@${i?.handle} tarafından`)
};

const zh_mod_knowledge_shared_by = /** @type {(inputs: Mod_Knowledge_Shared_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者：@${i?.handle}`)
};

const ja_mod_knowledge_shared_by = /** @type {(inputs: Mod_Knowledge_Shared_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者：@${i?.handle}`)
};

/**
* | output |
* | --- |
* | "by @{handle}" |
*
* @param {Mod_Knowledge_Shared_ByInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_shared_by = /** @type {((inputs: Mod_Knowledge_Shared_ByInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Shared_ByInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_shared_by(inputs)
	if (locale === "de") return de_mod_knowledge_shared_by(inputs)
	if (locale === "fr") return fr_mod_knowledge_shared_by(inputs)
	if (locale === "it") return it_mod_knowledge_shared_by(inputs)
	if (locale === "nl") return nl_mod_knowledge_shared_by(inputs)
	if (locale === "pl") return pl_mod_knowledge_shared_by(inputs)
	if (locale === "pt") return pt_mod_knowledge_shared_by(inputs)
	if (locale === "ru") return ru_mod_knowledge_shared_by(inputs)
	if (locale === "sv") return sv_mod_knowledge_shared_by(inputs)
	if (locale === "tr") return tr_mod_knowledge_shared_by(inputs)
	if (locale === "zh") return zh_mod_knowledge_shared_by(inputs)
	if (locale === "ja") return ja_mod_knowledge_shared_by(inputs)
	return en_mod_knowledge_shared_by(inputs)
});
