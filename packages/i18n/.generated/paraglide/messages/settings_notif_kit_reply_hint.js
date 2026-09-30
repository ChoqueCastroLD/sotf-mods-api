/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Kit_Reply_HintInputs */

const en_settings_notif_kit_reply_hint = /** @type {(inputs: Settings_Notif_Kit_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Someone replies to your comment on a kit.`)
};

const es_settings_notif_kit_reply_hint = /** @type {(inputs: Settings_Notif_Kit_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguien responde a tu comentario en un kit.`)
};

const de_settings_notif_kit_reply_hint = /** @type {(inputs: Settings_Notif_Kit_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jemand antwortet auf deinen Kommentar bei einem Kit.`)
};

const fr_settings_notif_kit_reply_hint = /** @type {(inputs: Settings_Notif_Kit_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelqu’un répond à votre commentaire sur un kit.`)
};

const it_settings_notif_kit_reply_hint = /** @type {(inputs: Settings_Notif_Kit_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcuno risponde al tuo commento su un kit.`)
};

const nl_settings_notif_kit_reply_hint = /** @type {(inputs: Settings_Notif_Kit_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iemand reageert op je reactie bij een kit.`)
};

const pl_settings_notif_kit_reply_hint = /** @type {(inputs: Settings_Notif_Kit_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ktoś odpowiada na Twój komentarz w zestawie.`)
};

const pt_settings_notif_kit_reply_hint = /** @type {(inputs: Settings_Notif_Kit_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguém responde ao seu comentário em um kit.`)
};

const ru_settings_notif_kit_reply_hint = /** @type {(inputs: Settings_Notif_Kit_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кто-то отвечает на ваш комментарий к набору.`)
};

const sv_settings_notif_kit_reply_hint = /** @type {(inputs: Settings_Notif_Kit_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Någon svarar på din kommentar på ett kit.`)
};

const tr_settings_notif_kit_reply_hint = /** @type {(inputs: Settings_Notif_Kit_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir kitteki yorumuna biri yanıt verdi.`)
};

const zh_settings_notif_kit_reply_hint = /** @type {(inputs: Settings_Notif_Kit_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有人回复了你在套件下的评论。`)
};

const ja_settings_notif_kit_reply_hint = /** @type {(inputs: Settings_Notif_Kit_Reply_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットでのあなたのコメントに返信があったとき。`)
};

/**
* | output |
* | --- |
* | "Someone replies to your comment on a kit." |
*
* @param {Settings_Notif_Kit_Reply_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_kit_reply_hint = /** @type {((inputs?: Settings_Notif_Kit_Reply_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Kit_Reply_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_kit_reply_hint(inputs)
	if (locale === "de") return de_settings_notif_kit_reply_hint(inputs)
	if (locale === "fr") return fr_settings_notif_kit_reply_hint(inputs)
	if (locale === "it") return it_settings_notif_kit_reply_hint(inputs)
	if (locale === "nl") return nl_settings_notif_kit_reply_hint(inputs)
	if (locale === "pl") return pl_settings_notif_kit_reply_hint(inputs)
	if (locale === "pt") return pt_settings_notif_kit_reply_hint(inputs)
	if (locale === "ru") return ru_settings_notif_kit_reply_hint(inputs)
	if (locale === "sv") return sv_settings_notif_kit_reply_hint(inputs)
	if (locale === "tr") return tr_settings_notif_kit_reply_hint(inputs)
	if (locale === "zh") return zh_settings_notif_kit_reply_hint(inputs)
	if (locale === "ja") return ja_settings_notif_kit_reply_hint(inputs)
	return en_settings_notif_kit_reply_hint(inputs)
});
