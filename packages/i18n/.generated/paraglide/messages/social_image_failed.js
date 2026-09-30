/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Image_FailedInputs */

const en_social_image_failed = /** @type {(inputs: Social_Image_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The image couldn’t be uploaded. Remove it and try again.`)
};

const es_social_image_failed = /** @type {(inputs: Social_Image_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo subir la imagen. Quítala e inténtalo de nuevo.`)
};

const de_social_image_failed = /** @type {(inputs: Social_Image_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Bild konnte nicht hochgeladen werden. Entferne es und versuch es erneut.`)
};

const fr_social_image_failed = /** @type {(inputs: Social_Image_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’image n’a pas pu être envoyée. Retirez-la et réessayez.`)
};

const it_social_image_failed = /** @type {(inputs: Social_Image_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare l’immagine. Rimuovila e riprova.`)
};

const nl_social_image_failed = /** @type {(inputs: Social_Image_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De afbeelding kon niet worden geüpload. Verwijder hem en probeer het opnieuw.`)
};

const pl_social_image_failed = /** @type {(inputs: Social_Image_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się przesłać obrazu. Usuń go i spróbuj ponownie.`)
};

const pt_social_image_failed = /** @type {(inputs: Social_Image_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível enviar a imagem. Remova e tente de novo.`)
};

const ru_social_image_failed = /** @type {(inputs: Social_Image_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить изображение. Удалите его и попробуйте снова.`)
};

const sv_social_image_failed = /** @type {(inputs: Social_Image_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilden kunde inte laddas upp. Ta bort den och försök igen.`)
};

const tr_social_image_failed = /** @type {(inputs: Social_Image_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görsel yüklenemedi. Kaldırıp tekrar dene.`)
};

const zh_social_image_failed = /** @type {(inputs: Social_Image_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片上传失败，请移除后重试。`)
};

const ja_social_image_failed = /** @type {(inputs: Social_Image_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像をアップロードできませんでした。削除してもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "The image couldn’t be uploaded. Remove it and try again." |
*
* @param {Social_Image_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_image_failed = /** @type {((inputs?: Social_Image_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Image_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_image_failed(inputs)
	if (locale === "de") return de_social_image_failed(inputs)
	if (locale === "fr") return fr_social_image_failed(inputs)
	if (locale === "it") return it_social_image_failed(inputs)
	if (locale === "nl") return nl_social_image_failed(inputs)
	if (locale === "pl") return pl_social_image_failed(inputs)
	if (locale === "pt") return pt_social_image_failed(inputs)
	if (locale === "ru") return ru_social_image_failed(inputs)
	if (locale === "sv") return sv_social_image_failed(inputs)
	if (locale === "tr") return tr_social_image_failed(inputs)
	if (locale === "zh") return zh_social_image_failed(inputs)
	if (locale === "ja") return ja_social_image_failed(inputs)
	return en_social_image_failed(inputs)
});
