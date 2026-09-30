/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Preferences_HintInputs */

const en_settings_preferences_hint = /** @type {(inputs: Settings_Preferences_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Language, theme, motion, shortcuts and mature content.`)
};

const es_settings_preferences_hint = /** @type {(inputs: Settings_Preferences_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma, tema, animaciones, atajos y contenido adulto.`)
};

const de_settings_preferences_hint = /** @type {(inputs: Settings_Preferences_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprache, Design, Animationen, Tastenkürzel und Inhalte für Erwachsene.`)
};

const fr_settings_preferences_hint = /** @type {(inputs: Settings_Preferences_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Langue, thème, animations, raccourcis et contenu pour adultes.`)
};

const it_settings_preferences_hint = /** @type {(inputs: Settings_Preferences_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lingua, tema, animazioni, scorciatoie e contenuti per adulti.`)
};

const nl_settings_preferences_hint = /** @type {(inputs: Settings_Preferences_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taal, thema, animaties, sneltoetsen en inhoud voor volwassenen.`)
};

const pl_settings_preferences_hint = /** @type {(inputs: Settings_Preferences_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Język, motyw, animacje, skróty i treści dla dorosłych.`)
};

const pt_settings_preferences_hint = /** @type {(inputs: Settings_Preferences_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma, tema, animações, atalhos e conteúdo adulto.`)
};

const ru_settings_preferences_hint = /** @type {(inputs: Settings_Preferences_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Язык, тема, анимации, горячие клавиши и контент для взрослых.`)
};

const sv_settings_preferences_hint = /** @type {(inputs: Settings_Preferences_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Språk, tema, animationer, kortkommandon och vuxeninnehåll.`)
};

const tr_settings_preferences_hint = /** @type {(inputs: Settings_Preferences_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dil, tema, animasyonlar, kısayollar ve yetişkin içerik.`)
};

const zh_settings_preferences_hint = /** @type {(inputs: Settings_Preferences_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`语言、主题、动画、快捷键和成人内容。`)
};

const ja_settings_preferences_hint = /** @type {(inputs: Settings_Preferences_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`言語、テーマ、アニメーション、ショートカット、成人向けコンテンツ。`)
};

/**
* | output |
* | --- |
* | "Language, theme, motion, shortcuts and mature content." |
*
* @param {Settings_Preferences_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_preferences_hint = /** @type {((inputs?: Settings_Preferences_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Preferences_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_preferences_hint(inputs)
	if (locale === "de") return de_settings_preferences_hint(inputs)
	if (locale === "fr") return fr_settings_preferences_hint(inputs)
	if (locale === "it") return it_settings_preferences_hint(inputs)
	if (locale === "nl") return nl_settings_preferences_hint(inputs)
	if (locale === "pl") return pl_settings_preferences_hint(inputs)
	if (locale === "pt") return pt_settings_preferences_hint(inputs)
	if (locale === "ru") return ru_settings_preferences_hint(inputs)
	if (locale === "sv") return sv_settings_preferences_hint(inputs)
	if (locale === "tr") return tr_settings_preferences_hint(inputs)
	if (locale === "zh") return zh_settings_preferences_hint(inputs)
	if (locale === "ja") return ja_settings_preferences_hint(inputs)
	return en_settings_preferences_hint(inputs)
});
