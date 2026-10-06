/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Shortcut_Go_BackpackInputs */

const en_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go to Following`)
};

const es_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir a Siguiendo`)
};

const de_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu „Folge ich“`)
};

const fr_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aller à Suivis`)
};

const it_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vai a Seguiti`)
};

const nl_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naar Volgend`)
};

const pl_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejdź do obserwowanych`)
};

const pt_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir para Seguindo`)
};

const ru_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перейти к подпискам`)
};

const sv_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gå till Följer`)
};

const tr_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip edilenlere git`)
};

const zh_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前往关注`)
};

const ja_console_shortcut_go_backpack = /** @type {(inputs: Console_Shortcut_Go_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー中へ移動`)
};

/**
* | output |
* | --- |
* | "Go to Following" |
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
