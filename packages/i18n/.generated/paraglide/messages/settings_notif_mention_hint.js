/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Mention_HintInputs */

const en_settings_notif_mention_hint = /** @type {(inputs: Settings_Notif_Mention_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Someone @mentioned you.`)
};

const es_settings_notif_mention_hint = /** @type {(inputs: Settings_Notif_Mention_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguien te ha @mencionado.`)
};

const de_settings_notif_mention_hint = /** @type {(inputs: Settings_Notif_Mention_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jemand hat dich @erwähnt.`)
};

const fr_settings_notif_mention_hint = /** @type {(inputs: Settings_Notif_Mention_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelqu’un vous a @mentionné.`)
};

const it_settings_notif_mention_hint = /** @type {(inputs: Settings_Notif_Mention_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcuno ti ha @menzionato.`)
};

const nl_settings_notif_mention_hint = /** @type {(inputs: Settings_Notif_Mention_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iemand heeft je @vermeld.`)
};

const pl_settings_notif_mention_hint = /** @type {(inputs: Settings_Notif_Mention_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ktoś cię @wspomniał.`)
};

const pt_settings_notif_mention_hint = /** @type {(inputs: Settings_Notif_Mention_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguém @mencionou você.`)
};

const ru_settings_notif_mention_hint = /** @type {(inputs: Settings_Notif_Mention_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кто-то @упомянул вас.`)
};

const sv_settings_notif_mention_hint = /** @type {(inputs: Settings_Notif_Mention_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Någon har @nämnt dig.`)
};

const tr_settings_notif_mention_hint = /** @type {(inputs: Settings_Notif_Mention_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biri senden @bahsetti.`)
};

const zh_settings_notif_mention_hint = /** @type {(inputs: Settings_Notif_Mention_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有人 @ 了你。`)
};

const ja_settings_notif_mention_hint = /** @type {(inputs: Settings_Notif_Mention_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`誰かがあなたを @メンションしました。`)
};

/**
* | output |
* | --- |
* | "Someone @mentioned you." |
*
* @param {Settings_Notif_Mention_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_mention_hint = /** @type {((inputs?: Settings_Notif_Mention_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Mention_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_mention_hint(inputs)
	if (locale === "de") return de_settings_notif_mention_hint(inputs)
	if (locale === "fr") return fr_settings_notif_mention_hint(inputs)
	if (locale === "it") return it_settings_notif_mention_hint(inputs)
	if (locale === "nl") return nl_settings_notif_mention_hint(inputs)
	if (locale === "pl") return pl_settings_notif_mention_hint(inputs)
	if (locale === "pt") return pt_settings_notif_mention_hint(inputs)
	if (locale === "ru") return ru_settings_notif_mention_hint(inputs)
	if (locale === "sv") return sv_settings_notif_mention_hint(inputs)
	if (locale === "tr") return tr_settings_notif_mention_hint(inputs)
	if (locale === "zh") return zh_settings_notif_mention_hint(inputs)
	if (locale === "ja") return ja_settings_notif_mention_hint(inputs)
	return en_settings_notif_mention_hint(inputs)
});
