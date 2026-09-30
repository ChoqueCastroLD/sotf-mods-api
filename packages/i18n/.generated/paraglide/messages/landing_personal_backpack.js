/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Personal_BackpackInputs */

const en_landing_personal_backpack = /** @type {(inputs: Landing_Personal_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open your backpack`)
};

const es_landing_personal_backpack = /** @type {(inputs: Landing_Personal_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir tu mochila`)
};

const de_landing_personal_backpack = /** @type {(inputs: Landing_Personal_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rucksack öffnen`)
};

const fr_landing_personal_backpack = /** @type {(inputs: Landing_Personal_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir votre sac à dos`)
};

const it_landing_personal_backpack = /** @type {(inputs: Landing_Personal_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri lo zaino`)
};

const nl_landing_personal_backpack = /** @type {(inputs: Landing_Personal_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open je rugzak`)
};

const pl_landing_personal_backpack = /** @type {(inputs: Landing_Personal_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz plecak`)
};

const pt_landing_personal_backpack = /** @type {(inputs: Landing_Personal_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir sua mochila`)
};

const ru_landing_personal_backpack = /** @type {(inputs: Landing_Personal_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть рюкзак`)
};

const sv_landing_personal_backpack = /** @type {(inputs: Landing_Personal_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna din ryggsäck`)
};

const tr_landing_personal_backpack = /** @type {(inputs: Landing_Personal_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırt çantanı aç`)
};

const zh_landing_personal_backpack = /** @type {(inputs: Landing_Personal_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开背包`)
};

const ja_landing_personal_backpack = /** @type {(inputs: Landing_Personal_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バックパックを開く`)
};

/**
* | output |
* | --- |
* | "Open your backpack" |
*
* @param {Landing_Personal_BackpackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_personal_backpack = /** @type {((inputs?: Landing_Personal_BackpackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_BackpackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_personal_backpack(inputs)
	if (locale === "de") return de_landing_personal_backpack(inputs)
	if (locale === "fr") return fr_landing_personal_backpack(inputs)
	if (locale === "it") return it_landing_personal_backpack(inputs)
	if (locale === "nl") return nl_landing_personal_backpack(inputs)
	if (locale === "pl") return pl_landing_personal_backpack(inputs)
	if (locale === "pt") return pt_landing_personal_backpack(inputs)
	if (locale === "ru") return ru_landing_personal_backpack(inputs)
	if (locale === "sv") return sv_landing_personal_backpack(inputs)
	if (locale === "tr") return tr_landing_personal_backpack(inputs)
	if (locale === "zh") return zh_landing_personal_backpack(inputs)
	if (locale === "ja") return ja_landing_personal_backpack(inputs)
	return en_landing_personal_backpack(inputs)
});
