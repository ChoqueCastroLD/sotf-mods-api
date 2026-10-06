/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Ranger_User_Unverified_DoneInputs */

const en_ranger_user_unverified_done = /** @type {(inputs: Ranger_User_Unverified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is no longer trusted.`)
};

const es_ranger_user_unverified_done = /** @type {(inputs: Ranger_User_Unverified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ya no es de confianza.`)
};

const de_ranger_user_unverified_done = /** @type {(inputs: Ranger_User_Unverified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ist nicht mehr vertrauenswürdig.`)
};

const fr_ranger_user_unverified_done = /** @type {(inputs: Ranger_User_Unverified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} n’est plus de confiance.`)
};

const it_ranger_user_unverified_done = /** @type {(inputs: Ranger_User_Unverified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} non è più affidabile.`)
};

const nl_ranger_user_unverified_done = /** @type {(inputs: Ranger_User_Unverified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is niet meer vertrouwd.`)
};

const pl_ranger_user_unverified_done = /** @type {(inputs: Ranger_User_Unverified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} nie jest już zaufanym twórcą.`)
};

const pt_ranger_user_unverified_done = /** @type {(inputs: Ranger_User_Unverified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} não é mais confiável.`)
};

const ru_ranger_user_unverified_done = /** @type {(inputs: Ranger_User_Unverified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} больше не проверенный автор.`)
};

const sv_ranger_user_unverified_done = /** @type {(inputs: Ranger_User_Unverified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} är inte längre betrodd.`)
};

const tr_ranger_user_unverified_done = /** @type {(inputs: Ranger_User_Unverified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} artık güvenilir değil.`)
};

const zh_ranger_user_unverified_done = /** @type {(inputs: Ranger_User_Unverified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 不再是受信任用户。`)
};

const ja_ranger_user_unverified_done = /** @type {(inputs: Ranger_User_Unverified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} は信頼済みではなくなりました。`)
};

/**
* | output |
* | --- |
* | "{name} is no longer trusted." |
*
* @param {Ranger_User_Unverified_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_unverified_done = /** @type {((inputs: Ranger_User_Unverified_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Unverified_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_unverified_done(inputs)
	if (locale === "de") return de_ranger_user_unverified_done(inputs)
	if (locale === "fr") return fr_ranger_user_unverified_done(inputs)
	if (locale === "it") return it_ranger_user_unverified_done(inputs)
	if (locale === "nl") return nl_ranger_user_unverified_done(inputs)
	if (locale === "pl") return pl_ranger_user_unverified_done(inputs)
	if (locale === "pt") return pt_ranger_user_unverified_done(inputs)
	if (locale === "ru") return ru_ranger_user_unverified_done(inputs)
	if (locale === "sv") return sv_ranger_user_unverified_done(inputs)
	if (locale === "tr") return tr_ranger_user_unverified_done(inputs)
	if (locale === "zh") return zh_ranger_user_unverified_done(inputs)
	if (locale === "ja") return ja_ranger_user_unverified_done(inputs)
	return en_ranger_user_unverified_done(inputs)
});
