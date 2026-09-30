/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Social_Image_LimitInputs */

const en_social_image_limit = /** @type {(inputs: Social_Image_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Up to ${i?.max} images per comment.`)
};

const es_social_image_limit = /** @type {(inputs: Social_Image_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hasta ${i?.max} imágenes por comentario.`)
};

const de_social_image_limit = /** @type {(inputs: Social_Image_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bis zu ${i?.max} Bilder pro Kommentar.`)
};

const fr_social_image_limit = /** @type {(inputs: Social_Image_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jusqu’à ${i?.max} images par commentaire.`)
};

const it_social_image_limit = /** @type {(inputs: Social_Image_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fino a ${i?.max} immagini per commento.`)
};

const nl_social_image_limit = /** @type {(inputs: Social_Image_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Maximaal ${i?.max} afbeeldingen per reactie.`)
};

const pl_social_image_limit = /** @type {(inputs: Social_Image_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Maksymalna liczba obrazów w komentarzu: ${i?.max}.`)
};

const pt_social_image_limit = /** @type {(inputs: Social_Image_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Até ${i?.max} imagens por comentário.`)
};

const ru_social_image_limit = /** @type {(inputs: Social_Image_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`До ${i?.max} изображений в комментарии.`)
};

const sv_social_image_limit = /** @type {(inputs: Social_Image_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Högst ${i?.max} bilder per kommentar.`)
};

const tr_social_image_limit = /** @type {(inputs: Social_Image_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yorum başına en fazla ${i?.max} görsel.`)
};

const zh_social_image_limit = /** @type {(inputs: Social_Image_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`每条评论最多 ${i?.max} 张图片。`)
};

const ja_social_image_limit = /** @type {(inputs: Social_Image_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`コメント 1 件につき画像は ${i?.max} 枚までです。`)
};

/**
* | output |
* | --- |
* | "Up to {max} images per comment." |
*
* @param {Social_Image_LimitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_image_limit = /** @type {((inputs: Social_Image_LimitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Image_LimitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_image_limit(inputs)
	if (locale === "de") return de_social_image_limit(inputs)
	if (locale === "fr") return fr_social_image_limit(inputs)
	if (locale === "it") return it_social_image_limit(inputs)
	if (locale === "nl") return nl_social_image_limit(inputs)
	if (locale === "pl") return pl_social_image_limit(inputs)
	if (locale === "pt") return pt_social_image_limit(inputs)
	if (locale === "ru") return ru_social_image_limit(inputs)
	if (locale === "sv") return sv_social_image_limit(inputs)
	if (locale === "tr") return tr_social_image_limit(inputs)
	if (locale === "zh") return zh_social_image_limit(inputs)
	if (locale === "ja") return ja_social_image_limit(inputs)
	return en_social_image_limit(inputs)
});
