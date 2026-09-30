/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Crop_FrameInputs */

const en_upload_crop_frame = /** @type {(inputs: Upload_Crop_FrameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crop frame`)
};

const es_upload_crop_frame = /** @type {(inputs: Upload_Crop_FrameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marco de recorte`)
};

const de_upload_crop_frame = /** @type {(inputs: Upload_Crop_FrameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zuschnittrahmen`)
};

const fr_upload_crop_frame = /** @type {(inputs: Upload_Crop_FrameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cadre de recadrage`)
};

const it_upload_crop_frame = /** @type {(inputs: Upload_Crop_FrameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cornice di ritaglio`)
};

const nl_upload_crop_frame = /** @type {(inputs: Upload_Crop_FrameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bijsnijkader`)
};

const pl_upload_crop_frame = /** @type {(inputs: Upload_Crop_FrameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ramka kadrowania`)
};

const pt_upload_crop_frame = /** @type {(inputs: Upload_Crop_FrameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quadro de recorte`)
};

const ru_upload_crop_frame = /** @type {(inputs: Upload_Crop_FrameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рамка кадрирования`)
};

const sv_upload_crop_frame = /** @type {(inputs: Upload_Crop_FrameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskärningsram`)
};

const tr_upload_crop_frame = /** @type {(inputs: Upload_Crop_FrameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kırpma çerçevesi`)
};

const zh_upload_crop_frame = /** @type {(inputs: Upload_Crop_FrameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`裁剪框`)
};

const ja_upload_crop_frame = /** @type {(inputs: Upload_Crop_FrameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`切り抜き枠`)
};

/**
* | output |
* | --- |
* | "Crop frame" |
*
* @param {Upload_Crop_FrameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_crop_frame = /** @type {((inputs?: Upload_Crop_FrameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Crop_FrameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_crop_frame(inputs)
	if (locale === "de") return de_upload_crop_frame(inputs)
	if (locale === "fr") return fr_upload_crop_frame(inputs)
	if (locale === "it") return it_upload_crop_frame(inputs)
	if (locale === "nl") return nl_upload_crop_frame(inputs)
	if (locale === "pl") return pl_upload_crop_frame(inputs)
	if (locale === "pt") return pt_upload_crop_frame(inputs)
	if (locale === "ru") return ru_upload_crop_frame(inputs)
	if (locale === "sv") return sv_upload_crop_frame(inputs)
	if (locale === "tr") return tr_upload_crop_frame(inputs)
	if (locale === "zh") return zh_upload_crop_frame(inputs)
	if (locale === "ja") return ja_upload_crop_frame(inputs)
	return en_upload_crop_frame(inputs)
});
