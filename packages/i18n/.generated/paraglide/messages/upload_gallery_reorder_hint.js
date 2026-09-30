/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Gallery_Reorder_HintInputs */

const en_upload_gallery_reorder_hint = /** @type {(inputs: Upload_Gallery_Reorder_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drag the images, or use the arrows, to change the order.`)
};

const es_upload_gallery_reorder_hint = /** @type {(inputs: Upload_Gallery_Reorder_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arrastra las imágenes, o usa las flechas, para cambiar el orden.`)
};

const de_upload_gallery_reorder_hint = /** @type {(inputs: Upload_Gallery_Reorder_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zieh die Bilder oder nutze die Pfeile, um die Reihenfolge zu ändern.`)
};

const fr_upload_gallery_reorder_hint = /** @type {(inputs: Upload_Gallery_Reorder_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Glissez les images, ou utilisez les flèches, pour changer l’ordre.`)
};

const it_upload_gallery_reorder_hint = /** @type {(inputs: Upload_Gallery_Reorder_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascina le immagini, o usa le frecce, per cambiare l’ordine.`)
};

const nl_upload_gallery_reorder_hint = /** @type {(inputs: Upload_Gallery_Reorder_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sleep de afbeeldingen, of gebruik de pijlen, om de volgorde te wijzigen.`)
};

const pl_upload_gallery_reorder_hint = /** @type {(inputs: Upload_Gallery_Reorder_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeciągnij obrazy lub użyj strzałek, aby zmienić kolejność.`)
};

const pt_upload_gallery_reorder_hint = /** @type {(inputs: Upload_Gallery_Reorder_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arraste as imagens, ou use as setas, para mudar a ordem.`)
};

const ru_upload_gallery_reorder_hint = /** @type {(inputs: Upload_Gallery_Reorder_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перетаскивайте изображения или используйте стрелки, чтобы изменить порядок.`)
};

const sv_upload_gallery_reorder_hint = /** @type {(inputs: Upload_Gallery_Reorder_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dra bilderna, eller använd pilarna, för att ändra ordningen.`)
};

const tr_upload_gallery_reorder_hint = /** @type {(inputs: Upload_Gallery_Reorder_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırayı değiştirmek için görselleri sürükle ya da okları kullan.`)
};

const zh_upload_gallery_reorder_hint = /** @type {(inputs: Upload_Gallery_Reorder_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拖动图片或使用箭头调整顺序。`)
};

const ja_upload_gallery_reorder_hint = /** @type {(inputs: Upload_Gallery_Reorder_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像をドラッグするか矢印ボタンで順番を変えられます。`)
};

/**
* | output |
* | --- |
* | "Drag the images, or use the arrows, to change the order." |
*
* @param {Upload_Gallery_Reorder_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_gallery_reorder_hint = /** @type {((inputs?: Upload_Gallery_Reorder_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_Reorder_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_gallery_reorder_hint(inputs)
	if (locale === "de") return de_upload_gallery_reorder_hint(inputs)
	if (locale === "fr") return fr_upload_gallery_reorder_hint(inputs)
	if (locale === "it") return it_upload_gallery_reorder_hint(inputs)
	if (locale === "nl") return nl_upload_gallery_reorder_hint(inputs)
	if (locale === "pl") return pl_upload_gallery_reorder_hint(inputs)
	if (locale === "pt") return pt_upload_gallery_reorder_hint(inputs)
	if (locale === "ru") return ru_upload_gallery_reorder_hint(inputs)
	if (locale === "sv") return sv_upload_gallery_reorder_hint(inputs)
	if (locale === "tr") return tr_upload_gallery_reorder_hint(inputs)
	if (locale === "zh") return zh_upload_gallery_reorder_hint(inputs)
	if (locale === "ja") return ja_upload_gallery_reorder_hint(inputs)
	return en_upload_gallery_reorder_hint(inputs)
});
