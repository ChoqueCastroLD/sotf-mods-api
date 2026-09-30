/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Gallery_LabelInputs */

const en_ui_domain_gallery_label = /** @type {(inputs: Ui_Domain_Gallery_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gallery`)
};

const es_ui_domain_gallery_label = /** @type {(inputs: Ui_Domain_Gallery_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galería`)
};

const de_ui_domain_gallery_label = /** @type {(inputs: Ui_Domain_Gallery_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galerie`)
};

const fr_ui_domain_gallery_label = /** @type {(inputs: Ui_Domain_Gallery_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galerie`)
};

const it_ui_domain_gallery_label = /** @type {(inputs: Ui_Domain_Gallery_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galleria`)
};

const nl_ui_domain_gallery_label = /** @type {(inputs: Ui_Domain_Gallery_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galerij`)
};

const pl_ui_domain_gallery_label = /** @type {(inputs: Ui_Domain_Gallery_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galeria`)
};

const pt_ui_domain_gallery_label = /** @type {(inputs: Ui_Domain_Gallery_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galeria`)
};

const ru_ui_domain_gallery_label = /** @type {(inputs: Ui_Domain_Gallery_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Галерея`)
};

const sv_ui_domain_gallery_label = /** @type {(inputs: Ui_Domain_Gallery_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galleri`)
};

const tr_ui_domain_gallery_label = /** @type {(inputs: Ui_Domain_Gallery_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galeri`)
};

const zh_ui_domain_gallery_label = /** @type {(inputs: Ui_Domain_Gallery_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图库`)
};

const ja_ui_domain_gallery_label = /** @type {(inputs: Ui_Domain_Gallery_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ギャラリー`)
};

/**
* | output |
* | --- |
* | "Gallery" |
*
* @param {Ui_Domain_Gallery_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_gallery_label = /** @type {((inputs?: Ui_Domain_Gallery_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Gallery_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_gallery_label(inputs)
	if (locale === "de") return de_ui_domain_gallery_label(inputs)
	if (locale === "fr") return fr_ui_domain_gallery_label(inputs)
	if (locale === "it") return it_ui_domain_gallery_label(inputs)
	if (locale === "nl") return nl_ui_domain_gallery_label(inputs)
	if (locale === "pl") return pl_ui_domain_gallery_label(inputs)
	if (locale === "pt") return pt_ui_domain_gallery_label(inputs)
	if (locale === "ru") return ru_ui_domain_gallery_label(inputs)
	if (locale === "sv") return sv_ui_domain_gallery_label(inputs)
	if (locale === "tr") return tr_ui_domain_gallery_label(inputs)
	if (locale === "zh") return zh_ui_domain_gallery_label(inputs)
	if (locale === "ja") return ja_ui_domain_gallery_label(inputs)
	return en_ui_domain_gallery_label(inputs)
});
