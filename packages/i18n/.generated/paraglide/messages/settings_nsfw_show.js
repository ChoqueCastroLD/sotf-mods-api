/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Nsfw_ShowInputs */

const en_settings_nsfw_show = /** @type {(inputs: Settings_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show mature content`)
};

const es_settings_nsfw_show = /** @type {(inputs: Settings_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar contenido adulto`)
};

const de_settings_nsfw_show = /** @type {(inputs: Settings_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhalte für Erwachsene zeigen`)
};

const fr_settings_nsfw_show = /** @type {(inputs: Settings_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher le contenu pour adultes`)
};

const it_settings_nsfw_show = /** @type {(inputs: Settings_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra i contenuti per adulti`)
};

const nl_settings_nsfw_show = /** @type {(inputs: Settings_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhoud voor volwassenen tonen`)
};

const pl_settings_nsfw_show = /** @type {(inputs: Settings_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokazuj treści dla dorosłych`)
};

const pt_settings_nsfw_show = /** @type {(inputs: Settings_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar conteúdo adulto`)
};

const ru_settings_nsfw_show = /** @type {(inputs: Settings_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показывать контент для взрослых`)
};

const sv_settings_nsfw_show = /** @type {(inputs: Settings_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa vuxeninnehåll`)
};

const tr_settings_nsfw_show = /** @type {(inputs: Settings_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yetişkin içeriği göster`)
};

const zh_settings_nsfw_show = /** @type {(inputs: Settings_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示成人内容`)
};

const ja_settings_nsfw_show = /** @type {(inputs: Settings_Nsfw_ShowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成人向けコンテンツを表示`)
};

/**
* | output |
* | --- |
* | "Show mature content" |
*
* @param {Settings_Nsfw_ShowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_nsfw_show = /** @type {((inputs?: Settings_Nsfw_ShowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nsfw_ShowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_nsfw_show(inputs)
	if (locale === "de") return de_settings_nsfw_show(inputs)
	if (locale === "fr") return fr_settings_nsfw_show(inputs)
	if (locale === "it") return it_settings_nsfw_show(inputs)
	if (locale === "nl") return nl_settings_nsfw_show(inputs)
	if (locale === "pl") return pl_settings_nsfw_show(inputs)
	if (locale === "pt") return pt_settings_nsfw_show(inputs)
	if (locale === "ru") return ru_settings_nsfw_show(inputs)
	if (locale === "sv") return sv_settings_nsfw_show(inputs)
	if (locale === "tr") return tr_settings_nsfw_show(inputs)
	if (locale === "zh") return zh_settings_nsfw_show(inputs)
	if (locale === "ja") return ja_settings_nsfw_show(inputs)
	return en_settings_nsfw_show(inputs)
});
