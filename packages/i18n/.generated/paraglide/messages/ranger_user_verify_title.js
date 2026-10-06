/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Ranger_User_Verify_TitleInputs */

const en_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mark ${i?.name} as trusted?`)
};

const es_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Marcar a ${i?.name} como de confianza?`)
};

const de_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} als vertrauenswürdig markieren?`)
};

const fr_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marquer ${i?.name} comme de confiance ?`)
};

const it_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Segnare ${i?.name} come affidabile?`)
};

const nl_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} als vertrouwd markeren?`)
};

const pl_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oznaczyć ${i?.name} jako zaufanego?`)
};

const pt_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marcar ${i?.name} como confiável?`)
};

const ru_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Отметить ${i?.name} как проверенного?`)
};

const sv_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markera ${i?.name} som betrodd?`)
};

const tr_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} güvenilir olarak işaretlensin mi?`)
};

const zh_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`将 ${i?.name} 标记为受信任？`)
};

const ja_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を信頼済みにしますか？`)
};

/**
* | output |
* | --- |
* | "Mark {name} as trusted?" |
*
* @param {Ranger_User_Verify_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_verify_title = /** @type {((inputs: Ranger_User_Verify_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Verify_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_verify_title(inputs)
	if (locale === "de") return de_ranger_user_verify_title(inputs)
	if (locale === "fr") return fr_ranger_user_verify_title(inputs)
	if (locale === "it") return it_ranger_user_verify_title(inputs)
	if (locale === "nl") return nl_ranger_user_verify_title(inputs)
	if (locale === "pl") return pl_ranger_user_verify_title(inputs)
	if (locale === "pt") return pt_ranger_user_verify_title(inputs)
	if (locale === "ru") return ru_ranger_user_verify_title(inputs)
	if (locale === "sv") return sv_ranger_user_verify_title(inputs)
	if (locale === "tr") return tr_ranger_user_verify_title(inputs)
	if (locale === "zh") return zh_ranger_user_verify_title(inputs)
	if (locale === "ja") return ja_ranger_user_verify_title(inputs)
	return en_ranger_user_verify_title(inputs)
});
