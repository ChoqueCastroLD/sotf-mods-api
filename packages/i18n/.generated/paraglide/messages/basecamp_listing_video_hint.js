/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Video_HintInputs */

const en_basecamp_listing_video_hint = /** @type {(inputs: Basecamp_Listing_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A link to a video on YouTube, shown after the gallery.`)
};

const es_basecamp_listing_video_hint = /** @type {(inputs: Basecamp_Listing_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlace a un vídeo de YouTube que se muestra después de la galería.`)
};

const de_basecamp_listing_video_hint = /** @type {(inputs: Basecamp_Listing_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link zu einem YouTube-Video, das nach der Galerie gezeigt wird.`)
};

const fr_basecamp_listing_video_hint = /** @type {(inputs: Basecamp_Listing_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lien vers une vidéo YouTube affichée après la galerie.`)
};

const it_basecamp_listing_video_hint = /** @type {(inputs: Basecamp_Listing_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link a un video di YouTube mostrato dopo la galleria.`)
};

const nl_basecamp_listing_video_hint = /** @type {(inputs: Basecamp_Listing_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link naar een YouTube-video die na de galerij wordt getoond.`)
};

const pl_basecamp_listing_video_hint = /** @type {(inputs: Basecamp_Listing_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link do filmu z YouTube pokazywanego po galerii.`)
};

const pt_basecamp_listing_video_hint = /** @type {(inputs: Basecamp_Listing_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link para um vídeo do YouTube exibido depois da galeria.`)
};

const ru_basecamp_listing_video_hint = /** @type {(inputs: Basecamp_Listing_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылка на видео YouTube, которое показывается после галереи.`)
};

const sv_basecamp_listing_video_hint = /** @type {(inputs: Basecamp_Listing_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länk till en YouTube-video som visas efter galleriet.`)
};

const tr_basecamp_listing_video_hint = /** @type {(inputs: Basecamp_Listing_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galeriden sonra gösterilen bir YouTube videosunun bağlantısı.`)
};

const zh_basecamp_listing_video_hint = /** @type {(inputs: Basecamp_Listing_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示在图库之后的 YouTube 视频链接。`)
};

const ja_basecamp_listing_video_hint = /** @type {(inputs: Basecamp_Listing_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ギャラリーのあとに表示される YouTube 動画へのリンク。`)
};

/**
* | output |
* | --- |
* | "A link to a video on YouTube, shown after the gallery." |
*
* @param {Basecamp_Listing_Video_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_video_hint = /** @type {((inputs?: Basecamp_Listing_Video_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Video_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_video_hint(inputs)
	if (locale === "de") return de_basecamp_listing_video_hint(inputs)
	if (locale === "fr") return fr_basecamp_listing_video_hint(inputs)
	if (locale === "it") return it_basecamp_listing_video_hint(inputs)
	if (locale === "nl") return nl_basecamp_listing_video_hint(inputs)
	if (locale === "pl") return pl_basecamp_listing_video_hint(inputs)
	if (locale === "pt") return pt_basecamp_listing_video_hint(inputs)
	if (locale === "ru") return ru_basecamp_listing_video_hint(inputs)
	if (locale === "sv") return sv_basecamp_listing_video_hint(inputs)
	if (locale === "tr") return tr_basecamp_listing_video_hint(inputs)
	if (locale === "zh") return zh_basecamp_listing_video_hint(inputs)
	if (locale === "ja") return ja_basecamp_listing_video_hint(inputs)
	return en_basecamp_listing_video_hint(inputs)
});
