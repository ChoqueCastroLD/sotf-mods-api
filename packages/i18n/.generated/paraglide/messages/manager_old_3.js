/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Old_3Inputs */

const en_manager_old_3 = /** @type {(inputs: Manager_Old_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hunt down every library it needs`)
};

const es_manager_old_3 = /** @type {(inputs: Manager_Old_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar cada librería que necesita`)
};

const de_manager_old_3 = /** @type {(inputs: Manager_Old_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jede benötigte Bibliothek zusammensuchen`)
};

const fr_manager_old_3 = /** @type {(inputs: Manager_Old_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chercher chaque bibliothèque nécessaire`)
};

const it_manager_old_3 = /** @type {(inputs: Manager_Old_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cercare ogni libreria che le serve`)
};

const nl_manager_old_3 = /** @type {(inputs: Manager_Old_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke benodigde library opzoeken`)
};

const pl_manager_old_3 = /** @type {(inputs: Manager_Old_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukać każdej potrzebnej biblioteki`)
};

const pt_manager_old_3 = /** @type {(inputs: Manager_Old_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caçar cada biblioteca necessária`)
};

const ru_manager_old_3 = /** @type {(inputs: Manager_Old_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Искать каждую нужную библиотеку`)
};

const sv_manager_old_3 = /** @type {(inputs: Manager_Old_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leta upp varje bibliotek den behöver`)
};

const tr_manager_old_3 = /** @type {(inputs: Manager_Old_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gereken her kütüphaneyi tek tek ara`)
};

const zh_manager_old_3 = /** @type {(inputs: Manager_Old_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`逐个寻找所需的依赖库`)
};

const ja_manager_old_3 = /** @type {(inputs: Manager_Old_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`必要なライブラリを一つずつ探す`)
};

/**
* | output |
* | --- |
* | "Hunt down every library it needs" |
*
* @param {Manager_Old_3Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_old_3 = /** @type {((inputs?: Manager_Old_3Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Old_3Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_old_3(inputs)
	if (locale === "de") return de_manager_old_3(inputs)
	if (locale === "fr") return fr_manager_old_3(inputs)
	if (locale === "it") return it_manager_old_3(inputs)
	if (locale === "nl") return nl_manager_old_3(inputs)
	if (locale === "pl") return pl_manager_old_3(inputs)
	if (locale === "pt") return pt_manager_old_3(inputs)
	if (locale === "ru") return ru_manager_old_3(inputs)
	if (locale === "sv") return sv_manager_old_3(inputs)
	if (locale === "tr") return tr_manager_old_3(inputs)
	if (locale === "zh") return zh_manager_old_3(inputs)
	if (locale === "ja") return ja_manager_old_3(inputs)
	return en_manager_old_3(inputs)
});
