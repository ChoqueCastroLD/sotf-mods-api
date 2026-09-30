/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Lane_VersionsInputs */

const en_ranger_lane_versions = /** @type {(inputs: Ranger_Lane_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions`)
};

const es_ranger_lane_versions = /** @type {(inputs: Ranger_Lane_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versiones`)
};

const de_ranger_lane_versions = /** @type {(inputs: Ranger_Lane_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen`)
};

const fr_ranger_lane_versions = /** @type {(inputs: Ranger_Lane_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions`)
};

const it_ranger_lane_versions = /** @type {(inputs: Ranger_Lane_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioni`)
};

const nl_ranger_lane_versions = /** @type {(inputs: Ranger_Lane_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versies`)
};

const pl_ranger_lane_versions = /** @type {(inputs: Ranger_Lane_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersje`)
};

const pt_ranger_lane_versions = /** @type {(inputs: Ranger_Lane_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versões`)
};

const ru_ranger_lane_versions = /** @type {(inputs: Ranger_Lane_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версии`)
};

const sv_ranger_lane_versions = /** @type {(inputs: Ranger_Lane_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioner`)
};

const tr_ranger_lane_versions = /** @type {(inputs: Ranger_Lane_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürümler`)
};

const zh_ranger_lane_versions = /** @type {(inputs: Ranger_Lane_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本`)
};

const ja_ranger_lane_versions = /** @type {(inputs: Ranger_Lane_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン`)
};

/**
* | output |
* | --- |
* | "Versions" |
*
* @param {Ranger_Lane_VersionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lane_versions = /** @type {((inputs?: Ranger_Lane_VersionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_VersionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lane_versions(inputs)
	if (locale === "de") return de_ranger_lane_versions(inputs)
	if (locale === "fr") return fr_ranger_lane_versions(inputs)
	if (locale === "it") return it_ranger_lane_versions(inputs)
	if (locale === "nl") return nl_ranger_lane_versions(inputs)
	if (locale === "pl") return pl_ranger_lane_versions(inputs)
	if (locale === "pt") return pt_ranger_lane_versions(inputs)
	if (locale === "ru") return ru_ranger_lane_versions(inputs)
	if (locale === "sv") return sv_ranger_lane_versions(inputs)
	if (locale === "tr") return tr_ranger_lane_versions(inputs)
	if (locale === "zh") return zh_ranger_lane_versions(inputs)
	if (locale === "ja") return ja_ranger_lane_versions(inputs)
	return en_ranger_lane_versions(inputs)
});
