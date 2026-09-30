/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Spec_VersionInputs */

const en_builds_spec_version = /** @type {(inputs: Builds_Spec_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const es_builds_spec_version = /** @type {(inputs: Builds_Spec_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión`)
};

const de_builds_spec_version = /** @type {(inputs: Builds_Spec_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const fr_builds_spec_version = /** @type {(inputs: Builds_Spec_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const it_builds_spec_version = /** @type {(inputs: Builds_Spec_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione`)
};

const nl_builds_spec_version = /** @type {(inputs: Builds_Spec_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versie`)
};

const pl_builds_spec_version = /** @type {(inputs: Builds_Spec_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja`)
};

const pt_builds_spec_version = /** @type {(inputs: Builds_Spec_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão`)
};

const ru_builds_spec_version = /** @type {(inputs: Builds_Spec_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия`)
};

const sv_builds_spec_version = /** @type {(inputs: Builds_Spec_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const tr_builds_spec_version = /** @type {(inputs: Builds_Spec_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm`)
};

const zh_builds_spec_version = /** @type {(inputs: Builds_Spec_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本`)
};

const ja_builds_spec_version = /** @type {(inputs: Builds_Spec_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン`)
};

/**
* | output |
* | --- |
* | "Version" |
*
* @param {Builds_Spec_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_spec_version = /** @type {((inputs?: Builds_Spec_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Spec_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_spec_version(inputs)
	if (locale === "de") return de_builds_spec_version(inputs)
	if (locale === "fr") return fr_builds_spec_version(inputs)
	if (locale === "it") return it_builds_spec_version(inputs)
	if (locale === "nl") return nl_builds_spec_version(inputs)
	if (locale === "pl") return pl_builds_spec_version(inputs)
	if (locale === "pt") return pt_builds_spec_version(inputs)
	if (locale === "ru") return ru_builds_spec_version(inputs)
	if (locale === "sv") return sv_builds_spec_version(inputs)
	if (locale === "tr") return tr_builds_spec_version(inputs)
	if (locale === "zh") return zh_builds_spec_version(inputs)
	if (locale === "ja") return ja_builds_spec_version(inputs)
	return en_builds_spec_version(inputs)
});
