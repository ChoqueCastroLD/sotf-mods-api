/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Target_VersionInputs */

const en_ranger_target_version = /** @type {(inputs: Ranger_Target_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const es_ranger_target_version = /** @type {(inputs: Ranger_Target_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión`)
};

const de_ranger_target_version = /** @type {(inputs: Ranger_Target_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const fr_ranger_target_version = /** @type {(inputs: Ranger_Target_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const it_ranger_target_version = /** @type {(inputs: Ranger_Target_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione`)
};

const nl_ranger_target_version = /** @type {(inputs: Ranger_Target_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versie`)
};

const pl_ranger_target_version = /** @type {(inputs: Ranger_Target_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja`)
};

const pt_ranger_target_version = /** @type {(inputs: Ranger_Target_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão`)
};

const ru_ranger_target_version = /** @type {(inputs: Ranger_Target_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия`)
};

const sv_ranger_target_version = /** @type {(inputs: Ranger_Target_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const tr_ranger_target_version = /** @type {(inputs: Ranger_Target_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm`)
};

const zh_ranger_target_version = /** @type {(inputs: Ranger_Target_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本`)
};

const ja_ranger_target_version = /** @type {(inputs: Ranger_Target_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン`)
};

/**
* | output |
* | --- |
* | "Version" |
*
* @param {Ranger_Target_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_target_version = /** @type {((inputs?: Ranger_Target_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Target_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_target_version(inputs)
	if (locale === "de") return de_ranger_target_version(inputs)
	if (locale === "fr") return fr_ranger_target_version(inputs)
	if (locale === "it") return it_ranger_target_version(inputs)
	if (locale === "nl") return nl_ranger_target_version(inputs)
	if (locale === "pl") return pl_ranger_target_version(inputs)
	if (locale === "pt") return pt_ranger_target_version(inputs)
	if (locale === "ru") return ru_ranger_target_version(inputs)
	if (locale === "sv") return sv_ranger_target_version(inputs)
	if (locale === "tr") return tr_ranger_target_version(inputs)
	if (locale === "zh") return zh_ranger_target_version(inputs)
	if (locale === "ja") return ja_ranger_target_version(inputs)
	return en_ranger_target_version(inputs)
});
