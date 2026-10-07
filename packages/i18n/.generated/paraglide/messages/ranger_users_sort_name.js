/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Sort_NameInputs */

const en_ranger_users_sort_name = /** @type {(inputs: Ranger_Users_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name A to Z`)
};

const es_ranger_users_sort_name = /** @type {(inputs: Ranger_Users_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre de A a Z`)
};

const de_ranger_users_sort_name = /** @type {(inputs: Ranger_Users_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name A bis Z`)
};

const fr_ranger_users_sort_name = /** @type {(inputs: Ranger_Users_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom de A à Z`)
};

const it_ranger_users_sort_name = /** @type {(inputs: Ranger_Users_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome dalla A alla Z`)
};

const nl_ranger_users_sort_name = /** @type {(inputs: Ranger_Users_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naam A tot Z`)
};

const pl_ranger_users_sort_name = /** @type {(inputs: Ranger_Users_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa od A do Z`)
};

const pt_ranger_users_sort_name = /** @type {(inputs: Ranger_Users_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome de A a Z`)
};

const ru_ranger_users_sort_name = /** @type {(inputs: Ranger_Users_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Имя от А до Я`)
};

const sv_ranger_users_sort_name = /** @type {(inputs: Ranger_Users_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namn A till Ö`)
};

const tr_ranger_users_sort_name = /** @type {(inputs: Ranger_Users_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad A’dan Z’ye`)
};

const zh_ranger_users_sort_name = /** @type {(inputs: Ranger_Users_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称 A 到 Z`)
};

const ja_ranger_users_sort_name = /** @type {(inputs: Ranger_Users_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前順（A から Z）`)
};

/**
* | output |
* | --- |
* | "Name A to Z" |
*
* @param {Ranger_Users_Sort_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_sort_name = /** @type {((inputs?: Ranger_Users_Sort_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Sort_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_sort_name(inputs)
	if (locale === "de") return de_ranger_users_sort_name(inputs)
	if (locale === "fr") return fr_ranger_users_sort_name(inputs)
	if (locale === "it") return it_ranger_users_sort_name(inputs)
	if (locale === "nl") return nl_ranger_users_sort_name(inputs)
	if (locale === "pl") return pl_ranger_users_sort_name(inputs)
	if (locale === "pt") return pt_ranger_users_sort_name(inputs)
	if (locale === "ru") return ru_ranger_users_sort_name(inputs)
	if (locale === "sv") return sv_ranger_users_sort_name(inputs)
	if (locale === "tr") return tr_ranger_users_sort_name(inputs)
	if (locale === "zh") return zh_ranger_users_sort_name(inputs)
	if (locale === "ja") return ja_ranger_users_sort_name(inputs)
	return en_ranger_users_sort_name(inputs)
});
