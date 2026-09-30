/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Select_ItemInputs */

const en_ranger_select_item = /** @type {(inputs: Ranger_Select_ItemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick an item from the list to review it.`)
};

const es_ranger_select_item = /** @type {(inputs: Ranger_Select_ItemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige un elemento de la lista para revisarlo.`)
};

const de_ranger_select_item = /** @type {(inputs: Ranger_Select_ItemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle einen Eintrag aus der Liste, um ihn zu prüfen.`)
};

const fr_ranger_select_item = /** @type {(inputs: Ranger_Select_ItemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez un élément de la liste pour l’examiner.`)
};

const it_ranger_select_item = /** @type {(inputs: Ranger_Select_ItemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli un elemento dall’elenco per esaminarlo.`)
};

const nl_ranger_select_item = /** @type {(inputs: Ranger_Select_ItemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een item uit de lijst om het te beoordelen.`)
};

const pl_ranger_select_item = /** @type {(inputs: Ranger_Select_ItemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz element z listy, aby go sprawdzić.`)
};

const pt_ranger_select_item = /** @type {(inputs: Ranger_Select_ItemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha um item da lista para revisá-lo.`)
};

const ru_ranger_select_item = /** @type {(inputs: Ranger_Select_ItemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите элемент в списке, чтобы проверить его.`)
};

const sv_ranger_select_item = /** @type {(inputs: Ranger_Select_ItemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj ett objekt i listan för att granska det.`)
};

const tr_ranger_select_item = /** @type {(inputs: Ranger_Select_ItemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemek için listeden bir öğe seçin.`)
};

const zh_ranger_select_item = /** @type {(inputs: Ranger_Select_ItemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从列表中选择一项进行审核。`)
};

const ja_ranger_select_item = /** @type {(inputs: Ranger_Select_ItemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リストから項目を選んでレビューしてください。`)
};

/**
* | output |
* | --- |
* | "Pick an item from the list to review it." |
*
* @param {Ranger_Select_ItemInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_select_item = /** @type {((inputs?: Ranger_Select_ItemInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Select_ItemInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_select_item(inputs)
	if (locale === "de") return de_ranger_select_item(inputs)
	if (locale === "fr") return fr_ranger_select_item(inputs)
	if (locale === "it") return it_ranger_select_item(inputs)
	if (locale === "nl") return nl_ranger_select_item(inputs)
	if (locale === "pl") return pl_ranger_select_item(inputs)
	if (locale === "pt") return pt_ranger_select_item(inputs)
	if (locale === "ru") return ru_ranger_select_item(inputs)
	if (locale === "sv") return sv_ranger_select_item(inputs)
	if (locale === "tr") return tr_ranger_select_item(inputs)
	if (locale === "zh") return zh_ranger_select_item(inputs)
	if (locale === "ja") return ja_ranger_select_item(inputs)
	return en_ranger_select_item(inputs)
});
