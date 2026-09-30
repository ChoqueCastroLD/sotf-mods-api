/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Convert_Save_FirstInputs */

const en_basecamp_listing_convert_save_first = /** @type {(inputs: Basecamp_Listing_Convert_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save or discard your changes first.`)
};

const es_basecamp_listing_convert_save_first = /** @type {(inputs: Basecamp_Listing_Convert_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guarda o descarta tus cambios primero.`)
};

const de_basecamp_listing_convert_save_first = /** @type {(inputs: Basecamp_Listing_Convert_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Speichere oder verwirf zuerst deine Änderungen.`)
};

const fr_basecamp_listing_convert_save_first = /** @type {(inputs: Basecamp_Listing_Convert_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrez ou annulez d'abord vos modifications.`)
};

const it_basecamp_listing_convert_save_first = /** @type {(inputs: Basecamp_Listing_Convert_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva o annulla prima le modifiche.`)
};

const nl_basecamp_listing_convert_save_first = /** @type {(inputs: Basecamp_Listing_Convert_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sla je wijzigingen eerst op of verwerp ze.`)
};

const pl_basecamp_listing_convert_save_first = /** @type {(inputs: Basecamp_Listing_Convert_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najpierw zapisz lub odrzuć zmiany.`)
};

const pt_basecamp_listing_convert_save_first = /** @type {(inputs: Basecamp_Listing_Convert_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salve ou descarte suas alterações primeiro.`)
};

const ru_basecamp_listing_convert_save_first = /** @type {(inputs: Basecamp_Listing_Convert_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала сохраните или отмените изменения.`)
};

const sv_basecamp_listing_convert_save_first = /** @type {(inputs: Basecamp_Listing_Convert_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara eller förkasta dina ändringar först.`)
};

const tr_basecamp_listing_convert_save_first = /** @type {(inputs: Basecamp_Listing_Convert_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce değişikliklerinizi kaydedin veya atın.`)
};

const zh_basecamp_listing_convert_save_first = /** @type {(inputs: Basecamp_Listing_Convert_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先保存或放弃更改。`)
};

const ja_basecamp_listing_convert_save_first = /** @type {(inputs: Basecamp_Listing_Convert_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`先に変更を保存または破棄してください。`)
};

/**
* | output |
* | --- |
* | "Save or discard your changes first." |
*
* @param {Basecamp_Listing_Convert_Save_FirstInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_convert_save_first = /** @type {((inputs?: Basecamp_Listing_Convert_Save_FirstInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Convert_Save_FirstInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_convert_save_first(inputs)
	if (locale === "de") return de_basecamp_listing_convert_save_first(inputs)
	if (locale === "fr") return fr_basecamp_listing_convert_save_first(inputs)
	if (locale === "it") return it_basecamp_listing_convert_save_first(inputs)
	if (locale === "nl") return nl_basecamp_listing_convert_save_first(inputs)
	if (locale === "pl") return pl_basecamp_listing_convert_save_first(inputs)
	if (locale === "pt") return pt_basecamp_listing_convert_save_first(inputs)
	if (locale === "ru") return ru_basecamp_listing_convert_save_first(inputs)
	if (locale === "sv") return sv_basecamp_listing_convert_save_first(inputs)
	if (locale === "tr") return tr_basecamp_listing_convert_save_first(inputs)
	if (locale === "zh") return zh_basecamp_listing_convert_save_first(inputs)
	if (locale === "ja") return ja_basecamp_listing_convert_save_first(inputs)
	return en_basecamp_listing_convert_save_first(inputs)
});
