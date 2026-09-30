/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Ranger_User_Verified_DoneInputs */

const en_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is now a verified creator.`)
};

const es_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ya es creador verificado.`)
};

const de_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ist jetzt verifizierter Creator.`)
};

const fr_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} est maintenant créateur vérifié.`)
};

const it_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ora è un creatore verificato.`)
};

const nl_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is nu een geverifieerde maker.`)
};

const pl_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} jest teraz zweryfikowanym twórcą.`)
};

const pt_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} agora é um criador verificado.`)
};

const ru_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} теперь подтверждённый автор.`)
};

const sv_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} är nu verifierad skapare.`)
};

const tr_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} artık doğrulanmış üretici.`)
};

const zh_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 现在是认证作者。`)
};

const ja_ranger_user_verified_done = /** @type {(inputs: Ranger_User_Verified_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} は認証済みクリエイターになりました。`)
};

/**
* | output |
* | --- |
* | "{name} is now a verified creator." |
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
