/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Hint_MoveInputs */

const en_cmdk_hint_move = /** @type {(inputs: Cmdk_Hint_MoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Move`)
};

const es_cmdk_hint_move = /** @type {(inputs: Cmdk_Hint_MoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moverse`)
};

const de_cmdk_hint_move = /** @type {(inputs: Cmdk_Hint_MoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewegen`)
};

const fr_cmdk_hint_move = /** @type {(inputs: Cmdk_Hint_MoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se déplacer`)
};

const it_cmdk_hint_move = /** @type {(inputs: Cmdk_Hint_MoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sposta`)
};

const nl_cmdk_hint_move = /** @type {(inputs: Cmdk_Hint_MoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verplaatsen`)
};

const pl_cmdk_hint_move = /** @type {(inputs: Cmdk_Hint_MoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nawigacja`)
};

const pt_cmdk_hint_move = /** @type {(inputs: Cmdk_Hint_MoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mover`)
};

const ru_cmdk_hint_move = /** @type {(inputs: Cmdk_Hint_MoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перемещение`)
};

const sv_cmdk_hint_move = /** @type {(inputs: Cmdk_Hint_MoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flytta`)
};

const tr_cmdk_hint_move = /** @type {(inputs: Cmdk_Hint_MoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gezin`)
};

const zh_cmdk_hint_move = /** @type {(inputs: Cmdk_Hint_MoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移动`)
};

const ja_cmdk_hint_move = /** @type {(inputs: Cmdk_Hint_MoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移動`)
};

/**
* | output |
* | --- |
* | "Move" |
*
* @param {Cmdk_Hint_MoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_hint_move = /** @type {((inputs?: Cmdk_Hint_MoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Hint_MoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_hint_move(inputs)
	if (locale === "de") return de_cmdk_hint_move(inputs)
	if (locale === "fr") return fr_cmdk_hint_move(inputs)
	if (locale === "it") return it_cmdk_hint_move(inputs)
	if (locale === "nl") return nl_cmdk_hint_move(inputs)
	if (locale === "pl") return pl_cmdk_hint_move(inputs)
	if (locale === "pt") return pt_cmdk_hint_move(inputs)
	if (locale === "ru") return ru_cmdk_hint_move(inputs)
	if (locale === "sv") return sv_cmdk_hint_move(inputs)
	if (locale === "tr") return tr_cmdk_hint_move(inputs)
	if (locale === "zh") return zh_cmdk_hint_move(inputs)
	if (locale === "ja") return ja_cmdk_hint_move(inputs)
	return en_cmdk_hint_move(inputs)
});
