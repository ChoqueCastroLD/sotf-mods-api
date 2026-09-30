/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Gallery_Below_3Inputs */

const en_upload_preflight_gallery_below_3 = /** @type {(inputs: Upload_Preflight_Gallery_Below_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fewer than 3 gallery images.`)
};

const es_upload_preflight_gallery_below_3 = /** @type {(inputs: Upload_Preflight_Gallery_Below_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menos de 3 imágenes en la galería.`)
};

const de_upload_preflight_gallery_below_3 = /** @type {(inputs: Upload_Preflight_Gallery_Below_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weniger als 3 Galeriebilder.`)
};

const fr_upload_preflight_gallery_below_3 = /** @type {(inputs: Upload_Preflight_Gallery_Below_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moins de 3 images dans la galerie.`)
};

const it_upload_preflight_gallery_below_3 = /** @type {(inputs: Upload_Preflight_Gallery_Below_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meno di 3 immagini nella galleria.`)
};

const nl_upload_preflight_gallery_below_3 = /** @type {(inputs: Upload_Preflight_Gallery_Below_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minder dan 3 afbeeldingen in de galerij.`)
};

const pl_upload_preflight_gallery_below_3 = /** @type {(inputs: Upload_Preflight_Gallery_Below_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mniej niż 3 obrazy w galerii.`)
};

const pt_upload_preflight_gallery_below_3 = /** @type {(inputs: Upload_Preflight_Gallery_Below_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menos de 3 imagens na galeria.`)
};

const ru_upload_preflight_gallery_below_3 = /** @type {(inputs: Upload_Preflight_Gallery_Below_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В галерее меньше 3 изображений.`)
};

const sv_upload_preflight_gallery_below_3 = /** @type {(inputs: Upload_Preflight_Gallery_Below_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Färre än 3 bilder i galleriet.`)
};

const tr_upload_preflight_gallery_below_3 = /** @type {(inputs: Upload_Preflight_Gallery_Below_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galeride 3’ten az görsel var.`)
};

const zh_upload_preflight_gallery_below_3 = /** @type {(inputs: Upload_Preflight_Gallery_Below_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图库图片少于 3 张。`)
};

const ja_upload_preflight_gallery_below_3 = /** @type {(inputs: Upload_Preflight_Gallery_Below_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ギャラリーの画像が3枚未満です。`)
};

/**
* | output |
* | --- |
* | "Fewer than 3 gallery images." |
*
* @param {Upload_Preflight_Gallery_Below_3Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_gallery_below_3 = /** @type {((inputs?: Upload_Preflight_Gallery_Below_3Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Gallery_Below_3Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_gallery_below_3(inputs)
	if (locale === "de") return de_upload_preflight_gallery_below_3(inputs)
	if (locale === "fr") return fr_upload_preflight_gallery_below_3(inputs)
	if (locale === "it") return it_upload_preflight_gallery_below_3(inputs)
	if (locale === "nl") return nl_upload_preflight_gallery_below_3(inputs)
	if (locale === "pl") return pl_upload_preflight_gallery_below_3(inputs)
	if (locale === "pt") return pt_upload_preflight_gallery_below_3(inputs)
	if (locale === "ru") return ru_upload_preflight_gallery_below_3(inputs)
	if (locale === "sv") return sv_upload_preflight_gallery_below_3(inputs)
	if (locale === "tr") return tr_upload_preflight_gallery_below_3(inputs)
	if (locale === "zh") return zh_upload_preflight_gallery_below_3(inputs)
	if (locale === "ja") return ja_upload_preflight_gallery_below_3(inputs)
	return en_upload_preflight_gallery_below_3(inputs)
});
