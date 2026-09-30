/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Nsfw_HideInputs */

const en_settings_nsfw_hide = /** @type {(inputs: Settings_Nsfw_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide mature content`)
};

const es_settings_nsfw_hide = /** @type {(inputs: Settings_Nsfw_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar contenido adulto`)
};

const de_settings_nsfw_hide = /** @type {(inputs: Settings_Nsfw_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhalte für Erwachsene ausblenden`)
};

const fr_settings_nsfw_hide = /** @type {(inputs: Settings_Nsfw_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masquer le contenu pour adultes`)
};

const it_settings_nsfw_hide = /** @type {(inputs: Settings_Nsfw_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascondi i contenuti per adulti`)
};

const nl_settings_nsfw_hide = /** @type {(inputs: Settings_Nsfw_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhoud voor volwassenen verbergen`)
};

const pl_settings_nsfw_hide = /** @type {(inputs: Settings_Nsfw_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryj treści dla dorosłych`)
};

const pt_settings_nsfw_hide = /** @type {(inputs: Settings_Nsfw_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar conteúdo adulto`)
};

const ru_settings_nsfw_hide = /** @type {(inputs: Settings_Nsfw_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыть контент для взрослых`)
};

const sv_settings_nsfw_hide = /** @type {(inputs: Settings_Nsfw_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dölj vuxeninnehåll`)
};

const tr_settings_nsfw_hide = /** @type {(inputs: Settings_Nsfw_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yetişkin içeriği gizle`)
};

const zh_settings_nsfw_hide = /** @type {(inputs: Settings_Nsfw_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏成人内容`)
};

const ja_settings_nsfw_hide = /** @type {(inputs: Settings_Nsfw_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成人向けコンテンツを非表示`)
};

/**
* | output |
* | --- |
* | "Hide mature content" |
*
* @param {Settings_Nsfw_HideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_nsfw_hide = /** @type {((inputs?: Settings_Nsfw_HideInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nsfw_HideInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_nsfw_hide(inputs)
	if (locale === "de") return de_settings_nsfw_hide(inputs)
	if (locale === "fr") return fr_settings_nsfw_hide(inputs)
	if (locale === "it") return it_settings_nsfw_hide(inputs)
	if (locale === "nl") return nl_settings_nsfw_hide(inputs)
	if (locale === "pl") return pl_settings_nsfw_hide(inputs)
	if (locale === "pt") return pt_settings_nsfw_hide(inputs)
	if (locale === "ru") return ru_settings_nsfw_hide(inputs)
	if (locale === "sv") return sv_settings_nsfw_hide(inputs)
	if (locale === "tr") return tr_settings_nsfw_hide(inputs)
	if (locale === "zh") return zh_settings_nsfw_hide(inputs)
	if (locale === "ja") return ja_settings_nsfw_hide(inputs)
	return en_settings_nsfw_hide(inputs)
});
