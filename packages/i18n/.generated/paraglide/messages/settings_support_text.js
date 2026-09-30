/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Support_TextInputs */

const en_settings_support_text = /** @type {(inputs: Settings_Support_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ko-fi and Patreon links from your profile appear on your profile and next to your mods’ download button.`)
};

const es_settings_support_text = /** @type {(inputs: Settings_Support_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los enlaces de Ko-fi y Patreon de tu perfil aparecen en tu perfil y junto al botón de descarga de tus mods.`)
};

const de_settings_support_text = /** @type {(inputs: Settings_Support_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ko-fi- und Patreon-Links aus deinem Profil erscheinen auf deinem Profil und neben dem Download-Button deiner Mods.`)
};

const fr_settings_support_text = /** @type {(inputs: Settings_Support_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les liens Ko-fi et Patreon de votre profil apparaissent sur votre profil et à côté du bouton de téléchargement de vos mods.`)
};

const it_settings_support_text = /** @type {(inputs: Settings_Support_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I link Ko-fi e Patreon del profilo compaiono sul profilo e accanto al pulsante di download delle tue mod.`)
};

const nl_settings_support_text = /** @type {(inputs: Settings_Support_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ko-fi- en Patreon-links uit je profiel verschijnen op je profiel en naast de downloadknop van je mods.`)
};

const pl_settings_support_text = /** @type {(inputs: Settings_Support_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linki do Ko-fi i Patreona z profilu pojawiają się na profilu i obok przycisku pobierania twoich modów.`)
};

const pt_settings_support_text = /** @type {(inputs: Settings_Support_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os links de Ko-fi e Patreon do seu perfil aparecem no perfil e ao lado do botão de download dos seus mods.`)
};

const ru_settings_support_text = /** @type {(inputs: Settings_Support_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылки на Ko-fi и Patreon из профиля показываются в профиле и рядом с кнопкой загрузки ваших модов.`)
};

const sv_settings_support_text = /** @type {(inputs: Settings_Support_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ko-fi- och Patreon-länkar från din profil visas på profilen och bredvid nedladdningsknappen för dina moddar.`)
};

const tr_settings_support_text = /** @type {(inputs: Settings_Support_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profilindeki Ko-fi ve Patreon bağlantıları profilinde ve modlarının indirme düğmesinin yanında görünür.`)
};

const zh_settings_support_text = /** @type {(inputs: Settings_Support_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个人资料中的 Ko-fi 和 Patreon 链接会显示在你的个人资料上，以及你的模组下载按钮旁边。`)
};

const ja_settings_support_text = /** @type {(inputs: Settings_Support_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロフィールの Ko-fi と Patreon のリンクは、プロフィールとMODのダウンロードボタンの横に表示されます。`)
};

/**
* | output |
* | --- |
* | "Ko-fi and Patreon links from your profile appear on your profile and next to your mods’ download button." |
*
* @param {Settings_Support_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_support_text = /** @type {((inputs?: Settings_Support_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Support_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_support_text(inputs)
	if (locale === "de") return de_settings_support_text(inputs)
	if (locale === "fr") return fr_settings_support_text(inputs)
	if (locale === "it") return it_settings_support_text(inputs)
	if (locale === "nl") return nl_settings_support_text(inputs)
	if (locale === "pl") return pl_settings_support_text(inputs)
	if (locale === "pt") return pt_settings_support_text(inputs)
	if (locale === "ru") return ru_settings_support_text(inputs)
	if (locale === "sv") return sv_settings_support_text(inputs)
	if (locale === "tr") return tr_settings_support_text(inputs)
	if (locale === "zh") return zh_settings_support_text(inputs)
	if (locale === "ja") return ja_settings_support_text(inputs)
	return en_settings_support_text(inputs)
});
