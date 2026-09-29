/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown>, size: NonNullable<unknown> }} Common_Download_VersionInputs */

const en_common_download_version = /** @type {(inputs: Common_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download v${i?.version} · ${i?.size}`)
};

const es_common_download_version = /** @type {(inputs: Common_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descargar v${i?.version} · ${i?.size}`)
};

const de_common_download_version = /** @type {(inputs: Common_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} herunterladen · ${i?.size}`)
};

const fr_common_download_version = /** @type {(inputs: Common_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Télécharger v${i?.version} · ${i?.size}`)
};

const it_common_download_version = /** @type {(inputs: Common_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scarica v${i?.version} · ${i?.size}`)
};

const nl_common_download_version = /** @type {(inputs: Common_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} downloaden · ${i?.size}`)
};

const pl_common_download_version = /** @type {(inputs: Common_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pobierz v${i?.version} · ${i?.size}`)
};

const pt_common_download_version = /** @type {(inputs: Common_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Baixar v${i?.version} · ${i?.size}`)
};

const ru_common_download_version = /** @type {(inputs: Common_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скачать v${i?.version} · ${i?.size}`)
};

const sv_common_download_version = /** @type {(inputs: Common_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ladda ner v${i?.version} · ${i?.size}`)
};

const tr_common_download_version = /** @type {(inputs: Common_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} indir · ${i?.size}`)
};

const zh_common_download_version = /** @type {(inputs: Common_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`下载 v${i?.version} · ${i?.size}`)
};

const ja_common_download_version = /** @type {(inputs: Common_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} をダウンロード · ${i?.size}`)
};

/**
* | output |
* | --- |
* | "Download v{version} · {size}" |
*
* @param {Common_Download_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_download_version = /** @type {((inputs: Common_Download_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Download_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_download_version(inputs)
	if (locale === "de") return de_common_download_version(inputs)
	if (locale === "fr") return fr_common_download_version(inputs)
	if (locale === "it") return it_common_download_version(inputs)
	if (locale === "nl") return nl_common_download_version(inputs)
	if (locale === "pl") return pl_common_download_version(inputs)
	if (locale === "pt") return pt_common_download_version(inputs)
	if (locale === "ru") return ru_common_download_version(inputs)
	if (locale === "sv") return sv_common_download_version(inputs)
	if (locale === "tr") return tr_common_download_version(inputs)
	if (locale === "zh") return zh_common_download_version(inputs)
	if (locale === "ja") return ja_common_download_version(inputs)
	return en_common_download_version(inputs)
});
