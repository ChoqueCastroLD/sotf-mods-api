/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Vote_NoInputs */

const en_social_vote_no = /** @type {(inputs: Social_Vote_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not helpful`)
};

const es_social_vote_no = /** @type {(inputs: Social_Vote_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No es útil`)
};

const de_social_vote_no = /** @type {(inputs: Social_Vote_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht hilfreich`)
};

const fr_social_vote_no = /** @type {(inputs: Social_Vote_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas utile`)
};

const it_social_vote_no = /** @type {(inputs: Social_Vote_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non utile`)
};

const nl_social_vote_no = /** @type {(inputs: Social_Vote_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet nuttig`)
};

const pl_social_vote_no = /** @type {(inputs: Social_Vote_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niepomocna`)
};

const pt_social_vote_no = /** @type {(inputs: Social_Vote_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não é útil`)
};

const ru_social_vote_no = /** @type {(inputs: Social_Vote_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Бесполезно`)
};

const sv_social_vote_no = /** @type {(inputs: Social_Vote_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte hjälpsam`)
};

const tr_social_vote_no = /** @type {(inputs: Social_Vote_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faydalı değil`)
};

const zh_social_vote_no = /** @type {(inputs: Social_Vote_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有帮助`)
};

const ja_social_vote_no = /** @type {(inputs: Social_Vote_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`参考にならなかった`)
};

/**
* | output |
* | --- |
* | "Not helpful" |
*
* @param {Social_Vote_NoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_vote_no = /** @type {((inputs?: Social_Vote_NoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Vote_NoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_vote_no(inputs)
	if (locale === "de") return de_social_vote_no(inputs)
	if (locale === "fr") return fr_social_vote_no(inputs)
	if (locale === "it") return it_social_vote_no(inputs)
	if (locale === "nl") return nl_social_vote_no(inputs)
	if (locale === "pl") return pl_social_vote_no(inputs)
	if (locale === "pt") return pt_social_vote_no(inputs)
	if (locale === "ru") return ru_social_vote_no(inputs)
	if (locale === "sv") return sv_social_vote_no(inputs)
	if (locale === "tr") return tr_social_vote_no(inputs)
	if (locale === "zh") return zh_social_vote_no(inputs)
	if (locale === "ja") return ja_social_vote_no(inputs)
	return en_social_vote_no(inputs)
});
