/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Crop_LabelInputs */

const en_settings_crop_label = /** @type {(inputs: Settings_Crop_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image crop area`)
};

const es_settings_crop_label = /** @type {(inputs: Settings_Crop_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zona de recorte de la imagen`)
};

const de_settings_crop_label = /** @type {(inputs: Settings_Crop_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zuschneidebereich des Bildes`)
};

const fr_settings_crop_label = /** @type {(inputs: Settings_Crop_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zone de recadrage de l’image`)
};

const it_settings_crop_label = /** @type {(inputs: Settings_Crop_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Area di ritaglio dell’immagine`)
};

const nl_settings_crop_label = /** @type {(inputs: Settings_Crop_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bijsnijgebied van de afbeelding`)
};

const pl_settings_crop_label = /** @type {(inputs: Settings_Crop_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obszar przycinania obrazu`)
};

const pt_settings_crop_label = /** @type {(inputs: Settings_Crop_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Área de recorte da imagem`)
};

const ru_settings_crop_label = /** @type {(inputs: Settings_Crop_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Область обрезки изображения`)
};

const sv_settings_crop_label = /** @type {(inputs: Settings_Crop_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildens beskärningsyta`)
};

const tr_settings_crop_label = /** @type {(inputs: Settings_Crop_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görsel kırpma alanı`)
};

const zh_settings_crop_label = /** @type {(inputs: Settings_Crop_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片裁剪区域`)
};

const ja_settings_crop_label = /** @type {(inputs: Settings_Crop_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像のトリミング範囲`)
};

/**
* | output |
* | --- |
* | "Image crop area" |
*
* @param {Settings_Crop_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_crop_label = /** @type {((inputs?: Settings_Crop_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Crop_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_crop_label(inputs)
	if (locale === "de") return de_settings_crop_label(inputs)
	if (locale === "fr") return fr_settings_crop_label(inputs)
	if (locale === "it") return it_settings_crop_label(inputs)
	if (locale === "nl") return nl_settings_crop_label(inputs)
	if (locale === "pl") return pl_settings_crop_label(inputs)
	if (locale === "pt") return pt_settings_crop_label(inputs)
	if (locale === "ru") return ru_settings_crop_label(inputs)
	if (locale === "sv") return sv_settings_crop_label(inputs)
	if (locale === "tr") return tr_settings_crop_label(inputs)
	if (locale === "zh") return zh_settings_crop_label(inputs)
	if (locale === "ja") return ja_settings_crop_label(inputs)
	return en_settings_crop_label(inputs)
});
