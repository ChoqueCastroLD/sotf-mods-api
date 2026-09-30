/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Bug_Resolve_TitleInputs */

const en_social_bug_resolve_title = /** @type {(inputs: Social_Bug_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fixed in which version?`)
};

const es_social_bug_resolve_title = /** @type {(inputs: Social_Bug_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Resuelto en qué versión?`)
};

const de_social_bug_resolve_title = /** @type {(inputs: Social_Bug_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In welcher Version behoben?`)
};

const fr_social_bug_resolve_title = /** @type {(inputs: Social_Bug_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrigé dans quelle version ?`)
};

const it_social_bug_resolve_title = /** @type {(inputs: Social_Bug_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risolto in quale versione?`)
};

const nl_social_bug_resolve_title = /** @type {(inputs: Social_Bug_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opgelost in welke versie?`)
};

const pl_social_bug_resolve_title = /** @type {(inputs: Social_Bug_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naprawione w której wersji?`)
};

const pt_social_bug_resolve_title = /** @type {(inputs: Social_Bug_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrigido em qual versão?`)
};

const ru_social_bug_resolve_title = /** @type {(inputs: Social_Bug_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В какой версии исправлено?`)
};

const sv_social_bug_resolve_title = /** @type {(inputs: Social_Bug_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åtgärdad i vilken version?`)
};

const tr_social_bug_resolve_title = /** @type {(inputs: Social_Bug_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hangi sürümde düzeltildi?`)
};

const zh_social_bug_resolve_title = /** @type {(inputs: Social_Bug_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在哪个版本修复的？`)
};

const ja_social_bug_resolve_title = /** @type {(inputs: Social_Bug_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`どのバージョンで修正しましたか？`)
};

/**
* | output |
* | --- |
* | "Fixed in which version?" |
*
* @param {Social_Bug_Resolve_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_bug_resolve_title = /** @type {((inputs?: Social_Bug_Resolve_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Bug_Resolve_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_bug_resolve_title(inputs)
	if (locale === "de") return de_social_bug_resolve_title(inputs)
	if (locale === "fr") return fr_social_bug_resolve_title(inputs)
	if (locale === "it") return it_social_bug_resolve_title(inputs)
	if (locale === "nl") return nl_social_bug_resolve_title(inputs)
	if (locale === "pl") return pl_social_bug_resolve_title(inputs)
	if (locale === "pt") return pt_social_bug_resolve_title(inputs)
	if (locale === "ru") return ru_social_bug_resolve_title(inputs)
	if (locale === "sv") return sv_social_bug_resolve_title(inputs)
	if (locale === "tr") return tr_social_bug_resolve_title(inputs)
	if (locale === "zh") return zh_social_bug_resolve_title(inputs)
	if (locale === "ja") return ja_social_bug_resolve_title(inputs)
	return en_social_bug_resolve_title(inputs)
});
