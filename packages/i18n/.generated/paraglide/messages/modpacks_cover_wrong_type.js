/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Cover_Wrong_TypeInputs */

const en_modpacks_cover_wrong_type = /** @type {(inputs: Modpacks_Cover_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use a PNG, JPEG or WebP image.`)
};

const es_modpacks_cover_wrong_type = /** @type {(inputs: Modpacks_Cover_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa una imagen PNG, JPEG o WebP.`)
};

const de_modpacks_cover_wrong_type = /** @type {(inputs: Modpacks_Cover_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwende ein PNG-, JPEG- oder WebP-Bild.`)
};

const fr_modpacks_cover_wrong_type = /** @type {(inputs: Modpacks_Cover_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez une image PNG, JPEG ou WebP.`)
};

const it_modpacks_cover_wrong_type = /** @type {(inputs: Modpacks_Cover_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa un’immagine PNG, JPEG o WebP.`)
};

const nl_modpacks_cover_wrong_type = /** @type {(inputs: Modpacks_Cover_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik een PNG-, JPEG- of WebP-afbeelding.`)
};

const pl_modpacks_cover_wrong_type = /** @type {(inputs: Modpacks_Cover_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj obrazu PNG, JPEG lub WebP.`)
};

const pt_modpacks_cover_wrong_type = /** @type {(inputs: Modpacks_Cover_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use uma imagem PNG, JPEG ou WebP.`)
};

const ru_modpacks_cover_wrong_type = /** @type {(inputs: Modpacks_Cover_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Используйте изображение PNG, JPEG или WebP.`)
};

const sv_modpacks_cover_wrong_type = /** @type {(inputs: Modpacks_Cover_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd en PNG-, JPEG- eller WebP-bild.`)
};

const tr_modpacks_cover_wrong_type = /** @type {(inputs: Modpacks_Cover_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG, JPEG veya WebP görsel kullan.`)
};

const zh_modpacks_cover_wrong_type = /** @type {(inputs: Modpacks_Cover_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请使用 PNG、JPEG 或 WebP 图片。`)
};

const ja_modpacks_cover_wrong_type = /** @type {(inputs: Modpacks_Cover_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG、JPEG、WebP 画像を使用してください。`)
};

/**
* | output |
* | --- |
* | "Use a PNG, JPEG or WebP image." |
*
* @param {Modpacks_Cover_Wrong_TypeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_cover_wrong_type = /** @type {((inputs?: Modpacks_Cover_Wrong_TypeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Cover_Wrong_TypeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_cover_wrong_type(inputs)
	if (locale === "de") return de_modpacks_cover_wrong_type(inputs)
	if (locale === "fr") return fr_modpacks_cover_wrong_type(inputs)
	if (locale === "it") return it_modpacks_cover_wrong_type(inputs)
	if (locale === "nl") return nl_modpacks_cover_wrong_type(inputs)
	if (locale === "pl") return pl_modpacks_cover_wrong_type(inputs)
	if (locale === "pt") return pt_modpacks_cover_wrong_type(inputs)
	if (locale === "ru") return ru_modpacks_cover_wrong_type(inputs)
	if (locale === "sv") return sv_modpacks_cover_wrong_type(inputs)
	if (locale === "tr") return tr_modpacks_cover_wrong_type(inputs)
	if (locale === "zh") return zh_modpacks_cover_wrong_type(inputs)
	if (locale === "ja") return ja_modpacks_cover_wrong_type(inputs)
	return en_modpacks_cover_wrong_type(inputs)
});
