/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Search_LabelInputs */

const en_me_search_label = /** @type {(inputs: Me_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search by name`)
};

const es_me_search_label = /** @type {(inputs: Me_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar por nombre`)
};

const de_me_search_label = /** @type {(inputs: Me_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nach Name suchen`)
};

const fr_me_search_label = /** @type {(inputs: Me_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher par nom`)
};

const it_me_search_label = /** @type {(inputs: Me_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca per nome`)
};

const nl_me_search_label = /** @type {(inputs: Me_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken op naam`)
};

const pl_me_search_label = /** @type {(inputs: Me_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj według nazwy`)
};

const pt_me_search_label = /** @type {(inputs: Me_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar por nome`)
};

const ru_me_search_label = /** @type {(inputs: Me_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск по названию`)
};

const sv_me_search_label = /** @type {(inputs: Me_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök på namn`)
};

const tr_me_search_label = /** @type {(inputs: Me_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ada göre ara`)
};

const zh_me_search_label = /** @type {(inputs: Me_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按名称搜索`)
};

const ja_me_search_label = /** @type {(inputs: Me_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前で検索`)
};

/**
* | output |
* | --- |
* | "Search by name" |
*
* @param {Me_Search_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_search_label = /** @type {((inputs?: Me_Search_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Search_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_search_label(inputs)
	if (locale === "de") return de_me_search_label(inputs)
	if (locale === "fr") return fr_me_search_label(inputs)
	if (locale === "it") return it_me_search_label(inputs)
	if (locale === "nl") return nl_me_search_label(inputs)
	if (locale === "pl") return pl_me_search_label(inputs)
	if (locale === "pt") return pt_me_search_label(inputs)
	if (locale === "ru") return ru_me_search_label(inputs)
	if (locale === "sv") return sv_me_search_label(inputs)
	if (locale === "tr") return tr_me_search_label(inputs)
	if (locale === "zh") return zh_me_search_label(inputs)
	if (locale === "ja") return ja_me_search_label(inputs)
	return en_me_search_label(inputs)
});
