/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Add_ButtonInputs */

const en_kits_add_button = /** @type {(inputs: Kits_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add`)
};

const es_kits_add_button = /** @type {(inputs: Kits_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir`)
};

const de_kits_add_button = /** @type {(inputs: Kits_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hinzufügen`)
};

const fr_kits_add_button = /** @type {(inputs: Kits_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter`)
};

const it_kits_add_button = /** @type {(inputs: Kits_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi`)
};

const nl_kits_add_button = /** @type {(inputs: Kits_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toevoegen`)
};

const pl_kits_add_button = /** @type {(inputs: Kits_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj`)
};

const pt_kits_add_button = /** @type {(inputs: Kits_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar`)
};

const ru_kits_add_button = /** @type {(inputs: Kits_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить`)
};

const sv_kits_add_button = /** @type {(inputs: Kits_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till`)
};

const tr_kits_add_button = /** @type {(inputs: Kits_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekle`)
};

const zh_kits_add_button = /** @type {(inputs: Kits_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加`)
};

const ja_kits_add_button = /** @type {(inputs: Kits_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`追加`)
};

/**
* | output |
* | --- |
* | "Add" |
*
* @param {Kits_Add_ButtonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_add_button = /** @type {((inputs?: Kits_Add_ButtonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Add_ButtonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_add_button(inputs)
	if (locale === "de") return de_kits_add_button(inputs)
	if (locale === "fr") return fr_kits_add_button(inputs)
	if (locale === "it") return it_kits_add_button(inputs)
	if (locale === "nl") return nl_kits_add_button(inputs)
	if (locale === "pl") return pl_kits_add_button(inputs)
	if (locale === "pt") return pt_kits_add_button(inputs)
	if (locale === "ru") return ru_kits_add_button(inputs)
	if (locale === "sv") return sv_kits_add_button(inputs)
	if (locale === "tr") return tr_kits_add_button(inputs)
	if (locale === "zh") return zh_kits_add_button(inputs)
	if (locale === "ja") return ja_kits_add_button(inputs)
	return en_kits_add_button(inputs)
});
