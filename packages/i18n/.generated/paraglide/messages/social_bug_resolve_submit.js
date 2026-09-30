/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Bug_Resolve_SubmitInputs */

const en_social_bug_resolve_submit = /** @type {(inputs: Social_Bug_Resolve_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mark as fixed`)
};

const es_social_bug_resolve_submit = /** @type {(inputs: Social_Bug_Resolve_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como resuelto`)
};

const de_social_bug_resolve_submit = /** @type {(inputs: Social_Bug_Resolve_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als behoben markieren`)
};

const fr_social_bug_resolve_submit = /** @type {(inputs: Social_Bug_Resolve_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marquer comme corrigé`)
};

const it_social_bug_resolve_submit = /** @type {(inputs: Social_Bug_Resolve_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segna come risolto`)
};

const nl_social_bug_resolve_submit = /** @type {(inputs: Social_Bug_Resolve_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markeren als opgelost`)
};

const pl_social_bug_resolve_submit = /** @type {(inputs: Social_Bug_Resolve_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznacz jako naprawione`)
};

const pt_social_bug_resolve_submit = /** @type {(inputs: Social_Bug_Resolve_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como corrigido`)
};

const ru_social_bug_resolve_submit = /** @type {(inputs: Social_Bug_Resolve_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отметить исправленным`)
};

const sv_social_bug_resolve_submit = /** @type {(inputs: Social_Bug_Resolve_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markera som åtgärdad`)
};

const tr_social_bug_resolve_submit = /** @type {(inputs: Social_Bug_Resolve_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzeltildi olarak işaretle`)
};

const zh_social_bug_resolve_submit = /** @type {(inputs: Social_Bug_Resolve_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标记为已修复`)
};

const ja_social_bug_resolve_submit = /** @type {(inputs: Social_Bug_Resolve_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修正済みにする`)
};

/**
* | output |
* | --- |
* | "Mark as fixed" |
*
* @param {Social_Bug_Resolve_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_bug_resolve_submit = /** @type {((inputs?: Social_Bug_Resolve_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Bug_Resolve_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_bug_resolve_submit(inputs)
	if (locale === "de") return de_social_bug_resolve_submit(inputs)
	if (locale === "fr") return fr_social_bug_resolve_submit(inputs)
	if (locale === "it") return it_social_bug_resolve_submit(inputs)
	if (locale === "nl") return nl_social_bug_resolve_submit(inputs)
	if (locale === "pl") return pl_social_bug_resolve_submit(inputs)
	if (locale === "pt") return pt_social_bug_resolve_submit(inputs)
	if (locale === "ru") return ru_social_bug_resolve_submit(inputs)
	if (locale === "sv") return sv_social_bug_resolve_submit(inputs)
	if (locale === "tr") return tr_social_bug_resolve_submit(inputs)
	if (locale === "zh") return zh_social_bug_resolve_submit(inputs)
	if (locale === "ja") return ja_social_bug_resolve_submit(inputs)
	return en_social_bug_resolve_submit(inputs)
});
