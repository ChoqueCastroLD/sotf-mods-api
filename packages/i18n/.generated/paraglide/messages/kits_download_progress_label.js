/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Download_Progress_LabelInputs */

const en_kits_download_progress_label = /** @type {(inputs: Kits_Download_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download progress`)
};

const es_kits_download_progress_label = /** @type {(inputs: Kits_Download_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progreso de la descarga`)
};

const de_kits_download_progress_label = /** @type {(inputs: Kits_Download_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download-Fortschritt`)
};

const fr_kits_download_progress_label = /** @type {(inputs: Kits_Download_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progression du téléchargement`)
};

const it_kits_download_progress_label = /** @type {(inputs: Kits_Download_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avanzamento del download`)
};

const nl_kits_download_progress_label = /** @type {(inputs: Kits_Download_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloadvoortgang`)
};

const pl_kits_download_progress_label = /** @type {(inputs: Kits_Download_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Postęp pobierania`)
};

const pt_kits_download_progress_label = /** @type {(inputs: Kits_Download_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progresso do download`)
};

const ru_kits_download_progress_label = /** @type {(inputs: Kits_Download_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ход загрузки`)
};

const sv_kits_download_progress_label = /** @type {(inputs: Kits_Download_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningsförlopp`)
};

const tr_kits_download_progress_label = /** @type {(inputs: Kits_Download_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirme durumu`)
};

const zh_kits_download_progress_label = /** @type {(inputs: Kits_Download_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载进度`)
};

const ja_kits_download_progress_label = /** @type {(inputs: Kits_Download_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロードの進捗`)
};

/**
* | output |
* | --- |
* | "Download progress" |
*
* @param {Kits_Download_Progress_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_download_progress_label = /** @type {((inputs?: Kits_Download_Progress_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Download_Progress_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_download_progress_label(inputs)
	if (locale === "de") return de_kits_download_progress_label(inputs)
	if (locale === "fr") return fr_kits_download_progress_label(inputs)
	if (locale === "it") return it_kits_download_progress_label(inputs)
	if (locale === "nl") return nl_kits_download_progress_label(inputs)
	if (locale === "pl") return pl_kits_download_progress_label(inputs)
	if (locale === "pt") return pt_kits_download_progress_label(inputs)
	if (locale === "ru") return ru_kits_download_progress_label(inputs)
	if (locale === "sv") return sv_kits_download_progress_label(inputs)
	if (locale === "tr") return tr_kits_download_progress_label(inputs)
	if (locale === "zh") return zh_kits_download_progress_label(inputs)
	if (locale === "ja") return ja_kits_download_progress_label(inputs)
	return en_kits_download_progress_label(inputs)
});
