/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_VoteInputs */

const en_requests_vote = /** @type {(inputs: Requests_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vote`)
};

const es_requests_vote = /** @type {(inputs: Requests_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votar`)
};

const de_requests_vote = /** @type {(inputs: Requests_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abstimmen`)
};

const fr_requests_vote = /** @type {(inputs: Requests_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voter`)
};

const it_requests_vote = /** @type {(inputs: Requests_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vota`)
};

const nl_requests_vote = /** @type {(inputs: Requests_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stem`)
};

const pl_requests_vote = /** @type {(inputs: Requests_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Głosuj`)
};

const pt_requests_vote = /** @type {(inputs: Requests_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votar`)
};

const ru_requests_vote = /** @type {(inputs: Requests_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Голосовать`)
};

const sv_requests_vote = /** @type {(inputs: Requests_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rösta`)
};

const tr_requests_vote = /** @type {(inputs: Requests_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oy ver`)
};

const zh_requests_vote = /** @type {(inputs: Requests_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票`)
};

const ja_requests_vote = /** @type {(inputs: Requests_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票`)
};

/**
* | output |
* | --- |
* | "Vote" |
*
* @param {Requests_VoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_vote = /** @type {((inputs?: Requests_VoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_VoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_vote(inputs)
	if (locale === "de") return de_requests_vote(inputs)
	if (locale === "fr") return fr_requests_vote(inputs)
	if (locale === "it") return it_requests_vote(inputs)
	if (locale === "nl") return nl_requests_vote(inputs)
	if (locale === "pl") return pl_requests_vote(inputs)
	if (locale === "pt") return pt_requests_vote(inputs)
	if (locale === "ru") return ru_requests_vote(inputs)
	if (locale === "sv") return sv_requests_vote(inputs)
	if (locale === "tr") return tr_requests_vote(inputs)
	if (locale === "zh") return zh_requests_vote(inputs)
	if (locale === "ja") return ja_requests_vote(inputs)
	return en_requests_vote(inputs)
});
