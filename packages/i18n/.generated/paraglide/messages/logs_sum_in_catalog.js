/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Sum_In_CatalogInputs */

const en_logs_sum_in_catalog = /** @type {(inputs: Logs_Sum_In_CatalogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listed in the catalog`)
};

const es_logs_sum_in_catalog = /** @type {(inputs: Logs_Sum_In_CatalogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Está en el catálogo`)
};

const de_logs_sum_in_catalog = /** @type {(inputs: Logs_Sum_In_CatalogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Im Katalog gelistet`)
};

const fr_logs_sum_in_catalog = /** @type {(inputs: Logs_Sum_In_CatalogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Présent dans le catalogue`)
};

const it_logs_sum_in_catalog = /** @type {(inputs: Logs_Sum_In_CatalogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Presente nel catalogo`)
};

const nl_logs_sum_in_catalog = /** @type {(inputs: Logs_Sum_In_CatalogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Staat in de catalogus`)
};

const pl_logs_sum_in_catalog = /** @type {(inputs: Logs_Sum_In_CatalogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jest w katalogu`)
};

const pt_logs_sum_in_catalog = /** @type {(inputs: Logs_Sum_In_CatalogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Existe no catálogo`)
};

const ru_logs_sum_in_catalog = /** @type {(inputs: Logs_Sum_In_CatalogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Есть в каталоге`)
};

const sv_logs_sum_in_catalog = /** @type {(inputs: Logs_Sum_In_CatalogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finns i katalogen`)
};

const tr_logs_sum_in_catalog = /** @type {(inputs: Logs_Sum_In_CatalogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Katalogda var`)
};

const zh_logs_sum_in_catalog = /** @type {(inputs: Logs_Sum_In_CatalogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已在目录中`)
};

const ja_logs_sum_in_catalog = /** @type {(inputs: Logs_Sum_In_CatalogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カタログにあります`)
};

/**
* | output |
* | --- |
* | "Listed in the catalog" |
*
* @param {Logs_Sum_In_CatalogInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_sum_in_catalog = /** @type {((inputs?: Logs_Sum_In_CatalogInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Sum_In_CatalogInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_sum_in_catalog(inputs)
	if (locale === "de") return de_logs_sum_in_catalog(inputs)
	if (locale === "fr") return fr_logs_sum_in_catalog(inputs)
	if (locale === "it") return it_logs_sum_in_catalog(inputs)
	if (locale === "nl") return nl_logs_sum_in_catalog(inputs)
	if (locale === "pl") return pl_logs_sum_in_catalog(inputs)
	if (locale === "pt") return pt_logs_sum_in_catalog(inputs)
	if (locale === "ru") return ru_logs_sum_in_catalog(inputs)
	if (locale === "sv") return sv_logs_sum_in_catalog(inputs)
	if (locale === "tr") return tr_logs_sum_in_catalog(inputs)
	if (locale === "zh") return zh_logs_sum_in_catalog(inputs)
	if (locale === "ja") return ja_logs_sum_in_catalog(inputs)
	return en_logs_sum_in_catalog(inputs)
});
