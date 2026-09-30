/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Request_Comment_HintInputs */

const en_settings_notif_request_comment_hint = /** @type {(inputs: Settings_Notif_Request_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Someone commented on a request you made or adopted.`)
};

const es_settings_notif_request_comment_hint = /** @type {(inputs: Settings_Notif_Request_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguien comentó una petición que hiciste o adoptaste.`)
};

const de_settings_notif_request_comment_hint = /** @type {(inputs: Settings_Notif_Request_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jemand hat eine Anfrage kommentiert, die du gestellt oder übernommen hast.`)
};

const fr_settings_notif_request_comment_hint = /** @type {(inputs: Settings_Notif_Request_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelqu’un a commenté une demande que vous avez créée ou adoptée.`)
};

const it_settings_notif_request_comment_hint = /** @type {(inputs: Settings_Notif_Request_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcuno ha commentato una richiesta che hai creato o adottato.`)
};

const nl_settings_notif_request_comment_hint = /** @type {(inputs: Settings_Notif_Request_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iemand heeft gereageerd op een verzoek dat je deed of adopteerde.`)
};

const pl_settings_notif_request_comment_hint = /** @type {(inputs: Settings_Notif_Request_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ktoś skomentował prośbę, którą złożyłeś(-aś) lub którą przejąłeś(-ęłaś).`)
};

const pt_settings_notif_request_comment_hint = /** @type {(inputs: Settings_Notif_Request_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguém comentou um pedido que fizeste ou adotaste.`)
};

const ru_settings_notif_request_comment_hint = /** @type {(inputs: Settings_Notif_Request_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кто-то прокомментировал запрос, который вы создали или взяли в работу.`)
};

const sv_settings_notif_request_comment_hint = /** @type {(inputs: Settings_Notif_Request_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Någon kommenterade en förfrågan du gjort eller tagit på dig.`)
};

const tr_settings_notif_request_comment_hint = /** @type {(inputs: Settings_Notif_Request_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Birisi oluşturduğun veya üstlendiğin bir isteğe yorum yaptı.`)
};

const zh_settings_notif_request_comment_hint = /** @type {(inputs: Settings_Notif_Request_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有人评论了你发起或认领的请求。`)
};

const ja_settings_notif_request_comment_hint = /** @type {(inputs: Settings_Notif_Request_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたが投稿または引き受けたリクエストにコメントがありました。`)
};

/**
* | output |
* | --- |
* | "Someone commented on a request you made or adopted." |
*
* @param {Settings_Notif_Request_Comment_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_request_comment_hint = /** @type {((inputs?: Settings_Notif_Request_Comment_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Request_Comment_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_request_comment_hint(inputs)
	if (locale === "de") return de_settings_notif_request_comment_hint(inputs)
	if (locale === "fr") return fr_settings_notif_request_comment_hint(inputs)
	if (locale === "it") return it_settings_notif_request_comment_hint(inputs)
	if (locale === "nl") return nl_settings_notif_request_comment_hint(inputs)
	if (locale === "pl") return pl_settings_notif_request_comment_hint(inputs)
	if (locale === "pt") return pt_settings_notif_request_comment_hint(inputs)
	if (locale === "ru") return ru_settings_notif_request_comment_hint(inputs)
	if (locale === "sv") return sv_settings_notif_request_comment_hint(inputs)
	if (locale === "tr") return tr_settings_notif_request_comment_hint(inputs)
	if (locale === "zh") return zh_settings_notif_request_comment_hint(inputs)
	if (locale === "ja") return ja_settings_notif_request_comment_hint(inputs)
	return en_settings_notif_request_comment_hint(inputs)
});
