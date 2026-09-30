/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Kit_CommentInputs */

const en_settings_notif_kit_comment = /** @type {(inputs: Settings_Notif_Kit_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment on my kit`)
};

const es_settings_notif_kit_comment = /** @type {(inputs: Settings_Notif_Kit_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentario en mi kit`)
};

const de_settings_notif_kit_comment = /** @type {(inputs: Settings_Notif_Kit_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar zu meinem Kit`)
};

const fr_settings_notif_kit_comment = /** @type {(inputs: Settings_Notif_Kit_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaire sur mon kit`)
};

const it_settings_notif_kit_comment = /** @type {(inputs: Settings_Notif_Kit_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commento sul mio kit`)
};

const nl_settings_notif_kit_comment = /** @type {(inputs: Settings_Notif_Kit_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie op mijn kit`)
};

const pl_settings_notif_kit_comment = /** @type {(inputs: Settings_Notif_Kit_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarz do mojego zestawu`)
};

const pt_settings_notif_kit_comment = /** @type {(inputs: Settings_Notif_Kit_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentário no meu kit`)
};

const ru_settings_notif_kit_comment = /** @type {(inputs: Settings_Notif_Kit_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарий к моему набору`)
};

const sv_settings_notif_kit_comment = /** @type {(inputs: Settings_Notif_Kit_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar på mitt kit`)
};

const tr_settings_notif_kit_comment = /** @type {(inputs: Settings_Notif_Kit_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitime yorum`)
};

const zh_settings_notif_kit_comment = /** @type {(inputs: Settings_Notif_Kit_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我的套件有新评论`)
};

const ja_settings_notif_kit_comment = /** @type {(inputs: Settings_Notif_Kit_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分のキットへのコメント`)
};

/**
* | output |
* | --- |
* | "Comment on my kit" |
*
* @param {Settings_Notif_Kit_CommentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_kit_comment = /** @type {((inputs?: Settings_Notif_Kit_CommentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Kit_CommentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_kit_comment(inputs)
	if (locale === "de") return de_settings_notif_kit_comment(inputs)
	if (locale === "fr") return fr_settings_notif_kit_comment(inputs)
	if (locale === "it") return it_settings_notif_kit_comment(inputs)
	if (locale === "nl") return nl_settings_notif_kit_comment(inputs)
	if (locale === "pl") return pl_settings_notif_kit_comment(inputs)
	if (locale === "pt") return pt_settings_notif_kit_comment(inputs)
	if (locale === "ru") return ru_settings_notif_kit_comment(inputs)
	if (locale === "sv") return sv_settings_notif_kit_comment(inputs)
	if (locale === "tr") return tr_settings_notif_kit_comment(inputs)
	if (locale === "zh") return zh_settings_notif_kit_comment(inputs)
	if (locale === "ja") return ja_settings_notif_kit_comment(inputs)
	return en_settings_notif_kit_comment(inputs)
});
