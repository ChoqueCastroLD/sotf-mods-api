/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_Empty_TitleInputs */

const en_explore_catalog_empty_title = /** @type {(inputs: Explore_Catalog_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No mods found`)
};

const es_explore_catalog_empty_title = /** @type {(inputs: Explore_Catalog_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se encontraron mods`)
};

const de_explore_catalog_empty_title = /** @type {(inputs: Explore_Catalog_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Mods gefunden`)
};

const fr_explore_catalog_empty_title = /** @type {(inputs: Explore_Catalog_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun mod trouvé`)
};

const it_explore_catalog_empty_title = /** @type {(inputs: Explore_Catalog_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun mod trovato`)
};

const nl_explore_catalog_empty_title = /** @type {(inputs: Explore_Catalog_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen mods gevonden`)
};

const pl_explore_catalog_empty_title = /** @type {(inputs: Explore_Catalog_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie znaleziono modów`)
};

const pt_explore_catalog_empty_title = /** @type {(inputs: Explore_Catalog_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum mod encontrado`)
};

const ru_explore_catalog_empty_title = /** @type {(inputs: Explore_Catalog_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды не найдены`)
};

const sv_explore_catalog_empty_title = /** @type {(inputs: Explore_Catalog_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga mods hittades`)
};

const tr_explore_catalog_empty_title = /** @type {(inputs: Explore_Catalog_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod bulunamadı`)
};

const zh_explore_catalog_empty_title = /** @type {(inputs: Explore_Catalog_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未找到模组`)
};

const ja_explore_catalog_empty_title = /** @type {(inputs: Explore_Catalog_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODが見つかりません`)
};

/**
* | output |
* | --- |
* | "No mods found" |
*
* @param {Explore_Catalog_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_empty_title = /** @type {((inputs?: Explore_Catalog_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_empty_title(inputs)
	if (locale === "de") return de_explore_catalog_empty_title(inputs)
	if (locale === "fr") return fr_explore_catalog_empty_title(inputs)
	if (locale === "it") return it_explore_catalog_empty_title(inputs)
	if (locale === "nl") return nl_explore_catalog_empty_title(inputs)
	if (locale === "pl") return pl_explore_catalog_empty_title(inputs)
	if (locale === "pt") return pt_explore_catalog_empty_title(inputs)
	if (locale === "ru") return ru_explore_catalog_empty_title(inputs)
	if (locale === "sv") return sv_explore_catalog_empty_title(inputs)
	if (locale === "tr") return tr_explore_catalog_empty_title(inputs)
	if (locale === "zh") return zh_explore_catalog_empty_title(inputs)
	if (locale === "ja") return ja_explore_catalog_empty_title(inputs)
	return en_explore_catalog_empty_title(inputs)
});
