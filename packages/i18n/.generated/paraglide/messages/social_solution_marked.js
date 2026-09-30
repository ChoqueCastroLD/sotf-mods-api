/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Solution_MarkedInputs */

const en_social_solution_marked = /** @type {(inputs: Social_Solution_MarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marked as the solution.`)
};

const es_social_solution_marked = /** @type {(inputs: Social_Solution_MarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcado como solución.`)
};

const de_social_solution_marked = /** @type {(inputs: Social_Solution_MarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als Lösung markiert.`)
};

const fr_social_solution_marked = /** @type {(inputs: Social_Solution_MarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marqué comme solution.`)
};

const it_social_solution_marked = /** @type {(inputs: Social_Solution_MarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnato come soluzione.`)
};

const nl_social_solution_marked = /** @type {(inputs: Social_Solution_MarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemarkeerd als oplossing.`)
};

const pl_social_solution_marked = /** @type {(inputs: Social_Solution_MarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznaczono jako rozwiązanie.`)
};

const pt_social_solution_marked = /** @type {(inputs: Social_Solution_MarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcado como solução.`)
};

const ru_social_solution_marked = /** @type {(inputs: Social_Solution_MarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмечено как решение.`)
};

const sv_social_solution_marked = /** @type {(inputs: Social_Solution_MarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markerad som lösning.`)
};

const tr_social_solution_marked = /** @type {(inputs: Social_Solution_MarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çözüm olarak işaretlendi.`)
};

const zh_social_solution_marked = /** @type {(inputs: Social_Solution_MarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已标记为解决方案。`)
};

const ja_social_solution_marked = /** @type {(inputs: Social_Solution_MarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解決策としてマークしました。`)
};

/**
* | output |
* | --- |
* | "Marked as the solution." |
*
* @param {Social_Solution_MarkedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_solution_marked = /** @type {((inputs?: Social_Solution_MarkedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Solution_MarkedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_solution_marked(inputs)
	if (locale === "de") return de_social_solution_marked(inputs)
	if (locale === "fr") return fr_social_solution_marked(inputs)
	if (locale === "it") return it_social_solution_marked(inputs)
	if (locale === "nl") return nl_social_solution_marked(inputs)
	if (locale === "pl") return pl_social_solution_marked(inputs)
	if (locale === "pt") return pt_social_solution_marked(inputs)
	if (locale === "ru") return ru_social_solution_marked(inputs)
	if (locale === "sv") return sv_social_solution_marked(inputs)
	if (locale === "tr") return tr_social_solution_marked(inputs)
	if (locale === "zh") return zh_social_solution_marked(inputs)
	if (locale === "ja") return ja_social_solution_marked(inputs)
	return en_social_solution_marked(inputs)
});
