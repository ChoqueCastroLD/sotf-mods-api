/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, max: NonNullable<unknown> }} Social_Image_AddInputs */

const en_social_image_add = /** @type {(inputs: Social_Image_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Add image (${i?.count}/${i?.max})`)
};

const es_social_image_add = /** @type {(inputs: Social_Image_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Añadir imagen (${i?.count}/${i?.max})`)
};

const de_social_image_add = /** @type {(inputs: Social_Image_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bild hinzufügen (${i?.count}/${i?.max})`)
};

const fr_social_image_add = /** @type {(inputs: Social_Image_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ajouter une image (${i?.count}/${i?.max})`)
};

const it_social_image_add = /** @type {(inputs: Social_Image_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiungi immagine (${i?.count}/${i?.max})`)
};

const nl_social_image_add = /** @type {(inputs: Social_Image_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afbeelding toevoegen (${i?.count}/${i?.max})`)
};

const pl_social_image_add = /** @type {(inputs: Social_Image_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dodaj obraz (${i?.count}/${i?.max})`)
};

const pt_social_image_add = /** @type {(inputs: Social_Image_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adicionar imagem (${i?.count}/${i?.max})`)
};

const ru_social_image_add = /** @type {(inputs: Social_Image_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Добавить изображение (${i?.count}/${i?.max})`)
};

const sv_social_image_add = /** @type {(inputs: Social_Image_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lägg till bild (${i?.count}/${i?.max})`)
};

const tr_social_image_add = /** @type {(inputs: Social_Image_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Görsel ekle (${i?.count}/${i?.max})`)
};

const zh_social_image_add = /** @type {(inputs: Social_Image_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`添加图片（${i?.count}/${i?.max}）`)
};

const ja_social_image_add = /** @type {(inputs: Social_Image_AddInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`画像を追加（${i?.count}/${i?.max}）`)
};

/**
* | output |
* | --- |
* | "Add image ({count}/{max})" |
*
* @param {Social_Image_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_image_add = /** @type {((inputs: Social_Image_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Image_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_image_add(inputs)
	if (locale === "de") return de_social_image_add(inputs)
	if (locale === "fr") return fr_social_image_add(inputs)
	if (locale === "it") return it_social_image_add(inputs)
	if (locale === "nl") return nl_social_image_add(inputs)
	if (locale === "pl") return pl_social_image_add(inputs)
	if (locale === "pt") return pt_social_image_add(inputs)
	if (locale === "ru") return ru_social_image_add(inputs)
	if (locale === "sv") return sv_social_image_add(inputs)
	if (locale === "tr") return tr_social_image_add(inputs)
	if (locale === "zh") return zh_social_image_add(inputs)
	if (locale === "ja") return ja_social_image_add(inputs)
	return en_social_image_add(inputs)
});
