/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Reaction_FireInputs */

const en_ui_domain_reaction_fire = /** @type {(inputs: Ui_Domain_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fire`)
};

const es_ui_domain_reaction_fire = /** @type {(inputs: Ui_Domain_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fuego`)
};

const de_ui_domain_reaction_fire = /** @type {(inputs: Ui_Domain_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feuer`)
};

const fr_ui_domain_reaction_fire = /** @type {(inputs: Ui_Domain_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feu`)
};

const it_ui_domain_reaction_fire = /** @type {(inputs: Ui_Domain_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fuoco`)
};

const nl_ui_domain_reaction_fire = /** @type {(inputs: Ui_Domain_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vuur`)
};

const pl_ui_domain_reaction_fire = /** @type {(inputs: Ui_Domain_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogień`)
};

const pt_ui_domain_reaction_fire = /** @type {(inputs: Ui_Domain_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fogo`)
};

const ru_ui_domain_reaction_fire = /** @type {(inputs: Ui_Domain_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Огонь`)
};

const sv_ui_domain_reaction_fire = /** @type {(inputs: Ui_Domain_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eld`)
};

const tr_ui_domain_reaction_fire = /** @type {(inputs: Ui_Domain_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ateş`)
};

const zh_ui_domain_reaction_fire = /** @type {(inputs: Ui_Domain_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`火`)
};

const ja_ui_domain_reaction_fire = /** @type {(inputs: Ui_Domain_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`炎`)
};

/**
* | output |
* | --- |
* | "Fire" |
*
* @param {Ui_Domain_Reaction_FireInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_reaction_fire = /** @type {((inputs?: Ui_Domain_Reaction_FireInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reaction_FireInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_reaction_fire(inputs)
	if (locale === "de") return de_ui_domain_reaction_fire(inputs)
	if (locale === "fr") return fr_ui_domain_reaction_fire(inputs)
	if (locale === "it") return it_ui_domain_reaction_fire(inputs)
	if (locale === "nl") return nl_ui_domain_reaction_fire(inputs)
	if (locale === "pl") return pl_ui_domain_reaction_fire(inputs)
	if (locale === "pt") return pt_ui_domain_reaction_fire(inputs)
	if (locale === "ru") return ru_ui_domain_reaction_fire(inputs)
	if (locale === "sv") return sv_ui_domain_reaction_fire(inputs)
	if (locale === "tr") return tr_ui_domain_reaction_fire(inputs)
	if (locale === "zh") return zh_ui_domain_reaction_fire(inputs)
	if (locale === "ja") return ja_ui_domain_reaction_fire(inputs)
	return en_ui_domain_reaction_fire(inputs)
});
