/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Votes_ShortInputs */

const en_requests_votes_short = /** @type {(inputs: Requests_Votes_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`votes`)
};

const es_requests_votes_short = /** @type {(inputs: Requests_Votes_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`votos`)
};

const de_requests_votes_short = /** @type {(inputs: Requests_Votes_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stimmen`)
};

const fr_requests_votes_short = /** @type {(inputs: Requests_Votes_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`votes`)
};

const it_requests_votes_short = /** @type {(inputs: Requests_Votes_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`voti`)
};

const nl_requests_votes_short = /** @type {(inputs: Requests_Votes_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`stemmen`)
};

const pl_requests_votes_short = /** @type {(inputs: Requests_Votes_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`głosów`)
};

const pt_requests_votes_short = /** @type {(inputs: Requests_Votes_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`votos`)
};

const ru_requests_votes_short = /** @type {(inputs: Requests_Votes_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`голосов`)
};

const sv_requests_votes_short = /** @type {(inputs: Requests_Votes_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`röster`)
};

const tr_requests_votes_short = /** @type {(inputs: Requests_Votes_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`oy`)
};

const zh_requests_votes_short = /** @type {(inputs: Requests_Votes_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`票`)
};

const ja_requests_votes_short = /** @type {(inputs: Requests_Votes_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`票`)
};

/**
* | output |
* | --- |
* | "votes" |
*
* @param {Requests_Votes_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_votes_short = /** @type {((inputs?: Requests_Votes_ShortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Votes_ShortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_votes_short(inputs)
	if (locale === "de") return de_requests_votes_short(inputs)
	if (locale === "fr") return fr_requests_votes_short(inputs)
	if (locale === "it") return it_requests_votes_short(inputs)
	if (locale === "nl") return nl_requests_votes_short(inputs)
	if (locale === "pl") return pl_requests_votes_short(inputs)
	if (locale === "pt") return pt_requests_votes_short(inputs)
	if (locale === "ru") return ru_requests_votes_short(inputs)
	if (locale === "sv") return sv_requests_votes_short(inputs)
	if (locale === "tr") return tr_requests_votes_short(inputs)
	if (locale === "zh") return zh_requests_votes_short(inputs)
	if (locale === "ja") return ja_requests_votes_short(inputs)
	return en_requests_votes_short(inputs)
});
