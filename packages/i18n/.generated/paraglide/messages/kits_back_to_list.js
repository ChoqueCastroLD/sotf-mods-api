/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Back_To_ListInputs */

const en_kits_back_to_list = /** @type {(inputs: Kits_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`My kits`)
};

const es_kits_back_to_list = /** @type {(inputs: Kits_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mis kits`)
};

const de_kits_back_to_list = /** @type {(inputs: Kits_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meine Kits`)
};

const fr_kits_back_to_list = /** @type {(inputs: Kits_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mes kits`)
};

const it_kits_back_to_list = /** @type {(inputs: Kits_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I miei kit`)
};

const nl_kits_back_to_list = /** @type {(inputs: Kits_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn kits`)
};

const pl_kits_back_to_list = /** @type {(inputs: Kits_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moje zestawy`)
};

const pt_kits_back_to_list = /** @type {(inputs: Kits_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meus kits`)
};

const ru_kits_back_to_list = /** @type {(inputs: Kits_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мои наборы`)
};

const sv_kits_back_to_list = /** @type {(inputs: Kits_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mina kit`)
};

const tr_kits_back_to_list = /** @type {(inputs: Kits_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitlerim`)
};

const zh_kits_back_to_list = /** @type {(inputs: Kits_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我的套装`)
};

const ja_kits_back_to_list = /** @type {(inputs: Kits_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マイキット`)
};

/**
* | output |
* | --- |
* | "My kits" |
*
* @param {Kits_Back_To_ListInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_back_to_list = /** @type {((inputs?: Kits_Back_To_ListInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Back_To_ListInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_back_to_list(inputs)
	if (locale === "de") return de_kits_back_to_list(inputs)
	if (locale === "fr") return fr_kits_back_to_list(inputs)
	if (locale === "it") return it_kits_back_to_list(inputs)
	if (locale === "nl") return nl_kits_back_to_list(inputs)
	if (locale === "pl") return pl_kits_back_to_list(inputs)
	if (locale === "pt") return pt_kits_back_to_list(inputs)
	if (locale === "ru") return ru_kits_back_to_list(inputs)
	if (locale === "sv") return sv_kits_back_to_list(inputs)
	if (locale === "tr") return tr_kits_back_to_list(inputs)
	if (locale === "zh") return zh_kits_back_to_list(inputs)
	if (locale === "ja") return ja_kits_back_to_list(inputs)
	return en_kits_back_to_list(inputs)
});
