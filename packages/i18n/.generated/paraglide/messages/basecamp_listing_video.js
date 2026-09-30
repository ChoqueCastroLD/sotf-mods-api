/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_VideoInputs */

const en_basecamp_listing_video = /** @type {(inputs: Basecamp_Listing_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube video`)
};

const es_basecamp_listing_video = /** @type {(inputs: Basecamp_Listing_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vídeo de YouTube`)
};

const de_basecamp_listing_video = /** @type {(inputs: Basecamp_Listing_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube-Video`)
};

const fr_basecamp_listing_video = /** @type {(inputs: Basecamp_Listing_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vidéo YouTube`)
};

const it_basecamp_listing_video = /** @type {(inputs: Basecamp_Listing_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video di YouTube`)
};

const nl_basecamp_listing_video = /** @type {(inputs: Basecamp_Listing_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube-video`)
};

const pl_basecamp_listing_video = /** @type {(inputs: Basecamp_Listing_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Film z YouTube`)
};

const pt_basecamp_listing_video = /** @type {(inputs: Basecamp_Listing_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vídeo do YouTube`)
};

const ru_basecamp_listing_video = /** @type {(inputs: Basecamp_Listing_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Видео на YouTube`)
};

const sv_basecamp_listing_video = /** @type {(inputs: Basecamp_Listing_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube-video`)
};

const tr_basecamp_listing_video = /** @type {(inputs: Basecamp_Listing_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube videosu`)
};

const zh_basecamp_listing_video = /** @type {(inputs: Basecamp_Listing_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube 视频`)
};

const ja_basecamp_listing_video = /** @type {(inputs: Basecamp_Listing_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube 動画`)
};

/**
* | output |
* | --- |
* | "YouTube video" |
*
* @param {Basecamp_Listing_VideoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_video = /** @type {((inputs?: Basecamp_Listing_VideoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_VideoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_video(inputs)
	if (locale === "de") return de_basecamp_listing_video(inputs)
	if (locale === "fr") return fr_basecamp_listing_video(inputs)
	if (locale === "it") return it_basecamp_listing_video(inputs)
	if (locale === "nl") return nl_basecamp_listing_video(inputs)
	if (locale === "pl") return pl_basecamp_listing_video(inputs)
	if (locale === "pt") return pt_basecamp_listing_video(inputs)
	if (locale === "ru") return ru_basecamp_listing_video(inputs)
	if (locale === "sv") return sv_basecamp_listing_video(inputs)
	if (locale === "tr") return tr_basecamp_listing_video(inputs)
	if (locale === "zh") return zh_basecamp_listing_video(inputs)
	if (locale === "ja") return ja_basecamp_listing_video(inputs)
	return en_basecamp_listing_video(inputs)
});
