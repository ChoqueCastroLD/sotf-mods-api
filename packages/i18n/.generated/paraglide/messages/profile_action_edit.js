/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Action_EditInputs */

const en_profile_action_edit = /** @type {(inputs: Profile_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit profile`)
};

const es_profile_action_edit = /** @type {(inputs: Profile_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar perfil`)
};

const de_profile_action_edit = /** @type {(inputs: Profile_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil bearbeiten`)
};

const fr_profile_action_edit = /** @type {(inputs: Profile_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier le profil`)
};

const it_profile_action_edit = /** @type {(inputs: Profile_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica profilo`)
};

const nl_profile_action_edit = /** @type {(inputs: Profile_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profiel bewerken`)
};

const pl_profile_action_edit = /** @type {(inputs: Profile_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj profil`)
};

const pt_profile_action_edit = /** @type {(inputs: Profile_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar perfil`)
};

const ru_profile_action_edit = /** @type {(inputs: Profile_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Редактировать профиль`)
};

const sv_profile_action_edit = /** @type {(inputs: Profile_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera profil`)
};

const tr_profile_action_edit = /** @type {(inputs: Profile_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profili düzenle`)
};

const zh_profile_action_edit = /** @type {(inputs: Profile_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑个人资料`)
};

const ja_profile_action_edit = /** @type {(inputs: Profile_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロフィールを編集`)
};

/**
* | output |
* | --- |
* | "Edit profile" |
*
* @param {Profile_Action_EditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_action_edit = /** @type {((inputs?: Profile_Action_EditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Action_EditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_action_edit(inputs)
	if (locale === "de") return de_profile_action_edit(inputs)
	if (locale === "fr") return fr_profile_action_edit(inputs)
	if (locale === "it") return it_profile_action_edit(inputs)
	if (locale === "nl") return nl_profile_action_edit(inputs)
	if (locale === "pl") return pl_profile_action_edit(inputs)
	if (locale === "pt") return pt_profile_action_edit(inputs)
	if (locale === "ru") return ru_profile_action_edit(inputs)
	if (locale === "sv") return sv_profile_action_edit(inputs)
	if (locale === "tr") return tr_profile_action_edit(inputs)
	if (locale === "zh") return zh_profile_action_edit(inputs)
	if (locale === "ja") return ja_profile_action_edit(inputs)
	return en_profile_action_edit(inputs)
});
