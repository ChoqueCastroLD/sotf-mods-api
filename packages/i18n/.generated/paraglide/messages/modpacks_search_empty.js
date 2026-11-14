/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Search_EmptyInputs */

const en_modpacks_search_empty = /** @type {(inputs: Modpacks_Search_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No approved mods match.`)
};

const es_modpacks_search_empty = /** @type {(inputs: Modpacks_Search_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ningún mod aprobado coincide.`)
};

const de_modpacks_search_empty = /** @type {(inputs: Modpacks_Search_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein freigegebener Mod passt.`)
};

const fr_modpacks_search_empty = /** @type {(inputs: Modpacks_Search_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun mod approuvé ne correspond.`)
};

const it_modpacks_search_empty = /** @type {(inputs: Modpacks_Search_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna mod approvata corrisponde.`)
};

const nl_modpacks_search_empty = /** @type {(inputs: Modpacks_Search_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen goedgekeurde mods gevonden.`)
};

const pl_modpacks_search_empty = /** @type {(inputs: Modpacks_Search_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak pasujących zatwierdzonych modów.`)
};

const pt_modpacks_search_empty = /** @type {(inputs: Modpacks_Search_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum mod aprovado corresponde.`)
};

const ru_modpacks_search_empty = /** @type {(inputs: Modpacks_Search_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подходящих одобренных модов нет.`)
};

const sv_modpacks_search_empty = /** @type {(inputs: Modpacks_Search_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga godkända moddar matchar.`)
};

const tr_modpacks_search_empty = /** @type {(inputs: Modpacks_Search_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eşleşen onaylı mod yok.`)
};

const zh_modpacks_search_empty = /** @type {(inputs: Modpacks_Search_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有匹配的已批准模组。`)
};

const ja_modpacks_search_empty = /** @type {(inputs: Modpacks_Search_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一致する承認済み Mod はありません。`)
};

/**
* | output |
* | --- |
* | "No approved mods match." |
*
* @param {Modpacks_Search_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_search_empty = /** @type {((inputs?: Modpacks_Search_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Search_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_search_empty(inputs)
	if (locale === "de") return de_modpacks_search_empty(inputs)
	if (locale === "fr") return fr_modpacks_search_empty(inputs)
	if (locale === "it") return it_modpacks_search_empty(inputs)
	if (locale === "nl") return nl_modpacks_search_empty(inputs)
	if (locale === "pl") return pl_modpacks_search_empty(inputs)
	if (locale === "pt") return pt_modpacks_search_empty(inputs)
	if (locale === "ru") return ru_modpacks_search_empty(inputs)
	if (locale === "sv") return sv_modpacks_search_empty(inputs)
	if (locale === "tr") return tr_modpacks_search_empty(inputs)
	if (locale === "zh") return zh_modpacks_search_empty(inputs)
	if (locale === "ja") return ja_modpacks_search_empty(inputs)
	return en_modpacks_search_empty(inputs)
});
