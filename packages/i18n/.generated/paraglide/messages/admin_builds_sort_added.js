/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Sort_AddedInputs */

const en_admin_builds_sort_added = /** @type {(inputs: Admin_Builds_Sort_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recently added`)
};

const es_admin_builds_sort_added = /** @type {(inputs: Admin_Builds_Sort_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadidas recientemente`)
};

const de_admin_builds_sort_added = /** @type {(inputs: Admin_Builds_Sort_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zuletzt hinzugefügt`)
};

const fr_admin_builds_sort_added = /** @type {(inputs: Admin_Builds_Sort_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajoutés récemment`)
};

const it_admin_builds_sort_added = /** @type {(inputs: Admin_Builds_Sort_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiunte di recente`)
};

const nl_admin_builds_sort_added = /** @type {(inputs: Admin_Builds_Sort_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onlangs toegevoegd`)
};

const pl_admin_builds_sort_added = /** @type {(inputs: Admin_Builds_Sort_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnio dodane`)
};

const pt_admin_builds_sort_added = /** @type {(inputs: Admin_Builds_Sort_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionados recentemente`)
};

const ru_admin_builds_sort_added = /** @type {(inputs: Admin_Builds_Sort_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Недавно добавленные`)
};

const sv_admin_builds_sort_added = /** @type {(inputs: Admin_Builds_Sort_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyligen tillagda`)
};

const tr_admin_builds_sort_added = /** @type {(inputs: Admin_Builds_Sort_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son eklenenler`)
};

const zh_admin_builds_sort_added = /** @type {(inputs: Admin_Builds_Sort_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近添加`)
};

const ja_admin_builds_sort_added = /** @type {(inputs: Admin_Builds_Sort_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`追加が新しい順`)
};

/**
* | output |
* | --- |
* | "Recently added" |
*
* @param {Admin_Builds_Sort_AddedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_sort_added = /** @type {((inputs?: Admin_Builds_Sort_AddedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sort_AddedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_sort_added(inputs)
	if (locale === "de") return de_admin_builds_sort_added(inputs)
	if (locale === "fr") return fr_admin_builds_sort_added(inputs)
	if (locale === "it") return it_admin_builds_sort_added(inputs)
	if (locale === "nl") return nl_admin_builds_sort_added(inputs)
	if (locale === "pl") return pl_admin_builds_sort_added(inputs)
	if (locale === "pt") return pt_admin_builds_sort_added(inputs)
	if (locale === "ru") return ru_admin_builds_sort_added(inputs)
	if (locale === "sv") return sv_admin_builds_sort_added(inputs)
	if (locale === "tr") return tr_admin_builds_sort_added(inputs)
	if (locale === "zh") return zh_admin_builds_sort_added(inputs)
	if (locale === "ja") return ja_admin_builds_sort_added(inputs)
	return en_admin_builds_sort_added(inputs)
});
