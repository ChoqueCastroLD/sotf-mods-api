/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Kits_Cover_Error_SizeInputs */

const en_kits_cover_error_size = /** @type {(inputs: Kits_Cover_Error_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The image is larger than ${i?.max} MB.`)
};

const es_kits_cover_error_size = /** @type {(inputs: Kits_Cover_Error_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La imagen supera los ${i?.max} MB.`)
};

const de_kits_cover_error_size = /** @type {(inputs: Kits_Cover_Error_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Das Bild ist größer als ${i?.max} MB.`)
};

const fr_kits_cover_error_size = /** @type {(inputs: Kits_Cover_Error_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`L’image dépasse ${i?.max} Mo.`)
};

const it_kits_cover_error_size = /** @type {(inputs: Kits_Cover_Error_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`L’immagine supera i ${i?.max} MB.`)
};

const nl_kits_cover_error_size = /** @type {(inputs: Kits_Cover_Error_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De afbeelding is groter dan ${i?.max} MB.`)
};

const pl_kits_cover_error_size = /** @type {(inputs: Kits_Cover_Error_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Obraz jest większy niż ${i?.max} MB.`)
};

const pt_kits_cover_error_size = /** @type {(inputs: Kits_Cover_Error_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A imagem tem mais de ${i?.max} MB.`)
};

const ru_kits_cover_error_size = /** @type {(inputs: Kits_Cover_Error_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Изображение больше ${i?.max} МБ.`)
};

const sv_kits_cover_error_size = /** @type {(inputs: Kits_Cover_Error_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bilden är större än ${i?.max} MB.`)
};

const tr_kits_cover_error_size = /** @type {(inputs: Kits_Cover_Error_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Görsel ${i?.max} MB’tan büyük.`)
};

const zh_kits_cover_error_size = /** @type {(inputs: Kits_Cover_Error_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`图片超过 ${i?.max} MB。`)
};

const ja_kits_cover_error_size = /** @type {(inputs: Kits_Cover_Error_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`画像が ${i?.max} MB を超えています。`)
};

/**
* | output |
* | --- |
* | "The image is larger than {max} MB." |
*
* @param {Kits_Cover_Error_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_cover_error_size = /** @type {((inputs: Kits_Cover_Error_SizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Cover_Error_SizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_cover_error_size(inputs)
	if (locale === "de") return de_kits_cover_error_size(inputs)
	if (locale === "fr") return fr_kits_cover_error_size(inputs)
	if (locale === "it") return it_kits_cover_error_size(inputs)
	if (locale === "nl") return nl_kits_cover_error_size(inputs)
	if (locale === "pl") return pl_kits_cover_error_size(inputs)
	if (locale === "pt") return pt_kits_cover_error_size(inputs)
	if (locale === "ru") return ru_kits_cover_error_size(inputs)
	if (locale === "sv") return sv_kits_cover_error_size(inputs)
	if (locale === "tr") return tr_kits_cover_error_size(inputs)
	if (locale === "zh") return zh_kits_cover_error_size(inputs)
	if (locale === "ja") return ja_kits_cover_error_size(inputs)
	return en_kits_cover_error_size(inputs)
});
