/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ page: NonNullable<unknown>, total: NonNullable<unknown> }} Common_Pagination_Page_OfInputs */

const en_common_pagination_page_of = /** @type {(inputs: Common_Pagination_Page_OfInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("en", i?.page, {});
	const total__number = registry.number("en", i?.total, {});return /** @type {LocalizedString} */ (`Page ${page__number} of ${total__number}`)
};

const es_common_pagination_page_of = /** @type {(inputs: Common_Pagination_Page_OfInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("es", i?.page, {});
	const total__number = registry.number("es", i?.total, {});return /** @type {LocalizedString} */ (`Página ${page__number} de ${total__number}`)
};

const de_common_pagination_page_of = /** @type {(inputs: Common_Pagination_Page_OfInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("de", i?.page, {});
	const total__number = registry.number("de", i?.total, {});return /** @type {LocalizedString} */ (`Seite ${page__number} von ${total__number}`)
};

const fr_common_pagination_page_of = /** @type {(inputs: Common_Pagination_Page_OfInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("fr", i?.page, {});
	const total__number = registry.number("fr", i?.total, {});return /** @type {LocalizedString} */ (`Page ${page__number} sur ${total__number}`)
};

const it_common_pagination_page_of = /** @type {(inputs: Common_Pagination_Page_OfInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("it", i?.page, {});
	const total__number = registry.number("it", i?.total, {});return /** @type {LocalizedString} */ (`Pagina ${page__number} di ${total__number}`)
};

const nl_common_pagination_page_of = /** @type {(inputs: Common_Pagination_Page_OfInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("nl", i?.page, {});
	const total__number = registry.number("nl", i?.total, {});return /** @type {LocalizedString} */ (`Pagina ${page__number} van ${total__number}`)
};

const pl_common_pagination_page_of = /** @type {(inputs: Common_Pagination_Page_OfInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("pl", i?.page, {});
	const total__number = registry.number("pl", i?.total, {});return /** @type {LocalizedString} */ (`Strona ${page__number} z ${total__number}`)
};

const pt_common_pagination_page_of = /** @type {(inputs: Common_Pagination_Page_OfInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("pt", i?.page, {});
	const total__number = registry.number("pt", i?.total, {});return /** @type {LocalizedString} */ (`Página ${page__number} de ${total__number}`)
};

const ru_common_pagination_page_of = /** @type {(inputs: Common_Pagination_Page_OfInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("ru", i?.page, {});
	const total__number = registry.number("ru", i?.total, {});return /** @type {LocalizedString} */ (`Страница ${page__number} из ${total__number}`)
};

const sv_common_pagination_page_of = /** @type {(inputs: Common_Pagination_Page_OfInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("sv", i?.page, {});
	const total__number = registry.number("sv", i?.total, {});return /** @type {LocalizedString} */ (`Sida ${page__number} av ${total__number}`)
};

const tr_common_pagination_page_of = /** @type {(inputs: Common_Pagination_Page_OfInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("tr", i?.page, {});
	const total__number = registry.number("tr", i?.total, {});return /** @type {LocalizedString} */ (`Sayfa ${page__number} / ${total__number}`)
};

const zh_common_pagination_page_of = /** @type {(inputs: Common_Pagination_Page_OfInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("zh", i?.page, {});
	const total__number = registry.number("zh", i?.total, {});return /** @type {LocalizedString} */ (`第 ${page__number} 页，共 ${total__number} 页`)
};

const ja_common_pagination_page_of = /** @type {(inputs: Common_Pagination_Page_OfInputs) => LocalizedString} */ (i) => {
	const page__number = registry.number("ja", i?.page, {});
	const total__number = registry.number("ja", i?.total, {});return /** @type {LocalizedString} */ (`${total__number} ページ中 ${page__number} ページ`)
};

/**
* | output |
* | --- |
* | "Page {page__number} of {total__number}" |
*
* @param {Common_Pagination_Page_OfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_pagination_page_of = /** @type {((inputs: Common_Pagination_Page_OfInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Pagination_Page_OfInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_pagination_page_of(inputs)
	if (locale === "de") return de_common_pagination_page_of(inputs)
	if (locale === "fr") return fr_common_pagination_page_of(inputs)
	if (locale === "it") return it_common_pagination_page_of(inputs)
	if (locale === "nl") return nl_common_pagination_page_of(inputs)
	if (locale === "pl") return pl_common_pagination_page_of(inputs)
	if (locale === "pt") return pt_common_pagination_page_of(inputs)
	if (locale === "ru") return ru_common_pagination_page_of(inputs)
	if (locale === "sv") return sv_common_pagination_page_of(inputs)
	if (locale === "tr") return tr_common_pagination_page_of(inputs)
	if (locale === "zh") return zh_common_pagination_page_of(inputs)
	if (locale === "ja") return ja_common_pagination_page_of(inputs)
	return en_common_pagination_page_of(inputs)
});
