/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Error_FailedInputs */

const en_oauth_error_failed = /** @type {(inputs: Oauth_Error_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something went wrong talking to Discord. Try again.`)
};

const es_oauth_error_failed = /** @type {(inputs: Oauth_Error_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo salió mal al comunicarse con Discord. Inténtalo de nuevo.`)
};

const de_oauth_error_failed = /** @type {(inputs: Oauth_Error_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bei der Kommunikation mit Discord ist etwas schiefgelaufen. Versuche es erneut.`)
};

const fr_oauth_error_failed = /** @type {(inputs: Oauth_Error_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un problème est survenu avec Discord. Réessayez.`)
};

const it_oauth_error_failed = /** @type {(inputs: Oauth_Error_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcosa è andato storto nella comunicazione con Discord. Riprova.`)
};

const nl_oauth_error_failed = /** @type {(inputs: Oauth_Error_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er ging iets mis bij het communiceren met Discord. Probeer het opnieuw.`)
};

const pl_oauth_error_failed = /** @type {(inputs: Oauth_Error_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coś poszło nie tak podczas komunikacji z Discordem. Spróbuj ponownie.`)
};

const pt_oauth_error_failed = /** @type {(inputs: Oauth_Error_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo deu errado ao falar com o Discord. Tente novamente.`)
};

const ru_oauth_error_failed = /** @type {(inputs: Oauth_Error_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось связаться с Discord. Попробуйте ещё раз.`)
};

const sv_oauth_error_failed = /** @type {(inputs: Oauth_Error_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Något gick fel vid kontakten med Discord. Försök igen.`)
};

const tr_oauth_error_failed = /** @type {(inputs: Oauth_Error_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord ile iletişimde bir sorun oluştu. Tekrar dene.`)
};

const zh_oauth_error_failed = /** @type {(inputs: Oauth_Error_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`与 Discord 通信时出错，请重试。`)
};

const ja_oauth_error_failed = /** @type {(inputs: Oauth_Error_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord との通信で問題が発生しました。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Something went wrong talking to Discord. Try again." |
*
* @param {Oauth_Error_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_error_failed = /** @type {((inputs?: Oauth_Error_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Error_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_error_failed(inputs)
	if (locale === "de") return de_oauth_error_failed(inputs)
	if (locale === "fr") return fr_oauth_error_failed(inputs)
	if (locale === "it") return it_oauth_error_failed(inputs)
	if (locale === "nl") return nl_oauth_error_failed(inputs)
	if (locale === "pl") return pl_oauth_error_failed(inputs)
	if (locale === "pt") return pt_oauth_error_failed(inputs)
	if (locale === "ru") return ru_oauth_error_failed(inputs)
	if (locale === "sv") return sv_oauth_error_failed(inputs)
	if (locale === "tr") return tr_oauth_error_failed(inputs)
	if (locale === "zh") return zh_oauth_error_failed(inputs)
	if (locale === "ja") return ja_oauth_error_failed(inputs)
	return en_oauth_error_failed(inputs)
});
