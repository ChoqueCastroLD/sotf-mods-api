/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_Error_TitleInputs */

const en_explore_catalog_error_title = /** @type {(inputs: Explore_Catalog_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The mods could not be loaded`)
};

const es_explore_catalog_error_title = /** @type {(inputs: Explore_Catalog_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron cargar los mods`)
};

const de_explore_catalog_error_title = /** @type {(inputs: Explore_Catalog_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Mods konnten nicht geladen werden`)
};

const fr_explore_catalog_error_title = /** @type {(inputs: Explore_Catalog_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de charger les mods`)
};

const it_explore_catalog_error_title = /** @type {(inputs: Explore_Catalog_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare i mod`)
};

const nl_explore_catalog_error_title = /** @type {(inputs: Explore_Catalog_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De mods konden niet worden geladen`)
};

const pl_explore_catalog_error_title = /** @type {(inputs: Explore_Catalog_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać modów`)
};

const pt_explore_catalog_error_title = /** @type {(inputs: Explore_Catalog_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar os mods`)
};

const ru_explore_catalog_error_title = /** @type {(inputs: Explore_Catalog_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить моды`)
};

const sv_explore_catalog_error_title = /** @type {(inputs: Explore_Catalog_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att läsa in mods`)
};

const tr_explore_catalog_error_title = /** @type {(inputs: Explore_Catalog_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar yüklenemedi`)
};

const zh_explore_catalog_error_title = /** @type {(inputs: Explore_Catalog_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载模组`)
};

const ja_explore_catalog_error_title = /** @type {(inputs: Explore_Catalog_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODを読み込めませんでした`)
};

/**
* | output |
* | --- |
* | "The mods could not be loaded" |
*
* @param {Explore_Catalog_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_error_title = /** @type {((inputs?: Explore_Catalog_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_error_title(inputs)
	if (locale === "de") return de_explore_catalog_error_title(inputs)
	if (locale === "fr") return fr_explore_catalog_error_title(inputs)
	if (locale === "it") return it_explore_catalog_error_title(inputs)
	if (locale === "nl") return nl_explore_catalog_error_title(inputs)
	if (locale === "pl") return pl_explore_catalog_error_title(inputs)
	if (locale === "pt") return pt_explore_catalog_error_title(inputs)
	if (locale === "ru") return ru_explore_catalog_error_title(inputs)
	if (locale === "sv") return sv_explore_catalog_error_title(inputs)
	if (locale === "tr") return tr_explore_catalog_error_title(inputs)
	if (locale === "zh") return zh_explore_catalog_error_title(inputs)
	if (locale === "ja") return ja_explore_catalog_error_title(inputs)
	return en_explore_catalog_error_title(inputs)
});
