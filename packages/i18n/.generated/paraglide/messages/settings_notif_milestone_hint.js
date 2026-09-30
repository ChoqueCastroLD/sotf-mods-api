/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Milestone_HintInputs */

const en_settings_notif_milestone_hint = /** @type {(inputs: Settings_Notif_Milestone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A mod of yours passed a download milestone.`)
};

const es_settings_notif_milestone_hint = /** @type {(inputs: Settings_Notif_Milestone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod tuyo ha superado un hito de descargas.`)
};

const de_settings_notif_milestone_hint = /** @type {(inputs: Settings_Notif_Milestone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Mod von dir hat einen Download-Meilenstein erreicht.`)
};

const fr_settings_notif_milestone_hint = /** @type {(inputs: Settings_Notif_Milestone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un de vos mods a franchi un palier de téléchargements.`)
};

const it_settings_notif_milestone_hint = /** @type {(inputs: Settings_Notif_Milestone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una tua mod ha superato un traguardo di download.`)
};

const nl_settings_notif_milestone_hint = /** @type {(inputs: Settings_Notif_Milestone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een mod van jou heeft een downloadmijlpaal bereikt.`)
};

const pl_settings_notif_milestone_hint = /** @type {(inputs: Settings_Notif_Milestone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój mod przekroczył próg pobrań.`)
};

const pt_settings_notif_milestone_hint = /** @type {(inputs: Settings_Notif_Milestone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um mod seu passou de um marco de downloads.`)
};

const ru_settings_notif_milestone_hint = /** @type {(inputs: Settings_Notif_Milestone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш мод преодолел рубеж загрузок.`)
};

const sv_settings_notif_milestone_hint = /** @type {(inputs: Settings_Notif_Milestone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En av dina moddar har passerat en nedladdningsmilstolpe.`)
};

const tr_settings_notif_milestone_hint = /** @type {(inputs: Settings_Notif_Milestone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarından biri bir indirme dönüm noktasını geçti.`)
};

const zh_settings_notif_milestone_hint = /** @type {(inputs: Settings_Notif_Milestone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的某个模组达到了下载里程碑。`)
};

const ja_settings_notif_milestone_hint = /** @type {(inputs: Settings_Notif_Milestone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのMODがダウンロード数の節目を超えました。`)
};

/**
* | output |
* | --- |
* | "A mod of yours passed a download milestone." |
*
* @param {Settings_Notif_Milestone_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_milestone_hint = /** @type {((inputs?: Settings_Notif_Milestone_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Milestone_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_milestone_hint(inputs)
	if (locale === "de") return de_settings_notif_milestone_hint(inputs)
	if (locale === "fr") return fr_settings_notif_milestone_hint(inputs)
	if (locale === "it") return it_settings_notif_milestone_hint(inputs)
	if (locale === "nl") return nl_settings_notif_milestone_hint(inputs)
	if (locale === "pl") return pl_settings_notif_milestone_hint(inputs)
	if (locale === "pt") return pt_settings_notif_milestone_hint(inputs)
	if (locale === "ru") return ru_settings_notif_milestone_hint(inputs)
	if (locale === "sv") return sv_settings_notif_milestone_hint(inputs)
	if (locale === "tr") return tr_settings_notif_milestone_hint(inputs)
	if (locale === "zh") return zh_settings_notif_milestone_hint(inputs)
	if (locale === "ja") return ja_settings_notif_milestone_hint(inputs)
	return en_settings_notif_milestone_hint(inputs)
});
