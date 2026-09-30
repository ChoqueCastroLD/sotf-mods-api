/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Gallery_RemovedInputs */

const en_upload_gallery_removed = /** @type {(inputs: Upload_Gallery_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image removed`)
};

const es_upload_gallery_removed = /** @type {(inputs: Upload_Gallery_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagen quitada`)
};

const de_upload_gallery_removed = /** @type {(inputs: Upload_Gallery_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bild entfernt`)
};

const fr_upload_gallery_removed = /** @type {(inputs: Upload_Gallery_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image retirée`)
};

const it_upload_gallery_removed = /** @type {(inputs: Upload_Gallery_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Immagine rimossa`)
};

const nl_upload_gallery_removed = /** @type {(inputs: Upload_Gallery_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeelding verwijderd`)
};

const pl_upload_gallery_removed = /** @type {(inputs: Upload_Gallery_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obraz usunięty`)
};

const pt_upload_gallery_removed = /** @type {(inputs: Upload_Gallery_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagem removida`)
};

const ru_upload_gallery_removed = /** @type {(inputs: Upload_Gallery_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изображение удалено`)
};

const sv_upload_gallery_removed = /** @type {(inputs: Upload_Gallery_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilden togs bort`)
};

const tr_upload_gallery_removed = /** @type {(inputs: Upload_Gallery_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görsel kaldırıldı`)
};

const zh_upload_gallery_removed = /** @type {(inputs: Upload_Gallery_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片已移除`)
};

const ja_upload_gallery_removed = /** @type {(inputs: Upload_Gallery_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像を削除しました`)
};

/**
* | output |
* | --- |
* | "Image removed" |
*
* @param {Upload_Gallery_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_gallery_removed = /** @type {((inputs?: Upload_Gallery_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_gallery_removed(inputs)
	if (locale === "de") return de_upload_gallery_removed(inputs)
	if (locale === "fr") return fr_upload_gallery_removed(inputs)
	if (locale === "it") return it_upload_gallery_removed(inputs)
	if (locale === "nl") return nl_upload_gallery_removed(inputs)
	if (locale === "pl") return pl_upload_gallery_removed(inputs)
	if (locale === "pt") return pt_upload_gallery_removed(inputs)
	if (locale === "ru") return ru_upload_gallery_removed(inputs)
	if (locale === "sv") return sv_upload_gallery_removed(inputs)
	if (locale === "tr") return tr_upload_gallery_removed(inputs)
	if (locale === "zh") return zh_upload_gallery_removed(inputs)
	if (locale === "ja") return ja_upload_gallery_removed(inputs)
	return en_upload_gallery_removed(inputs)
});
