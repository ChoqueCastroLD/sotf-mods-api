/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Action_BackpackInputs */

const en_cmdk_action_backpack = /** @type {(inputs: Cmdk_Action_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open your backpack`)
};

const es_cmdk_action_backpack = /** @type {(inputs: Cmdk_Action_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir tu mochila`)
};

const de_cmdk_action_backpack = /** @type {(inputs: Cmdk_Action_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deinen Rucksack öffnen`)
};

const fr_cmdk_action_backpack = /** @type {(inputs: Cmdk_Action_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir votre sac à dos`)
};

const it_cmdk_action_backpack = /** @type {(inputs: Cmdk_Action_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri il tuo zaino`)
};

const nl_cmdk_action_backpack = /** @type {(inputs: Cmdk_Action_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je rugzak openen`)
};

const pl_cmdk_action_backpack = /** @type {(inputs: Cmdk_Action_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz swój plecak`)
};

const pt_cmdk_action_backpack = /** @type {(inputs: Cmdk_Action_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir sua mochila`)
};

const ru_cmdk_action_backpack = /** @type {(inputs: Cmdk_Action_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть рюкзак`)
};

const sv_cmdk_action_backpack = /** @type {(inputs: Cmdk_Action_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna din ryggsäck`)
};

const tr_cmdk_action_backpack = /** @type {(inputs: Cmdk_Action_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırt çantanı aç`)
};

const zh_cmdk_action_backpack = /** @type {(inputs: Cmdk_Action_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开背包`)
};

const ja_cmdk_action_backpack = /** @type {(inputs: Cmdk_Action_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バックパックを開く`)
};

/**
* | output |
* | --- |
* | "Open your backpack" |
*
* @param {Cmdk_Action_BackpackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_action_backpack = /** @type {((inputs?: Cmdk_Action_BackpackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Action_BackpackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_action_backpack(inputs)
	if (locale === "de") return de_cmdk_action_backpack(inputs)
	if (locale === "fr") return fr_cmdk_action_backpack(inputs)
	if (locale === "it") return it_cmdk_action_backpack(inputs)
	if (locale === "nl") return nl_cmdk_action_backpack(inputs)
	if (locale === "pl") return pl_cmdk_action_backpack(inputs)
	if (locale === "pt") return pt_cmdk_action_backpack(inputs)
	if (locale === "ru") return ru_cmdk_action_backpack(inputs)
	if (locale === "sv") return sv_cmdk_action_backpack(inputs)
	if (locale === "tr") return tr_cmdk_action_backpack(inputs)
	if (locale === "zh") return zh_cmdk_action_backpack(inputs)
	if (locale === "ja") return ja_cmdk_action_backpack(inputs)
	return en_cmdk_action_backpack(inputs)
});
