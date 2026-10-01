/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Offline_StillInputs */

const en_shell_offline_still = /** @type {(inputs: Shell_Offline_StillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Still no signal. Try again in a moment.`)
};

const es_shell_offline_still = /** @type {(inputs: Shell_Offline_StillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sigue sin señal. Inténtalo de nuevo en un momento.`)
};

const de_shell_offline_still = /** @type {(inputs: Shell_Offline_StillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weiterhin kein Signal. Versuche es gleich noch einmal.`)
};

const fr_shell_offline_still = /** @type {(inputs: Shell_Offline_StillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toujours pas de signal. Réessayez dans un instant.`)
};

const it_shell_offline_still = /** @type {(inputs: Shell_Offline_StillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun segnale. Riprova tra poco.`)
};

const nl_shell_offline_still = /** @type {(inputs: Shell_Offline_StillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog steeds geen signaal. Probeer het zo opnieuw.`)
};

const pl_shell_offline_still = /** @type {(inputs: Shell_Offline_StillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nadal brak sygnału. Spróbuj za chwilę.`)
};

const pt_shell_offline_still = /** @type {(inputs: Shell_Offline_StillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda sem sinal. Tente novamente daqui a pouco.`)
};

const ru_shell_offline_still = /** @type {(inputs: Shell_Offline_StillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сигнала по-прежнему нет. Повторите чуть позже.`)
};

const sv_shell_offline_still = /** @type {(inputs: Shell_Offline_StillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortfarande ingen signal. Försök igen om en stund.`)
};

const tr_shell_offline_still = /** @type {(inputs: Shell_Offline_StillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hâlâ sinyal yok. Biraz sonra tekrar dene.`)
};

const zh_shell_offline_still = /** @type {(inputs: Shell_Offline_StillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仍然没有信号，请稍后再试。`)
};

const ja_shell_offline_still = /** @type {(inputs: Shell_Offline_StillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ電波がありません。しばらくしてからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Still no signal. Try again in a moment." |
*
* @param {Shell_Offline_StillInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_offline_still = /** @type {((inputs?: Shell_Offline_StillInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Offline_StillInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_offline_still(inputs)
	if (locale === "de") return de_shell_offline_still(inputs)
	if (locale === "fr") return fr_shell_offline_still(inputs)
	if (locale === "it") return it_shell_offline_still(inputs)
	if (locale === "nl") return nl_shell_offline_still(inputs)
	if (locale === "pl") return pl_shell_offline_still(inputs)
	if (locale === "pt") return pt_shell_offline_still(inputs)
	if (locale === "ru") return ru_shell_offline_still(inputs)
	if (locale === "sv") return sv_shell_offline_still(inputs)
	if (locale === "tr") return tr_shell_offline_still(inputs)
	if (locale === "zh") return zh_shell_offline_still(inputs)
	if (locale === "ja") return ja_shell_offline_still(inputs)
	return en_shell_offline_still(inputs)
});
