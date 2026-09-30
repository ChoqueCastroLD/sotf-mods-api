/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Video_LabelInputs */

const en_upload_video_label = /** @type {(inputs: Upload_Video_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube video`)
};

const es_upload_video_label = /** @type {(inputs: Upload_Video_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vídeo de YouTube`)
};

const de_upload_video_label = /** @type {(inputs: Upload_Video_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube-Video`)
};

const fr_upload_video_label = /** @type {(inputs: Upload_Video_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vidéo YouTube`)
};

const it_upload_video_label = /** @type {(inputs: Upload_Video_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video di YouTube`)
};

const nl_upload_video_label = /** @type {(inputs: Upload_Video_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube-video`)
};

const pl_upload_video_label = /** @type {(inputs: Upload_Video_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Film na YouTube`)
};

const pt_upload_video_label = /** @type {(inputs: Upload_Video_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vídeo do YouTube`)
};

const ru_upload_video_label = /** @type {(inputs: Upload_Video_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Видео на YouTube`)
};

const sv_upload_video_label = /** @type {(inputs: Upload_Video_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube-video`)
};

const tr_upload_video_label = /** @type {(inputs: Upload_Video_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube videosu`)
};

const zh_upload_video_label = /** @type {(inputs: Upload_Video_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube 视频`)
};

const ja_upload_video_label = /** @type {(inputs: Upload_Video_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube動画`)
};

/**
* | output |
* | --- |
* | "YouTube video" |
*
* @param {Upload_Video_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_video_label = /** @type {((inputs?: Upload_Video_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Video_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_video_label(inputs)
	if (locale === "de") return de_upload_video_label(inputs)
	if (locale === "fr") return fr_upload_video_label(inputs)
	if (locale === "it") return it_upload_video_label(inputs)
	if (locale === "nl") return nl_upload_video_label(inputs)
	if (locale === "pl") return pl_upload_video_label(inputs)
	if (locale === "pt") return pt_upload_video_label(inputs)
	if (locale === "ru") return ru_upload_video_label(inputs)
	if (locale === "sv") return sv_upload_video_label(inputs)
	if (locale === "tr") return tr_upload_video_label(inputs)
	if (locale === "zh") return zh_upload_video_label(inputs)
	if (locale === "ja") return ja_upload_video_label(inputs)
	return en_upload_video_label(inputs)
});
