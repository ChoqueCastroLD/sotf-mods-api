/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Error_Handle_TakenInputs */

const en_auth_error_handle_taken = /** @type {(inputs: Auth_Error_Handle_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That handle is taken. Try another one.`)
};

const es_auth_error_handle_taken = /** @type {(inputs: Auth_Error_Handle_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ese nombre de usuario ya está cogido. Prueba con otro.`)
};

const de_auth_error_handle_taken = /** @type {(inputs: Auth_Error_Handle_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Handle ist schon vergeben. Probier einen anderen.`)
};

const fr_auth_error_handle_taken = /** @type {(inputs: Auth_Error_Handle_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cet identifiant est déjà pris. Essayez-en un autre.`)
};

const it_auth_error_handle_taken = /** @type {(inputs: Auth_Error_Handle_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo handle è già in uso. Provane un altro.`)
};

const nl_auth_error_handle_taken = /** @type {(inputs: Auth_Error_Handle_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze handle is al bezet. Probeer een andere.`)
};

const pl_auth_error_handle_taken = /** @type {(inputs: Auth_Error_Handle_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta nazwa użytkownika jest zajęta. Spróbuj innej.`)
};

const pt_auth_error_handle_taken = /** @type {(inputs: Auth_Error_Handle_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esse nome de usuário já está em uso. Tente outro.`)
};

const ru_auth_error_handle_taken = /** @type {(inputs: Auth_Error_Handle_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это имя пользователя уже занято. Попробуйте другое.`)
};

const sv_auth_error_handle_taken = /** @type {(inputs: Auth_Error_Handle_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det användarnamnet är upptaget. Prova ett annat.`)
};

const tr_auth_error_handle_taken = /** @type {(inputs: Auth_Error_Handle_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kullanıcı adı alınmış. Başka bir tane dene.`)
};

const zh_auth_error_handle_taken = /** @type {(inputs: Auth_Error_Handle_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该用户名已被占用，请换一个试试。`)
};

const ja_auth_error_handle_taken = /** @type {(inputs: Auth_Error_Handle_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このハンドルはすでに使われています。別のものをお試しください。`)
};

/**
* | output |
* | --- |
* | "That handle is taken. Try another one." |
*
* @param {Auth_Error_Handle_TakenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_error_handle_taken = /** @type {((inputs?: Auth_Error_Handle_TakenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Handle_TakenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_error_handle_taken(inputs)
	if (locale === "de") return de_auth_error_handle_taken(inputs)
	if (locale === "fr") return fr_auth_error_handle_taken(inputs)
	if (locale === "it") return it_auth_error_handle_taken(inputs)
	if (locale === "nl") return nl_auth_error_handle_taken(inputs)
	if (locale === "pl") return pl_auth_error_handle_taken(inputs)
	if (locale === "pt") return pt_auth_error_handle_taken(inputs)
	if (locale === "ru") return ru_auth_error_handle_taken(inputs)
	if (locale === "sv") return sv_auth_error_handle_taken(inputs)
	if (locale === "tr") return tr_auth_error_handle_taken(inputs)
	if (locale === "zh") return zh_auth_error_handle_taken(inputs)
	if (locale === "ja") return ja_auth_error_handle_taken(inputs)
	return en_auth_error_handle_taken(inputs)
});
