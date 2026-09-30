/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ index: NonNullable<unknown>, total: NonNullable<unknown> }} Builds_Gallery_ImageInputs */

const en_builds_gallery_image = /** @type {(inputs: Builds_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("en", i?.index, {});
	const total__number = registry.number("en", i?.total, {});return /** @type {LocalizedString} */ (`Picture ${index__number} of ${total__number}`)
};

const es_builds_gallery_image = /** @type {(inputs: Builds_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("es", i?.index, {});
	const total__number = registry.number("es", i?.total, {});return /** @type {LocalizedString} */ (`Imagen ${index__number} de ${total__number}`)
};

const de_builds_gallery_image = /** @type {(inputs: Builds_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("de", i?.index, {});
	const total__number = registry.number("de", i?.total, {});return /** @type {LocalizedString} */ (`Bild ${index__number} von ${total__number}`)
};

const fr_builds_gallery_image = /** @type {(inputs: Builds_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("fr", i?.index, {});
	const total__number = registry.number("fr", i?.total, {});return /** @type {LocalizedString} */ (`Image ${index__number} sur ${total__number}`)
};

const it_builds_gallery_image = /** @type {(inputs: Builds_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("it", i?.index, {});
	const total__number = registry.number("it", i?.total, {});return /** @type {LocalizedString} */ (`Immagine ${index__number} di ${total__number}`)
};

const nl_builds_gallery_image = /** @type {(inputs: Builds_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("nl", i?.index, {});
	const total__number = registry.number("nl", i?.total, {});return /** @type {LocalizedString} */ (`Afbeelding ${index__number} van ${total__number}`)
};

const pl_builds_gallery_image = /** @type {(inputs: Builds_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("pl", i?.index, {});
	const total__number = registry.number("pl", i?.total, {});return /** @type {LocalizedString} */ (`Obraz ${index__number} z ${total__number}`)
};

const pt_builds_gallery_image = /** @type {(inputs: Builds_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("pt", i?.index, {});
	const total__number = registry.number("pt", i?.total, {});return /** @type {LocalizedString} */ (`Imagem ${index__number} de ${total__number}`)
};

const ru_builds_gallery_image = /** @type {(inputs: Builds_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("ru", i?.index, {});
	const total__number = registry.number("ru", i?.total, {});return /** @type {LocalizedString} */ (`Изображение ${index__number} из ${total__number}`)
};

const sv_builds_gallery_image = /** @type {(inputs: Builds_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("sv", i?.index, {});
	const total__number = registry.number("sv", i?.total, {});return /** @type {LocalizedString} */ (`Bild ${index__number} av ${total__number}`)
};

const tr_builds_gallery_image = /** @type {(inputs: Builds_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("tr", i?.index, {});
	const total__number = registry.number("tr", i?.total, {});return /** @type {LocalizedString} */ (`Görsel ${index__number} / ${total__number}`)
};

const zh_builds_gallery_image = /** @type {(inputs: Builds_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("zh", i?.index, {});
	const total__number = registry.number("zh", i?.total, {});return /** @type {LocalizedString} */ (`第 ${index__number} 张，共 ${total__number} 张`)
};

const ja_builds_gallery_image = /** @type {(inputs: Builds_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("ja", i?.index, {});
	const total__number = registry.number("ja", i?.total, {});return /** @type {LocalizedString} */ (`画像 ${index__number} / ${total__number}`)
};

/**
* | output |
* | --- |
* | "Picture {index__number} of {total__number}" |
*
* @param {Builds_Gallery_ImageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_gallery_image = /** @type {((inputs: Builds_Gallery_ImageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Gallery_ImageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_gallery_image(inputs)
	if (locale === "de") return de_builds_gallery_image(inputs)
	if (locale === "fr") return fr_builds_gallery_image(inputs)
	if (locale === "it") return it_builds_gallery_image(inputs)
	if (locale === "nl") return nl_builds_gallery_image(inputs)
	if (locale === "pl") return pl_builds_gallery_image(inputs)
	if (locale === "pt") return pt_builds_gallery_image(inputs)
	if (locale === "ru") return ru_builds_gallery_image(inputs)
	if (locale === "sv") return sv_builds_gallery_image(inputs)
	if (locale === "tr") return tr_builds_gallery_image(inputs)
	if (locale === "zh") return zh_builds_gallery_image(inputs)
	if (locale === "ja") return ja_builds_gallery_image(inputs)
	return en_builds_gallery_image(inputs)
});
