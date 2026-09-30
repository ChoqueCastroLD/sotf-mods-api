/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Compat_PromptsInputs */

const en_settings_compat_prompts = /** @type {(inputs: Settings_Compat_PromptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask «Did it work?» after downloads`)
};

const es_settings_compat_prompts = /** @type {(inputs: Settings_Compat_PromptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preguntar «¿Funcionó?» después de las descargas`)
};

const de_settings_compat_prompts = /** @type {(inputs: Settings_Compat_PromptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nach Downloads „Hat es funktioniert?“ fragen`)
};

const fr_settings_compat_prompts = /** @type {(inputs: Settings_Compat_PromptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demander « Ça a marché ? » après les téléchargements`)
};

const it_settings_compat_prompts = /** @type {(inputs: Settings_Compat_PromptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiedi «Ha funzionato?» dopo i download`)
};

const nl_settings_compat_prompts = /** @type {(inputs: Settings_Compat_PromptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na downloads ‘Werkte het?’ vragen`)
};

const pl_settings_compat_prompts = /** @type {(inputs: Settings_Compat_PromptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pytaj „Zadziałało?” po pobraniach`)
};

const pt_settings_compat_prompts = /** @type {(inputs: Settings_Compat_PromptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perguntar “Funcionou?” depois dos downloads`)
};

const ru_settings_compat_prompts = /** @type {(inputs: Settings_Compat_PromptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спрашивать «Заработало?» после загрузок`)
};

const sv_settings_compat_prompts = /** @type {(inputs: Settings_Compat_PromptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fråga ”Fungerade det?” efter nedladdningar`)
};

const tr_settings_compat_prompts = /** @type {(inputs: Settings_Compat_PromptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirmelerden sonra “Çalıştı mı?” diye sor`)
};

const zh_settings_compat_prompts = /** @type {(inputs: Settings_Compat_PromptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载后询问“能用吗？”`)
};

const ja_settings_compat_prompts = /** @type {(inputs: Settings_Compat_PromptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード後に「動きましたか？」と尋ねる`)
};

/**
* | output |
* | --- |
* | "Ask «Did it work?» after downloads" |
*
* @param {Settings_Compat_PromptsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_compat_prompts = /** @type {((inputs?: Settings_Compat_PromptsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Compat_PromptsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_compat_prompts(inputs)
	if (locale === "de") return de_settings_compat_prompts(inputs)
	if (locale === "fr") return fr_settings_compat_prompts(inputs)
	if (locale === "it") return it_settings_compat_prompts(inputs)
	if (locale === "nl") return nl_settings_compat_prompts(inputs)
	if (locale === "pl") return pl_settings_compat_prompts(inputs)
	if (locale === "pt") return pt_settings_compat_prompts(inputs)
	if (locale === "ru") return ru_settings_compat_prompts(inputs)
	if (locale === "sv") return sv_settings_compat_prompts(inputs)
	if (locale === "tr") return tr_settings_compat_prompts(inputs)
	if (locale === "zh") return zh_settings_compat_prompts(inputs)
	if (locale === "ja") return ja_settings_compat_prompts(inputs)
	return en_settings_compat_prompts(inputs)
});
