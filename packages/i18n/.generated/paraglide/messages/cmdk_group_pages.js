/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Group_PagesInputs */

const en_cmdk_group_pages = /** @type {(inputs: Cmdk_Group_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pages`)
};

const es_cmdk_group_pages = /** @type {(inputs: Cmdk_Group_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Páginas`)
};

const de_cmdk_group_pages = /** @type {(inputs: Cmdk_Group_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seiten`)
};

const fr_cmdk_group_pages = /** @type {(inputs: Cmdk_Group_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pages`)
};

const it_cmdk_group_pages = /** @type {(inputs: Cmdk_Group_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagine`)
};

const nl_cmdk_group_pages = /** @type {(inputs: Cmdk_Group_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina’s`)
};

const pl_cmdk_group_pages = /** @type {(inputs: Cmdk_Group_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strony`)
};

const pt_cmdk_group_pages = /** @type {(inputs: Cmdk_Group_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Páginas`)
};

const ru_cmdk_group_pages = /** @type {(inputs: Cmdk_Group_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страницы`)
};

const sv_cmdk_group_pages = /** @type {(inputs: Cmdk_Group_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidor`)
};

const tr_cmdk_group_pages = /** @type {(inputs: Cmdk_Group_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfalar`)
};

const zh_cmdk_group_pages = /** @type {(inputs: Cmdk_Group_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面`)
};

const ja_cmdk_group_pages = /** @type {(inputs: Cmdk_Group_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページ`)
};

/**
* | output |
* | --- |
* | "Pages" |
*
* @param {Cmdk_Group_PagesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_group_pages = /** @type {((inputs?: Cmdk_Group_PagesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Group_PagesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_group_pages(inputs)
	if (locale === "de") return de_cmdk_group_pages(inputs)
	if (locale === "fr") return fr_cmdk_group_pages(inputs)
	if (locale === "it") return it_cmdk_group_pages(inputs)
	if (locale === "nl") return nl_cmdk_group_pages(inputs)
	if (locale === "pl") return pl_cmdk_group_pages(inputs)
	if (locale === "pt") return pt_cmdk_group_pages(inputs)
	if (locale === "ru") return ru_cmdk_group_pages(inputs)
	if (locale === "sv") return sv_cmdk_group_pages(inputs)
	if (locale === "tr") return tr_cmdk_group_pages(inputs)
	if (locale === "zh") return zh_cmdk_group_pages(inputs)
	if (locale === "ja") return ja_cmdk_group_pages(inputs)
	return en_cmdk_group_pages(inputs)
});
