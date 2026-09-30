/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Sign_Out_FailedInputs */

const en_console_sign_out_failed = /** @type {(inputs: Console_Sign_Out_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We couldn’t sign you out. Try again.`)
};

const es_console_sign_out_failed = /** @type {(inputs: Console_Sign_Out_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No pudimos cerrar tu sesión. Inténtalo de nuevo.`)
};

const de_console_sign_out_failed = /** @type {(inputs: Console_Sign_Out_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wir konnten dich nicht abmelden. Versuch es noch einmal.`)
};

const fr_console_sign_out_failed = /** @type {(inputs: Console_Sign_Out_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de vous déconnecter. Réessayez.`)
};

const it_console_sign_out_failed = /** @type {(inputs: Console_Sign_Out_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non siamo riusciti a disconnetterti. Riprova.`)
};

const nl_console_sign_out_failed = /** @type {(inputs: Console_Sign_Out_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We konden je niet uitloggen. Probeer het opnieuw.`)
};

const pl_console_sign_out_failed = /** @type {(inputs: Console_Sign_Out_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się cię wylogować. Spróbuj ponownie.`)
};

const pt_console_sign_out_failed = /** @type {(inputs: Console_Sign_Out_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não conseguimos desconectar você. Tente de novo.`)
};

const ru_console_sign_out_failed = /** @type {(inputs: Console_Sign_Out_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось выйти из аккаунта. Попробуйте ещё раз.`)
};

const sv_console_sign_out_failed = /** @type {(inputs: Console_Sign_Out_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi kunde inte logga ut dig. Försök igen.`)
};

const tr_console_sign_out_failed = /** @type {(inputs: Console_Sign_Out_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çıkış yapamadık. Tekrar dene.`)
};

const zh_console_sign_out_failed = /** @type {(inputs: Console_Sign_Out_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法退出登录，请重试。`)
};

const ja_console_sign_out_failed = /** @type {(inputs: Console_Sign_Out_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログアウトできませんでした。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "We couldn’t sign you out. Try again." |
*
* @param {Console_Sign_Out_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_sign_out_failed = /** @type {((inputs?: Console_Sign_Out_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Sign_Out_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_sign_out_failed(inputs)
	if (locale === "de") return de_console_sign_out_failed(inputs)
	if (locale === "fr") return fr_console_sign_out_failed(inputs)
	if (locale === "it") return it_console_sign_out_failed(inputs)
	if (locale === "nl") return nl_console_sign_out_failed(inputs)
	if (locale === "pl") return pl_console_sign_out_failed(inputs)
	if (locale === "pt") return pt_console_sign_out_failed(inputs)
	if (locale === "ru") return ru_console_sign_out_failed(inputs)
	if (locale === "sv") return sv_console_sign_out_failed(inputs)
	if (locale === "tr") return tr_console_sign_out_failed(inputs)
	if (locale === "zh") return zh_console_sign_out_failed(inputs)
	if (locale === "ja") return ja_console_sign_out_failed(inputs)
	return en_console_sign_out_failed(inputs)
});
