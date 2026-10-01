/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Vote_ContinueInputs */

const en_jams_vote_continue = /** @type {(inputs: Jams_Vote_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue voting`)
};

const es_jams_vote_continue = /** @type {(inputs: Jams_Vote_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguir votando`)
};

const de_jams_vote_continue = /** @type {(inputs: Jams_Vote_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weiter abstimmen`)
};

const fr_jams_vote_continue = /** @type {(inputs: Jams_Vote_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuer à voter`)
};

const it_jams_vote_continue = /** @type {(inputs: Jams_Vote_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continua a votare`)
};

const nl_jams_vote_continue = /** @type {(inputs: Jams_Vote_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verder stemmen`)
};

const pl_jams_vote_continue = /** @type {(inputs: Jams_Vote_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontynuuj głosowanie`)
};

const pt_jams_vote_continue = /** @type {(inputs: Jams_Vote_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuar votando`)
};

const ru_jams_vote_continue = /** @type {(inputs: Jams_Vote_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Продолжить голосование`)
};

const sv_jams_vote_continue = /** @type {(inputs: Jams_Vote_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortsätt rösta`)
};

const tr_jams_vote_continue = /** @type {(inputs: Jams_Vote_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylamaya devam et`)
};

const zh_jams_vote_continue = /** @type {(inputs: Jams_Vote_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`继续投票`)
};

const ja_jams_vote_continue = /** @type {(inputs: Jams_Vote_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票を続ける`)
};

/**
* | output |
* | --- |
* | "Continue voting" |
*
* @param {Jams_Vote_ContinueInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_continue = /** @type {((inputs?: Jams_Vote_ContinueInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_ContinueInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_continue(inputs)
	if (locale === "de") return de_jams_vote_continue(inputs)
	if (locale === "fr") return fr_jams_vote_continue(inputs)
	if (locale === "it") return it_jams_vote_continue(inputs)
	if (locale === "nl") return nl_jams_vote_continue(inputs)
	if (locale === "pl") return pl_jams_vote_continue(inputs)
	if (locale === "pt") return pt_jams_vote_continue(inputs)
	if (locale === "ru") return ru_jams_vote_continue(inputs)
	if (locale === "sv") return sv_jams_vote_continue(inputs)
	if (locale === "tr") return tr_jams_vote_continue(inputs)
	if (locale === "zh") return zh_jams_vote_continue(inputs)
	if (locale === "ja") return ja_jams_vote_continue(inputs)
	return en_jams_vote_continue(inputs)
});
