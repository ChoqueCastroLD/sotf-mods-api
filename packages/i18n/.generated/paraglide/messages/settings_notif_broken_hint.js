/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Broken_HintInputs */

const en_settings_notif_broken_hint = /** @type {(inputs: Settings_Notif_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field reports say a mod of yours broke on the current build.`)
};

const es_settings_notif_broken_hint = /** @type {(inputs: Settings_Notif_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los informes de campo dicen que un mod tuyo se ha roto en la build actual.`)
};

const de_settings_notif_broken_hint = /** @type {(inputs: Settings_Notif_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldberichte sagen, dass ein Mod von dir auf dem aktuellen Build kaputt ist.`)
};

const fr_settings_notif_broken_hint = /** @type {(inputs: Settings_Notif_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des rapports de terrain indiquent qu’un de vos mods est cassé sur la build actuelle.`)
};

const it_settings_notif_broken_hint = /** @type {(inputs: Settings_Notif_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I rapporti sul campo dicono che una tua mod non funziona sulla build attuale.`)
};

const nl_settings_notif_broken_hint = /** @type {(inputs: Settings_Notif_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldrapporten zeggen dat een mod van jou kapot is op de huidige build.`)
};

const pl_settings_notif_broken_hint = /** @type {(inputs: Settings_Notif_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raporty terenowe mówią, że twój mod nie działa na bieżącym buildzie.`)
};

const pt_settings_notif_broken_hint = /** @type {(inputs: Settings_Notif_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatórios de campo dizem que um mod seu quebrou na build atual.`)
};

const ru_settings_notif_broken_hint = /** @type {(inputs: Settings_Notif_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевые отчёты говорят, что ваш мод сломался на текущей сборке.`)
};

const sv_settings_notif_broken_hint = /** @type {(inputs: Settings_Notif_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältrapporter säger att en av dina moddar har gått sönder på det aktuella bygget.`)
};

const tr_settings_notif_broken_hint = /** @type {(inputs: Settings_Notif_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha raporları modlarından birinin güncel sürümde bozulduğunu söylüyor.`)
};

const zh_settings_notif_broken_hint = /** @type {(inputs: Settings_Notif_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实地报告显示你的某个模组在当前版本上失效。`)
};

const ja_settings_notif_broken_hint = /** @type {(inputs: Settings_Notif_Broken_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現地レポートによると、あなたのMODが現在のビルドで動作しなくなりました。`)
};

/**
* | output |
* | --- |
* | "Field reports say a mod of yours broke on the current build." |
*
* @param {Settings_Notif_Broken_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_broken_hint = /** @type {((inputs?: Settings_Notif_Broken_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Broken_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_broken_hint(inputs)
	if (locale === "de") return de_settings_notif_broken_hint(inputs)
	if (locale === "fr") return fr_settings_notif_broken_hint(inputs)
	if (locale === "it") return it_settings_notif_broken_hint(inputs)
	if (locale === "nl") return nl_settings_notif_broken_hint(inputs)
	if (locale === "pl") return pl_settings_notif_broken_hint(inputs)
	if (locale === "pt") return pt_settings_notif_broken_hint(inputs)
	if (locale === "ru") return ru_settings_notif_broken_hint(inputs)
	if (locale === "sv") return sv_settings_notif_broken_hint(inputs)
	if (locale === "tr") return tr_settings_notif_broken_hint(inputs)
	if (locale === "zh") return zh_settings_notif_broken_hint(inputs)
	if (locale === "ja") return ja_settings_notif_broken_hint(inputs)
	return en_settings_notif_broken_hint(inputs)
});
