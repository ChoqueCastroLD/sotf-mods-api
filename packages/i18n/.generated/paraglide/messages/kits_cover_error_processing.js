/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Cover_Error_ProcessingInputs */

const en_kits_cover_error_processing = /** @type {(inputs: Kits_Cover_Error_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The image is taking too long to process. Try again later.`)
};

const es_kits_cover_error_processing = /** @type {(inputs: Kits_Cover_Error_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La imagen tarda demasiado en procesarse. Inténtalo más tarde.`)
};

const de_kits_cover_error_processing = /** @type {(inputs: Kits_Cover_Error_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Verarbeitung des Bildes dauert zu lange. Versuch es später noch einmal.`)
};

const fr_kits_cover_error_processing = /** @type {(inputs: Kits_Cover_Error_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le traitement de l’image prend trop de temps. Réessayez plus tard.`)
};

const it_kits_cover_error_processing = /** @type {(inputs: Kits_Cover_Error_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’elaborazione dell’immagine richiede troppo tempo. Riprova più tardi.`)
};

const nl_kits_cover_error_processing = /** @type {(inputs: Kits_Cover_Error_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het verwerken van de afbeelding duurt te lang. Probeer het later opnieuw.`)
};

const pl_kits_cover_error_processing = /** @type {(inputs: Kits_Cover_Error_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przetwarzanie obrazu trwa zbyt długo. Spróbuj później.`)
};

const pt_kits_cover_error_processing = /** @type {(inputs: Kits_Cover_Error_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O processamento da imagem está demorando demais. Tente mais tarde.`)
};

const ru_kits_cover_error_processing = /** @type {(inputs: Kits_Cover_Error_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обработка изображения занимает слишком много времени. Попробуйте позже.`)
};

const sv_kits_cover_error_processing = /** @type {(inputs: Kits_Cover_Error_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilden tar för lång tid att bearbeta. Försök igen senare.`)
};

const tr_kits_cover_error_processing = /** @type {(inputs: Kits_Cover_Error_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görselin işlenmesi çok uzun sürüyor. Daha sonra tekrar dene.`)
};

const zh_kits_cover_error_processing = /** @type {(inputs: Kits_Cover_Error_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片处理时间过长，请稍后再试。`)
};

const ja_kits_cover_error_processing = /** @type {(inputs: Kits_Cover_Error_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像の処理に時間がかかりすぎています。後でもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "The image is taking too long to process. Try again later." |
*
* @param {Kits_Cover_Error_ProcessingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_cover_error_processing = /** @type {((inputs?: Kits_Cover_Error_ProcessingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Cover_Error_ProcessingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_cover_error_processing(inputs)
	if (locale === "de") return de_kits_cover_error_processing(inputs)
	if (locale === "fr") return fr_kits_cover_error_processing(inputs)
	if (locale === "it") return it_kits_cover_error_processing(inputs)
	if (locale === "nl") return nl_kits_cover_error_processing(inputs)
	if (locale === "pl") return pl_kits_cover_error_processing(inputs)
	if (locale === "pt") return pt_kits_cover_error_processing(inputs)
	if (locale === "ru") return ru_kits_cover_error_processing(inputs)
	if (locale === "sv") return sv_kits_cover_error_processing(inputs)
	if (locale === "tr") return tr_kits_cover_error_processing(inputs)
	if (locale === "zh") return zh_kits_cover_error_processing(inputs)
	if (locale === "ja") return ja_kits_cover_error_processing(inputs)
	return en_kits_cover_error_processing(inputs)
});
