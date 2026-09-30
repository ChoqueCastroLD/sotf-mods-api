/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Target_Request_CommentInputs */

const en_ranger_target_request_comment = /** @type {(inputs: Ranger_Target_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Request comment`)
};

const es_ranger_target_request_comment = /** @type {(inputs: Ranger_Target_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentario de petición`)
};

const de_ranger_target_request_comment = /** @type {(inputs: Ranger_Target_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wunsch-Kommentar`)
};

const fr_ranger_target_request_comment = /** @type {(inputs: Ranger_Target_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaire de demande`)
};

const it_ranger_target_request_comment = /** @type {(inputs: Ranger_Target_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commento di richiesta`)
};

const nl_ranger_target_request_comment = /** @type {(inputs: Ranger_Target_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie op verzoek`)
};

const pl_ranger_target_request_comment = /** @type {(inputs: Ranger_Target_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarz do prośby`)
};

const pt_ranger_target_request_comment = /** @type {(inputs: Ranger_Target_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentário de pedido`)
};

const ru_ranger_target_request_comment = /** @type {(inputs: Ranger_Target_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарий к запросу`)
};

const sv_ranger_target_request_comment = /** @type {(inputs: Ranger_Target_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önskemålskommentar`)
};

const tr_ranger_target_request_comment = /** @type {(inputs: Ranger_Target_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek yorumu`)
};

const zh_ranger_target_request_comment = /** @type {(inputs: Ranger_Target_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求评论`)
};

const ja_ranger_target_request_comment = /** @type {(inputs: Ranger_Target_Request_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストのコメント`)
};

/**
* | output |
* | --- |
* | "Request comment" |
*
* @param {Ranger_Target_Request_CommentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_target_request_comment = /** @type {((inputs?: Ranger_Target_Request_CommentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Target_Request_CommentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_target_request_comment(inputs)
	if (locale === "de") return de_ranger_target_request_comment(inputs)
	if (locale === "fr") return fr_ranger_target_request_comment(inputs)
	if (locale === "it") return it_ranger_target_request_comment(inputs)
	if (locale === "nl") return nl_ranger_target_request_comment(inputs)
	if (locale === "pl") return pl_ranger_target_request_comment(inputs)
	if (locale === "pt") return pt_ranger_target_request_comment(inputs)
	if (locale === "ru") return ru_ranger_target_request_comment(inputs)
	if (locale === "sv") return sv_ranger_target_request_comment(inputs)
	if (locale === "tr") return tr_ranger_target_request_comment(inputs)
	if (locale === "zh") return zh_ranger_target_request_comment(inputs)
	if (locale === "ja") return ja_ranger_target_request_comment(inputs)
	return en_ranger_target_request_comment(inputs)
});
