/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_No_Results_TextInputs */

const en_admin_builds_no_results_text = /** @type {(inputs: Admin_Builds_No_Results_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change the search or clear the filters.`)
};

const es_admin_builds_no_results_text = /** @type {(inputs: Admin_Builds_No_Results_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambia la búsqueda o quita los filtros.`)
};

const de_admin_builds_no_results_text = /** @type {(inputs: Admin_Builds_No_Results_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändere die Suche oder setze die Filter zurück.`)
};

const fr_admin_builds_no_results_text = /** @type {(inputs: Admin_Builds_No_Results_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifiez la recherche ou effacez les filtres.`)
};

const it_admin_builds_no_results_text = /** @type {(inputs: Admin_Builds_No_Results_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambia la ricerca o azzera i filtri.`)
};

const nl_admin_builds_no_results_text = /** @type {(inputs: Admin_Builds_No_Results_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas de zoekopdracht aan of wis de filters.`)
};

const pl_admin_builds_no_results_text = /** @type {(inputs: Admin_Builds_No_Results_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmień wyszukiwanie albo wyczyść filtry.`)
};

const pt_admin_builds_no_results_text = /** @type {(inputs: Admin_Builds_No_Results_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mude a busca ou limpe os filtros.`)
};

const ru_admin_builds_no_results_text = /** @type {(inputs: Admin_Builds_No_Results_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Измените запрос или сбросьте фильтры.`)
};

const sv_admin_builds_no_results_text = /** @type {(inputs: Admin_Builds_No_Results_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändra sökningen eller rensa filtren.`)
};

const tr_admin_builds_no_results_text = /** @type {(inputs: Admin_Builds_No_Results_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aramayı değiştir ya da filtreleri temizle.`)
};

const zh_admin_builds_no_results_text = /** @type {(inputs: Admin_Builds_No_Results_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请修改搜索词或清除筛选。`)
};

const ja_admin_builds_no_results_text = /** @type {(inputs: Admin_Builds_No_Results_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索を変えるか、絞り込みを解除してください。`)
};

/**
* | output |
* | --- |
* | "Change the search or clear the filters." |
*
* @param {Admin_Builds_No_Results_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_no_results_text = /** @type {((inputs?: Admin_Builds_No_Results_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_No_Results_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_no_results_text(inputs)
	if (locale === "de") return de_admin_builds_no_results_text(inputs)
	if (locale === "fr") return fr_admin_builds_no_results_text(inputs)
	if (locale === "it") return it_admin_builds_no_results_text(inputs)
	if (locale === "nl") return nl_admin_builds_no_results_text(inputs)
	if (locale === "pl") return pl_admin_builds_no_results_text(inputs)
	if (locale === "pt") return pt_admin_builds_no_results_text(inputs)
	if (locale === "ru") return ru_admin_builds_no_results_text(inputs)
	if (locale === "sv") return sv_admin_builds_no_results_text(inputs)
	if (locale === "tr") return tr_admin_builds_no_results_text(inputs)
	if (locale === "zh") return zh_admin_builds_no_results_text(inputs)
	if (locale === "ja") return ja_admin_builds_no_results_text(inputs)
	return en_admin_builds_no_results_text(inputs)
});
