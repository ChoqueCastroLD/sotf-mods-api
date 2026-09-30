/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Bug_ResolveInputs */

const en_social_bug_resolve = /** @type {(inputs: Social_Bug_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mark as fixed in a version`)
};

const es_social_bug_resolve = /** @type {(inputs: Social_Bug_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como resuelto en una versión`)
};

const de_social_bug_resolve = /** @type {(inputs: Social_Bug_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als in einer Version behoben markieren`)
};

const fr_social_bug_resolve = /** @type {(inputs: Social_Bug_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marquer comme corrigé dans une version`)
};

const it_social_bug_resolve = /** @type {(inputs: Social_Bug_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segna come risolto in una versione`)
};

const nl_social_bug_resolve = /** @type {(inputs: Social_Bug_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markeren als opgelost in een versie`)
};

const pl_social_bug_resolve = /** @type {(inputs: Social_Bug_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznacz jako naprawione w wersji`)
};

const pt_social_bug_resolve = /** @type {(inputs: Social_Bug_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como corrigido em uma versão`)
};

const ru_social_bug_resolve = /** @type {(inputs: Social_Bug_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отметить как исправленное в версии`)
};

const sv_social_bug_resolve = /** @type {(inputs: Social_Bug_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markera som åtgärdad i en version`)
};

const tr_social_bug_resolve = /** @type {(inputs: Social_Bug_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir sürümde düzeltildi olarak işaretle`)
};

const zh_social_bug_resolve = /** @type {(inputs: Social_Bug_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标记为已在某版本修复`)
};

const ja_social_bug_resolve = /** @type {(inputs: Social_Bug_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンで修正済みにする`)
};

/**
* | output |
* | --- |
* | "Mark as fixed in a version" |
*
* @param {Social_Bug_ResolveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_bug_resolve = /** @type {((inputs?: Social_Bug_ResolveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Bug_ResolveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_bug_resolve(inputs)
	if (locale === "de") return de_social_bug_resolve(inputs)
	if (locale === "fr") return fr_social_bug_resolve(inputs)
	if (locale === "it") return it_social_bug_resolve(inputs)
	if (locale === "nl") return nl_social_bug_resolve(inputs)
	if (locale === "pl") return pl_social_bug_resolve(inputs)
	if (locale === "pt") return pt_social_bug_resolve(inputs)
	if (locale === "ru") return ru_social_bug_resolve(inputs)
	if (locale === "sv") return sv_social_bug_resolve(inputs)
	if (locale === "tr") return tr_social_bug_resolve(inputs)
	if (locale === "zh") return zh_social_bug_resolve(inputs)
	if (locale === "ja") return ja_social_bug_resolve(inputs)
	return en_social_bug_resolve(inputs)
});
