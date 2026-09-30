/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Settings_Featured_Badges_TextInputs */

const en_settings_featured_badges_text = /** @type {(inputs: Settings_Featured_Badges_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Choose up to ${i?.max} earned badges for the header of your profile.`)
};

const es_settings_featured_badges_text = /** @type {(inputs: Settings_Featured_Badges_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Elige hasta ${i?.max} insignias conseguidas para la cabecera de tu perfil.`)
};

const de_settings_featured_badges_text = /** @type {(inputs: Settings_Featured_Badges_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wähle bis zu ${i?.max} verdiente Abzeichen für den Kopf deines Profils.`)
};

const fr_settings_featured_badges_text = /** @type {(inputs: Settings_Featured_Badges_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Choisis jusqu’à ${i?.max} badges obtenus pour l’en-tête de ton profil.`)
};

const it_settings_featured_badges_text = /** @type {(inputs: Settings_Featured_Badges_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scegli fino a ${i?.max} distintivi ottenuti per l’intestazione del tuo profilo.`)
};

const nl_settings_featured_badges_text = /** @type {(inputs: Settings_Featured_Badges_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kies tot ${i?.max} verdiende badges voor de kop van je profiel.`)
};

const pl_settings_featured_badges_text = /** @type {(inputs: Settings_Featured_Badges_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wybierz do ${i?.max} zdobytych odznak do nagłówka profilu.`)
};

const pt_settings_featured_badges_text = /** @type {(inputs: Settings_Featured_Badges_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Escolha até ${i?.max} insígnias conquistadas para o cabeçalho do seu perfil.`)
};

const ru_settings_featured_badges_text = /** @type {(inputs: Settings_Featured_Badges_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Выберите до ${i?.max} полученных значков для шапки профиля.`)
};

const sv_settings_featured_badges_text = /** @type {(inputs: Settings_Featured_Badges_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Välj upp till ${i?.max} intjänade märken för profilens sidhuvud.`)
};

const tr_settings_featured_badges_text = /** @type {(inputs: Settings_Featured_Badges_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Profil başlığın için kazandığın en fazla ${i?.max} rozeti seç.`)
};

const zh_settings_featured_badges_text = /** @type {(inputs: Settings_Featured_Badges_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最多选择 ${i?.max} 个已获得的徽章展示在个人资料顶部。`)
};

const ja_settings_featured_badges_text = /** @type {(inputs: Settings_Featured_Badges_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`プロフィールのヘッダーに表示する獲得済みバッジを最大 ${i?.max} 個選べます。`)
};

/**
* | output |
* | --- |
* | "Choose up to {max} earned badges for the header of your profile." |
*
* @param {Settings_Featured_Badges_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_featured_badges_text = /** @type {((inputs: Settings_Featured_Badges_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Featured_Badges_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_featured_badges_text(inputs)
	if (locale === "de") return de_settings_featured_badges_text(inputs)
	if (locale === "fr") return fr_settings_featured_badges_text(inputs)
	if (locale === "it") return it_settings_featured_badges_text(inputs)
	if (locale === "nl") return nl_settings_featured_badges_text(inputs)
	if (locale === "pl") return pl_settings_featured_badges_text(inputs)
	if (locale === "pt") return pt_settings_featured_badges_text(inputs)
	if (locale === "ru") return ru_settings_featured_badges_text(inputs)
	if (locale === "sv") return sv_settings_featured_badges_text(inputs)
	if (locale === "tr") return tr_settings_featured_badges_text(inputs)
	if (locale === "zh") return zh_settings_featured_badges_text(inputs)
	if (locale === "ja") return ja_settings_featured_badges_text(inputs)
	return en_settings_featured_badges_text(inputs)
});
