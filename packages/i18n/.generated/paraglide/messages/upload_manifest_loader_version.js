/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Manifest_Loader_VersionInputs */

const en_upload_manifest_loader_version = /** @type {(inputs: Upload_Manifest_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader version`)
};

const es_upload_manifest_loader_version = /** @type {(inputs: Upload_Manifest_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión de RedLoader`)
};

const de_upload_manifest_loader_version = /** @type {(inputs: Upload_Manifest_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader-Version`)
};

const fr_upload_manifest_loader_version = /** @type {(inputs: Upload_Manifest_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version de RedLoader`)
};

const it_upload_manifest_loader_version = /** @type {(inputs: Upload_Manifest_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione di RedLoader`)
};

const nl_upload_manifest_loader_version = /** @type {(inputs: Upload_Manifest_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader-versie`)
};

const pl_upload_manifest_loader_version = /** @type {(inputs: Upload_Manifest_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja RedLoadera`)
};

const pt_upload_manifest_loader_version = /** @type {(inputs: Upload_Manifest_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão do RedLoader`)
};

const ru_upload_manifest_loader_version = /** @type {(inputs: Upload_Manifest_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия RedLoader`)
};

const sv_upload_manifest_loader_version = /** @type {(inputs: Upload_Manifest_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader-version`)
};

const tr_upload_manifest_loader_version = /** @type {(inputs: Upload_Manifest_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader sürümü`)
};

const zh_upload_manifest_loader_version = /** @type {(inputs: Upload_Manifest_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader 版本`)
};

const ja_upload_manifest_loader_version = /** @type {(inputs: Upload_Manifest_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoaderのバージョン`)
};

/**
* | output |
* | --- |
* | "RedLoader version" |
*
* @param {Upload_Manifest_Loader_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_manifest_loader_version = /** @type {((inputs?: Upload_Manifest_Loader_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Manifest_Loader_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_manifest_loader_version(inputs)
	if (locale === "de") return de_upload_manifest_loader_version(inputs)
	if (locale === "fr") return fr_upload_manifest_loader_version(inputs)
	if (locale === "it") return it_upload_manifest_loader_version(inputs)
	if (locale === "nl") return nl_upload_manifest_loader_version(inputs)
	if (locale === "pl") return pl_upload_manifest_loader_version(inputs)
	if (locale === "pt") return pt_upload_manifest_loader_version(inputs)
	if (locale === "ru") return ru_upload_manifest_loader_version(inputs)
	if (locale === "sv") return sv_upload_manifest_loader_version(inputs)
	if (locale === "tr") return tr_upload_manifest_loader_version(inputs)
	if (locale === "zh") return zh_upload_manifest_loader_version(inputs)
	if (locale === "ja") return ja_upload_manifest_loader_version(inputs)
	return en_upload_manifest_loader_version(inputs)
});
