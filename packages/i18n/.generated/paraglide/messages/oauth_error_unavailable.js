/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Error_UnavailableInputs */

const en_oauth_error_unavailable = /** @type {(inputs: Oauth_Error_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord sign-in isn’t available right now.`)
};

const es_oauth_error_unavailable = /** @type {(inputs: Oauth_Error_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El inicio de sesión con Discord no está disponible ahora.`)
};

const de_oauth_error_unavailable = /** @type {(inputs: Oauth_Error_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Anmeldung mit Discord ist derzeit nicht verfügbar.`)
};

const fr_oauth_error_unavailable = /** @type {(inputs: Oauth_Error_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La connexion avec Discord n’est pas disponible pour le moment.`)
};

const it_oauth_error_unavailable = /** @type {(inputs: Oauth_Error_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’accesso con Discord non è al momento disponibile.`)
};

const nl_oauth_error_unavailable = /** @type {(inputs: Oauth_Error_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inloggen met Discord is momenteel niet beschikbaar.`)
};

const pl_oauth_error_unavailable = /** @type {(inputs: Oauth_Error_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logowanie przez Discord jest teraz niedostępne.`)
};

const pt_oauth_error_unavailable = /** @type {(inputs: Oauth_Error_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O login com o Discord não está disponível no momento.`)
};

const ru_oauth_error_unavailable = /** @type {(inputs: Oauth_Error_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вход через Discord сейчас недоступен.`)
};

const sv_oauth_error_unavailable = /** @type {(inputs: Oauth_Error_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inloggning med Discord är inte tillgänglig just nu.`)
};

const tr_oauth_error_unavailable = /** @type {(inputs: Oauth_Error_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord ile giriş şu anda kullanılamıyor.`)
};

const zh_oauth_error_unavailable = /** @type {(inputs: Oauth_Error_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord 登录目前不可用。`)
};

const ja_oauth_error_unavailable = /** @type {(inputs: Oauth_Error_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在 Discord でのサインインはご利用いただけません。`)
};

/**
* | output |
* | --- |
* | "Discord sign-in isn’t available right now." |
*
* @param {Oauth_Error_UnavailableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_error_unavailable = /** @type {((inputs?: Oauth_Error_UnavailableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Error_UnavailableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_error_unavailable(inputs)
	if (locale === "de") return de_oauth_error_unavailable(inputs)
	if (locale === "fr") return fr_oauth_error_unavailable(inputs)
	if (locale === "it") return it_oauth_error_unavailable(inputs)
	if (locale === "nl") return nl_oauth_error_unavailable(inputs)
	if (locale === "pl") return pl_oauth_error_unavailable(inputs)
	if (locale === "pt") return pt_oauth_error_unavailable(inputs)
	if (locale === "ru") return ru_oauth_error_unavailable(inputs)
	if (locale === "sv") return sv_oauth_error_unavailable(inputs)
	if (locale === "tr") return tr_oauth_error_unavailable(inputs)
	if (locale === "zh") return zh_oauth_error_unavailable(inputs)
	if (locale === "ja") return ja_oauth_error_unavailable(inputs)
	return en_oauth_error_unavailable(inputs)
});
