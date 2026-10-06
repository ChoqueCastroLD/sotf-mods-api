/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown>, page: NonNullable<unknown> }} Meta_Title_PagedInputs */

const en_meta_title_paged = /** @type {(inputs: Meta_Title_PagedInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("en", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} (page ${page__number})`)
};

const es_meta_title_paged = /** @type {(inputs: Meta_Title_PagedInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("es", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} (página ${page__number})`)
};

const de_meta_title_paged = /** @type {(inputs: Meta_Title_PagedInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("de", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} (Seite ${page__number})`)
};

const fr_meta_title_paged = /** @type {(inputs: Meta_Title_PagedInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("fr", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} (page ${page__number})`)
};

const it_meta_title_paged = /** @type {(inputs: Meta_Title_PagedInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("it", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} (pagina ${page__number})`)
};

const nl_meta_title_paged = /** @type {(inputs: Meta_Title_PagedInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("nl", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} (pagina ${page__number})`)
};

const pl_meta_title_paged = /** @type {(inputs: Meta_Title_PagedInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("pl", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} (strona ${page__number})`)
};

const pt_meta_title_paged = /** @type {(inputs: Meta_Title_PagedInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("pt", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} (página ${page__number})`)
};

const ru_meta_title_paged = /** @type {(inputs: Meta_Title_PagedInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("ru", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} (страница ${page__number})`)
};

const sv_meta_title_paged = /** @type {(inputs: Meta_Title_PagedInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("sv", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} (sida ${page__number})`)
};

const tr_meta_title_paged = /** @type {(inputs: Meta_Title_PagedInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("tr", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title} (sayfa ${page__number})`)
};

const zh_meta_title_paged = /** @type {(inputs: Meta_Title_PagedInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("zh", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title}（第 ${page__number} 页）`)
};

const ja_meta_title_paged = /** @type {(inputs: Meta_Title_PagedInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("ja", i?.page, {});return /** @type {LocalizedString} */ (`${i?.title}（${page__number} ページ目）`)
};

/**
* | output |
* | --- |
* | "{title} (page {page__number})" |
*
* @param {Meta_Title_PagedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const meta_title_paged = /** @type {((inputs: Meta_Title_PagedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Title_PagedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_meta_title_paged(inputs)
	if (locale === "de") return de_meta_title_paged(inputs)
	if (locale === "fr") return fr_meta_title_paged(inputs)
	if (locale === "it") return it_meta_title_paged(inputs)
	if (locale === "nl") return nl_meta_title_paged(inputs)
	if (locale === "pl") return pl_meta_title_paged(inputs)
	if (locale === "pt") return pt_meta_title_paged(inputs)
	if (locale === "ru") return ru_meta_title_paged(inputs)
	if (locale === "sv") return sv_meta_title_paged(inputs)
	if (locale === "tr") return tr_meta_title_paged(inputs)
	if (locale === "zh") return zh_meta_title_paged(inputs)
	if (locale === "ja") return ja_meta_title_paged(inputs)
	return en_meta_title_paged(inputs)
});
