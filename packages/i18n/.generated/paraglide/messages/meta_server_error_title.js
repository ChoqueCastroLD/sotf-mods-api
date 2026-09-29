/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Meta_Server_Error_TitleInputs */

const en_meta_server_error_title = /** @type {(inputs: Meta_Server_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server error`)
};

const es_meta_server_error_title = /** @type {(inputs: Meta_Server_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error del servidor`)
};

const de_meta_server_error_title = /** @type {(inputs: Meta_Server_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serverfehler`)
};

const fr_meta_server_error_title = /** @type {(inputs: Meta_Server_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erreur du serveur`)
};

const it_meta_server_error_title = /** @type {(inputs: Meta_Server_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Errore del server`)
};

const nl_meta_server_error_title = /** @type {(inputs: Meta_Server_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serverfout`)
};

const pl_meta_server_error_title = /** @type {(inputs: Meta_Server_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Błąd serwera`)
};

const pt_meta_server_error_title = /** @type {(inputs: Meta_Server_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erro no servidor`)
};

const ru_meta_server_error_title = /** @type {(inputs: Meta_Server_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ошибка сервера`)
};

const sv_meta_server_error_title = /** @type {(inputs: Meta_Server_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serverfel`)
};

const tr_meta_server_error_title = /** @type {(inputs: Meta_Server_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sunucu hatası`)
};

const zh_meta_server_error_title = /** @type {(inputs: Meta_Server_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`服务器错误`)
};

const ja_meta_server_error_title = /** @type {(inputs: Meta_Server_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サーバーエラー`)
};

/**
* | output |
* | --- |
* | "Server error" |
*
* @param {Meta_Server_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const meta_server_error_title = /** @type {((inputs?: Meta_Server_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Server_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_meta_server_error_title(inputs)
	if (locale === "de") return de_meta_server_error_title(inputs)
	if (locale === "fr") return fr_meta_server_error_title(inputs)
	if (locale === "it") return it_meta_server_error_title(inputs)
	if (locale === "nl") return nl_meta_server_error_title(inputs)
	if (locale === "pl") return pl_meta_server_error_title(inputs)
	if (locale === "pt") return pt_meta_server_error_title(inputs)
	if (locale === "ru") return ru_meta_server_error_title(inputs)
	if (locale === "sv") return sv_meta_server_error_title(inputs)
	if (locale === "tr") return tr_meta_server_error_title(inputs)
	if (locale === "zh") return zh_meta_server_error_title(inputs)
	if (locale === "ja") return ja_meta_server_error_title(inputs)
	return en_meta_server_error_title(inputs)
});
