/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Build_Buildshare_VersionInputs */

const en_upload_build_buildshare_version = /** @type {(inputs: Upload_Build_Buildshare_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare version`)
};

const es_upload_build_buildshare_version = /** @type {(inputs: Upload_Build_Buildshare_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión de BuildShare`)
};

const de_upload_build_buildshare_version = /** @type {(inputs: Upload_Build_Buildshare_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare-Version`)
};

const fr_upload_build_buildshare_version = /** @type {(inputs: Upload_Build_Buildshare_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version de BuildShare`)
};

const it_upload_build_buildshare_version = /** @type {(inputs: Upload_Build_Buildshare_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione di BuildShare`)
};

const nl_upload_build_buildshare_version = /** @type {(inputs: Upload_Build_Buildshare_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare-versie`)
};

const pl_upload_build_buildshare_version = /** @type {(inputs: Upload_Build_Buildshare_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja BuildShare`)
};

const pt_upload_build_buildshare_version = /** @type {(inputs: Upload_Build_Buildshare_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão do BuildShare`)
};

const ru_upload_build_buildshare_version = /** @type {(inputs: Upload_Build_Buildshare_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия BuildShare`)
};

const sv_upload_build_buildshare_version = /** @type {(inputs: Upload_Build_Buildshare_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare-version`)
};

const tr_upload_build_buildshare_version = /** @type {(inputs: Upload_Build_Buildshare_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare sürümü`)
};

const zh_upload_build_buildshare_version = /** @type {(inputs: Upload_Build_Buildshare_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare 版本`)
};

const ja_upload_build_buildshare_version = /** @type {(inputs: Upload_Build_Buildshare_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShareのバージョン`)
};

/**
* | output |
* | --- |
* | "BuildShare version" |
*
* @param {Upload_Build_Buildshare_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_build_buildshare_version = /** @type {((inputs?: Upload_Build_Buildshare_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Build_Buildshare_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_build_buildshare_version(inputs)
	if (locale === "de") return de_upload_build_buildshare_version(inputs)
	if (locale === "fr") return fr_upload_build_buildshare_version(inputs)
	if (locale === "it") return it_upload_build_buildshare_version(inputs)
	if (locale === "nl") return nl_upload_build_buildshare_version(inputs)
	if (locale === "pl") return pl_upload_build_buildshare_version(inputs)
	if (locale === "pt") return pt_upload_build_buildshare_version(inputs)
	if (locale === "ru") return ru_upload_build_buildshare_version(inputs)
	if (locale === "sv") return sv_upload_build_buildshare_version(inputs)
	if (locale === "tr") return tr_upload_build_buildshare_version(inputs)
	if (locale === "zh") return zh_upload_build_buildshare_version(inputs)
	if (locale === "ja") return ja_upload_build_buildshare_version(inputs)
	return en_upload_build_buildshare_version(inputs)
});
