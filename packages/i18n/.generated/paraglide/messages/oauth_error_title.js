/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Error_TitleInputs */

const en_oauth_error_title = /** @type {(inputs: Oauth_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord didn’t connect`)
};

const es_oauth_error_title = /** @type {(inputs: Oauth_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord no se ha conectado`)
};

const de_oauth_error_title = /** @type {(inputs: Oauth_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord konnte nicht verbunden werden`)
};

const fr_oauth_error_title = /** @type {(inputs: Oauth_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord n’a pas pu se connecter`)
};

const it_oauth_error_title = /** @type {(inputs: Oauth_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord non si è connesso`)
};

const nl_oauth_error_title = /** @type {(inputs: Oauth_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord is niet verbonden`)
};

const pl_oauth_error_title = /** @type {(inputs: Oauth_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się połączyć z Discordem`)
};

const pt_oauth_error_title = /** @type {(inputs: Oauth_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O Discord não foi conectado`)
};

const ru_oauth_error_title = /** @type {(inputs: Oauth_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось подключить Discord`)
};

const sv_oauth_error_title = /** @type {(inputs: Oauth_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord kopplades inte`)
};

const tr_oauth_error_title = /** @type {(inputs: Oauth_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord bağlanamadı`)
};

const zh_oauth_error_title = /** @type {(inputs: Oauth_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord 未能连接`)
};

const ja_oauth_error_title = /** @type {(inputs: Oauth_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord に接続できませんでした`)
};

/**
* | output |
* | --- |
* | "Discord didn’t connect" |
*
* @param {Oauth_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_error_title = /** @type {((inputs?: Oauth_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_error_title(inputs)
	if (locale === "de") return de_oauth_error_title(inputs)
	if (locale === "fr") return fr_oauth_error_title(inputs)
	if (locale === "it") return it_oauth_error_title(inputs)
	if (locale === "nl") return nl_oauth_error_title(inputs)
	if (locale === "pl") return pl_oauth_error_title(inputs)
	if (locale === "pt") return pt_oauth_error_title(inputs)
	if (locale === "ru") return ru_oauth_error_title(inputs)
	if (locale === "sv") return sv_oauth_error_title(inputs)
	if (locale === "tr") return tr_oauth_error_title(inputs)
	if (locale === "zh") return zh_oauth_error_title(inputs)
	if (locale === "ja") return ja_oauth_error_title(inputs)
	return en_oauth_error_title(inputs)
});
