/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Nsfw_SettingsInputs */

const en_mod_nsfw_settings = /** @type {(inputs: Mod_Nsfw_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Always show 18+ content (settings)`)
};

const es_mod_nsfw_settings = /** @type {(inputs: Mod_Nsfw_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar siempre contenido +18 (ajustes)`)
};

const de_mod_nsfw_settings = /** @type {(inputs: Mod_Nsfw_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhalte ab 18 immer anzeigen (Einstellungen)`)
};

const fr_mod_nsfw_settings = /** @type {(inputs: Mod_Nsfw_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toujours afficher le contenu 18+ (paramètres)`)
};

const it_mod_nsfw_settings = /** @type {(inputs: Mod_Nsfw_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra sempre i contenuti 18+ (impostazioni)`)
};

const nl_mod_nsfw_settings = /** @type {(inputs: Mod_Nsfw_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+-inhoud altijd tonen (instellingen)`)
};

const pl_mod_nsfw_settings = /** @type {(inputs: Mod_Nsfw_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zawsze pokazuj treści 18+ (ustawienia)`)
};

const pt_mod_nsfw_settings = /** @type {(inputs: Mod_Nsfw_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sempre mostrar conteúdo 18+ (configurações)`)
};

const ru_mod_nsfw_settings = /** @type {(inputs: Mod_Nsfw_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всегда показывать контент 18+ (настройки)`)
};

const sv_mod_nsfw_settings = /** @type {(inputs: Mod_Nsfw_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa alltid 18+-innehåll (inställningar)`)
};

const tr_mod_nsfw_settings = /** @type {(inputs: Mod_Nsfw_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+ içeriği her zaman göster (ayarlar)`)
};

const zh_mod_nsfw_settings = /** @type {(inputs: Mod_Nsfw_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`始终显示 18+ 内容（设置）`)
};

const ja_mod_nsfw_settings = /** @type {(inputs: Mod_Nsfw_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18 歳以上向けを常に表示（設定）`)
};

/**
* | output |
* | --- |
* | "Always show 18+ content (settings)" |
*
* @param {Mod_Nsfw_SettingsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_nsfw_settings = /** @type {((inputs?: Mod_Nsfw_SettingsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Nsfw_SettingsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_nsfw_settings(inputs)
	if (locale === "de") return de_mod_nsfw_settings(inputs)
	if (locale === "fr") return fr_mod_nsfw_settings(inputs)
	if (locale === "it") return it_mod_nsfw_settings(inputs)
	if (locale === "nl") return nl_mod_nsfw_settings(inputs)
	if (locale === "pl") return pl_mod_nsfw_settings(inputs)
	if (locale === "pt") return pt_mod_nsfw_settings(inputs)
	if (locale === "ru") return ru_mod_nsfw_settings(inputs)
	if (locale === "sv") return sv_mod_nsfw_settings(inputs)
	if (locale === "tr") return tr_mod_nsfw_settings(inputs)
	if (locale === "zh") return zh_mod_nsfw_settings(inputs)
	if (locale === "ja") return ja_mod_nsfw_settings(inputs)
	return en_mod_nsfw_settings(inputs)
});
