/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Vote_Aria_AddInputs */

const en_requests_vote_aria_add = /** @type {(inputs: Requests_Vote_Aria_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vote for this request`)
};

const es_requests_vote_aria_add = /** @type {(inputs: Requests_Vote_Aria_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votar esta petición`)
};

const de_requests_vote_aria_add = /** @type {(inputs: Requests_Vote_Aria_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für diesen Wunsch abstimmen`)
};

const fr_requests_vote_aria_add = /** @type {(inputs: Requests_Vote_Aria_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voter pour cette demande`)
};

const it_requests_vote_aria_add = /** @type {(inputs: Requests_Vote_Aria_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vota questa richiesta`)
};

const nl_requests_vote_aria_add = /** @type {(inputs: Requests_Vote_Aria_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stem op dit verzoek`)
};

const pl_requests_vote_aria_add = /** @type {(inputs: Requests_Vote_Aria_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zagłosuj na tę prośbę`)
};

const pt_requests_vote_aria_add = /** @type {(inputs: Requests_Vote_Aria_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votar neste pedido`)
};

const ru_requests_vote_aria_add = /** @type {(inputs: Requests_Vote_Aria_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проголосовать за этот запрос`)
};

const sv_requests_vote_aria_add = /** @type {(inputs: Requests_Vote_Aria_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rösta på det här önskemålet`)
};

const tr_requests_vote_aria_add = /** @type {(inputs: Requests_Vote_Aria_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu isteğe oy ver`)
};

const zh_requests_vote_aria_add = /** @type {(inputs: Requests_Vote_Aria_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为此请求投票`)
};

const ja_requests_vote_aria_add = /** @type {(inputs: Requests_Vote_Aria_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このリクエストに投票`)
};

/**
* | output |
* | --- |
* | "Vote for this request" |
*
* @param {Requests_Vote_Aria_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_vote_aria_add = /** @type {((inputs?: Requests_Vote_Aria_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Vote_Aria_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_vote_aria_add(inputs)
	if (locale === "de") return de_requests_vote_aria_add(inputs)
	if (locale === "fr") return fr_requests_vote_aria_add(inputs)
	if (locale === "it") return it_requests_vote_aria_add(inputs)
	if (locale === "nl") return nl_requests_vote_aria_add(inputs)
	if (locale === "pl") return pl_requests_vote_aria_add(inputs)
	if (locale === "pt") return pt_requests_vote_aria_add(inputs)
	if (locale === "ru") return ru_requests_vote_aria_add(inputs)
	if (locale === "sv") return sv_requests_vote_aria_add(inputs)
	if (locale === "tr") return tr_requests_vote_aria_add(inputs)
	if (locale === "zh") return zh_requests_vote_aria_add(inputs)
	if (locale === "ja") return ja_requests_vote_aria_add(inputs)
	return en_requests_vote_aria_add(inputs)
});
