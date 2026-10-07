/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_Filtered_EmptyInputs */

const en_jams_entries_filtered_empty = /** @type {(inputs: Jams_Entries_Filtered_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No matching entries`)
};

const es_jams_entries_filtered_empty = /** @type {(inputs: Jams_Entries_Filtered_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay participaciones que coincidan`)
};

const de_jams_entries_filtered_empty = /** @type {(inputs: Jams_Entries_Filtered_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine passenden Beiträge`)
};

const fr_jams_entries_filtered_empty = /** @type {(inputs: Jams_Entries_Filtered_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune participation ne correspond`)
};

const it_jams_entries_filtered_empty = /** @type {(inputs: Jams_Entries_Filtered_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna partecipazione corrisponde`)
};

const nl_jams_entries_filtered_empty = /** @type {(inputs: Jams_Entries_Filtered_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen overeenkomende inzendingen`)
};

const pl_jams_entries_filtered_empty = /** @type {(inputs: Jams_Entries_Filtered_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak pasujących zgłoszeń`)
};

const pt_jams_entries_filtered_empty = /** @type {(inputs: Jams_Entries_Filtered_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma inscrição corresponde`)
};

const ru_jams_entries_filtered_empty = /** @type {(inputs: Jams_Entries_Filtered_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работ не найдено`)
};

const sv_jams_entries_filtered_empty = /** @type {(inputs: Jams_Entries_Filtered_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga matchande bidrag`)
};

const tr_jams_entries_filtered_empty = /** @type {(inputs: Jams_Entries_Filtered_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eşleşen katılım yok`)
};

const zh_jams_entries_filtered_empty = /** @type {(inputs: Jams_Entries_Filtered_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有符合条件的作品`)
};

const ja_jams_entries_filtered_empty = /** @type {(inputs: Jams_Entries_Filtered_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`該当する作品はありません`)
};

/**
* | output |
* | --- |
* | "No matching entries" |
*
* @param {Jams_Entries_Filtered_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_filtered_empty = /** @type {((inputs?: Jams_Entries_Filtered_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_Filtered_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_filtered_empty(inputs)
	if (locale === "de") return de_jams_entries_filtered_empty(inputs)
	if (locale === "fr") return fr_jams_entries_filtered_empty(inputs)
	if (locale === "it") return it_jams_entries_filtered_empty(inputs)
	if (locale === "nl") return nl_jams_entries_filtered_empty(inputs)
	if (locale === "pl") return pl_jams_entries_filtered_empty(inputs)
	if (locale === "pt") return pt_jams_entries_filtered_empty(inputs)
	if (locale === "ru") return ru_jams_entries_filtered_empty(inputs)
	if (locale === "sv") return sv_jams_entries_filtered_empty(inputs)
	if (locale === "tr") return tr_jams_entries_filtered_empty(inputs)
	if (locale === "zh") return zh_jams_entries_filtered_empty(inputs)
	if (locale === "ja") return ja_jams_entries_filtered_empty(inputs)
	return en_jams_entries_filtered_empty(inputs)
});
