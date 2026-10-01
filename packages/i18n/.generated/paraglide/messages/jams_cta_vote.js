/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Cta_VoteInputs */

const en_jams_cta_vote = /** @type {(inputs: Jams_Cta_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vote now`)
};

const es_jams_cta_vote = /** @type {(inputs: Jams_Cta_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votar ahora`)
};

const de_jams_cta_vote = /** @type {(inputs: Jams_Cta_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jetzt abstimmen`)
};

const fr_jams_cta_vote = /** @type {(inputs: Jams_Cta_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voter maintenant`)
};

const it_jams_cta_vote = /** @type {(inputs: Jams_Cta_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vota ora`)
};

const nl_jams_cta_vote = /** @type {(inputs: Jams_Cta_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stem nu`)
};

const pl_jams_cta_vote = /** @type {(inputs: Jams_Cta_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Głosuj teraz`)
};

const pt_jams_cta_vote = /** @type {(inputs: Jams_Cta_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votar agora`)
};

const ru_jams_cta_vote = /** @type {(inputs: Jams_Cta_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Голосовать`)
};

const sv_jams_cta_vote = /** @type {(inputs: Jams_Cta_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rösta nu`)
};

const tr_jams_cta_vote = /** @type {(inputs: Jams_Cta_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şimdi oy ver`)
};

const zh_jams_cta_vote = /** @type {(inputs: Jams_Cta_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`立即投票`)
};

const ja_jams_cta_vote = /** @type {(inputs: Jams_Cta_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今すぐ投票`)
};

/**
* | output |
* | --- |
* | "Vote now" |
*
* @param {Jams_Cta_VoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_cta_vote = /** @type {((inputs?: Jams_Cta_VoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Cta_VoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_cta_vote(inputs)
	if (locale === "de") return de_jams_cta_vote(inputs)
	if (locale === "fr") return fr_jams_cta_vote(inputs)
	if (locale === "it") return it_jams_cta_vote(inputs)
	if (locale === "nl") return nl_jams_cta_vote(inputs)
	if (locale === "pl") return pl_jams_cta_vote(inputs)
	if (locale === "pt") return pt_jams_cta_vote(inputs)
	if (locale === "ru") return ru_jams_cta_vote(inputs)
	if (locale === "sv") return sv_jams_cta_vote(inputs)
	if (locale === "tr") return tr_jams_cta_vote(inputs)
	if (locale === "zh") return zh_jams_cta_vote(inputs)
	if (locale === "ja") return ja_jams_cta_vote(inputs)
	return en_jams_cta_vote(inputs)
});
