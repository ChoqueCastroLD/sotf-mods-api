/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Modpacks_Add_ModInputs */

const en_modpacks_add_mod = /** @type {(inputs: Modpacks_Add_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Add ${i?.name}`)
};

const es_modpacks_add_mod = /** @type {(inputs: Modpacks_Add_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Añadir ${i?.name}`)
};

const de_modpacks_add_mod = /** @type {(inputs: Modpacks_Add_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} hinzufügen`)
};

const fr_modpacks_add_mod = /** @type {(inputs: Modpacks_Add_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ajouter ${i?.name}`)
};

const it_modpacks_add_mod = /** @type {(inputs: Modpacks_Add_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiungi ${i?.name}`)
};

const nl_modpacks_add_mod = /** @type {(inputs: Modpacks_Add_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} toevoegen`)
};

const pl_modpacks_add_mod = /** @type {(inputs: Modpacks_Add_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dodaj ${i?.name}`)
};

const pt_modpacks_add_mod = /** @type {(inputs: Modpacks_Add_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adicionar ${i?.name}`)
};

const ru_modpacks_add_mod = /** @type {(inputs: Modpacks_Add_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Добавить ${i?.name}`)
};

const sv_modpacks_add_mod = /** @type {(inputs: Modpacks_Add_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lägg till ${i?.name}`)
};

const tr_modpacks_add_mod = /** @type {(inputs: Modpacks_Add_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ekle`)
};

const zh_modpacks_add_mod = /** @type {(inputs: Modpacks_Add_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`添加 ${i?.name}`)
};

const ja_modpacks_add_mod = /** @type {(inputs: Modpacks_Add_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を追加`)
};

/**
* | output |
* | --- |
* | "Add {name}" |
*
* @param {Modpacks_Add_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_add_mod = /** @type {((inputs: Modpacks_Add_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Add_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_add_mod(inputs)
	if (locale === "de") return de_modpacks_add_mod(inputs)
	if (locale === "fr") return fr_modpacks_add_mod(inputs)
	if (locale === "it") return it_modpacks_add_mod(inputs)
	if (locale === "nl") return nl_modpacks_add_mod(inputs)
	if (locale === "pl") return pl_modpacks_add_mod(inputs)
	if (locale === "pt") return pt_modpacks_add_mod(inputs)
	if (locale === "ru") return ru_modpacks_add_mod(inputs)
	if (locale === "sv") return sv_modpacks_add_mod(inputs)
	if (locale === "tr") return tr_modpacks_add_mod(inputs)
	if (locale === "zh") return zh_modpacks_add_mod(inputs)
	if (locale === "ja") return ja_modpacks_add_mod(inputs)
	return en_modpacks_add_mod(inputs)
});
