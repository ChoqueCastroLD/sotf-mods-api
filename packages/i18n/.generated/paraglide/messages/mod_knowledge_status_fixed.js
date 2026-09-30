/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Status_FixedInputs */

const en_mod_knowledge_status_fixed = /** @type {(inputs: Mod_Knowledge_Status_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fixed`)
};

const es_mod_knowledge_status_fixed = /** @type {(inputs: Mod_Knowledge_Status_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corregido`)
};

const de_mod_knowledge_status_fixed = /** @type {(inputs: Mod_Knowledge_Status_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Behoben`)
};

const fr_mod_knowledge_status_fixed = /** @type {(inputs: Mod_Knowledge_Status_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrigé`)
};

const it_mod_knowledge_status_fixed = /** @type {(inputs: Mod_Knowledge_Status_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risolto`)
};

const nl_mod_knowledge_status_fixed = /** @type {(inputs: Mod_Knowledge_Status_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opgelost`)
};

const pl_mod_knowledge_status_fixed = /** @type {(inputs: Mod_Knowledge_Status_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naprawione`)
};

const pt_mod_knowledge_status_fixed = /** @type {(inputs: Mod_Knowledge_Status_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrigido`)
};

const ru_mod_knowledge_status_fixed = /** @type {(inputs: Mod_Knowledge_Status_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Исправлено`)
};

const sv_mod_knowledge_status_fixed = /** @type {(inputs: Mod_Knowledge_Status_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åtgärdat`)
};

const tr_mod_knowledge_status_fixed = /** @type {(inputs: Mod_Knowledge_Status_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzeltildi`)
};

const zh_mod_knowledge_status_fixed = /** @type {(inputs: Mod_Knowledge_Status_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已修复`)
};

const ja_mod_knowledge_status_fixed = /** @type {(inputs: Mod_Knowledge_Status_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修正済み`)
};

/**
* | output |
* | --- |
* | "Fixed" |
*
* @param {Mod_Knowledge_Status_FixedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_status_fixed = /** @type {((inputs?: Mod_Knowledge_Status_FixedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Status_FixedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_status_fixed(inputs)
	if (locale === "de") return de_mod_knowledge_status_fixed(inputs)
	if (locale === "fr") return fr_mod_knowledge_status_fixed(inputs)
	if (locale === "it") return it_mod_knowledge_status_fixed(inputs)
	if (locale === "nl") return nl_mod_knowledge_status_fixed(inputs)
	if (locale === "pl") return pl_mod_knowledge_status_fixed(inputs)
	if (locale === "pt") return pt_mod_knowledge_status_fixed(inputs)
	if (locale === "ru") return ru_mod_knowledge_status_fixed(inputs)
	if (locale === "sv") return sv_mod_knowledge_status_fixed(inputs)
	if (locale === "tr") return tr_mod_knowledge_status_fixed(inputs)
	if (locale === "zh") return zh_mod_knowledge_status_fixed(inputs)
	if (locale === "ja") return ja_mod_knowledge_status_fixed(inputs)
	return en_mod_knowledge_status_fixed(inputs)
});
