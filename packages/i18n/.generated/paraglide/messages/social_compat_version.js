/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_VersionInputs */

const en_social_compat_version = /** @type {(inputs: Social_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod version`)
};

const es_social_compat_version = /** @type {(inputs: Social_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión del mod`)
};

const de_social_compat_version = /** @type {(inputs: Social_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Version`)
};

const fr_social_compat_version = /** @type {(inputs: Social_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version du mod`)
};

const it_social_compat_version = /** @type {(inputs: Social_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione della mod`)
};

const nl_social_compat_version = /** @type {(inputs: Social_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modversie`)
};

const pl_social_compat_version = /** @type {(inputs: Social_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja moda`)
};

const pt_social_compat_version = /** @type {(inputs: Social_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão do mod`)
};

const ru_social_compat_version = /** @type {(inputs: Social_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия мода`)
};

const sv_social_compat_version = /** @type {(inputs: Social_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddversion`)
};

const tr_social_compat_version = /** @type {(inputs: Social_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod sürümü`)
};

const zh_social_compat_version = /** @type {(inputs: Social_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组版本`)
};

const ja_social_compat_version = /** @type {(inputs: Social_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD のバージョン`)
};

/**
* | output |
* | --- |
* | "Mod version" |
*
* @param {Social_Compat_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_version = /** @type {((inputs?: Social_Compat_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_version(inputs)
	if (locale === "de") return de_social_compat_version(inputs)
	if (locale === "fr") return fr_social_compat_version(inputs)
	if (locale === "it") return it_social_compat_version(inputs)
	if (locale === "nl") return nl_social_compat_version(inputs)
	if (locale === "pl") return pl_social_compat_version(inputs)
	if (locale === "pt") return pt_social_compat_version(inputs)
	if (locale === "ru") return ru_social_compat_version(inputs)
	if (locale === "sv") return sv_social_compat_version(inputs)
	if (locale === "tr") return tr_social_compat_version(inputs)
	if (locale === "zh") return zh_social_compat_version(inputs)
	if (locale === "ja") return ja_social_compat_version(inputs)
	return en_social_compat_version(inputs)
});
