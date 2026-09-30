/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Group_ConversationsInputs */

const en_settings_notif_group_conversations = /** @type {(inputs: Settings_Notif_Group_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversations`)
};

const es_settings_notif_group_conversations = /** @type {(inputs: Settings_Notif_Group_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversaciones`)
};

const de_settings_notif_group_conversations = /** @type {(inputs: Settings_Notif_Group_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unterhaltungen`)
};

const fr_settings_notif_group_conversations = /** @type {(inputs: Settings_Notif_Group_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversations`)
};

const it_settings_notif_group_conversations = /** @type {(inputs: Settings_Notif_Group_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversazioni`)
};

const nl_settings_notif_group_conversations = /** @type {(inputs: Settings_Notif_Group_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gesprekken`)
};

const pl_settings_notif_group_conversations = /** @type {(inputs: Settings_Notif_Group_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozmowy`)
};

const pt_settings_notif_group_conversations = /** @type {(inputs: Settings_Notif_Group_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversas`)
};

const ru_settings_notif_group_conversations = /** @type {(inputs: Settings_Notif_Group_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обсуждения`)
};

const sv_settings_notif_group_conversations = /** @type {(inputs: Settings_Notif_Group_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Samtal`)
};

const tr_settings_notif_group_conversations = /** @type {(inputs: Settings_Notif_Group_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sohbetler`)
};

const zh_settings_notif_group_conversations = /** @type {(inputs: Settings_Notif_Group_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对话`)
};

const ja_settings_notif_group_conversations = /** @type {(inputs: Settings_Notif_Group_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`会話`)
};

/**
* | output |
* | --- |
* | "Conversations" |
*
* @param {Settings_Notif_Group_ConversationsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_group_conversations = /** @type {((inputs?: Settings_Notif_Group_ConversationsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Group_ConversationsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_group_conversations(inputs)
	if (locale === "de") return de_settings_notif_group_conversations(inputs)
	if (locale === "fr") return fr_settings_notif_group_conversations(inputs)
	if (locale === "it") return it_settings_notif_group_conversations(inputs)
	if (locale === "nl") return nl_settings_notif_group_conversations(inputs)
	if (locale === "pl") return pl_settings_notif_group_conversations(inputs)
	if (locale === "pt") return pt_settings_notif_group_conversations(inputs)
	if (locale === "ru") return ru_settings_notif_group_conversations(inputs)
	if (locale === "sv") return sv_settings_notif_group_conversations(inputs)
	if (locale === "tr") return tr_settings_notif_group_conversations(inputs)
	if (locale === "zh") return zh_settings_notif_group_conversations(inputs)
	if (locale === "ja") return ja_settings_notif_group_conversations(inputs)
	return en_settings_notif_group_conversations(inputs)
});
