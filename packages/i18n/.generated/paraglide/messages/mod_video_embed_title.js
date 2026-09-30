/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Video_Embed_TitleInputs */

const en_mod_video_embed_title = /** @type {(inputs: Mod_Video_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube video`)
};

const es_mod_video_embed_title = /** @type {(inputs: Mod_Video_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vídeo de YouTube`)
};

const de_mod_video_embed_title = /** @type {(inputs: Mod_Video_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube-Video`)
};

const fr_mod_video_embed_title = /** @type {(inputs: Mod_Video_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vidéo YouTube`)
};

const it_mod_video_embed_title = /** @type {(inputs: Mod_Video_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video di YouTube`)
};

const nl_mod_video_embed_title = /** @type {(inputs: Mod_Video_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube-video`)
};

const pl_mod_video_embed_title = /** @type {(inputs: Mod_Video_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Film w YouTube`)
};

const pt_mod_video_embed_title = /** @type {(inputs: Mod_Video_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vídeo do YouTube`)
};

const ru_mod_video_embed_title = /** @type {(inputs: Mod_Video_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Видео YouTube`)
};

const sv_mod_video_embed_title = /** @type {(inputs: Mod_Video_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube-video`)
};

const tr_mod_video_embed_title = /** @type {(inputs: Mod_Video_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube videosu`)
};

const zh_mod_video_embed_title = /** @type {(inputs: Mod_Video_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube 视频`)
};

const ja_mod_video_embed_title = /** @type {(inputs: Mod_Video_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube 動画`)
};

/**
* | output |
* | --- |
* | "YouTube video" |
*
* @param {Mod_Video_Embed_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_video_embed_title = /** @type {((inputs?: Mod_Video_Embed_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Video_Embed_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_video_embed_title(inputs)
	if (locale === "de") return de_mod_video_embed_title(inputs)
	if (locale === "fr") return fr_mod_video_embed_title(inputs)
	if (locale === "it") return it_mod_video_embed_title(inputs)
	if (locale === "nl") return nl_mod_video_embed_title(inputs)
	if (locale === "pl") return pl_mod_video_embed_title(inputs)
	if (locale === "pt") return pt_mod_video_embed_title(inputs)
	if (locale === "ru") return ru_mod_video_embed_title(inputs)
	if (locale === "sv") return sv_mod_video_embed_title(inputs)
	if (locale === "tr") return tr_mod_video_embed_title(inputs)
	if (locale === "zh") return zh_mod_video_embed_title(inputs)
	if (locale === "ja") return ja_mod_video_embed_title(inputs)
	return en_mod_video_embed_title(inputs)
});
