/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_EyebrowInputs */

const en_content_brand_eyebrow = /** @type {(inputs: Content_Brand_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brand kit`)
};

const es_content_brand_eyebrow = /** @type {(inputs: Content_Brand_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit de marca`)
};

const de_content_brand_eyebrow = /** @type {(inputs: Content_Brand_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brand-Kit`)
};

const fr_content_brand_eyebrow = /** @type {(inputs: Content_Brand_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit de marque`)
};

const it_content_brand_eyebrow = /** @type {(inputs: Content_Brand_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit del marchio`)
};

const nl_content_brand_eyebrow = /** @type {(inputs: Content_Brand_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Merkkit`)
};

const pl_content_brand_eyebrow = /** @type {(inputs: Content_Brand_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Materiały marki`)
};

const pt_content_brand_eyebrow = /** @type {(inputs: Content_Brand_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit da marca`)
};

const ru_content_brand_eyebrow = /** @type {(inputs: Content_Brand_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Брендбук`)
};

const sv_content_brand_eyebrow = /** @type {(inputs: Content_Brand_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varumärkeskit`)
};

const tr_content_brand_eyebrow = /** @type {(inputs: Content_Brand_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marka kiti`)
};

const zh_content_brand_eyebrow = /** @type {(inputs: Content_Brand_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`品牌素材`)
};

const ja_content_brand_eyebrow = /** @type {(inputs: Content_Brand_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ブランドキット`)
};

/**
* | output |
* | --- |
* | "Brand kit" |
*
* @param {Content_Brand_EyebrowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_eyebrow = /** @type {((inputs?: Content_Brand_EyebrowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_EyebrowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_eyebrow(inputs)
	if (locale === "de") return de_content_brand_eyebrow(inputs)
	if (locale === "fr") return fr_content_brand_eyebrow(inputs)
	if (locale === "it") return it_content_brand_eyebrow(inputs)
	if (locale === "nl") return nl_content_brand_eyebrow(inputs)
	if (locale === "pl") return pl_content_brand_eyebrow(inputs)
	if (locale === "pt") return pt_content_brand_eyebrow(inputs)
	if (locale === "ru") return ru_content_brand_eyebrow(inputs)
	if (locale === "sv") return sv_content_brand_eyebrow(inputs)
	if (locale === "tr") return tr_content_brand_eyebrow(inputs)
	if (locale === "zh") return zh_content_brand_eyebrow(inputs)
	if (locale === "ja") return ja_content_brand_eyebrow(inputs)
	return en_content_brand_eyebrow(inputs)
});
