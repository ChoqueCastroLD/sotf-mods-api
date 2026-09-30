/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Support_EditInputs */

const en_settings_support_edit = /** @type {(inputs: Settings_Support_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit links in your profile`)
};

const es_settings_support_edit = /** @type {(inputs: Settings_Support_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar los enlaces de tu perfil`)
};

const de_settings_support_edit = /** @type {(inputs: Settings_Support_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links in deinem Profil bearbeiten`)
};

const fr_settings_support_edit = /** @type {(inputs: Settings_Support_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier les liens de votre profil`)
};

const it_settings_support_edit = /** @type {(inputs: Settings_Support_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica i link del profilo`)
};

const nl_settings_support_edit = /** @type {(inputs: Settings_Support_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links in je profiel bewerken`)
};

const pl_settings_support_edit = /** @type {(inputs: Settings_Support_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj linki w profilu`)
};

const pt_settings_support_edit = /** @type {(inputs: Settings_Support_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar os links do seu perfil`)
};

const ru_settings_support_edit = /** @type {(inputs: Settings_Support_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменить ссылки в профиле`)
};

const sv_settings_support_edit = /** @type {(inputs: Settings_Support_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera länkar i din profil`)
};

const tr_settings_support_edit = /** @type {(inputs: Settings_Support_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profilindeki bağlantıları düzenle`)
};

const zh_settings_support_edit = /** @type {(inputs: Settings_Support_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑个人资料中的链接`)
};

const ja_settings_support_edit = /** @type {(inputs: Settings_Support_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロフィールのリンクを編集`)
};

/**
* | output |
* | --- |
* | "Edit links in your profile" |
*
* @param {Settings_Support_EditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_support_edit = /** @type {((inputs?: Settings_Support_EditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Support_EditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_support_edit(inputs)
	if (locale === "de") return de_settings_support_edit(inputs)
	if (locale === "fr") return fr_settings_support_edit(inputs)
	if (locale === "it") return it_settings_support_edit(inputs)
	if (locale === "nl") return nl_settings_support_edit(inputs)
	if (locale === "pl") return pl_settings_support_edit(inputs)
	if (locale === "pt") return pt_settings_support_edit(inputs)
	if (locale === "ru") return ru_settings_support_edit(inputs)
	if (locale === "sv") return sv_settings_support_edit(inputs)
	if (locale === "tr") return tr_settings_support_edit(inputs)
	if (locale === "zh") return zh_settings_support_edit(inputs)
	if (locale === "ja") return ja_settings_support_edit(inputs)
	return en_settings_support_edit(inputs)
});
