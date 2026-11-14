/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Modpacks_Move_DownInputs */

const en_modpacks_move_down = /** @type {(inputs: Modpacks_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Move ${i?.name} down`)
};

const es_modpacks_move_down = /** @type {(inputs: Modpacks_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bajar ${i?.name}`)
};

const de_modpacks_move_down = /** @type {(inputs: Modpacks_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} nach unten`)
};

const fr_modpacks_move_down = /** @type {(inputs: Modpacks_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descendre ${i?.name}`)
};

const it_modpacks_move_down = /** @type {(inputs: Modpacks_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sposta giù ${i?.name}`)
};

const nl_modpacks_move_down = /** @type {(inputs: Modpacks_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} omlaag`)
};

const pl_modpacks_move_down = /** @type {(inputs: Modpacks_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przesuń ${i?.name} w dół`)
};

const pt_modpacks_move_down = /** @type {(inputs: Modpacks_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mover ${i?.name} para baixo`)
};

const ru_modpacks_move_down = /** @type {(inputs: Modpacks_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Переместить ${i?.name} ниже`)
};

const sv_modpacks_move_down = /** @type {(inputs: Modpacks_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Flytta ner ${i?.name}`)
};

const tr_modpacks_move_down = /** @type {(inputs: Modpacks_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} aşağı taşı`)
};

const zh_modpacks_move_down = /** @type {(inputs: Modpacks_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`下移 ${i?.name}`)
};

const ja_modpacks_move_down = /** @type {(inputs: Modpacks_Move_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を下へ`)
};

/**
* | output |
* | --- |
* | "Move {name} down" |
*
* @param {Modpacks_Move_DownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_move_down = /** @type {((inputs: Modpacks_Move_DownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Move_DownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_move_down(inputs)
	if (locale === "de") return de_modpacks_move_down(inputs)
	if (locale === "fr") return fr_modpacks_move_down(inputs)
	if (locale === "it") return it_modpacks_move_down(inputs)
	if (locale === "nl") return nl_modpacks_move_down(inputs)
	if (locale === "pl") return pl_modpacks_move_down(inputs)
	if (locale === "pt") return pt_modpacks_move_down(inputs)
	if (locale === "ru") return ru_modpacks_move_down(inputs)
	if (locale === "sv") return sv_modpacks_move_down(inputs)
	if (locale === "tr") return tr_modpacks_move_down(inputs)
	if (locale === "zh") return zh_modpacks_move_down(inputs)
	if (locale === "ja") return ja_modpacks_move_down(inputs)
	return en_modpacks_move_down(inputs)
});
