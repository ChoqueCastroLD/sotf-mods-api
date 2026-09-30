/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Appearance_TextInputs */

const en_settings_appearance_text = /** @type {(inputs: Settings_Appearance_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How SOTF Mods looks on this and your other devices.`)
};

const es_settings_appearance_text = /** @type {(inputs: Settings_Appearance_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo se ve SOTF Mods en este y en tus otros dispositivos.`)
};

const de_settings_appearance_text = /** @type {(inputs: Settings_Appearance_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wie SOTF Mods auf diesem und deinen anderen Geräten aussieht.`)
};

const fr_settings_appearance_text = /** @type {(inputs: Settings_Appearance_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’apparence de SOTF Mods sur cet appareil et vos autres appareils.`)
};

const it_settings_appearance_text = /** @type {(inputs: Settings_Appearance_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come appare SOTF Mods su questo e sugli altri tuoi dispositivi.`)
};

const nl_settings_appearance_text = /** @type {(inputs: Settings_Appearance_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoe SOTF Mods eruitziet op dit en je andere apparaten.`)
};

const pl_settings_appearance_text = /** @type {(inputs: Settings_Appearance_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak SOTF Mods wygląda na tym i innych twoich urządzeniach.`)
};

const pt_settings_appearance_text = /** @type {(inputs: Settings_Appearance_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como o SOTF Mods aparece neste e nos seus outros dispositivos.`)
};

const ru_settings_appearance_text = /** @type {(inputs: Settings_Appearance_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как SOTF Mods выглядит на этом и других ваших устройствах.`)
};

const sv_settings_appearance_text = /** @type {(inputs: Settings_Appearance_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hur SOTF Mods ser ut på den här och dina andra enheter.`)
};

const tr_settings_appearance_text = /** @type {(inputs: Settings_Appearance_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’un bu ve diğer cihazlarında nasıl göründüğü.`)
};

const zh_settings_appearance_text = /** @type {(inputs: Settings_Appearance_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods 在此设备和你其他设备上的外观。`)
};

const ja_settings_appearance_text = /** @type {(inputs: Settings_Appearance_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このデバイスと他のデバイスでの SOTF Mods の見た目。`)
};

/**
* | output |
* | --- |
* | "How SOTF Mods looks on this and your other devices." |
*
* @param {Settings_Appearance_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_appearance_text = /** @type {((inputs?: Settings_Appearance_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Appearance_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_appearance_text(inputs)
	if (locale === "de") return de_settings_appearance_text(inputs)
	if (locale === "fr") return fr_settings_appearance_text(inputs)
	if (locale === "it") return it_settings_appearance_text(inputs)
	if (locale === "nl") return nl_settings_appearance_text(inputs)
	if (locale === "pl") return pl_settings_appearance_text(inputs)
	if (locale === "pt") return pt_settings_appearance_text(inputs)
	if (locale === "ru") return ru_settings_appearance_text(inputs)
	if (locale === "sv") return sv_settings_appearance_text(inputs)
	if (locale === "tr") return tr_settings_appearance_text(inputs)
	if (locale === "zh") return zh_settings_appearance_text(inputs)
	if (locale === "ja") return ja_settings_appearance_text(inputs)
	return en_settings_appearance_text(inputs)
});
