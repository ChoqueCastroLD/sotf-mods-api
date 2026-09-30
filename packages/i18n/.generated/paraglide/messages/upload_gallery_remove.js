/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ n: NonNullable<unknown> }} Upload_Gallery_RemoveInputs */

const en_upload_gallery_remove = /** @type {(inputs: Upload_Gallery_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove image ${i?.n}`)
};

const es_upload_gallery_remove = /** @type {(inputs: Upload_Gallery_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Quitar la imagen ${i?.n}`)
};

const de_upload_gallery_remove = /** @type {(inputs: Upload_Gallery_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bild ${i?.n} entfernen`)
};

const fr_upload_gallery_remove = /** @type {(inputs: Upload_Gallery_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer l’image ${i?.n}`)
};

const it_upload_gallery_remove = /** @type {(inputs: Upload_Gallery_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rimuovi l’immagine ${i?.n}`)
};

const nl_upload_gallery_remove = /** @type {(inputs: Upload_Gallery_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afbeelding ${i?.n} verwijderen`)
};

const pl_upload_gallery_remove = /** @type {(inputs: Upload_Gallery_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usuń obraz ${i?.n}`)
};

const pt_upload_gallery_remove = /** @type {(inputs: Upload_Gallery_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remover a imagem ${i?.n}`)
};

const ru_upload_gallery_remove = /** @type {(inputs: Upload_Gallery_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Удалить изображение ${i?.n}`)
};

const sv_upload_gallery_remove = /** @type {(inputs: Upload_Gallery_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort bild ${i?.n}`)
};

const tr_upload_gallery_remove = /** @type {(inputs: Upload_Gallery_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.n}. görseli kaldır`)
};

const zh_upload_gallery_remove = /** @type {(inputs: Upload_Gallery_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`移除图片 ${i?.n}`)
};

const ja_upload_gallery_remove = /** @type {(inputs: Upload_Gallery_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`画像 ${i?.n} を削除`)
};

/**
* | output |
* | --- |
* | "Remove image {n}" |
*
* @param {Upload_Gallery_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_gallery_remove = /** @type {((inputs: Upload_Gallery_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_gallery_remove(inputs)
	if (locale === "de") return de_upload_gallery_remove(inputs)
	if (locale === "fr") return fr_upload_gallery_remove(inputs)
	if (locale === "it") return it_upload_gallery_remove(inputs)
	if (locale === "nl") return nl_upload_gallery_remove(inputs)
	if (locale === "pl") return pl_upload_gallery_remove(inputs)
	if (locale === "pt") return pt_upload_gallery_remove(inputs)
	if (locale === "ru") return ru_upload_gallery_remove(inputs)
	if (locale === "sv") return sv_upload_gallery_remove(inputs)
	if (locale === "tr") return tr_upload_gallery_remove(inputs)
	if (locale === "zh") return zh_upload_gallery_remove(inputs)
	if (locale === "ja") return ja_upload_gallery_remove(inputs)
	return en_upload_gallery_remove(inputs)
});
