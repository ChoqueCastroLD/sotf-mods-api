/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_Scope_PlaceholderInputs */

const en_ranger_sanction_scope_placeholder = /** @type {(inputs: Ranger_Sanction_Scope_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search a mod or build`)
};

const es_ranger_sanction_scope_placeholder = /** @type {(inputs: Ranger_Sanction_Scope_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busca un mod o una build`)
};

const de_ranger_sanction_scope_placeholder = /** @type {(inputs: Ranger_Sanction_Scope_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod oder Build suchen`)
};

const fr_ranger_sanction_scope_placeholder = /** @type {(inputs: Ranger_Sanction_Scope_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher un mod ou un build`)
};

const it_ranger_sanction_scope_placeholder = /** @type {(inputs: Ranger_Sanction_Scope_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca una mod o una build`)
};

const nl_ranger_sanction_scope_placeholder = /** @type {(inputs: Ranger_Sanction_Scope_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoek een mod of build`)
};

const pl_ranger_sanction_scope_placeholder = /** @type {(inputs: Ranger_Sanction_Scope_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj moda lub buildu`)
};

const pt_ranger_sanction_scope_placeholder = /** @type {(inputs: Ranger_Sanction_Scope_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busque um mod ou build`)
};

const ru_ranger_sanction_scope_placeholder = /** @type {(inputs: Ranger_Sanction_Scope_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Найдите мод или постройку`)
};

const sv_ranger_sanction_scope_placeholder = /** @type {(inputs: Ranger_Sanction_Scope_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök en modd eller ett bygge`)
};

const tr_ranger_sanction_scope_placeholder = /** @type {(inputs: Ranger_Sanction_Scope_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod veya yapı ara`)
};

const zh_ranger_sanction_scope_placeholder = /** @type {(inputs: Ranger_Sanction_Scope_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索模组或建筑`)
};

const ja_ranger_sanction_scope_placeholder = /** @type {(inputs: Ranger_Sanction_Scope_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODまたは建築を検索`)
};

/**
* | output |
* | --- |
* | "Search a mod or build" |
*
* @param {Ranger_Sanction_Scope_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_scope_placeholder = /** @type {((inputs?: Ranger_Sanction_Scope_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Scope_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_scope_placeholder(inputs)
	if (locale === "de") return de_ranger_sanction_scope_placeholder(inputs)
	if (locale === "fr") return fr_ranger_sanction_scope_placeholder(inputs)
	if (locale === "it") return it_ranger_sanction_scope_placeholder(inputs)
	if (locale === "nl") return nl_ranger_sanction_scope_placeholder(inputs)
	if (locale === "pl") return pl_ranger_sanction_scope_placeholder(inputs)
	if (locale === "pt") return pt_ranger_sanction_scope_placeholder(inputs)
	if (locale === "ru") return ru_ranger_sanction_scope_placeholder(inputs)
	if (locale === "sv") return sv_ranger_sanction_scope_placeholder(inputs)
	if (locale === "tr") return tr_ranger_sanction_scope_placeholder(inputs)
	if (locale === "zh") return zh_ranger_sanction_scope_placeholder(inputs)
	if (locale === "ja") return ja_ranger_sanction_scope_placeholder(inputs)
	return en_ranger_sanction_scope_placeholder(inputs)
});
