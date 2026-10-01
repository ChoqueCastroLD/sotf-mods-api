/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Sum_ProblemsInputs */

const en_logs_sum_problems = /** @type {(inputs: Logs_Sum_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problems`)
};

const es_logs_sum_problems = /** @type {(inputs: Logs_Sum_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemas`)
};

const de_logs_sum_problems = /** @type {(inputs: Logs_Sum_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probleme`)
};

const fr_logs_sum_problems = /** @type {(inputs: Logs_Sum_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problèmes`)
};

const it_logs_sum_problems = /** @type {(inputs: Logs_Sum_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemi`)
};

const nl_logs_sum_problems = /** @type {(inputs: Logs_Sum_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemen`)
};

const pl_logs_sum_problems = /** @type {(inputs: Logs_Sum_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemy`)
};

const pt_logs_sum_problems = /** @type {(inputs: Logs_Sum_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemas`)
};

const ru_logs_sum_problems = /** @type {(inputs: Logs_Sum_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проблемы`)
};

const sv_logs_sum_problems = /** @type {(inputs: Logs_Sum_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problem`)
};

const tr_logs_sum_problems = /** @type {(inputs: Logs_Sum_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sorunlar`)
};

const zh_logs_sum_problems = /** @type {(inputs: Logs_Sum_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`问题`)
};

const ja_logs_sum_problems = /** @type {(inputs: Logs_Sum_ProblemsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`問題`)
};

/**
* | output |
* | --- |
* | "Problems" |
*
* @param {Logs_Sum_ProblemsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_sum_problems = /** @type {((inputs?: Logs_Sum_ProblemsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Sum_ProblemsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_sum_problems(inputs)
	if (locale === "de") return de_logs_sum_problems(inputs)
	if (locale === "fr") return fr_logs_sum_problems(inputs)
	if (locale === "it") return it_logs_sum_problems(inputs)
	if (locale === "nl") return nl_logs_sum_problems(inputs)
	if (locale === "pl") return pl_logs_sum_problems(inputs)
	if (locale === "pt") return pt_logs_sum_problems(inputs)
	if (locale === "ru") return ru_logs_sum_problems(inputs)
	if (locale === "sv") return sv_logs_sum_problems(inputs)
	if (locale === "tr") return tr_logs_sum_problems(inputs)
	if (locale === "zh") return zh_logs_sum_problems(inputs)
	if (locale === "ja") return ja_logs_sum_problems(inputs)
	return en_logs_sum_problems(inputs)
});
