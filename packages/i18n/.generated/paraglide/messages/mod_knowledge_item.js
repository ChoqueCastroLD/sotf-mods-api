/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ n: NonNullable<unknown> }} Mod_Knowledge_ItemInputs */

const en_mod_knowledge_item = /** @type {(inputs: Mod_Knowledge_ItemInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Entry ${i?.n}`)
};

const es_mod_knowledge_item = /** @type {(inputs: Mod_Knowledge_ItemInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Entrada ${i?.n}`)
};

const de_mod_knowledge_item = /** @type {(inputs: Mod_Knowledge_ItemInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Eintrag ${i?.n}`)
};

const fr_mod_knowledge_item = /** @type {(inputs: Mod_Knowledge_ItemInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Entrée ${i?.n}`)
};

const it_mod_knowledge_item = /** @type {(inputs: Mod_Knowledge_ItemInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Voce ${i?.n}`)
};

const nl_mod_knowledge_item = /** @type {(inputs: Mod_Knowledge_ItemInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Item ${i?.n}`)
};

const pl_mod_knowledge_item = /** @type {(inputs: Mod_Knowledge_ItemInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pozycja ${i?.n}`)
};

const pt_mod_knowledge_item = /** @type {(inputs: Mod_Knowledge_ItemInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Entrada ${i?.n}`)
};

const ru_mod_knowledge_item = /** @type {(inputs: Mod_Knowledge_ItemInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Запись ${i?.n}`)
};

const sv_mod_knowledge_item = /** @type {(inputs: Mod_Knowledge_ItemInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Post ${i?.n}`)
};

const tr_mod_knowledge_item = /** @type {(inputs: Mod_Knowledge_ItemInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Girdi ${i?.n}`)
};

const zh_mod_knowledge_item = /** @type {(inputs: Mod_Knowledge_ItemInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`条目 ${i?.n}`)
};

const ja_mod_knowledge_item = /** @type {(inputs: Mod_Knowledge_ItemInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`項目 ${i?.n}`)
};

/**
* | output |
* | --- |
* | "Entry {n}" |
*
* @param {Mod_Knowledge_ItemInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_item = /** @type {((inputs: Mod_Knowledge_ItemInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_ItemInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_item(inputs)
	if (locale === "de") return de_mod_knowledge_item(inputs)
	if (locale === "fr") return fr_mod_knowledge_item(inputs)
	if (locale === "it") return it_mod_knowledge_item(inputs)
	if (locale === "nl") return nl_mod_knowledge_item(inputs)
	if (locale === "pl") return pl_mod_knowledge_item(inputs)
	if (locale === "pt") return pt_mod_knowledge_item(inputs)
	if (locale === "ru") return ru_mod_knowledge_item(inputs)
	if (locale === "sv") return sv_mod_knowledge_item(inputs)
	if (locale === "tr") return tr_mod_knowledge_item(inputs)
	if (locale === "zh") return zh_mod_knowledge_item(inputs)
	if (locale === "ja") return ja_mod_knowledge_item(inputs)
	return en_mod_knowledge_item(inputs)
});
