/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Empty_KitInputs */

const en_common_empty_kit = /** @type {(inputs: Common_Empty_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lay out your first item: add a mod to this kit.`)
};

const es_common_empty_kit = /** @type {(inputs: Common_Empty_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coloca tu primer objeto: añade un mod a este kit.`)
};

const de_common_empty_kit = /** @type {(inputs: Common_Empty_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leg dein erstes Teil aus: Füge diesem Kit einen Mod hinzu.`)
};

const fr_common_empty_kit = /** @type {(inputs: Common_Empty_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posez votre premier objet : ajoutez un mod à ce kit.`)
};

const it_common_empty_kit = /** @type {(inputs: Common_Empty_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponi il primo oggetto: aggiungi una mod a questo kit.`)
};

const nl_common_empty_kit = /** @type {(inputs: Common_Empty_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leg je eerste item neer: voeg een mod toe aan deze kit.`)
};

const pl_common_empty_kit = /** @type {(inputs: Common_Empty_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozłóż pierwszy przedmiot: dodaj mod do tego zestawu.`)
};

const pt_common_empty_kit = /** @type {(inputs: Common_Empty_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coloque seu primeiro item: adicione um mod a este kit.`)
};

const ru_common_empty_kit = /** @type {(inputs: Common_Empty_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Разложите первый предмет: добавьте мод в этот набор.`)
};

const sv_common_empty_kit = /** @type {(inputs: Common_Empty_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg ut din första sak: lägg till en modd i det här kitet.`)
};

const tr_common_empty_kit = /** @type {(inputs: Common_Empty_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk eşyanı yerleştir: bu kite bir mod ekle.`)
};

const zh_common_empty_kit = /** @type {(inputs: Common_Empty_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`摆上第一件物品：往这个套装里添加一个模组。`)
};

const ja_common_empty_kit = /** @type {(inputs: Common_Empty_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初のアイテムを並べましょう。このキットに MOD を追加してください。`)
};

/**
* | output |
* | --- |
* | "Lay out your first item: add a mod to this kit." |
*
* @param {Common_Empty_KitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_empty_kit = /** @type {((inputs?: Common_Empty_KitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Empty_KitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_empty_kit(inputs)
	if (locale === "de") return de_common_empty_kit(inputs)
	if (locale === "fr") return fr_common_empty_kit(inputs)
	if (locale === "it") return it_common_empty_kit(inputs)
	if (locale === "nl") return nl_common_empty_kit(inputs)
	if (locale === "pl") return pl_common_empty_kit(inputs)
	if (locale === "pt") return pt_common_empty_kit(inputs)
	if (locale === "ru") return ru_common_empty_kit(inputs)
	if (locale === "sv") return sv_common_empty_kit(inputs)
	if (locale === "tr") return tr_common_empty_kit(inputs)
	if (locale === "zh") return zh_common_empty_kit(inputs)
	if (locale === "ja") return ja_common_empty_kit(inputs)
	return en_common_empty_kit(inputs)
});
