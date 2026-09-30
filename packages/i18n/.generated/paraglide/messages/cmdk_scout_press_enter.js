/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Scout_Press_EnterInputs */

const en_cmdk_scout_press_enter = /** @type {(inputs: Cmdk_Scout_Press_EnterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Press Enter to ask Scout.`)
};

const es_cmdk_scout_press_enter = /** @type {(inputs: Cmdk_Scout_Press_EnterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pulsa Intro para preguntar a Scout.`)
};

const de_cmdk_scout_press_enter = /** @type {(inputs: Cmdk_Scout_Press_EnterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter drücken, um Scout zu fragen.`)
};

const fr_cmdk_scout_press_enter = /** @type {(inputs: Cmdk_Scout_Press_EnterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appuie sur Entrée pour demander à Scout.`)
};

const it_cmdk_scout_press_enter = /** @type {(inputs: Cmdk_Scout_Press_EnterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premi Invio per chiedere a Scout.`)
};

const nl_cmdk_scout_press_enter = /** @type {(inputs: Cmdk_Scout_Press_EnterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Druk op Enter om Scout te vragen.`)
};

const pl_cmdk_scout_press_enter = /** @type {(inputs: Cmdk_Scout_Press_EnterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naciśnij Enter, aby zapytać Scouta.`)
};

const pt_cmdk_scout_press_enter = /** @type {(inputs: Cmdk_Scout_Press_EnterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prime Enter para perguntar ao Scout.`)
};

const ru_cmdk_scout_press_enter = /** @type {(inputs: Cmdk_Scout_Press_EnterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нажмите Enter, чтобы спросить Scout.`)
};

const sv_cmdk_scout_press_enter = /** @type {(inputs: Cmdk_Scout_Press_EnterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tryck på Enter för att fråga Scout.`)
};

const tr_cmdk_scout_press_enter = /** @type {(inputs: Cmdk_Scout_Press_EnterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout’a sormak için Enter’a bas.`)
};

const zh_cmdk_scout_press_enter = /** @type {(inputs: Cmdk_Scout_Press_EnterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按 Enter 询问 Scout。`)
};

const ja_cmdk_scout_press_enter = /** @type {(inputs: Cmdk_Scout_Press_EnterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enterキーを押してScoutに聞く。`)
};

/**
* | output |
* | --- |
* | "Press Enter to ask Scout." |
*
* @param {Cmdk_Scout_Press_EnterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_scout_press_enter = /** @type {((inputs?: Cmdk_Scout_Press_EnterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scout_Press_EnterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_scout_press_enter(inputs)
	if (locale === "de") return de_cmdk_scout_press_enter(inputs)
	if (locale === "fr") return fr_cmdk_scout_press_enter(inputs)
	if (locale === "it") return it_cmdk_scout_press_enter(inputs)
	if (locale === "nl") return nl_cmdk_scout_press_enter(inputs)
	if (locale === "pl") return pl_cmdk_scout_press_enter(inputs)
	if (locale === "pt") return pt_cmdk_scout_press_enter(inputs)
	if (locale === "ru") return ru_cmdk_scout_press_enter(inputs)
	if (locale === "sv") return sv_cmdk_scout_press_enter(inputs)
	if (locale === "tr") return tr_cmdk_scout_press_enter(inputs)
	if (locale === "zh") return zh_cmdk_scout_press_enter(inputs)
	if (locale === "ja") return ja_cmdk_scout_press_enter(inputs)
	return en_cmdk_scout_press_enter(inputs)
});
