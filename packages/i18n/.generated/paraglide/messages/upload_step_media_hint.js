/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Step_Media_HintInputs */

const en_upload_step_media_hint = /** @type {(inputs: Upload_Step_Media_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cover, gallery, video`)
};

const es_upload_step_media_hint = /** @type {(inputs: Upload_Step_Media_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Portada, galería, vídeo`)
};

const de_upload_step_media_hint = /** @type {(inputs: Upload_Step_Media_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titelbild, Galerie, Video`)
};

const fr_upload_step_media_hint = /** @type {(inputs: Upload_Step_Media_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couverture, galerie, vidéo`)
};

const it_upload_step_media_hint = /** @type {(inputs: Upload_Step_Media_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copertina, galleria, video`)
};

const nl_upload_step_media_hint = /** @type {(inputs: Upload_Step_Media_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag, galerij, video`)
};

const pl_upload_step_media_hint = /** @type {(inputs: Upload_Step_Media_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okładka, galeria, wideo`)
};

const pt_upload_step_media_hint = /** @type {(inputs: Upload_Step_Media_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Capa, galeria, vídeo`)
};

const ru_upload_step_media_hint = /** @type {(inputs: Upload_Step_Media_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обложка, галерея, видео`)
};

const sv_upload_step_media_hint = /** @type {(inputs: Upload_Step_Media_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag, galleri, video`)
};

const tr_upload_step_media_hint = /** @type {(inputs: Upload_Step_Media_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapak, galeri, video`)
};

const zh_upload_step_media_hint = /** @type {(inputs: Upload_Step_Media_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`封面、图库、视频`)
};

const ja_upload_step_media_hint = /** @type {(inputs: Upload_Step_Media_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバー、ギャラリー、動画`)
};

/**
* | output |
* | --- |
* | "Cover, gallery, video" |
*
* @param {Upload_Step_Media_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_step_media_hint = /** @type {((inputs?: Upload_Step_Media_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Step_Media_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_step_media_hint(inputs)
	if (locale === "de") return de_upload_step_media_hint(inputs)
	if (locale === "fr") return fr_upload_step_media_hint(inputs)
	if (locale === "it") return it_upload_step_media_hint(inputs)
	if (locale === "nl") return nl_upload_step_media_hint(inputs)
	if (locale === "pl") return pl_upload_step_media_hint(inputs)
	if (locale === "pt") return pt_upload_step_media_hint(inputs)
	if (locale === "ru") return ru_upload_step_media_hint(inputs)
	if (locale === "sv") return sv_upload_step_media_hint(inputs)
	if (locale === "tr") return tr_upload_step_media_hint(inputs)
	if (locale === "zh") return zh_upload_step_media_hint(inputs)
	if (locale === "ja") return ja_upload_step_media_hint(inputs)
	return en_upload_step_media_hint(inputs)
});
