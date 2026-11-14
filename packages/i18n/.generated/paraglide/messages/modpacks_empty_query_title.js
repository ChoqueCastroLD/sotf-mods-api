/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Modpacks_Empty_Query_TitleInputs */

const en_modpacks_empty_query_title = /** @type {(inputs: Modpacks_Empty_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No modpacks match “${i?.query}”`)
};

const es_modpacks_empty_query_title = /** @type {(inputs: Modpacks_Empty_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ningún modpack coincide con «${i?.query}»`)
};

const de_modpacks_empty_query_title = /** @type {(inputs: Modpacks_Empty_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Keine Modpacks zu „${i?.query}“`)
};

const fr_modpacks_empty_query_title = /** @type {(inputs: Modpacks_Empty_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aucun modpack ne correspond à « ${i?.query} »`)
};

const it_modpacks_empty_query_title = /** @type {(inputs: Modpacks_Empty_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nessun modpack corrisponde a «${i?.query}»`)
};

const nl_modpacks_empty_query_title = /** @type {(inputs: Modpacks_Empty_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geen modpacks gevonden voor ‘${i?.query}’`)
};

const pl_modpacks_empty_query_title = /** @type {(inputs: Modpacks_Empty_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Brak modpacków pasujących do „${i?.query}”`)
};

const pt_modpacks_empty_query_title = /** @type {(inputs: Modpacks_Empty_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nenhum modpack corresponde a “${i?.query}”`)
};

const ru_modpacks_empty_query_title = /** @type {(inputs: Modpacks_Empty_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Нет модпаков по запросу «${i?.query}»`)
};

const sv_modpacks_empty_query_title = /** @type {(inputs: Modpacks_Empty_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inga modpaket matchar ”${i?.query}”`)
};

const tr_modpacks_empty_query_title = /** @type {(inputs: Modpacks_Empty_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}” ile eşleşen mod paketi yok`)
};

const zh_modpacks_empty_query_title = /** @type {(inputs: Modpacks_Empty_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`没有与“${i?.query}”匹配的整合包`)
};

const ja_modpacks_empty_query_title = /** @type {(inputs: Modpacks_Empty_Query_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.query}」に一致する Modパックはありません`)
};

/**
* | output |
* | --- |
* | "No modpacks match “{query}”" |
*
* @param {Modpacks_Empty_Query_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_empty_query_title = /** @type {((inputs: Modpacks_Empty_Query_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Empty_Query_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_empty_query_title(inputs)
	if (locale === "de") return de_modpacks_empty_query_title(inputs)
	if (locale === "fr") return fr_modpacks_empty_query_title(inputs)
	if (locale === "it") return it_modpacks_empty_query_title(inputs)
	if (locale === "nl") return nl_modpacks_empty_query_title(inputs)
	if (locale === "pl") return pl_modpacks_empty_query_title(inputs)
	if (locale === "pt") return pt_modpacks_empty_query_title(inputs)
	if (locale === "ru") return ru_modpacks_empty_query_title(inputs)
	if (locale === "sv") return sv_modpacks_empty_query_title(inputs)
	if (locale === "tr") return tr_modpacks_empty_query_title(inputs)
	if (locale === "zh") return zh_modpacks_empty_query_title(inputs)
	if (locale === "ja") return ja_modpacks_empty_query_title(inputs)
	return en_modpacks_empty_query_title(inputs)
});
