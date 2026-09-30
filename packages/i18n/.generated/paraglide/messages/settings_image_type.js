/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Image_TypeInputs */

const en_settings_image_type = /** @type {(inputs: Settings_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That file type isn’t supported. Use PNG, JPEG, WebP or AVIF.`)
};

const es_settings_image_type = /** @type {(inputs: Settings_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ese tipo de archivo no es compatible. Usa PNG, JPEG, WebP o AVIF.`)
};

const de_settings_image_type = /** @type {(inputs: Settings_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Dateityp wird nicht unterstützt. Verwende PNG, JPEG, WebP oder AVIF.`)
};

const fr_settings_image_type = /** @type {(inputs: Settings_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce type de fichier n’est pas pris en charge. Utilisez PNG, JPEG, WebP ou AVIF.`)
};

const it_settings_image_type = /** @type {(inputs: Settings_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo tipo di file non è supportato. Usa PNG, JPEG, WebP o AVIF.`)
};

const nl_settings_image_type = /** @type {(inputs: Settings_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dat bestandstype wordt niet ondersteund. Gebruik PNG, JPEG, WebP of AVIF.`)
};

const pl_settings_image_type = /** @type {(inputs: Settings_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten typ pliku nie jest obsługiwany. Użyj PNG, JPEG, WebP lub AVIF.`)
};

const pt_settings_image_type = /** @type {(inputs: Settings_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esse tipo de arquivo não é compatível. Use PNG, JPEG, WebP ou AVIF.`)
};

const ru_settings_image_type = /** @type {(inputs: Settings_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот тип файла не поддерживается. Используйте PNG, JPEG, WebP или AVIF.`)
};

const sv_settings_image_type = /** @type {(inputs: Settings_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den filtypen stöds inte. Använd PNG, JPEG, WebP eller AVIF.`)
};

const tr_settings_image_type = /** @type {(inputs: Settings_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu dosya türü desteklenmiyor. PNG, JPEG, WebP veya AVIF kullan.`)
};

const zh_settings_image_type = /** @type {(inputs: Settings_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不支持该文件类型。请使用 PNG、JPEG、WebP 或 AVIF。`)
};

const ja_settings_image_type = /** @type {(inputs: Settings_Image_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このファイル形式には対応していません。PNG、JPEG、WebP、AVIF を使ってください。`)
};

/**
* | output |
* | --- |
* | "That file type isn’t supported. Use PNG, JPEG, WebP or AVIF." |
*
* @param {Settings_Image_TypeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_image_type = /** @type {((inputs?: Settings_Image_TypeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Image_TypeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_image_type(inputs)
	if (locale === "de") return de_settings_image_type(inputs)
	if (locale === "fr") return fr_settings_image_type(inputs)
	if (locale === "it") return it_settings_image_type(inputs)
	if (locale === "nl") return nl_settings_image_type(inputs)
	if (locale === "pl") return pl_settings_image_type(inputs)
	if (locale === "pt") return pt_settings_image_type(inputs)
	if (locale === "ru") return ru_settings_image_type(inputs)
	if (locale === "sv") return sv_settings_image_type(inputs)
	if (locale === "tr") return tr_settings_image_type(inputs)
	if (locale === "zh") return zh_settings_image_type(inputs)
	if (locale === "ja") return ja_settings_image_type(inputs)
	return en_settings_image_type(inputs)
});
