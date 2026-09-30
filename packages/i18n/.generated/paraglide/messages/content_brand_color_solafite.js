/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Color_SolafiteInputs */

const en_content_brand_color_solafite = /** @type {(inputs: Content_Brand_Color_SolafiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solafite (featured)`)
};

const es_content_brand_color_solafite = /** @type {(inputs: Content_Brand_Color_SolafiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solafita (destacado)`)
};

const de_content_brand_color_solafite = /** @type {(inputs: Content_Brand_Color_SolafiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solafite (hervorgehoben)`)
};

const fr_content_brand_color_solafite = /** @type {(inputs: Content_Brand_Color_SolafiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solafite (mis en avant)`)
};

const it_content_brand_color_solafite = /** @type {(inputs: Content_Brand_Color_SolafiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solafite (in evidenza)`)
};

const nl_content_brand_color_solafite = /** @type {(inputs: Content_Brand_Color_SolafiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solafite (uitgelicht)`)
};

const pl_content_brand_color_solafite = /** @type {(inputs: Content_Brand_Color_SolafiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solafit (wyróżnione)`)
};

const pt_content_brand_color_solafite = /** @type {(inputs: Content_Brand_Color_SolafiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solafita (destaque)`)
};

const ru_content_brand_color_solafite = /** @type {(inputs: Content_Brand_Color_SolafiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Солафит (избранное)`)
};

const sv_content_brand_color_solafite = /** @type {(inputs: Content_Brand_Color_SolafiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solafite (utvald)`)
};

const tr_content_brand_color_solafite = /** @type {(inputs: Content_Brand_Color_SolafiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solafite (öne çıkan)`)
};

const zh_content_brand_color_solafite = /** @type {(inputs: Content_Brand_Color_SolafiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`索拉石（精选）`)
};

const ja_content_brand_color_solafite = /** @type {(inputs: Content_Brand_Color_SolafiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solafite（注目）`)
};

/**
* | output |
* | --- |
* | "Solafite (featured)" |
*
* @param {Content_Brand_Color_SolafiteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_color_solafite = /** @type {((inputs?: Content_Brand_Color_SolafiteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Color_SolafiteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_color_solafite(inputs)
	if (locale === "de") return de_content_brand_color_solafite(inputs)
	if (locale === "fr") return fr_content_brand_color_solafite(inputs)
	if (locale === "it") return it_content_brand_color_solafite(inputs)
	if (locale === "nl") return nl_content_brand_color_solafite(inputs)
	if (locale === "pl") return pl_content_brand_color_solafite(inputs)
	if (locale === "pt") return pt_content_brand_color_solafite(inputs)
	if (locale === "ru") return ru_content_brand_color_solafite(inputs)
	if (locale === "sv") return sv_content_brand_color_solafite(inputs)
	if (locale === "tr") return tr_content_brand_color_solafite(inputs)
	if (locale === "zh") return zh_content_brand_color_solafite(inputs)
	if (locale === "ja") return ja_content_brand_color_solafite(inputs)
	return en_content_brand_color_solafite(inputs)
});
