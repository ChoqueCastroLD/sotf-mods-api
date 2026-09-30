/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Op_MpInputs */

const en_cmdk_op_mp = /** @type {(inputs: Cmdk_Op_MpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const es_cmdk_op_mp = /** @type {(inputs: Cmdk_Op_MpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijugador`)
};

const de_cmdk_op_mp = /** @type {(inputs: Cmdk_Op_MpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehrspieler`)
};

const fr_cmdk_op_mp = /** @type {(inputs: Cmdk_Op_MpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijoueur`)
};

const it_cmdk_op_mp = /** @type {(inputs: Cmdk_Op_MpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multigiocatore`)
};

const nl_cmdk_op_mp = /** @type {(inputs: Cmdk_Op_MpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const pl_cmdk_op_mp = /** @type {(inputs: Cmdk_Op_MpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wieloosobowa`)
};

const pt_cmdk_op_mp = /** @type {(inputs: Cmdk_Op_MpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijogador`)
};

const ru_cmdk_op_mp = /** @type {(inputs: Cmdk_Op_MpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мультиплеер`)
};

const sv_cmdk_op_mp = /** @type {(inputs: Cmdk_Op_MpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flerspelare`)
};

const tr_cmdk_op_mp = /** @type {(inputs: Cmdk_Op_MpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok oyunculu`)
};

const zh_cmdk_op_mp = /** @type {(inputs: Cmdk_Op_MpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`多人游戏`)
};

const ja_cmdk_op_mp = /** @type {(inputs: Cmdk_Op_MpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マルチプレイ`)
};

/**
* | output |
* | --- |
* | "Multiplayer" |
*
* @param {Cmdk_Op_MpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_op_mp = /** @type {((inputs?: Cmdk_Op_MpInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Op_MpInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_op_mp(inputs)
	if (locale === "de") return de_cmdk_op_mp(inputs)
	if (locale === "fr") return fr_cmdk_op_mp(inputs)
	if (locale === "it") return it_cmdk_op_mp(inputs)
	if (locale === "nl") return nl_cmdk_op_mp(inputs)
	if (locale === "pl") return pl_cmdk_op_mp(inputs)
	if (locale === "pt") return pt_cmdk_op_mp(inputs)
	if (locale === "ru") return ru_cmdk_op_mp(inputs)
	if (locale === "sv") return sv_cmdk_op_mp(inputs)
	if (locale === "tr") return tr_cmdk_op_mp(inputs)
	if (locale === "zh") return zh_cmdk_op_mp(inputs)
	if (locale === "ja") return ja_cmdk_op_mp(inputs)
	return en_cmdk_op_mp(inputs)
});
