/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Kit_AddedInputs */

const en_settings_notif_kit_added = /** @type {(inputs: Settings_Notif_Kit_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits with your mods`)
};

const es_settings_notif_kit_added = /** @type {(inputs: Settings_Notif_Kit_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits con tus mods`)
};

const de_settings_notif_kit_added = /** @type {(inputs: Settings_Notif_Kit_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits mit deinen Mods`)
};

const fr_settings_notif_kit_added = /** @type {(inputs: Settings_Notif_Kit_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits contenant vos mods`)
};

const it_settings_notif_kit_added = /** @type {(inputs: Settings_Notif_Kit_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit con i tuoi mod`)
};

const nl_settings_notif_kit_added = /** @type {(inputs: Settings_Notif_Kit_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits met jouw mods`)
};

const pl_settings_notif_kit_added = /** @type {(inputs: Settings_Notif_Kit_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zestawy z Twoimi modami`)
};

const pt_settings_notif_kit_added = /** @type {(inputs: Settings_Notif_Kit_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits com seus mods`)
};

const ru_settings_notif_kit_added = /** @type {(inputs: Settings_Notif_Kit_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Наборы с вашими модами`)
};

const sv_settings_notif_kit_added = /** @type {(inputs: Settings_Notif_Kit_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit med dina moddar`)
};

const tr_settings_notif_kit_added = /** @type {(inputs: Settings_Notif_Kit_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarını içeren kitler`)
};

const zh_settings_notif_kit_added = /** @type {(inputs: Settings_Notif_Kit_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`包含你模组的套件`)
};

const ja_settings_notif_kit_added = /** @type {(inputs: Settings_Notif_Kit_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのMODを含むキット`)
};

/**
* | output |
* | --- |
* | "Kits with your mods" |
*
* @param {Settings_Notif_Kit_AddedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_kit_added = /** @type {((inputs?: Settings_Notif_Kit_AddedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Kit_AddedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_kit_added(inputs)
	if (locale === "de") return de_settings_notif_kit_added(inputs)
	if (locale === "fr") return fr_settings_notif_kit_added(inputs)
	if (locale === "it") return it_settings_notif_kit_added(inputs)
	if (locale === "nl") return nl_settings_notif_kit_added(inputs)
	if (locale === "pl") return pl_settings_notif_kit_added(inputs)
	if (locale === "pt") return pt_settings_notif_kit_added(inputs)
	if (locale === "ru") return ru_settings_notif_kit_added(inputs)
	if (locale === "sv") return sv_settings_notif_kit_added(inputs)
	if (locale === "tr") return tr_settings_notif_kit_added(inputs)
	if (locale === "zh") return zh_settings_notif_kit_added(inputs)
	if (locale === "ja") return ja_settings_notif_kit_added(inputs)
	return en_settings_notif_kit_added(inputs)
});
