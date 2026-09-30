/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_TitleInputs */

const en_content_brand_title = /** @type {(inputs: Content_Brand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods brand`)
};

const es_content_brand_title = /** @type {(inputs: Content_Brand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marca de SOTF Mods`)
};

const de_content_brand_title = /** @type {(inputs: Content_Brand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Marke SOTF Mods`)
};

const fr_content_brand_title = /** @type {(inputs: Content_Brand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La marque SOTF Mods`)
};

const it_content_brand_title = /** @type {(inputs: Content_Brand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il marchio SOTF Mods`)
};

const nl_content_brand_title = /** @type {(inputs: Content_Brand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het merk SOTF Mods`)
};

const pl_content_brand_title = /** @type {(inputs: Content_Brand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marka SOTF Mods`)
};

const pt_content_brand_title = /** @type {(inputs: Content_Brand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A marca SOTF Mods`)
};

const ru_content_brand_title = /** @type {(inputs: Content_Brand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Бренд SOTF Mods`)
};

const sv_content_brand_title = /** @type {(inputs: Content_Brand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varumärket SOTF Mods`)
};

const tr_content_brand_title = /** @type {(inputs: Content_Brand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods markası`)
};

const zh_content_brand_title = /** @type {(inputs: Content_Brand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods 品牌`)
};

const ja_content_brand_title = /** @type {(inputs: Content_Brand_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods のブランド`)
};

/**
* | output |
* | --- |
* | "SOTF Mods brand" |
*
* @param {Content_Brand_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_title = /** @type {((inputs?: Content_Brand_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_title(inputs)
	if (locale === "de") return de_content_brand_title(inputs)
	if (locale === "fr") return fr_content_brand_title(inputs)
	if (locale === "it") return it_content_brand_title(inputs)
	if (locale === "nl") return nl_content_brand_title(inputs)
	if (locale === "pl") return pl_content_brand_title(inputs)
	if (locale === "pt") return pt_content_brand_title(inputs)
	if (locale === "ru") return ru_content_brand_title(inputs)
	if (locale === "sv") return sv_content_brand_title(inputs)
	if (locale === "tr") return tr_content_brand_title(inputs)
	if (locale === "zh") return zh_content_brand_title(inputs)
	if (locale === "ja") return ja_content_brand_title(inputs)
	return en_content_brand_title(inputs)
});
