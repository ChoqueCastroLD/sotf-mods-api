/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Error_YoutubeInputs */

const en_upload_error_youtube = /** @type {(inputs: Upload_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paste a YouTube video link (youtube.com/watch, youtu.be or shorts).`)
};

const es_upload_error_youtube = /** @type {(inputs: Upload_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pega un enlace a un vídeo de YouTube (youtube.com/watch, youtu.be o shorts).`)
};

const de_upload_error_youtube = /** @type {(inputs: Upload_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Füge einen YouTube-Videolink ein (youtube.com/watch, youtu.be oder Shorts).`)
};

const fr_upload_error_youtube = /** @type {(inputs: Upload_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collez un lien de vidéo YouTube (youtube.com/watch, youtu.be ou shorts).`)
};

const it_upload_error_youtube = /** @type {(inputs: Upload_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incolla il link di un video YouTube (youtube.com/watch, youtu.be o shorts).`)
};

const nl_upload_error_youtube = /** @type {(inputs: Upload_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plak een link naar een YouTube-video (youtube.com/watch, youtu.be of shorts).`)
};

const pl_upload_error_youtube = /** @type {(inputs: Upload_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wklej link do filmu na YouTube (youtube.com/watch, youtu.be lub shorts).`)
};

const pt_upload_error_youtube = /** @type {(inputs: Upload_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cole um link de vídeo do YouTube (youtube.com/watch, youtu.be ou shorts).`)
};

const ru_upload_error_youtube = /** @type {(inputs: Upload_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вставьте ссылку на видео YouTube (youtube.com/watch, youtu.be или shorts).`)
};

const sv_upload_error_youtube = /** @type {(inputs: Upload_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klistra in en länk till en YouTube-video (youtube.com/watch, youtu.be eller shorts).`)
};

const tr_upload_error_youtube = /** @type {(inputs: Upload_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir YouTube video bağlantısı yapıştır (youtube.com/watch, youtu.be ya da shorts).`)
};

const zh_upload_error_youtube = /** @type {(inputs: Upload_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请粘贴 YouTube 视频链接（youtube.com/watch、youtu.be 或 shorts）。`)
};

const ja_upload_error_youtube = /** @type {(inputs: Upload_Error_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube動画のリンクを貼り付けてください（youtube.com/watch、youtu.be、shorts）。`)
};

/**
* | output |
* | --- |
* | "Paste a YouTube video link (youtube.com/watch, youtu.be or shorts)." |
*
* @param {Upload_Error_YoutubeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_error_youtube = /** @type {((inputs?: Upload_Error_YoutubeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Error_YoutubeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_error_youtube(inputs)
	if (locale === "de") return de_upload_error_youtube(inputs)
	if (locale === "fr") return fr_upload_error_youtube(inputs)
	if (locale === "it") return it_upload_error_youtube(inputs)
	if (locale === "nl") return nl_upload_error_youtube(inputs)
	if (locale === "pl") return pl_upload_error_youtube(inputs)
	if (locale === "pt") return pt_upload_error_youtube(inputs)
	if (locale === "ru") return ru_upload_error_youtube(inputs)
	if (locale === "sv") return sv_upload_error_youtube(inputs)
	if (locale === "tr") return tr_upload_error_youtube(inputs)
	if (locale === "zh") return zh_upload_error_youtube(inputs)
	if (locale === "ja") return ja_upload_error_youtube(inputs)
	return en_upload_error_youtube(inputs)
});
