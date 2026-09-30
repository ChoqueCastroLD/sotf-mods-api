/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kits_Item_RemoveInputs */

const en_kits_item_remove = /** @type {(inputs: Kits_Item_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove ${i?.name}`)
};

const es_kits_item_remove = /** @type {(inputs: Kits_Item_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Quitar ${i?.name}`)
};

const de_kits_item_remove = /** @type {(inputs: Kits_Item_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} entfernen`)
};

const fr_kits_item_remove = /** @type {(inputs: Kits_Item_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer ${i?.name}`)
};

const it_kits_item_remove = /** @type {(inputs: Kits_Item_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rimuovi ${i?.name}`)
};

const nl_kits_item_remove = /** @type {(inputs: Kits_Item_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} verwijderen`)
};

const pl_kits_item_remove = /** @type {(inputs: Kits_Item_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usuń ${i?.name}`)
};

const pt_kits_item_remove = /** @type {(inputs: Kits_Item_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remover ${i?.name}`)
};

const ru_kits_item_remove = /** @type {(inputs: Kits_Item_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Убрать ${i?.name}`)
};

const sv_kits_item_remove = /** @type {(inputs: Kits_Item_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort ${i?.name}`)
};

const tr_kits_item_remove = /** @type {(inputs: Kits_Item_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} öğesini kaldır`)
};

const zh_kits_item_remove = /** @type {(inputs: Kits_Item_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`移除 ${i?.name}`)
};

const ja_kits_item_remove = /** @type {(inputs: Kits_Item_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を外す`)
};

/**
* | output |
* | --- |
* | "Remove {name}" |
*
* @param {Kits_Item_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_item_remove = /** @type {((inputs: Kits_Item_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Item_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_item_remove(inputs)
	if (locale === "de") return de_kits_item_remove(inputs)
	if (locale === "fr") return fr_kits_item_remove(inputs)
	if (locale === "it") return it_kits_item_remove(inputs)
	if (locale === "nl") return nl_kits_item_remove(inputs)
	if (locale === "pl") return pl_kits_item_remove(inputs)
	if (locale === "pt") return pt_kits_item_remove(inputs)
	if (locale === "ru") return ru_kits_item_remove(inputs)
	if (locale === "sv") return sv_kits_item_remove(inputs)
	if (locale === "tr") return tr_kits_item_remove(inputs)
	if (locale === "zh") return zh_kits_item_remove(inputs)
	if (locale === "ja") return ja_kits_item_remove(inputs)
	return en_kits_item_remove(inputs)
});
