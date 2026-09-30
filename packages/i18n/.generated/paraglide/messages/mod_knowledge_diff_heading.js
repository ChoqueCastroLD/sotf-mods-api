/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ from: NonNullable<unknown>, to: NonNullable<unknown> }} Mod_Knowledge_Diff_HeadingInputs */

const en_mod_knowledge_diff_heading = /** @type {(inputs: Mod_Knowledge_Diff_HeadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Changes from ${i?.from} to ${i?.to}`)
};

const es_mod_knowledge_diff_heading = /** @type {(inputs: Mod_Knowledge_Diff_HeadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cambios de ${i?.from} a ${i?.to}`)
};

const de_mod_knowledge_diff_heading = /** @type {(inputs: Mod_Knowledge_Diff_HeadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Änderungen von ${i?.from} zu ${i?.to}`)
};

const fr_mod_knowledge_diff_heading = /** @type {(inputs: Mod_Knowledge_Diff_HeadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modifications de ${i?.from} à ${i?.to}`)
};

const it_mod_knowledge_diff_heading = /** @type {(inputs: Mod_Knowledge_Diff_HeadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modifiche da ${i?.from} a ${i?.to}`)
};

const nl_mod_knowledge_diff_heading = /** @type {(inputs: Mod_Knowledge_Diff_HeadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wijzigingen van ${i?.from} naar ${i?.to}`)
};

const pl_mod_knowledge_diff_heading = /** @type {(inputs: Mod_Knowledge_Diff_HeadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zmiany z ${i?.from} do ${i?.to}`)
};

const pt_mod_knowledge_diff_heading = /** @type {(inputs: Mod_Knowledge_Diff_HeadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mudanças de ${i?.from} para ${i?.to}`)
};

const ru_mod_knowledge_diff_heading = /** @type {(inputs: Mod_Knowledge_Diff_HeadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Изменения с ${i?.from} на ${i?.to}`)
};

const sv_mod_knowledge_diff_heading = /** @type {(inputs: Mod_Knowledge_Diff_HeadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ändringar från ${i?.from} till ${i?.to}`)
};

const tr_mod_knowledge_diff_heading = /** @type {(inputs: Mod_Knowledge_Diff_HeadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from} sürümünden ${i?.to} sürümüne değişiklikler`)
};

const zh_mod_knowledge_diff_heading = /** @type {(inputs: Mod_Knowledge_Diff_HeadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`从 ${i?.from} 到 ${i?.to} 的变化`)
};

const ja_mod_knowledge_diff_heading = /** @type {(inputs: Mod_Knowledge_Diff_HeadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from} から ${i?.to} への変更`)
};

/**
* | output |
* | --- |
* | "Changes from {from} to {to}" |
*
* @param {Mod_Knowledge_Diff_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_diff_heading = /** @type {((inputs: Mod_Knowledge_Diff_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_diff_heading(inputs)
	if (locale === "de") return de_mod_knowledge_diff_heading(inputs)
	if (locale === "fr") return fr_mod_knowledge_diff_heading(inputs)
	if (locale === "it") return it_mod_knowledge_diff_heading(inputs)
	if (locale === "nl") return nl_mod_knowledge_diff_heading(inputs)
	if (locale === "pl") return pl_mod_knowledge_diff_heading(inputs)
	if (locale === "pt") return pt_mod_knowledge_diff_heading(inputs)
	if (locale === "ru") return ru_mod_knowledge_diff_heading(inputs)
	if (locale === "sv") return sv_mod_knowledge_diff_heading(inputs)
	if (locale === "tr") return tr_mod_knowledge_diff_heading(inputs)
	if (locale === "zh") return zh_mod_knowledge_diff_heading(inputs)
	if (locale === "ja") return ja_mod_knowledge_diff_heading(inputs)
	return en_mod_knowledge_diff_heading(inputs)
});
