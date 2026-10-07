/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Sort_NewestInputs */

const en_ranger_users_sort_newest = /** @type {(inputs: Ranger_Users_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Newest accounts`)
};

const es_ranger_users_sort_newest = /** @type {(inputs: Ranger_Users_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuentas más recientes`)
};

const de_ranger_users_sort_newest = /** @type {(inputs: Ranger_Users_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste Konten`)
};

const fr_ranger_users_sort_newest = /** @type {(inputs: Ranger_Users_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comptes les plus récents`)
};

const it_ranger_users_sort_newest = /** @type {(inputs: Ranger_Users_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account più recenti`)
};

const nl_ranger_users_sort_newest = /** @type {(inputs: Ranger_Users_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwste accounts`)
};

const pl_ranger_users_sort_newest = /** @type {(inputs: Ranger_Users_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsze konta`)
};

const pt_ranger_users_sort_newest = /** @type {(inputs: Ranger_Users_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contas mais recentes`)
};

const ru_ranger_users_sort_newest = /** @type {(inputs: Ranger_Users_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала новые аккаунты`)
};

const sv_ranger_users_sort_newest = /** @type {(inputs: Ranger_Users_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyaste konton`)
};

const tr_ranger_users_sort_newest = /** @type {(inputs: Ranger_Users_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yeni hesaplar`)
};

const zh_ranger_users_sort_newest = /** @type {(inputs: Ranger_Users_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新账号`)
};

const ja_ranger_users_sort_newest = /** @type {(inputs: Ranger_Users_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいアカウント順`)
};

/**
* | output |
* | --- |
* | "Newest accounts" |
*
* @param {Ranger_Users_Sort_NewestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_sort_newest = /** @type {((inputs?: Ranger_Users_Sort_NewestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Sort_NewestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_sort_newest(inputs)
	if (locale === "de") return de_ranger_users_sort_newest(inputs)
	if (locale === "fr") return fr_ranger_users_sort_newest(inputs)
	if (locale === "it") return it_ranger_users_sort_newest(inputs)
	if (locale === "nl") return nl_ranger_users_sort_newest(inputs)
	if (locale === "pl") return pl_ranger_users_sort_newest(inputs)
	if (locale === "pt") return pt_ranger_users_sort_newest(inputs)
	if (locale === "ru") return ru_ranger_users_sort_newest(inputs)
	if (locale === "sv") return sv_ranger_users_sort_newest(inputs)
	if (locale === "tr") return tr_ranger_users_sort_newest(inputs)
	if (locale === "zh") return zh_ranger_users_sort_newest(inputs)
	if (locale === "ja") return ja_ranger_users_sort_newest(inputs)
	return en_ranger_users_sort_newest(inputs)
});
