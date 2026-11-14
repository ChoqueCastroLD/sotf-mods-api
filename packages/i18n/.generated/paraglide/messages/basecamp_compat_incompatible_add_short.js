/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_Incompatible_Add_ShortInputs */

const en_basecamp_compat_incompatible_add_short = /** @type {(inputs: Basecamp_Compat_Incompatible_Add_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add`)
};

const es_basecamp_compat_incompatible_add_short = /** @type {(inputs: Basecamp_Compat_Incompatible_Add_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agregar`)
};

const de_basecamp_compat_incompatible_add_short = /** @type {(inputs: Basecamp_Compat_Incompatible_Add_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hinzufügen`)
};

const fr_basecamp_compat_incompatible_add_short = /** @type {(inputs: Basecamp_Compat_Incompatible_Add_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter`)
};

const it_basecamp_compat_incompatible_add_short = /** @type {(inputs: Basecamp_Compat_Incompatible_Add_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi`)
};

const nl_basecamp_compat_incompatible_add_short = /** @type {(inputs: Basecamp_Compat_Incompatible_Add_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toevoegen`)
};

const pl_basecamp_compat_incompatible_add_short = /** @type {(inputs: Basecamp_Compat_Incompatible_Add_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj`)
};

const pt_basecamp_compat_incompatible_add_short = /** @type {(inputs: Basecamp_Compat_Incompatible_Add_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar`)
};

const ru_basecamp_compat_incompatible_add_short = /** @type {(inputs: Basecamp_Compat_Incompatible_Add_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить`)
};

const sv_basecamp_compat_incompatible_add_short = /** @type {(inputs: Basecamp_Compat_Incompatible_Add_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till`)
};

const tr_basecamp_compat_incompatible_add_short = /** @type {(inputs: Basecamp_Compat_Incompatible_Add_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekle`)
};

const zh_basecamp_compat_incompatible_add_short = /** @type {(inputs: Basecamp_Compat_Incompatible_Add_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加`)
};

const ja_basecamp_compat_incompatible_add_short = /** @type {(inputs: Basecamp_Compat_Incompatible_Add_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`追加`)
};

/**
* | output |
* | --- |
* | "Add" |
*
* @param {Basecamp_Compat_Incompatible_Add_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_incompatible_add_short = /** @type {((inputs?: Basecamp_Compat_Incompatible_Add_ShortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Incompatible_Add_ShortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_incompatible_add_short(inputs)
	if (locale === "de") return de_basecamp_compat_incompatible_add_short(inputs)
	if (locale === "fr") return fr_basecamp_compat_incompatible_add_short(inputs)
	if (locale === "it") return it_basecamp_compat_incompatible_add_short(inputs)
	if (locale === "nl") return nl_basecamp_compat_incompatible_add_short(inputs)
	if (locale === "pl") return pl_basecamp_compat_incompatible_add_short(inputs)
	if (locale === "pt") return pt_basecamp_compat_incompatible_add_short(inputs)
	if (locale === "ru") return ru_basecamp_compat_incompatible_add_short(inputs)
	if (locale === "sv") return sv_basecamp_compat_incompatible_add_short(inputs)
	if (locale === "tr") return tr_basecamp_compat_incompatible_add_short(inputs)
	if (locale === "zh") return zh_basecamp_compat_incompatible_add_short(inputs)
	if (locale === "ja") return ja_basecamp_compat_incompatible_add_short(inputs)
	return en_basecamp_compat_incompatible_add_short(inputs)
});
