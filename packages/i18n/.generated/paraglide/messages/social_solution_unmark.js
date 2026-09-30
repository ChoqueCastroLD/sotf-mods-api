/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Solution_UnmarkInputs */

const en_social_solution_unmark = /** @type {(inputs: Social_Solution_UnmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove solution mark`)
};

const es_social_solution_unmark = /** @type {(inputs: Social_Solution_UnmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar la marca de solución`)
};

const de_social_solution_unmark = /** @type {(inputs: Social_Solution_UnmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lösungsmarkierung entfernen`)
};

const fr_social_solution_unmark = /** @type {(inputs: Social_Solution_UnmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer la marque de solution`)
};

const it_social_solution_unmark = /** @type {(inputs: Social_Solution_UnmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi il segno di soluzione`)
};

const nl_social_solution_unmark = /** @type {(inputs: Social_Solution_UnmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oplossingsmarkering verwijderen`)
};

const pl_social_solution_unmark = /** @type {(inputs: Social_Solution_UnmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń oznaczenie rozwiązania`)
};

const pt_social_solution_unmark = /** @type {(inputs: Social_Solution_UnmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover a marca de solução`)
};

const ru_social_solution_unmark = /** @type {(inputs: Social_Solution_UnmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Снять отметку решения`)
};

const sv_social_solution_unmark = /** @type {(inputs: Social_Solution_UnmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort lösningsmarkeringen`)
};

const tr_social_solution_unmark = /** @type {(inputs: Social_Solution_UnmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çözüm işaretini kaldır`)
};

const zh_social_solution_unmark = /** @type {(inputs: Social_Solution_UnmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消解决方案标记`)
};

const ja_social_solution_unmark = /** @type {(inputs: Social_Solution_UnmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解決策のマークを外す`)
};

/**
* | output |
* | --- |
* | "Remove solution mark" |
*
* @param {Social_Solution_UnmarkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_solution_unmark = /** @type {((inputs?: Social_Solution_UnmarkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Solution_UnmarkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_solution_unmark(inputs)
	if (locale === "de") return de_social_solution_unmark(inputs)
	if (locale === "fr") return fr_social_solution_unmark(inputs)
	if (locale === "it") return it_social_solution_unmark(inputs)
	if (locale === "nl") return nl_social_solution_unmark(inputs)
	if (locale === "pl") return pl_social_solution_unmark(inputs)
	if (locale === "pt") return pt_social_solution_unmark(inputs)
	if (locale === "ru") return ru_social_solution_unmark(inputs)
	if (locale === "sv") return sv_social_solution_unmark(inputs)
	if (locale === "tr") return tr_social_solution_unmark(inputs)
	if (locale === "zh") return zh_social_solution_unmark(inputs)
	if (locale === "ja") return ja_social_solution_unmark(inputs)
	return en_social_solution_unmark(inputs)
});
