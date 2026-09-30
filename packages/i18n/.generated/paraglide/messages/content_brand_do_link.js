/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Do_LinkInputs */

const en_content_brand_do_link = /** @type {(inputs: Content_Brand_Do_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link the logo to sotf-mods.com.`)
};

const es_content_brand_do_link = /** @type {(inputs: Content_Brand_Do_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlaza el logo a sotf-mods.com.`)
};

const de_content_brand_do_link = /** @type {(inputs: Content_Brand_Do_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verlinke das Logo auf sotf-mods.com.`)
};

const fr_content_brand_do_link = /** @type {(inputs: Content_Brand_Do_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faites pointer le logo vers sotf-mods.com.`)
};

const it_content_brand_do_link = /** @type {(inputs: Content_Brand_Do_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collega il logo a sotf-mods.com.`)
};

const nl_content_brand_do_link = /** @type {(inputs: Content_Brand_Do_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laat het logo naar sotf-mods.com linken.`)
};

const pl_content_brand_do_link = /** @type {(inputs: Content_Brand_Do_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linkuj logo do sotf-mods.com.`)
};

const pt_content_brand_do_link = /** @type {(inputs: Content_Brand_Do_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faça o logo apontar para sotf-mods.com.`)
};

const ru_content_brand_do_link = /** @type {(inputs: Content_Brand_Do_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Делайте логотип ссылкой на sotf-mods.com.`)
};

const sv_content_brand_do_link = /** @type {(inputs: Content_Brand_Do_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länka logotypen till sotf-mods.com.`)
};

const tr_content_brand_do_link = /** @type {(inputs: Content_Brand_Do_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logoyu sotf-mods.com’a bağla.`)
};

const zh_content_brand_do_link = /** @type {(inputs: Content_Brand_Do_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`将标志链接到 sotf-mods.com。`)
};

const ja_content_brand_do_link = /** @type {(inputs: Content_Brand_Do_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ロゴは sotf-mods.com にリンクしてください。`)
};

/**
* | output |
* | --- |
* | "Link the logo to sotf-mods.com." |
*
* @param {Content_Brand_Do_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_do_link = /** @type {((inputs?: Content_Brand_Do_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Do_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_do_link(inputs)
	if (locale === "de") return de_content_brand_do_link(inputs)
	if (locale === "fr") return fr_content_brand_do_link(inputs)
	if (locale === "it") return it_content_brand_do_link(inputs)
	if (locale === "nl") return nl_content_brand_do_link(inputs)
	if (locale === "pl") return pl_content_brand_do_link(inputs)
	if (locale === "pt") return pt_content_brand_do_link(inputs)
	if (locale === "ru") return ru_content_brand_do_link(inputs)
	if (locale === "sv") return sv_content_brand_do_link(inputs)
	if (locale === "tr") return tr_content_brand_do_link(inputs)
	if (locale === "zh") return zh_content_brand_do_link(inputs)
	if (locale === "ja") return ja_content_brand_do_link(inputs)
	return en_content_brand_do_link(inputs)
});
