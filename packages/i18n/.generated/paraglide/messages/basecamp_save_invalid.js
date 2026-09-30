/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Save_InvalidInputs */

const en_basecamp_save_invalid = /** @type {(inputs: Basecamp_Save_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fix the marked fields to save.`)
};

const es_basecamp_save_invalid = /** @type {(inputs: Basecamp_Save_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrige los campos marcados para guardar.`)
};

const de_basecamp_save_invalid = /** @type {(inputs: Basecamp_Save_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korrigiere die markierten Felder, um zu speichern.`)
};

const fr_basecamp_save_invalid = /** @type {(inputs: Basecamp_Save_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrigez les champs signalés pour enregistrer.`)
};

const it_basecamp_save_invalid = /** @type {(inputs: Basecamp_Save_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Correggi i campi segnalati per salvare.`)
};

const nl_basecamp_save_invalid = /** @type {(inputs: Basecamp_Save_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrigeer de gemarkeerde velden om op te slaan.`)
};

const pl_basecamp_save_invalid = /** @type {(inputs: Basecamp_Save_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popraw zaznaczone pola, aby zapisać.`)
};

const pt_basecamp_save_invalid = /** @type {(inputs: Basecamp_Save_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrija os campos marcados para salvar.`)
};

const ru_basecamp_save_invalid = /** @type {(inputs: Basecamp_Save_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Исправьте отмеченные поля, чтобы сохранить.`)
};

const sv_basecamp_save_invalid = /** @type {(inputs: Basecamp_Save_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rätta de markerade fälten för att spara.`)
};

const tr_basecamp_save_invalid = /** @type {(inputs: Basecamp_Save_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydetmek için işaretli alanları düzelt.`)
};

const zh_basecamp_save_invalid = /** @type {(inputs: Basecamp_Save_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请修正标记的字段后再保存。`)
};

const ja_basecamp_save_invalid = /** @type {(inputs: Basecamp_Save_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存するには、印の付いた項目を修正してください。`)
};

/**
* | output |
* | --- |
* | "Fix the marked fields to save." |
*
* @param {Basecamp_Save_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_save_invalid = /** @type {((inputs?: Basecamp_Save_InvalidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Save_InvalidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_save_invalid(inputs)
	if (locale === "de") return de_basecamp_save_invalid(inputs)
	if (locale === "fr") return fr_basecamp_save_invalid(inputs)
	if (locale === "it") return it_basecamp_save_invalid(inputs)
	if (locale === "nl") return nl_basecamp_save_invalid(inputs)
	if (locale === "pl") return pl_basecamp_save_invalid(inputs)
	if (locale === "pt") return pt_basecamp_save_invalid(inputs)
	if (locale === "ru") return ru_basecamp_save_invalid(inputs)
	if (locale === "sv") return sv_basecamp_save_invalid(inputs)
	if (locale === "tr") return tr_basecamp_save_invalid(inputs)
	if (locale === "zh") return zh_basecamp_save_invalid(inputs)
	if (locale === "ja") return ja_basecamp_save_invalid(inputs)
	return en_basecamp_save_invalid(inputs)
});
