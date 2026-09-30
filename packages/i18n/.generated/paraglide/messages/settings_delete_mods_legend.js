/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_Mods_LegendInputs */

const en_settings_delete_mods_legend = /** @type {(inputs: Settings_Delete_Mods_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What happens to your mods`)
};

const es_settings_delete_mods_legend = /** @type {(inputs: Settings_Delete_Mods_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qué pasa con tus mods`)
};

const de_settings_delete_mods_legend = /** @type {(inputs: Settings_Delete_Mods_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was mit deinen Mods passiert`)
};

const fr_settings_delete_mods_legend = /** @type {(inputs: Settings_Delete_Mods_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce qu’il advient de vos mods`)
};

const it_settings_delete_mods_legend = /** @type {(inputs: Settings_Delete_Mods_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa succede alle tue mod`)
};

const nl_settings_delete_mods_legend = /** @type {(inputs: Settings_Delete_Mods_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat er met je mods gebeurt`)
};

const pl_settings_delete_mods_legend = /** @type {(inputs: Settings_Delete_Mods_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co stanie się z twoimi modami`)
};

const pt_settings_delete_mods_legend = /** @type {(inputs: Settings_Delete_Mods_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que acontece com seus mods`)
};

const ru_settings_delete_mods_legend = /** @type {(inputs: Settings_Delete_Mods_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что будет с вашими модами`)
};

const sv_settings_delete_mods_legend = /** @type {(inputs: Settings_Delete_Mods_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad som händer med dina moddar`)
};

const tr_settings_delete_mods_legend = /** @type {(inputs: Settings_Delete_Mods_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarına ne olacak`)
};

const zh_settings_delete_mods_legend = /** @type {(inputs: Settings_Delete_Mods_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组将如何处理`)
};

const ja_settings_delete_mods_legend = /** @type {(inputs: Settings_Delete_Mods_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのMODの扱い`)
};

/**
* | output |
* | --- |
* | "What happens to your mods" |
*
* @param {Settings_Delete_Mods_LegendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_mods_legend = /** @type {((inputs?: Settings_Delete_Mods_LegendInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Mods_LegendInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_mods_legend(inputs)
	if (locale === "de") return de_settings_delete_mods_legend(inputs)
	if (locale === "fr") return fr_settings_delete_mods_legend(inputs)
	if (locale === "it") return it_settings_delete_mods_legend(inputs)
	if (locale === "nl") return nl_settings_delete_mods_legend(inputs)
	if (locale === "pl") return pl_settings_delete_mods_legend(inputs)
	if (locale === "pt") return pt_settings_delete_mods_legend(inputs)
	if (locale === "ru") return ru_settings_delete_mods_legend(inputs)
	if (locale === "sv") return sv_settings_delete_mods_legend(inputs)
	if (locale === "tr") return tr_settings_delete_mods_legend(inputs)
	if (locale === "zh") return zh_settings_delete_mods_legend(inputs)
	if (locale === "ja") return ja_settings_delete_mods_legend(inputs)
	return en_settings_delete_mods_legend(inputs)
});
