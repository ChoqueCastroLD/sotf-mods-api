/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_Col_VotesInputs */

const en_jams_entries_col_votes = /** @type {(inputs: Jams_Entries_Col_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votes`)
};

const es_jams_entries_col_votes = /** @type {(inputs: Jams_Entries_Col_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votos`)
};

const de_jams_entries_col_votes = /** @type {(inputs: Jams_Entries_Col_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stimmen`)
};

const fr_jams_entries_col_votes = /** @type {(inputs: Jams_Entries_Col_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votes`)
};

const it_jams_entries_col_votes = /** @type {(inputs: Jams_Entries_Col_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voti`)
};

const nl_jams_entries_col_votes = /** @type {(inputs: Jams_Entries_Col_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemmen`)
};

const pl_jams_entries_col_votes = /** @type {(inputs: Jams_Entries_Col_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Głosy`)
};

const pt_jams_entries_col_votes = /** @type {(inputs: Jams_Entries_Col_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votos`)
};

const ru_jams_entries_col_votes = /** @type {(inputs: Jams_Entries_Col_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Голоса`)
};

const sv_jams_entries_col_votes = /** @type {(inputs: Jams_Entries_Col_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Röster`)
};

const tr_jams_entries_col_votes = /** @type {(inputs: Jams_Entries_Col_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylar`)
};

const zh_jams_entries_col_votes = /** @type {(inputs: Jams_Entries_Col_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`票数`)
};

const ja_jams_entries_col_votes = /** @type {(inputs: Jams_Entries_Col_VotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`票数`)
};

/**
* | output |
* | --- |
* | "Votes" |
*
* @param {Jams_Entries_Col_VotesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_col_votes = /** @type {((inputs?: Jams_Entries_Col_VotesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_Col_VotesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_col_votes(inputs)
	if (locale === "de") return de_jams_entries_col_votes(inputs)
	if (locale === "fr") return fr_jams_entries_col_votes(inputs)
	if (locale === "it") return it_jams_entries_col_votes(inputs)
	if (locale === "nl") return nl_jams_entries_col_votes(inputs)
	if (locale === "pl") return pl_jams_entries_col_votes(inputs)
	if (locale === "pt") return pt_jams_entries_col_votes(inputs)
	if (locale === "ru") return ru_jams_entries_col_votes(inputs)
	if (locale === "sv") return sv_jams_entries_col_votes(inputs)
	if (locale === "tr") return tr_jams_entries_col_votes(inputs)
	if (locale === "zh") return zh_jams_entries_col_votes(inputs)
	if (locale === "ja") return ja_jams_entries_col_votes(inputs)
	return en_jams_entries_col_votes(inputs)
});
