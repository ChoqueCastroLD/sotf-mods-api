/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Action_UndoInputs */

const en_social_action_undo = /** @type {(inputs: Social_Action_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Undo`)
};

const es_social_action_undo = /** @type {(inputs: Social_Action_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deshacer`)
};

const de_social_action_undo = /** @type {(inputs: Social_Action_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rückgängig`)
};

const fr_social_action_undo = /** @type {(inputs: Social_Action_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler l’action`)
};

const it_social_action_undo = /** @type {(inputs: Social_Action_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla azione`)
};

const nl_social_action_undo = /** @type {(inputs: Social_Action_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ongedaan maken`)
};

const pl_social_action_undo = /** @type {(inputs: Social_Action_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cofnij`)
};

const pt_social_action_undo = /** @type {(inputs: Social_Action_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desfazer`)
};

const ru_social_action_undo = /** @type {(inputs: Social_Action_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отменить`)
};

const sv_social_action_undo = /** @type {(inputs: Social_Action_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ångra`)
};

const tr_social_action_undo = /** @type {(inputs: Social_Action_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri al`)
};

const zh_social_action_undo = /** @type {(inputs: Social_Action_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤销`)
};

const ja_social_action_undo = /** @type {(inputs: Social_Action_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`元に戻す`)
};

/**
* | output |
* | --- |
* | "Undo" |
*
* @param {Social_Action_UndoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_action_undo = /** @type {((inputs?: Social_Action_UndoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Action_UndoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_action_undo(inputs)
	if (locale === "de") return de_social_action_undo(inputs)
	if (locale === "fr") return fr_social_action_undo(inputs)
	if (locale === "it") return it_social_action_undo(inputs)
	if (locale === "nl") return nl_social_action_undo(inputs)
	if (locale === "pl") return pl_social_action_undo(inputs)
	if (locale === "pt") return pt_social_action_undo(inputs)
	if (locale === "ru") return ru_social_action_undo(inputs)
	if (locale === "sv") return sv_social_action_undo(inputs)
	if (locale === "tr") return tr_social_action_undo(inputs)
	if (locale === "zh") return zh_social_action_undo(inputs)
	if (locale === "ja") return ja_social_action_undo(inputs)
	return en_social_action_undo(inputs)
});
