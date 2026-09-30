/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Pinned_SavedInputs */

const en_settings_pinned_saved = /** @type {(inputs: Settings_Pinned_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pinned mods saved`)
};

const es_settings_pinned_saved = /** @type {(inputs: Settings_Pinned_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods fijados guardados`)
};

const de_settings_pinned_saved = /** @type {(inputs: Settings_Pinned_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Angeheftete Mods gespeichert`)
};

const fr_settings_pinned_saved = /** @type {(inputs: Settings_Pinned_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods épinglés enregistrés`)
};

const it_settings_pinned_saved = /** @type {(inputs: Settings_Pinned_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod in evidenza salvate`)
};

const nl_settings_pinned_saved = /** @type {(inputs: Settings_Pinned_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vastgezette mods opgeslagen`)
};

const pl_settings_pinned_saved = /** @type {(inputs: Settings_Pinned_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano przypięte mody`)
};

const pt_settings_pinned_saved = /** @type {(inputs: Settings_Pinned_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods fixados salvos`)
};

const ru_settings_pinned_saved = /** @type {(inputs: Settings_Pinned_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закреплённые моды сохранены`)
};

const sv_settings_pinned_saved = /** @type {(inputs: Settings_Pinned_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fästa moddar sparade`)
};

const tr_settings_pinned_saved = /** @type {(inputs: Settings_Pinned_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sabitlenmiş modlar kaydedildi`)
};

const zh_settings_pinned_saved = /** @type {(inputs: Settings_Pinned_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`置顶模组已保存`)
};

const ja_settings_pinned_saved = /** @type {(inputs: Settings_Pinned_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`固定したMODを保存しました`)
};

/**
* | output |
* | --- |
* | "Pinned mods saved" |
*
* @param {Settings_Pinned_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_pinned_saved = /** @type {((inputs?: Settings_Pinned_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Pinned_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_pinned_saved(inputs)
	if (locale === "de") return de_settings_pinned_saved(inputs)
	if (locale === "fr") return fr_settings_pinned_saved(inputs)
	if (locale === "it") return it_settings_pinned_saved(inputs)
	if (locale === "nl") return nl_settings_pinned_saved(inputs)
	if (locale === "pl") return pl_settings_pinned_saved(inputs)
	if (locale === "pt") return pt_settings_pinned_saved(inputs)
	if (locale === "ru") return ru_settings_pinned_saved(inputs)
	if (locale === "sv") return sv_settings_pinned_saved(inputs)
	if (locale === "tr") return tr_settings_pinned_saved(inputs)
	if (locale === "zh") return zh_settings_pinned_saved(inputs)
	if (locale === "ja") return ja_settings_pinned_saved(inputs)
	return en_settings_pinned_saved(inputs)
});
