/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_VerifyInputs */

const en_ranger_user_verify = /** @type {(inputs: Ranger_User_VerifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mark as trusted`)
};

const es_ranger_user_verify = /** @type {(inputs: Ranger_User_VerifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar de confianza`)
};

const de_ranger_user_verify = /** @type {(inputs: Ranger_User_VerifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als vertrauenswürdig markieren`)
};

const fr_ranger_user_verify = /** @type {(inputs: Ranger_User_VerifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marquer de confiance`)
};

const it_ranger_user_verify = /** @type {(inputs: Ranger_User_VerifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segna come affidabile`)
};

const nl_ranger_user_verify = /** @type {(inputs: Ranger_User_VerifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als vertrouwd markeren`)
};

const pl_ranger_user_verify = /** @type {(inputs: Ranger_User_VerifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznacz jako zaufanego`)
};

const pt_ranger_user_verify = /** @type {(inputs: Ranger_User_VerifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como confiável`)
};

const ru_ranger_user_verify = /** @type {(inputs: Ranger_User_VerifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отметить как проверенного`)
};

const sv_ranger_user_verify = /** @type {(inputs: Ranger_User_VerifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markera som betrodd`)
};

const tr_ranger_user_verify = /** @type {(inputs: Ranger_User_VerifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenilir olarak işaretle`)
};

const zh_ranger_user_verify = /** @type {(inputs: Ranger_User_VerifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标记为受信任`)
};

const ja_ranger_user_verify = /** @type {(inputs: Ranger_User_VerifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信頼済みにする`)
};

/**
* | output |
* | --- |
* | "Mark as trusted" |
*
* @param {Ranger_User_VerifyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_verify = /** @type {((inputs?: Ranger_User_VerifyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_VerifyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_verify(inputs)
	if (locale === "de") return de_ranger_user_verify(inputs)
	if (locale === "fr") return fr_ranger_user_verify(inputs)
	if (locale === "it") return it_ranger_user_verify(inputs)
	if (locale === "nl") return nl_ranger_user_verify(inputs)
	if (locale === "pl") return pl_ranger_user_verify(inputs)
	if (locale === "pt") return pt_ranger_user_verify(inputs)
	if (locale === "ru") return ru_ranger_user_verify(inputs)
	if (locale === "sv") return sv_ranger_user_verify(inputs)
	if (locale === "tr") return tr_ranger_user_verify(inputs)
	if (locale === "zh") return zh_ranger_user_verify(inputs)
	if (locale === "ja") return ja_ranger_user_verify(inputs)
	return en_ranger_user_verify(inputs)
});
