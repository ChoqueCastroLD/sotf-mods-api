/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ done: NonNullable<unknown>, total: NonNullable<unknown> }} Jams_Vote_RatedInputs */

const en_jams_vote_rated = /** @type {(inputs: Jams_Vote_RatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done} of ${i?.total} rated`)
};

const es_jams_vote_rated = /** @type {(inputs: Jams_Vote_RatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done} de ${i?.total} valoradas`)
};

const de_jams_vote_rated = /** @type {(inputs: Jams_Vote_RatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done} von ${i?.total} bewertet`)
};

const fr_jams_vote_rated = /** @type {(inputs: Jams_Vote_RatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done} sur ${i?.total} notées`)
};

const it_jams_vote_rated = /** @type {(inputs: Jams_Vote_RatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done} di ${i?.total} valutate`)
};

const nl_jams_vote_rated = /** @type {(inputs: Jams_Vote_RatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done} van ${i?.total} beoordeeld`)
};

const pl_jams_vote_rated = /** @type {(inputs: Jams_Vote_RatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oceniono ${i?.done} z ${i?.total}`)
};

const pt_jams_vote_rated = /** @type {(inputs: Jams_Vote_RatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done} de ${i?.total} avaliadas`)
};

const ru_jams_vote_rated = /** @type {(inputs: Jams_Vote_RatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Оценено ${i?.done} из ${i?.total}`)
};

const sv_jams_vote_rated = /** @type {(inputs: Jams_Vote_RatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done} av ${i?.total} betygsatta`)
};

const tr_jams_vote_rated = /** @type {(inputs: Jams_Vote_RatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.done} / ${i?.total} puanlandı`)
};

const zh_jams_vote_rated = /** @type {(inputs: Jams_Vote_RatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已评 ${i?.done}/${i?.total}`)
};

const ja_jams_vote_rated = /** @type {(inputs: Jams_Vote_RatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} 件中 ${i?.done} 件を評価済み`)
};

/**
* | output |
* | --- |
* | "{done} of {total} rated" |
*
* @param {Jams_Vote_RatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_rated = /** @type {((inputs: Jams_Vote_RatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_RatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_rated(inputs)
	if (locale === "de") return de_jams_vote_rated(inputs)
	if (locale === "fr") return fr_jams_vote_rated(inputs)
	if (locale === "it") return it_jams_vote_rated(inputs)
	if (locale === "nl") return nl_jams_vote_rated(inputs)
	if (locale === "pl") return pl_jams_vote_rated(inputs)
	if (locale === "pt") return pt_jams_vote_rated(inputs)
	if (locale === "ru") return ru_jams_vote_rated(inputs)
	if (locale === "sv") return sv_jams_vote_rated(inputs)
	if (locale === "tr") return tr_jams_vote_rated(inputs)
	if (locale === "zh") return zh_jams_vote_rated(inputs)
	if (locale === "ja") return ja_jams_vote_rated(inputs)
	return en_jams_vote_rated(inputs)
});
