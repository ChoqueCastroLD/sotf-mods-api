/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Gallery_VideoInputs */

const en_ui_domain_gallery_video = /** @type {(inputs: Ui_Domain_Gallery_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video`)
};

const es_ui_domain_gallery_video = /** @type {(inputs: Ui_Domain_Gallery_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vídeo`)
};

const de_ui_domain_gallery_video = /** @type {(inputs: Ui_Domain_Gallery_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video`)
};

const fr_ui_domain_gallery_video = /** @type {(inputs: Ui_Domain_Gallery_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vidéo`)
};

const it_ui_domain_gallery_video = /** @type {(inputs: Ui_Domain_Gallery_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video`)
};

const nl_ui_domain_gallery_video = /** @type {(inputs: Ui_Domain_Gallery_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video`)
};

const pl_ui_domain_gallery_video = /** @type {(inputs: Ui_Domain_Gallery_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wideo`)
};

const pt_ui_domain_gallery_video = /** @type {(inputs: Ui_Domain_Gallery_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vídeo`)
};

const ru_ui_domain_gallery_video = /** @type {(inputs: Ui_Domain_Gallery_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Видео`)
};

const sv_ui_domain_gallery_video = /** @type {(inputs: Ui_Domain_Gallery_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video`)
};

const tr_ui_domain_gallery_video = /** @type {(inputs: Ui_Domain_Gallery_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video`)
};

const zh_ui_domain_gallery_video = /** @type {(inputs: Ui_Domain_Gallery_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`视频`)
};

const ja_ui_domain_gallery_video = /** @type {(inputs: Ui_Domain_Gallery_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動画`)
};

/**
* | output |
* | --- |
* | "Video" |
*
* @param {Ui_Domain_Gallery_VideoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_gallery_video = /** @type {((inputs?: Ui_Domain_Gallery_VideoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Gallery_VideoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_gallery_video(inputs)
	if (locale === "de") return de_ui_domain_gallery_video(inputs)
	if (locale === "fr") return fr_ui_domain_gallery_video(inputs)
	if (locale === "it") return it_ui_domain_gallery_video(inputs)
	if (locale === "nl") return nl_ui_domain_gallery_video(inputs)
	if (locale === "pl") return pl_ui_domain_gallery_video(inputs)
	if (locale === "pt") return pt_ui_domain_gallery_video(inputs)
	if (locale === "ru") return ru_ui_domain_gallery_video(inputs)
	if (locale === "sv") return sv_ui_domain_gallery_video(inputs)
	if (locale === "tr") return tr_ui_domain_gallery_video(inputs)
	if (locale === "zh") return zh_ui_domain_gallery_video(inputs)
	if (locale === "ja") return ja_ui_domain_gallery_video(inputs)
	return en_ui_domain_gallery_video(inputs)
});
