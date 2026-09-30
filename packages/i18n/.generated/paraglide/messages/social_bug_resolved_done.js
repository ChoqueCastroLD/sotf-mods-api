/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Social_Bug_Resolved_DoneInputs */

const en_social_bug_resolved_done = /** @type {(inputs: Social_Bug_Resolved_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marked as fixed in ${i?.version}.`)
};

const es_social_bug_resolved_done = /** @type {(inputs: Social_Bug_Resolved_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marcado como resuelto en ${i?.version}.`)
};

const de_social_bug_resolved_done = /** @type {(inputs: Social_Bug_Resolved_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Als in ${i?.version} behoben markiert.`)
};

const fr_social_bug_resolved_done = /** @type {(inputs: Social_Bug_Resolved_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marqué comme corrigé dans la ${i?.version}.`)
};

const it_social_bug_resolved_done = /** @type {(inputs: Social_Bug_Resolved_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Segnato come risolto nella ${i?.version}.`)
};

const nl_social_bug_resolved_done = /** @type {(inputs: Social_Bug_Resolved_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gemarkeerd als opgelost in ${i?.version}.`)
};

const pl_social_bug_resolved_done = /** @type {(inputs: Social_Bug_Resolved_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oznaczono jako naprawione w ${i?.version}.`)
};

const pt_social_bug_resolved_done = /** @type {(inputs: Social_Bug_Resolved_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marcado como corrigido na ${i?.version}.`)
};

const ru_social_bug_resolved_done = /** @type {(inputs: Social_Bug_Resolved_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Отмечено как исправленное в ${i?.version}.`)
};

const sv_social_bug_resolved_done = /** @type {(inputs: Social_Bug_Resolved_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markerad som åtgärdad i ${i?.version}.`)
};

const tr_social_bug_resolved_done = /** @type {(inputs: Social_Bug_Resolved_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version} sürümünde düzeltildi olarak işaretlendi.`)
};

const zh_social_bug_resolved_done = /** @type {(inputs: Social_Bug_Resolved_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已标记为在 ${i?.version} 修复。`)
};

const ja_social_bug_resolved_done = /** @type {(inputs: Social_Bug_Resolved_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version} で修正済みにしました。`)
};

/**
* | output |
* | --- |
* | "Marked as fixed in {version}." |
*
* @param {Social_Bug_Resolved_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_bug_resolved_done = /** @type {((inputs: Social_Bug_Resolved_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Bug_Resolved_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_bug_resolved_done(inputs)
	if (locale === "de") return de_social_bug_resolved_done(inputs)
	if (locale === "fr") return fr_social_bug_resolved_done(inputs)
	if (locale === "it") return it_social_bug_resolved_done(inputs)
	if (locale === "nl") return nl_social_bug_resolved_done(inputs)
	if (locale === "pl") return pl_social_bug_resolved_done(inputs)
	if (locale === "pt") return pt_social_bug_resolved_done(inputs)
	if (locale === "ru") return ru_social_bug_resolved_done(inputs)
	if (locale === "sv") return sv_social_bug_resolved_done(inputs)
	if (locale === "tr") return tr_social_bug_resolved_done(inputs)
	if (locale === "zh") return zh_social_bug_resolved_done(inputs)
	if (locale === "ja") return ja_social_bug_resolved_done(inputs)
	return en_social_bug_resolved_done(inputs)
});
