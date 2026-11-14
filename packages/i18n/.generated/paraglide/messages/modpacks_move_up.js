/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Modpacks_Move_UpInputs */

const en_modpacks_move_up = /** @type {(inputs: Modpacks_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Move ${i?.name} up`)
};

const es_modpacks_move_up = /** @type {(inputs: Modpacks_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Subir ${i?.name}`)
};

const de_modpacks_move_up = /** @type {(inputs: Modpacks_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} nach oben`)
};

const fr_modpacks_move_up = /** @type {(inputs: Modpacks_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Monter ${i?.name}`)
};

const it_modpacks_move_up = /** @type {(inputs: Modpacks_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sposta su ${i?.name}`)
};

const nl_modpacks_move_up = /** @type {(inputs: Modpacks_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} omhoog`)
};

const pl_modpacks_move_up = /** @type {(inputs: Modpacks_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przesuń ${i?.name} w górę`)
};

const pt_modpacks_move_up = /** @type {(inputs: Modpacks_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mover ${i?.name} para cima`)
};

const ru_modpacks_move_up = /** @type {(inputs: Modpacks_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Переместить ${i?.name} выше`)
};

const sv_modpacks_move_up = /** @type {(inputs: Modpacks_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Flytta upp ${i?.name}`)
};

const tr_modpacks_move_up = /** @type {(inputs: Modpacks_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} yukarı taşı`)
};

const zh_modpacks_move_up = /** @type {(inputs: Modpacks_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`上移 ${i?.name}`)
};

const ja_modpacks_move_up = /** @type {(inputs: Modpacks_Move_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を上へ`)
};

/**
* | output |
* | --- |
* | "Move {name} up" |
*
* @param {Modpacks_Move_UpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_move_up = /** @type {((inputs: Modpacks_Move_UpInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Move_UpInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_move_up(inputs)
	if (locale === "de") return de_modpacks_move_up(inputs)
	if (locale === "fr") return fr_modpacks_move_up(inputs)
	if (locale === "it") return it_modpacks_move_up(inputs)
	if (locale === "nl") return nl_modpacks_move_up(inputs)
	if (locale === "pl") return pl_modpacks_move_up(inputs)
	if (locale === "pt") return pt_modpacks_move_up(inputs)
	if (locale === "ru") return ru_modpacks_move_up(inputs)
	if (locale === "sv") return sv_modpacks_move_up(inputs)
	if (locale === "tr") return tr_modpacks_move_up(inputs)
	if (locale === "zh") return zh_modpacks_move_up(inputs)
	if (locale === "ja") return ja_modpacks_move_up(inputs)
	return en_modpacks_move_up(inputs)
});
