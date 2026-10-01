/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Vote_ReviewInputs */

const en_jams_vote_review = /** @type {(inputs: Jams_Vote_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review my votes`)
};

const es_jams_vote_review = /** @type {(inputs: Jams_Vote_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisar mis votos`)
};

const de_jams_vote_review = /** @type {(inputs: Jams_Vote_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meine Stimmen prüfen`)
};

const fr_jams_vote_review = /** @type {(inputs: Jams_Vote_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revoir mes votes`)
};

const it_jams_vote_review = /** @type {(inputs: Jams_Vote_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rivedi i miei voti`)
};

const nl_jams_vote_review = /** @type {(inputs: Jams_Vote_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn stemmen bekijken`)
};

const pl_jams_vote_review = /** @type {(inputs: Jams_Vote_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejrzyj moje głosy`)
};

const pt_jams_vote_review = /** @type {(inputs: Jams_Vote_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisar meus votos`)
};

const ru_jams_vote_review = /** @type {(inputs: Jams_Vote_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверить мои оценки`)
};

const sv_jams_vote_review = /** @type {(inputs: Jams_Vote_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Granska mina röster`)
};

const tr_jams_vote_review = /** @type {(inputs: Jams_Vote_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylarımı gözden geçir`)
};

const zh_jams_vote_review = /** @type {(inputs: Jams_Vote_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看我的投票`)
};

const ja_jams_vote_review = /** @type {(inputs: Jams_Vote_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票を見直す`)
};

/**
* | output |
* | --- |
* | "Review my votes" |
*
* @param {Jams_Vote_ReviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_vote_review = /** @type {((inputs?: Jams_Vote_ReviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_ReviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_vote_review(inputs)
	if (locale === "de") return de_jams_vote_review(inputs)
	if (locale === "fr") return fr_jams_vote_review(inputs)
	if (locale === "it") return it_jams_vote_review(inputs)
	if (locale === "nl") return nl_jams_vote_review(inputs)
	if (locale === "pl") return pl_jams_vote_review(inputs)
	if (locale === "pt") return pt_jams_vote_review(inputs)
	if (locale === "ru") return ru_jams_vote_review(inputs)
	if (locale === "sv") return sv_jams_vote_review(inputs)
	if (locale === "tr") return tr_jams_vote_review(inputs)
	if (locale === "zh") return zh_jams_vote_review(inputs)
	if (locale === "ja") return ja_jams_vote_review(inputs)
	return en_jams_vote_review(inputs)
});
