/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown>, page: NonNullable<unknown> }} Requests_List_Title_PageInputs */

const en_requests_list_title_page = /** @type {(inputs: Requests_List_Title_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("en", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} — page ${page__number}`)
};

const es_requests_list_title_page = /** @type {(inputs: Requests_List_Title_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("es", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} — página ${page__number}`)
};

const de_requests_list_title_page = /** @type {(inputs: Requests_List_Title_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("de", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} — Seite ${page__number}`)
};

const fr_requests_list_title_page = /** @type {(inputs: Requests_List_Title_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("fr", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} — page ${page__number}`)
};

const it_requests_list_title_page = /** @type {(inputs: Requests_List_Title_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("it", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} — pagina ${page__number}`)
};

const nl_requests_list_title_page = /** @type {(inputs: Requests_List_Title_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("nl", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} — pagina ${page__number}`)
};

const pl_requests_list_title_page = /** @type {(inputs: Requests_List_Title_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("pl", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} — strona ${page__number}`)
};

const pt_requests_list_title_page = /** @type {(inputs: Requests_List_Title_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("pt", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} — página ${page__number}`)
};

const ru_requests_list_title_page = /** @type {(inputs: Requests_List_Title_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("ru", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} — страница ${page__number}`)
};

const sv_requests_list_title_page = /** @type {(inputs: Requests_List_Title_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("sv", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} — sida ${page__number}`)
};

const tr_requests_list_title_page = /** @type {(inputs: Requests_List_Title_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("tr", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} — sayfa ${page__number}`)
};

const zh_requests_list_title_page = /** @type {(inputs: Requests_List_Title_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("zh", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} — 第 ${page__number} 页`)
};

const ja_requests_list_title_page = /** @type {(inputs: Requests_List_Title_PageInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("ja", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} — ${page__number} ページ`)
};

/**
* | output |
* | --- |
* | "{title} — page {page__number}" |
*
* @param {Requests_List_Title_PageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_list_title_page = /** @type {((inputs: Requests_List_Title_PageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_List_Title_PageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_list_title_page(inputs)
	if (locale === "de") return de_requests_list_title_page(inputs)
	if (locale === "fr") return fr_requests_list_title_page(inputs)
	if (locale === "it") return it_requests_list_title_page(inputs)
	if (locale === "nl") return nl_requests_list_title_page(inputs)
	if (locale === "pl") return pl_requests_list_title_page(inputs)
	if (locale === "pt") return pt_requests_list_title_page(inputs)
	if (locale === "ru") return ru_requests_list_title_page(inputs)
	if (locale === "sv") return sv_requests_list_title_page(inputs)
	if (locale === "tr") return tr_requests_list_title_page(inputs)
	if (locale === "zh") return zh_requests_list_title_page(inputs)
	if (locale === "ja") return ja_requests_list_title_page(inputs)
	return en_requests_list_title_page(inputs)
});
