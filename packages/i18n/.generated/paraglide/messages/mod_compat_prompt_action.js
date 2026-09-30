/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Compat_Prompt_ActionInputs */

const en_mod_compat_prompt_action = /** @type {(inputs: Mod_Compat_Prompt_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report`)
};

const es_mod_compat_prompt_action = /** @type {(inputs: Mod_Compat_Prompt_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportar`)
};

const de_mod_compat_prompt_action = /** @type {(inputs: Mod_Compat_Prompt_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Berichten`)
};

const fr_mod_compat_prompt_action = /** @type {(inputs: Mod_Compat_Prompt_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler`)
};

const it_mod_compat_prompt_action = /** @type {(inputs: Mod_Compat_Prompt_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala`)
};

const nl_mod_compat_prompt_action = /** @type {(inputs: Mod_Compat_Prompt_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melden`)
};

const pl_mod_compat_prompt_action = /** @type {(inputs: Mod_Compat_Prompt_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś`)
};

const pt_mod_compat_prompt_action = /** @type {(inputs: Mod_Compat_Prompt_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatar`)
};

const ru_mod_compat_prompt_action = /** @type {(inputs: Mod_Compat_Prompt_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сообщить`)
};

const sv_mod_compat_prompt_action = /** @type {(inputs: Mod_Compat_Prompt_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapportera`)
};

const tr_mod_compat_prompt_action = /** @type {(inputs: Mod_Compat_Prompt_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildir`)
};

const zh_mod_compat_prompt_action = /** @type {(inputs: Mod_Compat_Prompt_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`报告`)
};

const ja_mod_compat_prompt_action = /** @type {(inputs: Mod_Compat_Prompt_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告する`)
};

/**
* | output |
* | --- |
* | "Report" |
*
* @param {Mod_Compat_Prompt_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_compat_prompt_action = /** @type {((inputs?: Mod_Compat_Prompt_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Compat_Prompt_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_compat_prompt_action(inputs)
	if (locale === "de") return de_mod_compat_prompt_action(inputs)
	if (locale === "fr") return fr_mod_compat_prompt_action(inputs)
	if (locale === "it") return it_mod_compat_prompt_action(inputs)
	if (locale === "nl") return nl_mod_compat_prompt_action(inputs)
	if (locale === "pl") return pl_mod_compat_prompt_action(inputs)
	if (locale === "pt") return pt_mod_compat_prompt_action(inputs)
	if (locale === "ru") return ru_mod_compat_prompt_action(inputs)
	if (locale === "sv") return sv_mod_compat_prompt_action(inputs)
	if (locale === "tr") return tr_mod_compat_prompt_action(inputs)
	if (locale === "zh") return zh_mod_compat_prompt_action(inputs)
	if (locale === "ja") return ja_mod_compat_prompt_action(inputs)
	return en_mod_compat_prompt_action(inputs)
});
