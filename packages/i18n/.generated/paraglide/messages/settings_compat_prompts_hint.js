/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Compat_Prompts_HintInputs */

const en_settings_compat_prompts_hint = /** @type {(inputs: Settings_Compat_Prompts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your answers tell other survivors which mods run on the current build.`)
};

const es_settings_compat_prompts_hint = /** @type {(inputs: Settings_Compat_Prompts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus respuestas indican a otros supervivientes qué mods funcionan en la build actual.`)
};

const de_settings_compat_prompts_hint = /** @type {(inputs: Settings_Compat_Prompts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Antworten zeigen anderen Überlebenden, welche Mods auf dem aktuellen Build laufen.`)
};

const fr_settings_compat_prompts_hint = /** @type {(inputs: Settings_Compat_Prompts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos réponses indiquent aux autres survivants quels mods fonctionnent sur la build actuelle.`)
};

const it_settings_compat_prompts_hint = /** @type {(inputs: Settings_Compat_Prompts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le tue risposte dicono agli altri sopravvissuti quali mod funzionano sulla build attuale.`)
};

const nl_settings_compat_prompts_hint = /** @type {(inputs: Settings_Compat_Prompts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je antwoorden vertellen andere overlevenden welke mods werken op de huidige build.`)
};

const pl_settings_compat_prompts_hint = /** @type {(inputs: Settings_Compat_Prompts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje odpowiedzi mówią innym ocalałym, które mody działają na bieżącym buildzie.`)
};

const pt_settings_compat_prompts_hint = /** @type {(inputs: Settings_Compat_Prompts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suas respostas mostram aos outros sobreviventes quais mods funcionam na build atual.`)
};

const ru_settings_compat_prompts_hint = /** @type {(inputs: Settings_Compat_Prompts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши ответы подсказывают другим выжившим, какие моды работают на текущей сборке.`)
};

const sv_settings_compat_prompts_hint = /** @type {(inputs: Settings_Compat_Prompts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina svar visar andra överlevare vilka moddar som fungerar på det aktuella bygget.`)
};

const tr_settings_compat_prompts_hint = /** @type {(inputs: Settings_Compat_Prompts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıtların, diğer hayatta kalanlara güncel sürümde hangi modların çalıştığını söyler.`)
};

const zh_settings_compat_prompts_hint = /** @type {(inputs: Settings_Compat_Prompts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的回答会告诉其他幸存者哪些模组能在当前版本上使用。`)
};

const ja_settings_compat_prompts_hint = /** @type {(inputs: Settings_Compat_Prompts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの回答で、他のサバイバーが現在のビルドで動くMODを知ることができます。`)
};

/**
* | output |
* | --- |
* | "Your answers tell other survivors which mods run on the current build." |
*
* @param {Settings_Compat_Prompts_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_compat_prompts_hint = /** @type {((inputs?: Settings_Compat_Prompts_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Compat_Prompts_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_compat_prompts_hint(inputs)
	if (locale === "de") return de_settings_compat_prompts_hint(inputs)
	if (locale === "fr") return fr_settings_compat_prompts_hint(inputs)
	if (locale === "it") return it_settings_compat_prompts_hint(inputs)
	if (locale === "nl") return nl_settings_compat_prompts_hint(inputs)
	if (locale === "pl") return pl_settings_compat_prompts_hint(inputs)
	if (locale === "pt") return pt_settings_compat_prompts_hint(inputs)
	if (locale === "ru") return ru_settings_compat_prompts_hint(inputs)
	if (locale === "sv") return sv_settings_compat_prompts_hint(inputs)
	if (locale === "tr") return tr_settings_compat_prompts_hint(inputs)
	if (locale === "zh") return zh_settings_compat_prompts_hint(inputs)
	if (locale === "ja") return ja_settings_compat_prompts_hint(inputs)
	return en_settings_compat_prompts_hint(inputs)
});
