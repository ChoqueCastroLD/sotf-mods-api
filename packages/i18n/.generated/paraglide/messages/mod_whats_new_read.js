/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Whats_New_ReadInputs */

const en_mod_whats_new_read = /** @type {(inputs: Mod_Whats_New_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read the field notes`)
};

const es_mod_whats_new_read = /** @type {(inputs: Mod_Whats_New_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leer las notas de campo`)
};

const de_mod_whats_new_read = /** @type {(inputs: Mod_Whats_New_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldnotizen lesen`)
};

const fr_mod_whats_new_read = /** @type {(inputs: Mod_Whats_New_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lire les notes de terrain`)
};

const it_mod_whats_new_read = /** @type {(inputs: Mod_Whats_New_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leggi le note sul campo`)
};

const nl_mod_whats_new_read = /** @type {(inputs: Mod_Whats_New_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lees de veldnotities`)
};

const pl_mod_whats_new_read = /** @type {(inputs: Mod_Whats_New_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeczytaj notatki z terenu`)
};

const pt_mod_whats_new_read = /** @type {(inputs: Mod_Whats_New_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ler as notas de campo`)
};

const ru_mod_whats_new_read = /** @type {(inputs: Mod_Whats_New_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Читать полевые заметки`)
};

const sv_mod_whats_new_read = /** @type {(inputs: Mod_Whats_New_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läs fältanteckningarna`)
};

const tr_mod_whats_new_read = /** @type {(inputs: Mod_Whats_New_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha notlarını oku`)
};

const zh_mod_whats_new_read = /** @type {(inputs: Mod_Whats_New_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`阅读实地笔记`)
};

const ja_mod_whats_new_read = /** @type {(inputs: Mod_Whats_New_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドノートを読む`)
};

/**
* | output |
* | --- |
* | "Read the field notes" |
*
* @param {Mod_Whats_New_ReadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_whats_new_read = /** @type {((inputs?: Mod_Whats_New_ReadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Whats_New_ReadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_whats_new_read(inputs)
	if (locale === "de") return de_mod_whats_new_read(inputs)
	if (locale === "fr") return fr_mod_whats_new_read(inputs)
	if (locale === "it") return it_mod_whats_new_read(inputs)
	if (locale === "nl") return nl_mod_whats_new_read(inputs)
	if (locale === "pl") return pl_mod_whats_new_read(inputs)
	if (locale === "pt") return pt_mod_whats_new_read(inputs)
	if (locale === "ru") return ru_mod_whats_new_read(inputs)
	if (locale === "sv") return sv_mod_whats_new_read(inputs)
	if (locale === "tr") return tr_mod_whats_new_read(inputs)
	if (locale === "zh") return zh_mod_whats_new_read(inputs)
	if (locale === "ja") return ja_mod_whats_new_read(inputs)
	return en_mod_whats_new_read(inputs)
});
