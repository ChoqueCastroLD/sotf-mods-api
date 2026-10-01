/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Stage_VoteInputs */

const en_jams_stage_vote = /** @type {(inputs: Jams_Stage_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vote`)
};

const es_jams_stage_vote = /** @type {(inputs: Jams_Stage_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vota`)
};

const de_jams_stage_vote = /** @type {(inputs: Jams_Stage_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abstimmen`)
};

const fr_jams_stage_vote = /** @type {(inputs: Jams_Stage_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vote`)
};

const it_jams_stage_vote = /** @type {(inputs: Jams_Stage_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vota`)
};

const nl_jams_stage_vote = /** @type {(inputs: Jams_Stage_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemmen`)
};

const pl_jams_stage_vote = /** @type {(inputs: Jams_Stage_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Głosowanie`)
};

const pt_jams_stage_vote = /** @type {(inputs: Jams_Stage_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votação`)
};

const ru_jams_stage_vote = /** @type {(inputs: Jams_Stage_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Голосование`)
};

const sv_jams_stage_vote = /** @type {(inputs: Jams_Stage_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rösta`)
};

const tr_jams_stage_vote = /** @type {(inputs: Jams_Stage_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylama`)
};

const zh_jams_stage_vote = /** @type {(inputs: Jams_Stage_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票`)
};

const ja_jams_stage_vote = /** @type {(inputs: Jams_Stage_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票`)
};

/**
* | output |
* | --- |
* | "Vote" |
*
* @param {Jams_Stage_VoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_stage_vote = /** @type {((inputs?: Jams_Stage_VoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Stage_VoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_stage_vote(inputs)
	if (locale === "de") return de_jams_stage_vote(inputs)
	if (locale === "fr") return fr_jams_stage_vote(inputs)
	if (locale === "it") return it_jams_stage_vote(inputs)
	if (locale === "nl") return nl_jams_stage_vote(inputs)
	if (locale === "pl") return pl_jams_stage_vote(inputs)
	if (locale === "pt") return pt_jams_stage_vote(inputs)
	if (locale === "ru") return ru_jams_stage_vote(inputs)
	if (locale === "sv") return sv_jams_stage_vote(inputs)
	if (locale === "tr") return tr_jams_stage_vote(inputs)
	if (locale === "zh") return zh_jams_stage_vote(inputs)
	if (locale === "ja") return ja_jams_stage_vote(inputs)
	return en_jams_stage_vote(inputs)
});
