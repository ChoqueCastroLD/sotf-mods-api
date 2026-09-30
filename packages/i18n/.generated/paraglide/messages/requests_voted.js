/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_VotedInputs */

const en_requests_voted = /** @type {(inputs: Requests_VotedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voted`)
};

const es_requests_voted = /** @type {(inputs: Requests_VotedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votado`)
};

const de_requests_voted = /** @type {(inputs: Requests_VotedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abgestimmt`)
};

const fr_requests_voted = /** @type {(inputs: Requests_VotedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voté`)
};

const it_requests_voted = /** @type {(inputs: Requests_VotedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votato`)
};

const nl_requests_voted = /** @type {(inputs: Requests_VotedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gestemd`)
};

const pl_requests_voted = /** @type {(inputs: Requests_VotedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zagłosowano`)
};

const pt_requests_voted = /** @type {(inputs: Requests_VotedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votado`)
};

const ru_requests_voted = /** @type {(inputs: Requests_VotedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы проголосовали`)
};

const sv_requests_voted = /** @type {(inputs: Requests_VotedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Röstat`)
};

const tr_requests_voted = /** @type {(inputs: Requests_VotedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oy verildi`)
};

const zh_requests_voted = /** @type {(inputs: Requests_VotedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已投票`)
};

const ja_requests_voted = /** @type {(inputs: Requests_VotedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票済み`)
};

/**
* | output |
* | --- |
* | "Voted" |
*
* @param {Requests_VotedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_voted = /** @type {((inputs?: Requests_VotedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_VotedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_voted(inputs)
	if (locale === "de") return de_requests_voted(inputs)
	if (locale === "fr") return fr_requests_voted(inputs)
	if (locale === "it") return it_requests_voted(inputs)
	if (locale === "nl") return nl_requests_voted(inputs)
	if (locale === "pl") return pl_requests_voted(inputs)
	if (locale === "pt") return pt_requests_voted(inputs)
	if (locale === "ru") return ru_requests_voted(inputs)
	if (locale === "sv") return sv_requests_voted(inputs)
	if (locale === "tr") return tr_requests_voted(inputs)
	if (locale === "zh") return zh_requests_voted(inputs)
	if (locale === "ja") return ja_requests_voted(inputs)
	return en_requests_voted(inputs)
});
