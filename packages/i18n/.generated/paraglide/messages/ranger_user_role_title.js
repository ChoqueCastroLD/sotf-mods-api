/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, role: NonNullable<unknown> }} Ranger_User_Role_TitleInputs */

const en_ranger_user_role_title = /** @type {(inputs: Ranger_User_Role_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Change the role of ${i?.name} to ${i?.role}?`)
};

const es_ranger_user_role_title = /** @type {(inputs: Ranger_User_Role_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Cambiar el rol de ${i?.name} a ${i?.role}?`)
};

const de_ranger_user_role_title = /** @type {(inputs: Ranger_User_Role_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rolle von ${i?.name} auf ${i?.role} ändern?`)
};

const fr_ranger_user_role_title = /** @type {(inputs: Ranger_User_Role_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Changer le rôle de ${i?.name} en ${i?.role} ?`)
};

const it_ranger_user_role_title = /** @type {(inputs: Ranger_User_Role_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cambiare il ruolo di ${i?.name} in ${i?.role}?`)
};

const nl_ranger_user_role_title = /** @type {(inputs: Ranger_User_Role_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De rol van ${i?.name} wijzigen in ${i?.role}?`)
};

const pl_ranger_user_role_title = /** @type {(inputs: Ranger_User_Role_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zmienić rolę ${i?.name} na ${i?.role}?`)
};

const pt_ranger_user_role_title = /** @type {(inputs: Ranger_User_Role_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mudar o papel de ${i?.name} para ${i?.role}?`)
};

const ru_ranger_user_role_title = /** @type {(inputs: Ranger_User_Role_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Сменить роль ${i?.name} на «${i?.role}»?`)
};

const sv_ranger_user_role_title = /** @type {(inputs: Ranger_User_Role_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ändra rollen för ${i?.name} till ${i?.role}?`)
};

const tr_ranger_user_role_title = /** @type {(inputs: Ranger_User_Role_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kullanıcısının rolü ${i?.role} olarak değiştirilsin mi?`)
};

const zh_ranger_user_role_title = /** @type {(inputs: Ranger_User_Role_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`将 ${i?.name} 的角色改为 ${i?.role}？`)
};

const ja_ranger_user_role_title = /** @type {(inputs: Ranger_User_Role_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} のロールを ${i?.role} に変更しますか？`)
};

/**
* | output |
* | --- |
* | "Change the role of {name} to {role}?" |
*
* @param {Ranger_User_Role_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_role_title = /** @type {((inputs: Ranger_User_Role_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Role_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_role_title(inputs)
	if (locale === "de") return de_ranger_user_role_title(inputs)
	if (locale === "fr") return fr_ranger_user_role_title(inputs)
	if (locale === "it") return it_ranger_user_role_title(inputs)
	if (locale === "nl") return nl_ranger_user_role_title(inputs)
	if (locale === "pl") return pl_ranger_user_role_title(inputs)
	if (locale === "pt") return pt_ranger_user_role_title(inputs)
	if (locale === "ru") return ru_ranger_user_role_title(inputs)
	if (locale === "sv") return sv_ranger_user_role_title(inputs)
	if (locale === "tr") return tr_ranger_user_role_title(inputs)
	if (locale === "zh") return zh_ranger_user_role_title(inputs)
	if (locale === "ja") return ja_ranger_user_role_title(inputs)
	return en_ranger_user_role_title(inputs)
});
