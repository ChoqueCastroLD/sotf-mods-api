/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Creator_Status_TitleInputs */

const en_settings_creator_status_title = /** @type {(inputs: Settings_Creator_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator status`)
};

const es_settings_creator_status_title = /** @type {(inputs: Settings_Creator_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado de creador`)
};

const de_settings_creator_status_title = /** @type {(inputs: Settings_Creator_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator-Status`)
};

const fr_settings_creator_status_title = /** @type {(inputs: Settings_Creator_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statut de créateur`)
};

const it_settings_creator_status_title = /** @type {(inputs: Settings_Creator_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stato di creatore`)
};

const nl_settings_creator_status_title = /** @type {(inputs: Settings_Creator_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Makersstatus`)
};

const pl_settings_creator_status_title = /** @type {(inputs: Settings_Creator_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status twórcy`)
};

const pt_settings_creator_status_title = /** @type {(inputs: Settings_Creator_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status de criador`)
};

const ru_settings_creator_status_title = /** @type {(inputs: Settings_Creator_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статус автора`)
};

const sv_settings_creator_status_title = /** @type {(inputs: Settings_Creator_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skaparstatus`)
};

const tr_settings_creator_status_title = /** @type {(inputs: Settings_Creator_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı durumu`)
};

const zh_settings_creator_status_title = /** @type {(inputs: Settings_Creator_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者状态`)
};

const ja_settings_creator_status_title = /** @type {(inputs: Settings_Creator_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターの状態`)
};

/**
* | output |
* | --- |
* | "Creator status" |
*
* @param {Settings_Creator_Status_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_creator_status_title = /** @type {((inputs?: Settings_Creator_Status_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Creator_Status_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_creator_status_title(inputs)
	if (locale === "de") return de_settings_creator_status_title(inputs)
	if (locale === "fr") return fr_settings_creator_status_title(inputs)
	if (locale === "it") return it_settings_creator_status_title(inputs)
	if (locale === "nl") return nl_settings_creator_status_title(inputs)
	if (locale === "pl") return pl_settings_creator_status_title(inputs)
	if (locale === "pt") return pt_settings_creator_status_title(inputs)
	if (locale === "ru") return ru_settings_creator_status_title(inputs)
	if (locale === "sv") return sv_settings_creator_status_title(inputs)
	if (locale === "tr") return tr_settings_creator_status_title(inputs)
	if (locale === "zh") return zh_settings_creator_status_title(inputs)
	if (locale === "ja") return ja_settings_creator_status_title(inputs)
	return en_settings_creator_status_title(inputs)
});
