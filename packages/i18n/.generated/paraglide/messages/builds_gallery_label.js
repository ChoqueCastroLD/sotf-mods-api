/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Builds_Gallery_LabelInputs */

const en_builds_gallery_label = /** @type {(inputs: Builds_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pictures of ${i?.name}`)
};

const es_builds_gallery_label = /** @type {(inputs: Builds_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Imágenes de ${i?.name}`)
};

const de_builds_gallery_label = /** @type {(inputs: Builds_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bilder von ${i?.name}`)
};

const fr_builds_gallery_label = /** @type {(inputs: Builds_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Images de ${i?.name}`)
};

const it_builds_gallery_label = /** @type {(inputs: Builds_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Immagini di ${i?.name}`)
};

const nl_builds_gallery_label = /** @type {(inputs: Builds_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afbeeldingen van ${i?.name}`)
};

const pl_builds_gallery_label = /** @type {(inputs: Builds_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Obrazy: ${i?.name}`)
};

const pt_builds_gallery_label = /** @type {(inputs: Builds_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Imagens de ${i?.name}`)
};

const ru_builds_gallery_label = /** @type {(inputs: Builds_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Изображения: ${i?.name}`)
};

const sv_builds_gallery_label = /** @type {(inputs: Builds_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bilder av ${i?.name}`)
};

const tr_builds_gallery_label = /** @type {(inputs: Builds_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} görselleri`)
};

const zh_builds_gallery_label = /** @type {(inputs: Builds_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的图片`)
};

const ja_builds_gallery_label = /** @type {(inputs: Builds_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の画像`)
};

/**
* | output |
* | --- |
* | "Pictures of {name}" |
*
* @param {Builds_Gallery_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_gallery_label = /** @type {((inputs: Builds_Gallery_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Gallery_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_gallery_label(inputs)
	if (locale === "de") return de_builds_gallery_label(inputs)
	if (locale === "fr") return fr_builds_gallery_label(inputs)
	if (locale === "it") return it_builds_gallery_label(inputs)
	if (locale === "nl") return nl_builds_gallery_label(inputs)
	if (locale === "pl") return pl_builds_gallery_label(inputs)
	if (locale === "pt") return pt_builds_gallery_label(inputs)
	if (locale === "ru") return ru_builds_gallery_label(inputs)
	if (locale === "sv") return sv_builds_gallery_label(inputs)
	if (locale === "tr") return tr_builds_gallery_label(inputs)
	if (locale === "zh") return zh_builds_gallery_label(inputs)
	if (locale === "ja") return ja_builds_gallery_label(inputs)
	return en_builds_gallery_label(inputs)
});
