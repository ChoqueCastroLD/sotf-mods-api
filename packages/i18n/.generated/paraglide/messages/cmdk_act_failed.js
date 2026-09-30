/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Act_FailedInputs */

const en_cmdk_act_failed = /** @type {(inputs: Cmdk_Act_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That didn’t work. Try again.`)
};

const es_cmdk_act_failed = /** @type {(inputs: Cmdk_Act_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo. Inténtalo de nuevo.`)
};

const de_cmdk_act_failed = /** @type {(inputs: Cmdk_Act_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das hat nicht geklappt. Versuche es erneut.`)
};

const fr_cmdk_act_failed = /** @type {(inputs: Cmdk_Act_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec. Réessayez.`)
};

const it_cmdk_act_failed = /** @type {(inputs: Cmdk_Act_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è andata a buon fine. Riprova.`)
};

const nl_cmdk_act_failed = /** @type {(inputs: Cmdk_Act_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dat is mislukt. Probeer opnieuw.`)
};

const pl_cmdk_act_failed = /** @type {(inputs: Cmdk_Act_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się. Spróbuj ponownie.`)
};

const pt_cmdk_act_failed = /** @type {(inputs: Cmdk_Act_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não funcionou. Tente novamente.`)
};

const ru_cmdk_act_failed = /** @type {(inputs: Cmdk_Act_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не получилось. Попробуйте ещё раз.`)
};

const sv_cmdk_act_failed = /** @type {(inputs: Cmdk_Act_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte. Försök igen.`)
};

const tr_cmdk_act_failed = /** @type {(inputs: Cmdk_Act_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Olmadı. Tekrar deneyin.`)
};

const zh_cmdk_act_failed = /** @type {(inputs: Cmdk_Act_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作失败，请重试。`)
};

const ja_cmdk_act_failed = /** @type {(inputs: Cmdk_Act_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失敗しました。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "That didn’t work. Try again." |
*
* @param {Cmdk_Act_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_act_failed = /** @type {((inputs?: Cmdk_Act_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Act_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_act_failed(inputs)
	if (locale === "de") return de_cmdk_act_failed(inputs)
	if (locale === "fr") return fr_cmdk_act_failed(inputs)
	if (locale === "it") return it_cmdk_act_failed(inputs)
	if (locale === "nl") return nl_cmdk_act_failed(inputs)
	if (locale === "pl") return pl_cmdk_act_failed(inputs)
	if (locale === "pt") return pt_cmdk_act_failed(inputs)
	if (locale === "ru") return ru_cmdk_act_failed(inputs)
	if (locale === "sv") return sv_cmdk_act_failed(inputs)
	if (locale === "tr") return tr_cmdk_act_failed(inputs)
	if (locale === "zh") return zh_cmdk_act_failed(inputs)
	if (locale === "ja") return ja_cmdk_act_failed(inputs)
	return en_cmdk_act_failed(inputs)
});
