/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_Status_VersionInputs */

const en_content_kelvin_status_version = /** @type {(inputs: Content_Kelvin_Status_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Latest version`)
};

const es_content_kelvin_status_version = /** @type {(inputs: Content_Kelvin_Status_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Última versión`)
};

const de_content_kelvin_status_version = /** @type {(inputs: Content_Kelvin_Status_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste Version`)
};

const fr_content_kelvin_status_version = /** @type {(inputs: Content_Kelvin_Status_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dernière version`)
};

const it_content_kelvin_status_version = /** @type {(inputs: Content_Kelvin_Status_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultima versione`)
};

const nl_content_kelvin_status_version = /** @type {(inputs: Content_Kelvin_Status_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwste versie`)
};

const pl_content_kelvin_status_version = /** @type {(inputs: Content_Kelvin_Status_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsza wersja`)
};

const pt_content_kelvin_status_version = /** @type {(inputs: Content_Kelvin_Status_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão mais recente`)
};

const ru_content_kelvin_status_version = /** @type {(inputs: Content_Kelvin_Status_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последняя версия`)
};

const sv_content_kelvin_status_version = /** @type {(inputs: Content_Kelvin_Status_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste version`)
};

const tr_content_kelvin_status_version = /** @type {(inputs: Content_Kelvin_Status_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son sürüm`)
};

const zh_content_kelvin_status_version = /** @type {(inputs: Content_Kelvin_Status_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新版本`)
};

const ja_content_kelvin_status_version = /** @type {(inputs: Content_Kelvin_Status_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新バージョン`)
};

/**
* | output |
* | --- |
* | "Latest version" |
*
* @param {Content_Kelvin_Status_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_status_version = /** @type {((inputs?: Content_Kelvin_Status_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Status_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_status_version(inputs)
	if (locale === "de") return de_content_kelvin_status_version(inputs)
	if (locale === "fr") return fr_content_kelvin_status_version(inputs)
	if (locale === "it") return it_content_kelvin_status_version(inputs)
	if (locale === "nl") return nl_content_kelvin_status_version(inputs)
	if (locale === "pl") return pl_content_kelvin_status_version(inputs)
	if (locale === "pt") return pt_content_kelvin_status_version(inputs)
	if (locale === "ru") return ru_content_kelvin_status_version(inputs)
	if (locale === "sv") return sv_content_kelvin_status_version(inputs)
	if (locale === "tr") return tr_content_kelvin_status_version(inputs)
	if (locale === "zh") return zh_content_kelvin_status_version(inputs)
	if (locale === "ja") return ja_content_kelvin_status_version(inputs)
	return en_content_kelvin_status_version(inputs)
});
