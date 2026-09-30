/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Builds_Versions_DownloadInputs */

const en_builds_versions_download = /** @type {(inputs: Builds_Versions_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download v${i?.version}`)
};

const es_builds_versions_download = /** @type {(inputs: Builds_Versions_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descargar v${i?.version}`)
};

const de_builds_versions_download = /** @type {(inputs: Builds_Versions_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} herunterladen`)
};

const fr_builds_versions_download = /** @type {(inputs: Builds_Versions_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Télécharger v${i?.version}`)
};

const it_builds_versions_download = /** @type {(inputs: Builds_Versions_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scarica v${i?.version}`)
};

const nl_builds_versions_download = /** @type {(inputs: Builds_Versions_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} downloaden`)
};

const pl_builds_versions_download = /** @type {(inputs: Builds_Versions_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pobierz v${i?.version}`)
};

const pt_builds_versions_download = /** @type {(inputs: Builds_Versions_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Baixar v${i?.version}`)
};

const ru_builds_versions_download = /** @type {(inputs: Builds_Versions_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скачать v${i?.version}`)
};

const sv_builds_versions_download = /** @type {(inputs: Builds_Versions_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ladda ner v${i?.version}`)
};

const tr_builds_versions_download = /** @type {(inputs: Builds_Versions_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} indir`)
};

const zh_builds_versions_download = /** @type {(inputs: Builds_Versions_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`下载 v${i?.version}`)
};

const ja_builds_versions_download = /** @type {(inputs: Builds_Versions_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} をダウンロード`)
};

/**
* | output |
* | --- |
* | "Download v{version}" |
*
* @param {Builds_Versions_DownloadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_versions_download = /** @type {((inputs: Builds_Versions_DownloadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Versions_DownloadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_versions_download(inputs)
	if (locale === "de") return de_builds_versions_download(inputs)
	if (locale === "fr") return fr_builds_versions_download(inputs)
	if (locale === "it") return it_builds_versions_download(inputs)
	if (locale === "nl") return nl_builds_versions_download(inputs)
	if (locale === "pl") return pl_builds_versions_download(inputs)
	if (locale === "pt") return pt_builds_versions_download(inputs)
	if (locale === "ru") return ru_builds_versions_download(inputs)
	if (locale === "sv") return sv_builds_versions_download(inputs)
	if (locale === "tr") return tr_builds_versions_download(inputs)
	if (locale === "zh") return zh_builds_versions_download(inputs)
	if (locale === "ja") return ja_builds_versions_download(inputs)
	return en_builds_versions_download(inputs)
});
