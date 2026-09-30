/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Action_RemoveInputs */

const en_ranger_action_remove = /** @type {(inputs: Ranger_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove`)
};

const es_ranger_action_remove = /** @type {(inputs: Ranger_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirar`)
};

const de_ranger_action_remove = /** @type {(inputs: Ranger_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entfernen`)
};

const fr_ranger_action_remove = /** @type {(inputs: Ranger_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer`)
};

const it_ranger_action_remove = /** @type {(inputs: Ranger_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi`)
};

const nl_ranger_action_remove = /** @type {(inputs: Ranger_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderen`)
};

const pl_ranger_action_remove = /** @type {(inputs: Ranger_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń`)
};

const pt_ranger_action_remove = /** @type {(inputs: Ranger_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover`)
};

const ru_ranger_action_remove = /** @type {(inputs: Ranger_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить`)
};

const sv_ranger_action_remove = /** @type {(inputs: Ranger_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort`)
};

const tr_ranger_action_remove = /** @type {(inputs: Ranger_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaldır`)
};

const zh_ranger_action_remove = /** @type {(inputs: Ranger_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除`)
};

const ja_ranger_action_remove = /** @type {(inputs: Ranger_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

/**
* | output |
* | --- |
* | "Remove" |
*
* @param {Ranger_Action_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_action_remove = /** @type {((inputs?: Ranger_Action_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Action_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_action_remove(inputs)
	if (locale === "de") return de_ranger_action_remove(inputs)
	if (locale === "fr") return fr_ranger_action_remove(inputs)
	if (locale === "it") return it_ranger_action_remove(inputs)
	if (locale === "nl") return nl_ranger_action_remove(inputs)
	if (locale === "pl") return pl_ranger_action_remove(inputs)
	if (locale === "pt") return pt_ranger_action_remove(inputs)
	if (locale === "ru") return ru_ranger_action_remove(inputs)
	if (locale === "sv") return sv_ranger_action_remove(inputs)
	if (locale === "tr") return tr_ranger_action_remove(inputs)
	if (locale === "zh") return zh_ranger_action_remove(inputs)
	if (locale === "ja") return ja_ranger_action_remove(inputs)
	return en_ranger_action_remove(inputs)
});
