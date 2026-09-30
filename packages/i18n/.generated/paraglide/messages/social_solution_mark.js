/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Solution_MarkInputs */

const en_social_solution_mark = /** @type {(inputs: Social_Solution_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mark as solution`)
};

const es_social_solution_mark = /** @type {(inputs: Social_Solution_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como solución`)
};

const de_social_solution_mark = /** @type {(inputs: Social_Solution_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als Lösung markieren`)
};

const fr_social_solution_mark = /** @type {(inputs: Social_Solution_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marquer comme solution`)
};

const it_social_solution_mark = /** @type {(inputs: Social_Solution_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segna come soluzione`)
};

const nl_social_solution_mark = /** @type {(inputs: Social_Solution_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markeren als oplossing`)
};

const pl_social_solution_mark = /** @type {(inputs: Social_Solution_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznacz jako rozwiązanie`)
};

const pt_social_solution_mark = /** @type {(inputs: Social_Solution_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como solução`)
};

const ru_social_solution_mark = /** @type {(inputs: Social_Solution_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отметить как решение`)
};

const sv_social_solution_mark = /** @type {(inputs: Social_Solution_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markera som lösning`)
};

const tr_social_solution_mark = /** @type {(inputs: Social_Solution_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çözüm olarak işaretle`)
};

const zh_social_solution_mark = /** @type {(inputs: Social_Solution_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标记为解决方案`)
};

const ja_social_solution_mark = /** @type {(inputs: Social_Solution_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解決策としてマーク`)
};

/**
* | output |
* | --- |
* | "Mark as solution" |
*
* @param {Social_Solution_MarkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_solution_mark = /** @type {((inputs?: Social_Solution_MarkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Solution_MarkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_solution_mark(inputs)
	if (locale === "de") return de_social_solution_mark(inputs)
	if (locale === "fr") return fr_social_solution_mark(inputs)
	if (locale === "it") return it_social_solution_mark(inputs)
	if (locale === "nl") return nl_social_solution_mark(inputs)
	if (locale === "pl") return pl_social_solution_mark(inputs)
	if (locale === "pt") return pt_social_solution_mark(inputs)
	if (locale === "ru") return ru_social_solution_mark(inputs)
	if (locale === "sv") return sv_social_solution_mark(inputs)
	if (locale === "tr") return tr_social_solution_mark(inputs)
	if (locale === "zh") return zh_social_solution_mark(inputs)
	if (locale === "ja") return ja_social_solution_mark(inputs)
	return en_social_solution_mark(inputs)
});
