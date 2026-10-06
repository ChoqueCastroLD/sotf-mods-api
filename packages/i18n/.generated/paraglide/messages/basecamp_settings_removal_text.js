/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_Removal_TextInputs */

const en_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tell moderators why. They answer in your notifications.`)
};

const es_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuéntales a los moderadores por qué. Te responderán en tus notificaciones.`)
};

const de_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erkläre den Moderatoren den Grund. Sie antworten in deinen Benachrichtigungen.`)
};

const fr_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expliquez la raison aux modérateurs. Ils répondent dans vos notifications.`)
};

const it_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiega il motivo ai moderatori. Ti risponderanno nelle tue notifiche.`)
};

const nl_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertel de moderators waarom. Ze antwoorden in je meldingen.`)
};

const pl_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Napisz moderatorom dlaczego. Odpowiedzą w twoich powiadomieniach.`)
};

const pt_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conte aos moderadores o motivo. Eles respondem nas suas notificações.`)
};

const ru_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Объясните модераторам причину. Они ответят в ваших уведомлениях.`)
};

const sv_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Berätta för moderatorerna varför. De svarar i dina aviseringar.`)
};

const tr_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatörlere nedenini anlat. Bildirimlerin üzerinden yanıt verirler.`)
};

const zh_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`告诉版主原因。他们会在你的通知中回复。`)
};

const ja_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由をモデレーターに伝えてください。返答は通知で届きます。`)
};

/**
* | output |
* | --- |
* | "Tell moderators why. They answer in your notifications." |
*
* @param {Basecamp_Settings_Removal_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_removal_text = /** @type {((inputs?: Basecamp_Settings_Removal_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Removal_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_removal_text(inputs)
	if (locale === "de") return de_basecamp_settings_removal_text(inputs)
	if (locale === "fr") return fr_basecamp_settings_removal_text(inputs)
	if (locale === "it") return it_basecamp_settings_removal_text(inputs)
	if (locale === "nl") return nl_basecamp_settings_removal_text(inputs)
	if (locale === "pl") return pl_basecamp_settings_removal_text(inputs)
	if (locale === "pt") return pt_basecamp_settings_removal_text(inputs)
	if (locale === "ru") return ru_basecamp_settings_removal_text(inputs)
	if (locale === "sv") return sv_basecamp_settings_removal_text(inputs)
	if (locale === "tr") return tr_basecamp_settings_removal_text(inputs)
	if (locale === "zh") return zh_basecamp_settings_removal_text(inputs)
	if (locale === "ja") return ja_basecamp_settings_removal_text(inputs)
	return en_basecamp_settings_removal_text(inputs)
});
