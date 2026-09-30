/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Console_ReadoutInputs */

const en_kits_console_readout = /** @type {(inputs: Kits_Console_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your loadouts`)
};

const es_kits_console_readout = /** @type {(inputs: Kits_Console_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus loadouts`)
};

const de_kits_console_readout = /** @type {(inputs: Kits_Console_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Loadouts`)
};

const fr_kits_console_readout = /** @type {(inputs: Kits_Console_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos loadouts`)
};

const it_kits_console_readout = /** @type {(inputs: Kits_Console_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I tuoi loadout`)
};

const nl_kits_console_readout = /** @type {(inputs: Kits_Console_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jouw loadouts`)
};

const pl_kits_console_readout = /** @type {(inputs: Kits_Console_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje zestawy`)
};

const pt_kits_console_readout = /** @type {(inputs: Kits_Console_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus loadouts`)
};

const ru_kits_console_readout = /** @type {(inputs: Kits_Console_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши подборки`)
};

const sv_kits_console_readout = /** @type {(inputs: Kits_Console_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina paket`)
};

const tr_kits_console_readout = /** @type {(inputs: Kits_Console_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Setlerin`)
};

const zh_kits_console_readout = /** @type {(inputs: Kits_Console_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的搭配`)
};

const ja_kits_console_readout = /** @type {(inputs: Kits_Console_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの構成`)
};

/**
* | output |
* | --- |
* | "Your loadouts" |
*
* @param {Kits_Console_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_console_readout = /** @type {((inputs?: Kits_Console_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Console_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_console_readout(inputs)
	if (locale === "de") return de_kits_console_readout(inputs)
	if (locale === "fr") return fr_kits_console_readout(inputs)
	if (locale === "it") return it_kits_console_readout(inputs)
	if (locale === "nl") return nl_kits_console_readout(inputs)
	if (locale === "pl") return pl_kits_console_readout(inputs)
	if (locale === "pt") return pt_kits_console_readout(inputs)
	if (locale === "ru") return ru_kits_console_readout(inputs)
	if (locale === "sv") return sv_kits_console_readout(inputs)
	if (locale === "tr") return tr_kits_console_readout(inputs)
	if (locale === "zh") return zh_kits_console_readout(inputs)
	if (locale === "ja") return ja_kits_console_readout(inputs)
	return en_kits_console_readout(inputs)
});
