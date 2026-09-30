/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Scout_Error_Rate_HintInputs */

const en_cmdk_scout_error_rate_hint = /** @type {(inputs: Cmdk_Scout_Error_Rate_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wait a minute and ask again.`)
};

const es_cmdk_scout_error_rate_hint = /** @type {(inputs: Cmdk_Scout_Error_Rate_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Espera un minuto y vuelve a preguntar.`)
};

const de_cmdk_scout_error_rate_hint = /** @type {(inputs: Cmdk_Scout_Error_Rate_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warte eine Minute und frage erneut.`)
};

const fr_cmdk_scout_error_rate_hint = /** @type {(inputs: Cmdk_Scout_Error_Rate_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attends une minute et redemande.`)
};

const it_cmdk_scout_error_rate_hint = /** @type {(inputs: Cmdk_Scout_Error_Rate_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aspetta un minuto e chiedi di nuovo.`)
};

const nl_cmdk_scout_error_rate_hint = /** @type {(inputs: Cmdk_Scout_Error_Rate_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wacht een minuut en vraag opnieuw.`)
};

const pl_cmdk_scout_error_rate_hint = /** @type {(inputs: Cmdk_Scout_Error_Rate_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poczekaj minutę i zapytaj ponownie.`)
};

const pt_cmdk_scout_error_rate_hint = /** @type {(inputs: Cmdk_Scout_Error_Rate_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Espera um minuto e pergunta de novo.`)
};

const ru_cmdk_scout_error_rate_hint = /** @type {(inputs: Cmdk_Scout_Error_Rate_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подождите минуту и спросите снова.`)
};

const sv_cmdk_scout_error_rate_hint = /** @type {(inputs: Cmdk_Scout_Error_Rate_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vänta en minut och fråga igen.`)
};

const tr_cmdk_scout_error_rate_hint = /** @type {(inputs: Cmdk_Scout_Error_Rate_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir dakika bekleyip tekrar sor.`)
};

const zh_cmdk_scout_error_rate_hint = /** @type {(inputs: Cmdk_Scout_Error_Rate_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请等待一分钟后再问。`)
};

const ja_cmdk_scout_error_rate_hint = /** @type {(inputs: Cmdk_Scout_Error_Rate_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1分ほど待ってからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Wait a minute and ask again." |
*
* @param {Cmdk_Scout_Error_Rate_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_scout_error_rate_hint = /** @type {((inputs?: Cmdk_Scout_Error_Rate_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scout_Error_Rate_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_scout_error_rate_hint(inputs)
	if (locale === "de") return de_cmdk_scout_error_rate_hint(inputs)
	if (locale === "fr") return fr_cmdk_scout_error_rate_hint(inputs)
	if (locale === "it") return it_cmdk_scout_error_rate_hint(inputs)
	if (locale === "nl") return nl_cmdk_scout_error_rate_hint(inputs)
	if (locale === "pl") return pl_cmdk_scout_error_rate_hint(inputs)
	if (locale === "pt") return pt_cmdk_scout_error_rate_hint(inputs)
	if (locale === "ru") return ru_cmdk_scout_error_rate_hint(inputs)
	if (locale === "sv") return sv_cmdk_scout_error_rate_hint(inputs)
	if (locale === "tr") return tr_cmdk_scout_error_rate_hint(inputs)
	if (locale === "zh") return zh_cmdk_scout_error_rate_hint(inputs)
	if (locale === "ja") return ja_cmdk_scout_error_rate_hint(inputs)
	return en_cmdk_scout_error_rate_hint(inputs)
});
