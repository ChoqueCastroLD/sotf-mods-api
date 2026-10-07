/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Page_SizeInputs */

const en_ranger_page_size = /** @type {(inputs: Ranger_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per page`)
};

const es_ranger_page_size = /** @type {(inputs: Ranger_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por página`)
};

const de_ranger_page_size = /** @type {(inputs: Ranger_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pro Seite`)
};

const fr_ranger_page_size = /** @type {(inputs: Ranger_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Par page`)
};

const it_ranger_page_size = /** @type {(inputs: Ranger_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per pagina`)
};

const nl_ranger_page_size = /** @type {(inputs: Ranger_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per pagina`)
};

const pl_ranger_page_size = /** @type {(inputs: Ranger_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na stronę`)
};

const pt_ranger_page_size = /** @type {(inputs: Ranger_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por página`)
};

const ru_ranger_page_size = /** @type {(inputs: Ranger_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На странице`)
};

const sv_ranger_page_size = /** @type {(inputs: Ranger_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per sida`)
};

const tr_ranger_page_size = /** @type {(inputs: Ranger_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfa başına`)
};

const zh_ranger_page_size = /** @type {(inputs: Ranger_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每页数量`)
};

const ja_ranger_page_size = /** @type {(inputs: Ranger_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示件数`)
};

/**
* | output |
* | --- |
* | "Per page" |
*
* @param {Ranger_Page_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_page_size = /** @type {((inputs?: Ranger_Page_SizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Page_SizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_page_size(inputs)
	if (locale === "de") return de_ranger_page_size(inputs)
	if (locale === "fr") return fr_ranger_page_size(inputs)
	if (locale === "it") return it_ranger_page_size(inputs)
	if (locale === "nl") return nl_ranger_page_size(inputs)
	if (locale === "pl") return pl_ranger_page_size(inputs)
	if (locale === "pt") return pt_ranger_page_size(inputs)
	if (locale === "ru") return ru_ranger_page_size(inputs)
	if (locale === "sv") return sv_ranger_page_size(inputs)
	if (locale === "tr") return tr_ranger_page_size(inputs)
	if (locale === "zh") return zh_ranger_page_size(inputs)
	if (locale === "ja") return ja_ranger_page_size(inputs)
	return en_ranger_page_size(inputs)
});
