/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Vote_RemovedInputs */

const en_social_vote_removed = /** @type {(inputs: Social_Vote_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vote removed.`)
};

const es_social_vote_removed = /** @type {(inputs: Social_Vote_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voto quitado.`)
};

const de_social_vote_removed = /** @type {(inputs: Social_Vote_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stimme entfernt.`)
};

const fr_social_vote_removed = /** @type {(inputs: Social_Vote_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vote retiré.`)
};

const it_social_vote_removed = /** @type {(inputs: Social_Vote_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voto rimosso.`)
};

const nl_social_vote_removed = /** @type {(inputs: Social_Vote_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stem verwijderd.`)
};

const pl_social_vote_removed = /** @type {(inputs: Social_Vote_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Głos usunięty.`)
};

const pt_social_vote_removed = /** @type {(inputs: Social_Vote_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voto removido.`)
};

const ru_social_vote_removed = /** @type {(inputs: Social_Vote_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Голос отменён.`)
};

const sv_social_vote_removed = /** @type {(inputs: Social_Vote_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rösten är borttagen.`)
};

const tr_social_vote_removed = /** @type {(inputs: Social_Vote_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oy kaldırıldı.`)
};

const zh_social_vote_removed = /** @type {(inputs: Social_Vote_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已取消投票。`)
};

const ja_social_vote_removed = /** @type {(inputs: Social_Vote_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票を取り消しました。`)
};

/**
* | output |
* | --- |
* | "Vote removed." |
*
* @param {Social_Vote_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_vote_removed = /** @type {((inputs?: Social_Vote_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Vote_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_vote_removed(inputs)
	if (locale === "de") return de_social_vote_removed(inputs)
	if (locale === "fr") return fr_social_vote_removed(inputs)
	if (locale === "it") return it_social_vote_removed(inputs)
	if (locale === "nl") return nl_social_vote_removed(inputs)
	if (locale === "pl") return pl_social_vote_removed(inputs)
	if (locale === "pt") return pt_social_vote_removed(inputs)
	if (locale === "ru") return ru_social_vote_removed(inputs)
	if (locale === "sv") return sv_social_vote_removed(inputs)
	if (locale === "tr") return tr_social_vote_removed(inputs)
	if (locale === "zh") return zh_social_vote_removed(inputs)
	if (locale === "ja") return ja_social_vote_removed(inputs)
	return en_social_vote_removed(inputs)
});
