/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Action_Add_To_KitInputs */

const en_mod_action_add_to_kit = /** @type {(inputs: Mod_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const es_mod_action_add_to_kit = /** @type {(inputs: Mod_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const de_mod_action_add_to_kit = /** @type {(inputs: Mod_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const fr_mod_action_add_to_kit = /** @type {(inputs: Mod_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const it_mod_action_add_to_kit = /** @type {(inputs: Mod_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const nl_mod_action_add_to_kit = /** @type {(inputs: Mod_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const pl_mod_action_add_to_kit = /** @type {(inputs: Mod_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zestaw`)
};

const pt_mod_action_add_to_kit = /** @type {(inputs: Mod_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const ru_mod_action_add_to_kit = /** @type {(inputs: Mod_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В набор`)
};

const sv_mod_action_add_to_kit = /** @type {(inputs: Mod_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const tr_mod_action_add_to_kit = /** @type {(inputs: Mod_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const zh_mod_action_add_to_kit = /** @type {(inputs: Mod_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加入合集`)
};

const ja_mod_action_add_to_kit = /** @type {(inputs: Mod_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットに追加`)
};

/**
* | output |
* | --- |
* | "Kit" |
*
* @param {Mod_Action_Add_To_KitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_action_add_to_kit = /** @type {((inputs?: Mod_Action_Add_To_KitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Action_Add_To_KitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_action_add_to_kit(inputs)
	if (locale === "de") return de_mod_action_add_to_kit(inputs)
	if (locale === "fr") return fr_mod_action_add_to_kit(inputs)
	if (locale === "it") return it_mod_action_add_to_kit(inputs)
	if (locale === "nl") return nl_mod_action_add_to_kit(inputs)
	if (locale === "pl") return pl_mod_action_add_to_kit(inputs)
	if (locale === "pt") return pt_mod_action_add_to_kit(inputs)
	if (locale === "ru") return ru_mod_action_add_to_kit(inputs)
	if (locale === "sv") return sv_mod_action_add_to_kit(inputs)
	if (locale === "tr") return tr_mod_action_add_to_kit(inputs)
	if (locale === "zh") return zh_mod_action_add_to_kit(inputs)
	if (locale === "ja") return ja_mod_action_add_to_kit(inputs)
	return en_mod_action_add_to_kit(inputs)
});
