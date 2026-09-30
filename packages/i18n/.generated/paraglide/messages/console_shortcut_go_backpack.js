/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Shortcut_Go_BackpackInputs */

const en_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go to your Backpack`)
};

const es_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir a tu Mochila`)
};

const de_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu deinem Rucksack`)
};

const fr_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aller à votre sac à dos`)
};

const it_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vai al tuo zaino`)
};

const nl_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naar je rugzak`)
};

const pl_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejdź do plecaka`)
};

const pt_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir para sua Mochila`)
};

const ru_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перейти к рюкзаку`)
};

const sv_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gå till din ryggsäck`)
};

const tr_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırt Çantana git`)
};

const zh_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前往背包`)
};

const ja_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バックパックへ移動`)
};

/**
* | output |
* | --- |
* | "Go to your Backpack" |
*
* @param {Console_Shortcut_Go_BackpackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_shortcut_go_backpack = /** @type {((inputs?: Console_Shortcut_Go_BackpackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Shortcut_Go_BackpackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_shortcut_go_backpack(inputs)
	if (locale === "de") return de_console_shortcut_go_backpack(inputs)
	if (locale === "fr") return fr_console_shortcut_go_backpack(inputs)
	if (locale === "it") return it_console_shortcut_go_backpack(inputs)
	if (locale === "nl") return nl_console_shortcut_go_backpack(inputs)
	if (locale === "pl") return pl_console_shortcut_go_backpack(inputs)
	if (locale === "pt") return pt_console_shortcut_go_backpack(inputs)
	if (locale === "ru") return ru_console_shortcut_go_backpack(inputs)
	if (locale === "sv") return sv_console_shortcut_go_backpack(inputs)
	if (locale === "tr") return tr_console_shortcut_go_backpack(inputs)
	if (locale === "zh") return zh_console_shortcut_go_backpack(inputs)
	if (locale === "ja") return ja_console_shortcut_go_backpack(inputs)
	return en_console_shortcut_go_backpack(inputs)
});
