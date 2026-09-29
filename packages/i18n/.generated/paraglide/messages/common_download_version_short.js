/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Common_Download_Version_ShortInputs */

const en_common_download_version_short = /** @type {(inputs: Common_Download_Version_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download v${i?.version}`)
};

const es_common_download_version_short = /** @type {(inputs: Common_Download_Version_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descargar v${i?.version}`)
};

const de_common_download_version_short = /** @type {(inputs: Common_Download_Version_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} herunterladen`)
};

const fr_common_download_version_short = /** @type {(inputs: Common_Download_Version_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Télécharger v${i?.version}`)
};

const it_common_download_version_short = /** @type {(inputs: Common_Download_Version_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scarica v${i?.version}`)
};

const nl_common_download_version_short = /** @type {(inputs: Common_Download_Version_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} downloaden`)
};

const pl_common_download_version_short = /** @type {(inputs: Common_Download_Version_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pobierz v${i?.version}`)
};

const pt_common_download_version_short = /** @type {(inputs: Common_Download_Version_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Baixar v${i?.version}`)
};

const ru_common_download_version_short = /** @type {(inputs: Common_Download_Version_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скачать v${i?.version}`)
};

const sv_common_download_version_short = /** @type {(inputs: Common_Download_Version_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ladda ner v${i?.version}`)
};

const tr_common_download_version_short = /** @type {(inputs: Common_Download_Version_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} indir`)
};

const zh_common_download_version_short = /** @type {(inputs: Common_Download_Version_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`下载 v${i?.version}`)
};

const ja_common_download_version_short = /** @type {(inputs: Common_Download_Version_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} をダウンロード`)
};

/**
* | output |
* | --- |
* | "Download v{version}" |
*
* @param {Common_Download_Version_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_download_version_short = /** @type {((inputs: Common_Download_Version_ShortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Download_Version_ShortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_download_version_short(inputs)
	if (locale === "de") return de_common_download_version_short(inputs)
	if (locale === "fr") return fr_common_download_version_short(inputs)
	if (locale === "it") return it_common_download_version_short(inputs)
	if (locale === "nl") return nl_common_download_version_short(inputs)
	if (locale === "pl") return pl_common_download_version_short(inputs)
	if (locale === "pt") return pt_common_download_version_short(inputs)
	if (locale === "ru") return ru_common_download_version_short(inputs)
	if (locale === "sv") return sv_common_download_version_short(inputs)
	if (locale === "tr") return tr_common_download_version_short(inputs)
	if (locale === "zh") return zh_common_download_version_short(inputs)
	if (locale === "ja") return ja_common_download_version_short(inputs)
	return en_common_download_version_short(inputs)
});
