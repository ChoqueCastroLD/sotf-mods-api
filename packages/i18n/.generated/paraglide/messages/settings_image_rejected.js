/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Image_RejectedInputs */

const en_settings_image_rejected = /** @type {(inputs: Settings_Image_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The image was rejected. Try a different one.`)
};

const es_settings_image_rejected = /** @type {(inputs: Settings_Image_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La imagen ha sido rechazada. Prueba con otra.`)
};

const de_settings_image_rejected = /** @type {(inputs: Settings_Image_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Bild wurde abgelehnt. Versuch es mit einem anderen.`)
};

const fr_settings_image_rejected = /** @type {(inputs: Settings_Image_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’image a été refusée. Essayez-en une autre.`)
};

const it_settings_image_rejected = /** @type {(inputs: Settings_Image_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’immagine è stata rifiutata. Provane un’altra.`)
};

const nl_settings_image_rejected = /** @type {(inputs: Settings_Image_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De afbeelding is afgewezen. Probeer een andere.`)
};

const pl_settings_image_rejected = /** @type {(inputs: Settings_Image_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obraz został odrzucony. Spróbuj innego.`)
};

const pt_settings_image_rejected = /** @type {(inputs: Settings_Image_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A imagem foi rejeitada. Tente outra.`)
};

const ru_settings_image_rejected = /** @type {(inputs: Settings_Image_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изображение отклонено. Попробуйте другое.`)
};

const sv_settings_image_rejected = /** @type {(inputs: Settings_Image_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilden avvisades. Prova en annan.`)
};

const tr_settings_image_rejected = /** @type {(inputs: Settings_Image_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görsel reddedildi. Başka birini dene.`)
};

const zh_settings_image_rejected = /** @type {(inputs: Settings_Image_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片被拒绝。请换一张试试。`)
};

const ja_settings_image_rejected = /** @type {(inputs: Settings_Image_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像が拒否されました。別の画像をお試しください。`)
};

/**
* | output |
* | --- |
* | "The image was rejected. Try a different one." |
*
* @param {Settings_Image_RejectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_image_rejected = /** @type {((inputs?: Settings_Image_RejectedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Image_RejectedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_image_rejected(inputs)
	if (locale === "de") return de_settings_image_rejected(inputs)
	if (locale === "fr") return fr_settings_image_rejected(inputs)
	if (locale === "it") return it_settings_image_rejected(inputs)
	if (locale === "nl") return nl_settings_image_rejected(inputs)
	if (locale === "pl") return pl_settings_image_rejected(inputs)
	if (locale === "pt") return pt_settings_image_rejected(inputs)
	if (locale === "ru") return ru_settings_image_rejected(inputs)
	if (locale === "sv") return sv_settings_image_rejected(inputs)
	if (locale === "tr") return tr_settings_image_rejected(inputs)
	if (locale === "zh") return zh_settings_image_rejected(inputs)
	if (locale === "ja") return ja_settings_image_rejected(inputs)
	return en_settings_image_rejected(inputs)
});
