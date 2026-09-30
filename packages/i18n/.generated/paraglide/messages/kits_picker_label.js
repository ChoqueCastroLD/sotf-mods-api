/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Picker_LabelInputs */

const en_kits_picker_label = /** @type {(inputs: Kits_Picker_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add a mod or build`)
};

const es_kits_picker_label = /** @type {(inputs: Kits_Picker_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir un mod o una construcción`)
};

const de_kits_picker_label = /** @type {(inputs: Kits_Picker_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod oder Bauwerk hinzufügen`)
};

const fr_kits_picker_label = /** @type {(inputs: Kits_Picker_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter un mod ou une construction`)
};

const it_kits_picker_label = /** @type {(inputs: Kits_Picker_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi una mod o una costruzione`)
};

const nl_kits_picker_label = /** @type {(inputs: Kits_Picker_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod of bouwwerk toevoegen`)
};

const pl_kits_picker_label = /** @type {(inputs: Kits_Picker_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj mod lub budowlę`)
};

const pt_kits_picker_label = /** @type {(inputs: Kits_Picker_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar um mod ou construção`)
};

const ru_kits_picker_label = /** @type {(inputs: Kits_Picker_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить мод или постройку`)
};

const sv_kits_picker_label = /** @type {(inputs: Kits_Picker_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till en modd eller ett bygge`)
};

const tr_kits_picker_label = /** @type {(inputs: Kits_Picker_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod veya yapı ekle`)
};

const zh_kits_picker_label = /** @type {(inputs: Kits_Picker_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加模组或建筑`)
};

const ja_kits_picker_label = /** @type {(inputs: Kits_Picker_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD または建築物を追加`)
};

/**
* | output |
* | --- |
* | "Add a mod or build" |
*
* @param {Kits_Picker_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_picker_label = /** @type {((inputs?: Kits_Picker_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Picker_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_picker_label(inputs)
	if (locale === "de") return de_kits_picker_label(inputs)
	if (locale === "fr") return fr_kits_picker_label(inputs)
	if (locale === "it") return it_kits_picker_label(inputs)
	if (locale === "nl") return nl_kits_picker_label(inputs)
	if (locale === "pl") return pl_kits_picker_label(inputs)
	if (locale === "pt") return pt_kits_picker_label(inputs)
	if (locale === "ru") return ru_kits_picker_label(inputs)
	if (locale === "sv") return sv_kits_picker_label(inputs)
	if (locale === "tr") return tr_kits_picker_label(inputs)
	if (locale === "zh") return zh_kits_picker_label(inputs)
	if (locale === "ja") return ja_kits_picker_label(inputs)
	return en_kits_picker_label(inputs)
});
