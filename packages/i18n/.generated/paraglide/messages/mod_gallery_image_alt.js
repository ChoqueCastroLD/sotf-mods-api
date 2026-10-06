/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ index: NonNullable<unknown>, name: NonNullable<unknown> }} Mod_Gallery_Image_AltInputs */

const en_mod_gallery_image_alt = /** @type {(inputs: Mod_Gallery_Image_AltInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("en", i?.index, {});return /** @type {LocalizedString} */ (`Screenshot ${index__number} of ${i?.name}`)
};

const es_mod_gallery_image_alt = /** @type {(inputs: Mod_Gallery_Image_AltInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("es", i?.index, {});return /** @type {LocalizedString} */ (`Captura ${index__number} de ${i?.name}`)
};

const de_mod_gallery_image_alt = /** @type {(inputs: Mod_Gallery_Image_AltInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("de", i?.index, {});return /** @type {LocalizedString} */ (`Screenshot ${index__number} von ${i?.name}`)
};

const fr_mod_gallery_image_alt = /** @type {(inputs: Mod_Gallery_Image_AltInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("fr", i?.index, {});return /** @type {LocalizedString} */ (`Capture ${index__number} de ${i?.name}`)
};

const it_mod_gallery_image_alt = /** @type {(inputs: Mod_Gallery_Image_AltInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("it", i?.index, {});return /** @type {LocalizedString} */ (`Screenshot ${index__number} di ${i?.name}`)
};

const nl_mod_gallery_image_alt = /** @type {(inputs: Mod_Gallery_Image_AltInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("nl", i?.index, {});return /** @type {LocalizedString} */ (`Screenshot ${index__number} van ${i?.name}`)
};

const pl_mod_gallery_image_alt = /** @type {(inputs: Mod_Gallery_Image_AltInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("pl", i?.index, {});return /** @type {LocalizedString} */ (`Zrzut ekranu ${index__number} z ${i?.name}`)
};

const pt_mod_gallery_image_alt = /** @type {(inputs: Mod_Gallery_Image_AltInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("pt", i?.index, {});return /** @type {LocalizedString} */ (`Captura ${index__number} de ${i?.name}`)
};

const ru_mod_gallery_image_alt = /** @type {(inputs: Mod_Gallery_Image_AltInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("ru", i?.index, {});return /** @type {LocalizedString} */ (`Скриншот ${index__number}, ${i?.name}`)
};

const sv_mod_gallery_image_alt = /** @type {(inputs: Mod_Gallery_Image_AltInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("sv", i?.index, {});return /** @type {LocalizedString} */ (`Skärmbild ${index__number} av ${i?.name}`)
};

const tr_mod_gallery_image_alt = /** @type {(inputs: Mod_Gallery_Image_AltInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("tr", i?.index, {});return /** @type {LocalizedString} */ (`${i?.name} ekran görüntüsü ${index__number}`)
};

const zh_mod_gallery_image_alt = /** @type {(inputs: Mod_Gallery_Image_AltInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("zh", i?.index, {});return /** @type {LocalizedString} */ (`${i?.name} 截图 ${index__number}`)
};

const ja_mod_gallery_image_alt = /** @type {(inputs: Mod_Gallery_Image_AltInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("ja", i?.index, {});return /** @type {LocalizedString} */ (`${i?.name} のスクリーンショット ${index__number}`)
};

/**
* | output |
* | --- |
* | "Screenshot {index__number} of {name}" |
*
* @param {Mod_Gallery_Image_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_gallery_image_alt = /** @type {((inputs: Mod_Gallery_Image_AltInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Gallery_Image_AltInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_gallery_image_alt(inputs)
	if (locale === "de") return de_mod_gallery_image_alt(inputs)
	if (locale === "fr") return fr_mod_gallery_image_alt(inputs)
	if (locale === "it") return it_mod_gallery_image_alt(inputs)
	if (locale === "nl") return nl_mod_gallery_image_alt(inputs)
	if (locale === "pl") return pl_mod_gallery_image_alt(inputs)
	if (locale === "pt") return pt_mod_gallery_image_alt(inputs)
	if (locale === "ru") return ru_mod_gallery_image_alt(inputs)
	if (locale === "sv") return sv_mod_gallery_image_alt(inputs)
	if (locale === "tr") return tr_mod_gallery_image_alt(inputs)
	if (locale === "zh") return zh_mod_gallery_image_alt(inputs)
	if (locale === "ja") return ja_mod_gallery_image_alt(inputs)
	return en_mod_gallery_image_alt(inputs)
});
