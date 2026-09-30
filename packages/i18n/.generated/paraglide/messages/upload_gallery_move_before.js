/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ n: NonNullable<unknown> }} Upload_Gallery_Move_BeforeInputs */

const en_upload_gallery_move_before = /** @type {(inputs: Upload_Gallery_Move_BeforeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Move image ${i?.n} earlier`)
};

const es_upload_gallery_move_before = /** @type {(inputs: Upload_Gallery_Move_BeforeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mover la imagen ${i?.n} antes`)
};

const de_upload_gallery_move_before = /** @type {(inputs: Upload_Gallery_Move_BeforeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bild ${i?.n} nach vorne`)
};

const fr_upload_gallery_move_before = /** @type {(inputs: Upload_Gallery_Move_BeforeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avancer l’image ${i?.n}`)
};

const it_upload_gallery_move_before = /** @type {(inputs: Upload_Gallery_Move_BeforeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sposta prima l’immagine ${i?.n}`)
};

const nl_upload_gallery_move_before = /** @type {(inputs: Upload_Gallery_Move_BeforeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afbeelding ${i?.n} naar voren`)
};

const pl_upload_gallery_move_before = /** @type {(inputs: Upload_Gallery_Move_BeforeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przesuń obraz ${i?.n} wcześniej`)
};

const pt_upload_gallery_move_before = /** @type {(inputs: Upload_Gallery_Move_BeforeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mover a imagem ${i?.n} para antes`)
};

const ru_upload_gallery_move_before = /** @type {(inputs: Upload_Gallery_Move_BeforeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Переместить изображение ${i?.n} раньше`)
};

const sv_upload_gallery_move_before = /** @type {(inputs: Upload_Gallery_Move_BeforeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Flytta bild ${i?.n} tidigare`)
};

const tr_upload_gallery_move_before = /** @type {(inputs: Upload_Gallery_Move_BeforeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.n}. görseli öne al`)
};

const zh_upload_gallery_move_before = /** @type {(inputs: Upload_Gallery_Move_BeforeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`将图片 ${i?.n} 前移`)
};

const ja_upload_gallery_move_before = /** @type {(inputs: Upload_Gallery_Move_BeforeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`画像 ${i?.n} を前へ`)
};

/**
* | output |
* | --- |
* | "Move image {n} earlier" |
*
* @param {Upload_Gallery_Move_BeforeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_gallery_move_before = /** @type {((inputs: Upload_Gallery_Move_BeforeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_Move_BeforeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_gallery_move_before(inputs)
	if (locale === "de") return de_upload_gallery_move_before(inputs)
	if (locale === "fr") return fr_upload_gallery_move_before(inputs)
	if (locale === "it") return it_upload_gallery_move_before(inputs)
	if (locale === "nl") return nl_upload_gallery_move_before(inputs)
	if (locale === "pl") return pl_upload_gallery_move_before(inputs)
	if (locale === "pt") return pt_upload_gallery_move_before(inputs)
	if (locale === "ru") return ru_upload_gallery_move_before(inputs)
	if (locale === "sv") return sv_upload_gallery_move_before(inputs)
	if (locale === "tr") return tr_upload_gallery_move_before(inputs)
	if (locale === "zh") return zh_upload_gallery_move_before(inputs)
	if (locale === "ja") return ja_upload_gallery_move_before(inputs)
	return en_upload_gallery_move_before(inputs)
});
