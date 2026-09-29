/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Footer_BrandInputs */

const en_common_footer_brand = /** @type {(inputs: Common_Footer_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brand`)
};

const es_common_footer_brand = /** @type {(inputs: Common_Footer_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marca`)
};

const de_common_footer_brand = /** @type {(inputs: Common_Footer_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marke`)
};

const fr_common_footer_brand = /** @type {(inputs: Common_Footer_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marque`)
};

const it_common_footer_brand = /** @type {(inputs: Common_Footer_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marchio`)
};

const nl_common_footer_brand = /** @type {(inputs: Common_Footer_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Merk`)
};

const pl_common_footer_brand = /** @type {(inputs: Common_Footer_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marka`)
};

const pt_common_footer_brand = /** @type {(inputs: Common_Footer_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marca`)
};

const ru_common_footer_brand = /** @type {(inputs: Common_Footer_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Бренд`)
};

const sv_common_footer_brand = /** @type {(inputs: Common_Footer_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varumärke`)
};

const tr_common_footer_brand = /** @type {(inputs: Common_Footer_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marka`)
};

const zh_common_footer_brand = /** @type {(inputs: Common_Footer_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`品牌`)
};

const ja_common_footer_brand = /** @type {(inputs: Common_Footer_BrandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ブランド`)
};

/**
* | output |
* | --- |
* | "Brand" |
*
* @param {Common_Footer_BrandInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_footer_brand = /** @type {((inputs?: Common_Footer_BrandInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Footer_BrandInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_footer_brand(inputs)
	if (locale === "de") return de_common_footer_brand(inputs)
	if (locale === "fr") return fr_common_footer_brand(inputs)
	if (locale === "it") return it_common_footer_brand(inputs)
	if (locale === "nl") return nl_common_footer_brand(inputs)
	if (locale === "pl") return pl_common_footer_brand(inputs)
	if (locale === "pt") return pt_common_footer_brand(inputs)
	if (locale === "ru") return ru_common_footer_brand(inputs)
	if (locale === "sv") return sv_common_footer_brand(inputs)
	if (locale === "tr") return tr_common_footer_brand(inputs)
	if (locale === "zh") return zh_common_footer_brand(inputs)
	if (locale === "ja") return ja_common_footer_brand(inputs)
	return en_common_footer_brand(inputs)
});
