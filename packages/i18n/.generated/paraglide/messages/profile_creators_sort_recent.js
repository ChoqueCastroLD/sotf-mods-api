/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Creators_Sort_RecentInputs */

const en_profile_creators_sort_recent = /** @type {(inputs: Profile_Creators_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recently released`)
};

const es_profile_creators_sort_recent = /** @type {(inputs: Profile_Creators_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicado recientemente`)
};

const de_profile_creators_sort_recent = /** @type {(inputs: Profile_Creators_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zuletzt veröffentlicht`)
};

const fr_profile_creators_sort_recent = /** @type {(inputs: Profile_Creators_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publications récentes`)
};

const it_profile_creators_sort_recent = /** @type {(inputs: Profile_Creators_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblicazioni recenti`)
};

const nl_profile_creators_sort_recent = /** @type {(inputs: Profile_Creators_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recent uitgebracht`)
};

const pl_profile_creators_sort_recent = /** @type {(inputs: Profile_Creators_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnio wydający`)
};

const pt_profile_creators_sort_recent = /** @type {(inputs: Profile_Creators_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicados recentemente`)
};

const ru_profile_creators_sort_recent = /** @type {(inputs: Profile_Creators_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Недавние релизы`)
};

const sv_profile_creators_sort_recent = /** @type {(inputs: Profile_Creators_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyligen släppta`)
};

const tr_profile_creators_sort_recent = /** @type {(inputs: Profile_Creators_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yakında yayınlayan`)
};

const zh_profile_creators_sort_recent = /** @type {(inputs: Profile_Creators_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近发布`)
};

const ja_profile_creators_sort_recent = /** @type {(inputs: Profile_Creators_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近のリリース順`)
};

/**
* | output |
* | --- |
* | "Recently released" |
*
* @param {Profile_Creators_Sort_RecentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_creators_sort_recent = /** @type {((inputs?: Profile_Creators_Sort_RecentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Creators_Sort_RecentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_creators_sort_recent(inputs)
	if (locale === "de") return de_profile_creators_sort_recent(inputs)
	if (locale === "fr") return fr_profile_creators_sort_recent(inputs)
	if (locale === "it") return it_profile_creators_sort_recent(inputs)
	if (locale === "nl") return nl_profile_creators_sort_recent(inputs)
	if (locale === "pl") return pl_profile_creators_sort_recent(inputs)
	if (locale === "pt") return pt_profile_creators_sort_recent(inputs)
	if (locale === "ru") return ru_profile_creators_sort_recent(inputs)
	if (locale === "sv") return sv_profile_creators_sort_recent(inputs)
	if (locale === "tr") return tr_profile_creators_sort_recent(inputs)
	if (locale === "zh") return zh_profile_creators_sort_recent(inputs)
	if (locale === "ja") return ja_profile_creators_sort_recent(inputs)
	return en_profile_creators_sort_recent(inputs)
});
