/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Settings_Image_SizeInputs */

const en_settings_image_size = /** @type {(inputs: Settings_Image_SizeInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("en", i?.max, {});return /** @type {LocalizedString} */ (`That image is too large. The limit is ${max__number} MB.`)
};

const es_settings_image_size = /** @type {(inputs: Settings_Image_SizeInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("es", i?.max, {});return /** @type {LocalizedString} */ (`Esa imagen es demasiado grande. El límite es de ${max__number} MB.`)
};

const de_settings_image_size = /** @type {(inputs: Settings_Image_SizeInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("de", i?.max, {});return /** @type {LocalizedString} */ (`Das Bild ist zu groß. Das Limit liegt bei ${max__number} MB.`)
};

const fr_settings_image_size = /** @type {(inputs: Settings_Image_SizeInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("fr", i?.max, {});return /** @type {LocalizedString} */ (`Cette image est trop lourde. La limite est de ${max__number} Mo.`)
};

const it_settings_image_size = /** @type {(inputs: Settings_Image_SizeInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("it", i?.max, {});return /** @type {LocalizedString} */ (`L’immagine è troppo grande. Il limite è ${max__number} MB.`)
};

const nl_settings_image_size = /** @type {(inputs: Settings_Image_SizeInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("nl", i?.max, {});return /** @type {LocalizedString} */ (`Die afbeelding is te groot. De limiet is ${max__number} MB.`)
};

const pl_settings_image_size = /** @type {(inputs: Settings_Image_SizeInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("pl", i?.max, {});return /** @type {LocalizedString} */ (`Ten obraz jest za duży. Limit to ${max__number} MB.`)
};

const pt_settings_image_size = /** @type {(inputs: Settings_Image_SizeInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("pt", i?.max, {});return /** @type {LocalizedString} */ (`Essa imagem é grande demais. O limite é ${max__number} MB.`)
};

const ru_settings_image_size = /** @type {(inputs: Settings_Image_SizeInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("ru", i?.max, {});return /** @type {LocalizedString} */ (`Изображение слишком большое. Лимит: ${max__number} МБ.`)
};

const sv_settings_image_size = /** @type {(inputs: Settings_Image_SizeInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("sv", i?.max, {});return /** @type {LocalizedString} */ (`Bilden är för stor. Gränsen är ${max__number} MB.`)
};

const tr_settings_image_size = /** @type {(inputs: Settings_Image_SizeInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("tr", i?.max, {});return /** @type {LocalizedString} */ (`Bu görsel çok büyük. Sınır ${max__number} MB.`)
};

const zh_settings_image_size = /** @type {(inputs: Settings_Image_SizeInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("zh", i?.max, {});return /** @type {LocalizedString} */ (`图片太大。上限为 ${max__number} MB。`)
};

const ja_settings_image_size = /** @type {(inputs: Settings_Image_SizeInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("ja", i?.max, {});return /** @type {LocalizedString} */ (`画像が大きすぎます。上限は ${max__number} MB です。`)
};

/**
* | output |
* | --- |
* | "That image is too large. The limit is {max__number} MB." |
*
* @param {Settings_Image_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_image_size = /** @type {((inputs: Settings_Image_SizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Image_SizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_image_size(inputs)
	if (locale === "de") return de_settings_image_size(inputs)
	if (locale === "fr") return fr_settings_image_size(inputs)
	if (locale === "it") return it_settings_image_size(inputs)
	if (locale === "nl") return nl_settings_image_size(inputs)
	if (locale === "pl") return pl_settings_image_size(inputs)
	if (locale === "pt") return pt_settings_image_size(inputs)
	if (locale === "ru") return ru_settings_image_size(inputs)
	if (locale === "sv") return sv_settings_image_size(inputs)
	if (locale === "tr") return tr_settings_image_size(inputs)
	if (locale === "zh") return zh_settings_image_size(inputs)
	if (locale === "ja") return ja_settings_image_size(inputs)
	return en_settings_image_size(inputs)
});
