/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Crop_RoledescriptionInputs */

const en_settings_crop_roledescription = /** @type {(inputs: Settings_Crop_RoledescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`crop area`)
};

const es_settings_crop_roledescription = /** @type {(inputs: Settings_Crop_RoledescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zona de recorte`)
};

const de_settings_crop_roledescription = /** @type {(inputs: Settings_Crop_RoledescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zuschneidebereich`)
};

const fr_settings_crop_roledescription = /** @type {(inputs: Settings_Crop_RoledescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zone de recadrage`)
};

const it_settings_crop_roledescription = /** @type {(inputs: Settings_Crop_RoledescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`area di ritaglio`)
};

const nl_settings_crop_roledescription = /** @type {(inputs: Settings_Crop_RoledescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bijsnijgebied`)
};

const pl_settings_crop_roledescription = /** @type {(inputs: Settings_Crop_RoledescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`obszar przycinania`)
};

const pt_settings_crop_roledescription = /** @type {(inputs: Settings_Crop_RoledescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`área de recorte`)
};

const ru_settings_crop_roledescription = /** @type {(inputs: Settings_Crop_RoledescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`область обрезки`)
};

const sv_settings_crop_roledescription = /** @type {(inputs: Settings_Crop_RoledescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`beskärningsyta`)
};

const tr_settings_crop_roledescription = /** @type {(inputs: Settings_Crop_RoledescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`kırpma alanı`)
};

const zh_settings_crop_roledescription = /** @type {(inputs: Settings_Crop_RoledescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`裁剪区域`)
};

const ja_settings_crop_roledescription = /** @type {(inputs: Settings_Crop_RoledescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`トリミング範囲`)
};

/**
* | output |
* | --- |
* | "crop area" |
*
* @param {Settings_Crop_RoledescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_crop_roledescription = /** @type {((inputs?: Settings_Crop_RoledescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Crop_RoledescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_crop_roledescription(inputs)
	if (locale === "de") return de_settings_crop_roledescription(inputs)
	if (locale === "fr") return fr_settings_crop_roledescription(inputs)
	if (locale === "it") return it_settings_crop_roledescription(inputs)
	if (locale === "nl") return nl_settings_crop_roledescription(inputs)
	if (locale === "pl") return pl_settings_crop_roledescription(inputs)
	if (locale === "pt") return pt_settings_crop_roledescription(inputs)
	if (locale === "ru") return ru_settings_crop_roledescription(inputs)
	if (locale === "sv") return sv_settings_crop_roledescription(inputs)
	if (locale === "tr") return tr_settings_crop_roledescription(inputs)
	if (locale === "zh") return zh_settings_crop_roledescription(inputs)
	if (locale === "ja") return ja_settings_crop_roledescription(inputs)
	return en_settings_crop_roledescription(inputs)
});
