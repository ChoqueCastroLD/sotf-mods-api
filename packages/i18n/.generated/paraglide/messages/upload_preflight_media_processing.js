/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Media_ProcessingInputs */

const en_upload_preflight_media_processing = /** @type {(inputs: Upload_Preflight_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Images are still being processed.`)
};

const es_upload_preflight_media_processing = /** @type {(inputs: Upload_Preflight_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las imágenes aún se están procesando.`)
};

const de_upload_preflight_media_processing = /** @type {(inputs: Upload_Preflight_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Bilder werden noch verarbeitet.`)
};

const fr_upload_preflight_media_processing = /** @type {(inputs: Upload_Preflight_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les images sont encore en cours de traitement.`)
};

const it_upload_preflight_media_processing = /** @type {(inputs: Upload_Preflight_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le immagini sono ancora in elaborazione.`)
};

const nl_upload_preflight_media_processing = /** @type {(inputs: Upload_Preflight_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De afbeeldingen worden nog verwerkt.`)
};

const pl_upload_preflight_media_processing = /** @type {(inputs: Upload_Preflight_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obrazy są jeszcze przetwarzane.`)
};

const pt_upload_preflight_media_processing = /** @type {(inputs: Upload_Preflight_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As imagens ainda estão sendo processadas.`)
};

const ru_upload_preflight_media_processing = /** @type {(inputs: Upload_Preflight_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изображения ещё обрабатываются.`)
};

const sv_upload_preflight_media_processing = /** @type {(inputs: Upload_Preflight_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilderna bearbetas fortfarande.`)
};

const tr_upload_preflight_media_processing = /** @type {(inputs: Upload_Preflight_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görseller hâlâ işleniyor.`)
};

const zh_upload_preflight_media_processing = /** @type {(inputs: Upload_Preflight_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片仍在处理中。`)
};

const ja_upload_preflight_media_processing = /** @type {(inputs: Upload_Preflight_Media_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像を処理中です。`)
};

/**
* | output |
* | --- |
* | "Images are still being processed." |
*
* @param {Upload_Preflight_Media_ProcessingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_media_processing = /** @type {((inputs?: Upload_Preflight_Media_ProcessingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Media_ProcessingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_media_processing(inputs)
	if (locale === "de") return de_upload_preflight_media_processing(inputs)
	if (locale === "fr") return fr_upload_preflight_media_processing(inputs)
	if (locale === "it") return it_upload_preflight_media_processing(inputs)
	if (locale === "nl") return nl_upload_preflight_media_processing(inputs)
	if (locale === "pl") return pl_upload_preflight_media_processing(inputs)
	if (locale === "pt") return pt_upload_preflight_media_processing(inputs)
	if (locale === "ru") return ru_upload_preflight_media_processing(inputs)
	if (locale === "sv") return sv_upload_preflight_media_processing(inputs)
	if (locale === "tr") return tr_upload_preflight_media_processing(inputs)
	if (locale === "zh") return zh_upload_preflight_media_processing(inputs)
	if (locale === "ja") return ja_upload_preflight_media_processing(inputs)
	return en_upload_preflight_media_processing(inputs)
});
