/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Action_New_ModInputs */

const en_basecamp_action_new_mod = /** @type {(inputs: Basecamp_Action_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New mod`)
};

const es_basecamp_action_new_mod = /** @type {(inputs: Basecamp_Action_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo mod`)
};

const de_basecamp_action_new_mod = /** @type {(inputs: Basecamp_Action_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neuer Mod`)
};

const fr_basecamp_action_new_mod = /** @type {(inputs: Basecamp_Action_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau mod`)
};

const it_basecamp_action_new_mod = /** @type {(inputs: Basecamp_Action_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuova mod`)
};

const nl_basecamp_action_new_mod = /** @type {(inputs: Basecamp_Action_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe mod`)
};

const pl_basecamp_action_new_mod = /** @type {(inputs: Basecamp_Action_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowy mod`)
};

const pt_basecamp_action_new_mod = /** @type {(inputs: Basecamp_Action_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo mod`)
};

const ru_basecamp_action_new_mod = /** @type {(inputs: Basecamp_Action_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый мод`)
};

const sv_basecamp_action_new_mod = /** @type {(inputs: Basecamp_Action_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny mod`)
};

const tr_basecamp_action_new_mod = /** @type {(inputs: Basecamp_Action_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni mod`)
};

const zh_basecamp_action_new_mod = /** @type {(inputs: Basecamp_Action_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新模组`)
};

const ja_basecamp_action_new_mod = /** @type {(inputs: Basecamp_Action_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しい MOD`)
};

/**
* | output |
* | --- |
* | "New mod" |
*
* @param {Basecamp_Action_New_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_action_new_mod = /** @type {((inputs?: Basecamp_Action_New_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Action_New_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_action_new_mod(inputs)
	if (locale === "de") return de_basecamp_action_new_mod(inputs)
	if (locale === "fr") return fr_basecamp_action_new_mod(inputs)
	if (locale === "it") return it_basecamp_action_new_mod(inputs)
	if (locale === "nl") return nl_basecamp_action_new_mod(inputs)
	if (locale === "pl") return pl_basecamp_action_new_mod(inputs)
	if (locale === "pt") return pt_basecamp_action_new_mod(inputs)
	if (locale === "ru") return ru_basecamp_action_new_mod(inputs)
	if (locale === "sv") return sv_basecamp_action_new_mod(inputs)
	if (locale === "tr") return tr_basecamp_action_new_mod(inputs)
	if (locale === "zh") return zh_basecamp_action_new_mod(inputs)
	if (locale === "ja") return ja_basecamp_action_new_mod(inputs)
	return en_basecamp_action_new_mod(inputs)
});
