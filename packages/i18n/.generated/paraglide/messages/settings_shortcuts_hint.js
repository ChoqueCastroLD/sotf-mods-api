/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Shortcuts_HintInputs */

const en_settings_shortcuts_hint = /** @type {(inputs: Settings_Shortcuts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Single-key shortcuts in the console. Turn them off if they get in the way of your assistive technology.`)
};

const es_settings_shortcuts_hint = /** @type {(inputs: Settings_Shortcuts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atajos de una sola tecla en la consola. Desactívalos si interfieren con tu tecnología de apoyo.`)
};

const de_settings_shortcuts_hint = /** @type {(inputs: Settings_Shortcuts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein-Tasten-Kürzel in der Konsole. Schalte sie aus, wenn sie deine Hilfstechnologie stören.`)
};

const fr_settings_shortcuts_hint = /** @type {(inputs: Settings_Shortcuts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raccourcis à une touche dans la console. Désactivez-les s’ils gênent votre technologie d’assistance.`)
};

const it_settings_shortcuts_hint = /** @type {(inputs: Settings_Shortcuts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scorciatoie a un tasto nella console. Disattivale se interferiscono con la tua tecnologia assistiva.`)
};

const nl_settings_shortcuts_hint = /** @type {(inputs: Settings_Shortcuts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sneltoetsen van één toets in de console. Zet ze uit als ze je hulptechnologie in de weg zitten.`)
};

const pl_settings_shortcuts_hint = /** @type {(inputs: Settings_Shortcuts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jednoklawiszowe skróty w konsoli. Wyłącz je, jeśli przeszkadzają twojej technologii wspomagającej.`)
};

const pt_settings_shortcuts_hint = /** @type {(inputs: Settings_Shortcuts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atalhos de uma tecla no console. Desative-os se atrapalharem sua tecnologia assistiva.`)
};

const ru_settings_shortcuts_hint = /** @type {(inputs: Settings_Shortcuts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Однокнопочные сочетания в консоли. Выключите их, если они мешают вашим вспомогательным технологиям.`)
};

const sv_settings_shortcuts_hint = /** @type {(inputs: Settings_Shortcuts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enkeltangentskommandon i konsolen. Stäng av dem om de stör ditt hjälpmedel.`)
};

const tr_settings_shortcuts_hint = /** @type {(inputs: Settings_Shortcuts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konsolda tek tuşlu kısayollar. Yardımcı teknolojine engel oluyorlarsa kapat.`)
};

const zh_settings_shortcuts_hint = /** @type {(inputs: Settings_Shortcuts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`控制台中的单键快捷键。如果它们干扰你的辅助技术，请关闭。`)
};

const ja_settings_shortcuts_hint = /** @type {(inputs: Settings_Shortcuts_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンソールの1キーショートカット。支援技術の妨げになる場合はオフにしてください。`)
};

/**
* | output |
* | --- |
* | "Single-key shortcuts in the console. Turn them off if they get in the way of your assistive technology." |
*
* @param {Settings_Shortcuts_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_shortcuts_hint = /** @type {((inputs?: Settings_Shortcuts_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Shortcuts_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_shortcuts_hint(inputs)
	if (locale === "de") return de_settings_shortcuts_hint(inputs)
	if (locale === "fr") return fr_settings_shortcuts_hint(inputs)
	if (locale === "it") return it_settings_shortcuts_hint(inputs)
	if (locale === "nl") return nl_settings_shortcuts_hint(inputs)
	if (locale === "pl") return pl_settings_shortcuts_hint(inputs)
	if (locale === "pt") return pt_settings_shortcuts_hint(inputs)
	if (locale === "ru") return ru_settings_shortcuts_hint(inputs)
	if (locale === "sv") return sv_settings_shortcuts_hint(inputs)
	if (locale === "tr") return tr_settings_shortcuts_hint(inputs)
	if (locale === "zh") return zh_settings_shortcuts_hint(inputs)
	if (locale === "ja") return ja_settings_shortcuts_hint(inputs)
	return en_settings_shortcuts_hint(inputs)
});
