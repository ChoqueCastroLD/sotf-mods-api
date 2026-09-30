/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ reaction: NonNullable<unknown> }} Social_Reaction_RemovedInputs */

const en_social_reaction_removed = /** @type {(inputs: Social_Reaction_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reaction removed: ${i?.reaction}.`)
};

const es_social_reaction_removed = /** @type {(inputs: Social_Reaction_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reacción quitada: ${i?.reaction}.`)
};

const de_social_reaction_removed = /** @type {(inputs: Social_Reaction_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reaktion entfernt: ${i?.reaction}.`)
};

const fr_social_reaction_removed = /** @type {(inputs: Social_Reaction_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Réaction retirée : ${i?.reaction}.`)
};

const it_social_reaction_removed = /** @type {(inputs: Social_Reaction_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reazione rimossa: ${i?.reaction}.`)
};

const nl_social_reaction_removed = /** @type {(inputs: Social_Reaction_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reactie verwijderd: ${i?.reaction}.`)
};

const pl_social_reaction_removed = /** @type {(inputs: Social_Reaction_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usunięto reakcję: ${i?.reaction}.`)
};

const pt_social_reaction_removed = /** @type {(inputs: Social_Reaction_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reação removida: ${i?.reaction}.`)
};

const ru_social_reaction_removed = /** @type {(inputs: Social_Reaction_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Реакция убрана: ${i?.reaction}.`)
};

const sv_social_reaction_removed = /** @type {(inputs: Social_Reaction_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reaktion borttagen: ${i?.reaction}.`)
};

const tr_social_reaction_removed = /** @type {(inputs: Social_Reaction_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tepki kaldırıldı: ${i?.reaction}.`)
};

const zh_social_reaction_removed = /** @type {(inputs: Social_Reaction_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已移除表情：${i?.reaction}。`)
};

const ja_social_reaction_removed = /** @type {(inputs: Social_Reaction_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`リアクションを取り消しました：${i?.reaction}。`)
};

/**
* | output |
* | --- |
* | "Reaction removed: {reaction}." |
*
* @param {Social_Reaction_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_reaction_removed = /** @type {((inputs: Social_Reaction_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Reaction_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_reaction_removed(inputs)
	if (locale === "de") return de_social_reaction_removed(inputs)
	if (locale === "fr") return fr_social_reaction_removed(inputs)
	if (locale === "it") return it_social_reaction_removed(inputs)
	if (locale === "nl") return nl_social_reaction_removed(inputs)
	if (locale === "pl") return pl_social_reaction_removed(inputs)
	if (locale === "pt") return pt_social_reaction_removed(inputs)
	if (locale === "ru") return ru_social_reaction_removed(inputs)
	if (locale === "sv") return sv_social_reaction_removed(inputs)
	if (locale === "tr") return tr_social_reaction_removed(inputs)
	if (locale === "zh") return zh_social_reaction_removed(inputs)
	if (locale === "ja") return ja_social_reaction_removed(inputs)
	return en_social_reaction_removed(inputs)
});
