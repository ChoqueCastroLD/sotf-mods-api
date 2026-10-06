/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Ranger_User_Unverify_TitleInputs */

const en_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove the trusted status from ${i?.name}?`)
};

const es_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Quitar a ${i?.name} el estado de confianza?`)
};

const de_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Den Vertrauensstatus von ${i?.name} entfernen?`)
};

const fr_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer le statut de confiance à ${i?.name} ?`)
};

const it_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Togliere a ${i?.name} lo stato di affidabile?`)
};

const nl_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De vertrouwde status van ${i?.name} intrekken?`)
};

const pl_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Odebrać ${i?.name} status zaufanego?`)
};

const pt_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remover de ${i?.name} o status de confiável?`)
};

const ru_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Снять с ${i?.name} статус проверенного?`)
};

const sv_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort betrodd-status från ${i?.name}?`)
};

const tr_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için güvenilir durumu kaldırılsın mı?`)
};

const zh_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`取消 ${i?.name} 的受信任状态？`)
};

const ja_ranger_user_unverify_title = /** @type {(inputs: Ranger_User_Unverify_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の信頼済みを外しますか？`)
};

/**
* | output |
* | --- |
* | "Remove the trusted status from {name}?" |
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
