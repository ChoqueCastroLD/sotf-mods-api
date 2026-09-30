/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ads_SavedInputs */

const en_admin_ads_saved = /** @type {(inputs: Admin_Ads_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad settings saved`)
};

const es_admin_ads_saved = /** @type {(inputs: Admin_Ads_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes de publicidad guardados`)
};

const de_admin_ads_saved = /** @type {(inputs: Admin_Ads_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werbeeinstellungen gespeichert`)
};

const fr_admin_ads_saved = /** @type {(inputs: Admin_Ads_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réglages publicitaires enregistrés`)
};

const it_admin_ads_saved = /** @type {(inputs: Admin_Ads_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impostazioni pubblicitarie salvate`)
};

const nl_admin_ads_saved = /** @type {(inputs: Admin_Ads_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Advertentie-instellingen opgeslagen`)
};

const pl_admin_ads_saved = /** @type {(inputs: Admin_Ads_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano ustawienia reklam`)
};

const pt_admin_ads_saved = /** @type {(inputs: Admin_Ads_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações de anúncios salvas`)
};

const ru_admin_ads_saved = /** @type {(inputs: Admin_Ads_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки рекламы сохранены`)
};

const sv_admin_ads_saved = /** @type {(inputs: Admin_Ads_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonsinställningar sparade`)
};

const tr_admin_ads_saved = /** @type {(inputs: Admin_Ads_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklam ayarları kaydedildi`)
};

const zh_admin_ads_saved = /** @type {(inputs: Admin_Ads_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`广告设置已保存`)
};

const ja_admin_ads_saved = /** @type {(inputs: Admin_Ads_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`広告の設定を保存しました`)
};

/**
* | output |
* | --- |
* | "Ad settings saved" |
*
* @param {Admin_Ads_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ads_saved = /** @type {((inputs?: Admin_Ads_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ads_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ads_saved(inputs)
	if (locale === "de") return de_admin_ads_saved(inputs)
	if (locale === "fr") return fr_admin_ads_saved(inputs)
	if (locale === "it") return it_admin_ads_saved(inputs)
	if (locale === "nl") return nl_admin_ads_saved(inputs)
	if (locale === "pl") return pl_admin_ads_saved(inputs)
	if (locale === "pt") return pt_admin_ads_saved(inputs)
	if (locale === "ru") return ru_admin_ads_saved(inputs)
	if (locale === "sv") return sv_admin_ads_saved(inputs)
	if (locale === "tr") return tr_admin_ads_saved(inputs)
	if (locale === "zh") return zh_admin_ads_saved(inputs)
	if (locale === "ja") return ja_admin_ads_saved(inputs)
	return en_admin_ads_saved(inputs)
});
