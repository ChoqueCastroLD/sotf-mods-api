/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Crop_ZoomInputs */

const en_settings_crop_zoom = /** @type {(inputs: Settings_Crop_ZoomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoom`)
};

const es_settings_crop_zoom = /** @type {(inputs: Settings_Crop_ZoomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoom`)
};

const de_settings_crop_zoom = /** @type {(inputs: Settings_Crop_ZoomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoom`)
};

const fr_settings_crop_zoom = /** @type {(inputs: Settings_Crop_ZoomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoom`)
};

const it_settings_crop_zoom = /** @type {(inputs: Settings_Crop_ZoomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoom`)
};

const nl_settings_crop_zoom = /** @type {(inputs: Settings_Crop_ZoomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoom`)
};

const pl_settings_crop_zoom = /** @type {(inputs: Settings_Crop_ZoomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powiększenie`)
};

const pt_settings_crop_zoom = /** @type {(inputs: Settings_Crop_ZoomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoom`)
};

const ru_settings_crop_zoom = /** @type {(inputs: Settings_Crop_ZoomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Масштаб`)
};

const sv_settings_crop_zoom = /** @type {(inputs: Settings_Crop_ZoomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoom`)
};

const tr_settings_crop_zoom = /** @type {(inputs: Settings_Crop_ZoomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yakınlaştırma`)
};

const zh_settings_crop_zoom = /** @type {(inputs: Settings_Crop_ZoomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`缩放`)
};

const ja_settings_crop_zoom = /** @type {(inputs: Settings_Crop_ZoomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拡大`)
};

/**
* | output |
* | --- |
* | "Zoom" |
*
* @param {Settings_Crop_ZoomInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_crop_zoom = /** @type {((inputs?: Settings_Crop_ZoomInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Crop_ZoomInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_crop_zoom(inputs)
	if (locale === "de") return de_settings_crop_zoom(inputs)
	if (locale === "fr") return fr_settings_crop_zoom(inputs)
	if (locale === "it") return it_settings_crop_zoom(inputs)
	if (locale === "nl") return nl_settings_crop_zoom(inputs)
	if (locale === "pl") return pl_settings_crop_zoom(inputs)
	if (locale === "pt") return pt_settings_crop_zoom(inputs)
	if (locale === "ru") return ru_settings_crop_zoom(inputs)
	if (locale === "sv") return sv_settings_crop_zoom(inputs)
	if (locale === "tr") return tr_settings_crop_zoom(inputs)
	if (locale === "zh") return zh_settings_crop_zoom(inputs)
	if (locale === "ja") return ja_settings_crop_zoom(inputs)
	return en_settings_crop_zoom(inputs)
});
