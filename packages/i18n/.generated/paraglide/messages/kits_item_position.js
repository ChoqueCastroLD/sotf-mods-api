/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ position: NonNullable<unknown> }} Kits_Item_PositionInputs */

const en_kits_item_position = /** @type {(inputs: Kits_Item_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Position ${i?.position}:`)
};

const es_kits_item_position = /** @type {(inputs: Kits_Item_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Posición ${i?.position}:`)
};

const de_kits_item_position = /** @type {(inputs: Kits_Item_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Position ${i?.position}:`)
};

const fr_kits_item_position = /** @type {(inputs: Kits_Item_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Position ${i?.position} :`)
};

const it_kits_item_position = /** @type {(inputs: Kits_Item_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Posizione ${i?.position}:`)
};

const nl_kits_item_position = /** @type {(inputs: Kits_Item_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Positie ${i?.position}:`)
};

const pl_kits_item_position = /** @type {(inputs: Kits_Item_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pozycja ${i?.position}:`)
};

const pt_kits_item_position = /** @type {(inputs: Kits_Item_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Posição ${i?.position}:`)
};

const ru_kits_item_position = /** @type {(inputs: Kits_Item_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Позиция ${i?.position}:`)
};

const sv_kits_item_position = /** @type {(inputs: Kits_Item_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Plats ${i?.position}:`)
};

const tr_kits_item_position = /** @type {(inputs: Kits_Item_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sıra ${i?.position}:`)
};

const zh_kits_item_position = /** @type {(inputs: Kits_Item_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.position} 项：`)
};

const ja_kits_item_position = /** @type {(inputs: Kits_Item_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.position} 番目：`)
};

/**
* | output |
* | --- |
* | "Position {position}:" |
*
* @param {Kits_Item_PositionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_item_position = /** @type {((inputs: Kits_Item_PositionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Item_PositionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_item_position(inputs)
	if (locale === "de") return de_kits_item_position(inputs)
	if (locale === "fr") return fr_kits_item_position(inputs)
	if (locale === "it") return it_kits_item_position(inputs)
	if (locale === "nl") return nl_kits_item_position(inputs)
	if (locale === "pl") return pl_kits_item_position(inputs)
	if (locale === "pt") return pt_kits_item_position(inputs)
	if (locale === "ru") return ru_kits_item_position(inputs)
	if (locale === "sv") return sv_kits_item_position(inputs)
	if (locale === "tr") return tr_kits_item_position(inputs)
	if (locale === "zh") return zh_kits_item_position(inputs)
	if (locale === "ja") return ja_kits_item_position(inputs)
	return en_kits_item_position(inputs)
});
