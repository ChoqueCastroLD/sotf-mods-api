/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_DeleteInputs */

const en_common_action_delete = /** @type {(inputs: Common_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete`)
};

const es_common_action_delete = /** @type {(inputs: Common_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar`)
};

const de_common_action_delete = /** @type {(inputs: Common_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Löschen`)
};

const fr_common_action_delete = /** @type {(inputs: Common_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer`)
};

const it_common_action_delete = /** @type {(inputs: Common_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elimina`)
};

const nl_common_action_delete = /** @type {(inputs: Common_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderen`)
};

const pl_common_action_delete = /** @type {(inputs: Common_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń`)
};

const pt_common_action_delete = /** @type {(inputs: Common_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir`)
};

const ru_common_action_delete = /** @type {(inputs: Common_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить`)
};

const sv_common_action_delete = /** @type {(inputs: Common_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort`)
};

const tr_common_action_delete = /** @type {(inputs: Common_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sil`)
};

const zh_common_action_delete = /** @type {(inputs: Common_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除`)
};

const ja_common_action_delete = /** @type {(inputs: Common_Action_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Common_Action_DeleteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_delete = /** @type {((inputs?: Common_Action_DeleteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_DeleteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_delete(inputs)
	if (locale === "de") return de_common_action_delete(inputs)
	if (locale === "fr") return fr_common_action_delete(inputs)
	if (locale === "it") return it_common_action_delete(inputs)
	if (locale === "nl") return nl_common_action_delete(inputs)
	if (locale === "pl") return pl_common_action_delete(inputs)
	if (locale === "pt") return pt_common_action_delete(inputs)
	if (locale === "ru") return ru_common_action_delete(inputs)
	if (locale === "sv") return sv_common_action_delete(inputs)
	if (locale === "tr") return tr_common_action_delete(inputs)
	if (locale === "zh") return zh_common_action_delete(inputs)
	if (locale === "ja") return ja_common_action_delete(inputs)
	return en_common_action_delete(inputs)
});
