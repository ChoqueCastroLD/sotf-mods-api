/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_DownloadInputs */

const en_ui_domain_download = /** @type {(inputs: Ui_Domain_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const es_ui_domain_download = /** @type {(inputs: Ui_Domain_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar`)
};

const de_ui_domain_download = /** @type {(inputs: Ui_Domain_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herunterladen`)
};

const fr_ui_domain_download = /** @type {(inputs: Ui_Domain_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger`)
};

const it_ui_domain_download = /** @type {(inputs: Ui_Domain_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica`)
};

const nl_ui_domain_download = /** @type {(inputs: Ui_Domain_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloaden`)
};

const pl_ui_domain_download = /** @type {(inputs: Ui_Domain_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz`)
};

const pt_ui_domain_download = /** @type {(inputs: Ui_Domain_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar`)
};

const ru_ui_domain_download = /** @type {(inputs: Ui_Domain_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать`)
};

const sv_ui_domain_download = /** @type {(inputs: Ui_Domain_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner`)
};

const tr_ui_domain_download = /** @type {(inputs: Ui_Domain_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndir`)
};

const zh_ui_domain_download = /** @type {(inputs: Ui_Domain_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载`)
};

const ja_ui_domain_download = /** @type {(inputs: Ui_Domain_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード`)
};

/**
* | output |
* | --- |
* | "Download" |
*
* @param {Ui_Domain_DownloadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_download = /** @type {((inputs?: Ui_Domain_DownloadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_DownloadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_download(inputs)
	if (locale === "de") return de_ui_domain_download(inputs)
	if (locale === "fr") return fr_ui_domain_download(inputs)
	if (locale === "it") return it_ui_domain_download(inputs)
	if (locale === "nl") return nl_ui_domain_download(inputs)
	if (locale === "pl") return pl_ui_domain_download(inputs)
	if (locale === "pt") return pt_ui_domain_download(inputs)
	if (locale === "ru") return ru_ui_domain_download(inputs)
	if (locale === "sv") return sv_ui_domain_download(inputs)
	if (locale === "tr") return tr_ui_domain_download(inputs)
	if (locale === "zh") return zh_ui_domain_download(inputs)
	if (locale === "ja") return ja_ui_domain_download(inputs)
	return en_ui_domain_download(inputs)
});
