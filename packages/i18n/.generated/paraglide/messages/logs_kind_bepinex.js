/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Kind_BepinexInputs */

const en_logs_kind_bepinex = /** @type {(inputs: Logs_Kind_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BepInEx`)
};

const es_logs_kind_bepinex = /** @type {(inputs: Logs_Kind_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BepInEx`)
};

const de_logs_kind_bepinex = /** @type {(inputs: Logs_Kind_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BepInEx`)
};

const fr_logs_kind_bepinex = /** @type {(inputs: Logs_Kind_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BepInEx`)
};

const it_logs_kind_bepinex = /** @type {(inputs: Logs_Kind_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BepInEx`)
};

const nl_logs_kind_bepinex = /** @type {(inputs: Logs_Kind_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BepInEx`)
};

const pl_logs_kind_bepinex = /** @type {(inputs: Logs_Kind_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BepInEx`)
};

const pt_logs_kind_bepinex = /** @type {(inputs: Logs_Kind_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BepInEx`)
};

const ru_logs_kind_bepinex = /** @type {(inputs: Logs_Kind_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BepInEx`)
};

const sv_logs_kind_bepinex = /** @type {(inputs: Logs_Kind_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BepInEx`)
};

const tr_logs_kind_bepinex = /** @type {(inputs: Logs_Kind_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BepInEx`)
};

const zh_logs_kind_bepinex = /** @type {(inputs: Logs_Kind_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BepInEx`)
};

const ja_logs_kind_bepinex = /** @type {(inputs: Logs_Kind_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BepInEx`)
};

/**
* | output |
* | --- |
* | "BepInEx" |
*
* @param {Logs_Kind_BepinexInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_kind_bepinex = /** @type {((inputs?: Logs_Kind_BepinexInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Kind_BepinexInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_kind_bepinex(inputs)
	if (locale === "de") return de_logs_kind_bepinex(inputs)
	if (locale === "fr") return fr_logs_kind_bepinex(inputs)
	if (locale === "it") return it_logs_kind_bepinex(inputs)
	if (locale === "nl") return nl_logs_kind_bepinex(inputs)
	if (locale === "pl") return pl_logs_kind_bepinex(inputs)
	if (locale === "pt") return pt_logs_kind_bepinex(inputs)
	if (locale === "ru") return ru_logs_kind_bepinex(inputs)
	if (locale === "sv") return sv_logs_kind_bepinex(inputs)
	if (locale === "tr") return tr_logs_kind_bepinex(inputs)
	if (locale === "zh") return zh_logs_kind_bepinex(inputs)
	if (locale === "ja") return ja_logs_kind_bepinex(inputs)
	return en_logs_kind_bepinex(inputs)
});
