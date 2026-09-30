/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Bug_Resolve_VersionInputs */

const en_social_bug_resolve_version = /** @type {(inputs: Social_Bug_Resolve_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const es_social_bug_resolve_version = /** @type {(inputs: Social_Bug_Resolve_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión`)
};

const de_social_bug_resolve_version = /** @type {(inputs: Social_Bug_Resolve_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const fr_social_bug_resolve_version = /** @type {(inputs: Social_Bug_Resolve_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const it_social_bug_resolve_version = /** @type {(inputs: Social_Bug_Resolve_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione`)
};

const nl_social_bug_resolve_version = /** @type {(inputs: Social_Bug_Resolve_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versie`)
};

const pl_social_bug_resolve_version = /** @type {(inputs: Social_Bug_Resolve_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja`)
};

const pt_social_bug_resolve_version = /** @type {(inputs: Social_Bug_Resolve_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão`)
};

const ru_social_bug_resolve_version = /** @type {(inputs: Social_Bug_Resolve_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия`)
};

const sv_social_bug_resolve_version = /** @type {(inputs: Social_Bug_Resolve_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const tr_social_bug_resolve_version = /** @type {(inputs: Social_Bug_Resolve_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm`)
};

const zh_social_bug_resolve_version = /** @type {(inputs: Social_Bug_Resolve_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本`)
};

const ja_social_bug_resolve_version = /** @type {(inputs: Social_Bug_Resolve_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン`)
};

/**
* | output |
* | --- |
* | "Version" |
*
* @param {Social_Bug_Resolve_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_bug_resolve_version = /** @type {((inputs?: Social_Bug_Resolve_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Bug_Resolve_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_bug_resolve_version(inputs)
	if (locale === "de") return de_social_bug_resolve_version(inputs)
	if (locale === "fr") return fr_social_bug_resolve_version(inputs)
	if (locale === "it") return it_social_bug_resolve_version(inputs)
	if (locale === "nl") return nl_social_bug_resolve_version(inputs)
	if (locale === "pl") return pl_social_bug_resolve_version(inputs)
	if (locale === "pt") return pt_social_bug_resolve_version(inputs)
	if (locale === "ru") return ru_social_bug_resolve_version(inputs)
	if (locale === "sv") return sv_social_bug_resolve_version(inputs)
	if (locale === "tr") return tr_social_bug_resolve_version(inputs)
	if (locale === "zh") return zh_social_bug_resolve_version(inputs)
	if (locale === "ja") return ja_social_bug_resolve_version(inputs)
	return en_social_bug_resolve_version(inputs)
});
