/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Tab_VersionsInputs */

const en_mod_tab_versions = /** @type {(inputs: Mod_Tab_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions`)
};

const es_mod_tab_versions = /** @type {(inputs: Mod_Tab_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versiones`)
};

const de_mod_tab_versions = /** @type {(inputs: Mod_Tab_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen`)
};

const fr_mod_tab_versions = /** @type {(inputs: Mod_Tab_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions`)
};

const it_mod_tab_versions = /** @type {(inputs: Mod_Tab_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioni`)
};

const nl_mod_tab_versions = /** @type {(inputs: Mod_Tab_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versies`)
};

const pl_mod_tab_versions = /** @type {(inputs: Mod_Tab_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersje`)
};

const pt_mod_tab_versions = /** @type {(inputs: Mod_Tab_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versões`)
};

const ru_mod_tab_versions = /** @type {(inputs: Mod_Tab_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версии`)
};

const sv_mod_tab_versions = /** @type {(inputs: Mod_Tab_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioner`)
};

const tr_mod_tab_versions = /** @type {(inputs: Mod_Tab_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürümler`)
};

const zh_mod_tab_versions = /** @type {(inputs: Mod_Tab_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本`)
};

const ja_mod_tab_versions = /** @type {(inputs: Mod_Tab_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン`)
};

/**
* | output |
* | --- |
* | "Versions" |
*
* @param {Mod_Tab_VersionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_tab_versions = /** @type {((inputs?: Mod_Tab_VersionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Tab_VersionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_tab_versions(inputs)
	if (locale === "de") return de_mod_tab_versions(inputs)
	if (locale === "fr") return fr_mod_tab_versions(inputs)
	if (locale === "it") return it_mod_tab_versions(inputs)
	if (locale === "nl") return nl_mod_tab_versions(inputs)
	if (locale === "pl") return pl_mod_tab_versions(inputs)
	if (locale === "pt") return pt_mod_tab_versions(inputs)
	if (locale === "ru") return ru_mod_tab_versions(inputs)
	if (locale === "sv") return sv_mod_tab_versions(inputs)
	if (locale === "tr") return tr_mod_tab_versions(inputs)
	if (locale === "zh") return zh_mod_tab_versions(inputs)
	if (locale === "ja") return ja_mod_tab_versions(inputs)
	return en_mod_tab_versions(inputs)
});
