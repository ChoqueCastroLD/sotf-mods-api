/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_Status_LabelInputs */

const en_jams_entries_status_label = /** @type {(inputs: Jams_Entries_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entry status`)
};

const es_jams_entries_status_label = /** @type {(inputs: Jams_Entries_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado de las participaciones`)
};

const de_jams_entries_status_label = /** @type {(inputs: Jams_Entries_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status der Beiträge`)
};

const fr_jams_entries_status_label = /** @type {(inputs: Jams_Entries_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`État des participations`)
};

const it_jams_entries_status_label = /** @type {(inputs: Jams_Entries_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stato delle partecipazioni`)
};

const nl_jams_entries_status_label = /** @type {(inputs: Jams_Entries_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status van inzendingen`)
};

const pl_jams_entries_status_label = /** @type {(inputs: Jams_Entries_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stan zgłoszeń`)
};

const pt_jams_entries_status_label = /** @type {(inputs: Jams_Entries_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status das inscrições`)
};

const ru_jams_entries_status_label = /** @type {(inputs: Jams_Entries_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статус работ`)
};

const sv_jams_entries_status_label = /** @type {(inputs: Jams_Entries_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidragens status`)
};

const tr_jams_entries_status_label = /** @type {(inputs: Jams_Entries_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Katılım durumu`)
};

const zh_jams_entries_status_label = /** @type {(inputs: Jams_Entries_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品状态`)
};

const ja_jams_entries_status_label = /** @type {(inputs: Jams_Entries_Status_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品の状態`)
};

/**
* | output |
* | --- |
* | "Entry status" |
*
* @param {Jams_Entries_Status_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_status_label = /** @type {((inputs?: Jams_Entries_Status_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_Status_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_status_label(inputs)
	if (locale === "de") return de_jams_entries_status_label(inputs)
	if (locale === "fr") return fr_jams_entries_status_label(inputs)
	if (locale === "it") return it_jams_entries_status_label(inputs)
	if (locale === "nl") return nl_jams_entries_status_label(inputs)
	if (locale === "pl") return pl_jams_entries_status_label(inputs)
	if (locale === "pt") return pt_jams_entries_status_label(inputs)
	if (locale === "ru") return ru_jams_entries_status_label(inputs)
	if (locale === "sv") return sv_jams_entries_status_label(inputs)
	if (locale === "tr") return tr_jams_entries_status_label(inputs)
	if (locale === "zh") return zh_jams_entries_status_label(inputs)
	if (locale === "ja") return ja_jams_entries_status_label(inputs)
	return en_jams_entries_status_label(inputs)
});
