/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Ui_Domain_Download_VersionInputs */

const en_ui_domain_download_version = /** @type {(inputs: Ui_Domain_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download v${i?.version}`)
};

const es_ui_domain_download_version = /** @type {(inputs: Ui_Domain_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descargar v${i?.version}`)
};

const de_ui_domain_download_version = /** @type {(inputs: Ui_Domain_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} herunterladen`)
};

const fr_ui_domain_download_version = /** @type {(inputs: Ui_Domain_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Télécharger v${i?.version}`)
};

const it_ui_domain_download_version = /** @type {(inputs: Ui_Domain_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scarica v${i?.version}`)
};

const nl_ui_domain_download_version = /** @type {(inputs: Ui_Domain_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} downloaden`)
};

const pl_ui_domain_download_version = /** @type {(inputs: Ui_Domain_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pobierz v${i?.version}`)
};

const pt_ui_domain_download_version = /** @type {(inputs: Ui_Domain_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Baixar v${i?.version}`)
};

const ru_ui_domain_download_version = /** @type {(inputs: Ui_Domain_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скачать v${i?.version}`)
};

const sv_ui_domain_download_version = /** @type {(inputs: Ui_Domain_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ladda ner v${i?.version}`)
};

const tr_ui_domain_download_version = /** @type {(inputs: Ui_Domain_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} indir`)
};

const zh_ui_domain_download_version = /** @type {(inputs: Ui_Domain_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`下载 v${i?.version}`)
};

const ja_ui_domain_download_version = /** @type {(inputs: Ui_Domain_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} をダウンロード`)
};

/**
* | output |
* | --- |
* | "Download v{version}" |
*
* @param {Ui_Domain_Download_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_download_version = /** @type {((inputs: Ui_Domain_Download_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Download_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_download_version(inputs)
	if (locale === "de") return de_ui_domain_download_version(inputs)
	if (locale === "fr") return fr_ui_domain_download_version(inputs)
	if (locale === "it") return it_ui_domain_download_version(inputs)
	if (locale === "nl") return nl_ui_domain_download_version(inputs)
	if (locale === "pl") return pl_ui_domain_download_version(inputs)
	if (locale === "pt") return pt_ui_domain_download_version(inputs)
	if (locale === "ru") return ru_ui_domain_download_version(inputs)
	if (locale === "sv") return sv_ui_domain_download_version(inputs)
	if (locale === "tr") return tr_ui_domain_download_version(inputs)
	if (locale === "zh") return zh_ui_domain_download_version(inputs)
	if (locale === "ja") return ja_ui_domain_download_version(inputs)
	return en_ui_domain_download_version(inputs)
});
