/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Compat_PromptInputs */

const en_settings_notif_compat_prompt = /** @type {(inputs: Settings_Notif_Compat_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“Did it work?” prompts`)
};

const es_settings_notif_compat_prompt = /** @type {(inputs: Settings_Notif_Compat_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avisos de «¿Funcionó?»`)
};

const de_settings_notif_compat_prompt = /** @type {(inputs: Settings_Notif_Compat_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`„Hat es funktioniert?“-Hinweise`)
};

const fr_settings_notif_compat_prompt = /** @type {(inputs: Settings_Notif_Compat_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invitations « Ça a marché ? »`)
};

const it_settings_notif_compat_prompt = /** @type {(inputs: Settings_Notif_Compat_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richieste «Ha funzionato?»`)
};

const nl_settings_notif_compat_prompt = /** @type {(inputs: Settings_Notif_Compat_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldingen «Werkte het?»`)
};

const pl_settings_notif_compat_prompt = /** @type {(inputs: Settings_Notif_Compat_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pytania „Czy działało?”`)
};

const pt_settings_notif_compat_prompt = /** @type {(inputs: Settings_Notif_Compat_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avisos de “Funcionou?”`)
};

const ru_settings_notif_compat_prompt = /** @type {(inputs: Settings_Notif_Compat_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вопросы «Сработало?»`)
};

const sv_settings_notif_compat_prompt = /** @type {(inputs: Settings_Notif_Compat_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frågor om ”Fungerade det?”`)
};

const tr_settings_notif_compat_prompt = /** @type {(inputs: Settings_Notif_Compat_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“İşe yaradı mı?” hatırlatmaları`)
};

const zh_settings_notif_compat_prompt = /** @type {(inputs: Settings_Notif_Compat_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“好用吗？”提醒`)
};

const ja_settings_notif_compat_prompt = /** @type {(inputs: Settings_Notif_Compat_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`「動きましたか？」のお知らせ`)
};

/**
* | output |
* | --- |
* | "“Did it work?” prompts" |
*
* @param {Settings_Notif_Compat_PromptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_compat_prompt = /** @type {((inputs?: Settings_Notif_Compat_PromptInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Compat_PromptInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_compat_prompt(inputs)
	if (locale === "de") return de_settings_notif_compat_prompt(inputs)
	if (locale === "fr") return fr_settings_notif_compat_prompt(inputs)
	if (locale === "it") return it_settings_notif_compat_prompt(inputs)
	if (locale === "nl") return nl_settings_notif_compat_prompt(inputs)
	if (locale === "pl") return pl_settings_notif_compat_prompt(inputs)
	if (locale === "pt") return pt_settings_notif_compat_prompt(inputs)
	if (locale === "ru") return ru_settings_notif_compat_prompt(inputs)
	if (locale === "sv") return sv_settings_notif_compat_prompt(inputs)
	if (locale === "tr") return tr_settings_notif_compat_prompt(inputs)
	if (locale === "zh") return zh_settings_notif_compat_prompt(inputs)
	if (locale === "ja") return ja_settings_notif_compat_prompt(inputs)
	return en_settings_notif_compat_prompt(inputs)
});
