/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_Sort_VotesInputs */

const en_jams_entries_sort_votes = /** @type {(inputs: Jams_Entries_Sort_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most votes`)
};

const es_jams_entries_sort_votes = /** @type {(inputs: Jams_Entries_Sort_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más votos`)
};

const de_jams_entries_sort_votes = /** @type {(inputs: Jams_Entries_Sort_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meiste Stimmen`)
};

const fr_jams_entries_sort_votes = /** @type {(inputs: Jams_Entries_Sort_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus de votes`)
};

const it_jams_entries_sort_votes = /** @type {(inputs: Jams_Entries_Sort_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più voti`)
};

const nl_jams_entries_sort_votes = /** @type {(inputs: Jams_Entries_Sort_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meeste stemmen`)
};

const pl_jams_entries_sort_votes = /** @type {(inputs: Jams_Entries_Sort_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najwięcej głosów`)
};

const pt_jams_entries_sort_votes = /** @type {(inputs: Jams_Entries_Sort_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais votos`)
};

const ru_jams_entries_sort_votes = /** @type {(inputs: Jams_Entries_Sort_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше голосов`)
};

const sv_jams_entries_sort_votes = /** @type {(inputs: Jams_Entries_Sort_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flest röster`)
};

const tr_jams_entries_sort_votes = /** @type {(inputs: Jams_Entries_Sort_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok oy`)
};

const zh_jams_entries_sort_votes = /** @type {(inputs: Jams_Entries_Sort_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`得票最多`)
};

const ja_jams_entries_sort_votes = /** @type {(inputs: Jams_Entries_Sort_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`得票が多い順`)
};

/**
* | output |
* | --- |
* | "Most votes" |
*
* @param {Jams_Entries_Sort_VotesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_sort_votes = /** @type {((inputs?: Jams_Entries_Sort_VotesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_Sort_VotesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_sort_votes(inputs)
	if (locale === "de") return de_jams_entries_sort_votes(inputs)
	if (locale === "fr") return fr_jams_entries_sort_votes(inputs)
	if (locale === "it") return it_jams_entries_sort_votes(inputs)
	if (locale === "nl") return nl_jams_entries_sort_votes(inputs)
	if (locale === "pl") return pl_jams_entries_sort_votes(inputs)
	if (locale === "pt") return pt_jams_entries_sort_votes(inputs)
	if (locale === "ru") return ru_jams_entries_sort_votes(inputs)
	if (locale === "sv") return sv_jams_entries_sort_votes(inputs)
	if (locale === "tr") return tr_jams_entries_sort_votes(inputs)
	if (locale === "zh") return zh_jams_entries_sort_votes(inputs)
	if (locale === "ja") return ja_jams_entries_sort_votes(inputs)
	return en_jams_entries_sort_votes(inputs)
});
