/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ done: NonNullable<unknown>, total: NonNullable<unknown> }} Kits_Download_ProgressInputs */

const en_kits_download_progress = /** @type {(inputs: Kits_Download_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Downloaded ${i?.done}/${i?.total}`)
};

const es_kits_download_progress = /** @type {(inputs: Kits_Download_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descargados ${i?.done}/${i?.total}`)
};

const de_kits_download_progress = /** @type {(inputs: Kits_Download_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Heruntergeladen: ${i?.done}/${i?.total}`)
};

const fr_kits_download_progress = /** @type {(inputs: Kits_Download_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Téléchargés : ${i?.done}/${i?.total}`)
};

const it_kits_download_progress = /** @type {(inputs: Kits_Download_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scaricati ${i?.done}/${i?.total}`)
};

const nl_kits_download_progress = /** @type {(inputs: Kits_Download_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gedownload: ${i?.done}/${i?.total}`)
};

const pl_kits_download_progress = /** @type {(inputs: Kits_Download_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pobrano ${i?.done}/${i?.total}`)
};

const pt_kits_download_progress = /** @type {(inputs: Kits_Download_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Baixados ${i?.done}/${i?.total}`)
};

const ru_kits_download_progress = /** @type {(inputs: Kits_Download_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скачано ${i?.done}/${i?.total}`)
};

const sv_kits_download_progress = /** @type {(inputs: Kits_Download_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nedladdat ${i?.done}/${i?.total}`)
};

const tr_kits_download_progress = /** @type {(inputs: Kits_Download_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`İndirilen ${i?.done}/${i?.total}`)
};

const zh_kits_download_progress = /** @type {(inputs: Kits_Download_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已下载 ${i?.done}/${i?.total}`)
};

const ja_kits_download_progress = /** @type {(inputs: Kits_Download_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ダウンロード済み ${i?.done}/${i?.total}`)
};

/**
* | output |
* | --- |
* | "Downloaded {done}/{total}" |
*
* @param {Kits_Download_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_download_progress = /** @type {((inputs: Kits_Download_ProgressInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Download_ProgressInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_download_progress(inputs)
	if (locale === "de") return de_kits_download_progress(inputs)
	if (locale === "fr") return fr_kits_download_progress(inputs)
	if (locale === "it") return it_kits_download_progress(inputs)
	if (locale === "nl") return nl_kits_download_progress(inputs)
	if (locale === "pl") return pl_kits_download_progress(inputs)
	if (locale === "pt") return pt_kits_download_progress(inputs)
	if (locale === "ru") return ru_kits_download_progress(inputs)
	if (locale === "sv") return sv_kits_download_progress(inputs)
	if (locale === "tr") return tr_kits_download_progress(inputs)
	if (locale === "zh") return zh_kits_download_progress(inputs)
	if (locale === "ja") return ja_kits_download_progress(inputs)
	return en_kits_download_progress(inputs)
});
