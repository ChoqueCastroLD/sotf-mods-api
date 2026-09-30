/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Removal_NoteInputs */

const en_settings_notif_removal_note = /** @type {(inputs: Settings_Notif_Removal_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If a mod of yours is removed you are always told by email.`)
};

const es_settings_notif_removal_note = /** @type {(inputs: Settings_Notif_Removal_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si se retira un mod tuyo, siempre te avisamos por correo.`)
};

const de_settings_notif_removal_note = /** @type {(inputs: Settings_Notif_Removal_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird ein Mod von dir entfernt, bekommst du immer eine E-Mail.`)
};

const fr_settings_notif_removal_note = /** @type {(inputs: Settings_Notif_Removal_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si l’un de vos mods est supprimé, vous êtes toujours prévenu par e-mail.`)
};

const it_settings_notif_removal_note = /** @type {(inputs: Settings_Notif_Removal_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se una tua mod viene rimossa, ti avvisiamo sempre via email.`)
};

const nl_settings_notif_removal_note = /** @type {(inputs: Settings_Notif_Removal_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als een mod van jou wordt verwijderd, krijg je altijd een e-mail.`)
};

const pl_settings_notif_removal_note = /** @type {(inputs: Settings_Notif_Removal_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeśli twój mod zostanie usunięty, zawsze powiadomimy cię e-mailem.`)
};

const pt_settings_notif_removal_note = /** @type {(inputs: Settings_Notif_Removal_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se um mod seu for removido, você sempre recebe um e-mail.`)
};

const ru_settings_notif_removal_note = /** @type {(inputs: Settings_Notif_Removal_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Если ваш мод удалят, мы всегда сообщим об этом по почте.`)
};

const sv_settings_notif_removal_note = /** @type {(inputs: Settings_Notif_Removal_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Om en av dina moddar tas bort får du alltid ett mejl.`)
};

const tr_settings_notif_removal_note = /** @type {(inputs: Settings_Notif_Removal_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarından biri kaldırılırsa sana her zaman e-postayla haber veririz.`)
};

const zh_settings_notif_removal_note = /** @type {(inputs: Settings_Notif_Removal_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如果你的模组被删除，我们总会通过邮件通知你。`)
};

const ja_settings_notif_removal_note = /** @type {(inputs: Settings_Notif_Removal_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのMODが削除された場合は、必ずメールでお知らせします。`)
};

/**
* | output |
* | --- |
* | "If a mod of yours is removed you are always told by email." |
*
* @param {Settings_Notif_Removal_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_removal_note = /** @type {((inputs?: Settings_Notif_Removal_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Removal_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_removal_note(inputs)
	if (locale === "de") return de_settings_notif_removal_note(inputs)
	if (locale === "fr") return fr_settings_notif_removal_note(inputs)
	if (locale === "it") return it_settings_notif_removal_note(inputs)
	if (locale === "nl") return nl_settings_notif_removal_note(inputs)
	if (locale === "pl") return pl_settings_notif_removal_note(inputs)
	if (locale === "pt") return pt_settings_notif_removal_note(inputs)
	if (locale === "ru") return ru_settings_notif_removal_note(inputs)
	if (locale === "sv") return sv_settings_notif_removal_note(inputs)
	if (locale === "tr") return tr_settings_notif_removal_note(inputs)
	if (locale === "zh") return zh_settings_notif_removal_note(inputs)
	if (locale === "ja") return ja_settings_notif_removal_note(inputs)
	return en_settings_notif_removal_note(inputs)
});
