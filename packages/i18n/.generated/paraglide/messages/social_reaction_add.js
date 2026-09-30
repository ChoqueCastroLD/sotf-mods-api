/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Reaction_AddInputs */

const en_social_reaction_add = /** @type {(inputs: Social_Reaction_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add a reaction`)
};

const es_social_reaction_add = /** @type {(inputs: Social_Reaction_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir una reacción`)
};

const de_social_reaction_add = /** @type {(inputs: Social_Reaction_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reaktion hinzufügen`)
};

const fr_social_reaction_add = /** @type {(inputs: Social_Reaction_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter une réaction`)
};

const it_social_reaction_add = /** @type {(inputs: Social_Reaction_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi una reazione`)
};

const nl_social_reaction_add = /** @type {(inputs: Social_Reaction_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie toevoegen`)
};

const pl_social_reaction_add = /** @type {(inputs: Social_Reaction_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj reakcję`)
};

const pt_social_reaction_add = /** @type {(inputs: Social_Reaction_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar uma reação`)
};

const ru_social_reaction_add = /** @type {(inputs: Social_Reaction_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить реакцию`)
};

const sv_social_reaction_add = /** @type {(inputs: Social_Reaction_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till en reaktion`)
};

const tr_social_reaction_add = /** @type {(inputs: Social_Reaction_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tepki ekle`)
};

const zh_social_reaction_add = /** @type {(inputs: Social_Reaction_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加表情`)
};

const ja_social_reaction_add = /** @type {(inputs: Social_Reaction_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リアクションを追加`)
};

/**
* | output |
* | --- |
* | "Add a reaction" |
*
* @param {Social_Reaction_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_reaction_add = /** @type {((inputs?: Social_Reaction_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Reaction_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_reaction_add(inputs)
	if (locale === "de") return de_social_reaction_add(inputs)
	if (locale === "fr") return fr_social_reaction_add(inputs)
	if (locale === "it") return it_social_reaction_add(inputs)
	if (locale === "nl") return nl_social_reaction_add(inputs)
	if (locale === "pl") return pl_social_reaction_add(inputs)
	if (locale === "pt") return pt_social_reaction_add(inputs)
	if (locale === "ru") return ru_social_reaction_add(inputs)
	if (locale === "sv") return sv_social_reaction_add(inputs)
	if (locale === "tr") return tr_social_reaction_add(inputs)
	if (locale === "zh") return zh_social_reaction_add(inputs)
	if (locale === "ja") return ja_social_reaction_add(inputs)
	return en_social_reaction_add(inputs)
});
