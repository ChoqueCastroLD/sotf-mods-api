/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Art_Benefit_BackpackInputs */

const en_auth_art_benefit_backpack = /** @type {(inputs: Auth_Art_Benefit_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stash mods in your backpack`)
};

const es_auth_art_benefit_backpack = /** @type {(inputs: Auth_Art_Benefit_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guarda mods en tu mochila`)
};

const de_auth_art_benefit_backpack = /** @type {(inputs: Auth_Art_Benefit_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verstau Mods in deinem Rucksack`)
};

const fr_auth_art_benefit_backpack = /** @type {(inputs: Auth_Art_Benefit_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangez des mods dans votre sac à dos`)
};

const it_auth_art_benefit_backpack = /** @type {(inputs: Auth_Art_Benefit_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Metti le mod nel tuo zaino`)
};

const nl_auth_art_benefit_backpack = /** @type {(inputs: Auth_Art_Benefit_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Berg mods op in je rugzak`)
};

const pl_auth_art_benefit_backpack = /** @type {(inputs: Auth_Art_Benefit_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chowaj mody do plecaka`)
};

const pt_auth_art_benefit_backpack = /** @type {(inputs: Auth_Art_Benefit_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guarde mods na sua mochila`)
};

const ru_auth_art_benefit_backpack = /** @type {(inputs: Auth_Art_Benefit_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Складывайте моды в рюкзак`)
};

const sv_auth_art_benefit_backpack = /** @type {(inputs: Auth_Art_Benefit_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg moddar i din ryggsäck`)
};

const tr_auth_art_benefit_backpack = /** @type {(inputs: Auth_Art_Benefit_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları sırt çantana koy`)
};

const zh_auth_art_benefit_backpack = /** @type {(inputs: Auth_Art_Benefit_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把模组收进背包`)
};

const ja_auth_art_benefit_backpack = /** @type {(inputs: Auth_Art_Benefit_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD をバックパックにしまう`)
};

/**
* | output |
* | --- |
* | "Stash mods in your backpack" |
*
* @param {Auth_Art_Benefit_BackpackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_art_benefit_backpack = /** @type {((inputs?: Auth_Art_Benefit_BackpackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Art_Benefit_BackpackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_art_benefit_backpack(inputs)
	if (locale === "de") return de_auth_art_benefit_backpack(inputs)
	if (locale === "fr") return fr_auth_art_benefit_backpack(inputs)
	if (locale === "it") return it_auth_art_benefit_backpack(inputs)
	if (locale === "nl") return nl_auth_art_benefit_backpack(inputs)
	if (locale === "pl") return pl_auth_art_benefit_backpack(inputs)
	if (locale === "pt") return pt_auth_art_benefit_backpack(inputs)
	if (locale === "ru") return ru_auth_art_benefit_backpack(inputs)
	if (locale === "sv") return sv_auth_art_benefit_backpack(inputs)
	if (locale === "tr") return tr_auth_art_benefit_backpack(inputs)
	if (locale === "zh") return zh_auth_art_benefit_backpack(inputs)
	if (locale === "ja") return ja_auth_art_benefit_backpack(inputs)
	return en_auth_art_benefit_backpack(inputs)
});
