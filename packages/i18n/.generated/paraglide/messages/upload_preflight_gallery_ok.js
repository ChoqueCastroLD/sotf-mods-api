/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Gallery_OkInputs */

const en_upload_preflight_gallery_ok = /** @type {(inputs: Upload_Preflight_Gallery_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The gallery has 3 images or more.`)
};

const es_upload_preflight_gallery_ok = /** @type {(inputs: Upload_Preflight_Gallery_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La galería tiene 3 imágenes o más.`)
};

const de_upload_preflight_gallery_ok = /** @type {(inputs: Upload_Preflight_Gallery_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Galerie hat 3 oder mehr Bilder.`)
};

const fr_upload_preflight_gallery_ok = /** @type {(inputs: Upload_Preflight_Gallery_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La galerie a 3 images ou plus.`)
};

const it_upload_preflight_gallery_ok = /** @type {(inputs: Upload_Preflight_Gallery_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La galleria ha 3 o più immagini.`)
};

const nl_upload_preflight_gallery_ok = /** @type {(inputs: Upload_Preflight_Gallery_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De galerij heeft 3 of meer afbeeldingen.`)
};

const pl_upload_preflight_gallery_ok = /** @type {(inputs: Upload_Preflight_Gallery_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galeria ma co najmniej 3 obrazy.`)
};

const pt_upload_preflight_gallery_ok = /** @type {(inputs: Upload_Preflight_Gallery_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A galeria tem 3 imagens ou mais.`)
};

const ru_upload_preflight_gallery_ok = /** @type {(inputs: Upload_Preflight_Gallery_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В галерее 3 изображения или больше.`)
};

const sv_upload_preflight_gallery_ok = /** @type {(inputs: Upload_Preflight_Gallery_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galleriet har 3 eller fler bilder.`)
};

const tr_upload_preflight_gallery_ok = /** @type {(inputs: Upload_Preflight_Gallery_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galeride 3 veya daha fazla görsel var.`)
};

const zh_upload_preflight_gallery_ok = /** @type {(inputs: Upload_Preflight_Gallery_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图库有 3 张以上图片。`)
};

const ja_upload_preflight_gallery_ok = /** @type {(inputs: Upload_Preflight_Gallery_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ギャラリーに画像が3枚以上あります。`)
};

/**
* | output |
* | --- |
* | "The gallery has 3 images or more." |
*
* @param {Upload_Preflight_Gallery_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_gallery_ok = /** @type {((inputs?: Upload_Preflight_Gallery_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Gallery_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_gallery_ok(inputs)
	if (locale === "de") return de_upload_preflight_gallery_ok(inputs)
	if (locale === "fr") return fr_upload_preflight_gallery_ok(inputs)
	if (locale === "it") return it_upload_preflight_gallery_ok(inputs)
	if (locale === "nl") return nl_upload_preflight_gallery_ok(inputs)
	if (locale === "pl") return pl_upload_preflight_gallery_ok(inputs)
	if (locale === "pt") return pt_upload_preflight_gallery_ok(inputs)
	if (locale === "ru") return ru_upload_preflight_gallery_ok(inputs)
	if (locale === "sv") return sv_upload_preflight_gallery_ok(inputs)
	if (locale === "tr") return tr_upload_preflight_gallery_ok(inputs)
	if (locale === "zh") return zh_upload_preflight_gallery_ok(inputs)
	if (locale === "ja") return ja_upload_preflight_gallery_ok(inputs)
	return en_upload_preflight_gallery_ok(inputs)
});
