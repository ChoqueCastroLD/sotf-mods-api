/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_CommentInputs */

const en_settings_notif_comment = /** @type {(inputs: Settings_Notif_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments on your mods`)
};

const es_settings_notif_comment = /** @type {(inputs: Settings_Notif_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentarios en tus mods`)
};

const de_settings_notif_comment = /** @type {(inputs: Settings_Notif_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare zu deinen Mods`)
};

const fr_settings_notif_comment = /** @type {(inputs: Settings_Notif_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaires sur vos mods`)
};

const it_settings_notif_comment = /** @type {(inputs: Settings_Notif_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commenti sulle tue mod`)
};

const nl_settings_notif_comment = /** @type {(inputs: Settings_Notif_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties op je mods`)
};

const pl_settings_notif_comment = /** @type {(inputs: Settings_Notif_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarze do twoich modów`)
};

const pt_settings_notif_comment = /** @type {(inputs: Settings_Notif_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentários nos seus mods`)
};

const ru_settings_notif_comment = /** @type {(inputs: Settings_Notif_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарии к вашим модам`)
};

const sv_settings_notif_comment = /** @type {(inputs: Settings_Notif_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentarer på dina moddar`)
};

const tr_settings_notif_comment = /** @type {(inputs: Settings_Notif_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarına yorumlar`)
};

const zh_settings_notif_comment = /** @type {(inputs: Settings_Notif_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组收到的评论`)
};

const ja_settings_notif_comment = /** @type {(inputs: Settings_Notif_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのMODへのコメント`)
};

/**
* | output |
* | --- |
* | "Comments on your mods" |
*
* @param {Settings_Notif_CommentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_comment = /** @type {((inputs?: Settings_Notif_CommentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_CommentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_comment(inputs)
	if (locale === "de") return de_settings_notif_comment(inputs)
	if (locale === "fr") return fr_settings_notif_comment(inputs)
	if (locale === "it") return it_settings_notif_comment(inputs)
	if (locale === "nl") return nl_settings_notif_comment(inputs)
	if (locale === "pl") return pl_settings_notif_comment(inputs)
	if (locale === "pt") return pt_settings_notif_comment(inputs)
	if (locale === "ru") return ru_settings_notif_comment(inputs)
	if (locale === "sv") return sv_settings_notif_comment(inputs)
	if (locale === "tr") return tr_settings_notif_comment(inputs)
	if (locale === "zh") return zh_settings_notif_comment(inputs)
	if (locale === "ja") return ja_settings_notif_comment(inputs)
	return en_settings_notif_comment(inputs)
});
