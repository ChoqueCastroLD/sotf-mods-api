/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Stat_DownloadsInputs */

const en_ui_domain_stat_downloads = /** @type {(inputs: Ui_Domain_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const es_ui_domain_stat_downloads = /** @type {(inputs: Ui_Domain_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas`)
};

const de_ui_domain_stat_downloads = /** @type {(inputs: Ui_Domain_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const fr_ui_domain_stat_downloads = /** @type {(inputs: Ui_Domain_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements`)
};

const it_ui_domain_stat_downloads = /** @type {(inputs: Ui_Domain_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const nl_ui_domain_stat_downloads = /** @type {(inputs: Ui_Domain_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const pl_ui_domain_stat_downloads = /** @type {(inputs: Ui_Domain_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania`)
};

const pt_ui_domain_stat_downloads = /** @type {(inputs: Ui_Domain_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const ru_ui_domain_stat_downloads = /** @type {(inputs: Ui_Domain_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки`)
};

const sv_ui_domain_stat_downloads = /** @type {(inputs: Ui_Domain_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar`)
};

const tr_ui_domain_stat_downloads = /** @type {(inputs: Ui_Domain_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirmeler`)
};

const zh_ui_domain_stat_downloads = /** @type {(inputs: Ui_Domain_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载量`)
};

const ja_ui_domain_stat_downloads = /** @type {(inputs: Ui_Domain_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード数`)
};

/**
* | output |
* | --- |
* | "Downloads" |
*
* @param {Ui_Domain_Stat_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_stat_downloads = /** @type {((inputs?: Ui_Domain_Stat_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Stat_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_stat_downloads(inputs)
	if (locale === "de") return de_ui_domain_stat_downloads(inputs)
	if (locale === "fr") return fr_ui_domain_stat_downloads(inputs)
	if (locale === "it") return it_ui_domain_stat_downloads(inputs)
	if (locale === "nl") return nl_ui_domain_stat_downloads(inputs)
	if (locale === "pl") return pl_ui_domain_stat_downloads(inputs)
	if (locale === "pt") return pt_ui_domain_stat_downloads(inputs)
	if (locale === "ru") return ru_ui_domain_stat_downloads(inputs)
	if (locale === "sv") return sv_ui_domain_stat_downloads(inputs)
	if (locale === "tr") return tr_ui_domain_stat_downloads(inputs)
	if (locale === "zh") return zh_ui_domain_stat_downloads(inputs)
	if (locale === "ja") return ja_ui_domain_stat_downloads(inputs)
	return en_ui_domain_stat_downloads(inputs)
});
