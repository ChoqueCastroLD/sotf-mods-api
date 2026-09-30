/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Gallery_LabelInputs */

const en_mod_gallery_label = /** @type {(inputs: Mod_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gallery of ${i?.name}`)
};

const es_mod_gallery_label = /** @type {(inputs: Mod_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galería de ${i?.name}`)
};

const de_mod_gallery_label = /** @type {(inputs: Mod_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galerie von ${i?.name}`)
};

const fr_mod_gallery_label = /** @type {(inputs: Mod_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galerie de ${i?.name}`)
};

const it_mod_gallery_label = /** @type {(inputs: Mod_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galleria di ${i?.name}`)
};

const nl_mod_gallery_label = /** @type {(inputs: Mod_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galerij van ${i?.name}`)
};

const pl_mod_gallery_label = /** @type {(inputs: Mod_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galeria ${i?.name}`)
};

const pt_mod_gallery_label = /** @type {(inputs: Mod_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galeria de ${i?.name}`)
};

const ru_mod_gallery_label = /** @type {(inputs: Mod_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Галерея ${i?.name}`)
};

const sv_mod_gallery_label = /** @type {(inputs: Mod_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Galleri för ${i?.name}`)
};

const tr_mod_gallery_label = /** @type {(inputs: Mod_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} galerisi`)
};

const zh_mod_gallery_label = /** @type {(inputs: Mod_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的图库`)
};

const ja_mod_gallery_label = /** @type {(inputs: Mod_Gallery_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} のギャラリー`)
};

/**
* | output |
* | --- |
* | "Gallery of {name}" |
*
* @param {Mod_Gallery_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_gallery_label = /** @type {((inputs: Mod_Gallery_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Gallery_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_gallery_label(inputs)
	if (locale === "de") return de_mod_gallery_label(inputs)
	if (locale === "fr") return fr_mod_gallery_label(inputs)
	if (locale === "it") return it_mod_gallery_label(inputs)
	if (locale === "nl") return nl_mod_gallery_label(inputs)
	if (locale === "pl") return pl_mod_gallery_label(inputs)
	if (locale === "pt") return pt_mod_gallery_label(inputs)
	if (locale === "ru") return ru_mod_gallery_label(inputs)
	if (locale === "sv") return sv_mod_gallery_label(inputs)
	if (locale === "tr") return tr_mod_gallery_label(inputs)
	if (locale === "zh") return zh_mod_gallery_label(inputs)
	if (locale === "ja") return ja_mod_gallery_label(inputs)
	return en_mod_gallery_label(inputs)
});
