/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Search_SubmitInputs */

const en_ranger_users_search_submit = /** @type {(inputs: Ranger_Users_Search_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search`)
};

const es_ranger_users_search_submit = /** @type {(inputs: Ranger_Users_Search_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar`)
};

const de_ranger_users_search_submit = /** @type {(inputs: Ranger_Users_Search_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suchen`)
};

const fr_ranger_users_search_submit = /** @type {(inputs: Ranger_Users_Search_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher`)
};

const it_ranger_users_search_submit = /** @type {(inputs: Ranger_Users_Search_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca`)
};

const nl_ranger_users_search_submit = /** @type {(inputs: Ranger_Users_Search_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken`)
};

const pl_ranger_users_search_submit = /** @type {(inputs: Ranger_Users_Search_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj`)
};

const pt_ranger_users_search_submit = /** @type {(inputs: Ranger_Users_Search_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar`)
};

const ru_ranger_users_search_submit = /** @type {(inputs: Ranger_Users_Search_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Найти`)
};

const sv_ranger_users_search_submit = /** @type {(inputs: Ranger_Users_Search_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök`)
};

const tr_ranger_users_search_submit = /** @type {(inputs: Ranger_Users_Search_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ara`)
};

const zh_ranger_users_search_submit = /** @type {(inputs: Ranger_Users_Search_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索`)
};

const ja_ranger_users_search_submit = /** @type {(inputs: Ranger_Users_Search_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索`)
};

/**
* | output |
* | --- |
* | "Search" |
*
* @param {Ranger_Users_Search_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_search_submit = /** @type {((inputs?: Ranger_Users_Search_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Search_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_search_submit(inputs)
	if (locale === "de") return de_ranger_users_search_submit(inputs)
	if (locale === "fr") return fr_ranger_users_search_submit(inputs)
	if (locale === "it") return it_ranger_users_search_submit(inputs)
	if (locale === "nl") return nl_ranger_users_search_submit(inputs)
	if (locale === "pl") return pl_ranger_users_search_submit(inputs)
	if (locale === "pt") return pt_ranger_users_search_submit(inputs)
	if (locale === "ru") return ru_ranger_users_search_submit(inputs)
	if (locale === "sv") return sv_ranger_users_search_submit(inputs)
	if (locale === "tr") return tr_ranger_users_search_submit(inputs)
	if (locale === "zh") return zh_ranger_users_search_submit(inputs)
	if (locale === "ja") return ja_ranger_users_search_submit(inputs)
	return en_ranger_users_search_submit(inputs)
});
