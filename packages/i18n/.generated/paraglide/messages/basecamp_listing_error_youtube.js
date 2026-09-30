/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Error_YoutubeInputs */

const en_basecamp_listing_error_youtube = /** @type {(inputs: Basecamp_Listing_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter the link of a YouTube video.`)
};

const es_basecamp_listing_error_youtube = /** @type {(inputs: Basecamp_Listing_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe el enlace de un vídeo de YouTube.`)
};

const de_basecamp_listing_error_youtube = /** @type {(inputs: Basecamp_Listing_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib den Link zu einem YouTube-Video ein.`)
};

const fr_basecamp_listing_error_youtube = /** @type {(inputs: Basecamp_Listing_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez le lien d’une vidéo YouTube.`)
};

const it_basecamp_listing_error_youtube = /** @type {(inputs: Basecamp_Listing_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserisci il link di un video di YouTube.`)
};

const nl_basecamp_listing_error_youtube = /** @type {(inputs: Basecamp_Listing_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voer de link van een YouTube-video in.`)
};

const pl_basecamp_listing_error_youtube = /** @type {(inputs: Basecamp_Listing_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wpisz link do filmu z YouTube.`)
};

const pt_basecamp_listing_error_youtube = /** @type {(inputs: Basecamp_Listing_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Digite o link de um vídeo do YouTube.`)
};

const ru_basecamp_listing_error_youtube = /** @type {(inputs: Basecamp_Listing_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Введите ссылку на видео YouTube.`)
};

const sv_basecamp_listing_error_youtube = /** @type {(inputs: Basecamp_Listing_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange länken till en YouTube-video.`)
};

const tr_basecamp_listing_error_youtube = /** @type {(inputs: Basecamp_Listing_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir YouTube videosunun bağlantısını gir.`)
};

const zh_basecamp_listing_error_youtube = /** @type {(inputs: Basecamp_Listing_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入 YouTube 视频链接。`)
};

const ja_basecamp_listing_error_youtube = /** @type {(inputs: Basecamp_Listing_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube 動画のリンクを入力してください。`)
};

/**
* | output |
* | --- |
* | "Enter the link of a YouTube video." |
*
* @param {Basecamp_Listing_Error_YoutubeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_error_youtube = /** @type {((inputs?: Basecamp_Listing_Error_YoutubeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Error_YoutubeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_error_youtube(inputs)
	if (locale === "de") return de_basecamp_listing_error_youtube(inputs)
	if (locale === "fr") return fr_basecamp_listing_error_youtube(inputs)
	if (locale === "it") return it_basecamp_listing_error_youtube(inputs)
	if (locale === "nl") return nl_basecamp_listing_error_youtube(inputs)
	if (locale === "pl") return pl_basecamp_listing_error_youtube(inputs)
	if (locale === "pt") return pt_basecamp_listing_error_youtube(inputs)
	if (locale === "ru") return ru_basecamp_listing_error_youtube(inputs)
	if (locale === "sv") return sv_basecamp_listing_error_youtube(inputs)
	if (locale === "tr") return tr_basecamp_listing_error_youtube(inputs)
	if (locale === "zh") return zh_basecamp_listing_error_youtube(inputs)
	if (locale === "ja") return ja_basecamp_listing_error_youtube(inputs)
	return en_basecamp_listing_error_youtube(inputs)
});
