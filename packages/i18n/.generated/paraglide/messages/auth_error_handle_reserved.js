/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Error_Handle_ReservedInputs */

const en_auth_error_handle_reserved = /** @type {(inputs: Auth_Error_Handle_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That handle is reserved. Pick another one.`)
};

const es_auth_error_handle_reserved = /** @type {(inputs: Auth_Error_Handle_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ese nombre de usuario está reservado. Elige otro.`)
};

const de_auth_error_handle_reserved = /** @type {(inputs: Auth_Error_Handle_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Handle ist reserviert. Wähl einen anderen.`)
};

const fr_auth_error_handle_reserved = /** @type {(inputs: Auth_Error_Handle_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cet identifiant est réservé. Choisissez-en un autre.`)
};

const it_auth_error_handle_reserved = /** @type {(inputs: Auth_Error_Handle_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo handle è riservato. Scegline un altro.`)
};

const nl_auth_error_handle_reserved = /** @type {(inputs: Auth_Error_Handle_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze handle is gereserveerd. Kies een andere.`)
};

const pl_auth_error_handle_reserved = /** @type {(inputs: Auth_Error_Handle_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta nazwa użytkownika jest zarezerwowana. Wybierz inną.`)
};

const pt_auth_error_handle_reserved = /** @type {(inputs: Auth_Error_Handle_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esse nome de usuário é reservado. Escolha outro.`)
};

const ru_auth_error_handle_reserved = /** @type {(inputs: Auth_Error_Handle_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это имя пользователя зарезервировано. Выберите другое.`)
};

const sv_auth_error_handle_reserved = /** @type {(inputs: Auth_Error_Handle_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det användarnamnet är reserverat. Välj ett annat.`)
};

const tr_auth_error_handle_reserved = /** @type {(inputs: Auth_Error_Handle_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kullanıcı adı ayrılmış. Başka bir tane seç.`)
};

const zh_auth_error_handle_reserved = /** @type {(inputs: Auth_Error_Handle_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该用户名已被保留，请换一个。`)
};

const ja_auth_error_handle_reserved = /** @type {(inputs: Auth_Error_Handle_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このハンドルは予約されています。別のものを選んでください。`)
};

/**
* | output |
* | --- |
* | "That handle is reserved. Pick another one." |
*
* @param {Auth_Error_Handle_ReservedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_error_handle_reserved = /** @type {((inputs?: Auth_Error_Handle_ReservedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Handle_ReservedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_error_handle_reserved(inputs)
	if (locale === "de") return de_auth_error_handle_reserved(inputs)
	if (locale === "fr") return fr_auth_error_handle_reserved(inputs)
	if (locale === "it") return it_auth_error_handle_reserved(inputs)
	if (locale === "nl") return nl_auth_error_handle_reserved(inputs)
	if (locale === "pl") return pl_auth_error_handle_reserved(inputs)
	if (locale === "pt") return pt_auth_error_handle_reserved(inputs)
	if (locale === "ru") return ru_auth_error_handle_reserved(inputs)
	if (locale === "sv") return sv_auth_error_handle_reserved(inputs)
	if (locale === "tr") return tr_auth_error_handle_reserved(inputs)
	if (locale === "zh") return zh_auth_error_handle_reserved(inputs)
	if (locale === "ja") return ja_auth_error_handle_reserved(inputs)
	return en_auth_error_handle_reserved(inputs)
});
