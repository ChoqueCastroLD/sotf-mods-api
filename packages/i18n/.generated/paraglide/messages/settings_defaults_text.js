/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Defaults_TextInputs */

const en_settings_defaults_text = /** @type {(inputs: Settings_Defaults_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pre-fill new mods and reply faster to common questions.`)
};

const es_settings_defaults_text = /** @type {(inputs: Settings_Defaults_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rellena de antemano los mods nuevos y responde más rápido a las preguntas habituales.`)
};

const de_settings_defaults_text = /** @type {(inputs: Settings_Defaults_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Mods vorausfüllen und schneller auf häufige Fragen antworten.`)
};

const fr_settings_defaults_text = /** @type {(inputs: Settings_Defaults_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Préremplissez vos nouveaux mods et répondez plus vite aux questions fréquentes.`)
};

const it_settings_defaults_text = /** @type {(inputs: Settings_Defaults_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Precompila le nuove mod e rispondi più in fretta alle domande frequenti.`)
};

const nl_settings_defaults_text = /** @type {(inputs: Settings_Defaults_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vul nieuwe mods alvast in en beantwoord veelgestelde vragen sneller.`)
};

const pl_settings_defaults_text = /** @type {(inputs: Settings_Defaults_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wypełniaj z góry nowe mody i szybciej odpowiadaj na częste pytania.`)
};

const pt_settings_defaults_text = /** @type {(inputs: Settings_Defaults_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preencha novos mods de antemão e responda mais rápido às perguntas comuns.`)
};

const ru_settings_defaults_text = /** @type {(inputs: Settings_Defaults_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заранее заполняйте новые моды и быстрее отвечайте на частые вопросы.`)
};

const sv_settings_defaults_text = /** @type {(inputs: Settings_Defaults_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förifyll nya moddar och svara snabbare på vanliga frågor.`)
};

const tr_settings_defaults_text = /** @type {(inputs: Settings_Defaults_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni modları önceden doldur ve sık sorulan sorulara daha hızlı yanıt ver.`)
};

const zh_settings_defaults_text = /** @type {(inputs: Settings_Defaults_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`预先填写新模组，更快回复常见问题。`)
};

const ja_settings_defaults_text = /** @type {(inputs: Settings_Defaults_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいMODを事前入力し、よくある質問にすばやく返信できます。`)
};

/**
* | output |
* | --- |
* | "Pre-fill new mods and reply faster to common questions." |
*
* @param {Settings_Defaults_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_defaults_text = /** @type {((inputs?: Settings_Defaults_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Defaults_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_defaults_text(inputs)
	if (locale === "de") return de_settings_defaults_text(inputs)
	if (locale === "fr") return fr_settings_defaults_text(inputs)
	if (locale === "it") return it_settings_defaults_text(inputs)
	if (locale === "nl") return nl_settings_defaults_text(inputs)
	if (locale === "pl") return pl_settings_defaults_text(inputs)
	if (locale === "pt") return pt_settings_defaults_text(inputs)
	if (locale === "ru") return ru_settings_defaults_text(inputs)
	if (locale === "sv") return sv_settings_defaults_text(inputs)
	if (locale === "tr") return tr_settings_defaults_text(inputs)
	if (locale === "zh") return zh_settings_defaults_text(inputs)
	if (locale === "ja") return ja_settings_defaults_text(inputs)
	return en_settings_defaults_text(inputs)
});
