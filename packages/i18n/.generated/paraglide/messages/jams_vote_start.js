/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Vote_StartInputs */

const en_jams_vote_start = /** @type {(inputs: Jams_Vote_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start voting`)
};

const es_jams_vote_start = /** @type {(inputs: Jams_Vote_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Empezar a votar`)
};

const de_jams_vote_start = /** @type {(inputs: Jams_Vote_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abstimmung starten`)
};

const fr_jams_vote_start = /** @type {(inputs: Jams_Vote_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commencer à voter`)
};

const it_jams_vote_start = /** @type {(inputs: Jams_Vote_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inizia a votare`)
};

const nl_jams_vote_start = /** @type {(inputs: Jams_Vote_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Begin met stemmen`)
};

const pl_jams_vote_start = /** @type {(inputs: Jams_Vote_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zacznij głosować`)
};

const pt_jams_vote_start = /** @type {(inputs: Jams_Vote_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Começar a votar`)
};

const ru_jams_vote_start = /** @type {(inputs: Jams_Vote_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Начать голосование`)
};

const sv_jams_vote_start = /** @type {(inputs: Jams_Vote_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Börja rösta`)
};

const tr_jams_vote_start = /** @type {(inputs: Jams_Vote_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylamaya başla`)
};

const zh_jams_vote_start = /** @type {(inputs: Jams_Vote_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开始投票`)
};

const ja_jams_vote_start = /** @type {(inputs: Jams_Vote_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票を始める`)
};

/**
* | output |
* | --- |
* | "Start voting" |
*
* @param {Jams_Vote_StartInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_start = /** @type {((inputs?: Jams_Vote_StartInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_StartInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_start(inputs)
	if (locale === "de") return de_jams_vote_start(inputs)
	if (locale === "fr") return fr_jams_vote_start(inputs)
	if (locale === "it") return it_jams_vote_start(inputs)
	if (locale === "nl") return nl_jams_vote_start(inputs)
	if (locale === "pl") return pl_jams_vote_start(inputs)
	if (locale === "pt") return pt_jams_vote_start(inputs)
	if (locale === "ru") return ru_jams_vote_start(inputs)
	if (locale === "sv") return sv_jams_vote_start(inputs)
	if (locale === "tr") return tr_jams_vote_start(inputs)
	if (locale === "zh") return zh_jams_vote_start(inputs)
	if (locale === "ja") return ja_jams_vote_start(inputs)
	return en_jams_vote_start(inputs)
});
