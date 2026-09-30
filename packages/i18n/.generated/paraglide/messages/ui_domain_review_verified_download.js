/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Review_Verified_DownloadInputs */

const en_ui_domain_review_verified_download = /** @type {(inputs: Ui_Domain_Review_Verified_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloaded this mod`)
};

const es_ui_domain_review_verified_download = /** @type {(inputs: Ui_Domain_Review_Verified_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargó este mod`)
};

const de_ui_domain_review_verified_download = /** @type {(inputs: Ui_Domain_Review_Verified_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hat diesen Mod heruntergeladen`)
};

const fr_ui_domain_review_verified_download = /** @type {(inputs: Ui_Domain_Review_Verified_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A téléchargé ce mod`)
};

const it_ui_domain_review_verified_download = /** @type {(inputs: Ui_Domain_Review_Verified_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ha scaricato questa mod`)
};

const nl_ui_domain_review_verified_download = /** @type {(inputs: Ui_Domain_Review_Verified_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heeft deze mod gedownload`)
};

const pl_ui_domain_review_verified_download = /** @type {(inputs: Ui_Domain_Review_Verified_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrał(a) ten mod`)
};

const pt_ui_domain_review_verified_download = /** @type {(inputs: Ui_Domain_Review_Verified_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixou este mod`)
};

const ru_ui_domain_review_verified_download = /** @type {(inputs: Ui_Domain_Review_Verified_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачал(а) этот мод`)
};

const sv_ui_domain_review_verified_download = /** @type {(inputs: Ui_Domain_Review_Verified_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Har laddat ner moddet`)
};

const tr_ui_domain_review_verified_download = /** @type {(inputs: Ui_Domain_Review_Verified_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu modu indirdi`)
};

const zh_ui_domain_review_verified_download = /** @type {(inputs: Ui_Domain_Review_Verified_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载过此模组`)
};

const ja_ui_domain_review_verified_download = /** @type {(inputs: Ui_Domain_Review_Verified_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この MOD をダウンロード済み`)
};

/**
* | output |
* | --- |
* | "Downloaded this mod" |
*
* @param {Ui_Domain_Review_Verified_DownloadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_review_verified_download = /** @type {((inputs?: Ui_Domain_Review_Verified_DownloadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Review_Verified_DownloadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_review_verified_download(inputs)
	if (locale === "de") return de_ui_domain_review_verified_download(inputs)
	if (locale === "fr") return fr_ui_domain_review_verified_download(inputs)
	if (locale === "it") return it_ui_domain_review_verified_download(inputs)
	if (locale === "nl") return nl_ui_domain_review_verified_download(inputs)
	if (locale === "pl") return pl_ui_domain_review_verified_download(inputs)
	if (locale === "pt") return pt_ui_domain_review_verified_download(inputs)
	if (locale === "ru") return ru_ui_domain_review_verified_download(inputs)
	if (locale === "sv") return sv_ui_domain_review_verified_download(inputs)
	if (locale === "tr") return tr_ui_domain_review_verified_download(inputs)
	if (locale === "zh") return zh_ui_domain_review_verified_download(inputs)
	if (locale === "ja") return ja_ui_domain_review_verified_download(inputs)
	return en_ui_domain_review_verified_download(inputs)
});
