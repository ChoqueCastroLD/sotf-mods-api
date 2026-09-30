/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Picker_In_KitInputs */

const en_kits_picker_in_kit = /** @type {(inputs: Kits_Picker_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Added`)
};

const es_kits_picker_in_kit = /** @type {(inputs: Kits_Picker_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadido`)
};

const de_kits_picker_in_kit = /** @type {(inputs: Kits_Picker_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hinzugefügt`)
};

const fr_kits_picker_in_kit = /** @type {(inputs: Kits_Picker_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouté`)
};

const it_kits_picker_in_kit = /** @type {(inputs: Kits_Picker_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiunta`)
};

const nl_kits_picker_in_kit = /** @type {(inputs: Kits_Picker_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toegevoegd`)
};

const pl_kits_picker_in_kit = /** @type {(inputs: Kits_Picker_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodano`)
};

const pt_kits_picker_in_kit = /** @type {(inputs: Kits_Picker_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionado`)
};

const ru_kits_picker_in_kit = /** @type {(inputs: Kits_Picker_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавлен`)
};

const sv_kits_picker_in_kit = /** @type {(inputs: Kits_Picker_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillagd`)
};

const tr_kits_picker_in_kit = /** @type {(inputs: Kits_Picker_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eklendi`)
};

const zh_kits_picker_in_kit = /** @type {(inputs: Kits_Picker_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已添加`)
};

const ja_kits_picker_in_kit = /** @type {(inputs: Kits_Picker_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`追加済み`)
};

/**
* | output |
* | --- |
* | "Added" |
*
* @param {Kits_Picker_In_KitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_picker_in_kit = /** @type {((inputs?: Kits_Picker_In_KitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Picker_In_KitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_picker_in_kit(inputs)
	if (locale === "de") return de_kits_picker_in_kit(inputs)
	if (locale === "fr") return fr_kits_picker_in_kit(inputs)
	if (locale === "it") return it_kits_picker_in_kit(inputs)
	if (locale === "nl") return nl_kits_picker_in_kit(inputs)
	if (locale === "pl") return pl_kits_picker_in_kit(inputs)
	if (locale === "pt") return pt_kits_picker_in_kit(inputs)
	if (locale === "ru") return ru_kits_picker_in_kit(inputs)
	if (locale === "sv") return sv_kits_picker_in_kit(inputs)
	if (locale === "tr") return tr_kits_picker_in_kit(inputs)
	if (locale === "zh") return zh_kits_picker_in_kit(inputs)
	if (locale === "ja") return ja_kits_picker_in_kit(inputs)
	return en_kits_picker_in_kit(inputs)
});
