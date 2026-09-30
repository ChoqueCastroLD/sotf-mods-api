/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Vote_OwnInputs */

const en_jams_vote_own = /** @type {(inputs: Jams_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your entry`)
};

const es_jams_vote_own = /** @type {(inputs: Jams_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu participación`)
};

const de_jams_vote_own = /** @type {(inputs: Jams_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Beitrag`)
};

const fr_jams_vote_own = /** @type {(inputs: Jams_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre participation`)
};

const it_jams_vote_own = /** @type {(inputs: Jams_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua iscrizione`)
};

const nl_jams_vote_own = /** @type {(inputs: Jams_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jouw inzending`)
};

const pl_jams_vote_own = /** @type {(inputs: Jams_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje zgłoszenie`)
};

const pt_jams_vote_own = /** @type {(inputs: Jams_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua inscrição`)
};

const ru_jams_vote_own = /** @type {(inputs: Jams_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваша работа`)
};

const sv_jams_vote_own = /** @type {(inputs: Jams_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt bidrag`)
};

const tr_jams_vote_own = /** @type {(inputs: Jams_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sizin başvurunuz`)
};

const zh_jams_vote_own = /** @type {(inputs: Jams_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的作品`)
};

const ja_jams_vote_own = /** @type {(inputs: Jams_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの作品`)
};

/**
* | output |
* | --- |
* | "Your entry" |
*
* @param {Jams_Vote_OwnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_own = /** @type {((inputs?: Jams_Vote_OwnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_OwnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_own(inputs)
	if (locale === "de") return de_jams_vote_own(inputs)
	if (locale === "fr") return fr_jams_vote_own(inputs)
	if (locale === "it") return it_jams_vote_own(inputs)
	if (locale === "nl") return nl_jams_vote_own(inputs)
	if (locale === "pl") return pl_jams_vote_own(inputs)
	if (locale === "pt") return pt_jams_vote_own(inputs)
	if (locale === "ru") return ru_jams_vote_own(inputs)
	if (locale === "sv") return sv_jams_vote_own(inputs)
	if (locale === "tr") return tr_jams_vote_own(inputs)
	if (locale === "zh") return zh_jams_vote_own(inputs)
	if (locale === "ja") return ja_jams_vote_own(inputs)
	return en_jams_vote_own(inputs)
});
