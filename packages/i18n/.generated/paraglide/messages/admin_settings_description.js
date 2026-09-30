/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Settings_DescriptionInputs */

const en_admin_settings_description = /** @type {(inputs: Admin_Settings_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature flags, rate limits, ads and moderation templates. Every change is validated by the API and logged.`)
};

const es_admin_settings_description = /** @type {(inputs: Admin_Settings_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature flags, límites de uso, anuncios publicitarios y plantillas de moderación. La API valida y registra cada cambio.`)
};

const de_admin_settings_description = /** @type {(inputs: Admin_Settings_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature-Flags, Ratenlimits, Werbung und Moderationsvorlagen. Jede Änderung wird von der API geprüft und protokolliert.`)
};

const fr_admin_settings_description = /** @type {(inputs: Admin_Settings_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature flags, limites de débit, publicité et modèles de modération. Chaque changement est validé par l’API et journalisé.`)
};

const it_admin_settings_description = /** @type {(inputs: Admin_Settings_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature flag, limiti di frequenza, pubblicità e modelli di moderazione. Ogni modifica viene convalidata dall’API e registrata.`)
};

const nl_admin_settings_description = /** @type {(inputs: Admin_Settings_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature flags, rate limits, advertenties en moderatiesjablonen. De API controleert en registreert elke wijziging.`)
};

const pl_admin_settings_description = /** @type {(inputs: Admin_Settings_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flagi funkcji, limity żądań, reklamy i szablony moderacji. API sprawdza i zapisuje w dzienniku każdą zmianę.`)
};

const pt_admin_settings_description = /** @type {(inputs: Admin_Settings_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feature flags, limites de requisições, anúncios e modelos de moderação. A API valida e registra cada alteração.`)
};

const ru_admin_settings_description = /** @type {(inputs: Admin_Settings_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Флаги функций, лимиты запросов, реклама и шаблоны модерации. API проверяет и записывает в журнал каждое изменение.`)
};

const sv_admin_settings_description = /** @type {(inputs: Admin_Settings_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funktionsflaggor, begränsningar, annonser och modereringsmallar. API:et validerar och loggar varje ändring.`)
};

const tr_admin_settings_description = /** @type {(inputs: Admin_Settings_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özellik bayrakları, istek sınırları, reklamlar ve moderasyon şablonları. API her değişikliği doğrular ve kaydeder.`)
};

const zh_admin_settings_description = /** @type {(inputs: Admin_Settings_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`功能开关、请求限制、广告和审核模板。每项更改都会经 API 验证并记录。`)
};

const ja_admin_settings_description = /** @type {(inputs: Admin_Settings_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`機能フラグ、リクエスト制限、広告、モデレーションのテンプレート。変更はすべて API が検証して記録します。`)
};

/**
* | output |
* | --- |
* | "Feature flags, rate limits, ads and moderation templates. Every change is validated by the API and logged." |
*
* @param {Admin_Settings_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_settings_description = /** @type {((inputs?: Admin_Settings_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Settings_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_settings_description(inputs)
	if (locale === "de") return de_admin_settings_description(inputs)
	if (locale === "fr") return fr_admin_settings_description(inputs)
	if (locale === "it") return it_admin_settings_description(inputs)
	if (locale === "nl") return nl_admin_settings_description(inputs)
	if (locale === "pl") return pl_admin_settings_description(inputs)
	if (locale === "pt") return pt_admin_settings_description(inputs)
	if (locale === "ru") return ru_admin_settings_description(inputs)
	if (locale === "sv") return sv_admin_settings_description(inputs)
	if (locale === "tr") return tr_admin_settings_description(inputs)
	if (locale === "zh") return zh_admin_settings_description(inputs)
	if (locale === "ja") return ja_admin_settings_description(inputs)
	return en_admin_settings_description(inputs)
});
