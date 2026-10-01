/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Vote_Rated_DoneInputs */

const en_jams_vote_rated_done = /** @type {(inputs: Jams_Vote_Rated_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rated`)
};

const es_jams_vote_rated_done = /** @type {(inputs: Jams_Vote_Rated_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valorada`)
};

const de_jams_vote_rated_done = /** @type {(inputs: Jams_Vote_Rated_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertet`)
};

const fr_jams_vote_rated_done = /** @type {(inputs: Jams_Vote_Rated_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notée`)
};

const it_jams_vote_rated_done = /** @type {(inputs: Jams_Vote_Rated_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valutata`)
};

const nl_jams_vote_rated_done = /** @type {(inputs: Jams_Vote_Rated_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beoordeeld`)
};

const pl_jams_vote_rated_done = /** @type {(inputs: Jams_Vote_Rated_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oceniono`)
};

const pt_jams_vote_rated_done = /** @type {(inputs: Jams_Vote_Rated_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliada`)
};

const ru_jams_vote_rated_done = /** @type {(inputs: Jams_Vote_Rated_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оценено`)
};

const sv_jams_vote_rated_done = /** @type {(inputs: Jams_Vote_Rated_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betygsatt`)
};

const tr_jams_vote_rated_done = /** @type {(inputs: Jams_Vote_Rated_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puanlandı`)
};

const zh_jams_vote_rated_done = /** @type {(inputs: Jams_Vote_Rated_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已评分`)
};

const ja_jams_vote_rated_done = /** @type {(inputs: Jams_Vote_Rated_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`評価済み`)
};

/**
* | output |
* | --- |
* | "Rated" |
*
* @param {Jams_Vote_Rated_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_rated_done = /** @type {((inputs?: Jams_Vote_Rated_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_Rated_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_rated_done(inputs)
	if (locale === "de") return de_jams_vote_rated_done(inputs)
	if (locale === "fr") return fr_jams_vote_rated_done(inputs)
	if (locale === "it") return it_jams_vote_rated_done(inputs)
	if (locale === "nl") return nl_jams_vote_rated_done(inputs)
	if (locale === "pl") return pl_jams_vote_rated_done(inputs)
	if (locale === "pt") return pt_jams_vote_rated_done(inputs)
	if (locale === "ru") return ru_jams_vote_rated_done(inputs)
	if (locale === "sv") return sv_jams_vote_rated_done(inputs)
	if (locale === "tr") return tr_jams_vote_rated_done(inputs)
	if (locale === "zh") return zh_jams_vote_rated_done(inputs)
	if (locale === "ja") return ja_jams_vote_rated_done(inputs)
	return en_jams_vote_rated_done(inputs)
});
