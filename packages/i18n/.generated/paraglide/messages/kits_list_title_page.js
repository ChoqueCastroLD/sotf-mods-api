/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown>, page: NonNullable<unknown> }} Kits_List_Title_PageInputs */

const en_kits_list_title_page = /** @type {(inputs: Kits_List_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — page ${i?.page}`)
};

const es_kits_list_title_page = /** @type {(inputs: Kits_List_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — página ${i?.page}`)
};

const de_kits_list_title_page = /** @type {(inputs: Kits_List_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — Seite ${i?.page}`)
};

const fr_kits_list_title_page = /** @type {(inputs: Kits_List_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — page ${i?.page}`)
};

const it_kits_list_title_page = /** @type {(inputs: Kits_List_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — pagina ${i?.page}`)
};

const nl_kits_list_title_page = /** @type {(inputs: Kits_List_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — pagina ${i?.page}`)
};

const pl_kits_list_title_page = /** @type {(inputs: Kits_List_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — strona ${i?.page}`)
};

const pt_kits_list_title_page = /** @type {(inputs: Kits_List_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — página ${i?.page}`)
};

const ru_kits_list_title_page = /** @type {(inputs: Kits_List_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — страница ${i?.page}`)
};

const sv_kits_list_title_page = /** @type {(inputs: Kits_List_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — sida ${i?.page}`)
};

const tr_kits_list_title_page = /** @type {(inputs: Kits_List_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — sayfa ${i?.page}`)
};

const zh_kits_list_title_page = /** @type {(inputs: Kits_List_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — 第 ${i?.page} 页`)
};

const ja_kits_list_title_page = /** @type {(inputs: Kits_List_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} — ${i?.page} ページ目`)
};

/**
* | output |
* | --- |
* | "{title} — page {page}" |
*
* @param {Kits_List_Title_PageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_list_title_page = /** @type {((inputs: Kits_List_Title_PageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_List_Title_PageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_list_title_page(inputs)
	if (locale === "de") return de_kits_list_title_page(inputs)
	if (locale === "fr") return fr_kits_list_title_page(inputs)
	if (locale === "it") return it_kits_list_title_page(inputs)
	if (locale === "nl") return nl_kits_list_title_page(inputs)
	if (locale === "pl") return pl_kits_list_title_page(inputs)
	if (locale === "pt") return pt_kits_list_title_page(inputs)
	if (locale === "ru") return ru_kits_list_title_page(inputs)
	if (locale === "sv") return sv_kits_list_title_page(inputs)
	if (locale === "tr") return tr_kits_list_title_page(inputs)
	if (locale === "zh") return zh_kits_list_title_page(inputs)
	if (locale === "ja") return ja_kits_list_title_page(inputs)
	return en_kits_list_title_page(inputs)
});
