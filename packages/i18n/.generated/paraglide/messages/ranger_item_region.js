/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Item_RegionInputs */

const en_ranger_item_region = /** @type {(inputs: Ranger_Item_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Item under review`)
};

const es_ranger_item_region = /** @type {(inputs: Ranger_Item_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elemento en revisión`)
};

const de_ranger_item_region = /** @type {(inputs: Ranger_Item_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eintrag in Prüfung`)
};

const fr_ranger_item_region = /** @type {(inputs: Ranger_Item_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Élément en cours d’examen`)
};

const it_ranger_item_region = /** @type {(inputs: Ranger_Item_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elemento in esame`)
};

const nl_ranger_item_region = /** @type {(inputs: Ranger_Item_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Item in beoordeling`)
};

const pl_ranger_item_region = /** @type {(inputs: Ranger_Item_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdzany element`)
};

const pt_ranger_item_region = /** @type {(inputs: Ranger_Item_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Item em revisão`)
};

const ru_ranger_item_region = /** @type {(inputs: Ranger_Item_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверяемый элемент`)
};

const sv_ranger_item_region = /** @type {(inputs: Ranger_Item_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Objekt under granskning`)
};

const tr_ranger_item_region = /** @type {(inputs: Ranger_Item_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelenen öğe`)
};

const zh_ranger_item_region = /** @type {(inputs: Ranger_Item_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在审核的项目`)
};

const ja_ranger_item_region = /** @type {(inputs: Ranger_Item_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビュー中の項目`)
};

/**
* | output |
* | --- |
* | "Item under review" |
*
* @param {Ranger_Item_RegionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_item_region = /** @type {((inputs?: Ranger_Item_RegionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Item_RegionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_item_region(inputs)
	if (locale === "de") return de_ranger_item_region(inputs)
	if (locale === "fr") return fr_ranger_item_region(inputs)
	if (locale === "it") return it_ranger_item_region(inputs)
	if (locale === "nl") return nl_ranger_item_region(inputs)
	if (locale === "pl") return pl_ranger_item_region(inputs)
	if (locale === "pt") return pt_ranger_item_region(inputs)
	if (locale === "ru") return ru_ranger_item_region(inputs)
	if (locale === "sv") return sv_ranger_item_region(inputs)
	if (locale === "tr") return tr_ranger_item_region(inputs)
	if (locale === "zh") return zh_ranger_item_region(inputs)
	if (locale === "ja") return ja_ranger_item_region(inputs)
	return en_ranger_item_region(inputs)
});
