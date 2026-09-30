/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Solution_UnmarkedInputs */

const en_social_solution_unmarked = /** @type {(inputs: Social_Solution_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solution mark removed.`)
};

const es_social_solution_unmarked = /** @type {(inputs: Social_Solution_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marca de solución quitada.`)
};

const de_social_solution_unmarked = /** @type {(inputs: Social_Solution_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lösungsmarkierung entfernt.`)
};

const fr_social_solution_unmarked = /** @type {(inputs: Social_Solution_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marque de solution retirée.`)
};

const it_social_solution_unmarked = /** @type {(inputs: Social_Solution_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segno di soluzione rimosso.`)
};

const nl_social_solution_unmarked = /** @type {(inputs: Social_Solution_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oplossingsmarkering verwijderd.`)
};

const pl_social_solution_unmarked = /** @type {(inputs: Social_Solution_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięto oznaczenie rozwiązania.`)
};

const pt_social_solution_unmarked = /** @type {(inputs: Social_Solution_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marca de solução removida.`)
};

const ru_social_solution_unmarked = /** @type {(inputs: Social_Solution_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отметка решения снята.`)
};

const sv_social_solution_unmarked = /** @type {(inputs: Social_Solution_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lösningsmarkeringen är borttagen.`)
};

const tr_social_solution_unmarked = /** @type {(inputs: Social_Solution_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çözüm işareti kaldırıldı.`)
};

const zh_social_solution_unmarked = /** @type {(inputs: Social_Solution_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已取消解决方案标记。`)
};

const ja_social_solution_unmarked = /** @type {(inputs: Social_Solution_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解決策のマークを外しました。`)
};

/**
* | output |
* | --- |
* | "Solution mark removed." |
*
* @param {Social_Solution_UnmarkedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_solution_unmarked = /** @type {((inputs?: Social_Solution_UnmarkedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Solution_UnmarkedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_solution_unmarked(inputs)
	if (locale === "de") return de_social_solution_unmarked(inputs)
	if (locale === "fr") return fr_social_solution_unmarked(inputs)
	if (locale === "it") return it_social_solution_unmarked(inputs)
	if (locale === "nl") return nl_social_solution_unmarked(inputs)
	if (locale === "pl") return pl_social_solution_unmarked(inputs)
	if (locale === "pt") return pt_social_solution_unmarked(inputs)
	if (locale === "ru") return ru_social_solution_unmarked(inputs)
	if (locale === "sv") return sv_social_solution_unmarked(inputs)
	if (locale === "tr") return tr_social_solution_unmarked(inputs)
	if (locale === "zh") return zh_social_solution_unmarked(inputs)
	if (locale === "ja") return ja_social_solution_unmarked(inputs)
	return en_social_solution_unmarked(inputs)
});
