/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Other_VersionsInputs */

const en_mod_other_versions = /** @type {(inputs: Mod_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other versions`)
};

const es_mod_other_versions = /** @type {(inputs: Mod_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otras versiones`)
};

const de_mod_other_versions = /** @type {(inputs: Mod_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere Versionen`)
};

const fr_mod_other_versions = /** @type {(inputs: Mod_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autres versions`)
};

const it_mod_other_versions = /** @type {(inputs: Mod_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altre versioni`)
};

const nl_mod_other_versions = /** @type {(inputs: Mod_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere versies`)
};

const pl_mod_other_versions = /** @type {(inputs: Mod_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inne wersje`)
};

const pt_mod_other_versions = /** @type {(inputs: Mod_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outras versões`)
};

const ru_mod_other_versions = /** @type {(inputs: Mod_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другие версии`)
};

const sv_mod_other_versions = /** @type {(inputs: Mod_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andra versioner`)
};

const tr_mod_other_versions = /** @type {(inputs: Mod_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer sürümler`)
};

const zh_mod_other_versions = /** @type {(inputs: Mod_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他版本`)
};

const ja_mod_other_versions = /** @type {(inputs: Mod_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ほかのバージョン`)
};

/**
* | output |
* | --- |
* | "Other versions" |
*
* @param {Mod_Other_VersionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_other_versions = /** @type {((inputs?: Mod_Other_VersionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Other_VersionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_other_versions(inputs)
	if (locale === "de") return de_mod_other_versions(inputs)
	if (locale === "fr") return fr_mod_other_versions(inputs)
	if (locale === "it") return it_mod_other_versions(inputs)
	if (locale === "nl") return nl_mod_other_versions(inputs)
	if (locale === "pl") return pl_mod_other_versions(inputs)
	if (locale === "pt") return pt_mod_other_versions(inputs)
	if (locale === "ru") return ru_mod_other_versions(inputs)
	if (locale === "sv") return sv_mod_other_versions(inputs)
	if (locale === "tr") return tr_mod_other_versions(inputs)
	if (locale === "zh") return zh_mod_other_versions(inputs)
	if (locale === "ja") return ja_mod_other_versions(inputs)
	return en_mod_other_versions(inputs)
});
