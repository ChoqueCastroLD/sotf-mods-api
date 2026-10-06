/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_Empty_TextInputs */

const en_explore_catalog_empty_text = /** @type {(inputs: Explore_Catalog_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No mods match these filters. Change the search or clear the filters.`)
};

const es_explore_catalog_empty_text = /** @type {(inputs: Explore_Catalog_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ningún mod coincide con estos filtros. Cambia la búsqueda o quita los filtros.`)
};

const de_explore_catalog_empty_text = /** @type {(inputs: Explore_Catalog_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Mods passen zu diesen Filtern. Ändere die Suche oder setze die Filter zurück.`)
};

const fr_explore_catalog_empty_text = /** @type {(inputs: Explore_Catalog_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun mod ne correspond à ces filtres. Modifiez la recherche ou effacez les filtres.`)
};

const it_explore_catalog_empty_text = /** @type {(inputs: Explore_Catalog_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun mod corrisponde a questi filtri. Cambia la ricerca o rimuovi i filtri.`)
};

const nl_explore_catalog_empty_text = /** @type {(inputs: Explore_Catalog_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen mods komen overeen met deze filters. Pas de zoekopdracht aan of wis de filters.`)
};

const pl_explore_catalog_empty_text = /** @type {(inputs: Explore_Catalog_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden mod nie pasuje do tych filtrów. Zmień wyszukiwanie lub wyczyść filtry.`)
};

const pt_explore_catalog_empty_text = /** @type {(inputs: Explore_Catalog_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum mod corresponde a estes filtros. Altere a busca ou limpe os filtros.`)
};

const ru_explore_catalog_empty_text = /** @type {(inputs: Explore_Catalog_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет модов, подходящих под эти фильтры. Измените запрос или сбросьте фильтры.`)
};

const sv_explore_catalog_empty_text = /** @type {(inputs: Explore_Catalog_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga mods matchar de här filtren. Ändra sökningen eller rensa filtren.`)
};

const tr_explore_catalog_empty_text = /** @type {(inputs: Explore_Catalog_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu filtrelere uyan mod yok. Aramayı değiştirin veya filtreleri temizleyin.`)
};

const zh_explore_catalog_empty_text = /** @type {(inputs: Explore_Catalog_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有符合这些筛选条件的模组。请更改搜索或清除筛选。`)
};

const ja_explore_catalog_empty_text = /** @type {(inputs: Explore_Catalog_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`条件に一致するMODはありません。検索を変更するか、フィルターを解除してください。`)
};

/**
* | output |
* | --- |
* | "No mods match these filters. Change the search or clear the filters." |
*
* @param {Explore_Catalog_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_empty_text = /** @type {((inputs?: Explore_Catalog_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_empty_text(inputs)
	if (locale === "de") return de_explore_catalog_empty_text(inputs)
	if (locale === "fr") return fr_explore_catalog_empty_text(inputs)
	if (locale === "it") return it_explore_catalog_empty_text(inputs)
	if (locale === "nl") return nl_explore_catalog_empty_text(inputs)
	if (locale === "pl") return pl_explore_catalog_empty_text(inputs)
	if (locale === "pt") return pt_explore_catalog_empty_text(inputs)
	if (locale === "ru") return ru_explore_catalog_empty_text(inputs)
	if (locale === "sv") return sv_explore_catalog_empty_text(inputs)
	if (locale === "tr") return tr_explore_catalog_empty_text(inputs)
	if (locale === "zh") return zh_explore_catalog_empty_text(inputs)
	if (locale === "ja") return ja_explore_catalog_empty_text(inputs)
	return en_explore_catalog_empty_text(inputs)
});
