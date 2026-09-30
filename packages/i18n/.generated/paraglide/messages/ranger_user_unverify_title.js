/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Ranger_User_Unverify_TitleInputs */

const en_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove the verified creator flag from ${i?.name}?`)
};

const es_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Quitar a ${i?.name} la marca de creador verificado?`)
};

const de_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} die Verifizierung entziehen?`)
};

const fr_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer le statut de créateur vérifié à ${i?.name} ?`)
};

const it_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Togliere a ${i?.name} lo stato di creatore verificato?`)
};

const nl_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De verificatie van ${i?.name} intrekken?`)
};

const pl_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Odebrać ${i?.name} status zweryfikowanego twórcy?`)
};

const pt_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remover de ${i?.name} a marca de criador verificado?`)
};

const ru_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Снять с ${i?.name} статус подтверждённого автора?`)
};

const sv_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort markeringen verifierad skapare från ${i?.name}?`)
};

const tr_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için doğrulanmış üretici işareti kaldırılsın mı?`)
};

const zh_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`取消 ${i?.name} 的认证作者标记？`)
};

const ja_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の認証済みクリエイターを外しますか？`)
};

/**
* | output |
* | --- |
* | "Remove the verified creator flag from {name}?" |
*
* @param {Ranger_User_Unverify_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_unverify_title = /** @type {((inputs: Ranger_User_Unverify_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Unverify_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_unverify_title(inputs)
	if (locale === "de") return de_ranger_user_unverify_title(inputs)
	if (locale === "fr") return fr_ranger_user_unverify_title(inputs)
	if (locale === "it") return it_ranger_user_unverify_title(inputs)
	if (locale === "nl") return nl_ranger_user_unverify_title(inputs)
	if (locale === "pl") return pl_ranger_user_unverify_title(inputs)
	if (locale === "pt") return pt_ranger_user_unverify_title(inputs)
	if (locale === "ru") return ru_ranger_user_unverify_title(inputs)
	if (locale === "sv") return sv_ranger_user_unverify_title(inputs)
	if (locale === "tr") return tr_ranger_user_unverify_title(inputs)
	if (locale === "zh") return zh_ranger_user_unverify_title(inputs)
	if (locale === "ja") return ja_ranger_user_unverify_title(inputs)
	return en_ranger_user_unverify_title(inputs)
});
