/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ index: NonNullable<unknown>, total: NonNullable<unknown> }} Mod_Gallery_SlideInputs */

const en_mod_gallery_slide = /** @type {(inputs: Mod_Gallery_SlideInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("en", i?.index, {});
	const total__number = registry.number("en", i?.total, {});return /** @type {LocalizedString} */ (`${index__number} of ${total__number}`)
};

const es_mod_gallery_slide = /** @type {(inputs: Mod_Gallery_SlideInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("es", i?.index, {});
	const total__number = registry.number("es", i?.total, {});return /** @type {LocalizedString} */ (`${index__number} de ${total__number}`)
};

const de_mod_gallery_slide = /** @type {(inputs: Mod_Gallery_SlideInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("de", i?.index, {});
	const total__number = registry.number("de", i?.total, {});return /** @type {LocalizedString} */ (`${index__number} von ${total__number}`)
};

const fr_mod_gallery_slide = /** @type {(inputs: Mod_Gallery_SlideInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("fr", i?.index, {});
	const total__number = registry.number("fr", i?.total, {});return /** @type {LocalizedString} */ (`${index__number} sur ${total__number}`)
};

const it_mod_gallery_slide = /** @type {(inputs: Mod_Gallery_SlideInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("it", i?.index, {});
	const total__number = registry.number("it", i?.total, {});return /** @type {LocalizedString} */ (`${index__number} di ${total__number}`)
};

const nl_mod_gallery_slide = /** @type {(inputs: Mod_Gallery_SlideInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("nl", i?.index, {});
	const total__number = registry.number("nl", i?.total, {});return /** @type {LocalizedString} */ (`${index__number} van ${total__number}`)
};

const pl_mod_gallery_slide = /** @type {(inputs: Mod_Gallery_SlideInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("pl", i?.index, {});
	const total__number = registry.number("pl", i?.total, {});return /** @type {LocalizedString} */ (`${index__number} z ${total__number}`)
};

const pt_mod_gallery_slide = /** @type {(inputs: Mod_Gallery_SlideInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("pt", i?.index, {});
	const total__number = registry.number("pt", i?.total, {});return /** @type {LocalizedString} */ (`${index__number} de ${total__number}`)
};

const ru_mod_gallery_slide = /** @type {(inputs: Mod_Gallery_SlideInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("ru", i?.index, {});
	const total__number = registry.number("ru", i?.total, {});return /** @type {LocalizedString} */ (`${index__number} из ${total__number}`)
};

const sv_mod_gallery_slide = /** @type {(inputs: Mod_Gallery_SlideInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("sv", i?.index, {});
	const total__number = registry.number("sv", i?.total, {});return /** @type {LocalizedString} */ (`${index__number} av ${total__number}`)
};

const tr_mod_gallery_slide = /** @type {(inputs: Mod_Gallery_SlideInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("tr", i?.index, {});
	const total__number = registry.number("tr", i?.total, {});return /** @type {LocalizedString} */ (`${index__number} / ${total__number}`)
};

const zh_mod_gallery_slide = /** @type {(inputs: Mod_Gallery_SlideInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("zh", i?.index, {});
	const total__number = registry.number("zh", i?.total, {});return /** @type {LocalizedString} */ (`第 ${index__number} 张，共 ${total__number} 张`)
};

const ja_mod_gallery_slide = /** @type {(inputs: Mod_Gallery_SlideInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("ja", i?.index, {});
	const total__number = registry.number("ja", i?.total, {});return /** @type {LocalizedString} */ (`${total__number} 枚中 ${index__number} 枚目`)
};

/**
* | output |
* | --- |
* | "{index__number} of {total__number}" |
*
* @param {Mod_Gallery_SlideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_gallery_slide = /** @type {((inputs: Mod_Gallery_SlideInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Gallery_SlideInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_gallery_slide(inputs)
	if (locale === "de") return de_mod_gallery_slide(inputs)
	if (locale === "fr") return fr_mod_gallery_slide(inputs)
	if (locale === "it") return it_mod_gallery_slide(inputs)
	if (locale === "nl") return nl_mod_gallery_slide(inputs)
	if (locale === "pl") return pl_mod_gallery_slide(inputs)
	if (locale === "pt") return pt_mod_gallery_slide(inputs)
	if (locale === "ru") return ru_mod_gallery_slide(inputs)
	if (locale === "sv") return sv_mod_gallery_slide(inputs)
	if (locale === "tr") return tr_mod_gallery_slide(inputs)
	if (locale === "zh") return zh_mod_gallery_slide(inputs)
	if (locale === "ja") return ja_mod_gallery_slide(inputs)
	return en_mod_gallery_slide(inputs)
});
