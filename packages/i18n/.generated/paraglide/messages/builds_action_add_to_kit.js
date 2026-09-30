/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Action_Add_To_KitInputs */

const en_builds_action_add_to_kit = /** @type {(inputs: Builds_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add to Kit`)
};

const es_builds_action_add_to_kit = /** @type {(inputs: Builds_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir al Kit`)
};

const de_builds_action_add_to_kit = /** @type {(inputs: Builds_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Kit hinzufügen`)
};

const fr_builds_action_add_to_kit = /** @type {(inputs: Builds_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter au Kit`)
};

const it_builds_action_add_to_kit = /** @type {(inputs: Builds_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi al Kit`)
};

const nl_builds_action_add_to_kit = /** @type {(inputs: Builds_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aan Kit toevoegen`)
};

const pl_builds_action_add_to_kit = /** @type {(inputs: Builds_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj do zestawu`)
};

const pt_builds_action_add_to_kit = /** @type {(inputs: Builds_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar ao Kit`)
};

const ru_builds_action_add_to_kit = /** @type {(inputs: Builds_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить в набор`)
};

const sv_builds_action_add_to_kit = /** @type {(inputs: Builds_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till i Kit`)
};

const tr_builds_action_add_to_kit = /** @type {(inputs: Builds_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kite ekle`)
};

const zh_builds_action_add_to_kit = /** @type {(inputs: Builds_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加入套装`)
};

const ja_builds_action_add_to_kit = /** @type {(inputs: Builds_Action_Add_To_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットに追加`)
};

/**
* | output |
* | --- |
* | "Add to Kit" |
*
* @param {Builds_Action_Add_To_KitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_action_add_to_kit = /** @type {((inputs?: Builds_Action_Add_To_KitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Action_Add_To_KitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_action_add_to_kit(inputs)
	if (locale === "de") return de_builds_action_add_to_kit(inputs)
	if (locale === "fr") return fr_builds_action_add_to_kit(inputs)
	if (locale === "it") return it_builds_action_add_to_kit(inputs)
	if (locale === "nl") return nl_builds_action_add_to_kit(inputs)
	if (locale === "pl") return pl_builds_action_add_to_kit(inputs)
	if (locale === "pt") return pt_builds_action_add_to_kit(inputs)
	if (locale === "ru") return ru_builds_action_add_to_kit(inputs)
	if (locale === "sv") return sv_builds_action_add_to_kit(inputs)
	if (locale === "tr") return tr_builds_action_add_to_kit(inputs)
	if (locale === "zh") return zh_builds_action_add_to_kit(inputs)
	if (locale === "ja") return ja_builds_action_add_to_kit(inputs)
	return en_builds_action_add_to_kit(inputs)
});
