/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Action_SettingsInputs */

const en_basecamp_mods_action_settings = /** @type {(inputs: Basecamp_Mods_Action_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status and removal`)
};

const es_basecamp_mods_action_settings = /** @type {(inputs: Basecamp_Mods_Action_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado y retirada`)
};

const de_basecamp_mods_action_settings = /** @type {(inputs: Basecamp_Mods_Action_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status und Entfernung`)
};

const fr_basecamp_mods_action_settings = /** @type {(inputs: Basecamp_Mods_Action_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`État et retrait`)
};

const it_basecamp_mods_action_settings = /** @type {(inputs: Basecamp_Mods_Action_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stato e rimozione`)
};

const nl_basecamp_mods_action_settings = /** @type {(inputs: Basecamp_Mods_Action_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status en verwijdering`)
};

const pl_basecamp_mods_action_settings = /** @type {(inputs: Basecamp_Mods_Action_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stan i usunięcie`)
};

const pt_basecamp_mods_action_settings = /** @type {(inputs: Basecamp_Mods_Action_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado e remoção`)
};

const ru_basecamp_mods_action_settings = /** @type {(inputs: Basecamp_Mods_Action_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статус и удаление`)
};

const sv_basecamp_mods_action_settings = /** @type {(inputs: Basecamp_Mods_Action_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status och borttagning`)
};

const tr_basecamp_mods_action_settings = /** @type {(inputs: Basecamp_Mods_Action_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durum ve kaldırma`)
};

const zh_basecamp_mods_action_settings = /** @type {(inputs: Basecamp_Mods_Action_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状态与下架`)
};

const ja_basecamp_mods_action_settings = /** @type {(inputs: Basecamp_Mods_Action_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状態と削除`)
};

/**
* | output |
* | --- |
* | "Status and removal" |
*
* @param {Basecamp_Mods_Action_SettingsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_action_settings = /** @type {((inputs?: Basecamp_Mods_Action_SettingsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Action_SettingsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_action_settings(inputs)
	if (locale === "de") return de_basecamp_mods_action_settings(inputs)
	if (locale === "fr") return fr_basecamp_mods_action_settings(inputs)
	if (locale === "it") return it_basecamp_mods_action_settings(inputs)
	if (locale === "nl") return nl_basecamp_mods_action_settings(inputs)
	if (locale === "pl") return pl_basecamp_mods_action_settings(inputs)
	if (locale === "pt") return pt_basecamp_mods_action_settings(inputs)
	if (locale === "ru") return ru_basecamp_mods_action_settings(inputs)
	if (locale === "sv") return sv_basecamp_mods_action_settings(inputs)
	if (locale === "tr") return tr_basecamp_mods_action_settings(inputs)
	if (locale === "zh") return zh_basecamp_mods_action_settings(inputs)
	if (locale === "ja") return ja_basecamp_mods_action_settings(inputs)
	return en_basecamp_mods_action_settings(inputs)
});
