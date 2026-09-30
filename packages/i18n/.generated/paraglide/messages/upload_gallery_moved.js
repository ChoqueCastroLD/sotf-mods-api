/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ position: NonNullable<unknown>, total: NonNullable<unknown> }} Upload_Gallery_MovedInputs */

const en_upload_gallery_moved = /** @type {(inputs: Upload_Gallery_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Image moved to position ${i?.position} of ${i?.total}`)
};

const es_upload_gallery_moved = /** @type {(inputs: Upload_Gallery_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Imagen movida a la posición ${i?.position} de ${i?.total}`)
};

const de_upload_gallery_moved = /** @type {(inputs: Upload_Gallery_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bild auf Position ${i?.position} von ${i?.total} verschoben`)
};

const fr_upload_gallery_moved = /** @type {(inputs: Upload_Gallery_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Image déplacée en position ${i?.position} sur ${i?.total}`)
};

const it_upload_gallery_moved = /** @type {(inputs: Upload_Gallery_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Immagine spostata in posizione ${i?.position} di ${i?.total}`)
};

const nl_upload_gallery_moved = /** @type {(inputs: Upload_Gallery_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afbeelding verplaatst naar positie ${i?.position} van ${i?.total}`)
};

const pl_upload_gallery_moved = /** @type {(inputs: Upload_Gallery_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Obraz przeniesiony na pozycję ${i?.position} z ${i?.total}`)
};

const pt_upload_gallery_moved = /** @type {(inputs: Upload_Gallery_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Imagem movida para a posição ${i?.position} de ${i?.total}`)
};

const ru_upload_gallery_moved = /** @type {(inputs: Upload_Gallery_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Изображение перемещено на позицию ${i?.position} из ${i?.total}`)
};

const sv_upload_gallery_moved = /** @type {(inputs: Upload_Gallery_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bilden flyttades till plats ${i?.position} av ${i?.total}`)
};

const tr_upload_gallery_moved = /** @type {(inputs: Upload_Gallery_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Görsel ${i?.total} içinde ${i?.position}. sıraya taşındı`)
};

const zh_upload_gallery_moved = /** @type {(inputs: Upload_Gallery_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`图片已移到第 ${i?.position} 位（共 ${i?.total} 张）`)
};

const ja_upload_gallery_moved = /** @type {(inputs: Upload_Gallery_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`画像を ${i?.total} 枚中 ${i?.position} 番目に移動しました`)
};

/**
* | output |
* | --- |
* | "Image moved to position {position} of {total}" |
*
* @param {Upload_Gallery_MovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_gallery_moved = /** @type {((inputs: Upload_Gallery_MovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_MovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_gallery_moved(inputs)
	if (locale === "de") return de_upload_gallery_moved(inputs)
	if (locale === "fr") return fr_upload_gallery_moved(inputs)
	if (locale === "it") return it_upload_gallery_moved(inputs)
	if (locale === "nl") return nl_upload_gallery_moved(inputs)
	if (locale === "pl") return pl_upload_gallery_moved(inputs)
	if (locale === "pt") return pt_upload_gallery_moved(inputs)
	if (locale === "ru") return ru_upload_gallery_moved(inputs)
	if (locale === "sv") return sv_upload_gallery_moved(inputs)
	if (locale === "tr") return tr_upload_gallery_moved(inputs)
	if (locale === "zh") return zh_upload_gallery_moved(inputs)
	if (locale === "ja") return ja_upload_gallery_moved(inputs)
	return en_upload_gallery_moved(inputs)
});
