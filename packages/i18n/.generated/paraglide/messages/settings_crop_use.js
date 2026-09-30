/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Crop_UseInputs */

const en_settings_crop_use = /** @type {(inputs: Settings_Crop_UseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use image`)
};

const es_settings_crop_use = /** @type {(inputs: Settings_Crop_UseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usar imagen`)
};

const de_settings_crop_use = /** @type {(inputs: Settings_Crop_UseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bild verwenden`)
};

const fr_settings_crop_use = /** @type {(inputs: Settings_Crop_UseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utiliser l’image`)
};

const it_settings_crop_use = /** @type {(inputs: Settings_Crop_UseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa l’immagine`)
};

const nl_settings_crop_use = /** @type {(inputs: Settings_Crop_UseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeelding gebruiken`)
};

const pl_settings_crop_use = /** @type {(inputs: Settings_Crop_UseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj obrazu`)
};

const pt_settings_crop_use = /** @type {(inputs: Settings_Crop_UseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usar imagem`)
};

const ru_settings_crop_use = /** @type {(inputs: Settings_Crop_UseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Использовать изображение`)
};

const sv_settings_crop_use = /** @type {(inputs: Settings_Crop_UseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd bilden`)
};

const tr_settings_crop_use = /** @type {(inputs: Settings_Crop_UseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görseli kullan`)
};

const zh_settings_crop_use = /** @type {(inputs: Settings_Crop_UseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用图片`)
};

const ja_settings_crop_use = /** @type {(inputs: Settings_Crop_UseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この画像を使う`)
};

/**
* | output |
* | --- |
* | "Use image" |
*
* @param {Settings_Crop_UseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_crop_use = /** @type {((inputs?: Settings_Crop_UseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Crop_UseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_crop_use(inputs)
	if (locale === "de") return de_settings_crop_use(inputs)
	if (locale === "fr") return fr_settings_crop_use(inputs)
	if (locale === "it") return it_settings_crop_use(inputs)
	if (locale === "nl") return nl_settings_crop_use(inputs)
	if (locale === "pl") return pl_settings_crop_use(inputs)
	if (locale === "pt") return pt_settings_crop_use(inputs)
	if (locale === "ru") return ru_settings_crop_use(inputs)
	if (locale === "sv") return sv_settings_crop_use(inputs)
	if (locale === "tr") return tr_settings_crop_use(inputs)
	if (locale === "zh") return zh_settings_crop_use(inputs)
	if (locale === "ja") return ja_settings_crop_use(inputs)
	return en_settings_crop_use(inputs)
});
