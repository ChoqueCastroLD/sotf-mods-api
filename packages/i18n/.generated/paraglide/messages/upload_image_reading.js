/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Image_ReadingInputs */

const en_upload_image_reading = /** @type {(inputs: Upload_Image_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reading the image…`)
};

const es_upload_image_reading = /** @type {(inputs: Upload_Image_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leyendo la imagen…`)
};

const de_upload_image_reading = /** @type {(inputs: Upload_Image_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bild wird gelesen…`)
};

const fr_upload_image_reading = /** @type {(inputs: Upload_Image_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lecture de l’image…`)
};

const it_upload_image_reading = /** @type {(inputs: Upload_Image_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lettura dell’immagine…`)
};

const nl_upload_image_reading = /** @type {(inputs: Upload_Image_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeelding lezen…`)
};

const pl_upload_image_reading = /** @type {(inputs: Upload_Image_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odczytywanie obrazu…`)
};

const pt_upload_image_reading = /** @type {(inputs: Upload_Image_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lendo a imagem…`)
};

const ru_upload_image_reading = /** @type {(inputs: Upload_Image_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Читаем изображение…`)
};

const sv_upload_image_reading = /** @type {(inputs: Upload_Image_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läser bilden…`)
};

const tr_upload_image_reading = /** @type {(inputs: Upload_Image_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görsel okunuyor…`)
};

const zh_upload_image_reading = /** @type {(inputs: Upload_Image_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在读取图片…`)
};

const ja_upload_image_reading = /** @type {(inputs: Upload_Image_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像を読み込み中…`)
};

/**
* | output |
* | --- |
* | "Reading the image…" |
*
* @param {Upload_Image_ReadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_image_reading = /** @type {((inputs?: Upload_Image_ReadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Image_ReadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_image_reading(inputs)
	if (locale === "de") return de_upload_image_reading(inputs)
	if (locale === "fr") return fr_upload_image_reading(inputs)
	if (locale === "it") return it_upload_image_reading(inputs)
	if (locale === "nl") return nl_upload_image_reading(inputs)
	if (locale === "pl") return pl_upload_image_reading(inputs)
	if (locale === "pt") return pt_upload_image_reading(inputs)
	if (locale === "ru") return ru_upload_image_reading(inputs)
	if (locale === "sv") return sv_upload_image_reading(inputs)
	if (locale === "tr") return tr_upload_image_reading(inputs)
	if (locale === "zh") return zh_upload_image_reading(inputs)
	if (locale === "ja") return ja_upload_image_reading(inputs)
	return en_upload_image_reading(inputs)
});
