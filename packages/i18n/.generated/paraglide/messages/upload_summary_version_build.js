/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Summary_Version_BuildInputs */

const en_upload_summary_version_build = /** @type {(inputs: Upload_Summary_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New build version`)
};

const es_upload_summary_version_build = /** @type {(inputs: Upload_Summary_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nueva versión de la build`)
};

const de_upload_summary_version_build = /** @type {(inputs: Upload_Summary_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Build-Version`)
};

const fr_upload_summary_version_build = /** @type {(inputs: Upload_Summary_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle version du build`)
};

const it_upload_summary_version_build = /** @type {(inputs: Upload_Summary_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuova versione della build`)
};

const nl_upload_summary_version_build = /** @type {(inputs: Upload_Summary_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe buildversie`)
};

const pl_upload_summary_version_build = /** @type {(inputs: Upload_Summary_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowa wersja buildu`)
};

const pt_upload_summary_version_build = /** @type {(inputs: Upload_Summary_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nova versão da build`)
};

const ru_upload_summary_version_build = /** @type {(inputs: Upload_Summary_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новая версия постройки`)
};

const sv_upload_summary_version_build = /** @type {(inputs: Upload_Summary_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny version av bygget`)
};

const tr_upload_summary_version_build = /** @type {(inputs: Upload_Summary_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni yapı sürümü`)
};

const zh_upload_summary_version_build = /** @type {(inputs: Upload_Summary_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新的建筑版本`)
};

const ja_upload_summary_version_build = /** @type {(inputs: Upload_Summary_Version_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築の新バージョン`)
};

/**
* | output |
* | --- |
* | "New build version" |
*
* @param {Upload_Summary_Version_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_summary_version_build = /** @type {((inputs?: Upload_Summary_Version_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Summary_Version_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_summary_version_build(inputs)
	if (locale === "de") return de_upload_summary_version_build(inputs)
	if (locale === "fr") return fr_upload_summary_version_build(inputs)
	if (locale === "it") return it_upload_summary_version_build(inputs)
	if (locale === "nl") return nl_upload_summary_version_build(inputs)
	if (locale === "pl") return pl_upload_summary_version_build(inputs)
	if (locale === "pt") return pt_upload_summary_version_build(inputs)
	if (locale === "ru") return ru_upload_summary_version_build(inputs)
	if (locale === "sv") return sv_upload_summary_version_build(inputs)
	if (locale === "tr") return tr_upload_summary_version_build(inputs)
	if (locale === "zh") return zh_upload_summary_version_build(inputs)
	if (locale === "ja") return ja_upload_summary_version_build(inputs)
	return en_upload_summary_version_build(inputs)
});
