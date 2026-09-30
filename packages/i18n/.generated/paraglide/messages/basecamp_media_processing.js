/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_ProcessingInputs */

const en_basecamp_media_processing = /** @type {(inputs: Basecamp_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Processing the image…`)
};

const es_basecamp_media_processing = /** @type {(inputs: Basecamp_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Procesando la imagen…`)
};

const de_basecamp_media_processing = /** @type {(inputs: Basecamp_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bild wird verarbeitet…`)
};

const fr_basecamp_media_processing = /** @type {(inputs: Basecamp_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traitement de l’image…`)
};

const it_basecamp_media_processing = /** @type {(inputs: Basecamp_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elaborazione dell’immagine…`)
};

const nl_basecamp_media_processing = /** @type {(inputs: Basecamp_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeelding verwerken…`)
};

const pl_basecamp_media_processing = /** @type {(inputs: Basecamp_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przetwarzanie obrazu…`)
};

const pt_basecamp_media_processing = /** @type {(inputs: Basecamp_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Processando a imagem…`)
};

const ru_basecamp_media_processing = /** @type {(inputs: Basecamp_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обработка изображения…`)
};

const sv_basecamp_media_processing = /** @type {(inputs: Basecamp_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearbetar bilden…`)
};

const tr_basecamp_media_processing = /** @type {(inputs: Basecamp_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görsel işleniyor…`)
};

const zh_basecamp_media_processing = /** @type {(inputs: Basecamp_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在处理图片…`)
};

const ja_basecamp_media_processing = /** @type {(inputs: Basecamp_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像を処理中…`)
};

/**
* | output |
* | --- |
* | "Processing the image…" |
*
* @param {Basecamp_Media_ProcessingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_processing = /** @type {((inputs?: Basecamp_Media_ProcessingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_ProcessingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_processing(inputs)
	if (locale === "de") return de_basecamp_media_processing(inputs)
	if (locale === "fr") return fr_basecamp_media_processing(inputs)
	if (locale === "it") return it_basecamp_media_processing(inputs)
	if (locale === "nl") return nl_basecamp_media_processing(inputs)
	if (locale === "pl") return pl_basecamp_media_processing(inputs)
	if (locale === "pt") return pt_basecamp_media_processing(inputs)
	if (locale === "ru") return ru_basecamp_media_processing(inputs)
	if (locale === "sv") return sv_basecamp_media_processing(inputs)
	if (locale === "tr") return tr_basecamp_media_processing(inputs)
	if (locale === "zh") return zh_basecamp_media_processing(inputs)
	if (locale === "ja") return ja_basecamp_media_processing(inputs)
	return en_basecamp_media_processing(inputs)
});
