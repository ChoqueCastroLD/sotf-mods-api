/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Sum_SizeInputs */

const en_logs_sum_size = /** @type {(inputs: Logs_Sum_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Size`)
};

const es_logs_sum_size = /** @type {(inputs: Logs_Sum_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamaño`)
};

const de_logs_sum_size = /** @type {(inputs: Logs_Sum_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Größe`)
};

const fr_logs_sum_size = /** @type {(inputs: Logs_Sum_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taille`)
};

const it_logs_sum_size = /** @type {(inputs: Logs_Sum_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dimensione`)
};

const nl_logs_sum_size = /** @type {(inputs: Logs_Sum_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grootte`)
};

const pl_logs_sum_size = /** @type {(inputs: Logs_Sum_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozmiar`)
};

const pt_logs_sum_size = /** @type {(inputs: Logs_Sum_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamanho`)
};

const ru_logs_sum_size = /** @type {(inputs: Logs_Sum_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Размер`)
};

const sv_logs_sum_size = /** @type {(inputs: Logs_Sum_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Storlek`)
};

const tr_logs_sum_size = /** @type {(inputs: Logs_Sum_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Boyut`)
};

const zh_logs_sum_size = /** @type {(inputs: Logs_Sum_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`大小`)
};

const ja_logs_sum_size = /** @type {(inputs: Logs_Sum_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイズ`)
};

/**
* | output |
* | --- |
* | "Size" |
*
* @param {Logs_Sum_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_sum_size = /** @type {((inputs?: Logs_Sum_SizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Sum_SizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_sum_size(inputs)
	if (locale === "de") return de_logs_sum_size(inputs)
	if (locale === "fr") return fr_logs_sum_size(inputs)
	if (locale === "it") return it_logs_sum_size(inputs)
	if (locale === "nl") return nl_logs_sum_size(inputs)
	if (locale === "pl") return pl_logs_sum_size(inputs)
	if (locale === "pt") return pt_logs_sum_size(inputs)
	if (locale === "ru") return ru_logs_sum_size(inputs)
	if (locale === "sv") return sv_logs_sum_size(inputs)
	if (locale === "tr") return tr_logs_sum_size(inputs)
	if (locale === "zh") return zh_logs_sum_size(inputs)
	if (locale === "ja") return ja_logs_sum_size(inputs)
	return en_logs_sum_size(inputs)
});
