/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Group_My_ModsInputs */

const en_settings_notif_group_my_mods = /** @type {(inputs: Settings_Notif_Group_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your mods`)
};

const es_settings_notif_group_my_mods = /** @type {(inputs: Settings_Notif_Group_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus mods`)
};

const de_settings_notif_group_my_mods = /** @type {(inputs: Settings_Notif_Group_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Mods`)
};

const fr_settings_notif_group_my_mods = /** @type {(inputs: Settings_Notif_Group_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos mods`)
};

const it_settings_notif_group_my_mods = /** @type {(inputs: Settings_Notif_Group_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le tue mod`)
};

const nl_settings_notif_group_my_mods = /** @type {(inputs: Settings_Notif_Group_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je mods`)
};

const pl_settings_notif_group_my_mods = /** @type {(inputs: Settings_Notif_Group_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje mody`)
};

const pt_settings_notif_group_my_mods = /** @type {(inputs: Settings_Notif_Group_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus mods`)
};

const ru_settings_notif_group_my_mods = /** @type {(inputs: Settings_Notif_Group_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши моды`)
};

const sv_settings_notif_group_my_mods = /** @type {(inputs: Settings_Notif_Group_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina moddar`)
};

const tr_settings_notif_group_my_mods = /** @type {(inputs: Settings_Notif_Group_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modların`)
};

const zh_settings_notif_group_my_mods = /** @type {(inputs: Settings_Notif_Group_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组`)
};

const ja_settings_notif_group_my_mods = /** @type {(inputs: Settings_Notif_Group_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのMOD`)
};

/**
* | output |
* | --- |
* | "Your mods" |
*
* @param {Settings_Notif_Group_My_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_group_my_mods = /** @type {((inputs?: Settings_Notif_Group_My_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Group_My_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_group_my_mods(inputs)
	if (locale === "de") return de_settings_notif_group_my_mods(inputs)
	if (locale === "fr") return fr_settings_notif_group_my_mods(inputs)
	if (locale === "it") return it_settings_notif_group_my_mods(inputs)
	if (locale === "nl") return nl_settings_notif_group_my_mods(inputs)
	if (locale === "pl") return pl_settings_notif_group_my_mods(inputs)
	if (locale === "pt") return pt_settings_notif_group_my_mods(inputs)
	if (locale === "ru") return ru_settings_notif_group_my_mods(inputs)
	if (locale === "sv") return sv_settings_notif_group_my_mods(inputs)
	if (locale === "tr") return tr_settings_notif_group_my_mods(inputs)
	if (locale === "zh") return zh_settings_notif_group_my_mods(inputs)
	if (locale === "ja") return ja_settings_notif_group_my_mods(inputs)
	return en_settings_notif_group_my_mods(inputs)
});
