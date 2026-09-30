/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Vote_ActionInputs */

const en_jams_vote_action = /** @type {(inputs: Jams_Vote_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rate`)
};

const es_jams_vote_action = /** @type {(inputs: Jams_Vote_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valorar`)
};

const de_jams_vote_action = /** @type {(inputs: Jams_Vote_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewerten`)
};

const fr_jams_vote_action = /** @type {(inputs: Jams_Vote_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noter`)
};

const it_jams_vote_action = /** @type {(inputs: Jams_Vote_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valuta`)
};

const nl_jams_vote_action = /** @type {(inputs: Jams_Vote_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beoordeel`)
};

const pl_jams_vote_action = /** @type {(inputs: Jams_Vote_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oceń`)
};

const pt_jams_vote_action = /** @type {(inputs: Jams_Vote_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliar`)
};

const ru_jams_vote_action = /** @type {(inputs: Jams_Vote_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оценить`)
};

const sv_jams_vote_action = /** @type {(inputs: Jams_Vote_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betygsätt`)
};

const tr_jams_vote_action = /** @type {(inputs: Jams_Vote_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puanla`)
};

const zh_jams_vote_action = /** @type {(inputs: Jams_Vote_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评分`)
};

const ja_jams_vote_action = /** @type {(inputs: Jams_Vote_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`評価する`)
};

/**
* | output |
* | --- |
* | "Rate" |
*
* @param {Jams_Vote_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_action = /** @type {((inputs?: Jams_Vote_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_action(inputs)
	if (locale === "de") return de_jams_vote_action(inputs)
	if (locale === "fr") return fr_jams_vote_action(inputs)
	if (locale === "it") return it_jams_vote_action(inputs)
	if (locale === "nl") return nl_jams_vote_action(inputs)
	if (locale === "pl") return pl_jams_vote_action(inputs)
	if (locale === "pt") return pt_jams_vote_action(inputs)
	if (locale === "ru") return ru_jams_vote_action(inputs)
	if (locale === "sv") return sv_jams_vote_action(inputs)
	if (locale === "tr") return tr_jams_vote_action(inputs)
	if (locale === "zh") return zh_jams_vote_action(inputs)
	if (locale === "ja") return ja_jams_vote_action(inputs)
	return en_jams_vote_action(inputs)
});
