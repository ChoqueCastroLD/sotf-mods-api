/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_EmptyInputs */

const en_jams_entries_empty = /** @type {(inputs: Jams_Entries_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No entries yet.`)
};

const es_jams_entries_empty = /** @type {(inputs: Jams_Entries_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay participaciones.`)
};

const de_jams_entries_empty = /** @type {(inputs: Jams_Entries_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Beiträge.`)
};

const fr_jams_entries_empty = /** @type {(inputs: Jams_Entries_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune participation pour le moment.`)
};

const it_jams_entries_empty = /** @type {(inputs: Jams_Entries_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna iscrizione.`)
};

const nl_jams_entries_empty = /** @type {(inputs: Jams_Entries_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen inzendingen.`)
};

const pl_jams_entries_empty = /** @type {(inputs: Jams_Entries_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na razie brak zgłoszeń.`)
};

const pt_jams_entries_empty = /** @type {(inputs: Jams_Entries_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há inscrições.`)
};

const ru_jams_entries_empty = /** @type {(inputs: Jams_Entries_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работ пока нет.`)
};

const sv_jams_entries_empty = /** @type {(inputs: Jams_Entries_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga bidrag ännu.`)
};

const tr_jams_entries_empty = /** @type {(inputs: Jams_Entries_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz başvuru yok.`)
};

const zh_jams_entries_empty = /** @type {(inputs: Jams_Entries_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无参赛作品。`)
};

const ja_jams_entries_empty = /** @type {(inputs: Jams_Entries_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ作品はありません。`)
};

/**
* | output |
* | --- |
* | "No entries yet." |
*
* @param {Jams_Entries_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_empty = /** @type {((inputs?: Jams_Entries_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_empty(inputs)
	if (locale === "de") return de_jams_entries_empty(inputs)
	if (locale === "fr") return fr_jams_entries_empty(inputs)
	if (locale === "it") return it_jams_entries_empty(inputs)
	if (locale === "nl") return nl_jams_entries_empty(inputs)
	if (locale === "pl") return pl_jams_entries_empty(inputs)
	if (locale === "pt") return pt_jams_entries_empty(inputs)
	if (locale === "ru") return ru_jams_entries_empty(inputs)
	if (locale === "sv") return sv_jams_entries_empty(inputs)
	if (locale === "tr") return tr_jams_entries_empty(inputs)
	if (locale === "zh") return zh_jams_entries_empty(inputs)
	if (locale === "ja") return ja_jams_entries_empty(inputs)
	return en_jams_entries_empty(inputs)
});
