/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Social_Image_RemoveInputs */

const en_social_image_remove = /** @type {(inputs: Social_Image_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove ${i?.name}`)
};

const es_social_image_remove = /** @type {(inputs: Social_Image_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Quitar ${i?.name}`)
};

const de_social_image_remove = /** @type {(inputs: Social_Image_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} entfernen`)
};

const fr_social_image_remove = /** @type {(inputs: Social_Image_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer ${i?.name}`)
};

const it_social_image_remove = /** @type {(inputs: Social_Image_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rimuovi ${i?.name}`)
};

const nl_social_image_remove = /** @type {(inputs: Social_Image_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} verwijderen`)
};

const pl_social_image_remove = /** @type {(inputs: Social_Image_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usuń ${i?.name}`)
};

const pt_social_image_remove = /** @type {(inputs: Social_Image_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remover ${i?.name}`)
};

const ru_social_image_remove = /** @type {(inputs: Social_Image_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Удалить ${i?.name}`)
};

const sv_social_image_remove = /** @type {(inputs: Social_Image_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort ${i?.name}`)
};

const tr_social_image_remove = /** @type {(inputs: Social_Image_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} öğesini kaldır`)
};

const zh_social_image_remove = /** @type {(inputs: Social_Image_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`移除 ${i?.name}`)
};

const ja_social_image_remove = /** @type {(inputs: Social_Image_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を削除`)
};

/**
* | output |
* | --- |
* | "Remove {name}" |
*
* @param {Social_Image_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_image_remove = /** @type {((inputs: Social_Image_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Image_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_image_remove(inputs)
	if (locale === "de") return de_social_image_remove(inputs)
	if (locale === "fr") return fr_social_image_remove(inputs)
	if (locale === "it") return it_social_image_remove(inputs)
	if (locale === "nl") return nl_social_image_remove(inputs)
	if (locale === "pl") return pl_social_image_remove(inputs)
	if (locale === "pt") return pt_social_image_remove(inputs)
	if (locale === "ru") return ru_social_image_remove(inputs)
	if (locale === "sv") return sv_social_image_remove(inputs)
	if (locale === "tr") return tr_social_image_remove(inputs)
	if (locale === "zh") return zh_social_image_remove(inputs)
	if (locale === "ja") return ja_social_image_remove(inputs)
	return en_social_image_remove(inputs)
});
