/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ reaction: NonNullable<unknown> }} Social_Reaction_AddedInputs */

const en_social_reaction_added = /** @type {(inputs: Social_Reaction_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reaction added: ${i?.reaction}.`)
};

const es_social_reaction_added = /** @type {(inputs: Social_Reaction_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reacción añadida: ${i?.reaction}.`)
};

const de_social_reaction_added = /** @type {(inputs: Social_Reaction_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reaktion hinzugefügt: ${i?.reaction}.`)
};

const fr_social_reaction_added = /** @type {(inputs: Social_Reaction_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Réaction ajoutée : ${i?.reaction}.`)
};

const it_social_reaction_added = /** @type {(inputs: Social_Reaction_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reazione aggiunta: ${i?.reaction}.`)
};

const nl_social_reaction_added = /** @type {(inputs: Social_Reaction_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reactie toegevoegd: ${i?.reaction}.`)
};

const pl_social_reaction_added = /** @type {(inputs: Social_Reaction_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dodano reakcję: ${i?.reaction}.`)
};

const pt_social_reaction_added = /** @type {(inputs: Social_Reaction_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reação adicionada: ${i?.reaction}.`)
};

const ru_social_reaction_added = /** @type {(inputs: Social_Reaction_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Реакция добавлена: ${i?.reaction}.`)
};

const sv_social_reaction_added = /** @type {(inputs: Social_Reaction_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reaktion tillagd: ${i?.reaction}.`)
};

const tr_social_reaction_added = /** @type {(inputs: Social_Reaction_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tepki eklendi: ${i?.reaction}.`)
};

const zh_social_reaction_added = /** @type {(inputs: Social_Reaction_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已添加表情：${i?.reaction}。`)
};

const ja_social_reaction_added = /** @type {(inputs: Social_Reaction_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`リアクションを追加しました：${i?.reaction}。`)
};

/**
* | output |
* | --- |
* | "Reaction added: {reaction}." |
*
* @param {Social_Reaction_AddedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_reaction_added = /** @type {((inputs: Social_Reaction_AddedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Reaction_AddedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_reaction_added(inputs)
	if (locale === "de") return de_social_reaction_added(inputs)
	if (locale === "fr") return fr_social_reaction_added(inputs)
	if (locale === "it") return it_social_reaction_added(inputs)
	if (locale === "nl") return nl_social_reaction_added(inputs)
	if (locale === "pl") return pl_social_reaction_added(inputs)
	if (locale === "pt") return pt_social_reaction_added(inputs)
	if (locale === "ru") return ru_social_reaction_added(inputs)
	if (locale === "sv") return sv_social_reaction_added(inputs)
	if (locale === "tr") return tr_social_reaction_added(inputs)
	if (locale === "zh") return zh_social_reaction_added(inputs)
	if (locale === "ja") return ja_social_reaction_added(inputs)
	return en_social_reaction_added(inputs)
});
