/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_PaginationInputs */

const en_ranger_pagination = /** @type {(inputs: Ranger_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pages`)
};

const es_ranger_pagination = /** @type {(inputs: Ranger_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Páginas`)
};

const de_ranger_pagination = /** @type {(inputs: Ranger_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seiten`)
};

const fr_ranger_pagination = /** @type {(inputs: Ranger_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pages`)
};

const it_ranger_pagination = /** @type {(inputs: Ranger_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagine`)
};

const nl_ranger_pagination = /** @type {(inputs: Ranger_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina’s`)
};

const pl_ranger_pagination = /** @type {(inputs: Ranger_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strony`)
};

const pt_ranger_pagination = /** @type {(inputs: Ranger_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Páginas`)
};

const ru_ranger_pagination = /** @type {(inputs: Ranger_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страницы`)
};

const sv_ranger_pagination = /** @type {(inputs: Ranger_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidor`)
};

const tr_ranger_pagination = /** @type {(inputs: Ranger_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfalar`)
};

const zh_ranger_pagination = /** @type {(inputs: Ranger_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分页`)
};

const ja_ranger_pagination = /** @type {(inputs: Ranger_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページ`)
};

/**
* | output |
* | --- |
* | "Pages" |
*
* @param {Ranger_PaginationInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_pagination = /** @type {((inputs?: Ranger_PaginationInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_PaginationInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_pagination(inputs)
	if (locale === "de") return de_ranger_pagination(inputs)
	if (locale === "fr") return fr_ranger_pagination(inputs)
	if (locale === "it") return it_ranger_pagination(inputs)
	if (locale === "nl") return nl_ranger_pagination(inputs)
	if (locale === "pl") return pl_ranger_pagination(inputs)
	if (locale === "pt") return pt_ranger_pagination(inputs)
	if (locale === "ru") return ru_ranger_pagination(inputs)
	if (locale === "sv") return sv_ranger_pagination(inputs)
	if (locale === "tr") return tr_ranger_pagination(inputs)
	if (locale === "zh") return zh_ranger_pagination(inputs)
	if (locale === "ja") return ja_ranger_pagination(inputs)
	return en_ranger_pagination(inputs)
});
