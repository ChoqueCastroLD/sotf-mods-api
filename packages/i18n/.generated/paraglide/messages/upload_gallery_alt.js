/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ n: NonNullable<unknown> }} Upload_Gallery_AltInputs */

const en_upload_gallery_alt = /** @type {(inputs: Upload_Gallery_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Description of image ${i?.n}`)
};

const es_upload_gallery_alt = /** @type {(inputs: Upload_Gallery_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descripción de la imagen ${i?.n}`)
};

const de_upload_gallery_alt = /** @type {(inputs: Upload_Gallery_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beschreibung von Bild ${i?.n}`)
};

const fr_upload_gallery_alt = /** @type {(inputs: Upload_Gallery_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Description de l’image ${i?.n}`)
};

const it_upload_gallery_alt = /** @type {(inputs: Upload_Gallery_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descrizione dell’immagine ${i?.n}`)
};

const nl_upload_gallery_alt = /** @type {(inputs: Upload_Gallery_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beschrijving van afbeelding ${i?.n}`)
};

const pl_upload_gallery_alt = /** @type {(inputs: Upload_Gallery_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Opis obrazu ${i?.n}`)
};

const pt_upload_gallery_alt = /** @type {(inputs: Upload_Gallery_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descrição da imagem ${i?.n}`)
};

const ru_upload_gallery_alt = /** @type {(inputs: Upload_Gallery_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Описание изображения ${i?.n}`)
};

const sv_upload_gallery_alt = /** @type {(inputs: Upload_Gallery_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beskrivning av bild ${i?.n}`)
};

const tr_upload_gallery_alt = /** @type {(inputs: Upload_Gallery_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.n}. görselin açıklaması`)
};

const zh_upload_gallery_alt = /** @type {(inputs: Upload_Gallery_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`图片 ${i?.n} 的描述`)
};

const ja_upload_gallery_alt = /** @type {(inputs: Upload_Gallery_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`画像 ${i?.n} の説明`)
};

/**
* | output |
* | --- |
* | "Description of image {n}" |
*
* @param {Upload_Gallery_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_gallery_alt = /** @type {((inputs: Upload_Gallery_AltInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_AltInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_gallery_alt(inputs)
	if (locale === "de") return de_upload_gallery_alt(inputs)
	if (locale === "fr") return fr_upload_gallery_alt(inputs)
	if (locale === "it") return it_upload_gallery_alt(inputs)
	if (locale === "nl") return nl_upload_gallery_alt(inputs)
	if (locale === "pl") return pl_upload_gallery_alt(inputs)
	if (locale === "pt") return pt_upload_gallery_alt(inputs)
	if (locale === "ru") return ru_upload_gallery_alt(inputs)
	if (locale === "sv") return sv_upload_gallery_alt(inputs)
	if (locale === "tr") return tr_upload_gallery_alt(inputs)
	if (locale === "zh") return zh_upload_gallery_alt(inputs)
	if (locale === "ja") return ja_upload_gallery_alt(inputs)
	return en_upload_gallery_alt(inputs)
});
