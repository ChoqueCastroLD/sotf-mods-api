/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Image_UnreadableInputs */

const en_upload_image_unreadable = /** @type {(inputs: Upload_Image_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That image couldn’t be opened.`)
};

const es_upload_image_unreadable = /** @type {(inputs: Upload_Image_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo abrir esa imagen.`)
};

const de_upload_image_unreadable = /** @type {(inputs: Upload_Image_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Bild konnte nicht geöffnet werden.`)
};

const fr_upload_image_unreadable = /** @type {(inputs: Upload_Image_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette image n’a pas pu être ouverte.`)
};

const it_upload_image_unreadable = /** @type {(inputs: Upload_Image_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile aprire quell’immagine.`)
};

const nl_upload_image_unreadable = /** @type {(inputs: Upload_Image_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die afbeelding kon niet worden geopend.`)
};

const pl_upload_image_unreadable = /** @type {(inputs: Upload_Image_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się otworzyć tego obrazu.`)
};

const pt_upload_image_unreadable = /** @type {(inputs: Upload_Image_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível abrir essa imagem.`)
};

const ru_upload_image_unreadable = /** @type {(inputs: Upload_Image_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось открыть это изображение.`)
};

const sv_upload_image_unreadable = /** @type {(inputs: Upload_Image_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilden kunde inte öppnas.`)
};

const tr_upload_image_unreadable = /** @type {(inputs: Upload_Image_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu görsel açılamadı.`)
};

const zh_upload_image_unreadable = /** @type {(inputs: Upload_Image_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法打开这张图片。`)
};

const ja_upload_image_unreadable = /** @type {(inputs: Upload_Image_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その画像を開けませんでした。`)
};

/**
* | output |
* | --- |
* | "That image couldn’t be opened." |
*
* @param {Upload_Image_UnreadableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_image_unreadable = /** @type {((inputs?: Upload_Image_UnreadableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Image_UnreadableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_image_unreadable(inputs)
	if (locale === "de") return de_upload_image_unreadable(inputs)
	if (locale === "fr") return fr_upload_image_unreadable(inputs)
	if (locale === "it") return it_upload_image_unreadable(inputs)
	if (locale === "nl") return nl_upload_image_unreadable(inputs)
	if (locale === "pl") return pl_upload_image_unreadable(inputs)
	if (locale === "pt") return pt_upload_image_unreadable(inputs)
	if (locale === "ru") return ru_upload_image_unreadable(inputs)
	if (locale === "sv") return sv_upload_image_unreadable(inputs)
	if (locale === "tr") return tr_upload_image_unreadable(inputs)
	if (locale === "zh") return zh_upload_image_unreadable(inputs)
	if (locale === "ja") return ja_upload_image_unreadable(inputs)
	return en_upload_image_unreadable(inputs)
});
