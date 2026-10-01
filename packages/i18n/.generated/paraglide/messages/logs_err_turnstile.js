/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Err_TurnstileInputs */

const en_logs_err_turnstile = /** @type {(inputs: Logs_Err_TurnstileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The human check failed. Try again.`)
};

const es_logs_err_turnstile = /** @type {(inputs: Logs_Err_TurnstileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falló la comprobación humana. Inténtalo de nuevo.`)
};

const de_logs_err_turnstile = /** @type {(inputs: Logs_Err_TurnstileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Menschenprüfung ist fehlgeschlagen. Versuche es erneut.`)
};

const fr_logs_err_turnstile = /** @type {(inputs: Logs_Err_TurnstileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La vérification humaine a échoué. Réessayez.`)
};

const it_logs_err_turnstile = /** @type {(inputs: Logs_Err_TurnstileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il controllo umano non è riuscito. Riprova.`)
};

const nl_logs_err_turnstile = /** @type {(inputs: Logs_Err_TurnstileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De menselijke controle is mislukt. Probeer het opnieuw.`)
};

const pl_logs_err_turnstile = /** @type {(inputs: Logs_Err_TurnstileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weryfikacja, że jesteś człowiekiem, nie powiodła się. Spróbuj ponownie.`)
};

const pt_logs_err_turnstile = /** @type {(inputs: Logs_Err_TurnstileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A verificação humana falhou. Tente de novo.`)
};

const ru_logs_err_turnstile = /** @type {(inputs: Logs_Err_TurnstileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверка на человека не пройдена. Повторите попытку.`)
};

const sv_logs_err_turnstile = /** @type {(inputs: Logs_Err_TurnstileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollen att du är människa misslyckades. Försök igen.`)
};

const tr_logs_err_turnstile = /** @type {(inputs: Logs_Err_TurnstileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnsan doğrulaması başarısız oldu. Tekrar deneyin.`)
};

const zh_logs_err_turnstile = /** @type {(inputs: Logs_Err_TurnstileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`人机验证失败。请重试。`)
};

const ja_logs_err_turnstile = /** @type {(inputs: Logs_Err_TurnstileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`人間確認に失敗しました。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "The human check failed. Try again." |
*
* @param {Logs_Err_TurnstileInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_err_turnstile = /** @type {((inputs?: Logs_Err_TurnstileInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Err_TurnstileInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_err_turnstile(inputs)
	if (locale === "de") return de_logs_err_turnstile(inputs)
	if (locale === "fr") return fr_logs_err_turnstile(inputs)
	if (locale === "it") return it_logs_err_turnstile(inputs)
	if (locale === "nl") return nl_logs_err_turnstile(inputs)
	if (locale === "pl") return pl_logs_err_turnstile(inputs)
	if (locale === "pt") return pt_logs_err_turnstile(inputs)
	if (locale === "ru") return ru_logs_err_turnstile(inputs)
	if (locale === "sv") return sv_logs_err_turnstile(inputs)
	if (locale === "tr") return tr_logs_err_turnstile(inputs)
	if (locale === "zh") return zh_logs_err_turnstile(inputs)
	if (locale === "ja") return ja_logs_err_turnstile(inputs)
	return en_logs_err_turnstile(inputs)
});
