/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Image_ProcessingInputs */

const en_settings_image_processing = /** @type {(inputs: Settings_Image_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The image is taking too long to process. Try again in a moment.`)
};

const es_settings_image_processing = /** @type {(inputs: Settings_Image_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La imagen está tardando demasiado en procesarse. Inténtalo de nuevo en un momento.`)
};

const de_settings_image_processing = /** @type {(inputs: Settings_Image_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Verarbeitung des Bildes dauert zu lange. Versuch es gleich noch einmal.`)
};

const fr_settings_image_processing = /** @type {(inputs: Settings_Image_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le traitement de l’image prend trop de temps. Réessayez dans un instant.`)
};

const it_settings_image_processing = /** @type {(inputs: Settings_Image_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’elaborazione dell’immagine sta richiedendo troppo. Riprova tra un momento.`)
};

const nl_settings_image_processing = /** @type {(inputs: Settings_Image_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het verwerken van de afbeelding duurt te lang. Probeer het zo opnieuw.`)
};

const pl_settings_image_processing = /** @type {(inputs: Settings_Image_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przetwarzanie obrazu trwa zbyt długo. Spróbuj ponownie za chwilę.`)
};

const pt_settings_image_processing = /** @type {(inputs: Settings_Image_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A imagem está demorando demais para ser processada. Tente de novo daqui a pouco.`)
};

const ru_settings_image_processing = /** @type {(inputs: Settings_Image_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обработка изображения занимает слишком много времени. Попробуйте чуть позже.`)
};

const sv_settings_image_processing = /** @type {(inputs: Settings_Image_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det tar för lång tid att bearbeta bilden. Försök igen om en stund.`)
};

const tr_settings_image_processing = /** @type {(inputs: Settings_Image_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görselin işlenmesi çok uzun sürüyor. Birazdan tekrar dene.`)
};

const zh_settings_image_processing = /** @type {(inputs: Settings_Image_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片处理时间过长。请稍后再试。`)
};

const ja_settings_image_processing = /** @type {(inputs: Settings_Image_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像の処理に時間がかかりすぎています。しばらくしてからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "The image is taking too long to process. Try again in a moment." |
*
* @param {Settings_Image_ProcessingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_image_processing = /** @type {((inputs?: Settings_Image_ProcessingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Image_ProcessingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_image_processing(inputs)
	if (locale === "de") return de_settings_image_processing(inputs)
	if (locale === "fr") return fr_settings_image_processing(inputs)
	if (locale === "it") return it_settings_image_processing(inputs)
	if (locale === "nl") return nl_settings_image_processing(inputs)
	if (locale === "pl") return pl_settings_image_processing(inputs)
	if (locale === "pt") return pt_settings_image_processing(inputs)
	if (locale === "ru") return ru_settings_image_processing(inputs)
	if (locale === "sv") return sv_settings_image_processing(inputs)
	if (locale === "tr") return tr_settings_image_processing(inputs)
	if (locale === "zh") return zh_settings_image_processing(inputs)
	if (locale === "ja") return ja_settings_image_processing(inputs)
	return en_settings_image_processing(inputs)
});
