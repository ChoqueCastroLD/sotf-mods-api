/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Fact_TotalInputs */

const en_cmdk_fact_total = /** @type {(inputs: Cmdk_Fact_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Total downloads`)
};

const es_cmdk_fact_total = /** @type {(inputs: Cmdk_Fact_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas totales`)
};

const de_cmdk_fact_total = /** @type {(inputs: Cmdk_Fact_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads gesamt`)
};

const fr_cmdk_fact_total = /** @type {(inputs: Cmdk_Fact_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements totaux`)
};

const it_cmdk_fact_total = /** @type {(inputs: Cmdk_Fact_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download totali`)
};

const nl_cmdk_fact_total = /** @type {(inputs: Cmdk_Fact_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Totaal downloads`)
};

const pl_cmdk_fact_total = /** @type {(inputs: Cmdk_Fact_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania łącznie`)
};

const pt_cmdk_fact_total = /** @type {(inputs: Cmdk_Fact_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Total de transferências`)
};

const ru_cmdk_fact_total = /** @type {(inputs: Cmdk_Fact_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всего загрузок`)
};

const sv_cmdk_fact_total = /** @type {(inputs: Cmdk_Fact_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Totalt nedladdningar`)
};

const tr_cmdk_fact_total = /** @type {(inputs: Cmdk_Fact_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toplam indirme`)
};

const zh_cmdk_fact_total = /** @type {(inputs: Cmdk_Fact_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`总下载量`)
};

const ja_cmdk_fact_total = /** @type {(inputs: Cmdk_Fact_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`総ダウンロード数`)
};

/**
* | output |
* | --- |
* | "Total downloads" |
*
* @param {Cmdk_Fact_TotalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_fact_total = /** @type {((inputs?: Cmdk_Fact_TotalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Fact_TotalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_fact_total(inputs)
	if (locale === "de") return de_cmdk_fact_total(inputs)
	if (locale === "fr") return fr_cmdk_fact_total(inputs)
	if (locale === "it") return it_cmdk_fact_total(inputs)
	if (locale === "nl") return nl_cmdk_fact_total(inputs)
	if (locale === "pl") return pl_cmdk_fact_total(inputs)
	if (locale === "pt") return pt_cmdk_fact_total(inputs)
	if (locale === "ru") return ru_cmdk_fact_total(inputs)
	if (locale === "sv") return sv_cmdk_fact_total(inputs)
	if (locale === "tr") return tr_cmdk_fact_total(inputs)
	if (locale === "zh") return zh_cmdk_fact_total(inputs)
	if (locale === "ja") return ja_cmdk_fact_total(inputs)
	return en_cmdk_fact_total(inputs)
});
