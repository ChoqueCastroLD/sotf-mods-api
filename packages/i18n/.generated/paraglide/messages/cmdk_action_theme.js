/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ theme: NonNullable<unknown> }} Cmdk_Action_ThemeInputs */

const en_cmdk_action_theme = /** @type {(inputs: Cmdk_Action_ThemeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Theme: ${i?.theme}`)
};

const es_cmdk_action_theme = /** @type {(inputs: Cmdk_Action_ThemeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tema: ${i?.theme}`)
};

const de_cmdk_action_theme = /** @type {(inputs: Cmdk_Action_ThemeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Design: ${i?.theme}`)
};

const fr_cmdk_action_theme = /** @type {(inputs: Cmdk_Action_ThemeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Thème : ${i?.theme}`)
};

const it_cmdk_action_theme = /** @type {(inputs: Cmdk_Action_ThemeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tema: ${i?.theme}`)
};

const nl_cmdk_action_theme = /** @type {(inputs: Cmdk_Action_ThemeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Thema: ${i?.theme}`)
};

const pl_cmdk_action_theme = /** @type {(inputs: Cmdk_Action_ThemeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Motyw: ${i?.theme}`)
};

const pt_cmdk_action_theme = /** @type {(inputs: Cmdk_Action_ThemeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tema: ${i?.theme}`)
};

const ru_cmdk_action_theme = /** @type {(inputs: Cmdk_Action_ThemeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Тема: ${i?.theme}`)
};

const sv_cmdk_action_theme = /** @type {(inputs: Cmdk_Action_ThemeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tema: ${i?.theme}`)
};

const tr_cmdk_action_theme = /** @type {(inputs: Cmdk_Action_ThemeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tema: ${i?.theme}`)
};

const zh_cmdk_action_theme = /** @type {(inputs: Cmdk_Action_ThemeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`主题：${i?.theme}`)
};

const ja_cmdk_action_theme = /** @type {(inputs: Cmdk_Action_ThemeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`テーマ：${i?.theme}`)
};

/**
* | output |
* | --- |
* | "Theme: {theme}" |
*
* @param {Cmdk_Action_ThemeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_action_theme = /** @type {((inputs: Cmdk_Action_ThemeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Action_ThemeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_action_theme(inputs)
	if (locale === "de") return de_cmdk_action_theme(inputs)
	if (locale === "fr") return fr_cmdk_action_theme(inputs)
	if (locale === "it") return it_cmdk_action_theme(inputs)
	if (locale === "nl") return nl_cmdk_action_theme(inputs)
	if (locale === "pl") return pl_cmdk_action_theme(inputs)
	if (locale === "pt") return pt_cmdk_action_theme(inputs)
	if (locale === "ru") return ru_cmdk_action_theme(inputs)
	if (locale === "sv") return sv_cmdk_action_theme(inputs)
	if (locale === "tr") return tr_cmdk_action_theme(inputs)
	if (locale === "zh") return zh_cmdk_action_theme(inputs)
	if (locale === "ja") return ja_cmdk_action_theme(inputs)
	return en_cmdk_action_theme(inputs)
});
