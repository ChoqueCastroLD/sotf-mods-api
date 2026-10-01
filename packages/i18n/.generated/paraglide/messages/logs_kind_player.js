/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Kind_PlayerInputs */

const en_logs_kind_player = /** @type {(inputs: Logs_Kind_PlayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Player.log`)
};

const es_logs_kind_player = /** @type {(inputs: Logs_Kind_PlayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Player.log`)
};

const de_logs_kind_player = /** @type {(inputs: Logs_Kind_PlayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Player.log`)
};

const fr_logs_kind_player = /** @type {(inputs: Logs_Kind_PlayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Player.log`)
};

const it_logs_kind_player = /** @type {(inputs: Logs_Kind_PlayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Player.log`)
};

const nl_logs_kind_player = /** @type {(inputs: Logs_Kind_PlayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Player.log`)
};

const pl_logs_kind_player = /** @type {(inputs: Logs_Kind_PlayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Player.log`)
};

const pt_logs_kind_player = /** @type {(inputs: Logs_Kind_PlayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Player.log`)
};

const ru_logs_kind_player = /** @type {(inputs: Logs_Kind_PlayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Player.log`)
};

const sv_logs_kind_player = /** @type {(inputs: Logs_Kind_PlayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Player.log`)
};

const tr_logs_kind_player = /** @type {(inputs: Logs_Kind_PlayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Player.log`)
};

const zh_logs_kind_player = /** @type {(inputs: Logs_Kind_PlayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Player.log`)
};

const ja_logs_kind_player = /** @type {(inputs: Logs_Kind_PlayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Player.log`)
};

/**
* | output |
* | --- |
* | "Player.log" |
*
* @param {Logs_Kind_PlayerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_kind_player = /** @type {((inputs?: Logs_Kind_PlayerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Kind_PlayerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_kind_player(inputs)
	if (locale === "de") return de_logs_kind_player(inputs)
	if (locale === "fr") return fr_logs_kind_player(inputs)
	if (locale === "it") return it_logs_kind_player(inputs)
	if (locale === "nl") return nl_logs_kind_player(inputs)
	if (locale === "pl") return pl_logs_kind_player(inputs)
	if (locale === "pt") return pt_logs_kind_player(inputs)
	if (locale === "ru") return ru_logs_kind_player(inputs)
	if (locale === "sv") return sv_logs_kind_player(inputs)
	if (locale === "tr") return tr_logs_kind_player(inputs)
	if (locale === "zh") return zh_logs_kind_player(inputs)
	if (locale === "ja") return ja_logs_kind_player(inputs)
	return en_logs_kind_player(inputs)
});
