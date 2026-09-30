/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Target_ModInputs */

const en_ranger_target_mod = /** @type {(inputs: Ranger_Target_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const es_ranger_target_mod = /** @type {(inputs: Ranger_Target_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const de_ranger_target_mod = /** @type {(inputs: Ranger_Target_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const fr_ranger_target_mod = /** @type {(inputs: Ranger_Target_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const it_ranger_target_mod = /** @type {(inputs: Ranger_Target_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const nl_ranger_target_mod = /** @type {(inputs: Ranger_Target_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const pl_ranger_target_mod = /** @type {(inputs: Ranger_Target_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const pt_ranger_target_mod = /** @type {(inputs: Ranger_Target_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const ru_ranger_target_mod = /** @type {(inputs: Ranger_Target_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод`)
};

const sv_ranger_target_mod = /** @type {(inputs: Ranger_Target_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modd`)
};

const tr_ranger_target_mod = /** @type {(inputs: Ranger_Target_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const zh_ranger_target_mod = /** @type {(inputs: Ranger_Target_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组`)
};

const ja_ranger_target_mod = /** @type {(inputs: Ranger_Target_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD`)
};

/**
* | output |
* | --- |
* | "Mod" |
*
* @param {Ranger_Target_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_target_mod = /** @type {((inputs?: Ranger_Target_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Target_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_target_mod(inputs)
	if (locale === "de") return de_ranger_target_mod(inputs)
	if (locale === "fr") return fr_ranger_target_mod(inputs)
	if (locale === "it") return it_ranger_target_mod(inputs)
	if (locale === "nl") return nl_ranger_target_mod(inputs)
	if (locale === "pl") return pl_ranger_target_mod(inputs)
	if (locale === "pt") return pt_ranger_target_mod(inputs)
	if (locale === "ru") return ru_ranger_target_mod(inputs)
	if (locale === "sv") return sv_ranger_target_mod(inputs)
	if (locale === "tr") return tr_ranger_target_mod(inputs)
	if (locale === "zh") return zh_ranger_target_mod(inputs)
	if (locale === "ja") return ja_ranger_target_mod(inputs)
	return en_ranger_target_mod(inputs)
});
