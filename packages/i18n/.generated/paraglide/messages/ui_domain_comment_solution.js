/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Comment_SolutionInputs */

const en_ui_domain_comment_solution = /** @type {(inputs: Ui_Domain_Comment_SolutionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solution`)
};

const es_ui_domain_comment_solution = /** @type {(inputs: Ui_Domain_Comment_SolutionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solución`)
};

const de_ui_domain_comment_solution = /** @type {(inputs: Ui_Domain_Comment_SolutionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lösung`)
};

const fr_ui_domain_comment_solution = /** @type {(inputs: Ui_Domain_Comment_SolutionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solution`)
};

const it_ui_domain_comment_solution = /** @type {(inputs: Ui_Domain_Comment_SolutionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soluzione`)
};

const nl_ui_domain_comment_solution = /** @type {(inputs: Ui_Domain_Comment_SolutionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oplossing`)
};

const pl_ui_domain_comment_solution = /** @type {(inputs: Ui_Domain_Comment_SolutionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozwiązanie`)
};

const pt_ui_domain_comment_solution = /** @type {(inputs: Ui_Domain_Comment_SolutionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solução`)
};

const ru_ui_domain_comment_solution = /** @type {(inputs: Ui_Domain_Comment_SolutionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Решение`)
};

const sv_ui_domain_comment_solution = /** @type {(inputs: Ui_Domain_Comment_SolutionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lösning`)
};

const tr_ui_domain_comment_solution = /** @type {(inputs: Ui_Domain_Comment_SolutionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çözüm`)
};

const zh_ui_domain_comment_solution = /** @type {(inputs: Ui_Domain_Comment_SolutionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解决方案`)
};

const ja_ui_domain_comment_solution = /** @type {(inputs: Ui_Domain_Comment_SolutionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解決策`)
};

/**
* | output |
* | --- |
* | "Solution" |
*
* @param {Ui_Domain_Comment_SolutionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_comment_solution = /** @type {((inputs?: Ui_Domain_Comment_SolutionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Comment_SolutionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_comment_solution(inputs)
	if (locale === "de") return de_ui_domain_comment_solution(inputs)
	if (locale === "fr") return fr_ui_domain_comment_solution(inputs)
	if (locale === "it") return it_ui_domain_comment_solution(inputs)
	if (locale === "nl") return nl_ui_domain_comment_solution(inputs)
	if (locale === "pl") return pl_ui_domain_comment_solution(inputs)
	if (locale === "pt") return pt_ui_domain_comment_solution(inputs)
	if (locale === "ru") return ru_ui_domain_comment_solution(inputs)
	if (locale === "sv") return sv_ui_domain_comment_solution(inputs)
	if (locale === "tr") return tr_ui_domain_comment_solution(inputs)
	if (locale === "zh") return zh_ui_domain_comment_solution(inputs)
	if (locale === "ja") return ja_ui_domain_comment_solution(inputs)
	return en_ui_domain_comment_solution(inputs)
});
