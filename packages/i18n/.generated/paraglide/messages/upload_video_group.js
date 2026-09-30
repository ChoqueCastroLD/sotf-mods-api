/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Video_GroupInputs */

const en_upload_video_group = /** @type {(inputs: Upload_Video_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video`)
};

const es_upload_video_group = /** @type {(inputs: Upload_Video_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vídeo`)
};

const de_upload_video_group = /** @type {(inputs: Upload_Video_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video`)
};

const fr_upload_video_group = /** @type {(inputs: Upload_Video_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vidéo`)
};

const it_upload_video_group = /** @type {(inputs: Upload_Video_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video`)
};

const nl_upload_video_group = /** @type {(inputs: Upload_Video_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video`)
};

const pl_upload_video_group = /** @type {(inputs: Upload_Video_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wideo`)
};

const pt_upload_video_group = /** @type {(inputs: Upload_Video_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vídeo`)
};

const ru_upload_video_group = /** @type {(inputs: Upload_Video_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Видео`)
};

const sv_upload_video_group = /** @type {(inputs: Upload_Video_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video`)
};

const tr_upload_video_group = /** @type {(inputs: Upload_Video_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video`)
};

const zh_upload_video_group = /** @type {(inputs: Upload_Video_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`视频`)
};

const ja_upload_video_group = /** @type {(inputs: Upload_Video_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動画`)
};

/**
* | output |
* | --- |
* | "Video" |
*
* @param {Upload_Video_GroupInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_video_group = /** @type {((inputs?: Upload_Video_GroupInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Video_GroupInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_video_group(inputs)
	if (locale === "de") return de_upload_video_group(inputs)
	if (locale === "fr") return fr_upload_video_group(inputs)
	if (locale === "it") return it_upload_video_group(inputs)
	if (locale === "nl") return nl_upload_video_group(inputs)
	if (locale === "pl") return pl_upload_video_group(inputs)
	if (locale === "pt") return pt_upload_video_group(inputs)
	if (locale === "ru") return ru_upload_video_group(inputs)
	if (locale === "sv") return sv_upload_video_group(inputs)
	if (locale === "tr") return tr_upload_video_group(inputs)
	if (locale === "zh") return zh_upload_video_group(inputs)
	if (locale === "ja") return ja_upload_video_group(inputs)
	return en_upload_video_group(inputs)
});
