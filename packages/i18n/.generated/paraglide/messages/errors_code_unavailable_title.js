/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Unavailable_TitleInputs */

const en_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Service unavailable`)
};

const es_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servicio no disponible`)
};

const de_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dienst nicht verfügbar`)
};

const fr_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Service indisponible`)
};

const it_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servizio non disponibile`)
};

const nl_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dienst niet beschikbaar`)
};

const pl_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usługa niedostępna`)
};

const pt_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serviço indisponível`)
};

const ru_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сервис недоступен`)
};

const sv_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tjänsten är inte tillgänglig`)
};

const tr_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hizmet kullanılamıyor`)
};

const zh_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`服务暂不可用`)
};

const ja_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サービスを利用できません`)
};

/**
* | output |
* | --- |
* | "Service unavailable" |
*
* @param {Errors_Code_Unavailable_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_unavailable_title = /** @type {((inputs?: Errors_Code_Unavailable_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Unavailable_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_unavailable_title(inputs)
	if (locale === "de") return de_errors_code_unavailable_title(inputs)
	if (locale === "fr") return fr_errors_code_unavailable_title(inputs)
	if (locale === "it") return it_errors_code_unavailable_title(inputs)
	if (locale === "nl") return nl_errors_code_unavailable_title(inputs)
	if (locale === "pl") return pl_errors_code_unavailable_title(inputs)
	if (locale === "pt") return pt_errors_code_unavailable_title(inputs)
	if (locale === "ru") return ru_errors_code_unavailable_title(inputs)
	if (locale === "sv") return sv_errors_code_unavailable_title(inputs)
	if (locale === "tr") return tr_errors_code_unavailable_title(inputs)
	if (locale === "zh") return zh_errors_code_unavailable_title(inputs)
	if (locale === "ja") return ja_errors_code_unavailable_title(inputs)
	return en_errors_code_unavailable_title(inputs)
});
