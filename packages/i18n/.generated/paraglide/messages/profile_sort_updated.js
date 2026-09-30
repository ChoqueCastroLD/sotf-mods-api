/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Sort_UpdatedInputs */

const en_profile_sort_updated = /** @type {(inputs: Profile_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recently updated`)
};

const es_profile_sort_updated = /** @type {(inputs: Profile_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizados recientemente`)
};

const de_profile_sort_updated = /** @type {(inputs: Profile_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kürzlich aktualisiert`)
};

const fr_profile_sort_updated = /** @type {(inputs: Profile_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mis à jour récemment`)
};

const it_profile_sort_updated = /** @type {(inputs: Profile_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornati di recente`)
};

const nl_profile_sort_updated = /** @type {(inputs: Profile_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recent bijgewerkt`)
};

const pl_profile_sort_updated = /** @type {(inputs: Profile_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnio zaktualizowane`)
};

const pt_profile_sort_updated = /** @type {(inputs: Profile_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizados recentemente`)
};

const ru_profile_sort_updated = /** @type {(inputs: Profile_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Недавно обновлённые`)
};

const sv_profile_sort_updated = /** @type {(inputs: Profile_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyligen uppdaterade`)
};

const tr_profile_sort_updated = /** @type {(inputs: Profile_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yakında güncellenen`)
};

const zh_profile_sort_updated = /** @type {(inputs: Profile_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近更新`)
};

const ja_profile_sort_updated = /** @type {(inputs: Profile_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近の更新順`)
};

/**
* | output |
* | --- |
* | "Recently updated" |
*
* @param {Profile_Sort_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_sort_updated = /** @type {((inputs?: Profile_Sort_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Sort_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_sort_updated(inputs)
	if (locale === "de") return de_profile_sort_updated(inputs)
	if (locale === "fr") return fr_profile_sort_updated(inputs)
	if (locale === "it") return it_profile_sort_updated(inputs)
	if (locale === "nl") return nl_profile_sort_updated(inputs)
	if (locale === "pl") return pl_profile_sort_updated(inputs)
	if (locale === "pt") return pt_profile_sort_updated(inputs)
	if (locale === "ru") return ru_profile_sort_updated(inputs)
	if (locale === "sv") return sv_profile_sort_updated(inputs)
	if (locale === "tr") return tr_profile_sort_updated(inputs)
	if (locale === "zh") return zh_profile_sort_updated(inputs)
	if (locale === "ja") return ja_profile_sort_updated(inputs)
	return en_profile_sort_updated(inputs)
});
