/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Cmdk_See_AllInputs */

const en_cmdk_see_all = /** @type {(inputs: Cmdk_See_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`See all results for “${i?.query}”`)
};

const es_cmdk_see_all = /** @type {(inputs: Cmdk_See_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ver todos los resultados de «${i?.query}»`)
};

const de_cmdk_see_all = /** @type {(inputs: Cmdk_See_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Alle Ergebnisse für „${i?.query}“ anzeigen`)
};

const fr_cmdk_see_all = /** @type {(inputs: Cmdk_See_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Voir tous les résultats pour « ${i?.query} »`)
};

const it_cmdk_see_all = /** @type {(inputs: Cmdk_See_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vedi tutti i risultati per «${i?.query}»`)
};

const nl_cmdk_see_all = /** @type {(inputs: Cmdk_See_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Alle resultaten voor ‘${i?.query}’ bekijken`)
};

const pl_cmdk_see_all = /** @type {(inputs: Cmdk_See_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zobacz wszystkie wyniki dla „${i?.query}”`)
};

const pt_cmdk_see_all = /** @type {(inputs: Cmdk_See_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ver todos os resultados para “${i?.query}”`)
};

const ru_cmdk_see_all = /** @type {(inputs: Cmdk_See_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Все результаты по запросу «${i?.query}»`)
};

const sv_cmdk_see_all = /** @type {(inputs: Cmdk_See_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Visa alla resultat för ”${i?.query}”`)
};

const tr_cmdk_see_all = /** @type {(inputs: Cmdk_See_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}” için tüm sonuçları gör`)
};

const zh_cmdk_see_all = /** @type {(inputs: Cmdk_See_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`查看“${i?.query}”的全部结果`)
};

const ja_cmdk_see_all = /** @type {(inputs: Cmdk_See_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.query}」の結果をすべて表示`)
};

/**
* | output |
* | --- |
* | "See all results for “{query}”" |
*
* @param {Cmdk_See_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_see_all = /** @type {((inputs: Cmdk_See_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_See_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_see_all(inputs)
	if (locale === "de") return de_cmdk_see_all(inputs)
	if (locale === "fr") return fr_cmdk_see_all(inputs)
	if (locale === "it") return it_cmdk_see_all(inputs)
	if (locale === "nl") return nl_cmdk_see_all(inputs)
	if (locale === "pl") return pl_cmdk_see_all(inputs)
	if (locale === "pt") return pt_cmdk_see_all(inputs)
	if (locale === "ru") return ru_cmdk_see_all(inputs)
	if (locale === "sv") return sv_cmdk_see_all(inputs)
	if (locale === "tr") return tr_cmdk_see_all(inputs)
	if (locale === "zh") return zh_cmdk_see_all(inputs)
	if (locale === "ja") return ja_cmdk_see_all(inputs)
	return en_cmdk_see_all(inputs)
});
