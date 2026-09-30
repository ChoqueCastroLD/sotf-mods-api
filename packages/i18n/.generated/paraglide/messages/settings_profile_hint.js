/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Profile_HintInputs */

const en_settings_profile_hint = /** @type {(inputs: Settings_Profile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Photo, banner, name, bio, links and pinned mods.`)
};

const es_settings_profile_hint = /** @type {(inputs: Settings_Profile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto, banner, nombre, biografía, enlaces y mods fijados.`)
};

const de_settings_profile_hint = /** @type {(inputs: Settings_Profile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto, Banner, Name, Bio, Links und angeheftete Mods.`)
};

const fr_settings_profile_hint = /** @type {(inputs: Settings_Profile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Photo, bannière, nom, bio, liens et mods épinglés.`)
};

const it_settings_profile_hint = /** @type {(inputs: Settings_Profile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto, banner, nome, bio, link e mod in evidenza.`)
};

const nl_settings_profile_hint = /** @type {(inputs: Settings_Profile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto, banner, naam, bio, links en vastgezette mods.`)
};

const pl_settings_profile_hint = /** @type {(inputs: Settings_Profile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zdjęcie, baner, nazwa, bio, linki i przypięte mody.`)
};

const pt_settings_profile_hint = /** @type {(inputs: Settings_Profile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto, banner, nome, bio, links e mods fixados.`)
};

const ru_settings_profile_hint = /** @type {(inputs: Settings_Profile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фото, баннер, имя, о себе, ссылки и закреплённые моды.`)
};

const sv_settings_profile_hint = /** @type {(inputs: Settings_Profile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto, banner, namn, bio, länkar och fästa moddar.`)
};

const tr_settings_profile_hint = /** @type {(inputs: Settings_Profile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fotoğraf, afiş, ad, biyografi, bağlantılar ve sabitlenmiş modlar.`)
};

const zh_settings_profile_hint = /** @type {(inputs: Settings_Profile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`头像、横幅、名称、简介、链接和置顶模组。`)
};

const ja_settings_profile_hint = /** @type {(inputs: Settings_Profile_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`写真、バナー、名前、自己紹介、リンク、固定したMOD。`)
};

/**
* | output |
* | --- |
* | "Photo, banner, name, bio, links and pinned mods." |
*
* @param {Settings_Profile_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_profile_hint = /** @type {((inputs?: Settings_Profile_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Profile_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_profile_hint(inputs)
	if (locale === "de") return de_settings_profile_hint(inputs)
	if (locale === "fr") return fr_settings_profile_hint(inputs)
	if (locale === "it") return it_settings_profile_hint(inputs)
	if (locale === "nl") return nl_settings_profile_hint(inputs)
	if (locale === "pl") return pl_settings_profile_hint(inputs)
	if (locale === "pt") return pt_settings_profile_hint(inputs)
	if (locale === "ru") return ru_settings_profile_hint(inputs)
	if (locale === "sv") return sv_settings_profile_hint(inputs)
	if (locale === "tr") return tr_settings_profile_hint(inputs)
	if (locale === "zh") return zh_settings_profile_hint(inputs)
	if (locale === "ja") return ja_settings_profile_hint(inputs)
	return en_settings_profile_hint(inputs)
});
