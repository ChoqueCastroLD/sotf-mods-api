/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Bulk_ClearInputs */

const en_ranger_bulk_clear = /** @type {(inputs: Ranger_Bulk_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear selection`)
};

const es_ranger_bulk_clear = /** @type {(inputs: Ranger_Bulk_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar la selección`)
};

const de_ranger_bulk_clear = /** @type {(inputs: Ranger_Bulk_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auswahl aufheben`)
};

const fr_ranger_bulk_clear = /** @type {(inputs: Ranger_Bulk_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Désélectionner`)
};

const it_ranger_bulk_clear = /** @type {(inputs: Ranger_Bulk_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deseleziona`)
};

const nl_ranger_bulk_clear = /** @type {(inputs: Ranger_Bulk_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selectie wissen`)
};

const pl_ranger_bulk_clear = /** @type {(inputs: Ranger_Bulk_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść zaznaczenie`)
};

const pt_ranger_bulk_clear = /** @type {(inputs: Ranger_Bulk_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar seleção`)
};

const ru_ranger_bulk_clear = /** @type {(inputs: Ranger_Bulk_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Снять выбор`)
};

const sv_ranger_bulk_clear = /** @type {(inputs: Ranger_Bulk_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa markering`)
};

const tr_ranger_bulk_clear = /** @type {(inputs: Ranger_Bulk_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seçimi temizle`)
};

const zh_ranger_bulk_clear = /** @type {(inputs: Ranger_Bulk_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除选择`)
};

const ja_ranger_bulk_clear = /** @type {(inputs: Ranger_Bulk_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`選択を解除`)
};

/**
* | output |
* | --- |
* | "Clear selection" |
*
* @param {Ranger_Bulk_ClearInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_bulk_clear = /** @type {((inputs?: Ranger_Bulk_ClearInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_ClearInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_bulk_clear(inputs)
	if (locale === "de") return de_ranger_bulk_clear(inputs)
	if (locale === "fr") return fr_ranger_bulk_clear(inputs)
	if (locale === "it") return it_ranger_bulk_clear(inputs)
	if (locale === "nl") return nl_ranger_bulk_clear(inputs)
	if (locale === "pl") return pl_ranger_bulk_clear(inputs)
	if (locale === "pt") return pt_ranger_bulk_clear(inputs)
	if (locale === "ru") return ru_ranger_bulk_clear(inputs)
	if (locale === "sv") return sv_ranger_bulk_clear(inputs)
	if (locale === "tr") return tr_ranger_bulk_clear(inputs)
	if (locale === "zh") return zh_ranger_bulk_clear(inputs)
	if (locale === "ja") return ja_ranger_bulk_clear(inputs)
	return en_ranger_bulk_clear(inputs)
});
