/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Photos_TitleInputs */

const en_settings_photos_title = /** @type {(inputs: Settings_Photos_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Photo and banner`)
};

const es_settings_photos_title = /** @type {(inputs: Settings_Photos_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto y banner`)
};

const de_settings_photos_title = /** @type {(inputs: Settings_Photos_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto und Banner`)
};

const fr_settings_photos_title = /** @type {(inputs: Settings_Photos_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Photo et bannière`)
};

const it_settings_photos_title = /** @type {(inputs: Settings_Photos_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto e banner`)
};

const nl_settings_photos_title = /** @type {(inputs: Settings_Photos_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto en banner`)
};

const pl_settings_photos_title = /** @type {(inputs: Settings_Photos_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zdjęcie i baner`)
};

const pt_settings_photos_title = /** @type {(inputs: Settings_Photos_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto e banner`)
};

const ru_settings_photos_title = /** @type {(inputs: Settings_Photos_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фото и баннер`)
};

const sv_settings_photos_title = /** @type {(inputs: Settings_Photos_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto och banner`)
};

const tr_settings_photos_title = /** @type {(inputs: Settings_Photos_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fotoğraf ve afiş`)
};

const zh_settings_photos_title = /** @type {(inputs: Settings_Photos_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`头像和横幅`)
};

const ja_settings_photos_title = /** @type {(inputs: Settings_Photos_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`写真とバナー`)
};

/**
* | output |
* | --- |
* | "Photo and banner" |
*
* @param {Settings_Photos_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_photos_title = /** @type {((inputs?: Settings_Photos_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Photos_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_photos_title(inputs)
	if (locale === "de") return de_settings_photos_title(inputs)
	if (locale === "fr") return fr_settings_photos_title(inputs)
	if (locale === "it") return it_settings_photos_title(inputs)
	if (locale === "nl") return nl_settings_photos_title(inputs)
	if (locale === "pl") return pl_settings_photos_title(inputs)
	if (locale === "pt") return pt_settings_photos_title(inputs)
	if (locale === "ru") return ru_settings_photos_title(inputs)
	if (locale === "sv") return sv_settings_photos_title(inputs)
	if (locale === "tr") return tr_settings_photos_title(inputs)
	if (locale === "zh") return zh_settings_photos_title(inputs)
	if (locale === "ja") return ja_settings_photos_title(inputs)
	return en_settings_photos_title(inputs)
});
