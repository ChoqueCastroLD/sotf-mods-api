/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Ranger_User_Verify_TitleInputs */

const en_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Make ${i?.name} a verified creator?`)
};

const es_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Hacer a ${i?.name} creador verificado?`)
};

const de_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} zum verifizierten Creator machen?`)
};

const fr_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Faire de ${i?.name} un créateur vérifié ?`)
};

const it_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rendere ${i?.name} creatore verificato?`)
};

const nl_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} een geverifieerde maker maken?`)
};

const pl_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nadać ${i?.name} status zweryfikowanego twórcy?`)
};

const pt_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tornar ${i?.name} um criador verificado?`)
};

const ru_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Сделать ${i?.name} подтверждённым автором?`)
};

const sv_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Göra ${i?.name} till verifierad skapare?`)
};

const tr_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} doğrulanmış üretici yapılsın mı?`)
};

const zh_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`将 ${i?.name} 设为认证作者？`)
};

const ja_ranger_user_verify_title = /** @type {(inputs: Ranger_User_Verify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を認証済みクリエイターにしますか？`)
};

/**
* | output |
* | --- |
* | "Make {name} a verified creator?" |
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
