/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Action_DeleteInputs */

const en_social_action_delete = /** @type {(inputs: Social_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete`)
};

const es_social_action_delete = /** @type {(inputs: Social_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar`)
};

const de_social_action_delete = /** @type {(inputs: Social_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Löschen`)
};

const fr_social_action_delete = /** @type {(inputs: Social_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer`)
};

const it_social_action_delete = /** @type {(inputs: Social_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elimina`)
};

const nl_social_action_delete = /** @type {(inputs: Social_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderen`)
};

const pl_social_action_delete = /** @type {(inputs: Social_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń`)
};

const pt_social_action_delete = /** @type {(inputs: Social_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir`)
};

const ru_social_action_delete = /** @type {(inputs: Social_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить`)
};

const sv_social_action_delete = /** @type {(inputs: Social_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort`)
};

const tr_social_action_delete = /** @type {(inputs: Social_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sil`)
};

const zh_social_action_delete = /** @type {(inputs: Social_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除`)
};

const ja_social_action_delete = /** @type {(inputs: Social_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Social_Action_DeleteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_action_delete = /** @type {((inputs?: Social_Action_DeleteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Action_DeleteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_action_delete(inputs)
	if (locale === "de") return de_social_action_delete(inputs)
	if (locale === "fr") return fr_social_action_delete(inputs)
	if (locale === "it") return it_social_action_delete(inputs)
	if (locale === "nl") return nl_social_action_delete(inputs)
	if (locale === "pl") return pl_social_action_delete(inputs)
	if (locale === "pt") return pt_social_action_delete(inputs)
	if (locale === "ru") return ru_social_action_delete(inputs)
	if (locale === "sv") return sv_social_action_delete(inputs)
	if (locale === "tr") return tr_social_action_delete(inputs)
	if (locale === "zh") return zh_social_action_delete(inputs)
	if (locale === "ja") return ja_social_action_delete(inputs)
	return en_social_action_delete(inputs)
});
