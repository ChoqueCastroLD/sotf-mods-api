/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Cover_UploadInputs */

const en_kits_cover_upload = /** @type {(inputs: Kits_Cover_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload image`)
};

const es_kits_cover_upload = /** @type {(inputs: Kits_Cover_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subir imagen`)
};

const de_kits_cover_upload = /** @type {(inputs: Kits_Cover_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bild hochladen`)
};

const fr_kits_cover_upload = /** @type {(inputs: Kits_Cover_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléverser une image`)
};

const it_kits_cover_upload = /** @type {(inputs: Kits_Cover_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carica immagine`)
};

const nl_kits_cover_upload = /** @type {(inputs: Kits_Cover_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeelding uploaden`)
};

const pl_kits_cover_upload = /** @type {(inputs: Kits_Cover_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prześlij obraz`)
};

const pt_kits_cover_upload = /** @type {(inputs: Kits_Cover_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar imagem`)
};

const ru_kits_cover_upload = /** @type {(inputs: Kits_Cover_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузить изображение`)
};

const sv_kits_cover_upload = /** @type {(inputs: Kits_Cover_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda upp bild`)
};

const tr_kits_cover_upload = /** @type {(inputs: Kits_Cover_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görsel yükle`)
};

const zh_kits_cover_upload = /** @type {(inputs: Kits_Cover_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传图片`)
};

const ja_kits_cover_upload = /** @type {(inputs: Kits_Cover_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像をアップロード`)
};

/**
* | output |
* | --- |
* | "Upload image" |
*
* @param {Kits_Cover_UploadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_cover_upload = /** @type {((inputs?: Kits_Cover_UploadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Cover_UploadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_cover_upload(inputs)
	if (locale === "de") return de_kits_cover_upload(inputs)
	if (locale === "fr") return fr_kits_cover_upload(inputs)
	if (locale === "it") return it_kits_cover_upload(inputs)
	if (locale === "nl") return nl_kits_cover_upload(inputs)
	if (locale === "pl") return pl_kits_cover_upload(inputs)
	if (locale === "pt") return pt_kits_cover_upload(inputs)
	if (locale === "ru") return ru_kits_cover_upload(inputs)
	if (locale === "sv") return sv_kits_cover_upload(inputs)
	if (locale === "tr") return tr_kits_cover_upload(inputs)
	if (locale === "zh") return zh_kits_cover_upload(inputs)
	if (locale === "ja") return ja_kits_cover_upload(inputs)
	return en_kits_cover_upload(inputs)
});
