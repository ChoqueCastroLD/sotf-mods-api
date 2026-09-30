/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_FailedInputs */

const en_bundles_failed = /** @type {(inputs: Bundles_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something went wrong. Try again.`)
};

const es_bundles_failed = /** @type {(inputs: Bundles_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo salió mal. Inténtalo de nuevo.`)
};

const de_bundles_failed = /** @type {(inputs: Bundles_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etwas ist schiefgelaufen. Versuche es erneut.`)
};

const fr_bundles_failed = /** @type {(inputs: Bundles_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une erreur s'est produite. Réessaie.`)
};

const it_bundles_failed = /** @type {(inputs: Bundles_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcosa è andato storto. Riprova.`)
};

const nl_bundles_failed = /** @type {(inputs: Bundles_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er ging iets mis. Probeer het opnieuw.`)
};

const pl_bundles_failed = /** @type {(inputs: Bundles_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coś poszło nie tak. Spróbuj ponownie.`)
};

const pt_bundles_failed = /** @type {(inputs: Bundles_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo correu mal. Tenta novamente.`)
};

const ru_bundles_failed = /** @type {(inputs: Bundles_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что-то пошло не так. Попробуйте ещё раз.`)
};

const sv_bundles_failed = /** @type {(inputs: Bundles_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Något gick fel. Försök igen.`)
};

const tr_bundles_failed = /** @type {(inputs: Bundles_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir şeyler ters gitti. Tekrar dene.`)
};

const zh_bundles_failed = /** @type {(inputs: Bundles_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`出错了，请重试。`)
};

const ja_bundles_failed = /** @type {(inputs: Bundles_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`問題が発生しました。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Something went wrong. Try again." |
*
* @param {Bundles_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_failed = /** @type {((inputs?: Bundles_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_failed(inputs)
	if (locale === "de") return de_bundles_failed(inputs)
	if (locale === "fr") return fr_bundles_failed(inputs)
	if (locale === "it") return it_bundles_failed(inputs)
	if (locale === "nl") return nl_bundles_failed(inputs)
	if (locale === "pl") return pl_bundles_failed(inputs)
	if (locale === "pt") return pt_bundles_failed(inputs)
	if (locale === "ru") return ru_bundles_failed(inputs)
	if (locale === "sv") return sv_bundles_failed(inputs)
	if (locale === "tr") return tr_bundles_failed(inputs)
	if (locale === "zh") return zh_bundles_failed(inputs)
	if (locale === "ja") return ja_bundles_failed(inputs)
	return en_bundles_failed(inputs)
});
