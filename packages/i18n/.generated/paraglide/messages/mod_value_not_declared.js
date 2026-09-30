/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Value_Not_DeclaredInputs */

const en_mod_value_not_declared = /** @type {(inputs: Mod_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not declared`)
};

const es_mod_value_not_declared = /** @type {(inputs: Mod_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin declarar`)
};

const de_mod_value_not_declared = /** @type {(inputs: Mod_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht angegeben`)
};

const fr_mod_value_not_declared = /** @type {(inputs: Mod_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non déclaré`)
};

const it_mod_value_not_declared = /** @type {(inputs: Mod_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non dichiarato`)
};

const nl_mod_value_not_declared = /** @type {(inputs: Mod_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet opgegeven`)
};

const pl_mod_value_not_declared = /** @type {(inputs: Mod_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie podano`)
};

const pt_mod_value_not_declared = /** @type {(inputs: Mod_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não declarado`)
};

const ru_mod_value_not_declared = /** @type {(inputs: Mod_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не указано`)
};

const sv_mod_value_not_declared = /** @type {(inputs: Mod_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte angivet`)
};

const tr_mod_value_not_declared = /** @type {(inputs: Mod_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belirtilmemiş`)
};

const zh_mod_value_not_declared = /** @type {(inputs: Mod_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未声明`)
};

const ja_mod_value_not_declared = /** @type {(inputs: Mod_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未申告`)
};

/**
* | output |
* | --- |
* | "Not declared" |
*
* @param {Mod_Value_Not_DeclaredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_value_not_declared = /** @type {((inputs?: Mod_Value_Not_DeclaredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Value_Not_DeclaredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_value_not_declared(inputs)
	if (locale === "de") return de_mod_value_not_declared(inputs)
	if (locale === "fr") return fr_mod_value_not_declared(inputs)
	if (locale === "it") return it_mod_value_not_declared(inputs)
	if (locale === "nl") return nl_mod_value_not_declared(inputs)
	if (locale === "pl") return pl_mod_value_not_declared(inputs)
	if (locale === "pt") return pt_mod_value_not_declared(inputs)
	if (locale === "ru") return ru_mod_value_not_declared(inputs)
	if (locale === "sv") return sv_mod_value_not_declared(inputs)
	if (locale === "tr") return tr_mod_value_not_declared(inputs)
	if (locale === "zh") return zh_mod_value_not_declared(inputs)
	if (locale === "ja") return ja_mod_value_not_declared(inputs)
	return en_mod_value_not_declared(inputs)
});
