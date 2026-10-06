/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Cmdk_Go_ModerationInputs */

const en_shell_cmdk_go_moderation = /** @type {(inputs: Shell_Cmdk_Go_ModerationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderation`)
};

const es_shell_cmdk_go_moderation = /** @type {(inputs: Shell_Cmdk_Go_ModerationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderación`)
};

const de_shell_cmdk_go_moderation = /** @type {(inputs: Shell_Cmdk_Go_ModerationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderation`)
};

const fr_shell_cmdk_go_moderation = /** @type {(inputs: Shell_Cmdk_Go_ModerationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modération`)
};

const it_shell_cmdk_go_moderation = /** @type {(inputs: Shell_Cmdk_Go_ModerationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderazione`)
};

const nl_shell_cmdk_go_moderation = /** @type {(inputs: Shell_Cmdk_Go_ModerationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatie`)
};

const pl_shell_cmdk_go_moderation = /** @type {(inputs: Shell_Cmdk_Go_ModerationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderacja`)
};

const pt_shell_cmdk_go_moderation = /** @type {(inputs: Shell_Cmdk_Go_ModerationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderação`)
};

const ru_shell_cmdk_go_moderation = /** @type {(inputs: Shell_Cmdk_Go_ModerationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модерация`)
};

const sv_shell_cmdk_go_moderation = /** @type {(inputs: Shell_Cmdk_Go_ModerationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderering`)
};

const tr_shell_cmdk_go_moderation = /** @type {(inputs: Shell_Cmdk_Go_ModerationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderasyon`)
};

const zh_shell_cmdk_go_moderation = /** @type {(inputs: Shell_Cmdk_Go_ModerationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审核`)
};

const ja_shell_cmdk_go_moderation = /** @type {(inputs: Shell_Cmdk_Go_ModerationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーション`)
};

/**
* | output |
* | --- |
* | "Moderation" |
*
* @param {Shell_Cmdk_Go_ModerationInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_cmdk_go_moderation = /** @type {((inputs?: Shell_Cmdk_Go_ModerationInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Cmdk_Go_ModerationInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_cmdk_go_moderation(inputs)
	if (locale === "de") return de_shell_cmdk_go_moderation(inputs)
	if (locale === "fr") return fr_shell_cmdk_go_moderation(inputs)
	if (locale === "it") return it_shell_cmdk_go_moderation(inputs)
	if (locale === "nl") return nl_shell_cmdk_go_moderation(inputs)
	if (locale === "pl") return pl_shell_cmdk_go_moderation(inputs)
	if (locale === "pt") return pt_shell_cmdk_go_moderation(inputs)
	if (locale === "ru") return ru_shell_cmdk_go_moderation(inputs)
	if (locale === "sv") return sv_shell_cmdk_go_moderation(inputs)
	if (locale === "tr") return tr_shell_cmdk_go_moderation(inputs)
	if (locale === "zh") return zh_shell_cmdk_go_moderation(inputs)
	if (locale === "ja") return ja_shell_cmdk_go_moderation(inputs)
	return en_shell_cmdk_go_moderation(inputs)
});
