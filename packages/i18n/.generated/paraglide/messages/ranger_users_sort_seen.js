/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Sort_SeenInputs */

const en_ranger_users_sort_seen = /** @type {(inputs: Ranger_Users_Sort_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recently seen`)
};

const es_ranger_users_sort_seen = /** @type {(inputs: Ranger_Users_Sort_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vistos hace poco`)
};

const de_ranger_users_sort_seen = /** @type {(inputs: Ranger_Users_Sort_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zuletzt gesehen`)
};

const fr_ranger_users_sort_seen = /** @type {(inputs: Ranger_Users_Sort_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vus récemment`)
};

const it_ranger_users_sort_seen = /** @type {(inputs: Ranger_Users_Sort_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visti di recente`)
};

const nl_ranger_users_sort_seen = /** @type {(inputs: Ranger_Users_Sort_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recent gezien`)
};

const pl_ranger_users_sort_seen = /** @type {(inputs: Ranger_Users_Sort_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnio aktywni`)
};

const pt_ranger_users_sort_seen = /** @type {(inputs: Ranger_Users_Sort_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vistos recentemente`)
};

const ru_ranger_users_sort_seen = /** @type {(inputs: Ranger_Users_Sort_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Недавно были онлайн`)
};

const sv_ranger_users_sort_seen = /** @type {(inputs: Ranger_Users_Sort_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senast sedda`)
};

const tr_ranger_users_sort_seen = /** @type {(inputs: Ranger_Users_Sort_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son görülenler`)
};

const zh_ranger_users_sort_seen = /** @type {(inputs: Ranger_Users_Sort_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近活跃`)
};

const ja_ranger_users_sort_seen = /** @type {(inputs: Ranger_Users_Sort_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近のアクセス順`)
};

/**
* | output |
* | --- |
* | "Recently seen" |
*
* @param {Ranger_Users_Sort_SeenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_sort_seen = /** @type {((inputs?: Ranger_Users_Sort_SeenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Sort_SeenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_sort_seen(inputs)
	if (locale === "de") return de_ranger_users_sort_seen(inputs)
	if (locale === "fr") return fr_ranger_users_sort_seen(inputs)
	if (locale === "it") return it_ranger_users_sort_seen(inputs)
	if (locale === "nl") return nl_ranger_users_sort_seen(inputs)
	if (locale === "pl") return pl_ranger_users_sort_seen(inputs)
	if (locale === "pt") return pt_ranger_users_sort_seen(inputs)
	if (locale === "ru") return ru_ranger_users_sort_seen(inputs)
	if (locale === "sv") return sv_ranger_users_sort_seen(inputs)
	if (locale === "tr") return tr_ranger_users_sort_seen(inputs)
	if (locale === "zh") return zh_ranger_users_sort_seen(inputs)
	if (locale === "ja") return ja_ranger_users_sort_seen(inputs)
	return en_ranger_users_sort_seen(inputs)
});
