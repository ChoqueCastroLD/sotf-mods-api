/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_ActionsInputs */

const en_ranger_user_actions = /** @type {(inputs: Ranger_User_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actions`)
};

const es_ranger_user_actions = /** @type {(inputs: Ranger_User_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acciones`)
};

const de_ranger_user_actions = /** @type {(inputs: Ranger_User_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktionen`)
};

const fr_ranger_user_actions = /** @type {(inputs: Ranger_User_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actions`)
};

const it_ranger_user_actions = /** @type {(inputs: Ranger_User_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Azioni`)
};

const nl_ranger_user_actions = /** @type {(inputs: Ranger_User_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acties`)
};

const pl_ranger_user_actions = /** @type {(inputs: Ranger_User_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działania`)
};

const pt_ranger_user_actions = /** @type {(inputs: Ranger_User_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ações`)
};

const ru_ranger_user_actions = /** @type {(inputs: Ranger_User_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Действия`)
};

const sv_ranger_user_actions = /** @type {(inputs: Ranger_User_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åtgärder`)
};

const tr_ranger_user_actions = /** @type {(inputs: Ranger_User_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İşlemler`)
};

const zh_ranger_user_actions = /** @type {(inputs: Ranger_User_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作`)
};

const ja_ranger_user_actions = /** @type {(inputs: Ranger_User_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作`)
};

/**
* | output |
* | --- |
* | "Actions" |
*
* @param {Ranger_User_ActionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_actions = /** @type {((inputs?: Ranger_User_ActionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_ActionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_actions(inputs)
	if (locale === "de") return de_ranger_user_actions(inputs)
	if (locale === "fr") return fr_ranger_user_actions(inputs)
	if (locale === "it") return it_ranger_user_actions(inputs)
	if (locale === "nl") return nl_ranger_user_actions(inputs)
	if (locale === "pl") return pl_ranger_user_actions(inputs)
	if (locale === "pt") return pt_ranger_user_actions(inputs)
	if (locale === "ru") return ru_ranger_user_actions(inputs)
	if (locale === "sv") return sv_ranger_user_actions(inputs)
	if (locale === "tr") return tr_ranger_user_actions(inputs)
	if (locale === "zh") return zh_ranger_user_actions(inputs)
	if (locale === "ja") return ja_ranger_user_actions(inputs)
	return en_ranger_user_actions(inputs)
});
