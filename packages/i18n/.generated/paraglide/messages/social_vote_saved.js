/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Vote_SavedInputs */

const en_social_vote_saved = /** @type {(inputs: Social_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vote saved.`)
};

const es_social_vote_saved = /** @type {(inputs: Social_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voto guardado.`)
};

const de_social_vote_saved = /** @type {(inputs: Social_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stimme gespeichert.`)
};

const fr_social_vote_saved = /** @type {(inputs: Social_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vote enregistré.`)
};

const it_social_vote_saved = /** @type {(inputs: Social_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voto salvato.`)
};

const nl_social_vote_saved = /** @type {(inputs: Social_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stem opgeslagen.`)
};

const pl_social_vote_saved = /** @type {(inputs: Social_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Głos zapisany.`)
};

const pt_social_vote_saved = /** @type {(inputs: Social_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voto salvo.`)
};

const ru_social_vote_saved = /** @type {(inputs: Social_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Голос учтён.`)
};

const sv_social_vote_saved = /** @type {(inputs: Social_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rösten är sparad.`)
};

const tr_social_vote_saved = /** @type {(inputs: Social_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oy kaydedildi.`)
};

const zh_social_vote_saved = /** @type {(inputs: Social_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票已保存。`)
};

const ja_social_vote_saved = /** @type {(inputs: Social_Vote_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票しました。`)
};

/**
* | output |
* | --- |
* | "Vote saved." |
*
* @param {Social_Vote_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_vote_saved = /** @type {((inputs?: Social_Vote_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Vote_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_vote_saved(inputs)
	if (locale === "de") return de_social_vote_saved(inputs)
	if (locale === "fr") return fr_social_vote_saved(inputs)
	if (locale === "it") return it_social_vote_saved(inputs)
	if (locale === "nl") return nl_social_vote_saved(inputs)
	if (locale === "pl") return pl_social_vote_saved(inputs)
	if (locale === "pt") return pt_social_vote_saved(inputs)
	if (locale === "ru") return ru_social_vote_saved(inputs)
	if (locale === "sv") return sv_social_vote_saved(inputs)
	if (locale === "tr") return tr_social_vote_saved(inputs)
	if (locale === "zh") return zh_social_vote_saved(inputs)
	if (locale === "ja") return ja_social_vote_saved(inputs)
	return en_social_vote_saved(inputs)
});
