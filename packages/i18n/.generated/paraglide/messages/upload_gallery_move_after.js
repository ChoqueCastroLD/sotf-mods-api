/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ n: NonNullable<unknown> }} Upload_Gallery_Move_AfterInputs */

const en_upload_gallery_move_after = /** @type {(inputs: Upload_Gallery_Move_AfterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Move image ${i?.n} later`)
};

const es_upload_gallery_move_after = /** @type {(inputs: Upload_Gallery_Move_AfterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mover la imagen ${i?.n} después`)
};

const de_upload_gallery_move_after = /** @type {(inputs: Upload_Gallery_Move_AfterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bild ${i?.n} nach hinten`)
};

const fr_upload_gallery_move_after = /** @type {(inputs: Upload_Gallery_Move_AfterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reculer l’image ${i?.n}`)
};

const it_upload_gallery_move_after = /** @type {(inputs: Upload_Gallery_Move_AfterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sposta dopo l’immagine ${i?.n}`)
};

const nl_upload_gallery_move_after = /** @type {(inputs: Upload_Gallery_Move_AfterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afbeelding ${i?.n} naar achteren`)
};

const pl_upload_gallery_move_after = /** @type {(inputs: Upload_Gallery_Move_AfterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przesuń obraz ${i?.n} później`)
};

const pt_upload_gallery_move_after = /** @type {(inputs: Upload_Gallery_Move_AfterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mover a imagem ${i?.n} para depois`)
};

const ru_upload_gallery_move_after = /** @type {(inputs: Upload_Gallery_Move_AfterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Переместить изображение ${i?.n} позже`)
};

const sv_upload_gallery_move_after = /** @type {(inputs: Upload_Gallery_Move_AfterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Flytta bild ${i?.n} senare`)
};

const tr_upload_gallery_move_after = /** @type {(inputs: Upload_Gallery_Move_AfterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.n}. görseli geriye al`)
};

const zh_upload_gallery_move_after = /** @type {(inputs: Upload_Gallery_Move_AfterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`将图片 ${i?.n} 后移`)
};

const ja_upload_gallery_move_after = /** @type {(inputs: Upload_Gallery_Move_AfterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`画像 ${i?.n} を後ろへ`)
};

/**
* | output |
* | --- |
* | "Move image {n} later" |
*
* @param {Upload_Gallery_Move_AfterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_gallery_move_after = /** @type {((inputs: Upload_Gallery_Move_AfterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_Move_AfterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_gallery_move_after(inputs)
	if (locale === "de") return de_upload_gallery_move_after(inputs)
	if (locale === "fr") return fr_upload_gallery_move_after(inputs)
	if (locale === "it") return it_upload_gallery_move_after(inputs)
	if (locale === "nl") return nl_upload_gallery_move_after(inputs)
	if (locale === "pl") return pl_upload_gallery_move_after(inputs)
	if (locale === "pt") return pt_upload_gallery_move_after(inputs)
	if (locale === "ru") return ru_upload_gallery_move_after(inputs)
	if (locale === "sv") return sv_upload_gallery_move_after(inputs)
	if (locale === "tr") return tr_upload_gallery_move_after(inputs)
	if (locale === "zh") return zh_upload_gallery_move_after(inputs)
	if (locale === "ja") return ja_upload_gallery_move_after(inputs)
	return en_upload_gallery_move_after(inputs)
});
