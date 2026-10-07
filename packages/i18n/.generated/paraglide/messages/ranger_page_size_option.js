/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Ranger_Page_Size_OptionInputs */

const en_ranger_page_size_option = /** @type {(inputs: Ranger_Page_Size_OptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} per page`)
};

const es_ranger_page_size_option = /** @type {(inputs: Ranger_Page_Size_OptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} por página`)
};

const de_ranger_page_size_option = /** @type {(inputs: Ranger_Page_Size_OptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} pro Seite`)
};

const fr_ranger_page_size_option = /** @type {(inputs: Ranger_Page_Size_OptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} par page`)
};

const it_ranger_page_size_option = /** @type {(inputs: Ranger_Page_Size_OptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} per pagina`)
};

const nl_ranger_page_size_option = /** @type {(inputs: Ranger_Page_Size_OptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} per pagina`)
};

const pl_ranger_page_size_option = /** @type {(inputs: Ranger_Page_Size_OptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} na stronę`)
};

const pt_ranger_page_size_option = /** @type {(inputs: Ranger_Page_Size_OptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} por página`)
};

const ru_ranger_page_size_option = /** @type {(inputs: Ranger_Page_Size_OptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`По ${i?.count} на странице`)
};

const sv_ranger_page_size_option = /** @type {(inputs: Ranger_Page_Size_OptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} per sida`)
};

const tr_ranger_page_size_option = /** @type {(inputs: Ranger_Page_Size_OptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sayfa başına ${i?.count}`)
};

const zh_ranger_page_size_option = /** @type {(inputs: Ranger_Page_Size_OptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`每页 ${i?.count} 项`)
};

const ja_ranger_page_size_option = /** @type {(inputs: Ranger_Page_Size_OptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 件ずつ`)
};

/**
* | output |
* | --- |
* | "{count} per page" |
*
* @param {Ranger_Page_Size_OptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_page_size_option = /** @type {((inputs: Ranger_Page_Size_OptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Page_Size_OptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_page_size_option(inputs)
	if (locale === "de") return de_ranger_page_size_option(inputs)
	if (locale === "fr") return fr_ranger_page_size_option(inputs)
	if (locale === "it") return it_ranger_page_size_option(inputs)
	if (locale === "nl") return nl_ranger_page_size_option(inputs)
	if (locale === "pl") return pl_ranger_page_size_option(inputs)
	if (locale === "pt") return pt_ranger_page_size_option(inputs)
	if (locale === "ru") return ru_ranger_page_size_option(inputs)
	if (locale === "sv") return sv_ranger_page_size_option(inputs)
	if (locale === "tr") return tr_ranger_page_size_option(inputs)
	if (locale === "zh") return zh_ranger_page_size_option(inputs)
	if (locale === "ja") return ja_ranger_page_size_option(inputs)
	return en_ranger_page_size_option(inputs)
});
