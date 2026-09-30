/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Request_CommentInputs */

const en_settings_notif_request_comment = /** @type {(inputs: Settings_Notif_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments on requests`)
};

const es_settings_notif_request_comment = /** @type {(inputs: Settings_Notif_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentarios en peticiones`)
};

const de_settings_notif_request_comment = /** @type {(inputs: Settings_Notif_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare zu Anfragen`)
};

const fr_settings_notif_request_comment = /** @type {(inputs: Settings_Notif_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaires sur les demandes`)
};

const it_settings_notif_request_comment = /** @type {(inputs: Settings_Notif_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commenti sulle richieste`)
};

const nl_settings_notif_request_comment = /** @type {(inputs: Settings_Notif_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties op verzoeken`)
};

const pl_settings_notif_request_comment = /** @type {(inputs: Settings_Notif_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarze do próśb`)
};

const pt_settings_notif_request_comment = /** @type {(inputs: Settings_Notif_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentários em pedidos`)
};

const ru_settings_notif_request_comment = /** @type {(inputs: Settings_Notif_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарии к запросам`)
};

const sv_settings_notif_request_comment = /** @type {(inputs: Settings_Notif_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentarer på förfrågningar`)
};

const tr_settings_notif_request_comment = /** @type {(inputs: Settings_Notif_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İsteklerdeki yorumlar`)
};

const zh_settings_notif_request_comment = /** @type {(inputs: Settings_Notif_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求的评论`)
};

const ja_settings_notif_request_comment = /** @type {(inputs: Settings_Notif_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストへのコメント`)
};

/**
* | output |
* | --- |
* | "Comments on requests" |
*
* @param {Settings_Notif_Request_CommentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_request_comment = /** @type {((inputs?: Settings_Notif_Request_CommentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Request_CommentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_request_comment(inputs)
	if (locale === "de") return de_settings_notif_request_comment(inputs)
	if (locale === "fr") return fr_settings_notif_request_comment(inputs)
	if (locale === "it") return it_settings_notif_request_comment(inputs)
	if (locale === "nl") return nl_settings_notif_request_comment(inputs)
	if (locale === "pl") return pl_settings_notif_request_comment(inputs)
	if (locale === "pt") return pt_settings_notif_request_comment(inputs)
	if (locale === "ru") return ru_settings_notif_request_comment(inputs)
	if (locale === "sv") return sv_settings_notif_request_comment(inputs)
	if (locale === "tr") return tr_settings_notif_request_comment(inputs)
	if (locale === "zh") return zh_settings_notif_request_comment(inputs)
	if (locale === "ja") return ja_settings_notif_request_comment(inputs)
	return en_settings_notif_request_comment(inputs)
});
