/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Color_LichenInputs */

const en_content_brand_color_lichen = /** @type {(inputs: Content_Brand_Color_LichenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lichen (works)`)
};

const es_content_brand_color_lichen = /** @type {(inputs: Content_Brand_Color_LichenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liquen (funciona)`)
};

const de_content_brand_color_lichen = /** @type {(inputs: Content_Brand_Color_LichenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lichen (funktioniert)`)
};

const fr_content_brand_color_lichen = /** @type {(inputs: Content_Brand_Color_LichenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lichen (fonctionne)`)
};

const it_content_brand_color_lichen = /** @type {(inputs: Content_Brand_Color_LichenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lichene (funziona)`)
};

const nl_content_brand_color_lichen = /** @type {(inputs: Content_Brand_Color_LichenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lichen (werkt)`)
};

const pl_content_brand_color_lichen = /** @type {(inputs: Content_Brand_Color_LichenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Porost (działa)`)
};

const pt_content_brand_color_lichen = /** @type {(inputs: Content_Brand_Color_LichenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Líquen (funciona)`)
};

const ru_content_brand_color_lichen = /** @type {(inputs: Content_Brand_Color_LichenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лишайник (работает)`)
};

const sv_content_brand_color_lichen = /** @type {(inputs: Content_Brand_Color_LichenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lichen (fungerar)`)
};

const tr_content_brand_color_lichen = /** @type {(inputs: Content_Brand_Color_LichenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lichen (çalışıyor)`)
};

const zh_content_brand_color_lichen = /** @type {(inputs: Content_Brand_Color_LichenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地衣（可用）`)
};

const ja_content_brand_color_lichen = /** @type {(inputs: Content_Brand_Color_LichenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lichen（動作）`)
};

/**
* | output |
* | --- |
* | "Lichen (works)" |
*
* @param {Content_Brand_Color_LichenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_color_lichen = /** @type {((inputs?: Content_Brand_Color_LichenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Color_LichenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_color_lichen(inputs)
	if (locale === "de") return de_content_brand_color_lichen(inputs)
	if (locale === "fr") return fr_content_brand_color_lichen(inputs)
	if (locale === "it") return it_content_brand_color_lichen(inputs)
	if (locale === "nl") return nl_content_brand_color_lichen(inputs)
	if (locale === "pl") return pl_content_brand_color_lichen(inputs)
	if (locale === "pt") return pt_content_brand_color_lichen(inputs)
	if (locale === "ru") return ru_content_brand_color_lichen(inputs)
	if (locale === "sv") return sv_content_brand_color_lichen(inputs)
	if (locale === "tr") return tr_content_brand_color_lichen(inputs)
	if (locale === "zh") return zh_content_brand_color_lichen(inputs)
	if (locale === "ja") return ja_content_brand_color_lichen(inputs)
	return en_content_brand_color_lichen(inputs)
});
