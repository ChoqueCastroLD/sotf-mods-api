/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Crop_Banner_TitleInputs */

const en_settings_crop_banner_title = /** @type {(inputs: Settings_Crop_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crop your banner`)
};

const es_settings_crop_banner_title = /** @type {(inputs: Settings_Crop_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recorta tu banner`)
};

const de_settings_crop_banner_title = /** @type {(inputs: Settings_Crop_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banner zuschneiden`)
};

const fr_settings_crop_banner_title = /** @type {(inputs: Settings_Crop_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recadrer votre bannière`)
};

const it_settings_crop_banner_title = /** @type {(inputs: Settings_Crop_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritaglia il banner`)
};

const nl_settings_crop_banner_title = /** @type {(inputs: Settings_Crop_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banner bijsnijden`)
};

const pl_settings_crop_banner_title = /** @type {(inputs: Settings_Crop_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przytnij baner`)
};

const pt_settings_crop_banner_title = /** @type {(inputs: Settings_Crop_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recortar seu banner`)
};

const ru_settings_crop_banner_title = /** @type {(inputs: Settings_Crop_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обрезать баннер`)
};

const sv_settings_crop_banner_title = /** @type {(inputs: Settings_Crop_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskär din banner`)
};

const tr_settings_crop_banner_title = /** @type {(inputs: Settings_Crop_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afişini kırp`)
};

const zh_settings_crop_banner_title = /** @type {(inputs: Settings_Crop_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`裁剪你的横幅`)
};

const ja_settings_crop_banner_title = /** @type {(inputs: Settings_Crop_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バナーをトリミング`)
};

/**
* | output |
* | --- |
* | "Crop your banner" |
*
* @param {Settings_Crop_Banner_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_crop_banner_title = /** @type {((inputs?: Settings_Crop_Banner_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Crop_Banner_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_crop_banner_title(inputs)
	if (locale === "de") return de_settings_crop_banner_title(inputs)
	if (locale === "fr") return fr_settings_crop_banner_title(inputs)
	if (locale === "it") return it_settings_crop_banner_title(inputs)
	if (locale === "nl") return nl_settings_crop_banner_title(inputs)
	if (locale === "pl") return pl_settings_crop_banner_title(inputs)
	if (locale === "pt") return pt_settings_crop_banner_title(inputs)
	if (locale === "ru") return ru_settings_crop_banner_title(inputs)
	if (locale === "sv") return sv_settings_crop_banner_title(inputs)
	if (locale === "tr") return tr_settings_crop_banner_title(inputs)
	if (locale === "zh") return zh_settings_crop_banner_title(inputs)
	if (locale === "ja") return ja_settings_crop_banner_title(inputs)
	return en_settings_crop_banner_title(inputs)
});
