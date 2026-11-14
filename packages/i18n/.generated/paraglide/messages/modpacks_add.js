/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_AddInputs */

const en_modpacks_add = /** @type {(inputs: Modpacks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add`)
};

const es_modpacks_add = /** @type {(inputs: Modpacks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir`)
};

const de_modpacks_add = /** @type {(inputs: Modpacks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hinzufügen`)
};

const fr_modpacks_add = /** @type {(inputs: Modpacks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter`)
};

const it_modpacks_add = /** @type {(inputs: Modpacks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi`)
};

const nl_modpacks_add = /** @type {(inputs: Modpacks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toevoegen`)
};

const pl_modpacks_add = /** @type {(inputs: Modpacks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj`)
};

const pt_modpacks_add = /** @type {(inputs: Modpacks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar`)
};

const ru_modpacks_add = /** @type {(inputs: Modpacks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить`)
};

const sv_modpacks_add = /** @type {(inputs: Modpacks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till`)
};

const tr_modpacks_add = /** @type {(inputs: Modpacks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekle`)
};

const zh_modpacks_add = /** @type {(inputs: Modpacks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加`)
};

const ja_modpacks_add = /** @type {(inputs: Modpacks_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`追加`)
};

/**
* | output |
* | --- |
* | "Add" |
*
* @param {Modpacks_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_add = /** @type {((inputs?: Modpacks_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_add(inputs)
	if (locale === "de") return de_modpacks_add(inputs)
	if (locale === "fr") return fr_modpacks_add(inputs)
	if (locale === "it") return it_modpacks_add(inputs)
	if (locale === "nl") return nl_modpacks_add(inputs)
	if (locale === "pl") return pl_modpacks_add(inputs)
	if (locale === "pt") return pt_modpacks_add(inputs)
	if (locale === "ru") return ru_modpacks_add(inputs)
	if (locale === "sv") return sv_modpacks_add(inputs)
	if (locale === "tr") return tr_modpacks_add(inputs)
	if (locale === "zh") return zh_modpacks_add(inputs)
	if (locale === "ja") return ja_modpacks_add(inputs)
	return en_modpacks_add(inputs)
});
