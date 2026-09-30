/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, position: NonNullable<unknown>, total: NonNullable<unknown> }} Kits_Drag_HandleInputs */

const en_kits_drag_handle = /** @type {(inputs: Kits_Drag_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Move ${i?.name}, position ${i?.position} of ${i?.total}`)
};

const es_kits_drag_handle = /** @type {(inputs: Kits_Drag_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mover ${i?.name}, posición ${i?.position} de ${i?.total}`)
};

const de_kits_drag_handle = /** @type {(inputs: Kits_Drag_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} verschieben, Position ${i?.position} von ${i?.total}`)
};

const fr_kits_drag_handle = /** @type {(inputs: Kits_Drag_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Déplacer ${i?.name}, position ${i?.position} sur ${i?.total}`)
};

const it_kits_drag_handle = /** @type {(inputs: Kits_Drag_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sposta ${i?.name}, posizione ${i?.position} di ${i?.total}`)
};

const nl_kits_drag_handle = /** @type {(inputs: Kits_Drag_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} verplaatsen, positie ${i?.position} van ${i?.total}`)
};

const pl_kits_drag_handle = /** @type {(inputs: Kits_Drag_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przesuń ${i?.name}, pozycja ${i?.position} z ${i?.total}`)
};

const pt_kits_drag_handle = /** @type {(inputs: Kits_Drag_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mover ${i?.name}, posição ${i?.position} de ${i?.total}`)
};

const ru_kits_drag_handle = /** @type {(inputs: Kits_Drag_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Переместить ${i?.name}, позиция ${i?.position} из ${i?.total}`)
};

const sv_kits_drag_handle = /** @type {(inputs: Kits_Drag_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Flytta ${i?.name}, plats ${i?.position} av ${i?.total}`)
};

const tr_kits_drag_handle = /** @type {(inputs: Kits_Drag_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} öğesini taşı, sıra ${i?.position}/${i?.total}`)
};

const zh_kits_drag_handle = /** @type {(inputs: Kits_Drag_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`移动 ${i?.name}，第 ${i?.position}/${i?.total} 位`)
};

const ja_kits_drag_handle = /** @type {(inputs: Kits_Drag_HandleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を移動（${i?.total} 件中 ${i?.position} 番目）`)
};

/**
* | output |
* | --- |
* | "Move {name}, position {position} of {total}" |
*
* @param {Kits_Drag_HandleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_drag_handle = /** @type {((inputs: Kits_Drag_HandleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Drag_HandleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_drag_handle(inputs)
	if (locale === "de") return de_kits_drag_handle(inputs)
	if (locale === "fr") return fr_kits_drag_handle(inputs)
	if (locale === "it") return it_kits_drag_handle(inputs)
	if (locale === "nl") return nl_kits_drag_handle(inputs)
	if (locale === "pl") return pl_kits_drag_handle(inputs)
	if (locale === "pt") return pt_kits_drag_handle(inputs)
	if (locale === "ru") return ru_kits_drag_handle(inputs)
	if (locale === "sv") return sv_kits_drag_handle(inputs)
	if (locale === "tr") return tr_kits_drag_handle(inputs)
	if (locale === "zh") return zh_kits_drag_handle(inputs)
	if (locale === "ja") return ja_kits_drag_handle(inputs)
	return en_kits_drag_handle(inputs)
});
