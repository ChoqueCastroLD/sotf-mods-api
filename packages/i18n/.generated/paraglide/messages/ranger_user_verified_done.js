/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Ranger_User_Verified_DoneInputs */

const en_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is now trusted.`)
};

const es_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ya es de confianza.`)
};

const de_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ist jetzt vertrauenswürdig.`)
};

const fr_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} est maintenant de confiance.`)
};

const it_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ora è affidabile.`)
};

const nl_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is nu vertrouwd.`)
};

const pl_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} jest teraz zaufanym twórcą.`)
};

const pt_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} agora é confiável.`)
};

const ru_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} теперь проверенный автор.`)
};

const sv_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} är nu betrodd.`)
};

const tr_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} artık güvenilir.`)
};

const zh_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 现在是受信任用户。`)
};

const ja_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} は信頼済みになりました。`)
};

/**
* | output |
* | --- |
* | "{name} is now trusted." |
*
* @param {Ranger_User_Verified_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_verified_done = /** @type {((inputs: Ranger_User_Verified_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Verified_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_verified_done(inputs)
	if (locale === "de") return de_ranger_user_verified_done(inputs)
	if (locale === "fr") return fr_ranger_user_verified_done(inputs)
	if (locale === "it") return it_ranger_user_verified_done(inputs)
	if (locale === "nl") return nl_ranger_user_verified_done(inputs)
	if (locale === "pl") return pl_ranger_user_verified_done(inputs)
	if (locale === "pt") return pt_ranger_user_verified_done(inputs)
	if (locale === "ru") return ru_ranger_user_verified_done(inputs)
	if (locale === "sv") return sv_ranger_user_verified_done(inputs)
	if (locale === "tr") return tr_ranger_user_verified_done(inputs)
	if (locale === "zh") return zh_ranger_user_verified_done(inputs)
	if (locale === "ja") return ja_ranger_user_verified_done(inputs)
	return en_ranger_user_verified_done(inputs)
});
