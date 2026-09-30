/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Download_Done_LabelInputs */

const en_ui_domain_download_done_label = /** @type {(inputs: Ui_Domain_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloaded`)
};

const es_ui_domain_download_done_label = /** @type {(inputs: Ui_Domain_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargado`)
};

const de_ui_domain_download_done_label = /** @type {(inputs: Ui_Domain_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heruntergeladen`)
};

const fr_ui_domain_download_done_label = /** @type {(inputs: Ui_Domain_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargé`)
};

const it_ui_domain_download_done_label = /** @type {(inputs: Ui_Domain_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scaricato`)
};

const nl_ui_domain_download_done_label = /** @type {(inputs: Ui_Domain_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gedownload`)
};

const pl_ui_domain_download_done_label = /** @type {(inputs: Ui_Domain_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrano`)
};

const pt_ui_domain_download_done_label = /** @type {(inputs: Ui_Domain_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixado`)
};

const ru_ui_domain_download_done_label = /** @type {(inputs: Ui_Domain_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачано`)
};

const sv_ui_domain_download_done_label = /** @type {(inputs: Ui_Domain_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdad`)
};

const tr_ui_domain_download_done_label = /** @type {(inputs: Ui_Domain_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirildi`)
};

const zh_ui_domain_download_done_label = /** @type {(inputs: Ui_Domain_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已下载`)
};

const ja_ui_domain_download_done_label = /** @type {(inputs: Ui_Domain_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード済み`)
};

/**
* | output |
* | --- |
* | "Downloaded" |
*
* @param {Ui_Domain_Download_Done_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_download_done_label = /** @type {((inputs?: Ui_Domain_Download_Done_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Download_Done_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_download_done_label(inputs)
	if (locale === "de") return de_ui_domain_download_done_label(inputs)
	if (locale === "fr") return fr_ui_domain_download_done_label(inputs)
	if (locale === "it") return it_ui_domain_download_done_label(inputs)
	if (locale === "nl") return nl_ui_domain_download_done_label(inputs)
	if (locale === "pl") return pl_ui_domain_download_done_label(inputs)
	if (locale === "pt") return pt_ui_domain_download_done_label(inputs)
	if (locale === "ru") return ru_ui_domain_download_done_label(inputs)
	if (locale === "sv") return sv_ui_domain_download_done_label(inputs)
	if (locale === "tr") return tr_ui_domain_download_done_label(inputs)
	if (locale === "zh") return zh_ui_domain_download_done_label(inputs)
	if (locale === "ja") return ja_ui_domain_download_done_label(inputs)
	return en_ui_domain_download_done_label(inputs)
});
