/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Cover_UploadingInputs */

const en_upload_cover_uploading = /** @type {(inputs: Upload_Cover_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cover upload progress`)
};

const es_upload_cover_uploading = /** @type {(inputs: Upload_Cover_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progreso de la subida de la portada`)
};

const de_upload_cover_uploading = /** @type {(inputs: Upload_Cover_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload-Fortschritt des Titelbilds`)
};

const fr_upload_cover_uploading = /** @type {(inputs: Upload_Cover_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progression de l’envoi de la couverture`)
};

const it_upload_cover_uploading = /** @type {(inputs: Upload_Cover_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avanzamento del caricamento della copertina`)
};

const nl_upload_cover_uploading = /** @type {(inputs: Upload_Cover_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploadvoortgang van de omslag`)
};

const pl_upload_cover_uploading = /** @type {(inputs: Upload_Cover_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Postęp wysyłania okładki`)
};

const pt_upload_cover_uploading = /** @type {(inputs: Upload_Cover_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progresso do envio da capa`)
};

const ru_upload_cover_uploading = /** @type {(inputs: Upload_Cover_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ход загрузки обложки`)
};

const sv_upload_cover_uploading = /** @type {(inputs: Upload_Cover_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppladdningsförlopp för omslaget`)
};

const tr_upload_cover_uploading = /** @type {(inputs: Upload_Cover_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapak yükleme ilerlemesi`)
};

const zh_upload_cover_uploading = /** @type {(inputs: Upload_Cover_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`封面上传进度`)
};

const ja_upload_cover_uploading = /** @type {(inputs: Upload_Cover_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバーのアップロード状況`)
};

/**
* | output |
* | --- |
* | "Cover upload progress" |
*
* @param {Upload_Cover_UploadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_cover_uploading = /** @type {((inputs?: Upload_Cover_UploadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Cover_UploadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_cover_uploading(inputs)
	if (locale === "de") return de_upload_cover_uploading(inputs)
	if (locale === "fr") return fr_upload_cover_uploading(inputs)
	if (locale === "it") return it_upload_cover_uploading(inputs)
	if (locale === "nl") return nl_upload_cover_uploading(inputs)
	if (locale === "pl") return pl_upload_cover_uploading(inputs)
	if (locale === "pt") return pt_upload_cover_uploading(inputs)
	if (locale === "ru") return ru_upload_cover_uploading(inputs)
	if (locale === "sv") return sv_upload_cover_uploading(inputs)
	if (locale === "tr") return tr_upload_cover_uploading(inputs)
	if (locale === "zh") return zh_upload_cover_uploading(inputs)
	if (locale === "ja") return ja_upload_cover_uploading(inputs)
	return en_upload_cover_uploading(inputs)
});
