/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_Upload_FailedInputs */

const en_basecamp_media_upload_failed = /** @type {(inputs: Basecamp_Media_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The image could not be uploaded.`)
};

const es_basecamp_media_upload_failed = /** @type {(inputs: Basecamp_Media_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo subir la imagen.`)
};

const de_basecamp_media_upload_failed = /** @type {(inputs: Basecamp_Media_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Bild konnte nicht hochgeladen werden.`)
};

const fr_basecamp_media_upload_failed = /** @type {(inputs: Basecamp_Media_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’image n’a pas pu être envoyée.`)
};

const it_basecamp_media_upload_failed = /** @type {(inputs: Basecamp_Media_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile caricare l’immagine.`)
};

const nl_basecamp_media_upload_failed = /** @type {(inputs: Basecamp_Media_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De afbeelding kon niet worden geüpload.`)
};

const pl_basecamp_media_upload_failed = /** @type {(inputs: Basecamp_Media_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wysłać obrazu.`)
};

const pt_basecamp_media_upload_failed = /** @type {(inputs: Basecamp_Media_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível enviar a imagem.`)
};

const ru_basecamp_media_upload_failed = /** @type {(inputs: Basecamp_Media_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить изображение.`)
};

const sv_basecamp_media_upload_failed = /** @type {(inputs: Basecamp_Media_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilden kunde inte laddas upp.`)
};

const tr_basecamp_media_upload_failed = /** @type {(inputs: Basecamp_Media_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görsel yüklenemedi.`)
};

const zh_basecamp_media_upload_failed = /** @type {(inputs: Basecamp_Media_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片上传失败。`)
};

const ja_basecamp_media_upload_failed = /** @type {(inputs: Basecamp_Media_Upload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像をアップロードできませんでした。`)
};

/**
* | output |
* | --- |
* | "The image could not be uploaded." |
*
* @param {Basecamp_Media_Upload_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_upload_failed = /** @type {((inputs?: Basecamp_Media_Upload_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Upload_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_upload_failed(inputs)
	if (locale === "de") return de_basecamp_media_upload_failed(inputs)
	if (locale === "fr") return fr_basecamp_media_upload_failed(inputs)
	if (locale === "it") return it_basecamp_media_upload_failed(inputs)
	if (locale === "nl") return nl_basecamp_media_upload_failed(inputs)
	if (locale === "pl") return pl_basecamp_media_upload_failed(inputs)
	if (locale === "pt") return pt_basecamp_media_upload_failed(inputs)
	if (locale === "ru") return ru_basecamp_media_upload_failed(inputs)
	if (locale === "sv") return sv_basecamp_media_upload_failed(inputs)
	if (locale === "tr") return tr_basecamp_media_upload_failed(inputs)
	if (locale === "zh") return zh_basecamp_media_upload_failed(inputs)
	if (locale === "ja") return ja_basecamp_media_upload_failed(inputs)
	return en_basecamp_media_upload_failed(inputs)
});
