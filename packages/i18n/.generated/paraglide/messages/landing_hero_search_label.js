/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Hero_Search_LabelInputs */

const en_landing_hero_search_label = /** @type {(inputs: Landing_Hero_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search the catalog`)
};

const es_landing_hero_search_label = /** @type {(inputs: Landing_Hero_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar en el catálogo`)
};

const de_landing_hero_search_label = /** @type {(inputs: Landing_Hero_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Katalog durchsuchen`)
};

const fr_landing_hero_search_label = /** @type {(inputs: Landing_Hero_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher dans le catalogue`)
};

const it_landing_hero_search_label = /** @type {(inputs: Landing_Hero_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca nel catalogo`)
};

const nl_landing_hero_search_label = /** @type {(inputs: Landing_Hero_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doorzoek de catalogus`)
};

const pl_landing_hero_search_label = /** @type {(inputs: Landing_Hero_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj w katalogu`)
};

const pt_landing_hero_search_label = /** @type {(inputs: Landing_Hero_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisar no catálogo`)
};

const ru_landing_hero_search_label = /** @type {(inputs: Landing_Hero_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск по каталогу`)
};

const sv_landing_hero_search_label = /** @type {(inputs: Landing_Hero_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök i katalogen`)
};

const tr_landing_hero_search_label = /** @type {(inputs: Landing_Hero_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Katalogda ara`)
};

const zh_landing_hero_search_label = /** @type {(inputs: Landing_Hero_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索目录`)
};

const ja_landing_hero_search_label = /** @type {(inputs: Landing_Hero_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カタログを検索`)
};

/**
* | output |
* | --- |
* | "Search the catalog" |
*
* @param {Landing_Hero_Search_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_hero_search_label = /** @type {((inputs?: Landing_Hero_Search_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Hero_Search_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_hero_search_label(inputs)
	if (locale === "de") return de_landing_hero_search_label(inputs)
	if (locale === "fr") return fr_landing_hero_search_label(inputs)
	if (locale === "it") return it_landing_hero_search_label(inputs)
	if (locale === "nl") return nl_landing_hero_search_label(inputs)
	if (locale === "pl") return pl_landing_hero_search_label(inputs)
	if (locale === "pt") return pt_landing_hero_search_label(inputs)
	if (locale === "ru") return ru_landing_hero_search_label(inputs)
	if (locale === "sv") return sv_landing_hero_search_label(inputs)
	if (locale === "tr") return tr_landing_hero_search_label(inputs)
	if (locale === "zh") return zh_landing_hero_search_label(inputs)
	if (locale === "ja") return ja_landing_hero_search_label(inputs)
	return en_landing_hero_search_label(inputs)
});
