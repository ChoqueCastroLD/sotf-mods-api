/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Show_Kits_HintInputs */

const en_settings_show_kits_hint = /** @type {(inputs: Settings_Show_Kits_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Kits tab of your profile (private kits are never shown).`)
};

const es_settings_show_kits_hint = /** @type {(inputs: Settings_Show_Kits_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La pestaña Kits de tu perfil (los kits privados nunca se muestran).`)
};

const de_settings_show_kits_hint = /** @type {(inputs: Settings_Show_Kits_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Kits-Tab deines Profils (private Kits werden nie gezeigt).`)
};

const fr_settings_show_kits_hint = /** @type {(inputs: Settings_Show_Kits_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’onglet Kits de votre profil (les kits privés ne sont jamais affichés).`)
};

const it_settings_show_kits_hint = /** @type {(inputs: Settings_Show_Kits_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La scheda Kit del tuo profilo (i kit privati non vengono mai mostrati).`)
};

const nl_settings_show_kits_hint = /** @type {(inputs: Settings_Show_Kits_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het tabblad Kits op je profiel (privékits worden nooit getoond).`)
};

const pl_settings_show_kits_hint = /** @type {(inputs: Settings_Show_Kits_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karta Zestawy na twoim profilu (prywatne zestawy nigdy nie są pokazywane).`)
};

const pt_settings_show_kits_hint = /** @type {(inputs: Settings_Show_Kits_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A aba Kits do seu perfil (kits privados nunca aparecem).`)
};

const ru_settings_show_kits_hint = /** @type {(inputs: Settings_Show_Kits_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вкладка «Наборы» в профиле (приватные наборы не показываются никогда).`)
};

const sv_settings_show_kits_hint = /** @type {(inputs: Settings_Show_Kits_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fliken Kit på din profil (privata kit visas aldrig).`)
};

const tr_settings_show_kits_hint = /** @type {(inputs: Settings_Show_Kits_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profilindeki Kitler sekmesi (özel kitler asla gösterilmez).`)
};

const zh_settings_show_kits_hint = /** @type {(inputs: Settings_Show_Kits_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个人资料中的“套装”标签页（私人套装永远不会显示）。`)
};

const ja_settings_show_kits_hint = /** @type {(inputs: Settings_Show_Kits_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロフィールの「キット」タブ（非公開キットは表示されません）。`)
};

/**
* | output |
* | --- |
* | "The Kits tab of your profile (private kits are never shown)." |
*
* @param {Settings_Show_Kits_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_show_kits_hint = /** @type {((inputs?: Settings_Show_Kits_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Show_Kits_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_show_kits_hint(inputs)
	if (locale === "de") return de_settings_show_kits_hint(inputs)
	if (locale === "fr") return fr_settings_show_kits_hint(inputs)
	if (locale === "it") return it_settings_show_kits_hint(inputs)
	if (locale === "nl") return nl_settings_show_kits_hint(inputs)
	if (locale === "pl") return pl_settings_show_kits_hint(inputs)
	if (locale === "pt") return pt_settings_show_kits_hint(inputs)
	if (locale === "ru") return ru_settings_show_kits_hint(inputs)
	if (locale === "sv") return sv_settings_show_kits_hint(inputs)
	if (locale === "tr") return tr_settings_show_kits_hint(inputs)
	if (locale === "zh") return zh_settings_show_kits_hint(inputs)
	if (locale === "ja") return ja_settings_show_kits_hint(inputs)
	return en_settings_show_kits_hint(inputs)
});
