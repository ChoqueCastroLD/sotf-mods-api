/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Colors_TitleInputs */

const en_content_brand_colors_title = /** @type {(inputs: Content_Brand_Colors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Colours`)
};

const es_content_brand_colors_title = /** @type {(inputs: Content_Brand_Colors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Colores`)
};

const de_content_brand_colors_title = /** @type {(inputs: Content_Brand_Colors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Farben`)
};

const fr_content_brand_colors_title = /** @type {(inputs: Content_Brand_Colors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couleurs`)
};

const it_content_brand_colors_title = /** @type {(inputs: Content_Brand_Colors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Colori`)
};

const nl_content_brand_colors_title = /** @type {(inputs: Content_Brand_Colors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kleuren`)
};

const pl_content_brand_colors_title = /** @type {(inputs: Content_Brand_Colors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kolory`)
};

const pt_content_brand_colors_title = /** @type {(inputs: Content_Brand_Colors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cores`)
};

const ru_content_brand_colors_title = /** @type {(inputs: Content_Brand_Colors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Цвета`)
};

const sv_content_brand_colors_title = /** @type {(inputs: Content_Brand_Colors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Färger`)
};

const tr_content_brand_colors_title = /** @type {(inputs: Content_Brand_Colors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Renkler`)
};

const zh_content_brand_colors_title = /** @type {(inputs: Content_Brand_Colors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配色`)
};

const ja_content_brand_colors_title = /** @type {(inputs: Content_Brand_Colors_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カラー`)
};

/**
* | output |
* | --- |
* | "Colours" |
*
* @param {Content_Brand_Colors_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_colors_title = /** @type {((inputs?: Content_Brand_Colors_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Colors_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_colors_title(inputs)
	if (locale === "de") return de_content_brand_colors_title(inputs)
	if (locale === "fr") return fr_content_brand_colors_title(inputs)
	if (locale === "it") return it_content_brand_colors_title(inputs)
	if (locale === "nl") return nl_content_brand_colors_title(inputs)
	if (locale === "pl") return pl_content_brand_colors_title(inputs)
	if (locale === "pt") return pt_content_brand_colors_title(inputs)
	if (locale === "ru") return ru_content_brand_colors_title(inputs)
	if (locale === "sv") return sv_content_brand_colors_title(inputs)
	if (locale === "tr") return tr_content_brand_colors_title(inputs)
	if (locale === "zh") return zh_content_brand_colors_title(inputs)
	if (locale === "ja") return ja_content_brand_colors_title(inputs)
	return en_content_brand_colors_title(inputs)
});
