/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown>, size: NonNullable<unknown> }} Ui_Domain_Download_Version_SizeInputs */

const en_ui_domain_download_version_size = /** @type {(inputs: Ui_Domain_Download_Version_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download v${i?.version} · ${i?.size}`)
};

const es_ui_domain_download_version_size = /** @type {(inputs: Ui_Domain_Download_Version_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descargar v${i?.version} · ${i?.size}`)
};

const de_ui_domain_download_version_size = /** @type {(inputs: Ui_Domain_Download_Version_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} herunterladen · ${i?.size}`)
};

const fr_ui_domain_download_version_size = /** @type {(inputs: Ui_Domain_Download_Version_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Télécharger v${i?.version} · ${i?.size}`)
};

const it_ui_domain_download_version_size = /** @type {(inputs: Ui_Domain_Download_Version_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scarica v${i?.version} · ${i?.size}`)
};

const nl_ui_domain_download_version_size = /** @type {(inputs: Ui_Domain_Download_Version_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} downloaden · ${i?.size}`)
};

const pl_ui_domain_download_version_size = /** @type {(inputs: Ui_Domain_Download_Version_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pobierz v${i?.version} · ${i?.size}`)
};

const pt_ui_domain_download_version_size = /** @type {(inputs: Ui_Domain_Download_Version_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Baixar v${i?.version} · ${i?.size}`)
};

const ru_ui_domain_download_version_size = /** @type {(inputs: Ui_Domain_Download_Version_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скачать v${i?.version} · ${i?.size}`)
};

const sv_ui_domain_download_version_size = /** @type {(inputs: Ui_Domain_Download_Version_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ladda ner v${i?.version} · ${i?.size}`)
};

const tr_ui_domain_download_version_size = /** @type {(inputs: Ui_Domain_Download_Version_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} indir · ${i?.size}`)
};

const zh_ui_domain_download_version_size = /** @type {(inputs: Ui_Domain_Download_Version_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`下载 v${i?.version} · ${i?.size}`)
};

const ja_ui_domain_download_version_size = /** @type {(inputs: Ui_Domain_Download_Version_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} をダウンロード · ${i?.size}`)
};

/**
* | output |
* | --- |
* | "Download v{version} · {size}" |
*
* @param {Ui_Domain_Download_Version_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_download_version_size = /** @type {((inputs: Ui_Domain_Download_Version_SizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Download_Version_SizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_download_version_size(inputs)
	if (locale === "de") return de_ui_domain_download_version_size(inputs)
	if (locale === "fr") return fr_ui_domain_download_version_size(inputs)
	if (locale === "it") return it_ui_domain_download_version_size(inputs)
	if (locale === "nl") return nl_ui_domain_download_version_size(inputs)
	if (locale === "pl") return pl_ui_domain_download_version_size(inputs)
	if (locale === "pt") return pt_ui_domain_download_version_size(inputs)
	if (locale === "ru") return ru_ui_domain_download_version_size(inputs)
	if (locale === "sv") return sv_ui_domain_download_version_size(inputs)
	if (locale === "tr") return tr_ui_domain_download_version_size(inputs)
	if (locale === "zh") return zh_ui_domain_download_version_size(inputs)
	if (locale === "ja") return ja_ui_domain_download_version_size(inputs)
	return en_ui_domain_download_version_size(inputs)
});
