/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Sort_OldestInputs */

const en_ranger_users_sort_oldest = /** @type {(inputs: Ranger_Users_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oldest accounts`)
};

const es_ranger_users_sort_oldest = /** @type {(inputs: Ranger_Users_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuentas más antiguas`)
};

const de_ranger_users_sort_oldest = /** @type {(inputs: Ranger_Users_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Älteste Konten`)
};

const fr_ranger_users_sort_oldest = /** @type {(inputs: Ranger_Users_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comptes les plus anciens`)
};

const it_ranger_users_sort_oldest = /** @type {(inputs: Ranger_Users_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account più vecchi`)
};

const nl_ranger_users_sort_oldest = /** @type {(inputs: Ranger_Users_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oudste accounts`)
};

const pl_ranger_users_sort_oldest = /** @type {(inputs: Ranger_Users_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najstarsze konta`)
};

const pt_ranger_users_sort_oldest = /** @type {(inputs: Ranger_Users_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contas mais antigas`)
};

const ru_ranger_users_sort_oldest = /** @type {(inputs: Ranger_Users_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала старые аккаунты`)
};

const sv_ranger_users_sort_oldest = /** @type {(inputs: Ranger_Users_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Äldsta konton`)
};

const tr_ranger_users_sort_oldest = /** @type {(inputs: Ranger_Users_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En eski hesaplar`)
};

const zh_ranger_users_sort_oldest = /** @type {(inputs: Ranger_Users_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最早账号`)
};

const ja_ranger_users_sort_oldest = /** @type {(inputs: Ranger_Users_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`古いアカウント順`)
};

/**
* | output |
* | --- |
* | "Oldest accounts" |
*
* @param {Ranger_Users_Sort_OldestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_sort_oldest = /** @type {((inputs?: Ranger_Users_Sort_OldestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Sort_OldestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_sort_oldest(inputs)
	if (locale === "de") return de_ranger_users_sort_oldest(inputs)
	if (locale === "fr") return fr_ranger_users_sort_oldest(inputs)
	if (locale === "it") return it_ranger_users_sort_oldest(inputs)
	if (locale === "nl") return nl_ranger_users_sort_oldest(inputs)
	if (locale === "pl") return pl_ranger_users_sort_oldest(inputs)
	if (locale === "pt") return pt_ranger_users_sort_oldest(inputs)
	if (locale === "ru") return ru_ranger_users_sort_oldest(inputs)
	if (locale === "sv") return sv_ranger_users_sort_oldest(inputs)
	if (locale === "tr") return tr_ranger_users_sort_oldest(inputs)
	if (locale === "zh") return zh_ranger_users_sort_oldest(inputs)
	if (locale === "ja") return ja_ranger_users_sort_oldest(inputs)
	return en_ranger_users_sort_oldest(inputs)
});
