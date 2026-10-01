/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Vote_NothingInputs */

const en_jams_vote_nothing = /** @type {(inputs: Jams_Vote_NothingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`There is nothing to rate yet.`)
};

const es_jams_vote_nothing = /** @type {(inputs: Jams_Vote_NothingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no hay nada que valorar.`)
};

const de_jams_vote_nothing = /** @type {(inputs: Jams_Vote_NothingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es gibt noch nichts zu bewerten.`)
};

const fr_jams_vote_nothing = /** @type {(inputs: Jams_Vote_NothingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il n'y a encore rien à noter.`)
};

const it_jams_vote_nothing = /** @type {(inputs: Jams_Vote_NothingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non c'è ancora nulla da valutare.`)
};

const nl_jams_vote_nothing = /** @type {(inputs: Jams_Vote_NothingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er is nog niets om te beoordelen.`)
};

const pl_jams_vote_nothing = /** @type {(inputs: Jams_Vote_NothingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie ma jeszcze nic do oceny.`)
};

const pt_jams_vote_nothing = /** @type {(inputs: Jams_Vote_NothingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há nada para avaliar.`)
};

const ru_jams_vote_nothing = /** @type {(inputs: Jams_Vote_NothingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока нечего оценивать.`)
};

const sv_jams_vote_nothing = /** @type {(inputs: Jams_Vote_NothingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det finns inget att betygsätta än.`)
};

const tr_jams_vote_nothing = /** @type {(inputs: Jams_Vote_NothingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz puanlanacak bir şey yok.`)
};

const zh_jams_vote_nothing = /** @type {(inputs: Jams_Vote_NothingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂时没有可评分的作品。`)
};

const ja_jams_vote_nothing = /** @type {(inputs: Jams_Vote_NothingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ評価できる作品がありません。`)
};

/**
* | output |
* | --- |
* | "There is nothing to rate yet." |
*
* @param {Jams_Vote_NothingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_nothing = /** @type {((inputs?: Jams_Vote_NothingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_NothingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_nothing(inputs)
	if (locale === "de") return de_jams_vote_nothing(inputs)
	if (locale === "fr") return fr_jams_vote_nothing(inputs)
	if (locale === "it") return it_jams_vote_nothing(inputs)
	if (locale === "nl") return nl_jams_vote_nothing(inputs)
	if (locale === "pl") return pl_jams_vote_nothing(inputs)
	if (locale === "pt") return pt_jams_vote_nothing(inputs)
	if (locale === "ru") return ru_jams_vote_nothing(inputs)
	if (locale === "sv") return sv_jams_vote_nothing(inputs)
	if (locale === "tr") return tr_jams_vote_nothing(inputs)
	if (locale === "zh") return zh_jams_vote_nothing(inputs)
	if (locale === "ja") return ja_jams_vote_nothing(inputs)
	return en_jams_vote_nothing(inputs)
});
