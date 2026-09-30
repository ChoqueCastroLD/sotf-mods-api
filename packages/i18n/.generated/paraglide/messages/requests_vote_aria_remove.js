/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Vote_Aria_RemoveInputs */

const en_requests_vote_aria_remove = /** @type {(inputs: Requests_Vote_Aria_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove your vote`)
};

const es_requests_vote_aria_remove = /** @type {(inputs: Requests_Vote_Aria_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar tu voto`)
};

const de_requests_vote_aria_remove = /** @type {(inputs: Requests_Vote_Aria_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stimme zurückziehen`)
};

const fr_requests_vote_aria_remove = /** @type {(inputs: Requests_Vote_Aria_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer votre vote`)
};

const it_requests_vote_aria_remove = /** @type {(inputs: Requests_Vote_Aria_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi il tuo voto`)
};

const nl_requests_vote_aria_remove = /** @type {(inputs: Requests_Vote_Aria_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stem intrekken`)
};

const pl_requests_vote_aria_remove = /** @type {(inputs: Requests_Vote_Aria_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cofnij głos`)
};

const pt_requests_vote_aria_remove = /** @type {(inputs: Requests_Vote_Aria_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover seu voto`)
};

const ru_requests_vote_aria_remove = /** @type {(inputs: Requests_Vote_Aria_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отозвать голос`)
};

const sv_requests_vote_aria_remove = /** @type {(inputs: Requests_Vote_Aria_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort din röst`)
};

const tr_requests_vote_aria_remove = /** @type {(inputs: Requests_Vote_Aria_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyunu geri al`)
};

const zh_requests_vote_aria_remove = /** @type {(inputs: Requests_Vote_Aria_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤销投票`)
};

const ja_requests_vote_aria_remove = /** @type {(inputs: Requests_Vote_Aria_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票を取り消す`)
};

/**
* | output |
* | --- |
* | "Remove your vote" |
*
* @param {Requests_Vote_Aria_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_vote_aria_remove = /** @type {((inputs?: Requests_Vote_Aria_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Vote_Aria_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_vote_aria_remove(inputs)
	if (locale === "de") return de_requests_vote_aria_remove(inputs)
	if (locale === "fr") return fr_requests_vote_aria_remove(inputs)
	if (locale === "it") return it_requests_vote_aria_remove(inputs)
	if (locale === "nl") return nl_requests_vote_aria_remove(inputs)
	if (locale === "pl") return pl_requests_vote_aria_remove(inputs)
	if (locale === "pt") return pt_requests_vote_aria_remove(inputs)
	if (locale === "ru") return ru_requests_vote_aria_remove(inputs)
	if (locale === "sv") return sv_requests_vote_aria_remove(inputs)
	if (locale === "tr") return tr_requests_vote_aria_remove(inputs)
	if (locale === "zh") return zh_requests_vote_aria_remove(inputs)
	if (locale === "ja") return ja_requests_vote_aria_remove(inputs)
	return en_requests_vote_aria_remove(inputs)
});
