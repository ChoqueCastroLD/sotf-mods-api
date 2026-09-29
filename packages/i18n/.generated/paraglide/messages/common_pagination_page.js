/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ page: NonNullable<unknown> }} Common_Pagination_PageInputs */

const en_common_pagination_page = /** @type {(inputs: Common_Pagination_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("en", i?.page, {});return /** @type {LocalizedString} */ (`Page ${page__number}`)
};

const es_common_pagination_page = /** @type {(inputs: Common_Pagination_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("es", i?.page, {});return /** @type {LocalizedString} */ (`Página ${page__number}`)
};

const de_common_pagination_page = /** @type {(inputs: Common_Pagination_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("de", i?.page, {});return /** @type {LocalizedString} */ (`Seite ${page__number}`)
};

const fr_common_pagination_page = /** @type {(inputs: Common_Pagination_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("fr", i?.page, {});return /** @type {LocalizedString} */ (`Page ${page__number}`)
};

const it_common_pagination_page = /** @type {(inputs: Common_Pagination_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("it", i?.page, {});return /** @type {LocalizedString} */ (`Pagina ${page__number}`)
};

const nl_common_pagination_page = /** @type {(inputs: Common_Pagination_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("nl", i?.page, {});return /** @type {LocalizedString} */ (`Pagina ${page__number}`)
};

const pl_common_pagination_page = /** @type {(inputs: Common_Pagination_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("pl", i?.page, {});return /** @type {LocalizedString} */ (`Strona ${page__number}`)
};

const pt_common_pagination_page = /** @type {(inputs: Common_Pagination_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("pt", i?.page, {});return /** @type {LocalizedString} */ (`Página ${page__number}`)
};

const ru_common_pagination_page = /** @type {(inputs: Common_Pagination_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("ru", i?.page, {});return /** @type {LocalizedString} */ (`Страница ${page__number}`)
};

const sv_common_pagination_page = /** @type {(inputs: Common_Pagination_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("sv", i?.page, {});return /** @type {LocalizedString} */ (`Sida ${page__number}`)
};

const tr_common_pagination_page = /** @type {(inputs: Common_Pagination_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("tr", i?.page, {});return /** @type {LocalizedString} */ (`Sayfa ${page__number}`)
};

const zh_common_pagination_page = /** @type {(inputs: Common_Pagination_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("zh", i?.page, {});return /** @type {LocalizedString} */ (`第 ${page__number} 页`)
};

const ja_common_pagination_page = /** @type {(inputs: Common_Pagination_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("ja", i?.page, {});return /** @type {LocalizedString} */ (`${page__number} ページ`)
};

/**
* | output |
* | --- |
* | "Page {page__number}" |
*
* @param {Common_Pagination_PageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_pagination_page = /** @type {((inputs: Common_Pagination_PageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Pagination_PageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_pagination_page(inputs)
	if (locale === "de") return de_common_pagination_page(inputs)
	if (locale === "fr") return fr_common_pagination_page(inputs)
	if (locale === "it") return it_common_pagination_page(inputs)
	if (locale === "nl") return nl_common_pagination_page(inputs)
	if (locale === "pl") return pl_common_pagination_page(inputs)
	if (locale === "pt") return pt_common_pagination_page(inputs)
	if (locale === "ru") return ru_common_pagination_page(inputs)
	if (locale === "sv") return sv_common_pagination_page(inputs)
	if (locale === "tr") return tr_common_pagination_page(inputs)
	if (locale === "zh") return zh_common_pagination_page(inputs)
	if (locale === "ja") return ja_common_pagination_page(inputs)
	return en_common_pagination_page(inputs)
});
