/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_Sort_NameInputs */

const en_jams_entries_sort_name = /** @type {(inputs: Jams_Entries_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod name A to Z`)
};

const es_jams_entries_sort_name = /** @type {(inputs: Jams_Entries_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre del mod de A a Z`)
};

const de_jams_entries_sort_name = /** @type {(inputs: Jams_Entries_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Name A bis Z`)
};

const fr_jams_entries_sort_name = /** @type {(inputs: Jams_Entries_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom du mod de A à Z`)
};

const it_jams_entries_sort_name = /** @type {(inputs: Jams_Entries_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome del mod dalla A alla Z`)
};

const nl_jams_entries_sort_name = /** @type {(inputs: Jams_Entries_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modnaam A tot Z`)
};

const pl_jams_entries_sort_name = /** @type {(inputs: Jams_Entries_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa moda od A do Z`)
};

const pt_jams_entries_sort_name = /** @type {(inputs: Jams_Entries_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome do mod de A a Z`)
};

const ru_jams_entries_sort_name = /** @type {(inputs: Jams_Entries_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название мода от А до Я`)
};

const sv_jams_entries_sort_name = /** @type {(inputs: Jams_Entries_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modnamn A till Ö`)
};

const tr_jams_entries_sort_name = /** @type {(inputs: Jams_Entries_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod adı A’dan Z’ye`)
};

const zh_jams_entries_sort_name = /** @type {(inputs: Jams_Entries_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod 名称 A 到 Z`)
};

const ja_jams_entries_sort_name = /** @type {(inputs: Jams_Entries_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod 名順（A から Z）`)
};

/**
* | output |
* | --- |
* | "Mod name A to Z" |
*
* @param {Jams_Entries_Sort_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_sort_name = /** @type {((inputs?: Jams_Entries_Sort_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_Sort_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_sort_name(inputs)
	if (locale === "de") return de_jams_entries_sort_name(inputs)
	if (locale === "fr") return fr_jams_entries_sort_name(inputs)
	if (locale === "it") return it_jams_entries_sort_name(inputs)
	if (locale === "nl") return nl_jams_entries_sort_name(inputs)
	if (locale === "pl") return pl_jams_entries_sort_name(inputs)
	if (locale === "pt") return pt_jams_entries_sort_name(inputs)
	if (locale === "ru") return ru_jams_entries_sort_name(inputs)
	if (locale === "sv") return sv_jams_entries_sort_name(inputs)
	if (locale === "tr") return tr_jams_entries_sort_name(inputs)
	if (locale === "zh") return zh_jams_entries_sort_name(inputs)
	if (locale === "ja") return ja_jams_entries_sort_name(inputs)
	return en_jams_entries_sort_name(inputs)
});
