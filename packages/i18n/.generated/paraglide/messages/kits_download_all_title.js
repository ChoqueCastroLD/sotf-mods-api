/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Download_All_TitleInputs */

const en_kits_download_all_title = /** @type {(inputs: Kits_Download_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download all`)
};

const es_kits_download_all_title = /** @type {(inputs: Kits_Download_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar todo`)
};

const de_kits_download_all_title = /** @type {(inputs: Kits_Download_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles herunterladen`)
};

const fr_kits_download_all_title = /** @type {(inputs: Kits_Download_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout télécharger`)
};

const it_kits_download_all_title = /** @type {(inputs: Kits_Download_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica tutto`)
};

const nl_kits_download_all_title = /** @type {(inputs: Kits_Download_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles downloaden`)
};

const pl_kits_download_all_title = /** @type {(inputs: Kits_Download_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz wszystko`)
};

const pt_kits_download_all_title = /** @type {(inputs: Kits_Download_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar tudo`)
};

const ru_kits_download_all_title = /** @type {(inputs: Kits_Download_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать всё`)
};

const sv_kits_download_all_title = /** @type {(inputs: Kits_Download_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner allt`)
};

const tr_kits_download_all_title = /** @type {(inputs: Kits_Download_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümünü indir`)
};

const zh_kits_download_all_title = /** @type {(inputs: Kits_Download_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部下载`)
};

const ja_kits_download_all_title = /** @type {(inputs: Kits_Download_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてダウンロード`)
};

/**
* | output |
* | --- |
* | "Download all" |
*
* @param {Kits_Download_All_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_download_all_title = /** @type {((inputs?: Kits_Download_All_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Download_All_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_download_all_title(inputs)
	if (locale === "de") return de_kits_download_all_title(inputs)
	if (locale === "fr") return fr_kits_download_all_title(inputs)
	if (locale === "it") return it_kits_download_all_title(inputs)
	if (locale === "nl") return nl_kits_download_all_title(inputs)
	if (locale === "pl") return pl_kits_download_all_title(inputs)
	if (locale === "pt") return pt_kits_download_all_title(inputs)
	if (locale === "ru") return ru_kits_download_all_title(inputs)
	if (locale === "sv") return sv_kits_download_all_title(inputs)
	if (locale === "tr") return tr_kits_download_all_title(inputs)
	if (locale === "zh") return zh_kits_download_all_title(inputs)
	if (locale === "ja") return ja_kits_download_all_title(inputs)
	return en_kits_download_all_title(inputs)
});
