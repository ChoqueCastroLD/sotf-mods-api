/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Reply_HintInputs */

const en_settings_notif_reply_hint = /** @type {(inputs: Settings_Notif_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Someone replied to your comment.`)
};

const es_settings_notif_reply_hint = /** @type {(inputs: Settings_Notif_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguien ha respondido a tu comentario.`)
};

const de_settings_notif_reply_hint = /** @type {(inputs: Settings_Notif_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jemand hat auf deinen Kommentar geantwortet.`)
};

const fr_settings_notif_reply_hint = /** @type {(inputs: Settings_Notif_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelqu’un a répondu à votre commentaire.`)
};

const it_settings_notif_reply_hint = /** @type {(inputs: Settings_Notif_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcuno ha risposto al tuo commento.`)
};

const nl_settings_notif_reply_hint = /** @type {(inputs: Settings_Notif_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iemand heeft op je reactie geantwoord.`)
};

const pl_settings_notif_reply_hint = /** @type {(inputs: Settings_Notif_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ktoś odpowiedział na twój komentarz.`)
};

const pt_settings_notif_reply_hint = /** @type {(inputs: Settings_Notif_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguém respondeu ao seu comentário.`)
};

const ru_settings_notif_reply_hint = /** @type {(inputs: Settings_Notif_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кто-то ответил на ваш комментарий.`)
};

const sv_settings_notif_reply_hint = /** @type {(inputs: Settings_Notif_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Någon har svarat på din kommentar.`)
};

const tr_settings_notif_reply_hint = /** @type {(inputs: Settings_Notif_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biri yorumunu yanıtladı.`)
};

const zh_settings_notif_reply_hint = /** @type {(inputs: Settings_Notif_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有人回复了你的评论。`)
};

const ja_settings_notif_reply_hint = /** @type {(inputs: Settings_Notif_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのコメントに返信がありました。`)
};

/**
* | output |
* | --- |
* | "Someone replied to your comment." |
*
* @param {Settings_Notif_Reply_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_reply_hint = /** @type {((inputs?: Settings_Notif_Reply_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Reply_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_reply_hint(inputs)
	if (locale === "de") return de_settings_notif_reply_hint(inputs)
	if (locale === "fr") return fr_settings_notif_reply_hint(inputs)
	if (locale === "it") return it_settings_notif_reply_hint(inputs)
	if (locale === "nl") return nl_settings_notif_reply_hint(inputs)
	if (locale === "pl") return pl_settings_notif_reply_hint(inputs)
	if (locale === "pt") return pt_settings_notif_reply_hint(inputs)
	if (locale === "ru") return ru_settings_notif_reply_hint(inputs)
	if (locale === "sv") return sv_settings_notif_reply_hint(inputs)
	if (locale === "tr") return tr_settings_notif_reply_hint(inputs)
	if (locale === "zh") return zh_settings_notif_reply_hint(inputs)
	if (locale === "ja") return ja_settings_notif_reply_hint(inputs)
	return en_settings_notif_reply_hint(inputs)
});
