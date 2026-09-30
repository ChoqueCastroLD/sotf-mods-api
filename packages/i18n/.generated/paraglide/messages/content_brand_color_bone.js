/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Color_BoneInputs */

const en_content_brand_color_bone = /** @type {(inputs: Content_Brand_Color_BoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bone (text, Day background)`)
};

const es_content_brand_color_bone = /** @type {(inputs: Content_Brand_Color_BoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hueso (texto, fondo Día)`)
};

const de_content_brand_color_bone = /** @type {(inputs: Content_Brand_Color_BoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bone (Text, Day-Hintergrund)`)
};

const fr_content_brand_color_bone = /** @type {(inputs: Content_Brand_Color_BoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os (texte, fond Jour)`)
};

const it_content_brand_color_bone = /** @type {(inputs: Content_Brand_Color_BoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Osso (testo, sfondo Giorno)`)
};

const nl_content_brand_color_bone = /** @type {(inputs: Content_Brand_Color_BoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bone (tekst, Day-achtergrond)`)
};

const pl_content_brand_color_bone = /** @type {(inputs: Content_Brand_Color_BoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kość (tekst, tło Dzień)`)
};

const pt_content_brand_color_bone = /** @type {(inputs: Content_Brand_Color_BoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Osso (texto, fundo Dia)`)
};

const ru_content_brand_color_bone = /** @type {(inputs: Content_Brand_Color_BoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кость (текст, фон «День»)`)
};

const sv_content_brand_color_bone = /** @type {(inputs: Content_Brand_Color_BoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bone (text, Day-bakgrund)`)
};

const tr_content_brand_color_bone = /** @type {(inputs: Content_Brand_Color_BoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bone (metin, Day arka planı)`)
};

const zh_content_brand_color_bone = /** @type {(inputs: Content_Brand_Color_BoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`骨白（文字、日间背景）`)
};

const ja_content_brand_color_bone = /** @type {(inputs: Content_Brand_Color_BoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bone（文字、Day の背景）`)
};

/**
* | output |
* | --- |
* | "Bone (text, Day background)" |
*
* @param {Content_Brand_Color_BoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_color_bone = /** @type {((inputs?: Content_Brand_Color_BoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Color_BoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_color_bone(inputs)
	if (locale === "de") return de_content_brand_color_bone(inputs)
	if (locale === "fr") return fr_content_brand_color_bone(inputs)
	if (locale === "it") return it_content_brand_color_bone(inputs)
	if (locale === "nl") return nl_content_brand_color_bone(inputs)
	if (locale === "pl") return pl_content_brand_color_bone(inputs)
	if (locale === "pt") return pt_content_brand_color_bone(inputs)
	if (locale === "ru") return ru_content_brand_color_bone(inputs)
	if (locale === "sv") return sv_content_brand_color_bone(inputs)
	if (locale === "tr") return tr_content_brand_color_bone(inputs)
	if (locale === "zh") return zh_content_brand_color_bone(inputs)
	if (locale === "ja") return ja_content_brand_color_bone(inputs)
	return en_content_brand_color_bone(inputs)
});
