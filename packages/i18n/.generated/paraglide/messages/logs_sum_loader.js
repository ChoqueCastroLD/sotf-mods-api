/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Sum_LoaderInputs */

const en_logs_sum_loader = /** @type {(inputs: Logs_Sum_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loader`)
};

const es_logs_sum_loader = /** @type {(inputs: Logs_Sum_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargador`)
};

const de_logs_sum_loader = /** @type {(inputs: Logs_Sum_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loader`)
};

const fr_logs_sum_loader = /** @type {(inputs: Logs_Sum_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargeur`)
};

const it_logs_sum_loader = /** @type {(inputs: Logs_Sum_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loader`)
};

const nl_logs_sum_loader = /** @type {(inputs: Logs_Sum_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loader`)
};

const pl_logs_sum_loader = /** @type {(inputs: Logs_Sum_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loader`)
};

const pt_logs_sum_loader = /** @type {(inputs: Logs_Sum_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loader`)
};

const ru_logs_sum_loader = /** @type {(inputs: Logs_Sum_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузчик`)
};

const sv_logs_sum_loader = /** @type {(inputs: Logs_Sum_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loader`)
};

const tr_logs_sum_loader = /** @type {(inputs: Logs_Sum_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükleyici`)
};

const zh_logs_sum_loader = /** @type {(inputs: Logs_Sum_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载器`)
};

const ja_logs_sum_loader = /** @type {(inputs: Logs_Sum_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ローダー`)
};

/**
* | output |
* | --- |
* | "Loader" |
*
* @param {Logs_Sum_LoaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_sum_loader = /** @type {((inputs?: Logs_Sum_LoaderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Sum_LoaderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_sum_loader(inputs)
	if (locale === "de") return de_logs_sum_loader(inputs)
	if (locale === "fr") return fr_logs_sum_loader(inputs)
	if (locale === "it") return it_logs_sum_loader(inputs)
	if (locale === "nl") return nl_logs_sum_loader(inputs)
	if (locale === "pl") return pl_logs_sum_loader(inputs)
	if (locale === "pt") return pt_logs_sum_loader(inputs)
	if (locale === "ru") return ru_logs_sum_loader(inputs)
	if (locale === "sv") return sv_logs_sum_loader(inputs)
	if (locale === "tr") return tr_logs_sum_loader(inputs)
	if (locale === "zh") return zh_logs_sum_loader(inputs)
	if (locale === "ja") return ja_logs_sum_loader(inputs)
	return en_logs_sum_loader(inputs)
});
