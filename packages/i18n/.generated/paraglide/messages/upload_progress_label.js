/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Progress_LabelInputs */

const en_upload_progress_label = /** @type {(inputs: Upload_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload progress`)
};

const es_upload_progress_label = /** @type {(inputs: Upload_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progreso de la subida`)
};

const de_upload_progress_label = /** @type {(inputs: Upload_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload-Fortschritt`)
};

const fr_upload_progress_label = /** @type {(inputs: Upload_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progression de l’envoi`)
};

const it_upload_progress_label = /** @type {(inputs: Upload_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avanzamento del caricamento`)
};

const nl_upload_progress_label = /** @type {(inputs: Upload_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploadvoortgang`)
};

const pl_upload_progress_label = /** @type {(inputs: Upload_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Postęp wysyłania`)
};

const pt_upload_progress_label = /** @type {(inputs: Upload_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progresso do envio`)
};

const ru_upload_progress_label = /** @type {(inputs: Upload_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ход загрузки`)
};

const sv_upload_progress_label = /** @type {(inputs: Upload_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppladdningsförlopp`)
};

const tr_upload_progress_label = /** @type {(inputs: Upload_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükleme ilerlemesi`)
};

const zh_upload_progress_label = /** @type {(inputs: Upload_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传进度`)
};

const ja_upload_progress_label = /** @type {(inputs: Upload_Progress_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップロードの進行状況`)
};

/**
* | output |
* | --- |
* | "Upload progress" |
*
* @param {Upload_Progress_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_progress_label = /** @type {((inputs?: Upload_Progress_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Progress_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_progress_label(inputs)
	if (locale === "de") return de_upload_progress_label(inputs)
	if (locale === "fr") return fr_upload_progress_label(inputs)
	if (locale === "it") return it_upload_progress_label(inputs)
	if (locale === "nl") return nl_upload_progress_label(inputs)
	if (locale === "pl") return pl_upload_progress_label(inputs)
	if (locale === "pt") return pt_upload_progress_label(inputs)
	if (locale === "ru") return ru_upload_progress_label(inputs)
	if (locale === "sv") return sv_upload_progress_label(inputs)
	if (locale === "tr") return tr_upload_progress_label(inputs)
	if (locale === "zh") return zh_upload_progress_label(inputs)
	if (locale === "ja") return ja_upload_progress_label(inputs)
	return en_upload_progress_label(inputs)
});
