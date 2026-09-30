/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Console_Empty_TitleInputs */

const en_kits_console_empty_title = /** @type {(inputs: Kits_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your mat is empty`)
};

const es_kits_console_empty_title = /** @type {(inputs: Kits_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu mesa está vacía`)
};

const de_kits_console_empty_title = /** @type {(inputs: Kits_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Unterlage ist leer`)
};

const fr_kits_console_empty_title = /** @type {(inputs: Kits_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre plan de travail est vide`)
};

const it_kits_console_empty_title = /** @type {(inputs: Kits_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo tappetino è vuoto`)
};

const nl_kits_console_empty_title = /** @type {(inputs: Kits_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je mat is leeg`)
};

const pl_kits_console_empty_title = /** @type {(inputs: Kits_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoja mata jest pusta`)
};

const pt_kits_console_empty_title = /** @type {(inputs: Kits_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua bancada está vazia`)
};

const ru_kits_console_empty_title = /** @type {(inputs: Kits_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш коврик пуст`)
};

const sv_kits_console_empty_title = /** @type {(inputs: Kits_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din matta är tom`)
};

const tr_kits_console_empty_title = /** @type {(inputs: Kits_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masan boş`)
};

const zh_kits_console_empty_title = /** @type {(inputs: Kits_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的工作台还是空的`)
};

const ja_kits_console_empty_title = /** @type {(inputs: Kits_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作業マットは空っぽです`)
};

/**
* | output |
* | --- |
* | "Your mat is empty" |
*
* @param {Kits_Console_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_console_empty_title = /** @type {((inputs?: Kits_Console_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Console_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_console_empty_title(inputs)
	if (locale === "de") return de_kits_console_empty_title(inputs)
	if (locale === "fr") return fr_kits_console_empty_title(inputs)
	if (locale === "it") return it_kits_console_empty_title(inputs)
	if (locale === "nl") return nl_kits_console_empty_title(inputs)
	if (locale === "pl") return pl_kits_console_empty_title(inputs)
	if (locale === "pt") return pt_kits_console_empty_title(inputs)
	if (locale === "ru") return ru_kits_console_empty_title(inputs)
	if (locale === "sv") return sv_kits_console_empty_title(inputs)
	if (locale === "tr") return tr_kits_console_empty_title(inputs)
	if (locale === "zh") return zh_kits_console_empty_title(inputs)
	if (locale === "ja") return ja_kits_console_empty_title(inputs)
	return en_kits_console_empty_title(inputs)
});
