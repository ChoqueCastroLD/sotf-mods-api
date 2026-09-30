/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Crop_Avatar_TitleInputs */

const en_settings_crop_avatar_title = /** @type {(inputs: Settings_Crop_Avatar_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crop your photo`)
};

const es_settings_crop_avatar_title = /** @type {(inputs: Settings_Crop_Avatar_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recorta tu foto`)
};

const de_settings_crop_avatar_title = /** @type {(inputs: Settings_Crop_Avatar_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto zuschneiden`)
};

const fr_settings_crop_avatar_title = /** @type {(inputs: Settings_Crop_Avatar_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recadrer votre photo`)
};

const it_settings_crop_avatar_title = /** @type {(inputs: Settings_Crop_Avatar_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritaglia la foto`)
};

const nl_settings_crop_avatar_title = /** @type {(inputs: Settings_Crop_Avatar_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto bijsnijden`)
};

const pl_settings_crop_avatar_title = /** @type {(inputs: Settings_Crop_Avatar_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przytnij zdjęcie`)
};

const pt_settings_crop_avatar_title = /** @type {(inputs: Settings_Crop_Avatar_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recortar sua foto`)
};

const ru_settings_crop_avatar_title = /** @type {(inputs: Settings_Crop_Avatar_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обрезать фото`)
};

const sv_settings_crop_avatar_title = /** @type {(inputs: Settings_Crop_Avatar_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskär ditt foto`)
};

const tr_settings_crop_avatar_title = /** @type {(inputs: Settings_Crop_Avatar_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fotoğrafını kırp`)
};

const zh_settings_crop_avatar_title = /** @type {(inputs: Settings_Crop_Avatar_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`裁剪你的照片`)
};

const ja_settings_crop_avatar_title = /** @type {(inputs: Settings_Crop_Avatar_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`写真をトリミング`)
};

/**
* | output |
* | --- |
* | "Crop your photo" |
*
* @param {Settings_Crop_Avatar_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_crop_avatar_title = /** @type {((inputs?: Settings_Crop_Avatar_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Crop_Avatar_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_crop_avatar_title(inputs)
	if (locale === "de") return de_settings_crop_avatar_title(inputs)
	if (locale === "fr") return fr_settings_crop_avatar_title(inputs)
	if (locale === "it") return it_settings_crop_avatar_title(inputs)
	if (locale === "nl") return nl_settings_crop_avatar_title(inputs)
	if (locale === "pl") return pl_settings_crop_avatar_title(inputs)
	if (locale === "pt") return pt_settings_crop_avatar_title(inputs)
	if (locale === "ru") return ru_settings_crop_avatar_title(inputs)
	if (locale === "sv") return sv_settings_crop_avatar_title(inputs)
	if (locale === "tr") return tr_settings_crop_avatar_title(inputs)
	if (locale === "zh") return zh_settings_crop_avatar_title(inputs)
	if (locale === "ja") return ja_settings_crop_avatar_title(inputs)
	return en_settings_crop_avatar_title(inputs)
});
