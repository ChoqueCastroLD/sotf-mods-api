/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Group_SuggestInputs */

const en_cmdk_group_suggest = /** @type {(inputs: Cmdk_Group_SuggestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter suggestions`)
};

const es_cmdk_group_suggest = /** @type {(inputs: Cmdk_Group_SuggestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sugerencias de filtro`)
};

const de_cmdk_group_suggest = /** @type {(inputs: Cmdk_Group_SuggestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtervorschläge`)
};

const fr_cmdk_group_suggest = /** @type {(inputs: Cmdk_Group_SuggestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suggestions de filtres`)
};

const it_cmdk_group_suggest = /** @type {(inputs: Cmdk_Group_SuggestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suggerimenti filtro`)
};

const nl_cmdk_group_suggest = /** @type {(inputs: Cmdk_Group_SuggestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtersuggesties`)
};

const pl_cmdk_group_suggest = /** @type {(inputs: Cmdk_Group_SuggestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podpowiedzi filtrów`)
};

const pt_cmdk_group_suggest = /** @type {(inputs: Cmdk_Group_SuggestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sugestões de filtro`)
};

const ru_cmdk_group_suggest = /** @type {(inputs: Cmdk_Group_SuggestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подсказки фильтров`)
};

const sv_cmdk_group_suggest = /** @type {(inputs: Cmdk_Group_SuggestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filterförslag`)
};

const tr_cmdk_group_suggest = /** @type {(inputs: Cmdk_Group_SuggestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtre önerileri`)
};

const zh_cmdk_group_suggest = /** @type {(inputs: Cmdk_Group_SuggestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`筛选建议`)
};

const ja_cmdk_group_suggest = /** @type {(inputs: Cmdk_Group_SuggestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィルターの候補`)
};

/**
* | output |
* | --- |
* | "Filter suggestions" |
*
* @param {Cmdk_Group_SuggestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_group_suggest = /** @type {((inputs?: Cmdk_Group_SuggestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Group_SuggestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_group_suggest(inputs)
	if (locale === "de") return de_cmdk_group_suggest(inputs)
	if (locale === "fr") return fr_cmdk_group_suggest(inputs)
	if (locale === "it") return it_cmdk_group_suggest(inputs)
	if (locale === "nl") return nl_cmdk_group_suggest(inputs)
	if (locale === "pl") return pl_cmdk_group_suggest(inputs)
	if (locale === "pt") return pt_cmdk_group_suggest(inputs)
	if (locale === "ru") return ru_cmdk_group_suggest(inputs)
	if (locale === "sv") return sv_cmdk_group_suggest(inputs)
	if (locale === "tr") return tr_cmdk_group_suggest(inputs)
	if (locale === "zh") return zh_cmdk_group_suggest(inputs)
	if (locale === "ja") return ja_cmdk_group_suggest(inputs)
	return en_cmdk_group_suggest(inputs)
});
