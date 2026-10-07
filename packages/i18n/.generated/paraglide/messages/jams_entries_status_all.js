/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_Status_AllInputs */

const en_jams_entries_status_all = /** @type {(inputs: Jams_Entries_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All`)
};

const es_jams_entries_status_all = /** @type {(inputs: Jams_Entries_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas`)
};

const de_jams_entries_status_all = /** @type {(inputs: Jams_Entries_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const fr_jams_entries_status_all = /** @type {(inputs: Jams_Entries_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes`)
};

const it_jams_entries_status_all = /** @type {(inputs: Jams_Entries_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte`)
};

const nl_jams_entries_status_all = /** @type {(inputs: Jams_Entries_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const pl_jams_entries_status_all = /** @type {(inputs: Jams_Entries_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie`)
};

const pt_jams_entries_status_all = /** @type {(inputs: Jams_Entries_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas`)
};

const ru_jams_entries_status_all = /** @type {(inputs: Jams_Entries_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все`)
};

const sv_jams_entries_status_all = /** @type {(inputs: Jams_Entries_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla`)
};

const tr_jams_entries_status_all = /** @type {(inputs: Jams_Entries_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümü`)
};

const zh_jams_entries_status_all = /** @type {(inputs: Jams_Entries_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部`)
};

const ja_jams_entries_status_all = /** @type {(inputs: Jams_Entries_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて`)
};

/**
* | output |
* | --- |
* | "All" |
*
* @param {Jams_Entries_Status_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_status_all = /** @type {((inputs?: Jams_Entries_Status_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_Status_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_status_all(inputs)
	if (locale === "de") return de_jams_entries_status_all(inputs)
	if (locale === "fr") return fr_jams_entries_status_all(inputs)
	if (locale === "it") return it_jams_entries_status_all(inputs)
	if (locale === "nl") return nl_jams_entries_status_all(inputs)
	if (locale === "pl") return pl_jams_entries_status_all(inputs)
	if (locale === "pt") return pt_jams_entries_status_all(inputs)
	if (locale === "ru") return ru_jams_entries_status_all(inputs)
	if (locale === "sv") return sv_jams_entries_status_all(inputs)
	if (locale === "tr") return tr_jams_entries_status_all(inputs)
	if (locale === "zh") return zh_jams_entries_status_all(inputs)
	if (locale === "ja") return ja_jams_entries_status_all(inputs)
	return en_jams_entries_status_all(inputs)
});
