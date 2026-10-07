/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_No_MatchInputs */

const en_basecamp_versions_no_match = /** @type {(inputs: Basecamp_Versions_No_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No version matches this filter.`)
};

const es_basecamp_versions_no_match = /** @type {(inputs: Basecamp_Versions_No_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ninguna versión coincide con este filtro.`)
};

const de_basecamp_versions_no_match = /** @type {(inputs: Basecamp_Versions_No_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Version passt zu diesem Filter.`)
};

const fr_basecamp_versions_no_match = /** @type {(inputs: Basecamp_Versions_No_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune version ne correspond à ce filtre.`)
};

const it_basecamp_versions_no_match = /** @type {(inputs: Basecamp_Versions_No_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna versione corrisponde a questo filtro.`)
};

const nl_basecamp_versions_no_match = /** @type {(inputs: Basecamp_Versions_No_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen versie past bij dit filter.`)
};

const pl_basecamp_versions_no_match = /** @type {(inputs: Basecamp_Versions_No_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żadna wersja nie pasuje do tego filtra.`)
};

const pt_basecamp_versions_no_match = /** @type {(inputs: Basecamp_Versions_No_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma versão corresponde a este filtro.`)
};

const ru_basecamp_versions_no_match = /** @type {(inputs: Basecamp_Versions_No_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет версий, подходящих под фильтр.`)
};

const sv_basecamp_versions_no_match = /** @type {(inputs: Basecamp_Versions_No_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen version matchar filtret.`)
};

const tr_basecamp_versions_no_match = /** @type {(inputs: Basecamp_Versions_No_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu filtreyle eşleşen sürüm yok.`)
};

const zh_basecamp_versions_no_match = /** @type {(inputs: Basecamp_Versions_No_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有符合此筛选条件的版本。`)
};

const ja_basecamp_versions_no_match = /** @type {(inputs: Basecamp_Versions_No_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このフィルターに一致するバージョンはありません。`)
};

/**
* | output |
* | --- |
* | "No version matches this filter." |
*
* @param {Basecamp_Versions_No_MatchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_no_match = /** @type {((inputs?: Basecamp_Versions_No_MatchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_No_MatchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_no_match(inputs)
	if (locale === "de") return de_basecamp_versions_no_match(inputs)
	if (locale === "fr") return fr_basecamp_versions_no_match(inputs)
	if (locale === "it") return it_basecamp_versions_no_match(inputs)
	if (locale === "nl") return nl_basecamp_versions_no_match(inputs)
	if (locale === "pl") return pl_basecamp_versions_no_match(inputs)
	if (locale === "pt") return pt_basecamp_versions_no_match(inputs)
	if (locale === "ru") return ru_basecamp_versions_no_match(inputs)
	if (locale === "sv") return sv_basecamp_versions_no_match(inputs)
	if (locale === "tr") return tr_basecamp_versions_no_match(inputs)
	if (locale === "zh") return zh_basecamp_versions_no_match(inputs)
	if (locale === "ja") return ja_basecamp_versions_no_match(inputs)
	return en_basecamp_versions_no_match(inputs)
});
